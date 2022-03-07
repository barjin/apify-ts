"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9e3:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,assets:()=>s,toc:()=>m,default:()=>u});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"call-actor",title:"Call actor",original_id:"call-actor"},c=void 0,p={unversionedId:"examples/call-actor",id:"version-2.0.6/examples/call-actor",title:"Call actor",description:"This example demonstrates how to start an Apify actor using Apify.call() and how to call the Apify API using",source:"@site/versioned_docs/version-2.0.6/examples/call_actor.md",sourceDirName:"examples",slug:"/examples/call-actor",permalink:"/apify-ts/docs/examples/call-actor",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1646670973,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"call-actor",title:"Call actor",original_id:"call-actor"},sidebar:"version-2.0.6/docs",previous:{title:"Basic crawler",permalink:"/apify-ts/docs/examples/basic-crawler"},next:{title:"Capture a screenshot",permalink:"/apify-ts/docs/examples/capture-screenshot"}},s={},m=[],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to start an Apify actor using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," and how to call the Apify API using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#client",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.client")),". The script gets a random weird word and its explanation from ",(0,o.kt)("a",{parentName:"p",href:"https://randomword.com/",target:"_blank",rel:"noopener"},"randomword.com")," and\nsends it to your email using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/send-mail"))," actor."),(0,o.kt)("p",null,"To make the example work, you'll need an ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),". Go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page to obtain your API token and set it to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/environment-variables#APIFY_TOKEN",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable, or run the script using the Apify CLI. If you deploy this actor\nto the Apify Cloud, you can do things like set up a scheduler to run your actor early in the morning."),(0,o.kt)("p",null,"To see what other actors are available, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab\nwhen configuring the actor.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch the web browser.\n    const browser = await Apify.launchPuppeteer();\n\n    console.log('Obtaining own email address...');\n    const apifyClient = Apify.newClient();\n    const user = await apifyClient.user().get();\n\n    // Load randomword.com and get a random word\n    console.log('Fetching a random word.');\n    const page = await browser.newPage();\n    await page.goto('https://randomword.com/');\n    const randomWord = await page.$eval('#shared_section', el => el.outerHTML);\n\n    // Send random word to your email. For that, you can use an actor we already\n    // have available on the platform under the name: apify/send-mail.\n    // The second parameter to the Apify.call() invocation is the actor's\n    // desired input. You can find the required input parameters by checking\n    // the actor's documentation page: https://apify.com/apify/send-mail\n    console.log(`Sending email to ${user.email}...`);\n    await Apify.call('apify/send-mail', {\n        to: user.email,\n        subject: 'Random Word',\n        html: `<h1>Random Word</h1>${randomWord}`,\n    });\n    console.log('Email sent. Good luck!');\n\n    // Close Browser\n    await browser.close();\n});\n")))}u.isMDXComponent=!0}}]);