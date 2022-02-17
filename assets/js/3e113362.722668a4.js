"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=a,m=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1017:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>u,default:()=>c});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"actor-run",title:"ActorRun",original_id:"actor-run"},p=void 0,d={unversionedId:"typedefs/actor-run",id:"version-2.0.6/typedefs/actor-run",title:"ActorRun",description:"Represents information about an actor run, as returned by the Apify.call() or Apify.callTask()",source:"@site/versioned_docs/version-2.0.6/typedefs/ActorRun.md",sourceDirName:"typedefs",slug:"/typedefs/actor-run",permalink:"/apify-ts/docs/typedefs/actor-run",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1645102056,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"actor-run",title:"ActorRun",original_id:"actor-run"},sidebar:"version-2.0.6/docs",previous:{title:"RequestTransform",permalink:"/apify-ts/docs/typedefs/request-transform"},next:{title:"ApifyCallError",permalink:"/apify-ts/docs/api/apify-call-error"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>actId</code>",id:"actid",children:[],level:3},{value:"<code>startedAt</code>",id:"startedat",children:[],level:3},{value:"<code>finishedAt</code>",id:"finishedat",children:[],level:3},{value:"<code>status</code>",id:"status",children:[],level:3},{value:"<code>meta</code>",id:"meta",children:[],level:3},{value:"<code>stats</code>",id:"stats",children:[],level:3},{value:"<code>options</code>",id:"options",children:[],level:3},{value:"<code>buildId</code>",id:"buildid",children:[],level:3},{value:"<code>buildNumber</code>",id:"buildnumber",children:[],level:3},{value:"<code>exitCode</code>",id:"exitcode",children:[],level:3},{value:"<code>defaultKeyValueStoreId</code>",id:"defaultkeyvaluestoreid",children:[],level:3},{value:"<code>defaultDatasetId</code>",id:"defaultdatasetid",children:[],level:3},{value:"<code>defaultRequestQueueId</code>",id:"defaultrequestqueueid",children:[],level:3},{value:"<code>containerUrl</code>",id:"containerurl",children:[],level:3},{value:"<code>output</code>",id:"output",children:[],level:3}],level:2}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"actorrun"}),(0,l.kt)("p",null,"Represents information about an actor run, as returned by the ",(0,l.kt)("a",{parentName:"p",href:"../api/apify#call",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," or ",(0,l.kt)("a",{parentName:"p",href:"../api/apify#calltask",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Apify.callTask()")),"\nfunction. The object is almost equivalent to the JSON response of the\n",(0,l.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/actors/run-collection/run-actor",target:"_blank",rel:"noopener"},"Actor run")," Apify API endpoint and extended with certain fields. For more\ndetails, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/run",target:"_blank",rel:"noopener"},"Runs.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h3"},"id")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Actor run ID"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"actid"},(0,l.kt)("inlineCode",{parentName:"h3"},"actId")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Actor ID"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"startedat"},(0,l.kt)("inlineCode",{parentName:"h3"},"startedAt")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")),(0,l.kt)("p",null,"Time when the actor run started"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"finishedat"},(0,l.kt)("inlineCode",{parentName:"h3"},"finishedAt")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")),(0,l.kt)("p",null,"Time when the actor run finished. Contains ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," for running actors."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"status"},(0,l.kt)("inlineCode",{parentName:"h3"},"status")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Status of the run. For possible values, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/run#lifecycle",target:"_blank",rel:"noopener"},"Run lifecycle")," in Apify actor documentation."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"meta"},(0,l.kt)("inlineCode",{parentName:"h3"},"meta")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object<string, string>")),(0,l.kt)("p",null,"Actor run meta-data. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "origin": "API",\n  "clientIp": "1.2.3.4",\n  "userAgent": "ApifyClient/0.2.13 (Linux; Node/v8.11.3)"\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stats"},(0,l.kt)("inlineCode",{parentName:"h3"},"stats")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object<string, number>")),(0,l.kt)("p",null,"An object containing various actor run statistics. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "inputBodyLen": 22,\n  "restartCount": 0,\n  "workersUsed": 1,\n}\n')),(0,l.kt)("p",null,"Beware that object fields might change in future releases."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h3"},"options")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,l.kt)("p",null,"Actor run options. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "build": "latest",\n  "waitSecs": 0,\n  "memoryMbytes": 256,\n  "diskMbytes": 512\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"buildid"},(0,l.kt)("inlineCode",{parentName:"h3"},"buildId")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"ID of the actor build used for the run. For details, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/build",target:"_blank",rel:"noopener"},"Builds")," in Apify actor documentation."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"buildnumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"buildNumber")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Number of the actor build used for the run. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"0.0.10"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"exitcode"},(0,l.kt)("inlineCode",{parentName:"h3"},"exitCode")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Exit code of the actor run process. It's ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if actor is still running."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"defaultkeyvaluestoreid"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultKeyValueStoreId")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"ID of the default key-value store associated with the actor run. See ",(0,l.kt)("a",{parentName:"p",href:"../api/key-value-store",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," for details."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"defaultdatasetid"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultDatasetId")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"ID of the default dataset associated with the actor run. See ",(0,l.kt)("a",{parentName:"p",href:"../api/dataset",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Dataset"))," for details."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"defaultrequestqueueid"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultRequestQueueId")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"ID of the default request queue associated with the actor run. See ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," for details."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerurl"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerUrl")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"URL on which the web server running inside actor run's Docker container can be accessed. For more details, see\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/run#container-web-server",target:"_blank",rel:"noopener"},"Container web server")," in Apify actor documentation."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"output"},(0,l.kt)("inlineCode",{parentName:"h3"},"output")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object<string, *>")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")),(0,l.kt)("p",null,"Contains output of the actor run. The value is ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," in case the actor is still running, or if you pass ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"fetchOutput"),"\noption of ",(0,l.kt)("a",{parentName:"p",href:"../api/apify#call",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Apify.call()")),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "contentType": "application/json; charset=utf-8",\n  "body": {\n    "message": "Hello world!"\n  }\n}\n')),(0,l.kt)("hr",null))}c.isMDXComponent=!0}}]);