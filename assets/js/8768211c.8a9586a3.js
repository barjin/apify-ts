"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4935:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>p,toc:()=>u,default:()=>c});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"system-status",title:"SystemStatus",original_id:"system-status"},i=void 0,p={unversionedId:"api/system-status",id:"version-2.0.6/api/system-status",title:"SystemStatus",description:"Provides a simple interface to reading system status from a Snapshotter instance. It only exposes two functions",source:"@site/versioned_docs/version-2.0.6/api/SystemStatus.md",sourceDirName:"api",slug:"/api/system-status",permalink:"/apify-ts/docs/api/system-status",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1645803484,formattedLastUpdatedAt:"2/25/2022",frontMatter:{id:"system-status",title:"SystemStatus",original_id:"system-status"},sidebar:"version-2.0.6/docs",previous:{title:"Snapshotter",permalink:"/apify-ts/docs/api/snapshotter"},next:{title:"Request",permalink:"/apify-ts/docs/api/request"}},u=[{value:"<code>new SystemStatus([options])</code>",id:"new-systemstatusoptions",children:[],level:2},{value:"<code>systemStatus.getCurrentStatus()</code>",id:"systemstatusgetcurrentstatus",children:[],level:2},{value:"<code>systemStatus.getHistoricalStatus()</code>",id:"systemstatusgethistoricalstatus",children:[],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"systemstatus"}),(0,r.kt)("p",null,"Provides a simple interface to reading system status from a ",(0,r.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshotter"))," instance. It only exposes two functions\n",(0,r.kt)("a",{parentName:"p",href:"../api/system-status#getcurrentstatus",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatus.getCurrentStatus()"))," and\n",(0,r.kt)("a",{parentName:"p",href:"../api/system-status#gethistoricalstatus",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatus.getHistoricalStatus()")),". The system status is calculated using a weighted average of\noverloaded messages in the snapshots, with the weights being the time intervals between the snapshots. Each resource is calculated separately and the\nsystem is overloaded whenever at least one resource is overloaded. The class is used by the ",(0,r.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/system-status#getcurrentstatus",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatus.getCurrentStatus()"))," returns a boolean that represents the current status of the system. The\nlength of the current timeframe in seconds is configurable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentHistorySecs")," option and represents the max age of snapshots to be considered\nfor the calculation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/system-status#gethistoricalstatus",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatus.getHistoricalStatus()"))," returns a boolean that represents the long-term status of the system.\nIt considers the full snapshot history available in the ",(0,r.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshotter"))," instance."),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"systemstatus"}),(0,r.kt)("h2",{id:"new-systemstatusoptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"new SystemStatus([options])")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("a",{parentName:"li",href:"../typedefs/system-status-options",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatusOptions"))," - All ",(0,r.kt)("inlineCode",{parentName:"li"},"SystemStatus")," configuration options.")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"getcurrentstatus"}),(0,r.kt)("h2",{id:"systemstatusgetcurrentstatus"},(0,r.kt)("inlineCode",{parentName:"h2"},"systemStatus.getCurrentStatus()")),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/system-info",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemInfo"))," object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    isSystemIdle: Boolean,\n    memInfo: Object,\n    eventLoopInfo: Object,\n    cpuInfo: Object\n}\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"isSystemIdle")," property is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the system has been overloaded in the last ",(0,r.kt)("inlineCode",{parentName:"p"},"options.currentHistorySecs")," seconds, and ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\notherwise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../typedefs/system-info",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemInfo"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"gethistoricalstatus"}),(0,r.kt)("h2",{id:"systemstatusgethistoricalstatus"},(0,r.kt)("inlineCode",{parentName:"h2"},"systemStatus.getHistoricalStatus()")),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/system-info",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemInfo"))," object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    isSystemIdle: Boolean,\n    memInfo: Object,\n    eventLoopInfo: Object,\n    cpuInfo: Object\n}\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"isSystemIdle")," property is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the system has been overloaded in the full history of the ",(0,r.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshotter")),"\n(which is configurable in the ",(0,r.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshotter")),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," otherwise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../typedefs/system-info",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemInfo"))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);