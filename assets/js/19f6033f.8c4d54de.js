"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8778],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1410:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"apify-call-error",title:"ApifyCallError",original_id:"apify-call-error"},p=void 0,c={unversionedId:"api/apify-call-error",id:"version-2.0.6/api/apify-call-error",isDocsHomePage:!1,title:"ApifyCallError",description:"The class represents exceptions thrown by the Apify.call() function.",source:"@site/versioned_docs/version-2.0.6/api/ApifyCallError.md",sourceDirName:"api",slug:"/api/apify-call-error",permalink:"/apify-ts/docs/api/apify-call-error",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636977603,formattedLastUpdatedAt:"11/15/2021",frontMatter:{id:"apify-call-error",title:"ApifyCallError",original_id:"apify-call-error"},sidebar:"version-2.0.6/docs",previous:{title:"ActorRun",permalink:"/apify-ts/docs/typedefs/actor-run"},next:{title:"ApifyEnv",permalink:"/apify-ts/docs/typedefs/apify-env"}},s=[{value:"Properties",id:"properties",children:[{value:"<code>message</code>",id:"message",children:[],level:3},{value:"<code>run</code>",id:"run",children:[],level:3},{value:"<code>name</code>",id:"name",children:[],level:3}],level:2},{value:"<code>new ApifyCallError(run, [message])</code>",id:"new-apifycallerrorrun-message",children:[],level:2}],u={toc:s};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"apifycallerror"}),(0,l.kt)("p",null,"The class represents exceptions thrown by the ",(0,l.kt)("a",{parentName:"p",href:"../api/apify#call",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," function."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"message"},(0,l.kt)("inlineCode",{parentName:"h3"},"message")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Error message"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"run"},(0,l.kt)("inlineCode",{parentName:"h3"},"run")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/actor-run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"ActorRun"))),(0,l.kt)("p",null,"Object representing the failed actor run."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Contains ",(0,l.kt)("inlineCode",{parentName:"p"},'"ApifyCallError"')),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"exports.apifycallerror"}),(0,l.kt)("h2",{id:"new-apifycallerrorrun-message"},(0,l.kt)("inlineCode",{parentName:"h2"},"new ApifyCallError(run, [message])")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"run")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/actor-run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"ActorRun"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[message]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," ",(0,l.kt)("code",null," = ",'"',"The actor invoked by Apify.call() did not succeed",'"'))),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);