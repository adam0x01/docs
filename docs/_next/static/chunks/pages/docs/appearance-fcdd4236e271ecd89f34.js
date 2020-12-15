_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"4gtg":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a=t("wx14"),s=t("Ff2n"),o=t("q1tI"),r=t.n(o),i=t("7ljp"),c=t("YFqc"),p=t.n(c),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),f=t("Fk4K"),m=t.n(f),b=t("8C7G"),v=t("wH44"),y=(r.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Appearance",description:"Utilities for suppressing native form control styling.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=g.ContentsLayout;function h(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.a)(k,Object(a.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"appearance-none")," to reset any browser specific styling on an element. This utility is often used when creating ",Object(i.a)(p.a,{href:"/docs/examples/forms",passHref:!0},Object(i.a)("a",null,"custom form components")),".")),Object(i.a)(u.a,{preview:'\n  <div class="max-w-sm mx-auto">\n    <div class="flex my-4">\n      <select class="w-16">\n        <option>Yes</option>\n        <option>No</option>\n        <option>Maybe</option>\n      </select>\n      <div class="mx-4">\n        Default browser styles applied\n      </div>\n    </div>\n    <div class="flex my-4">\n      <select class="appearance-none w-16">\n        <option>Yes</option>\n        <option>No</option>\n        <option>Maybe</option>\n      </select>\n      <div class="mx-4">\n        Default styles removed\n      </div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>No<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Maybe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>appearance-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>No<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Maybe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(b.a,{plugin:"appearance",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(v.a,{plugin:"appearance",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=y},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),r=t("98BF"),i=t("Zb5r"),c=t("AOjV"),p=o.a.createElement;function l(e){var n=e.plugin,t=e.name,s=r.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(i.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,n)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(i.a)(o)," variants:"),p(c.a,{path:"variants.extend",before:"...",add:Object(a.a)({},n,o)}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),s=t.n(a),o=(t("Btb4"),t("AI3G")),r=t("iuhU"),i=s.a.createElement;function c(e){var n=e.value;return"string"===typeof n?i("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),n.map((function(e,t){return i(a.Fragment,{key:t},i(c,{value:e}),t===n.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof n?i("span",{className:"token boolean"},n.toString()):n.toString()}function p(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,o=e.type,p=void 0===o?"inserted":o;return i("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(n).map((function(e,t){return i(a.Fragment,{key:t},i("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),i("span",{className:"token operator"},":")," ",i(c,{value:n[e]}),i("span",{className:"token punctuation"},","),"\n");var o})))}function l(e){var n=e.path,t=e.add,s=e.remove,r=e.before,c=e.after;return n="string"===typeof n?n.split("."):n,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",n.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(o.a)(r).map((function(e,t){return i(a.Fragment,{key:t},"  ".repeat(n.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&i(p,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&i(p,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),i("span",{className:"token unchanged"},c&&Object(o.a)(c).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,n,t)=>{const r=[];return function e(n,t,i){let c;(t=t||{}).indent=t.indent||"\t",i=i||"",c=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),i).replace(new RegExp(c.indent,"g"),i+t.indent)};if(-1!==r.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";r.push(n);const a="["+c.newLine+n.map((a,s)=>{const o=n.length-1===s?c.newLine:","+c.newLineOrSpace;let r=e(a,t,i+t.indent);return t.transform&&(r=t.transform(n,s,r)),c.indent+r+o}).join("")+c.pad+"]";return r.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(o(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";r.push(n);const s="{"+c.newLine+a.map((s,o)=>{const r=a.length-1===o?c.newLine:","+c.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,i+t.indent);return t.transform&&(d=t.transform(n,s,d)),c.indent+String(u)+": "+d+r}).join("")+c.pad+"}";return r.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},Fk4K:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".appearance-none":{appearance:"none"}},n("appearance"))}}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},ap0H:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),s=t.n(a),o=t("8Kt/"),r=t.n(o),i=s.a.createElement;function c(e){var n=e.suffix,t=e.children+(n?" - ".concat(n):"");return i(r.a,null,i("title",{key:"title"},t),i("meta",{key:"twitter:title",name:"twitter:title",content:t}),i("meta",{key:"og:title",property:"og:title",content:t}))}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t("wx14"),s=t("q1tI"),o=t.n(s),r=t("iuhU"),i=t("ZMKu"),c=o.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var n=Object(s.useRef)(),t=Object(s.useState)(!1),o=t[0],r=t[1],i=Object(s.useState)({}),p=i[0],l=i[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(t);return t(),e.observe(n.current.contentDocument.body),function(){e.disconnect()}}function t(){l({height:n.current.contentDocument.body.scrollHeight})}}),[o]),c("iframe",Object(a.a)({},e,{ref:n,onLoad:function(){return r(!0)},style:p}))}function f(e){var n=e.color,t=e.snippet;return c("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[n],{"bg-gray-800":!p[n]})},c("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[n]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function m(e){var n=e.preview,t=e.src,a=e.snippet,s=e.previewClassName,o=e.color,i=void 0===o?"gray":o;return c("div",{className:"relative overflow-hidden mb-8"},n?c("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):c(g,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[i])}),c(f,{color:i,snippet:a}))}function b(e){var n=e.preview,t=e.src,a=e.previewClassName,o=e.snippet,p=e.color,m=void 0===p?"gray":p,b=e.min,v=void 0!==b&&b,y=Object(s.useRef)(),k=Object(i.h)(0),h=Object(s.useRef)(),O=Object(s.useState)(!1),w=O[0],j=O[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){k.set(0)}));return e.observe(y.current),function(){e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:y,className:"relative rounded-t-xl ".concat(u[m])},c("div",{className:v?"md:w-88":void 0},c(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(k,(function(e){return-e}))}},n?c("div",{className:Object(r.a)("rounded-t-xl",a,l[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):c(g,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[m],{"pointer-events-none":w})}))),c("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(i.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(v?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:function(){document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),j(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(f,{color:m,snippet:o}))}},snDZ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/appearance",function(){return t("4gtg")}])},vRWG:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentationLayout",(function(){return g}));var a=t("wx14"),s=t("q1tI"),o=t.n(s),r=t("ekQu"),i=t("8Kt/"),c=t.n(i),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),d=o.a.createElement;function g(e){var n=Object(p.useRouter)();return d(o.a.Fragment,null,d(l.a,{suffix:"/"===n.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(r.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),r=t("AOjV"),i=t("AI3G"),c=t("Zb5r"),p=o.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(r.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["snDZ",0,2,6,1,3,4,5,7]]]);