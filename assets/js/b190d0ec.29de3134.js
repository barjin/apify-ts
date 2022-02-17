"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6546:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>l,toc:()=>c,default:()=>u});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],a={id:"session-pool-options",title:"SessionPoolOptions",original_id:"session-pool-options"},p=void 0,l={unversionedId:"typedefs/session-pool-options",id:"version-2.0.6/typedefs/session-pool-options",title:"SessionPoolOptions",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/SessionPoolOptions.md",sourceDirName:"typedefs",slug:"/typedefs/session-pool-options",permalink:"/apify-ts/docs/typedefs/session-pool-options",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1645105212,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"session-pool-options",title:"SessionPoolOptions",original_id:"session-pool-options"},sidebar:"version-2.0.6/docs",previous:{title:"SessionOptions",permalink:"/apify-ts/docs/typedefs/session-options"},next:{title:"SnapshotterOptions",permalink:"/apify-ts/docs/typedefs/snapshotter-options"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>maxPoolSize</code>",id:"maxpoolsize",children:[],level:3},{value:"<code>sessionOptions</code>",id:"sessionoptions",children:[],level:3},{value:"<code>persistStateKeyValueStoreId</code>",id:"persiststatekeyvaluestoreid",children:[],level:3},{value:"<code>persistStateKey</code>",id:"persiststatekey",children:[],level:3},{value:"<code>createSessionFunction</code>",id:"createsessionfunction",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"sessionpooloptions"}),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"maxpoolsize"},(0,s.kt)("inlineCode",{parentName:"h3"},"maxPoolSize")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 1000")),(0,s.kt)("p",null,"Maximum size of the pool. Indicates how many sessions are rotated."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sessionoptions"},(0,s.kt)("inlineCode",{parentName:"h3"},"sessionOptions")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("a",{parentName:"p",href:"../typedefs/session-options",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"SessionOptions"))),(0,s.kt)("p",null,"The configuration options for ",(0,s.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"Session"))," instances."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"persiststatekeyvaluestoreid"},(0,s.kt)("inlineCode",{parentName:"h3"},"persistStateKeyValueStoreId")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Name or Id of ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," where is the ",(0,s.kt)("inlineCode",{parentName:"p"},"SessionPool")," state stored."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"persiststatekey"},(0,s.kt)("inlineCode",{parentName:"h3"},"persistStateKey")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," ",(0,s.kt)("code",null," = ",'"',"\\",'"',"SESSION_POOL_STATE\\",'"','"')),(0,s.kt)("p",null,"Session pool persists it's state under this key in Key value store."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"createsessionfunction"},(0,s.kt)("inlineCode",{parentName:"h3"},"createSessionFunction")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("a",{parentName:"p",href:"../typedefs/create-session",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"CreateSession"))),(0,s.kt)("p",null,"Custom function that should return ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," instance. Any error thrown from this function will terminate the process. Function receives ",(0,s.kt)("inlineCode",{parentName:"p"},"SessionPool"),"\ninstance as a parameter"),(0,s.kt)("hr",null))}u.isMDXComponent=!0}}]);