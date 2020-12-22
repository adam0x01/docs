_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"3eEM":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-family",function(){return t("BVCO")}])},"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("98BF"),p=t("Zb5r"),r=t("AOjV"),i=c.a.createElement;function l(a){var e=a.plugin,t=a.name,s=o.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(a,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(p.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,e)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(p.a)(c)," \u53d8\u4f53:"),i(r.a,{path:"variants.extend",before:"...",add:Object(n.a)({},e,c)}))}},BVCO:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),p=t("7ljp"),r=t("YFqc"),i=t.n(r),l=t("tc9R"),m=t("pOT7"),b=t("vRWG"),u=t("I6Nb"),j=t("Ug0r"),O=t.n(j),d=t("8C7G"),N=t("wH44"),g=(o.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:O.a},meta:{title:"Font Family",description:"Utilities for controlling the font family of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Sans-serif",slug:"sans-serif",children:[]},{title:"Serif",slug:"serif",children:[]},{title:"Monospaced",slug:"monospaced",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Font Families",slug:"font-families"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=u.ContentsLayout;function k(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(p.a)(f,Object(n.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"sans-serif",toc:!0},"Sans-serif"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"font-sans")," to apply a web safe sans-serif font family:")),Object(p.a)(m.a,{preview:'\n  <p class="font-sans text-xl text-light-blue-600 text-center">\n    The quick brown fox jumps over the lazy dog.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-sans</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  The quick brown fox jumps over the lazy dog.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"serif",toc:!0},"Serif"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"font-serif")," to apply a web safe serif font family:")),Object(p.a)(m.a,{preview:'\n  <p class="font-serif text-xl text-emerald-600 text-center">\n    The quick brown fox jumps over the lazy dog.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-serif</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  The quick brown fox jumps over the lazy dog.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"monospaced",toc:!0},"Monospaced"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"font-mono")," to apply a web safe monospaced font family:")),Object(p.a)(m.a,{preview:'\n  <p class="font-mono text-xl text-indigo-600 text-center">\n    The quick brown fox jumps over the lazy dog.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-mono</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  The quick brown fox jumps over the lazy dog.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the font family of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing font family utility class. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:font-serif")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"font-serif")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"font-sans ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:font-serif"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"font-families",toc:!0},"Font Families"),Object(p.a)("p",null,"By default Tailwind provides three font family utilities: a cross-browser sans-serif stack, a cross-browser serif stack, and a cross-browser monospaced stack. You can change, add, or remove these by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.fontFamily")," section of your Tailwind config."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     fontFamily",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'sans'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'ui-sans-serif'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'system-ui'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'serif'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'ui-serif'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'Georgia'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'mono'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'ui-monospace'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'SFMono-Regular'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'display'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'Oswald'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'body'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'Open Sans'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"Font families can be specified as an array or as a simple comma-delimited string:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Array format:"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Helvetica'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Arial'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans-serif'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Comma-delimited format:"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Helvetica, Arial, sans-serif'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Note that ",Object(p.a)("strong",{parentName:"p"},"Tailwind does not automatically escape font names")," for you. If you're using a font that contains an invalid identifier, wrap it in quotes or escape the invalid characters."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Won't work:"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Exo 2'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Add quotes:"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'\"Exo 2\"'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ...or escape the space:"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'sans'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Exo\\\\ 2'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token spread operator"}),"..."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n"))),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(d.a,{plugin:"fontFamily",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(N.a,{plugin:"fontFamily",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=g},Ug0r:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("fontFamily",[["font",["fontFamily"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return O})),t.d(e,"b",(function(){return d}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),p=t("ZMKu"),r=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},m={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function u(a){var e=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],o=t[1],p=Object(s.useState)({}),i=p[0],l=p[1];return Object(s.useEffect)((function(){if(c){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),function(){a.disconnect()}}function t(){l({height:e.current.contentDocument.body.scrollHeight})}}),[c]),r("iframe",Object(n.a)({},a,{ref:e,onLoad:function(){return o(!0)},style:i}))}function j(a){var e=a.color,t=a.snippet;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",i[e],{"bg-gray-800":!i[e]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function O(a){var e=a.preview,t=a.src,n=a.snippet,s=a.previewClassName,c=a.color,p=void 0===c?"gray":c;return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[p],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):r(u,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[p])}),r(j,{color:p,snippet:n}))}function d(a){var e=a.preview,t=a.src,n=a.previewClassName,c=a.snippet,i=a.color,O=void 0===i?"gray":i,d=a.min,N=void 0!==d&&d,g=Object(s.useRef)(),f=Object(p.h)(0),k=Object(s.useRef)(),h=Object(s.useState)(!1),v=h[0],y=h[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){f.set(0)}));return a.observe(g.current),function(){a.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:g,className:"relative rounded-t-xl ".concat(m[O])},r("div",{className:N?"md:w-88":void 0},r(p.d.div,{className:"relative",style:{marginRight:Object(p.i)(f,(function(a){return-a}))}},e?r("div",{className:Object(o.a)("rounded-t-xl",n,l[O],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(u,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[O],{"pointer-events-none":v})}))),r("div",{ref:k,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(p.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:k,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(N?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[O]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(j,{color:O,snippet:c}))}}},[["3eEM",0,2,6,1,3,4,5,7,8,9]]]);