"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),u=o,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4255:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>f});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"system-info",title:"SystemInfo",original_id:"system-info"},s=void 0,p={unversionedId:"typedefs/system-info",id:"version-2.0.6/typedefs/system-info",title:"SystemInfo",description:"Represents the current status of the system.",source:"@site/versioned_docs/version-2.0.6/typedefs/SystemInfo.md",sourceDirName:"typedefs",slug:"/typedefs/system-info",permalink:"/apify-ts/docs/typedefs/system-info",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1643891133,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"system-info",title:"SystemInfo",original_id:"system-info"},sidebar:"version-2.0.6/docs",previous:{title:"SocialHandles",permalink:"/apify-ts/docs/typedefs/social-handles"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>isSystemIdle</code>",id:"issystemidle",children:[],level:3},{value:"<code>memInfo</code>",id:"meminfo",children:[],level:3},{value:"<code>eventLoopInfo</code>",id:"eventloopinfo",children:[],level:3},{value:"<code>cpuInfo</code>",id:"cpuinfo",children:[],level:3}],level:2}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"systeminfo"}),(0,i.kt)("p",null,"Represents the current status of the system."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"issystemidle"},(0,i.kt)("inlineCode",{parentName:"h3"},"isSystemIdle")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If true, system is being overloaded."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"meminfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"memInfo")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,i.kt)("p",null,"Memory"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eventloopinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"eventLoopInfo")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cpuinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"cpuInfo")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);