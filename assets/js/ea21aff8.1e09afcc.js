"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9069:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>f});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={id:"crawl-single-url",title:"Crawl a single URL",original_id:"crawl-single-url"},s=void 0,p={unversionedId:"examples/crawl-single-url",id:"version-2.0.6/examples/crawl-single-url",title:"Crawl a single URL",description:"This example uses the Apify.utils.requestAsBrowser() function to grab the HTML of a web page.",source:"@site/versioned_docs/version-2.0.6/examples/crawl_single_url.md",sourceDirName:"examples",slug:"/examples/crawl-single-url",permalink:"/apify-ts/docs/examples/crawl-single-url",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1645102056,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"crawl-single-url",title:"Crawl a single URL",original_id:"crawl-single-url"},sidebar:"version-2.0.6/docs",previous:{title:"Crawl a website with relative links",permalink:"/apify-ts/docs/examples/crawl-relative-links"},next:{title:"Crawl a sitemap",permalink:"/apify-ts/docs/examples/crawl-sitemap"}},c=[],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/utils#utilsrequestasbrowseroptions",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Apify.utils.requestAsBrowser()"))," function to grab the HTML of a web page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Get the HTML of a web page\n    const { body } = await Apify.utils.requestAsBrowser({ url: 'https://www.example.com' });\n    console.log(body);\n});\n")),(0,l.kt)("p",null,"If you don't want to hard-code the URL into the script, refer to the ",(0,l.kt)("a",{parentName:"p",href:"accept-user-input",target:null,rel:null},"Accept User Input")," example."))}f.isMDXComponent=!0}}]);