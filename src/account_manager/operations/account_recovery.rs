// Copyright 2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use std::collections::HashSet;

use crate::{account::handle::AccountHandle, account_manager::AccountManager};

impl AccountManager {
    /// Find accounts with unspent outputs
    /// `account_gap_limit` defines how many accounts without unspent outputs will be
    /// checked, if an account has unspent outputs, the counter is reset
    /// `address_gap_limit` defines how many addresses without unspent outputs will be checked in each account, if an
    /// address has unspent outputs, the counter is reset
    pub async fn recover_accounts(
        &self,
        account_gap_limit: u32,
        address_gap_limit: u32,
    ) -> crate::Result<Vec<AccountHandle>> {
        log::debug!("[recover_accounts]");
        let mut account_indexes_to_keep = HashSet::new();

        // Search for addresses in current accounts
        for account_handle in self.accounts.read().await.iter() {
            account_handle.search_addresses_with_funds(address_gap_limit).await?;
            let account_index = *account_handle.read().await.index();
            account_indexes_to_keep.insert(account_index);
        }

        // Count accounts with zero balances in a row
        let mut zero_outputs_accounts_in_row = 0;
        let mut generated_accounts = Vec::new();
        loop {
            log::debug!("[recover_accounts] generating new account");
            let new_account = self.create_account().finish().await?;
            let account_balance = new_account.search_addresses_with_funds(address_gap_limit).await?;
            generated_accounts.push((new_account, account_balance.clone()));
            if account_balance.total == 0 {
                zero_outputs_accounts_in_row += 1;
                if zero_outputs_accounts_in_row >= account_gap_limit {
                    break;
                }
            } else {
                // reset if we found an account with balance
                zero_outputs_accounts_in_row = 0;
            }
        }
        // iterate reversed to ignore all latest accounts that have no unspent outputs, but add all accounts that are
        // below one with unspent outputs
        let mut got_account_with_unspent_outputs = false;
        for (account_handle, account_balance) in generated_accounts.iter().rev() {
            if got_account_with_unspent_outputs || account_balance.total != 0 {
                let account_index = *account_handle.read().await.index();
                log::debug!("Found outputs with account {}", account_index);
                got_account_with_unspent_outputs = true;
                account_indexes_to_keep.insert(account_index);
            }
        }

        // remove accounts without balance
        let mut accounts = self.accounts.write().await;
        let mut new_accounts = Vec::new();
        for account_handle in accounts.iter() {
            let account_index = *account_handle.read().await.index();
            if account_indexes_to_keep.contains(&account_index) {
                new_accounts.push((account_index, account_handle.clone()));
            } else {
                // accounts are stored during syncing, delete the empty accounts again
                #[cfg(feature = "storage")]
                {
                    log::debug!("[recover_accounts] delete emtpy account {}", account_index);
                    self.storage_manager.lock().await.remove_account(account_index).await?;
                }
            }
        }
        new_accounts.sort_by_key(|(index, _acc)| *index);
        *accounts = new_accounts.into_iter().map(|(_, acc)| acc).collect();
        drop(accounts);

        Ok(self.accounts.read().await.clone())
    }
}