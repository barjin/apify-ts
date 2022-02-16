"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6844:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"request-options",title:"RequestOptions",original_id:"request-options"},p=void 0,s={unversionedId:"typedefs/request-options",id:"version-2.0.6/typedefs/request-options",title:"RequestOptions",description:"Specifies required and optional fields for constructing a Request.",source:"@site/versioned_docs/version-2.0.6/typedefs/RequestOptions.md",sourceDirName:"typedefs",slug:"/typedefs/request-options",permalink:"/apify-ts/docs/typedefs/request-options",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1645034523,formattedLastUpdatedAt:"2/16/2022",frontMatter:{id:"request-options",title:"RequestOptions",original_id:"request-options"},sidebar:"version-2.0.6/docs",previous:{title:"LoggerOptions",permalink:"/apify-ts/docs/typedefs/logger-options"},next:{title:"RequestListOptions",permalink:"/apify-ts/docs/typedefs/request-list-options"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>url</code>",id:"url",children:[],level:3},{value:"<code>uniqueKey</code>",id:"uniquekey",children:[],level:3},{value:"<code>method</code>",id:"method",children:[],level:3},{value:"<code>payload</code>",id:"payload",children:[],level:3},{value:"<code>headers</code>",id:"headers",children:[],level:3},{value:"<code>userData</code>",id:"userdata",children:[],level:3},{value:"<code>keepUrlFragment</code>",id:"keepurlfragment",children:[],level:3},{value:"<code>useExtendedUniqueKey</code>",id:"useextendeduniquekey",children:[],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"requestoptions"}),(0,a.kt)("p",null,"Specifies required and optional fields for constructing a ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request")),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"url"},(0,a.kt)("inlineCode",{parentName:"h3"},"url")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"URL of the web page to crawl. It must be a non-empty string."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"uniquekey"},(0,a.kt)("inlineCode",{parentName:"h3"},"uniqueKey")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"A unique key identifying the request. Two requests with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," are considered as pointing to the same URL."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is not provided, then it is automatically generated by normalizing the URL. For example, the URL of ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP://www.EXAMPLE.com/something/"),"\nwill produce the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"http://www.example.com/something"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"keepUrlFragment")," option determines whether URL hash fragment is included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," or not."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useExtendedUniqueKey")," options determines whether method and payload are included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey"),", producing a ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," in the following\nformat: ",(0,a.kt)("inlineCode",{parentName:"p"},"METHOD(payloadHash):normalizedUrl"),". This is useful when requests point to the same URL, but with different methods and payloads. For example:\nform submits."),(0,a.kt)("p",null,"Pass an arbitrary non-empty text value to the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property to override the default behavior and specify which URLs shall be considered equal."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},(0,a.kt)("inlineCode",{parentName:"h3"},"method")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ",(0,a.kt)("code",null," = ",'"',"'","GET","'",'"')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"payload"},(0,a.kt)("inlineCode",{parentName:"h3"},"payload")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("p",null,"HTTP request payload, e.g. for POST requests."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"headers"},(0,a.kt)("inlineCode",{parentName:"h3"},"headers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, string>")),(0,a.kt)("p",null,"HTTP headers in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    Accept: 'text/html',\n    'Content-Type': 'application/json'\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userdata"},(0,a.kt)("inlineCode",{parentName:"h3"},"userData")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,a.kt)("p",null,"Custom user data assigned to the request. Use this to save any request related data to the request's scope, keeping them accessible on retries,\nfailures etc."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"keepurlfragment"},(0,a.kt)("inlineCode",{parentName:"h3"},"keepUrlFragment")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," then the hash part of a URL is removed when computing the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property. For example, this causes the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://www.example.com#foo"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"http://www.example.com#bar")," URLs to have the same ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"http://www.example.com")," and thus the URLs are considered equal. Note that this\noption only has an effect if ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is not set."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useextendeduniquekey"},(0,a.kt)("inlineCode",{parentName:"h3"},"useExtendedUniqueKey")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," then the ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is computed not only from the URL, but also from the method and payload properties. This is useful when making requests\nto the same URL that are differentiated by method or payload, such as form submit navigations in browsers."),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);