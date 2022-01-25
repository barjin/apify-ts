"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9682:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>d,toc:()=>p,default:()=>c});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],s={id:"statistic-state",title:"StatisticState",original_id:"statistic-state"},o=void 0,d={unversionedId:"typedefs/statistic-state",id:"version-2.0.6/typedefs/statistic-state",title:"StatisticState",description:"Contains the statistics state",source:"@site/versioned_docs/version-2.0.6/typedefs/StatisticState.md",sourceDirName:"typedefs",slug:"/typedefs/statistic-state",permalink:"/apify-ts/docs/typedefs/statistic-state",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643109547,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"statistic-state",title:"StatisticState",original_id:"statistic-state"}},p=[{value:"Properties",id:"properties",children:[{value:"<code>requestsFinished</code>",id:"requestsfinished",children:[],level:3},{value:"<code>requestsFailed</code>",id:"requestsfailed",children:[],level:3},{value:"<code>requestsRetries</code>",id:"requestsretries",children:[],level:3},{value:"<code>requestsFailedPerMinute</code>",id:"requestsfailedperminute",children:[],level:3},{value:"<code>requestsFinishedPerMinute</code>",id:"requestsfinishedperminute",children:[],level:3},{value:"<code>requestMinDurationMillis</code>",id:"requestmindurationmillis",children:[],level:3},{value:"<code>requestMaxDurationMillis</code>",id:"requestmaxdurationmillis",children:[],level:3},{value:"<code>requestTotalFailedDurationMillis</code>",id:"requesttotalfaileddurationmillis",children:[],level:3},{value:"<code>requestTotalFinishedDurationMillis</code>",id:"requesttotalfinisheddurationmillis",children:[],level:3},{value:"<code>crawlerStartedAt</code>",id:"crawlerstartedat",children:[],level:3},{value:"<code>crawlerFinishedAt</code>",id:"crawlerfinishedat",children:[],level:3},{value:"<code>crawlerRuntimeMillis</code>",id:"crawlerruntimemillis",children:[],level:3},{value:"<code>statsPersistedAt</code>",id:"statspersistedat",children:[],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"statisticstate"}),(0,a.kt)("p",null,"Contains the statistics state"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"requestsfinished"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsFinished")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestsfailed"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsFailed")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestsretries"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsRetries")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestsfailedperminute"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsFailedPerMinute")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestsfinishedperminute"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestsFinishedPerMinute")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestmindurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestMinDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestmaxdurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestMaxDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requesttotalfaileddurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestTotalFailedDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requesttotalfinisheddurationmillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestTotalFinishedDurationMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crawlerstartedat"},(0,a.kt)("inlineCode",{parentName:"h3"},"crawlerStartedAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"null")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crawlerfinishedat"},(0,a.kt)("inlineCode",{parentName:"h3"},"crawlerFinishedAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"null")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crawlerruntimemillis"},(0,a.kt)("inlineCode",{parentName:"h3"},"crawlerRuntimeMillis")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"statspersistedat"},(0,a.kt)("inlineCode",{parentName:"h3"},"statsPersistedAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"null")),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);