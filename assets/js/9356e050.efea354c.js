"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const s={title:"End Users",sidebar_label:"End Users",sidebar_position:6,slug:"/middleware/ics29-fee/end-users"},a="For end users",o={unversionedId:"middleware/ics29-fee/end-users",id:"version-v4.4.x/middleware/ics29-fee/end-users",title:"End Users",description:"Learn how to incentivize IBC packets using the ICS29 Fee Middleware module.",source:"@site/versioned_docs/version-v4.4.x/03-middleware/01-ics29-fee/06-end-users.md",sourceDirName:"03-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/end-users",permalink:"/v4.4.x/middleware/ics29-fee/end-users",draft:!1,tags:[],version:"v4.4.x",sidebarPosition:6,frontMatter:{title:"End Users",sidebar_label:"End Users",sidebar_position:6,slug:"/middleware/ics29-fee/end-users"},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/v4.4.x/middleware/ics29-fee/events"},next:{title:"Support transfer of coins whose base denom contains slashes",permalink:"/v4.4.x/migrations/support-denoms-with-slashes"}},l={},d=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Summary",id:"summary",level:2},{value:"CLI Users",id:"cli-users",level:2},{value:"Client developers",id:"client-developers",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"for-end-users"},"For end users"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Learn how to incentivize IBC packets using the ICS29 Fee Middleware module. ")),(0,i.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v4.4.x/middleware/ics29-fee/overview"},"Fee Middleware"))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Different types of end users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CLI users who want to manually incentivize IBC packets"),(0,i.kt)("li",{parentName:"ul"},"Client developers")),(0,i.kt)("p",null,"The Fee Middleware module allows end users to add a 'tip' to each IBC packet which will incentivize relayer operators to relay packets between chains. gRPC endpoints are exposed for client developers as well as a simple CLI for manually incentivizing IBC packets."),(0,i.kt)("h2",{id:"cli-users"},"CLI Users"),(0,i.kt)("p",null,"For an in depth guide on how to use the ICS29 Fee Middleware module using the CLI please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/wiki/Fee-enabled-fungible-token-transfers#asynchronous-incentivization-of-a-fungible-token-transfer"},"wiki")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc-go")," repo."),(0,i.kt)("h2",{id:"client-developers"},"Client developers"),(0,i.kt)("p",null,"Client developers can read more about the relevant ICS29 message types in the ",(0,i.kt)("a",{parentName:"p",href:"/v4.4.x/middleware/ics29-fee/msgs"},"Fee messages section"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," is a useful client library for signing and broadcasting Cosmos SDK messages."))}p.isMDXComponent=!0}}]);