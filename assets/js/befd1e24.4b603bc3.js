"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,s(s({ref:t},p),{},{components:n})):o.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1736:(e,t,n)=>{n.d(t,{Z:()=>O});var o=n(7462),r=n(7294),a=n(6010);const s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i={Prism:n(7410).default,theme:s};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=c({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?c({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=c({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?c({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,i=[],l=[i];s>-1;){for(;(a=o[s]++)<r[s];){var c=void 0,m=t[s],y=n[s][a];if("string"==typeof y?(m=s>0?m:["plain"],c=y):(m=d(m,y.type),y.alias&&(m=d(m,y.alias)),c=y.content),"string"==typeof c){var h=c.split(p),g=h.length;i.push({types:m,content:h[0]});for(var f=1;f<g;f++)u(i),l.push(i=[]),i.push({types:m,content:h[f]})}else s++,t.push(m),n.push(c),o.push(0),r.push(c.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return u(i),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=n(5999),f=n(5450);const v="codeBlockContainer_I0IT",k="codeBlockContent_wNvx",b="codeBlockTitle_BvAR",w="codeBlock_jd64",x="codeBlockStandalone_csWH",N="copyButton_wuS7",T="codeBlockLines_mRuA";function O(e){var t,n=e.children,s=e.className,l=void 0===s?"":s,c=e.metastring,p=e.title,u=e.language,d=(0,f.useThemeConfig)().prism,m=(0,r.useState)(!1),y=m[0],O=m[1],P=(0,r.useState)(!1),C=P[0],E=P[1];(0,r.useEffect)((function(){E(!0)}),[]);var j=(0,f.parseCodeBlockTitle)(c)||p,D=(0,f.usePrismTheme)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(h,(0,o.Z)({},i,{key:String(C),theme:D,code:"",language:"text"}),(function(e){var t=e.className,o=e.style;return r.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,x,"thin-scrollbar",v,l,f.ThemeClassNames.common.codeBlock),style:o},r.createElement("code",{className:T},n))}));var A=Array.isArray(n)?n.join(""):n,S=null!=(t=null!=u?u:(0,f.parseLanguage)(l))?t:d.defaultLanguage,B=(0,f.parseLines)(A,c,S),L=B.highlightLines,Z=B.code,_=function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var s=document.getSelection(),i=!1;s.rangeCount>0&&(i=s.getRangeAt(0)),o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(c){}r.remove(),i&&(s.removeAllRanges(),s.addRange(i)),a&&a.focus()}(Z),O(!0),setTimeout((function(){return O(!1)}),2e3)};return r.createElement(h,(0,o.Z)({},i,{key:String(C),theme:D,code:Z,language:null!=S?S:"text"}),(function(e){var t,n=e.className,s=e.style,i=e.tokens,c=e.getLineProps,p=e.getTokenProps;return r.createElement("div",{className:(0,a.Z)(v,l,(t={},t["language-"+S]=S&&!l.includes("language-"+S),t),f.ThemeClassNames.common.codeBlock)},j&&r.createElement("div",{style:s,className:b},j),r.createElement("div",{className:(0,a.Z)(k,S)},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,w,"thin-scrollbar"),style:s},r.createElement("code",{className:T},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=c({line:e,key:t});return L.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},p({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,g.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(N,"clean-btn"),onClick:_},y?r.createElement(g.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(g.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},3464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=n(1736);var i=["components"],l={id:"synchronous-run",title:"Synchronous run"},c=void 0,p={unversionedId:"examples/synchronous-run",id:"examples/synchronous-run",title:"Synchronous run",description:"This example shows a quick actor that has a run time of just a few seconds. It opens a web page (the Wikipedia home page),",source:"@site/../docs/examples/synchronous_run.mdx",sourceDirName:"examples",slug:"/examples/synchronous-run",permalink:"/apify-ts/docs/next/examples/synchronous-run",tags:[],version:"current",frontMatter:{id:"synchronous-run",title:"Synchronous run"},sidebar:"docs",previous:{title:"Puppeteer with proxy",permalink:"/apify-ts/docs/next/examples/puppeteer-with-proxy"},next:{title:"Use stealth mode",permalink:"/apify-ts/docs/next/examples/use-stealth-mode"}},u={},d=[],m={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows a quick actor that has a run time of just a few seconds. It opens a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org",target:"_blank",rel:"noopener"},"web page"),' (the Wikipedia home page),\nwhich contains a list of "Did you know" texts that change daily. The actor scrapes all the "Did you know" items and saves them to the default dataset.'),(0,a.kt)("p",null,"This actor can be invoked synchronously using a single HTTP request to directly obtain its output as a response, using the\n",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/actors/run-actor-synchronously/without-input",target:"_blank",rel:"noopener"},"Run actor synchronously")," Apify API endpoint."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile."))),(0,a.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch web browser.\n    const browser = await Apify.launchPuppeteer({ launchOptions: { headless: true } });\n    // Load https://en.wikipedia.org and get all \"Did you know\" texts.\n    console.log('Opening web page...');\n    const page = await browser.newPage();\n    await page.goto('https://en.wikipedia.org');\n\n    // Get all \"Did you know\" items from the page.\n    console.log('Getting \"Did you know\" items from the page.');\n    const results = await page.$$eval(\n        'div#mp-dyk > ul li',\n        (nodes) => nodes.map((node) => node.innerText.replace('...', 'Did you know')),\n    );\n    console.log(results);\n\n    // Save all the items to the Apify dataSet.\n    await Apify.pushData(results);\n    console.log('Actor finished.');\n\n    // Close browser\n    await browser.close();\n});\n"))}y.isMDXComponent=!0}}]);