(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[145],{"2cYW":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return t("unN4")}])},"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),o=t("Zb5r"),r=t("AOjV"),i=s.a.createElement;function p(e){var{plugin:a,name:t}=e,n=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(n.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:p}}),i("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",n.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(o.a)(s)," \u53d8\u4f53:"),i(r.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=(t("Btb4"),t("AI3G")),o=t("iuhU"),r=s.a.createElement;function i(e){var{value:a}=e;return"string"===typeof a?r("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),a.map((e,t)=>r(n.Fragment,{key:t},r(i,{value:e}),t===a.length-1?null:r("span",{className:"token punctuation"},", "))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof a?r("span",{className:"token boolean"},a.toString()):a.toString()}function p(e){var{edits:a,indent:t="",type:s="inserted"}=e;return r("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((e,c)=>{return r(n.Fragment,{key:c},r("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(p=e)?p:"'".concat(p,"'"),r("span",{className:"token operator"},":")," ",r(i,{value:a[e]}),r("span",{className:"token punctuation"},","),"\n");var p}))}function l(e){var{path:a,add:t,remove:s,before:o,after:i}=e;return a="string"===typeof a?a.split("."):a,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",a.map((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")),o&&Object(c.a)(o).map((e,t)=>r(n.Fragment,{key:t},"  ".repeat(a.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&r(p,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&r(p,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},i&&Object(c.a)(i).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n")),a.map((e,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,a,t)=>{const o=[];return function e(a,t,r){let i;(t=t||{}).indent=t.indent||"\t",r=r||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const n="["+i.newLine+a.map((n,s)=>{const c=a.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(n,t,r+t.indent);return t.transform&&(o=t.transform(a,s,o)),i.indent+o+c}).join("")+i.pad+"]";return o.pop(),p(n)}if(s(a)){let n=Object.keys(a).concat(c(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";o.push(a);const s="{"+i.newLine+n.map((s,c)=>{const o=n.length-1===c?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(a[s],t,r+t.indent);return t.transform&&(d=t.transform(a,s,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),p(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce((a,t,n)=>0===n?t:n===e.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return n}))},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("8Kt/"),o=t.n(c),r=s.a.createElement;function i(e){var{suffix:a,children:t}=e,n=t+(a?" - ".concat(a):"");return r(o.a,null,r("title",{key:"title"},n),r("meta",{key:"twitter:title",name:"twitter:title",content:n}),r("meta",{key:"og:title",property:"og:title",content:n}))}},msGM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".underline":{"text-decoration":"underline"},".line-through":{"text-decoration":"line-through"},".no-underline":{"text-decoration":"none"}},a("textDecoration"))}}},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return O}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),r=t("ZMKu"),i=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:o,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function n(){r({height:a.current.contentDocument.body.scrollHeight})}},[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>c(!0),style:o}))}function b(e){var{color:a,snippet:t}=e;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(e){var{preview:a,src:t,snippet:n,previewClassName:s,color:c="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},a?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[c])}),i(b,{color:c,snippet:n}))}function O(e){var{preview:a,src:t,previewClassName:n,snippet:c,color:p="gray",min:g=!1}=e,O=Object(s.useRef)(),j=Object(r.h)(0),h=Object(s.useRef)(),{0:f,1:N}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{j.set(0)});return e.observe(O.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:O,className:"relative rounded-t-xl ".concat(u[p])},i("div",{className:g?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(j,e=>-e)}},a?i("div",{className:Object(o.a)("rounded-t-xl",n,l[p],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[p],{"pointer-events-none":f})}))),i("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[p]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:p,snippet:c}))}},unN4:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),b=t("msGM"),g=t.n(b),O=t("8C7G"),j=t("wH44"),h=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"Text Decoration",description:"Utilities for controlling the decoration of text.",features:{responsive:!0,customizable:!1,hover:!0,focus:!0}},tableOfContents:[{title:"Underline",slug:"underline",children:[]},{title:"Line Through",slug:"line-through",children:[]},{title:"No Underline",slug:"no-underline",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=m.ContentsLayout;function N(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(f,Object(n.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"underline",toc:!0},"Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility to underline text.")),Object(r.a)(u.a,{preview:'\n  <p class="underline text-xl text-fuchsia-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"line-through",toc:!0},"Line Through"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"line-through")," utility to strike out text.")),Object(r.a)(u.a,{preview:'\n  <p class="line-through text-xl text-rose-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">line-through</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"no-underline",toc:!0},"No Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"no-underline")," utility to remove underline or line-through styling.")),Object(r.a)(u.a,{preview:'\n  <div class="text-center">\n    <a href="#" class="no-underline text-purple-600 text-xl">Link with no underline</a>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">no-underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link with no underline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the text decoration of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"no-underline ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  The quick brown fox jumped over the lazy dog.\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"hover",toc:!0},"Hover"),Object(r.a)("p",null,"To control the text decoration of an element on hover, add the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"hover:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on hover.\t")),Object(r.a)(u.a,{preview:'\t\n  <a href="#hover" class="no-underline hover:underline text-indigo-600 text-xl">Link</a>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-underline <span class="code-highlight bg-code-highlight">hover:underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4",color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix.\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:no-underline ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:hover:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Link",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"focus",toc:!0},"Focus"),Object(r.a)("p",null,"To control the text decoration of an element on focus, add the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"focus:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on focus.\t")),Object(r.a)(u.a,{preview:'\t\n  <div class="max-w-xs w-full mx-auto">\t\n    <input class="bg-white focus:underline focus:shadow-outline text-emerald-900 appearance-none inline-block w-full border border-emerald-300 rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">\t\n  </div>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:underline</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus me<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix.\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"value"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"Focus me",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(O.a,{plugin:"textDecoration",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(j.a,{plugin:"textDecoration",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=h},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return m}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("ekQu"),r=t("8Kt/"),i=t.n(r),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),d=c.a.createElement;function m(e){var a=Object(p.useRouter)();return d(c.a.Fragment,null,d(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("AOjV"),r=t("AI3G"),i=t("Zb5r"),p=c.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e){var{plugin:a,name:t}=e,n=Object(r.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase())),p("div",{className:"prose"},p("p",null,"\u5982\u679c\u4f60\u4e0d\u6253\u7b97\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",p("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",p("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),p(o.a,{path:"corePlugins",before:"...",add:n.reduce((e,a)=>u(u({},e),{},{[a]:!1}),{})}))}}},[["2cYW",0,2,6,1,3,4,5,7]]]);