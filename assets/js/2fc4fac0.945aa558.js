"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7865:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={id:"request-list-state",title:"RequestListState",original_id:"request-list-state"},l=void 0,p={unversionedId:"typedefs/request-list-state",id:"version-2.0.6/typedefs/request-list-state",title:"RequestListState",description:"Represents state of a RequestList. It can be used to resume a RequestList which has been previously",source:"@site/versioned_docs/version-2.0.6/typedefs/RequestListState.md",sourceDirName:"typedefs",slug:"/typedefs/request-list-state",permalink:"/apify-ts/docs/typedefs/request-list-state",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1645809251,formattedLastUpdatedAt:"2/25/2022",frontMatter:{id:"request-list-state",title:"RequestListState",original_id:"request-list-state"},sidebar:"version-2.0.6/docs",previous:{title:"QueueOperationInfo",permalink:"/apify-ts/docs/typedefs/queue-operation-info"},next:{title:"SessionState",permalink:"/apify-ts/docs/typedefs/session-state"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>nextIndex</code>",id:"nextindex",children:[],level:3},{value:"<code>nextUniqueKey</code>",id:"nextuniquekey",children:[],level:3},{value:"<code>inProgress</code>",id:"inprogress",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"requestliststate"}),(0,a.kt)("p",null,"Represents state of a ",(0,a.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"RequestList")),". It can be used to resume a ",(0,a.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"RequestList"))," which has been previously\nprocessed. You can obtain the state by calling ",(0,a.kt)("a",{parentName:"p",href:"../api/request-list#getstate",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"RequestList.getState()"))," and receive an object with the following\nstructure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    nextIndex: 5,\n    nextUniqueKey: 'unique-key-5'\n    inProgress: {\n        'unique-key-1': true,\n        'unique-key-4': true\n    },\n}\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"nextindex"},(0,a.kt)("inlineCode",{parentName:"h3"},"nextIndex")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Position of the next request to be processed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nextuniquekey"},(0,a.kt)("inlineCode",{parentName:"h3"},"nextUniqueKey")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Key of the next request to be processed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inprogress"},(0,a.kt)("inlineCode",{parentName:"h3"},"inProgress")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, boolean>")),(0,a.kt)("p",null,"An object mapping request keys to a boolean value respresenting whether they are being processed at the moment."),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);