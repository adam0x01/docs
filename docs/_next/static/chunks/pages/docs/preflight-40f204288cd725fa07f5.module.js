(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=(t("Btb4"),t("AI3G")),o=t("iuhU"),p=s.a.createElement;function l(e){var{value:a}=e;return"string"===typeof a?p("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?p(s.a.Fragment,null,p("span",{className:"token punctuation"},"["),a.map((e,t)=>p(n.Fragment,{key:t},p(l,{value:e}),t===a.length-1?null:p("span",{className:"token punctuation"},", "))),p("span",{className:"token punctuation"},"]")):"boolean"===typeof a?p("span",{className:"token boolean"},a.toString()):a.toString()}function r(e){var{edits:a,indent:t="",type:s="inserted"}=e;return p("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((e,c)=>{return p(n.Fragment,{key:c},p("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),p("span",{className:"token operator"},":")," ",p(l,{value:a[e]}),p("span",{className:"token punctuation"},","),"\n");var r}))}function i(e){var{path:a,add:t,remove:s,before:o,after:l}=e;return a="string"===typeof a?a.split("."):a,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",a.map((e,a)=>p(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n")),o&&Object(c.a)(o).map((e,t)=>p(n.Fragment,{key:t},"  ".repeat(a.length+2),p("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&p(r,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&p(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),p("span",{className:"token unchanged"},l&&Object(c.a)(l).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n")),a.map((e,t)=>p(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,a,t)=>{const o=[];return function e(a,t,p){let l;(t=t||{}).indent=t.indent||"\t",p=p||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),p).replace(new RegExp(l.indent,"g"),p+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const n="["+l.newLine+a.map((n,s)=>{const c=a.length-1===s?l.newLine:","+l.newLineOrSpace;let o=e(n,t,p+t.indent);return t.transform&&(o=t.transform(a,s,o)),l.indent+o+c}).join("")+l.pad+"]";return o.pop(),r(n)}if(s(a)){let n=Object.keys(a).concat(c(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";o.push(a);const s="{"+l.newLine+n.map((s,c)=>{const o=n.length-1===c?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof s,i=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),m=r||i?s:e(s,t);let b=e(a[s],t,p+t.indent);return t.transform&&(b=t.transform(a,s,b)),l.indent+String(m)+": "+b+o}).join("")+l.pad+"}";return o.pop(),r(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},F0Qs:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/preflight",function(){return t("LH5k")}])},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},LH5k:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),p=t("7ljp"),l=t("YFqc"),r=t.n(l),i=t("tc9R"),m=t("vRWG"),b=t("I6Nb"),u=t("AOjV"),O=(o.a.createElement,{Layout:m.DocumentationLayout,meta:{title:"Preflight",description:"An opinionated set of base styles for Tailwind projects."},tableOfContents:[{title:"Overview",slug:"overview",children:[]},{title:"Default margins are removed",slug:"default-margins-are-removed",children:[]},{title:"Headings are unstyled",slug:"headings-are-unstyled",children:[]},{title:"Lists are unstyled",slug:"lists-are-unstyled",children:[]},{title:"Images are block-level",slug:"images-are-block-level",children:[]},{title:"Border styles are reset globally",slug:"border-styles-are-reset-globally",children:[]},{title:"Buttons have a default outline",slug:"buttons-have-a-default-outline",children:[]},{title:"Extending Preflight",slug:"extending-preflight",children:[]},{title:"Disabling Preflight",slug:"disabling-preflight",children:[]}]}),j=b.ContentsLayout;function d(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(p.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(i.a,{level:2,id:"overview",toc:!0,hidden:!0,mdxType:"Heading"},"Overview"),Object(p.a)("p",null,"Built on top of ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sindresorhus/modern-normalize"}),"modern-normalize"),", Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system."),Object(p.a)("p",null,"Tailwind automatically injects these styles when you include ",Object(p.a)("inlineCode",{parentName:"p"},"@tailwind base")," in your CSS:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* Preflight will be injected here */"),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(p.a)("p",null,"While most of the styles in Preflight are meant to go unnoticed \u2014 they simply make things behave more like you'd expect them to \u2014 some are more opinionated and can be surprising when you first encounter them."),Object(p.a)("p",null,"For a complete reference of all the styles applied by Preflight, ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/tailwindcss@%5E2/dist/base.css"}),"see the stylesheet"),"."),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"default-margins-are-removed",toc:!0},"Default margins are removed"),Object(p.a)("p",null,"Preflight removes all of the default margins from elements like headings, blockquotes, paragraphs, etc."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"margin"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"This makes it harder to accidentally rely on margin values applied by the user-agent stylesheet that are not part of your spacing scale."),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"headings-are-unstyled",toc:!0},"Headings are unstyled"),Object(p.a)("p",null,"All heading elements are completely unstyled by default, and have the same font-size and font-weight as normal text."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h1,\nh2,\nh3,\nh4,\nh5,\nh6")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-size"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," inherit",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-weight"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," inherit",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"The reason for this is two-fold:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"It helps you avoid accidentally deviating from your type scale"),". By default, the browsers assigns sizes to headings that don't exist in Tailwind's default type scale, and aren't guaranteed to exist in your own type scale."),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"In UI development, headings should often be visually de-emphasized"),". Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately.")),Object(p.a)("p",null,"You can always add default header styles to your project by ",Object(p.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(p.a)("a",null,"adding your own base styles")),"."),Object(p.a)("p",null,"If you'd like to selectively introduce sensible default heading styles into article-style parts of a page, we recommend the ",Object(p.a)(r.a,{href:"/docs/typography-plugin/",passHref:!0},Object(p.a)("a",null,"@tailwindcss/typography plugin")),"."),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"lists-are-unstyled",toc:!0},"Lists are unstyled"),Object(p.a)("p",null,"Ordered and unordered lists are unstyled by default, with no bullets/numbers and no margin or padding."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"ol,\nul")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"list-style"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"margin"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"padding"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"If you'd like to style a list, you can do so using the ",Object(p.a)(r.a,{href:"/docs/list-style-type",passHref:!0},Object(p.a)("a",null,"list-style-type"))," and ",Object(p.a)(r.a,{href:"/docs/list-style-position",passHref:!0},Object(p.a)("a",null,"list-style-position"))," utilities:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"ul")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"list-disc list-inside",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"One",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Two",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Three",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"ul"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"You can always add default list styles to your project by ",Object(p.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(p.a)("a",null,"adding your own base styles")),"."),Object(p.a)("p",null,"If you'd like to selectively introduce default list styles into article-style parts of a page, we recommend the ",Object(p.a)(r.a,{href:"/docs/typography-plugin/",passHref:!0},Object(p.a)("a",null,"@tailwindcss/typography plugin")),"."),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"images-are-block-level",toc:!0},"Images are block-level"),Object(p.a)("p",null,"Images and other replaced elements (like ",Object(p.a)("inlineCode",{parentName:"p"},"svg"),", ",Object(p.a)("inlineCode",{parentName:"p"},"video"),", ",Object(p.a)("inlineCode",{parentName:"p"},"canvas"),", and others) are ",Object(p.a)("inlineCode",{parentName:"p"},"display: block")," by default."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"display"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," block",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"vertical-align"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," middle",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"This helps to avoid unexpected alignment issues that you often run into using the browser default of ",Object(p.a)("inlineCode",{parentName:"p"},"display: inline"),"."),Object(p.a)("p",null,"If you ever need to make one of these elements ",Object(p.a)("inlineCode",{parentName:"p"},"inline")," instead of ",Object(p.a)("inlineCode",{parentName:"p"},"block"),", simply use the ",Object(p.a)("inlineCode",{parentName:"p"},"inline")," utility:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"inline",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"alt"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"border-styles-are-reset-globally",toc:!0},"Border styles are reset globally"),Object(p.a)("p",null,"In order to make it easy to add a border by simply adding the ",Object(p.a)("inlineCode",{parentName:"p"},"border")," class, Tailwind overrides the default border styles for all elements with the following rules:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"*,\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token pseudo-element"}),"::before"),",\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token pseudo-element"}),"::after"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-width"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-style"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," solid",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-color"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"theme"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'borderColor.default'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," currentColor",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Since the ",Object(p.a)("inlineCode",{parentName:"p"},"border")," class only sets the ",Object(p.a)("inlineCode",{parentName:"p"},"border-width")," property, this reset ensures that adding that class always adds a solid 1px border using your configured default border color."),Object(p.a)("p",null,"This can cause some unexpected results when integrating certain third-party libraries, like ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/issues/484"}),"Google maps")," for example."),Object(p.a)("p",null,"When you run into situations like this, you can work around them by overriding the Preflight styles with your own custom CSS:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".google-map")," *")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-style"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"buttons-have-a-default-outline",toc:!0},"Buttons have a default outline"),Object(p.a)("p",null,"To ensure that we provide accessible styles out of the box, we made sure\nthat buttons have a default outline. You can of course override this by\napplying ",Object(p.a)("inlineCode",{parentName:"p"},"focus:ring")," or similar utilities to your buttons."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"button",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token pseudo-class"}),":focus"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"outline"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"1"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"px")," dotted",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"outline"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"5"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"px")," auto -webkit-focus-ring-color",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"extending-preflight",toc:!0},"Extending Preflight"),Object(p.a)("p",null,"If you'd like to add your own base styles on top of Preflight, simply add them to your CSS within a ",Object(p.a)("inlineCode",{parentName:"p"},"@layer base")," directive:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h1")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-2",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token unit"}),"xl"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h2")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-xl",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h3")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-lg",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"a")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token color"}),"blue"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"-600")," underline",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(p.a)("p",null,"Learn more in the ",Object(p.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(p.a)("a",null,"adding base styles documentation")),"."),Object(p.a)("hr",null),Object(p.a)(i.a,{level:2,id:"disabling-preflight",toc:!0},"Disabling Preflight"),Object(p.a)("p",null,"If you'd like to completely disable Preflight \u2014 perhaps because you're integrating Tailwind into an existing project or because you'd like to provide your own base styles \u2014 all you need to do is set ",Object(p.a)("inlineCode",{parentName:"p"},"preflight")," to ",Object(p.a)("inlineCode",{parentName:"p"},"false")," in the ",Object(p.a)("inlineCode",{parentName:"p"},"corePlugins")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:")),Object(p.a)(u.a,{path:"corePlugins",add:{preflight:!1},mdxType:"ConfigSample"}))}d.isMDXComponent=!0,d.layoutProps=O},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("8Kt/"),o=t.n(c),p=s.a.createElement;function l(e){var{suffix:a,children:t}=e,n=t+(a?" - ".concat(a):"");return p(o.a,null,p("title",{key:"title"},n),p("meta",{key:"twitter:title",name:"twitter:title",content:n}),p("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return u}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("ekQu"),p=t("8Kt/"),l=t.n(p),r=t("nOHt"),i=t("ap0H"),m=t("1Q1k"),b=c.a.createElement;function u(e){var a=Object(r.useRouter)();return b(c.a.Fragment,null,b(i.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),b(l.a,null,b("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),b("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),b(o.b,Object(n.a)({nav:m.a},e)))}}},[["F0Qs",0,2,1,3,4,5]]]);