_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[101],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n("rePB"),t=n("q1tI"),p=n.n(t),i=n("98BF"),c=n("Zb5r"),o=n("AOjV"),l=p.a.createElement;function u(a){var e=a.plugin,n=a.name,t=i.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(a,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!t.includes(a)})).slice(0,2),u="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(t.length?"\u53ea\u751f\u6210 ".concat(Object(c.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:u}}),l("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,e)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",t.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(c.a)(p)," \u53d8\u4f53:"),l(o.a,{path:"variants.extend",before:"...",add:Object(s.a)({},e,p)}))}},LZQ4:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var s=n("wx14"),t=n("Ff2n"),p=n("q1tI"),i=n.n(p),c=n("7ljp"),o=n("YFqc"),l=n.n(o),u=n("tc9R"),r=n("pOT7"),m=n("vRWG"),d=n("I6Nb"),g=n("tnc+"),b=n.n(g),k=n("8C7G"),h=n("wH44"),v=(i.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:b.a},meta:{title:"Line Height",description:"Utilities for controlling the leading (line height) of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Relative line-heights",slug:"relative-line-heights",children:[]},{title:"Fixed line-heights",slug:"fixed-line-heights",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),j=d.ContentsLayout;function O(a){var e=a.components,n=Object(t.a)(a,["components"]);return Object(c.a)(j,Object(s.a)({},v,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:2,id:"relative-line-heights",toc:!0},"Relative line-heights"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"leading-none"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-tight"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-snug"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-normal"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-relaxed"),", and ",Object(c.a)("inlineCode",{parentName:"p"},"leading-loose")," utilities to give an element a relative line-height based on its current font-size.")),Object(c.a)(r.a,{preview:'\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-none</p>\n    <p class="leading-none text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-tight</p>\n    <p class="leading-tight text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-snug</p>\n    <p class="leading-snug text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-normal</p>\n    <p class="leading-normal text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-relaxed</p>\n    <p class="leading-relaxed text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div>\n    <p class="text-sm text-gray-600">.leading-loose</p>\n    <p class="leading-loose text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-tight</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-snug</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-normal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-relaxed</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-loose</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:2,id:"fixed-line-heights",toc:!0},"Fixed line-heights"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"leading-{size}")," utilities to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element's final size.")),Object(c.a)(r.a,{preview:'\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-3</p>\n    <p class="leading-3 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-4</p>\n    <p class="leading-4 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-5</p>\n    <p class="leading-5 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-6</p>\n    <p class="leading-6 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-7</p>\n    <p class="leading-7 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-8</p>\n    <p class="leading-8 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-9</p>\n    <p class="leading-9 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div>\n    <p class="mb-1 text-sm text-emerald-600">.leading-10</p>\n    <p class="leading-10 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-3</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-4</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-5</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-7</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-9</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-10</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the line height of an element at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing line height utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:leading-loose")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"leading-loose")," utility at only medium screen sizes and above."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(s.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"'),"leading-none ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:leading-loose")," ...",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet ...",Object(c.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)("p",null,"By default Tailwind provides six relative and eight fixed ",Object(c.a)("inlineCode",{parentName:"p"},"line-height")," utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"lineHeight")," section of your Tailwind theme config."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(s.a)({parentName:"div"},{className:"language-diff-js"}),Object(c.a)("code",Object(s.a)({parentName:"pre"},{className:"language-diff-js"}),Object(c.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       lineHeight",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(c.a)("span",Object(s.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'extra-loose'"),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'2.5'"),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'12'"),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'3rem'"),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(c.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(c.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(k.a,{plugin:"lineHeight",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(h.a,{plugin:"lineHeight",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=v},hCV3:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/line-height",function(){return n("LZQ4")}])},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return k}));var s=n("wx14"),t=n("q1tI"),p=n.n(t),i=n("iuhU"),c=n("ZMKu"),o=p.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},r={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(a){var e=Object(t.useRef)(),n=Object(t.useState)(!1),p=n[0],i=n[1],c=Object(t.useState)({}),l=c[0],u=c[1];return Object(t.useEffect)((function(){if(p){var a=new window.ResizeObserver(n);return n(),a.observe(e.current.contentDocument.body),function(){a.disconnect()}}function n(){u({height:e.current.contentDocument.body.scrollHeight})}}),[p]),o("iframe",Object(s.a)({},a,{ref:e,onLoad:function(){return i(!0)},style:l}))}function g(a){var e=a.color,n=a.snippet;return o("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},o("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(a){var e=a.preview,n=a.src,s=a.snippet,t=a.previewClassName,p=a.color,c=void 0===p?"gray":p;return o("div",{className:"relative overflow-hidden mb-8"},e?o("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",u[c],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):o(d,{src:n,className:Object(i.a)("w-full rounded-t-xl",u[c])}),o(g,{color:c,snippet:s}))}function k(a){var e=a.preview,n=a.src,s=a.previewClassName,p=a.snippet,l=a.color,b=void 0===l?"gray":l,k=a.min,h=void 0!==k&&k,v=Object(t.useRef)(),j=Object(c.h)(0),O=Object(t.useRef)(),N=Object(t.useState)(!1),f=N[0],x=N[1];return Object(t.useEffect)((function(){var a=new window.ResizeObserver((function(){j.set(0)}));return a.observe(v.current),function(){a.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:v,className:"relative rounded-t-xl ".concat(r[b])},o("div",{className:h?"md:w-88":void 0},o(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(j,(function(a){return-a}))}},e?o("div",{className:Object(i.a)("rounded-t-xl",s,u[b],{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):o(d,{src:n,className:Object(i.a)("w-full rounded-t-xl",u[b],{"pointer-events-none":f})}))),o("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(c.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(h?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[b]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(g,{color:b,snippet:p}))}},"tnc+":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,t.default)("lineHeight",[["leading",["lineHeight"]]])};var s,t=(s=n("y2+P"))&&s.__esModule?s:{default:s}}},[["hCV3",0,2,6,1,3,4,5,7,8,9]]]);