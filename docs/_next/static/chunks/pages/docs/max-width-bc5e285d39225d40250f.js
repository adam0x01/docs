_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[106],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),p=t("98BF"),r=t("Zb5r"),o=t("AOjV"),i=c.a.createElement;function l(a){var e=a.plugin,t=a.name,s=p.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(a,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(r.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,e)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(r.a)(c)," \u53d8\u4f53:"),i(o.a,{path:"variants.extend",before:"...",add:Object(n.a)({},e,c)}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var t={},n=0;n<a.length;n++){var s=a[n],c=e(s),p=t[c];Array.isArray(p)?t[c].push(s):t[c]=[s]}return t}},DVEO:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("maxWidth",[["max-w",["maxWidth"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},Qtp6:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/max-width",function(){return t("rOsi")}])},"cOG/":function(a,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return r}));var n=t("KQm4"),s=t("C4b9"),c=t.n(s);function p(a){return Object(n.a)(a).sort((function(a,e){var t=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);t=null===t?NaN:parseFloat(t[1]);var n=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return n=null===n?NaN:parseFloat(n[1]),isNaN(t)&&isNaN(n)?0:isNaN(t)?1:isNaN(n)?-1:t-n}))}function r(a){return Object.values(c()(a,(function(a){return a.match(/^(.*?)[^-]+$/)[1]}))).flatMap(p)}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),p=t("iuhU"),r=t("ZMKu"),o=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(a){var e=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],p=t[1],r=Object(s.useState)({}),i=r[0],l=r[1];return Object(s.useEffect)((function(){if(c){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),function(){a.disconnect()}}function t(){l({height:e.current.contentDocument.body.scrollHeight})}}),[c]),o("iframe",Object(n.a)({},a,{ref:e,onLoad:function(){return p(!0)},style:i}))}function d(a){var e=a.color,t=a.snippet;return o("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",i[e],{"bg-gray-800":!i[e]})},o("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[e]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(a){var e=a.preview,t=a.src,n=a.snippet,s=a.previewClassName,c=a.color,r=void 0===c?"gray":c;return o("div",{className:"relative overflow-hidden mb-8"},e?o("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):o(b,{src:t,className:Object(p.a)("w-full rounded-t-xl",l[r])}),o(d,{color:r,snippet:n}))}function j(a){var e=a.preview,t=a.src,n=a.previewClassName,c=a.snippet,i=a.color,g=void 0===i?"gray":i,j=a.min,O=void 0!==j&&j,N=Object(s.useRef)(),f=Object(r.h)(0),h=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],x=v[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){f.set(0)}));return a.observe(N.current),function(){a.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:N,className:"relative rounded-t-xl ".concat(u[g])},o("div",{className:O?"md:w-88":void 0},o(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(f,(function(a){return-a}))}},e?o("div",{className:Object(p.a)("rounded-t-xl",n,l[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):o(b,{src:t,className:Object(p.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":k})}))),o("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(r.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[g]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(d,{color:g,snippet:c}))}},rOsi:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return v}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),r=t("7ljp"),o=t("YFqc"),i=t.n(o),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),b=t("I6Nb"),d=t("DVEO"),g=t.n(d),j=t("8C7G"),O=t("wH44"),N=t("cOG/"),f=(p.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:g.a,sort:N.a},meta:{title:"\u6700\u5927\u5bbd\u5ea6",description:"\u7528\u6765\u8bbe\u7f6e\u5143\u7d20\u6700\u5927\u5bbd\u5ea6\u7684\u529f\u80fd\u7c7b"},tableOfContents:[{title:"\u4f7f\u7528\u65b9\u6cd5",slug:"",children:[]},{title:"Prose",slug:"prose",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-1",children:[]},{title:"\u5b9a\u5236",slug:"-2",children:[{title:"Max-Width Scale",slug:"max-width-scale"},{title:"\u53d8\u4f53",slug:"-3"},{title:"\u7981\u7528",slug:"-4"}]}]}),h=b.ContentsLayout;function v(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(r.a)(h,Object(n.a)({},f,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"",toc:!0},"\u4f7f\u7528\u65b9\u6cd5"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"max-w-{size}")," \u529f\u80fd\u7c7b\u8bbe\u7f6e\u5143\u7d20\u7684\u6700\u5927\u5bbd\u5ea6\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="max-w-md mx-auto rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">\n    max-w-md\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">max-w-md</span> mx-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  max-w-md\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"prose",toc:!0},"Prose"),Object(r.a)("p",null,"\u6211\u4eec\u9ed8\u8ba4\u589e\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u6700\u5927\u5bbd\u5ea6\uff0c\u53eb\u505a ",Object(r.a)("inlineCode",{parentName:"p"},"max-w-prose"),"\u3002\u5982\u679c\u60a8\u719f\u6089 ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-typography"}),"\u6392\u7248\u63d2\u4ef6"),"\uff0c\u60a8\u53ef\u80fd\u4f1a\u8ba4\u8bc6\u8fd9\u4e2a\u3002\u8fd9\u4e2a\u7c7b\u80cc\u540e\u7684\u60f3\u6cd5\u662f\uff0c\u5b83\u5141\u8bb8\u60a8\u6709\u4e00\u4e2a\u6700\u4f73\u7684\u9605\u8bfb\u5bbd\u5ea6\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="max-w-prose text-sm text-purple-700 p-6">\n    <p class="font-bold">Why do you never see elephants hiding in trees?</p>\n    <p>Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">max-w-prose</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>font-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Why do you never see elephants hiding in trees?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("hr",null),Object(r.a)(l.a,{level:2,id:"-1",toc:!0},"\u54cd\u5e94\u5f0f"),Object(r.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5143\u7d20\u7684\u6700\u5927\u5bbd\u5ea6\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u6700\u5927\u5bbd\u5ea6\u529f\u80fd\u7c7b\u524d\u6dfb\u52a0 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"max-w-sm ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:max-w-lg")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",Object(r.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(r.a)("hr",null),Object(r.a)(l.a,{level:2,id:"-2",toc:!0},"\u5b9a\u5236"),Object(r.a)(l.a,{level:3,id:"max-width-scale",toc:!0},"Max-Width Scale"),Object(r.a)("p",null,"\u5728\u60a8\u7684 ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," \u6587\u4ef6\u7684 ",Object(r.a)("inlineCode",{parentName:"p"},"theme.maxWidth")," \u90e8\u5206\u5b9a\u5236 Tailwind \u7684\u9ed8\u8ba4\u6700\u5927\u5bbd\u5ea6\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     maxWidth",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/4'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'25%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/2'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'50%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3/4'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'75%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)("p",null,"\u5728 ",Object(r.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"\u4e3b\u9898\u81ea\u5b9a\u4e49\u6587\u6863"))," \u4e2d\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u4e3b\u9898\u7684\u4fe1\u606f\u3002"),Object(r.a)(l.a,{level:3,id:"-3",toc:!0},"\u53d8\u4f53")),Object(r.a)(j.a,{plugin:"maxWidth",name:"max-width",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"-4",toc:!0},"\u7981\u7528")),Object(r.a)(O.a,{plugin:"maxWidth",name:"max-width",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=f}},[["Qtp6",0,2,6,1,3,4,5,7,8,9]]]);