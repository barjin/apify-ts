/*! For license information please see 9521.f11e47c8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9521],{5999:(e,n,t)=>{t.d(n,{Z:()=>s,I:()=>l});var r=t(7294),o=/{\w+}/g,a="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var u=r.isValidElement(i)?i:String(i);return t.push(u),a}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var u=t(7529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=u[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function l(e,n){return i(c({message:e.message,id:e.id}),n)}function s(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(c({message:n,id:t}),r)}},9935:(e,n,t)=>{t.d(n,{m:()=>r});var r="default"},8143:(e,n,t)=>{t.r(n),t.d(n,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=t(3727)},8084:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a,useAllPluginInstancesData:()=>i,usePluginData:()=>u});var r=t(2263),o=t(9935);function a(){var e=(0,r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=a()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function u(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},2389:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),o=t(9913);function a(){return(0,r.useContext)(o._)}},8408:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return a};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,a,i=(0,n.getActiveVersion)(e,t),u=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(o=u.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(a[e.name]=n)}))})),a):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,n,t)=>{n.Jo=n.Iw=n.zu=n.yW=n.gB=n.WS=n.gA=n.zh=n._r=void 0;var r=t(655),o=t(8143),a=(0,r.__importStar)(t(8084)),i=t(8408),u={};n._r=function(){var e;return null!==(e=(0,a.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:u};n.zh=function(e){return(0,a.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.WS=function(e){void 0===e&&(e={});var t=(0,n.gA)(e),r=(0,o.useLocation)().pathname;if(t)return{activePlugin:t,activeVersion:(0,i.getActiveVersion)(t.pluginData,r)}};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},907:(e,n,t)=>{t.d(n,{Iw:()=>r.Iw,gA:()=>r.gA,WS:()=>r.WS,zu:()=>r.zu,_r:()=>r._r,Jo:()=>r.Jo,zh:()=>r.zh,yW:()=>r.yW,gB:()=>r.gB});var r=t(6730)},9521:(e,n,t)=>{t.r(n),t.d(n,{AnnouncementBarProvider:()=>Ee,Collapsible:()=>U,DEFAULT_SEARCH_TAG:()=>g,Details:()=>Q,DocsPreferredVersionContextProvider:()=>le,MobileSecondaryMenuFiller:()=>re,MobileSecondaryMenuProvider:()=>ee,ScrollControllerProvider:()=>Ve,ThemeClassNames:()=>me,createStorageSlot:()=>l,docVersionSearchTag:()=>m,duplicates:()=>ge,isDocsPluginEnabled:()=>y,isRegexpStringMatch:()=>Ne,isSamePath:()=>b,listStorageKeys:()=>s,listTagsByLetters:()=>xe,parseCodeBlockTitle:()=>p,translateTagsPageTitle:()=>Le,useAlternatePageUtils:()=>d,useAnnouncementBar:()=>Se,useCollapsible:()=>I,useDocsPreferredVersion:()=>ve,useDocsPreferredVersionByPluginId:()=>pe,useDynamicCallback:()=>O,useHistoryPopHandler:()=>Oe,useIsomorphicLayoutEffect:()=>x,useLocalPathname:()=>_e,useLocationChange:()=>D,useMobileSecondaryMenuRenderer:()=>te,usePluralForm:()=>L,usePrevious:()=>R,useScrollController:()=>Me,useScrollPosition:()=>He,useScrollPositionBlocker:()=>Fe,useTOCFilter:()=>je,useTOCHighlight:()=>Ae,useThemeConfig:()=>o,useTitleFormatter:()=>w});var r=t(2263);function o(){return(0,r.default)().siteConfig.themeConfig}var a="localStorage";function i(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),u=!0),null}var n}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=a);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(6775);function d(){var e=(0,r.default)(),n=e.siteConfig,t=n.baseUrl,o=n.url,a=e.i18n,i=a.defaultLocale,u=a.currentLocale,c=(0,f.TH)().pathname,l=u===i?t:t.replace("/"+u+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+l:""+l+e+"/"}(n)+s}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function m(e,n){return"docs-"+e+"-"+n}var h=t(907),y=!!h._r,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.default)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},P=t(7294),E=["zero","one","two","few","many","other"];function S(e){return E.filter((function(n){return e.includes(n)}))}var _={locale:"en",pluralForms:S(["one","other"]),select:function(e){return 1===e?"one":"other"}};function C(){var e=(0,r.default)().i18n.currentLocale;return(0,P.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),_;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:S(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),_}var n,t}),[e])}function L(){var e=C();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),a=t.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(t,n,e)}}}var x="undefined"!=typeof window?P.useLayoutEffect:P.useEffect;function O(e){var n=(0,P.useRef)(e);return x((function(){n.current=e}),[e]),(0,P.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function R(e){var n=(0,P.useRef)();return x((function(){n.current=e})),n.current}function D(e){var n=(0,f.TH)(),t=R(n),r=O(e);(0,P.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var k=t(3366),A=t(412),T=["collapsed"],j=["lazy"];function I(e){var n=e.initialState,t=(0,P.useState)(null!=n&&n),r=t[0],o=t[1],a=(0,P.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:a}}var V={display:"none",overflow:"hidden",height:"0px"},M={display:"block",overflow:"visible",height:"auto"};function B(e,n){var t=n?V:M;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function H(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,P.useRef)(!1);(0,P.useEffect)((function(){var e,a=n.current;function i(){var e,n,t=a.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function u(){var e=i();a.style.transition=e.transition,a.style.height=e.height}if(!o.current)return B(a,t),void(o.current=!0);return a.style.willChange="height",e=requestAnimationFrame((function(){t?(u(),requestAnimationFrame((function(){a.style.height=V.height,a.style.overflow=V.overflow}))):(a.style.display="block",requestAnimationFrame((function(){u()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function F(e){if(!A.Z.canUseDOM)return e?V:M}function N(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,a=e.animation,i=e.onCollapseTransitionEnd,u=e.className,c=e.disableSSRStyle,l=(0,P.useRef)(null);return H({collapsibleRef:l,collapsed:r,animation:a}),P.createElement(t,{ref:l,style:c?void 0:F(r),onTransitionEnd:function(e){"height"===e.propertyName&&(B(l.current,r),null==i||i(r))},className:u},o)}function z(e){var n=e.collapsed,t=(0,k.Z)(e,T),r=(0,P.useState)(!n),o=r[0],a=r[1];(0,P.useLayoutEffect)((function(){n||a(!0)}),[n]);var i=(0,P.useState)(n),u=i[0],c=i[1];return(0,P.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?P.createElement(N,Object.assign({},t,{collapsed:u})):null}function U(e){var n=e.lazy,t=(0,k.Z)(e,j),r=n?z:N;return P.createElement(r,Object.assign({},t))}var W=t(2389),Z=t(6010);const q="details_Q743",G="isBrowser_rWTL",J="collapsibleContent_K5uX";var X=["summary","children"];function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function Y(e,n){return!!e&&(e===n||Y(e.parentElement,n))}const Q=function(e){var n,t=e.summary,r=e.children,o=(0,k.Z)(e,X),a=(0,W.Z)(),i=(0,P.useRef)(null),u=I({initialState:!o.open}),c=u.collapsed,l=u.setCollapsed,s=(0,P.useState)(o.open),f=s[0],d=s[1];return P.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,Z.Z)(q,(n={},n[G]=a,n),o.className),onMouseDown:function(e){K(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;K(n)&&Y(n,i.current)&&(e.preventDefault(),c?(l(!1),d(!0)):l(!0))}}),t,P.createElement(U,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){l(e),d(!e)}},P.createElement("div",{className:J},r)))};var $=(0,P.createContext)(null);function ee(e){var n=e.children;return P.createElement($.Provider,{value:(0,P.useState)(null)},n)}function ne(){var e=(0,P.useContext)($);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function te(){var e=ne()[0];if(e){var n=e.component;return function(t){return P.createElement(n,Object.assign({},e.props,t))}}return function(){}}function re(e){var n,t=e.component,r=e.props,o=ne()[1],a=(n=r,(0,P.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,P.useEffect)((function(){o({component:t,props:a})}),[o,t,a]),(0,P.useEffect)((function(){return function(){return o(null)}}),[o]),null}var oe=function(e){return"docs-preferred-version-"+e};const ae={save:function(e,n,t){l(oe(e),{persistence:n}).set(t)},read:function(e,n){return l(oe(e),{persistence:n}).get()},clear:function(e,n){l(oe(e),{persistence:n}).del()}};function ie(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ae.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ae.clear(e,t),{preferredVersionName:null})}(e)})),o}function ue(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,P.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),a=r[0],i=r[1];return(0,P.useEffect)((function(){i(ie({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[a,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,t){ae.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var ce=(0,P.createContext)(null);function le(e){var n=e.children;return y?P.createElement(se,null,n):P.createElement(P.Fragment,null,n)}function se(e){var n=e.children,t=ue();return P.createElement(ce.Provider,{value:t},n)}function fe(){var e=(0,P.useContext)(ce);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}var de=t(9935);function ve(e){void 0===e&&(e=de.m);var n=(0,h.zh)(e),t=fe(),r=t[0],o=t[1],a=r[e].preferredVersionName;return{preferredVersion:a?n.versions.find((function(e){return e.name===a})):null,savePreferredVersionName:(0,P.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}function pe(){var e=(0,h._r)(),n=fe()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}function ge(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,r){return e.findIndex((function(e){return n(e,t)}))!==r}))}var me={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},he=l("docusaurus.announcement.dismiss"),ye=l("docusaurus.announcement.id"),be=function(){return"true"===he.get()},we=function(e){return he.set(String(e))},Pe=(0,P.createContext)(null),Ee=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,W.Z)(),t=(0,P.useState)((function(){return!!n&&be()})),r=t[0],a=t[1];(0,P.useEffect)((function(){a(be())}),[]);var i=(0,P.useCallback)((function(){we(!0),a(!0)}),[]);return(0,P.useEffect)((function(){if(e){var n=e.id,t=ye.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;ye.set(n),r&&we(!1),!r&&be()||a(!1)}}),[e]),(0,P.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return P.createElement(Pe.Provider,{value:t},n)},Se=function(){var e=(0,P.useContext)(Pe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function _e(){var e=(0,r.default)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var Ce=t(5999),Le=function(){return(0,Ce.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function xe(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function Oe(e){!function(e){var n=(0,f.k6)().block,t=(0,P.useRef)(e);(0,P.useEffect)((function(){t.current=e}),[e]),(0,P.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Re(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Re(e.parentNode):n}function De(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Re(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Re(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function ke(){var e=(0,P.useRef)(0),n=o().navbar.hideOnScroll;return(0,P.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}const Ae=function(e){var n=(0,P.useRef)(void 0),t=ke();(0,P.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,a=e.minHeadingLevel,i=e.maxHeadingLevel;function u(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),u=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=De(u,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",u),document.addEventListener("resize",u),u(),function(){document.removeEventListener("scroll",u),document.removeEventListener("resize",u)}}),[e,t])};function Te(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Te({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function je(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,P.useMemo)((function(){return Te({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Ie=(0,P.createContext)(void 0);function Ve(e){var n,t=e.children;return P.createElement(Ie.Provider,{value:(n=(0,P.useRef)(!0),(0,P.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Me(){var e=(0,P.useContext)(Ie);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Be=function(){return A.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function He(e,n){void 0===n&&(n=[]);var t=Me().scrollEventsEnabledRef,r=(0,P.useRef)(Be()),o=O(e);(0,P.useEffect)((function(){var e=function(){if(t.current){var e=Be();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function Fe(){var e,n,t,r=Me(),o=(e=(0,P.useRef)({elem:null,top:0}),n=(0,P.useCallback)((function(n){e.current={elem:n,top:n.getBoundingClientRect().top}}),[]),t=(0,P.useCallback)((function(){var n=e.current,t=n.elem,r=n.top;if(!t)return{restored:!1};var o=t.getBoundingClientRect().top-r;return o&&window.scrollBy({left:0,top:o}),e.current={elem:null,top:0},{restored:0!==o}}),[]),(0,P.useMemo)((function(){return{save:n,restore:t}}),[t,n])),a=(0,P.useRef)(void 0),i=(0,P.useCallback)((function(e){o.save(e),r.disableScrollEvents(),a.current=function(){var e=o.restore().restored;if(a.current=void 0,e){window.addEventListener("scroll",(function e(){r.enableScrollEvents(),window.removeEventListener("scroll",e)}))}else r.enableScrollEvents()}}),[r,o]);return(0,P.useLayoutEffect)((function(){var e;null===(e=a.current)||void 0===e||e.call(a)})),{blockElementScrollPositionUntilNextRender:i}}function Ne(e,n){return void 0!==e&&void 0!==n&&new RegExp(e,"gi").test(n)}},6010:(e,n,t)=>{function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:()=>o})},655:(e,n,t)=>{t.r(n),t.d(n,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>u,__param:()=>c,__metadata:()=>l,__awaiter:()=>s,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>v,__values:()=>p,__read:()=>g,__spread:()=>m,__spreadArrays:()=>h,__spreadArray:()=>y,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>P,__asyncValues:()=>E,__makeTemplateObject:()=>S,__importStar:()=>C,__importDefault:()=>L,__classPrivateFieldGet:()=>x,__classPrivateFieldSet:()=>O});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function u(e,n,t,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(n,t,i):o(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i}function c(e,n){return function(t,r){n(t,r,e)}}function l(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function s(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function u(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}c((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(u){a=[6,u],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function v(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,a=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(g(arguments[n]));return e}function h(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var a=arguments[n],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){a.push([e,n,t,r])>1||u(e,n)}))})}function u(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,l):s(a[0][2],t)}catch(r){s(a[0][3],r)}var t}function c(e){u("next",e)}function l(e){u("throw",e)}function s(e,n){e(n),a.shift(),a.length&&u(a[0][0],a[0][1])}}function P(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function S(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var _=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function C(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return _(n,e),n}function L(e){return e&&e.__esModule?e:{default:e}}function x(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function O(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);