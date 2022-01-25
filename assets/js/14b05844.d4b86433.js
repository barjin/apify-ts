"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2046:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"social-handles",title:"SocialHandles",original_id:"social-handles"},s=void 0,p={unversionedId:"typedefs/social-handles",id:"version-2.0.6/typedefs/social-handles",title:"SocialHandles",description:"Representation of social handles parsed from a HTML page.",source:"@site/versioned_docs/version-2.0.6/typedefs/SocialHandles.md",sourceDirName:"typedefs",slug:"/typedefs/social-handles",permalink:"/apify-ts/docs/typedefs/social-handles",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643109547,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"social-handles",title:"SocialHandles",original_id:"social-handles"},sidebar:"version-2.0.6/docs",previous:{title:"SessionState",permalink:"/apify-ts/docs/typedefs/session-state"},next:{title:"SystemInfo",permalink:"/apify-ts/docs/typedefs/system-info"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>emails</code>",id:"emails",children:[],level:3},{value:"<code>phones</code>",id:"phones",children:[],level:3},{value:"<code>phonesUncertain</code>",id:"phonesuncertain",children:[],level:3},{value:"<code>linkedIns</code>",id:"linkedins",children:[],level:3},{value:"<code>twitters</code>",id:"twitters",children:[],level:3},{value:"<code>instagrams</code>",id:"instagrams",children:[],level:3},{value:"<code>facebooks</code>",id:"facebooks",children:[],level:3},{value:"<code>youtubes</code>",id:"youtubes",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"socialhandles"}),(0,i.kt)("p",null,"Representation of social handles parsed from a HTML page."),(0,i.kt)("p",null,"The object has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  emails: String[],\n  phones: String[],\n  phonesUncertain: String[],\n  linkedIns: String[],\n  twitters: String[],\n  instagrams: String[],\n  facebooks: String[],\n  youtubes: String[],\n}\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"emails"},(0,i.kt)("inlineCode",{parentName:"h3"},"emails")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"phones"},(0,i.kt)("inlineCode",{parentName:"h3"},"phones")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"phonesuncertain"},(0,i.kt)("inlineCode",{parentName:"h3"},"phonesUncertain")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linkedins"},(0,i.kt)("inlineCode",{parentName:"h3"},"linkedIns")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"twitters"},(0,i.kt)("inlineCode",{parentName:"h3"},"twitters")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instagrams"},(0,i.kt)("inlineCode",{parentName:"h3"},"instagrams")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"facebooks"},(0,i.kt)("inlineCode",{parentName:"h3"},"facebooks")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"youtubes"},(0,i.kt)("inlineCode",{parentName:"h3"},"youtubes")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);