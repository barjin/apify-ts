"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,m=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1736:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),o=n(7294),a=n(6010);const l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:n(7410).default,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?s({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,y=t[l],m=n[l][a];if("string"==typeof m?(y=l>0?y:["plain"],s=m):(y=d(y,m.type),m.alias&&(y=d(y,m.alias)),s=m.content),"string"==typeof s){var f=s.split(p),g=f.length;c.push({types:y,content:f[0]});for(var h=1;h<g;h++)u(c),i.push(c=[]),c.push({types:y,content:f[h]})}else l++,t.push(y),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return u(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var g=n(5999),h=n(5450);const v="codeBlockContainer_I0IT",k="codeBlockContent_wNvx",b="codeBlockTitle_BvAR",O="codeBlock_jd64",T="codeBlockStandalone_csWH",x="copyButton_wuS7",N="codeBlockLines_mRuA";function E(e){var t,n=e.children,l=e.className,i=void 0===l?"":l,s=e.metastring,p=e.title,u=e.language,d=(0,h.useThemeConfig)().prism,y=(0,o.useState)(!1),m=y[0],E=y[1],P=(0,o.useState)(!1),j=P[0],C=P[1];(0,o.useEffect)((function(){C(!0)}),[]);var w=(0,h.parseCodeBlockTitle)(s)||p,A=(0,h.usePrismTheme)();if(o.Children.toArray(n).some((function(e){return(0,o.isValidElement)(e)})))return o.createElement(f,(0,r.Z)({},c,{key:String(j),theme:A,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return o.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,T,"thin-scrollbar",v,i,h.ThemeClassNames.common.codeBlock),style:r},o.createElement("code",{className:N},n))}));var D=Array.isArray(n)?n.join(""):n,_=null!=(t=null!=u?u:(0,h.parseLanguage)(i))?t:d.defaultLanguage,B=(0,h.parseLines)(D,s,_),L=B.highlightLines,S=B.code,Z=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),a&&a.focus()}(S),E(!0),setTimeout((function(){return E(!1)}),2e3)};return o.createElement(f,(0,r.Z)({},c,{key:String(j),theme:A,code:S,language:null!=_?_:"text"}),(function(e){var t,n=e.className,l=e.style,c=e.tokens,s=e.getLineProps,p=e.getTokenProps;return o.createElement("div",{className:(0,a.Z)(v,i,(t={},t["language-"+_]=_&&!i.includes("language-"+_),t),h.ThemeClassNames.common.codeBlock)},w&&o.createElement("div",{style:l,className:b},w),o.createElement("div",{className:(0,a.Z)(k,_)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,O,"thin-scrollbar"),style:l},o.createElement("code",{className:N},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return L.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},p({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement("button",{type:"button","aria-label":(0,g.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(x,"clean-btn"),onClick:Z},m?o.createElement(g.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(g.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},6071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=n(1736);var c=["components"],i={id:"accept-user-input",title:"Accept user input"},s=void 0,p={unversionedId:"examples/accept-user-input",id:"examples/accept-user-input",title:"Accept user input",description:"This example accepts and logs user input:",source:"@site/../docs/examples/accept_user_input.mdx",sourceDirName:"examples",slug:"/examples/accept-user-input",permalink:"/apify-ts/docs/next/examples/accept-user-input",tags:[],version:"current",frontMatter:{id:"accept-user-input",title:"Accept user input"},sidebar:"docs",previous:{title:"Migration to version 1",permalink:"/apify-ts/docs/next/guides/migration-to-v1"},next:{title:"Add data to dataset",permalink:"/apify-ts/docs/next/examples/add-data-to-dataset"}},u={},d=[],y={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example accepts and logs user input:"),(0,a.kt)(l.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const input = await Apify.getInput();\n    console.log(input);\n});\n"),(0,a.kt)("p",null,"To provide the actor with input, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"INPUT.json"),' file inside the "default" key-value store:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/apify_storage/key_value_stores/default/INPUT.json\n")),(0,a.kt)("p",null,"Anything in this file will be available to the actor when it runs."),(0,a.kt)("p",null,"To learn about other ways to provide an actor with input, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/docs/actor#run",target:"_blank",rel:"noopener"},"Apify Platform Documentation"),"."))}m.isMDXComponent=!0}}]);