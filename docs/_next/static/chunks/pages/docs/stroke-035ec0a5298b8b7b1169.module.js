(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[140],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),r=t("Zb5r"),o=t("AOjV"),i=s.a.createElement;function p(e){var{plugin:a,name:t}=e,n=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="By default, ".concat(n.length?"only ".concat(Object(r.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:p}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,a)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(r.a)(s)," variants:"),i(o.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},"9Jru":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;const n=e=>Object.assign({},...Object.entries(e).flatMap(([e,a])=>"object"==typeof a?Object.entries(n(a)).map(([a,t])=>({[e+("DEFAULT"===a?"":"-"+a)]:t})):[{[""+e]:a}]));var s=n;a.default=s},EiYB:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/stroke",function(){return t("ptxX")}])},OiSs:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return s.default.isFunction(e)?e({}):e};var n,s=(n=t("LvDl"))&&n.__esModule?n:{default:n}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),r=t("iuhU"),o=t("ZMKu"),i=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:r,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function n(){o({height:a.current.contentDocument.body.scrollHeight})}},[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>c(!0),style:r}))}function d(e){var{color:a,snippet:t}=e;return i("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},i("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(e){var{preview:a,src:t,snippet:n,previewClassName:s,color:c="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},a?i("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[c])}),i(d,{color:c,snippet:n}))}function j(e){var{preview:a,src:t,previewClassName:n,snippet:c,color:p="gray",min:g=!1}=e,j=Object(s.useRef)(),O=Object(o.h)(0),N=Object(s.useRef)(),{0:f,1:k}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{O.set(0)});return e.observe(j.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:j,className:"relative rounded-t-xl ".concat(u[p])},i("div",{className:g?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,e=>-e)}},a?i("div",{className:Object(r.a)("rounded-t-xl",n,l[p],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[p],{"pointer-events-none":f})}))),i("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[p]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(d,{color:p,snippet:c}))}},ptxX:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),r=t.n(c),o=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),b=t("vRWG"),m=t("I6Nb"),d=t("tpGF"),g=t.n(d),j=t("8C7G"),O=t("wH44"),N=(r.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:g()},meta:{title:"Stroke",description:"Utilities for styling the stroke of SVG elements."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=m.ContentsLayout;function k(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(o.a)(f,Object(n.a)({},N,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"stroke-current")," to set the stroke color of an SVG to the current text color. This makes it easy to set an element's stroke color by combining this class with an existing ",Object(o.a)(p.a,{href:"/docs/text-color",passHref:!0},Object(o.a)("a",null,"text color utility")),"."),Object(o.a)("p",null,"Useful for styling icon sets like ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"http://heroicons.com/"}),"Heroicons")," that are drawn entirely with strokes.")),Object(o.a)(u.a,{preview:'\n  <div class="text-center">\n    <svg class="stroke-current text-purple-600 inline-block h-12 w-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <circle cx="8" cy="21" r="2" />\n      <circle cx="20" cy="21" r="2" />\n      <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1" />\n    </svg>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">stroke-current text-purple-600</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"Control which stroke utilities Tailwind generates by customizing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.stroke")," section in your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     stroke",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       current",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'currentColor'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token function-variable function"}),"stroke"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token parameter"}),"theme")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'red'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"theme"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'colors.red.500'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'green'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"theme"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'colors.green.500'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'blue'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"theme"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'colors.blue.500'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"stroke",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"stroke",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=N},tpGF:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,theme:a,variants:t}){const o=(0,s.default)(a("stroke"));e(n.default.fromPairs(n.default.map(o,(e,a)=>[(0,c.default)("stroke",a),{stroke:(0,r.default)(e)}])),t("stroke"))}};var n=o(t("LvDl")),s=o(t("9Jru")),c=o(t("dzuX")),r=o(t("OiSs"));function o(e){return e&&e.__esModule?e:{default:e}}}},[["EiYB",0,2,6,10,1,3,4,5,7,8]]]);