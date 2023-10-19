"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/light-clients/overview"},o="Overview",l={unversionedId:"light-clients/developer-guide/overview",id:"version-v7.3.x/light-clients/developer-guide/overview",title:"Overview",description:"Learn how to build IBC light client modules and fulfill the interfaces required to integrate with core IBC.",source:"@site/versioned_docs/version-v7.3.x/03-light-clients/01-developer-guide/01-overview.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/overview",permalink:"/v7.3.x/ibc/light-clients/overview",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/light-clients/overview"},sidebar:"defaultSidebar",previous:{title:"Keeper API",permalink:"/v7.3.x/apps/interchain-accounts/legacy/keeper-api"},next:{title:"Client State interface",permalink:"/v7.3.x/ibc/light-clients/client-state"}},s={},c=[{value:"Concepts and vocabulary",id:"concepts-and-vocabulary",level:2},{value:"<code>ClientState</code>",id:"clientstate",level:3},{value:"<code>ConsensusState</code>",id:"consensusstate",level:3},{value:"<code>Height</code>",id:"height",level:3},{value:"<code>ClientMessage</code>",id:"clientmessage",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn how to build IBC light client modules and fulfill the interfaces required to integrate with core IBC.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v7.3.x/ibc/overview"},"IBC Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tutorials.cosmos.network/academy/3-ibc/4-clients.html"},"IBC Transport, Authentication, and Ordering Layer - Clients")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-002-client-semantics"},"ICS-002 Client Semantics")))),(0,a.kt)("p",null,"IBC uses light clients in order to provide trust-minimized interoperability between sovereign blockchains. Light clients operate under a strict set of rules which provide security guarantees for state updates and facilitate the ability to verify the state of a remote blockchain using merkle proofs."),(0,a.kt)("p",null,"The following aims to provide a high level IBC light client module developer guide. Access to IBC light clients are gated by the core IBC ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgServer")," which utilizes the abstractions set by the ",(0,a.kt)("inlineCode",{parentName:"p"},"02-client")," submodule to call into a light client module. A light client module developer is only required to implement a set interfaces as defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/core/exported")," package of ibc-go."),(0,a.kt)("p",null,"A light client module developer should be concerned with three main interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#clientstate"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientState"))," encapsulates the light client implementation and its semantics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consensusstate"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsensusState"))," tracks consensus data used for verification of client updates, misbehaviour detection and proof verification of counterparty state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#clientmessage"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientMessage"))," used for submitting block headers for client updates and submission of misbehaviour evidence using conflicting headers.")),(0,a.kt)("p",null,"Throughout this guide the ",(0,a.kt)("inlineCode",{parentName:"p"},"07-tendermint")," light client module may be referred to as a reference example."),(0,a.kt)("h2",{id:"concepts-and-vocabulary"},"Concepts and vocabulary"),(0,a.kt)("h3",{id:"clientstate"},(0,a.kt)("inlineCode",{parentName:"h3"},"ClientState")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," is a term used to define the data structure which encapsulates opaque light client state. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," contains all the information needed to verify a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," and perform membership and non-membership proof verification of counterparty state. This includes properties that refer to the remote state machine, the light client type and the specific light client instance."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constraints used for client updates."),(0,a.kt)("li",{parentName:"ul"},"Constraints used for misbehaviour detection."),(0,a.kt)("li",{parentName:"ul"},"Constraints used for state verification."),(0,a.kt)("li",{parentName:"ul"},"Constraints used for client upgrades.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," type maintained within the light client module ",(0,a.kt)("em",{parentName:"p"},"must")," implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L36"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientState"))," interface defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"core/modules/exported/client.go"),".\nThe methods which make up this interface are detailed at a more granular level in the ",(0,a.kt)("a",{parentName:"p",href:"/v7.3.x/ibc/light-clients/client-state"},"ClientState section of this guide"),"."),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"07-tendermint")," light client module's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/proto/ibc/lightclients/tendermint/v1/tendermint.proto#L18"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientState")," definition")," containing information such as chain ID, status, latest height, unbonding period and proof specifications."),(0,a.kt)("h3",{id:"consensusstate"},(0,a.kt)("inlineCode",{parentName:"h3"},"ConsensusState")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState")," is a term used to define the data structure which encapsulates consensus data at a particular point in time, i.e. a unique height or sequence number of a state machine. There must exist a single trusted ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState")," for each height. ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState")," generally contains a trusted root, validator set information and timestamp."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"07-tendermint")," light client module defines a trusted root which is used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," to perform verification of membership and non-membership commitment proofs, as well as the next validator set hash used for verifying headers can be trusted in client updates."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState")," type maintained within the light client module ",(0,a.kt)("em",{parentName:"p"},"must")," implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L134"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsensusState"))," interface defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/core/exported/client.go"),".\nThe methods which make up this interface are detailed at a more granular level in the ",(0,a.kt)("a",{parentName:"p",href:"/v7.3.x/ibc/light-clients/consensus-state"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsensusState")," section of this guide"),"."),(0,a.kt)("h3",{id:"height"},(0,a.kt)("inlineCode",{parentName:"h3"},"Height")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Height")," defines a monotonically increasing sequence number which provides ordering of consensus state data persisted through client updates.\nIBC light client module developers are expected to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/proto/ibc/core/client/v1/client.proto#L89"},"concrete type")," provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"02-client")," submodule. This implements the expectations required by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/core/exported/client.go#L157"},(0,a.kt)("inlineCode",{parentName:"a"},"Height"))," interface defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/core/exported/client.go"),"."),(0,a.kt)("h3",{id:"clientmessage"},(0,a.kt)("inlineCode",{parentName:"h3"},"ClientMessage")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," refers to the interface type ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L148"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientMessage"))," used for performing updates to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," stored on chain.\nThis may be any concrete type which produces a change in state to the IBC client when verified."),(0,a.kt)("p",null,"The following are considered as valid update scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A block header which when verified inserts a new ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsensusState")," at a unique height."),(0,a.kt)("li",{parentName:"ul"},"A batch of block headers which when verified inserts ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsensusState")," instances for ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," unique heights."),(0,a.kt)("li",{parentName:"ul"},"Evidence of misbehaviour provided by two conflicting block headers.")),(0,a.kt)("p",null,"Learn more in the ",(0,a.kt)("a",{parentName:"p",href:"/v7.3.x/ibc/light-clients/updates-and-misbehaviour"},"Handling update and misbehaviour")," section."))}u.isMDXComponent=!0}}]);