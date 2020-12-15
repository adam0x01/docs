_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[114],{"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("rePB"),s=a("q1tI"),o=a.n(s),c=a("98BF"),i=a("Zb5r"),l=a("AOjV"),r=o.a.createElement;function p(e){var t=e.plugin,a=e.name,s=c.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),p="By default, ".concat(s.length?"only ".concat(Object(i.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:p}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,t)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(i.a)(o)," variants:"),r(l.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,o)}))}},neGr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,theme:t,variants:a}){e(n.default.fromPairs(n.default.map(t("outline"),(e,t)=>{const[a,n="0"]=Array.isArray(e)?e:[e];return[(0,s.default)("outline",t),{outline:a,outlineOffset:n}]})),a("outline"))}};var n=o(a("LvDl")),s=o(a("dzuX"));function o(e){return e&&e.__esModule?e:{default:e}}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),o=a.n(s),c=a("iuhU"),i=a("ZMKu"),l=o.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var t=Object(s.useRef)(),a=Object(s.useState)(!1),o=a[0],c=a[1],i=Object(s.useState)({}),r=i[0],p=i[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function a(){p({height:t.current.contentDocument.body.scrollHeight})}}),[o]),l("iframe",Object(n.a)({},e,{ref:t,onLoad:function(){return c(!0)},style:r}))}function m(e){var t=e.color,a=e.snippet;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",r[t],{"bg-gray-800":!r[t]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[t]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g(e){var t=e.preview,a=e.src,n=e.snippet,s=e.previewClassName,o=e.color,i=void 0===o?"gray":o;return l("div",{className:"relative overflow-hidden mb-8"},t?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):l(b,{src:a,className:Object(c.a)("w-full rounded-t-xl",p[i])}),l(m,{color:i,snippet:n}))}function f(e){var t=e.preview,a=e.src,n=e.previewClassName,o=e.snippet,r=e.color,g=void 0===r?"gray":r,f=e.min,j=void 0!==f&&f,O=Object(s.useRef)(),N=Object(i.h)(0),h=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],y=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){N.set(0)}));return e.observe(O.current),function(){e.disconnect()}}),[]),l("div",{className:"relative mb-8"},l("div",{ref:O,className:"relative rounded-t-xl ".concat(u[g])},l("div",{className:j?"md:w-88":void 0},l(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(N,(function(e){return-e}))}},t?l("div",{className:Object(c.a)("rounded-t-xl",n,p[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):l(b,{src:a,className:Object(c.a)("w-full rounded-t-xl",p[g],{"pointer-events-none":k})}))),l("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(i.d.div,{drag:"x",_dragX:N,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(j?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:N},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:g,snippet:o}))}},vKYu:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a("wx14"),s=a("Ff2n"),o=a("q1tI"),c=a.n(o),i=a("7ljp"),l=(a("YFqc"),a("tc9R")),r=a("pOT7"),p=a("vRWG"),u=a("I6Nb"),d=a("neGr"),b=a.n(d),m=a("8C7G"),g=a("wH44"),f=(c.a.createElement,{Layout:p.DocumentationLayout,classes:{plugin:b.a},meta:{title:"Outline",description:"Utilities for controlling an element's outline."},tableOfContents:[{title:"Remove outlines",slug:"remove-outlines",children:[]},{title:"Dotted outlines",slug:"dotted-outlines",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Outlines",slug:"outlines"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),j=u.ContentsLayout;function O(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.a)(j,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"remove-outlines",toc:!0},"Remove outlines"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"outline-none")," to hide the default browser outline on focused elements."),Object(i.a)("p",null,"It is highly recommended to apply your own focus styling for accessibility when using this utility.")),Object(i.a)(r.a,{preview:'\n  <div class="flex space-x-6 justify-center">\n    <input type="text" class="px-4 py-3 leading-5 border rounded-md" placeholder="Default focus style" />\n    <input type="text" class="px-4 py-3 leading-5 border rounded-md focus:outline-none focus:ring focus:border-blue-400" placeholder="Custom focus style" />\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Default focus style<span class="token punctuation">"</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom focus style<span class="token punctuation">"</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:outline-none focus:ring focus:border-blue-300</span> ...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)("p",null,"The ",Object(i.a)("inlineCode",{parentName:"p"},"outline-none")," utility is implemented using a transparent outline under the hood to ensure elements are still visibly focused to ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/"}),"Windows high contrast mode")," users."),Object(i.a)(l.a,{level:2,id:"dotted-outlines",toc:!0},"Dotted outlines"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"outline-white")," and ",Object(i.a)("inlineCode",{parentName:"p"},"outline-black")," utilities to add a 2px dotted border around an element with a 2px offset. These are useful as an accessible general purpose custom focus style if you don't want to design your own.")),Object(i.a)(r.a,{preview:'\n  <div class="min-w-0 flex-1 bg-gray-100 p-10 flex items-center justify-center">\n    <button type="button" class="px-6 py-3 rounded-md font-semibold bg-blue-600 text-white focus:outline-black">Button A</button>\n  </div>\n  <div class="min-w-0 flex-1 bg-blue-700 p-10 flex items-center justify-center">\n    <button type="button" class="px-6 py-3 rounded-md font-semibold bg-white text-gray-900 focus:outline-white">Button B</button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:outline-black</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:outline-white</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"flex",color:void 0,min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(l.a,{level:3,id:"outlines",toc:!0},"Outlines"),Object(i.a)("p",null,"By default Tailwind provides three outline utilities. You can customize these by editing the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.outline")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n  module",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    theme",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      extend",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        outline",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          blue",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'2px solid #0000ff'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(i.a)("p",null,"You can also provide an ",Object(i.a)("inlineCode",{parentName:"p"},"outline-offset")," value for any custom outline utilities using a tuple of the form ",Object(i.a)("inlineCode",{parentName:"p"},"[outline, outlineOffset]"),":"),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n  module",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    theme",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      extend",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        outline",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          blue",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'2px solid #0000ff'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'1px'"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(i.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(m.a,{plugin:"outline",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(g.a,{plugin:"outline",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=f},zG4Y:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/outline",function(){return a("vKYu")}])}},[["zG4Y",0,2,6,10,1,3,4,5,7,8]]]);