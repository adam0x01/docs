_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[76],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),p=n("98BF"),o=n("Zb5r"),r=n("AOjV"),i=c.a.createElement;function l(a){var e=a.plugin,n=a.name,s=p.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(a,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:Object(t.a)({},e,c)}))}},BbQR:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gap",function(){return n("V+vt")}])},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var n={},t=0;t<a.length;t++){var s=a[t],c=e(s),p=n[c];Array.isArray(p)?n[c].push(s):n[c]=[s]}return n}},"V+vt":function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),r=n("YFqc"),i=n.n(r),l=n("tc9R"),u=n("pOT7"),b=n("vRWG"),m=n("I6Nb"),d=n("aZmt"),g=n.n(d),j=n("8C7G"),O=n("wH44"),N=n("cOG/"),k=(p.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:g.a,sort:N.a},meta:{title:"Gap",description:"Utilities for controlling gutters between grid rows and columns."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Changing row and column gaps independently",slug:"changing-row-and-column-gaps-independently"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=m.ContentsLayout;function h(a){var e=a.components,n=Object(s.a)(a,["components"]);return Object(o.a)(f,Object(t.a)({},k,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"gap-{size}")," to change the gap between both rows and columns in grid layouts.")),Object(o.a)(u.a,{preview:'\n  <div>\n    <div class="grid grid-cols-2 gap-4">\n      <div class="h-16 rounded-md text-center bg-indigo-500"></div>\n      <div class="h-16 rounded-md text-center bg-indigo-500"></div>\n      <div class="h-16 rounded-md text-center bg-indigo-500"></div>\n      <div class="h-16 rounded-md text-center bg-indigo-500"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid <span class="code-highlight bg-code-highlight">gap-4</span> grid-cols-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"changing-row-and-column-gaps-independently",toc:!0},"Changing row and column gaps independently"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"gap-x-{size}")," and ",Object(o.a)("inlineCode",{parentName:"p"},"gap-y-{size}")," to change the gap between rows and columns independently.")),Object(o.a)(u.a,{preview:'\n  <div>\n    <div class="grid grid-cols-3 gap-x-8 gap-y-4">\n      <div class="h-16 rounded-md text-center bg-rose-500"></div>\n      <div class="h-16 rounded-md text-center bg-rose-500"></div>\n      <div class="h-16 rounded-md text-center bg-rose-500"></div>\n      <div class="h-16 rounded-md text-center bg-rose-500"></div>\n      <div class="h-16 rounded-md text-center bg-rose-500"></div>\n      <div class="h-16 rounded-md text-center bg-rose-500"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid <span class="code-highlight bg-code-highlight">gap-x-8</span> <span class="code-highlight bg-code-highlight">gap-y-4</span> grid-cols-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("hr",null),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the gap at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing gap utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:gap-6")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"gap-6")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"grid gap-4 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:gap-6")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)("hr",null),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"By default Tailwind's gap scale matches your configured ",Object(o.a)(i.a,{href:"/docs/customizing-spacing",passHref:!0},Object(o.a)("a",null,"spacing scale")),"."),Object(o.a)("p",null,"You can customize the global spacing scale in the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.spacing")," or ",Object(o.a)("inlineCode",{parentName:"p"},"theme.extend.spacing")," sections of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       spacing",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'72'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'18rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'84'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'21rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'96'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"To customize the gap scale separately, use the ",Object(o.a)("inlineCode",{parentName:"p"},"gap")," section of your Tailwind theme config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       gap",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'11'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2.75rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'13'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3.25rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"gap",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"gap",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=k},aZmt:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("gap",[["gap",["gap"]],["gap-x",["columnGap"]],["gap-y",["rowGap"]]])};var t,s=(t=n("y2+P"))&&t.__esModule?t:{default:t}},"cOG/":function(a,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return o}));var t=n("KQm4"),s=n("C4b9"),c=n.n(s);function p(a){return Object(t.a)(a).sort((function(a,e){var n=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t)?0:isNaN(n)?1:isNaN(t)?-1:n-t}))}function o(a){return Object.values(c()(a,(function(a){return a.match(/^(.*?)[^-]+$/)[1]}))).flatMap(p)}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return j}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),p=n("iuhU"),o=n("ZMKu"),r=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(a){var e=Object(s.useRef)(),n=Object(s.useState)(!1),c=n[0],p=n[1],o=Object(s.useState)({}),i=o[0],l=o[1];return Object(s.useEffect)((function(){if(c){var a=new window.ResizeObserver(n);return n(),a.observe(e.current.contentDocument.body),function(){a.disconnect()}}function n(){l({height:e.current.contentDocument.body.scrollHeight})}}),[c]),r("iframe",Object(t.a)({},a,{ref:e,onLoad:function(){return p(!0)},style:i}))}function d(a){var e=a.color,n=a.snippet;return r("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",i[e],{"bg-gray-800":!i[e]})},r("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(a){var e=a.preview,n=a.src,t=a.snippet,s=a.previewClassName,c=a.color,o=void 0===c?"gray":c;return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:n,className:Object(p.a)("w-full rounded-t-xl",l[o])}),r(d,{color:o,snippet:t}))}function j(a){var e=a.preview,n=a.src,t=a.previewClassName,c=a.snippet,i=a.color,g=void 0===i?"gray":i,j=a.min,O=void 0!==j&&j,N=Object(s.useRef)(),k=Object(o.h)(0),f=Object(s.useRef)(),h=Object(s.useState)(!1),v=h[0],x=h[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){k.set(0)}));return a.observe(N.current),function(){a.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:N,className:"relative rounded-t-xl ".concat(u[g])},r("div",{className:O?"md:w-88":void 0},r(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(k,(function(a){return-a}))}},e?r("div",{className:Object(p.a)("rounded-t-xl",t,l[g],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:n,className:Object(p.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":v})}))),r("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(o.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[g]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(d,{color:g,snippet:c}))}}},[["BbQR",0,2,6,1,3,4,5,7,8,9]]]);