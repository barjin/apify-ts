"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9e3:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"call-actor",title:"Call actor",original_id:"call-actor"},c=void 0,p={unversionedId:"examples/call-actor",id:"version-2.0.6/examples/call-actor",title:"Call actor",description:"This example demonstrates how to start an Apify actor using Apify.call() and how to call the Apify API using",source:"@site/versioned_docs/version-2.0.6/examples/call_actor.md",sourceDirName:"examples",slug:"/examples/call-actor",permalink:"/apify-ts/docs/examples/call-actor",tags:[],version:"2.0.6",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1645094615,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"call-actor",title:"Call actor",original_id:"call-actor"},sidebar:"version-2.0.6/docs",previous:{title:"Basic crawler",permalink:"/apify-ts/docs/examples/basic-crawler"},next:{title:"Capture a screenshot",permalink:"/apify-ts/docs/examples/capture-screenshot"}},s=[],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to start an Apify actor using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," and how to call the Apify API using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#client",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.client")),". The script gets a random weird word and its explanation from ",(0,o.kt)("a",{parentName:"p",href:"https://randomword.com/",target:"_blank",rel:"noopener"},"randomword.com")," and\nsends it to your email using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/send-mail"))," actor."),(0,o.kt)("p",null,"To make the example work, you'll need an ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),". Go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page to obtain your API token and set it to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/environment-variables#APIFY_TOKEN",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable, or run the script using the Apify CLI. If you deploy this actor\nto the Apify Cloud, you can do things like set up a scheduler to run your actor early in the morning."),(0,o.kt)("p",null,"To see what other actors are available, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab\nwhen configuring the actor.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch the web browser.\n    const browser = await Apify.launchPuppeteer();\n\n    console.log('Obtaining own email address...');\n    const apifyClient = Apify.newClient();\n    const user = await apifyClient.user().get();\n\n    // Load randomword.com and get a random word\n    console.log('Fetching a random word.');\n    const page = await browser.newPage();\n    await page.goto('https://randomword.com/');\n    const randomWord = await page.$eval('#shared_section', el => el.outerHTML);\n\n    // Send random word to your email. For that, you can use an actor we already\n    // have available on the platform under the name: apify/send-mail.\n    // The second parameter to the Apify.call() invocation is the actor's\n    // desired input. You can find the required input parameters by checking\n    // the actor's documentation page: https://apify.com/apify/send-mail\n    console.log(`Sending email to ${user.email}...`);\n    await Apify.call('apify/send-mail', {\n        to: user.email,\n        subject: 'Random Word',\n        html: `<h1>Random Word</h1>${randomWord}`,\n    });\n    console.log('Email sent. Good luck!');\n\n    // Close Browser\n    await browser.close();\n});\n")))}d.isMDXComponent=!0}}]);