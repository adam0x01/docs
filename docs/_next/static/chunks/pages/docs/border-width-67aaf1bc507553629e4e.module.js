(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),p=n("Zb5r"),o=n("AOjV"),i=s.a.createElement;function r(a){var{plugin:e,name:n}=a,t=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),r="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(t.length?"\u53ea\u751f\u6210 ".concat(Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,e)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",t.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(p.a)(s)," \u53d8\u4f53:"),i(o.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},kmR3:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n}){const c=[(a,e)=>({[(0,s.default)("border",e)]:{borderWidth:""+a}}),(a,e)=>({[(0,s.default)("border-t",e)]:{borderTopWidth:""+a},[(0,s.default)("border-r",e)]:{borderRightWidth:""+a},[(0,s.default)("border-b",e)]:{borderBottomWidth:""+a},[(0,s.default)("border-l",e)]:{borderLeftWidth:""+a}})];a(t.default.flatMap(c,a=>t.default.flatMap(e("borderWidth"),(e,n)=>a(e,n))),n("borderWidth"))}};var t=c(n("LvDl")),s=c(n("dzuX"));function c(a){return a&&a.__esModule?a:{default:a}}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return j}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),p=n("iuhU"),o=n("ZMKu"),i=c.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},d={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(a){var e=Object(s.useRef)(),{0:n,1:c}=Object(s.useState)(!1),{0:p,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),()=>{a.disconnect()}}function t(){o({height:e.current.contentDocument.body.scrollHeight})}},[n]),i("iframe",Object(t.a)({},a,{ref:e,onLoad:()=>c(!0),style:p}))}function g(a){var{color:e,snippet:n}=a;return i("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",r[e],{"bg-gray-800":!r[e]})},i("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(a){var{preview:e,src:n,snippet:t,previewClassName:s,color:c="gray"}=a;return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):i(b,{src:n,className:Object(p.a)("w-full rounded-t-xl",l[c])}),i(g,{color:c,snippet:t}))}function j(a){var{preview:e,src:n,previewClassName:t,snippet:c,color:r="gray",min:m=!1}=a,j=Object(s.useRef)(),k=Object(o.h)(0),O=Object(s.useRef)(),{0:h,1:N}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var a=new window.ResizeObserver(()=>{k.set(0)});return a.observe(j.current),()=>{a.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:j,className:"relative rounded-t-xl ".concat(d[r])},i("div",{className:m?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(k,a=>-a)}},e?i("div",{className:Object(p.a)("rounded-t-xl",t,l[r],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(b,{src:n,className:Object(p.a)("w-full rounded-t-xl",l[r],{"pointer-events-none":h})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(m?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(u[r]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:r,snippet:c}))}},t6vv:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),i=n("YFqc"),r=n.n(i),l=n("tc9R"),d=n("pOT7"),u=n("vRWG"),b=n("I6Nb"),g=n("kmR3"),m=n.n(g),j=n("8C7G"),k=n("wH44"),O=(p.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:m()},meta:{title:"Border Width",description:"Utilities for controlling the width of an element's borders.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"All sides",slug:"all-sides",children:[]},{title:"Individual sides",slug:"individual-sides",children:[]},{title:"Between elements",slug:"between-elements",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Border Widths",slug:"border-widths"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=b.ContentsLayout;function N(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(o.a)(h,Object(t.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"all-sides",toc:!0},"All sides"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"border"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-0"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-2"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-4"),", or ",Object(o.a)("inlineCode",{parentName:"p"},".border-8")," utilities to set the border width for all sides of an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-0 border-indigo-600">\n        .border-0\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border border-indigo-600">\n        .border\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-2 border-indigo-600">\n        .border-2\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-4 border-indigo-600">\n        .border-4\n      </div>\n      <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-8 border-indigo-600">\n        .border-8\n      </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-0</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-2</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-4</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-8</span> border-indigo-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"individual-sides",toc:!0},"Individual sides"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"border-{side}"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-0"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-2"),", ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-4"),", or ",Object(o.a)("inlineCode",{parentName:"p"},".border-{side}-8")," utilities to set the border width for one side of an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-t-2 border-fuchsia-600">\n        .border-t-2\n      </div>\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-r-2 border-fuchsia-600">\n        .border-r-2\n      </div>\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-b-2 border-fuchsia-600">\n        .border-b-2\n      </div>\n      <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-l-2 border-fuchsia-600">\n        .border-l-2\n      </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-t-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-r-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-b-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-l-2</span> border-fuchsia-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"between-elements",toc:!0},"Between elements"),Object(o.a)("p",null,"You can also add borders between child elements using the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-{x/y}-{width}")," and ",Object(o.a)("inlineCode",{parentName:"p"},"divide-{color}")," utilities."),Object(o.a)("p",null,"Learn more in the ",Object(o.a)(r.a,{href:"/docs/divide-width",passHref:!0},Object(o.a)("a",null,"Divide Width"))," and ",Object(o.a)(r.a,{href:"/docs/divide-color",passHref:!0},Object(o.a)("a",null,"Divide Color"))," documentation.")),Object(o.a)(d.a,{preview:'\n  <div class="divide-y divide-light-blue-400">\n    <div class="p-4 text-light-blue-800 text-center font-extrabold">1</div>\n    <div class="p-4 text-light-blue-800 text-center font-extrabold">2</div>\n    <div class="p-4 text-light-blue-800 text-center font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">divide-y</span> divide-light-blue-400 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the border width of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing border width utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:border-t-4")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"border-t-4")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"border-2 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:border-t-4")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"border-widths",toc:!0},"Border Widths"),Object(o.a)("p",null,"By default Tailwind provides five ",Object(o.a)("inlineCode",{parentName:"p"},"border-width")," utilities, and the same number of utilities per side (top, right, bottom, and left). You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.borderWidth")," section of your Tailwind config. The values in this section will also control which utilities will be generated side."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     borderWidth",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'4'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'4px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'6'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'6px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"borderWidth",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(k.a,{plugin:"borderWidth",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},woNo:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-width",function(){return n("t6vv")}])}},[["woNo",0,2,6,10,1,3,4,5,7,8]]]);