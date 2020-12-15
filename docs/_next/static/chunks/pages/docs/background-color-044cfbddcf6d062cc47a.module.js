(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"+9R0":function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),l=n("YFqc"),i=n.n(l),r=n("tc9R"),u=n("pOT7"),b=n("vRWG"),m=n("I6Nb"),d=n("de4G"),g=n.n(d),j=n("8C7G"),O=n("wH44"),N=(p.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:g(),preview:a=>Object(o.a)("td",{className:"transparent"===a["background-color"]?"bg-checkered":void 0,style:{backgroundColor:Array.isArray(a["background-color"])?a["background-color"][0]:a["background-color"]}},Object(o.a)("div",{className:"w-24"}))},meta:{title:"Background Color",description:"Utilities for controlling an element's background color.",features:{responsive:!0,customizable:!0,hover:!0,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Background Colors",slug:"background-colors"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=m.ContentsLayout;function h(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(o.a)(k,Object(t.a)({},N,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the background color of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-{color}")," utilities.")),Object(o.a)(u.a,{preview:'\n  <div class="text-center">\n    <button type="button" class="py-2 px-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-md focus:outline-none" tabindex="-1">\n      Click me\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-green-500</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"changing-opacity",toc:!0},"Changing opacity"),Object(o.a)("p",null,"Control the opacity of an element's background color using the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-opacity-{amount}")," utilities.")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">\n    <div class="h-16 rounded-md bg-opacity-100 bg-purple-600 font-extrabold text-white flex justify-center items-center">100%</div>\n    <div class="h-16 rounded-md bg-opacity-75 bg-purple-600 font-extrabold text-white flex justify-center items-center">75%</div>\n    <div class="h-16 rounded-md bg-opacity-50 bg-purple-600 font-extrabold text-white flex justify-center items-center">50%</div>\n    <div class="h-16 rounded-md bg-opacity-25 bg-purple-600 font-extrabold text-white flex justify-center items-center">25%</div>\n    <div class="h-16 rounded-md bg-opacity-0 bg-purple-600 font-extrabold text-white flex justify-center items-center">0%</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-purple-600 <span class="code-highlight bg-code-highlight">bg-opacity-100</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-purple-600 <span class="code-highlight bg-code-highlight">bg-opacity-75</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-purple-600 <span class="code-highlight bg-code-highlight">bg-opacity-50</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-purple-600 <span class="code-highlight bg-code-highlight">bg-opacity-25</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-purple-600 <span class="code-highlight bg-code-highlight">bg-opacity-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Learn more in the ",Object(o.a)(i.a,{href:"/docs/background-opacity",passHref:!0},Object(o.a)("a",null,"background opacity documentation")),"."),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the background color of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background color utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:bg-green-500")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-green-500")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-blue-500 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-green-500")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"Button",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"hover",toc:!0},"Hover"),Object(o.a)("p",null,"To control the background color of an element on hover, add the ",Object(o.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing background color utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"hover:bg-red-700")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-red-700")," utility on hover.")),Object(o.a)(u.a,{preview:'\n  <div class="text-center">\n    <button type="button" class="py-2 px-4 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none" tabindex="-1">\n      Click me\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-red-500 <span class="code-highlight bg-code-highlight">hover:bg-red-700</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(o.a)("em",{parentName:"p"},"before")," the ",Object(o.a)("inlineCode",{parentName:"p"},"hover:")," prefix."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:bg-blue-500 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:hover:bg-blue-700")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"Button",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(r.a,{level:2,id:"focus",toc:!0},"Focus"),Object(o.a)("p",null,"To control the background color of an element on focus, add the ",Object(o.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing background color utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"focus:bg-blue-500")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-blue-500")," utility on focus.")),Object(o.a)(u.a,{preview:'\n  <div class="max-w-xs w-full mx-auto">\n    <input class="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none" placeholder="Focus me">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-200 <span class="code-highlight bg-code-highlight">focus:bg-white</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(o.a)("em",{parentName:"p"},"before")," the ",Object(o.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:bg-gray-200 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:bg-white")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"background-colors",toc:!0},"Background Colors"),Object(o.a)("p",null,"By default Tailwind makes the entire ",Object(o.a)(i.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(o.a)("a",null,"default color palette"))," available as background colors."),Object(o.a)("p",null,"You can ",Object(o.a)(i.a,{href:"/docs/colors#customizing",passHref:!0},Object(o.a)("a",null,"customize your color palette"))," by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.colors")," variable in your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, or customize just your background colors using the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.backgroundColor")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token function-variable function"}),"backgroundColor"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token parameter"}),"theme")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token method function property-access"}),"theme"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'colors'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'primary'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'#3490dc'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'secondary'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'#ffed4a'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'danger'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'#e3342f'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),")"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"backgroundColor",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"backgroundColor",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=N},"9Jru":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const t=a=>Object.assign({},...Object.entries(a).flatMap(([a,e])=>"object"==typeof e?Object.entries(t(e)).map(([e,n])=>({[a+("DEFAULT"===e?"":"-"+e)]:n})):[{[""+a]:e}]));var s=t;e.default=s},DGB7:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-color",function(){return n("+9R0")}])},OiSs:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return s.default.isFunction(a)?a({}):a};var t,s=(t=n("LvDl"))&&t.__esModule?t:{default:t}},de4G:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n,corePlugins:l}){const i=(0,s.default)(e("backgroundColor")),r=a=>l("backgroundOpacity")?(0,c.default)({color:a,property:"background-color",variable:"--tw-bg-opacity"}):{"background-color":(0,p.default)(a)};a(t.default.fromPairs(t.default.map(i,(a,e)=>[(0,o.default)("bg",e),r(a)])),n("backgroundColor"))}};var t=l(n("LvDl")),s=l(n("9Jru")),c=l(n("kFV+")),p=l(n("OiSs")),o=l(n("dzuX"));function l(a){return a&&a.__esModule?a:{default:a}}}},[["DGB7",0,2,6,10,1,3,4,5,7,8,11]]]);