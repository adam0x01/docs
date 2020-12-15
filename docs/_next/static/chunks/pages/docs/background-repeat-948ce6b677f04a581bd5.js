_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"3HRN":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-repeat",function(){return n("sfaT")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),o=n("98BF"),c=n("Zb5r"),i=n("AOjV"),p=r.a.createElement;function l(e){var t=e.plugin,n=e.name,s=o.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(c.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",p("code",null,t)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(r)," variants:"),p(i.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,r)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),r=(n("Btb4"),n("AI3G")),o=n("iuhU"),c=s.a.createElement;function i(e){var t=e.value;return"string"===typeof t?c("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),t.map((function(e,n){return c(a.Fragment,{key:n},c(i,{value:e}),n===t.length-1?null:c("span",{className:"token punctuation"},", "))})),c("span",{className:"token punctuation"},"]")):"boolean"===typeof t?c("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var t=e.edits,n=e.indent,s=void 0===n?"":n,r=e.type,p=void 0===r?"inserted":r;return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(t).map((function(e,n){return c(a.Fragment,{key:n},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),c("span",{className:"token operator"},":")," ",c(i,{value:t[e]}),c("span",{className:"token punctuation"},","),"\n");var r})))}function l(e){var t=e.path,n=e.add,s=e.remove,o=e.before,i=e.after;return t="string"===typeof t?t.split("."):t,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return c(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(r.a)(o).map((function(e,n){return c(a.Fragment,{key:n},"  ".repeat(t.length+2),c("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&c(p,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&c(p,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),c("span",{className:"token unchanged"},i&&Object(r.a)(i).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return c(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},"BK/B":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".bg-repeat":{"background-repeat":"repeat"},".bg-no-repeat":{"background-repeat":"no-repeat"},".bg-repeat-x":{"background-repeat":"repeat-x"},".bg-repeat-y":{"background-repeat":"repeat-y"},".bg-repeat-round":{"background-repeat":"round"},".bg-repeat-space":{"background-repeat":"space"}},t("backgroundRepeat"))}}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),r=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,c){let i;(n=n||{}).indent=n.indent||"\t",c=c||"",i=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+i.newLine+t.map((a,s)=>{const r=t.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(a,n,c+n.indent);return n.transform&&(o=n.transform(t,s,o)),i.indent+o+r}).join("")+i.pad+"]";return o.pop(),p(a)}if(s(t)){let a=Object.keys(t).concat(r(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";o.push(t);const s="{"+i.newLine+a.map((s,r)=>{const o=a.length-1===r?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,n);let g=e(t[s],n,c+n.indent);return n.transform&&(g=n.transform(t,s,g)),i.indent+String(u)+": "+g+o}).join("")+i.pad+"}";return o.pop(),p(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),s=n.n(a),r=n("8Kt/"),o=n.n(r),c=s.a.createElement;function i(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return c(o.a,null,c("title",{key:"title"},n),c("meta",{key:"twitter:title",name:"twitter:title",content:n}),c("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),o=n("iuhU"),c=n("ZMKu"),i=r.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},g={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){var t=Object(s.useRef)(),n=Object(s.useState)(!1),r=n[0],o=n[1],c=Object(s.useState)({}),p=c[0],l=c[1];return Object(s.useEffect)((function(){if(r){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){l({height:t.current.contentDocument.body.scrollHeight})}}),[r]),i("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return o(!0)},style:p}))}function b(e){var t=e.color,n=e.snippet;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[t],{"bg-gray-800":!p[t]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var t=e.preview,n=e.src,a=e.snippet,s=e.previewClassName,r=e.color,c=void 0===r?"gray":r;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(d,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[c])}),i(b,{color:c,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,r=e.snippet,p=e.color,m=void 0===p?"gray":p,f=e.min,k=void 0!==f&&f,v=Object(s.useRef)(),h=Object(c.h)(0),O=Object(s.useRef)(),y=Object(s.useState)(!1),j=y[0],N=y[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){h.set(0)}));return e.observe(v.current),function(){e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:v,className:"relative rounded-t-xl ".concat(u[m])},i("div",{className:k?"md:w-88":void 0},i(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(h,(function(e){return-e}))}},t?i("div",{className:Object(o.a)("rounded-t-xl",a,l[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):i(d,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[m],{"pointer-events-none":j})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(c.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(k?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(g[m]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:m,snippet:r}))}},sfaT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("wx14"),s=n("Ff2n"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),i=n("YFqc"),p=n.n(i),l=n("tc9R"),u=n("pOT7"),g=n("vRWG"),d=n("I6Nb"),b=n("BK/B"),m=n.n(b),f=n("8C7G"),k=n("wH44"),v=(o.a.createElement,{Layout:g.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Background Repeat",description:"Utilities for controlling the repetition of an element's background image.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Repeat",slug:"repeat",children:[]},{title:"No Repeat",slug:"no-repeat",children:[]},{title:"Repeat Horizontally",slug:"repeat-horizontally",children:[]},{title:"Repeat Vertically",slug:"repeat-vertically",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=d.ContentsLayout;function O(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.a)(h,Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"repeat",toc:!0},"Repeat"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"bg-repeat")," to repeat the background image both vertically and horizontally.")),Object(c.a)(u.a,{preview:'\n  <div class="w-full bg-fuchsia-300 h-96 bg-repeat" style="background-image:url(\'/img/placeholder-fuchsia.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-repeat</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"no-repeat",toc:!0},"No Repeat"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"bg-no-repeat")," when you don't want to repeat the background image.")),Object(c.a)(u.a,{preview:'\n  <div class="w-full bg-rose-200 h-48 bg-center bg-no-repeat" style="background-image:url(\'/img/placeholder-rose.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-no-repeat</span> bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"repeat-horizontally",toc:!0},"Repeat Horizontally"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"bg-repeat-x")," to repeat the background image only horizontally.")),Object(c.a)(u.a,{preview:'\n  <div class="w-full bg-purple-300 h-48 bg-center bg-repeat-x" style="background-image:url(\'/img/placeholder-purple.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-repeat-x</span> bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"repeat-vertically",toc:!0},"Repeat Vertically"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"bg-repeat-y")," to repeat the background image only vertically.")),Object(c.a)(u.a,{preview:'\n  <div class="w-full bg-indigo-200 h-96 bg-center bg-repeat-y" style="background-image:url(\'/img/placeholder-indigo.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-repeat-y</span> bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the repetition of an element's background image at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background repeat utility. For example, adding the class ",Object(c.a)("inlineCode",{parentName:"p"},"md:bg-repeat-x")," to an element would apply the ",Object(c.a)("inlineCode",{parentName:"p"},"bg-repeat-x")," utility at medium screen sizes and above."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-repeat ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-repeat-x")," ...",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(f.a,{plugin:"backgroundRepeat",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(k.a,{plugin:"backgroundRepeat",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=v},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return d}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),o=n("ekQu"),c=n("8Kt/"),i=n.n(c),p=n("nOHt"),l=n("ap0H"),u=n("1Q1k"),g=r.a.createElement;function d(e){var t=Object(p.useRouter)();return g(r.a.Fragment,null,g(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),g(i.a,null,g("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),g("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),g(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),o=n("AOjV"),c=n("AI3G"),i=n("Zb5r"),p=r.a.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=e.plugin,n=e.name,s=Object(c.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(o.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}}},[["3HRN",0,2,6,1,3,4,5,7]]]);