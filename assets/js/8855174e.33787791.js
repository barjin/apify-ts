"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},205:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"dataset-content",title:"DatasetContent",original_id:"dataset-content"},p=void 0,s={unversionedId:"typedefs/dataset-content",id:"version-2.0.6/typedefs/dataset-content",title:"DatasetContent",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/DatasetContent.md",sourceDirName:"typedefs",slug:"/typedefs/dataset-content",permalink:"/apify-ts/docs/typedefs/dataset-content",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1645026699,formattedLastUpdatedAt:"2/16/2022",frontMatter:{id:"dataset-content",title:"DatasetContent",original_id:"dataset-content"},sidebar:"version-2.0.6/docs",previous:{title:"ApifyEnv",permalink:"/apify-ts/docs/typedefs/apify-env"},next:{title:"MemoryInfo",permalink:"/apify-ts/docs/typedefs/memory-info"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>items</code>",id:"items",children:[],level:3},{value:"<code>total</code>",id:"total",children:[],level:3},{value:"<code>offset</code>",id:"offset",children:[],level:3},{value:"<code>count</code>",id:"count",children:[],level:3},{value:"<code>limit</code>",id:"limit",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"datasetcontent"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"items"},(0,o.kt)("inlineCode",{parentName:"h3"},"items")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Array<object>")),(0,o.kt)("p",null,"Dataset entries based on chosen format parameter."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"total"},(0,o.kt)("inlineCode",{parentName:"h3"},"total")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Total count of entries in the dataset."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"offset"},(0,o.kt)("inlineCode",{parentName:"h3"},"offset")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Position of the first returned entry in the dataset."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"count"},(0,o.kt)("inlineCode",{parentName:"h3"},"count")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Count of dataset entries returned in this set."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"limit"},(0,o.kt)("inlineCode",{parentName:"h3"},"limit")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Maximum number of dataset entries requested."),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);