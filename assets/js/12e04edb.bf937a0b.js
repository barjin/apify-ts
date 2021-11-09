"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8541:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9055);var l=["components"],c={id:"call-actor",title:"Call actor"},p=void 0,s={unversionedId:"examples/call-actor",id:"examples/call-actor",isDocsHomePage:!1,title:"Call actor",description:"This example demonstrates how to start an Apify actor using Apify.call() and how to call the Apify API using",source:"@site/../docs/examples/call_actor.mdx",sourceDirName:"examples",slug:"/examples/call-actor",permalink:"/apify-ts/docs/next/examples/call-actor",tags:[],version:"current",frontMatter:{id:"call-actor",title:"Call actor"},sidebar:"docs",previous:{title:"Basic crawler",permalink:"/apify-ts/docs/next/examples/basic-crawler"},next:{title:"Capture a screenshot",permalink:"/apify-ts/docs/next/examples/capture-screenshot"}},m=[],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to start an Apify actor using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," and how to call the Apify API using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#client",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.client")),". The script gets a random weird word and its explanation from ",(0,o.kt)("a",{parentName:"p",href:"https://randomword.com/",target:"_blank",rel:"noopener"},"randomword.com")," and\nsends it to your email using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/send-mail"))," actor."),(0,o.kt)("p",null,"To make the example work, you'll need an ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),". Go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page to obtain your API token and set it to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/environment-variables#APIFY_TOKEN",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable, or run the script using the Apify CLI. If you deploy this actor\nto the Apify Cloud, you can do things like set up a scheduler to run your actor early in the morning."),(0,o.kt)("p",null,"To see what other actors are available, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab when\nconfiguring the actor."))),(0,o.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch the web browser.\n    const browser = await Apify.launchPuppeteer();\n\n    console.log('Obtaining own email address...');\n    const apifyClient = Apify.newClient();\n    const user = await apifyClient.user().get();\n\n    // Load randomword.com and get a random word\n    console.log('Fetching a random word.');\n    const page = await browser.newPage();\n    await page.goto('https://randomword.com/');\n    const randomWord = await page.$eval('#shared_section', (el) => el.outerHTML);\n\n    // Send random word to your email. For that, you can use an actor we already\n    // have available on the platform under the name: apify/send-mail.\n    // The second parameter to the Apify.call() invocation is the actor's\n    // desired input. You can find the required input parameters by checking\n    // the actor's documentation page: https://apify.com/apify/send-mail\n    console.log(`Sending email to ${user.email}...`);\n    await Apify.call('apify/send-mail', {\n        to: user.email,\n        subject: 'Random Word',\n        html: `<h1>Random Word</h1>${randomWord}`,\n    });\n    console.log('Email sent. Good luck!');\n\n    // Close Browser\n    await browser.close();\n});\n"))}u.isMDXComponent=!0}}]);