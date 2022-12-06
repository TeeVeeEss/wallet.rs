import type { OutputId } from './output';

export interface ParticipationOverview {
    participations: [EventId, [OutputId, TrackedParticipationOverview]];
}

export interface TrackedParticipationOverview {
    blockId: string;
    amount: string;
    startMilestoneIndex: number;
    endMilestoneIndex: number;
}

export interface Event {
    id: EventId;
    data: EventData;
}

export type EventId = string;

export interface EventStatus {
    milestoneIndex: number;
    status: string;
    questions?: Answer[];
    checksum: string;
}

interface EventData {
    name: string;
    milestoneIndexCommence: number;
    milestoneIndexStart: number;
    milestoneIndexEnd: number;
    payload: EventPayload;
    additionalInfo: string;
}

type EventPayload = VotingEventPayload | StakingEventPayload;

interface VotingEventPayload {
    type: number;
    questions: Question[];
}

interface StakingEventPayload {
    type: number;
    text: string;
    symbol: string;
    numerator: string;
    denominator: string;
    requiredMinimumRewards: string;
    additionalInfo: string;
}

interface Question {
    text: string;
    answers: Answer[];
    additionalInfo: string;
}

interface Answer {
    value: number;
    text: string;
    additionalInfo: string;
}