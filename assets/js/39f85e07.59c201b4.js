"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4049:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"session-state",title:"SessionState",original_id:"session-state"},s=void 0,p={unversionedId:"typedefs/session-state",id:"version-2.0.6/typedefs/session-state",title:"SessionState",description:"Persistable Session state.",source:"@site/versioned_docs/version-2.0.6/typedefs/SessionState.md",sourceDirName:"typedefs",slug:"/typedefs/session-state",permalink:"/apify-ts/docs/typedefs/session-state",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1643891133,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"session-state",title:"SessionState",original_id:"session-state"},sidebar:"version-2.0.6/docs",previous:{title:"RequestListState",permalink:"/apify-ts/docs/typedefs/request-list-state"},next:{title:"SocialHandles",permalink:"/apify-ts/docs/typedefs/social-handles"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>cookieJar</code>",id:"cookiejar",children:[],level:3},{value:"<code>userData</code>",id:"userdata",children:[],level:3},{value:"<code>errorScore</code>",id:"errorscore",children:[],level:3},{value:"<code>maxErrorScore</code>",id:"maxerrorscore",children:[],level:3},{value:"<code>errorScoreDecrement</code>",id:"errorscoredecrement",children:[],level:3},{value:"<code>usageCount</code>",id:"usagecount",children:[],level:3},{value:"<code>expiresAt</code>",id:"expiresat",children:[],level:3},{value:"<code>createdAt</code>",id:"createdat",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"sessionstate"}),(0,o.kt)("p",null,"Persistable ",(0,o.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Session"))," state."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h3"},"id")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"cookiejar"},(0,o.kt)("inlineCode",{parentName:"h3"},"cookieJar")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"CookieJar")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"userdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"userData")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errorscore"},(0,o.kt)("inlineCode",{parentName:"h3"},"errorScore")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maxerrorscore"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxErrorScore")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errorscoredecrement"},(0,o.kt)("inlineCode",{parentName:"h3"},"errorScoreDecrement")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usagecount"},(0,o.kt)("inlineCode",{parentName:"h3"},"usageCount")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"expiresat"},(0,o.kt)("inlineCode",{parentName:"h3"},"expiresAt")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createdat"},(0,o.kt)("inlineCode",{parentName:"h3"},"createdAt")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);