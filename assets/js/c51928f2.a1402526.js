"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4215:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>d,default:()=>u});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"session-options",title:"SessionOptions",original_id:"session-options"},l=void 0,p={unversionedId:"typedefs/session-options",id:"version-2.0.6/typedefs/session-options",title:"SessionOptions",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/SessionOptions.md",sourceDirName:"typedefs",slug:"/typedefs/session-options",permalink:"/apify-ts/docs/typedefs/session-options",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1645026699,formattedLastUpdatedAt:"2/16/2022",frontMatter:{id:"session-options",title:"SessionOptions",original_id:"session-options"},sidebar:"version-2.0.6/docs",previous:{title:"RequestAsBrowserOptions",permalink:"/apify-ts/docs/typedefs/request-as-browser-options"},next:{title:"SessionPoolOptions",permalink:"/apify-ts/docs/typedefs/session-pool-options"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>maxAgeSecs</code>",id:"maxagesecs",children:[],level:3},{value:"<code>userData</code>",id:"userdata",children:[],level:3},{value:"<code>maxErrorScore</code>",id:"maxerrorscore",children:[],level:3},{value:"<code>errorScoreDecrement</code>",id:"errorscoredecrement",children:[],level:3},{value:"<code>createdAt</code>",id:"createdat",children:[],level:3},{value:"<code>expiresAt</code>",id:"expiresat",children:[],level:3},{value:"<code>usageCount</code>",id:"usagecount",children:[],level:3},{value:"<code>errorCount</code>",id:"errorcount",children:[],level:3},{value:"<code>maxUsageCount</code>",id:"maxusagecount",children:[],level:3},{value:"<code>sessionPool</code>",id:"sessionpool",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"sessionoptions"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h3"},"id")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Id of session used for generating fingerprints. It is used as proxy session name."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxagesecs"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxAgeSecs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ",(0,i.kt)("code",null," = 3000")),(0,i.kt)("p",null,"Number of seconds after which the session is considered as expired."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"userData")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,i.kt)("p",null,"Object where custom user data can be stored. For example custom headers."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxerrorscore"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxErrorScore")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ",(0,i.kt)("code",null," = 3")),(0,i.kt)("p",null,"Maximum number of marking session as blocked usage. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"errorScore")," reaches the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxErrorScore")," session is marked as block and it is thrown away.\nIt starts at 0. Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"markBad")," function increases the ",(0,i.kt)("inlineCode",{parentName:"p"},"errorScore")," by 1. Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"markGood")," will decrease the ",(0,i.kt)("inlineCode",{parentName:"p"},"errorScore")," by\n",(0,i.kt)("inlineCode",{parentName:"p"},"errorScoreDecrement")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errorscoredecrement"},(0,i.kt)("inlineCode",{parentName:"h3"},"errorScoreDecrement")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ",(0,i.kt)("code",null," = 0.5")),(0,i.kt)("p",null,"It is used for healing the session. For example: if your session is marked bad two times, but it is successful on the third attempt it's errorScore is\ndecremented by this number."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createdat"},(0,i.kt)("inlineCode",{parentName:"h3"},"createdAt")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("p",null,"Date of creation."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"expiresat"},(0,i.kt)("inlineCode",{parentName:"h3"},"expiresAt")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("p",null,"Date of expiration."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usagecount"},(0,i.kt)("inlineCode",{parentName:"h3"},"usageCount")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ",(0,i.kt)("code",null," = 0")),(0,i.kt)("p",null,"Indicates how many times the session has been used."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errorcount"},(0,i.kt)("inlineCode",{parentName:"h3"},"errorCount")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ",(0,i.kt)("code",null," = 0")),(0,i.kt)("p",null,"Indicates how many times the session is marked bad."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxusagecount"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxUsageCount")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ",(0,i.kt)("code",null," = 50")),(0,i.kt)("p",null,"Session should be used only a limited amount of times. This number indicates how many times the session is going to be used, before it is thrown away."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sessionpool"},(0,i.kt)("inlineCode",{parentName:"h3"},"sessionPool")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"SessionPool"))),(0,i.kt)("p",null,"SessionPool instance. Session will emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionRetired")," event on this instance."),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);