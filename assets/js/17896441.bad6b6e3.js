"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{3402:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(7294),l=a(6010),s=a(3783),i=a(3295),r=a(2263),o=a(9960),c=a(5999),d=a(907),m=a(3616);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.default,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.className,s=e.versionMetadata,i=(0,r.default)().siteConfig.title,o=(0,d.useActivePlugin)({failfast:!0}).pluginId,c=(0,m.useDocsPreferredVersion)(o).savePreferredVersionName,u=(0,d.useDocVersionSuggestions)(o),g=u.latestDocSuggestion,p=u.latestVersionSuggestion,E=null!=g?g:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.ThemeClassNames.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return c(p.name)}})))}function p(e){var t=e.className,a=(0,m.useDocsVersion)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}var E=a(7597),b=a(1217);function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.ThemeClassNames.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var C=a(7462),k=a(3366);const T="iconEdit_mS5F";var _=["className"];const Z=function(e){var t=e.className,a=(0,k.Z)(e,_);return n.createElement("svg",(0,C.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(T,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.ThemeClassNames.common.editThisPage},n.createElement(Z,null),n.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const y="tag_WK-t",w="tagRegular_LXbV",A="tagWithCount_S5Zl";const H=function(e){var t,a=e.permalink,s=e.name,i=e.count;return n.createElement(o.default,{href:a,className:(0,l.Z)(y,(t={},t[w]=!i,t[A]=i,t))},s,i&&n.createElement("span",null,i))},x="tags_NBRY",V="tag_F03v";function M(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:V},n.createElement(H,{name:t,permalink:a}))}))))}const S="lastUpdated_mt2f";function B(e){return n.createElement("div",{className:(0,l.Z)(m.ThemeClassNames.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function D(e){var t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.ThemeClassNames.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",S)},(a||s)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function O(e){var t=e.content.metadata,a=t.editUrl,s=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,r=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||s||r);return c||d?n.createElement("footer",{className:(0,l.Z)(m.ThemeClassNames.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(B,{tags:o}),d&&n.createElement(D,{editUrl:a,lastUpdatedAt:s,lastUpdatedBy:r,formattedLastUpdatedAt:i})):null}var F=a(1575),I=a(1074),P=a(9649);const R="docItemContainer_oiyr",z="docItemCol_zHA2",W="tocMobile_Tx6Y";function q(e){var t,a=e.content,r=a.metadata,o=a.frontMatter,c=o.image,d=o.keywords,u=o.hide_title,v=o.hide_table_of_contents,h=o.toc_min_heading_level,g=o.toc_max_heading_level,f=r.description,N=r.title,L=!u&&void 0===a.contentTitle,C=(0,s.default)(),k=!v&&a.toc&&a.toc.length>0,T=k&&("desktop"===C||"ssr"===C);return n.createElement(n.Fragment,null,n.createElement(b.default,{title:N,description:f,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[z]=!v,t))},n.createElement(p,null),n.createElement("div",{className:R},n.createElement("article",null,n.createElement(E.default,null),k&&n.createElement(I.default,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:g,className:(0,l.Z)(m.ThemeClassNames.docs.docTocMobile,W)}),n.createElement("div",{className:(0,l.Z)(m.ThemeClassNames.docs.docMarkdown,"markdown")},L&&n.createElement(P.MainHeading,null,N),n.createElement(a,null)),n.createElement(O,e)),n.createElement(i.default,{previous:r.previous,next:r.next}))),T&&n.createElement("div",{className:"col col--3"},n.createElement(F.default,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:g,className:m.ThemeClassNames.docs.docTocDesktop}))))}},3295:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(7294),l=a(5999),s=a(6010),i=a(9960);const r=function(e){var t=e.navLink,a=e.next;return n.createElement(i.default,{className:(0,s.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};const o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r,{navLink:a,next:!0})))}},7597:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(3616),s=a(6010);function i(e){var t=e.className,a=(0,l.useDocsVersion)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,l.ThemeClassNames.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}},9649:(e,t,a)=>{a.r(t),a.d(t,{MainHeading:()=>u,default:()=>v});var n=a(3366),l=a(7462),s=a(7294),i=a(6010),r=a(5999),o=a(3616);const c="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5";var m=["id"],u=function(e){var t=Object.assign({},e);return s.createElement("header",null,s.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),h=(0,o.useThemeConfig)().navbar.hideOnScroll;return u?s.createElement(t,(0,l.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=h,a[c]=!h,a)),id:u}),v.children,s.createElement("a",{className:"hash-link",href:"#"+u,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):s.createElement(t,v)});var t}},1575:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7462),l=a(3366),s=a(7294),i=a(6010),r=a(5002);const o="tableOfContents_vrFS";var c=["className"];const d=function(e){var t=e.className,a=(0,l.Z)(e,c);return s.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},s.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},1074:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(7294),l=a(6010),s=a(5999),i=a(3616);const r="tocCollapsible_aw-L",o="tocCollapsibleButton_zr6a",c="tocCollapsibleContent_0dom",d="tocCollapsibleExpanded_FSiv";var m=a(5002);function u(e){var t,a=e.toc,u=e.className,v=e.minHeadingLevel,h=e.maxHeadingLevel,g=(0,i.useCollapsible)({initialState:!0}),p=g.collapsed,E=g.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(r,(t={},t[d]=!p,t),u)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",o),onClick:E},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(i.Collapsible,{lazy:!0,className:c,collapsed:p},n.createElement(m.Z,{toc:a,minHeadingLevel:v,maxHeadingLevel:h})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(3366),s=a(7294),i=a(3616),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?s.createElement("ul",{className:l?void 0:a},t.map((function(e){return s.createElement("li",{key:e.id},s.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,p=(0,l.Z)(e,r),E=(0,i.useThemeConfig)(),b=null!=h?h:E.tableOfContents.minHeadingLevel,f=null!=g?g:E.tableOfContents.maxHeadingLevel,N=(0,i.useTOCFilter)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),L=(0,s.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,i.useTOCHighlight)(L),s.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},p))}}}]);