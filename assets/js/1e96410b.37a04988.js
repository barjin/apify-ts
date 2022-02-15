"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=a,m=c["".concat(p,".").concat(k)]||c[k]||s[k]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4933:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>u,default:()=>c});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"apify-env",title:"ApifyEnv",original_id:"apify-env"},p=void 0,d={unversionedId:"typedefs/apify-env",id:"version-2.0.6/typedefs/apify-env",title:"ApifyEnv",description:"Parsed representation of the APIFY_XXX environmental variables. This object is returned by the Apify.getEnv() function.",source:"@site/versioned_docs/version-2.0.6/typedefs/ApifyEnv.md",sourceDirName:"typedefs",slug:"/typedefs/apify-env",permalink:"/apify-ts/docs/typedefs/apify-env",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1644951930,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"apify-env",title:"ApifyEnv",original_id:"apify-env"},sidebar:"version-2.0.6/docs",previous:{title:"ApifyCallError",permalink:"/apify-ts/docs/api/apify-call-error"},next:{title:"DatasetContent",permalink:"/apify-ts/docs/typedefs/dataset-content"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>actorId</code>",id:"actorid",children:[],level:3},{value:"<code>actorRunId</code>",id:"actorrunid",children:[],level:3},{value:"<code>actorTaskId</code>",id:"actortaskid",children:[],level:3},{value:"<code>userId</code>",id:"userid",children:[],level:3},{value:"<code>token</code>",id:"token",children:[],level:3},{value:"<code>startedAt</code>",id:"startedat",children:[],level:3},{value:"<code>timeoutAt</code>",id:"timeoutat",children:[],level:3},{value:"<code>defaultKeyValueStoreId</code>",id:"defaultkeyvaluestoreid",children:[],level:3},{value:"<code>defaultDatasetId</code>",id:"defaultdatasetid",children:[],level:3},{value:"<code>memoryMbytes</code>",id:"memorymbytes",children:[],level:3}],level:2}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"apifyenv"}),(0,i.kt)("p",null,"Parsed representation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"APIFY_XXX")," environmental variables. This object is returned by the ",(0,i.kt)("a",{parentName:"p",href:"../api/apify#getenv",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Apify.getEnv()"))," function."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"actorid"},(0,i.kt)("inlineCode",{parentName:"h3"},"actorId")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"ID of the actor (APIFY_ACTOR_ID)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"actorrunid"},(0,i.kt)("inlineCode",{parentName:"h3"},"actorRunId")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"ID of the actor run (APIFY_ACTOR_RUN_ID)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"actortaskid"},(0,i.kt)("inlineCode",{parentName:"h3"},"actorTaskId")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"ID of the actor task (APIFY_ACTOR_TASK_ID)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userid"},(0,i.kt)("inlineCode",{parentName:"h3"},"userId")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"ID of the user who started the actor - note that it might be different than the owner ofthe actor (APIFY_USER_ID)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"token"},(0,i.kt)("inlineCode",{parentName:"h3"},"token")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"Authentication token representing privileges given to the actor run, it can be passed to various Apify APIs (APIFY_TOKEN)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startedat"},(0,i.kt)("inlineCode",{parentName:"h3"},"startedAt")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"Date when the actor was started (APIFY_STARTED_AT)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timeoutat"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeoutAt")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"Date when the actor will time out (APIFY_TIMEOUT_AT)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultkeyvaluestoreid"},(0,i.kt)("inlineCode",{parentName:"h3"},"defaultKeyValueStoreId")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"ID of the key-value store where input and output data of this actor is stored (APIFY_DEFAULT_KEY_VALUE_STORE_ID)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultdatasetid"},(0,i.kt)("inlineCode",{parentName:"h3"},"defaultDatasetId")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"ID of the dataset where input and output data of this actor is stored (APIFY_DEFAULT_DATASET_ID)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"memorymbytes"},(0,i.kt)("inlineCode",{parentName:"h3"},"memoryMbytes")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("p",null,"Amount of memory allocated for the actor, in megabytes (APIFY_MEMORY_MBYTES)"),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);