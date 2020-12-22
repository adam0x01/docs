_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[132],{"47w/":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-offset-width",function(){return t("9S0q")}])},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("98BF"),i=t("Zb5r"),r=t("AOjV"),p=o.a.createElement;function l(e){var a=e.plugin,t=e.name,s=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(i.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",p("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",p("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",p("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),p("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(i.a)(o)," \u53d8\u4f53:"),p(r.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,o)}))}},"9S0q":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),i=t("7ljp"),r=t("YFqc"),p=t.n(r),l=t("tc9R"),u=t("pOT7"),g=t("vRWG"),d=t("I6Nb"),b=t("WBVn"),m=t.n(b),f=t("8C7G"),h=t("wH44"),O=(c.a.createElement,{Layout:g.DocumentationLayout,classes:{plugin:m.a,transformProperties:function(e){e.selector;var a=e.properties;return a["box-shadow"]="0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow)",a}},meta:{title:"Ring Offset Width",description:"Utilities for simulating an offset when adding outline rings."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Changing the offset color",slug:"changing-the-offset-color"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),j=d.ContentsLayout;function N(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(i.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"ring-offset-{width}")," utilities to simulate an offset by adding solid white box-shadow and increasing the thickness of the accompanying outline ring to accommodate the offset.")),Object(i.a)(u.a,{preview:'\n  <div class="bg-white grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center p-8 ">\n    <button tabindex="-1" class="focus:outline-none text-sm w-32 py-3 rounded-md font-semibold text-white bg-pink-500 ring ring-pink-600 ring-offset-0">\n      ring-offset-0\n    </button>\n    <button tabindex="-1" class="focus:outline-none text-sm w-32 py-3 rounded-md font-semibold text-white bg-pink-500 ring ring-pink-600 ring-offset-2">\n      ring-offset-2\n    </button>\n    <button tabindex="-1" class="focus:outline-none text-sm w-32 py-3 rounded-md font-semibold text-white bg-pink-500 ring ring-pink-600 ring-offset-4">\n      ring-offset-4\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... ring ring-pink-600 <span class="code-highlight bg-code-highlight">ring-offset-0</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ring-0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... ring ring-pink-600 <span class="code-highlight bg-code-highlight">ring-offset-2</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ring-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... ring ring-pink-600 <span class="code-highlight bg-code-highlight">ring-offset-4</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ring-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"p-0 border -mb-px",color:"fuchsia",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"changing-the-offset-color",toc:!0},"Changing the offset color"),Object(i.a)("p",null,"You can't actually offset a box-shadow in CSS, so we have to fake it using a solid color shadow that matches the parent background color. We use white by default, but if you are adding a ring offset over a different background color, you should use the ",Object(i.a)("inlineCode",{parentName:"p"},"ring-offset-{color}")," utilities to match the parent background color:")),Object(i.a)(u.a,{preview:'\n  <div class="bg-emerald-100 grid grid-cols-1 gap-6 justify-items-center p-8 ">\n    <p class="font-semibold text-emerald-600">bg-green-100</p>\n    <button tabindex="-1" class="focus:outline-none text-sm px-5 py-3 rounded-md font-semibold text-white bg-emerald-500 ring ring-emerald-600 ring-offset-4 ring-offset-emerald-100">\n      ring-offset-green-100\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... <span class="code-highlight bg-code-highlight">bg-green-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... ring ring-green-600 <span class="code-highlight bg-code-highlight">ring-offset-4</span> <span class="code-highlight bg-code-highlight">ring-offset-green-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    ring-offset-green-100\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-0",color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)("p",null,"For more information, see the ",Object(i.a)(p.a,{href:"/docs/ring-offset-color",passHref:!0},Object(i.a)("a",null,"ringOffsetColor documentation")),"."),Object(i.a)("hr",null),Object(i.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the ring offset width at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ring offset width utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:ring-offset-4")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"ring-offset-4")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"ring-2 ring-offset-2 ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:ring-offset-4"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)("hr",null),Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)("p",null,"To customize which ring offset width utilities are generated, add your custom values under ",Object(i.a)("inlineCode",{parentName:"p"},"ringOffsetWidth")," key in the ",Object(i.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ringOffsetWidth",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'3'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'3px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'6'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'6px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'10'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'10px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(i.a)("p",null,"Learn more about customizing the default theme in the ",Object(i.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(i.a)("a",null,"theme customization documentation")),"."),Object(i.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(f.a,{plugin:"ringOffsetWidth",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(h.a,{plugin:"ringOffsetWidth",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},WBVn:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,theme:a,variants:t}){e(n.default.fromPairs(n.default.map(n.default.omit(a("ringOffsetWidth"),"DEFAULT"),(e,a)=>[(0,s.default)("ring-offset",a),{"--tw-ring-offset-width":e}])),t("ringOffsetWidth"))}};var n=o(t("LvDl")),s=o(t("dzuX"));function o(e){return e&&e.__esModule?e:{default:e}}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return f}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),i=t("ZMKu"),r=o.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},g={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){var a=Object(s.useRef)(),t=Object(s.useState)(!1),o=t[0],c=t[1],i=Object(s.useState)({}),p=i[0],l=i[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(t);return t(),e.observe(a.current.contentDocument.body),function(){e.disconnect()}}function t(){l({height:a.current.contentDocument.body.scrollHeight})}}),[o]),r("iframe",Object(n.a)({},e,{ref:a,onLoad:function(){return c(!0)},style:p}))}function b(e){var a=e.color,t=e.snippet;return r("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},r("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function m(e){var a=e.preview,t=e.src,n=e.snippet,s=e.previewClassName,o=e.color,i=void 0===o?"gray":o;return r("div",{className:"relative overflow-hidden mb-8"},a?r("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):r(d,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[i])}),r(b,{color:i,snippet:n}))}function f(e){var a=e.preview,t=e.src,n=e.previewClassName,o=e.snippet,p=e.color,m=void 0===p?"gray":p,f=e.min,h=void 0!==f&&f,O=Object(s.useRef)(),j=Object(i.h)(0),N=Object(s.useRef)(),k=Object(s.useState)(!1),v=k[0],w=k[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){j.set(0)}));return e.observe(O.current),function(){e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:O,className:"relative rounded-t-xl ".concat(u[m])},r("div",{className:h?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(j,(function(e){return-e}))}},a?r("div",{className:Object(c.a)("rounded-t-xl",n,l[m],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):r(d,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[m],{"pointer-events-none":v})}))),r("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(h?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(g[m]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:m,snippet:o}))}}},[["47w/",0,2,6,10,1,3,4,5,7,8]]]);