"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,y=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4770:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>d,default:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={id:"system-status-options",title:"SystemStatusOptions",original_id:"system-status-options"},l=void 0,p={unversionedId:"typedefs/system-status-options",id:"version-2.0.6/typedefs/system-status-options",isDocsHomePage:!1,title:"SystemStatusOptions",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/SystemStatusOptions.md",sourceDirName:"typedefs",slug:"/typedefs/system-status-options",permalink:"/apify-ts/docs/typedefs/system-status-options",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1638186822,formattedLastUpdatedAt:"11/29/2021",frontMatter:{id:"system-status-options",title:"SystemStatusOptions",original_id:"system-status-options"},sidebar:"version-2.0.6/docs",previous:{title:"StealthOptions",permalink:"/apify-ts/docs/typedefs/stealth-options"},next:{title:"CheerioHandlePage",permalink:"/apify-ts/docs/typedefs/cheerio-handle-page"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>currentHistorySecs</code>",id:"currenthistorysecs",children:[],level:3},{value:"<code>maxMemoryOverloadedRatio</code>",id:"maxmemoryoverloadedratio",children:[],level:3},{value:"<code>maxEventLoopOverloadedRatio</code>",id:"maxeventloopoverloadedratio",children:[],level:3},{value:"<code>maxCpuOverloadedRatio</code>",id:"maxcpuoverloadedratio",children:[],level:3},{value:"<code>maxClientOverloadedRatio</code>",id:"maxclientoverloadedratio",children:[],level:3},{value:"<code>snapshotter</code>",id:"snapshotter",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"systemstatusoptions"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"currenthistorysecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"currentHistorySecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 5")),(0,a.kt)("p",null,"Defines max age of snapshots used in the ",(0,a.kt)("a",{parentName:"p",href:"../api/system-status#getcurrentstatus",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SystemStatus.getCurrentStatus()"))," measurement."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxmemoryoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxMemoryOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.2")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in a memory sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxeventloopoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxEventLoopOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.6")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in an event loop sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxcpuoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxCpuOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.4")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in a CPU sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxclientoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxClientOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.3")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in a Client sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"snapshotter"},(0,a.kt)("inlineCode",{parentName:"h3"},"snapshotter")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshotter"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Snapshotter")," instance to be queried for ",(0,a.kt)("inlineCode",{parentName:"p"},"SystemStatus"),"."),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);