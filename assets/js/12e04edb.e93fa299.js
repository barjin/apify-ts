"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(y,l(l({ref:t},p),{},{components:n})):o.createElement(y,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9055:(e,t,n)=>{n.d(t,{Z:()=>P});var o=n(7462),a=n(7294),r=n(6010);const l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i={Prism:n(7410).default,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=s({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==a&&(r.style=void 0!==r.style?s({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var l=o?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(i))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,l=s({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),c(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,l=0,i=[],c=[i];l>-1;){for(;(r=o[l]++)<a[l];){var s=void 0,d=t[l],y=n[l][r];if("string"==typeof y?(d=l>0?d:["plain"],s=y):(d=m(d,y.type),y.alias&&(d=m(d,y.alias)),s=y.content),"string"==typeof s){var f=s.split(p),g=f.length;i.push({types:d,content:f[0]});for(var h=1;h<g;h++)u(i),c.push(i=[]),i.push({types:d,content:f[h]})}else l++,t.push(d),n.push(s),o.push(0),a.push(s.length)}l--,t.pop(),n.pop(),o.pop(),a.pop()}return u(i),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var g=n(5999),h=n(3616);const v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var b=n(5350);const k=function(){var e=(0,h.useThemeConfig)().prism,t=(0,b.Z)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},w="codeBlockContainer_J+bg",N="codeBlockContent_csEI",C="codeBlockTitle_oQzk",T="codeBlock_rtdJ",O="copyButton_M3SB",x="codeBlockLines_1zSZ";function P(e){var t,n=e.children,l=e.className,c=e.metastring,s=e.title,p=(0,h.useThemeConfig)().prism,u=(0,a.useState)(!1),m=u[0],d=u[1],y=(0,a.useState)(!1),v=y[0],b=y[1];(0,a.useEffect)((function(){b(!0)}),[]);var P=(0,h.parseCodeBlockTitle)(c)||s,A=k(),E=Array.isArray(n)?n.join(""):n,j=null!=(t=(0,h.parseLanguage)(l))?t:p.defaultLanguage,S=(0,h.parseLines)(E,c,j),D=S.highlightLines,L=S.code,_=function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),o.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),r&&r.focus()}(L),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(f,(0,o.Z)({},i,{key:String(v),theme:A,code:L,language:j}),(function(e){var t=e.className,n=e.style,i=e.tokens,c=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:(0,r.Z)(w,l,h.ThemeClassNames.common.codeBlock)},P&&a.createElement("div",{style:n,className:C},P),a.createElement("div",{className:(0,r.Z)(N,j)},a.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,T,"thin-scrollbar"),style:n},a.createElement("code",{className:x},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=c({line:e,key:t});return D.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,g.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(O,"clean-btn"),onClick:_},m?a.createElement(g.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(g.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},8541:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=n(9055);var i=["components"],c={id:"call-actor",title:"Call actor"},s=void 0,p={unversionedId:"examples/call-actor",id:"examples/call-actor",title:"Call actor",description:"This example demonstrates how to start an Apify actor using Apify.call() and how to call the Apify API using",source:"@site/../docs/examples/call_actor.mdx",sourceDirName:"examples",slug:"/examples/call-actor",permalink:"/apify-ts/docs/next/examples/call-actor",tags:[],version:"current",frontMatter:{id:"call-actor",title:"Call actor"},sidebar:"docs",previous:{title:"Basic crawler",permalink:"/apify-ts/docs/next/examples/basic-crawler"},next:{title:"Capture a screenshot",permalink:"/apify-ts/docs/next/examples/capture-screenshot"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to start an Apify actor using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/apify#call",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," and how to call the Apify API using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/apify#client",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Apify.client")),". The script gets a random weird word and its explanation from ",(0,r.kt)("a",{parentName:"p",href:"https://randomword.com/",target:"_blank",rel:"noopener"},"randomword.com")," and\nsends it to your email using the ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"apify/send-mail"))," actor."),(0,r.kt)("p",null,"To make the example work, you'll need an ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),". Go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page to obtain your API token and set it to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/environment-variables#APIFY_TOKEN",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable, or run the script using the Apify CLI. If you deploy this actor\nto the Apify Cloud, you can do things like set up a scheduler to run your actor early in the morning."),(0,r.kt)("p",null,"To see what other actors are available, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the ",(0,r.kt)("strong",{parentName:"p"},"Source")," tab when\nconfiguring the actor."))),(0,r.kt)(l.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch the web browser.\n    const browser = await Apify.launchPuppeteer();\n\n    console.log('Obtaining own email address...');\n    const apifyClient = Apify.newClient();\n    const user = await apifyClient.user().get();\n\n    // Load randomword.com and get a random word\n    console.log('Fetching a random word.');\n    const page = await browser.newPage();\n    await page.goto('https://randomword.com/');\n    const randomWord = await page.$eval('#shared_section', (el) => el.outerHTML);\n\n    // Send random word to your email. For that, you can use an actor we already\n    // have available on the platform under the name: apify/send-mail.\n    // The second parameter to the Apify.call() invocation is the actor's\n    // desired input. You can find the required input parameters by checking\n    // the actor's documentation page: https://apify.com/apify/send-mail\n    console.log(`Sending email to ${user.email}...`);\n    await Apify.call('apify/send-mail', {\n        to: user.email,\n        subject: 'Random Word',\n        html: `<h1>Random Word</h1>${randomWord}`,\n    });\n    console.log('Email sent. Good luck!');\n\n    // Close Browser\n    await browser.close();\n});\n"))}d.isMDXComponent=!0}}]);