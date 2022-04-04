(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8380],{6298:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={},l=void 0,u={unversionedId:"libraries/java/api/AccountBalance",id:"libraries/java/api/AccountBalance",isDocsHomePage:!1,title:"AccountBalance",description:"Account balance information.",source:"@site/docs/libraries/java/api/AccountBalance.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/AccountBalance",permalink:"/docs/libraries/java/api/AccountBalance",editUrl:"https://github.com/iotaledger/wallet.rs/tree/dev/documentation/docs/libraries/java/api/AccountBalance.mdx",version:"current",frontMatter:{}},s=[{value:"getTotal(): long",id:"gettotal-long",children:[]},{value:"getAvailable(): long",id:"getavailable-long",children:[]},{value:"getIncoming(): long",id:"getincoming-long",children:[]},{value:"getOutgoing(): long",id:"getoutgoing-long",children:[]}],p={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Account balance information."),(0,o.kt)("h3",{id:"gettotal-long"},"getTotal(): long"),(0,o.kt)("p",null,"Account's total balance."),(0,o.kt)("h3",{id:"getavailable-long"},"getAvailable(): long"),(0,o.kt)("p",null,"For example, if a user with 50i total account balance has made a message spending 20i,\nthe available balance should be (50i-30i) = 20i."),(0,o.kt)("h3",{id:"getincoming-long"},"getIncoming(): long"),(0,o.kt)("p",null,"Balances from message with ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming: true"),".\nNote that this may not be accurate since the node prunes the messags."),(0,o.kt)("h3",{id:"getoutgoing-long"},"getOutgoing(): long"),(0,o.kt)("p",null,"Balances from message with ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming: false"),".\nNote that this may not be accurate since the node prunes the messags."))}g.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,m=g["".concat(l,".").concat(f)]||g[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);