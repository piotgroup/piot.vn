"use strict";(self.webpackChunkpiot_vn=self.webpackChunkpiot_vn||[]).push([[682],{26132:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=function(e){var t=e.data;return n.createElement("div",{className:"prose mx-auto py-8"},n.createElement("div",{dangerouslySetInnerHTML:{__html:t.richTextBody.data.childMarkdownRemark.html}}))},r=a(37059),c={STRAPI__COMPONENT_SHARED_RICH_TEXT:l,STRAPI__COMPONENT_SHARED_MEDIA:function(e){var t=e.data,a=t.file.mime.startsWith("video");return n.createElement("div",{className:"py-8"},a?n.createElement("p",null,"TODO video"):n.createElement(r.G,{image:(0,r.c)(t.file.localFile),alt:t.file.alternativeText}))},STRAPI__COMPONENT_SHARED_QUOTE:function(e){var t=e.data;return n.createElement("div",{className:"py-6"},n.createElement("blockquote",{className:"container max-w-xl border-l-4 border-neutral-700 py-2 pl-6 text-neutral-700"},n.createElement("p",{className:"text-5xl font-medium italic"},t.quoteBody),n.createElement("cite",{className:"mt-4 block font-bold uppercase not-italic"},t.title)))}},i=function(e){var t=e.block,a=c[t.__typename];return a?n.createElement(a,{data:t}):null},o=function(e){var t=e.blocks;return n.createElement("div",null,t.map((function(e,t){return n.createElement(i,{key:""+t+e.__typename,block:e})})))}},95465:function(e,t,a){a.r(t);var n=a(67294),l=a(1597),r=a(90410),c=a(60262),i=a(26132);t.default=function(){var e=(0,l.useStaticQuery)("3105690032").strapiAbout,t=e.title,a=e.blocks,o={metaTitle:t,metaDescription:t};return n.createElement(r.Z,null,n.createElement(c.Z,{seo:o}),n.createElement(i.Z,{blocks:a}))}}}]);
//# sourceMappingURL=component---src-pages-about-js-d2b805c65ecd6243d13b.js.map