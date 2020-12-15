(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[103],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),p=t("Zb5r"),i=t("AOjV"),o=s.a.createElement;function l(a){var{plugin:e,name:t}=a,n=c.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(a,e,t)=>"".concat(e," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!n.includes(a)).slice(0,2),l="By default, ".concat(n.length?"only ".concat(Object(p.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:l}}),o("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",o("code",null,e)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(p.a)(s)," variants:"),o(i.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},gzQf:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/list-style-type",function(){return t("rhZy")}])},"jQ+L":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("listStyleType",[["list",["listStyleType"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),p=t("iuhU"),i=t("ZMKu"),o=c.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(a){var e=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:p,1:i}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var a=new window.ResizeObserver(n);return n(),a.observe(e.current.contentDocument.body),()=>{a.disconnect()}}function n(){i({height:e.current.contentDocument.body.scrollHeight})}},[t]),o("iframe",Object(n.a)({},a,{ref:e,onLoad:()=>c(!0),style:p}))}function d(a){var{color:e,snippet:t}=a;return o("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},o("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(a){var{preview:e,src:t,snippet:n,previewClassName:s,color:c="gray"}=a;return o("div",{className:"relative overflow-hidden mb-8"},e?o("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",r[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):o(b,{src:t,className:Object(p.a)("w-full rounded-t-xl",r[c])}),o(d,{color:c,snippet:n}))}function j(a){var{preview:e,src:t,previewClassName:n,snippet:c,color:l="gray",min:g=!1}=a,j=Object(s.useRef)(),O=Object(i.h)(0),N=Object(s.useRef)(),{0:k,1:f}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var a=new window.ResizeObserver(()=>{O.set(0)});return a.observe(j.current),()=>{a.disconnect()}},[]),o("div",{className:"relative mb-8"},o("div",{ref:j,className:"relative rounded-t-xl ".concat(u[l])},o("div",{className:g?"md:w-88":void 0},o(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(O,a=>-a)}},e?o("div",{className:Object(p.a)("rounded-t-xl",n,r[l],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):o(b,{src:t,className:Object(p.a)("w-full rounded-t-xl",r[l],{"pointer-events-none":k})}))),o("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(i.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),f(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),f(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[l]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(d,{color:l,snippet:c}))}},rhZy:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return f}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),i=t("7ljp"),o=t("YFqc"),l=t.n(o),r=t("tc9R"),u=t("pOT7"),m=t("vRWG"),b=t("I6Nb"),d=t("jQ+L"),g=t.n(d),j=t("8C7G"),O=t("wH44"),N=(p.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:g()},meta:{title:"List Style Type",description:"Utilities for controlling the bullet/number style of a list.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=b.ContentsLayout;function f(a){var{components:e}=a,t=Object(s.a)(a,["components"]);return Object(i.a)(k,Object(n.a)({},N,t,{components:e,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"To create bulleted or numeric lists, use the ",Object(i.a)("inlineCode",{parentName:"p"},"list-disc")," and ",Object(i.a)("inlineCode",{parentName:"p"},"list-decimal")," utilities.")),Object(i.a)(u.a,{preview:'\n  <div class="mb-6 space-y-2">\n    <p class="text-sm text-purple-600">.list-disc</p>\n    <ul class="list-disc list-inside text-purple-800">\n      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\n      <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>\n      <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>\n    </ul>\n  </div>\n  <div class="mb-6 space-y-2">\n    <p class="text-sm text-purple-600">.list-decimal</p>\n    <ol class="list-decimal list-inside text-purple-800">\n      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\n      <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>\n      <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>\n    </ol>\n  </div>\n  <div class="space-y-2">\n    <p class="text-sm text-purple-600">.list-none (default)</p>\n    <ul class="default text-purple-800">\n      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\n      <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>\n      <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>\n    </ul>\n  </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">list-disc</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">list-decimal</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the list style type of a list element at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing list utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},".md:list-disc")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"list-disc")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"ul")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"list-none ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:list-disc"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipisicing elit",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Assumenda, quia temporibus eveniet a libero incidunt suscipit",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"ul"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)("p",null,"By default Tailwind provides three utilities for the most common list style types. You change, add, or remove these by editing the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.listStyleType")," section of your Tailwind config."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     listStyleType",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       none",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'none'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       disc",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'disc'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       decimal",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'decimal'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       square",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'square'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       roman",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'upper-roman'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(i.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(j.a,{plugin:"listStyleType",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(O.a,{plugin:"listStyleType",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=N}},[["gzQf",0,2,6,1,3,4,5,7,8,9]]]);