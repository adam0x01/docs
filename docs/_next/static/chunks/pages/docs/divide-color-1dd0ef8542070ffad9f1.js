_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"7WJl":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/divide-color",function(){return t("OvEn")}])},"9Jru":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const n=a=>Object.assign({},...Object.entries(a).flatMap(([a,e])=>"object"==typeof e?Object.entries(n(e)).map(([e,t])=>({[a+("DEFAULT"===e?"":"-"+e)]:t})):[{[""+a]:e}]));var s=n;e.default=s},OiSs:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return s.default.isFunction(a)?a({}):a};var n,s=(n=t("LvDl"))&&n.__esModule?n:{default:n}},OvEn:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return v}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),b=t("pOT7"),u=t("vRWG"),m=t("I6Nb"),d=t("dYni"),j=t.n(d),O=t("8C7G"),N=t("wH44"),k=(p.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:j.a,transformSelector:function(a){return Object(o.a)(p.a.Fragment,null,a.split(">").shift().trim().replace(/^\./,"").replace(/\\/g,"")," ",Object(o.a)("span",{className:"ml-1 text-purple-300"},"> * + *"))},preview:function(a,e){var t=e.className;return Object(o.a)("td",{className:"relative w-20 p-2 ".concat(t)},Object(o.a)("div",{className:"absolute inset-0 flex flex-col m-2"},Object(o.a)("div",{className:"flex-1"}),Object(o.a)("div",{className:"flex-1 border-t",style:{borderColor:Array.isArray(a["border-color"])?a["border-color"][0].replace("var(--divide-opacity)","1"):a["border-color"].replace("var(--divide-opacity)","1")}})))}},meta:{title:"Divide Color",description:"Utilities for controlling the border color between elements."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Border Colors",slug:"border-colors"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),g=m.ContentsLayout;function v(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(o.a)(g,Object(n.a)({},k,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the border color between elements using the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-{color}")," utilities.")),Object(o.a)(b.a,{preview:'\n  <div class="divide-y divide-fuchsia-300">\n    <div class="text-center font-extrabold text-2xl text-fuchsia-600 py-3">1</div>\n    <div class="text-center font-extrabold text-2xl text-fuchsia-600 py-3">2</div>\n    <div class="text-center font-extrabold text-2xl text-fuchsia-600 py-3">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">divide-y divide-fuchsia-300</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"changing-opacity",toc:!0},"Changing opacity"),Object(o.a)("p",null,"Control the opacity of borders between elements using the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-opacity-{amount}")," utilities.")),Object(o.a)(b.a,{preview:'\n  <div class="divide-y-4 divide-black divide-opacity-25">\n    <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">1</div>\n    <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">2</div>\n    <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divide-y-4 <span class="code-highlight bg-code-highlight">divide-black divide-opacity-25</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Learn more in the ",Object(o.a)(i.a,{href:"/docs/divide-opacity",passHref:!0},Object(o.a)("a",null,"divide opacity documentation")),"."),Object(o.a)("hr",null),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the borders between elements at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing divide utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:divide-x-8")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"divide-x-8")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"divide-y divide-teal-400 ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:divide-pink-400"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"py-2",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"1",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"py-2",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"2",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"py-2",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"3",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)("hr",null),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"border-colors",toc:!0},"Border Colors"),Object(o.a)("p",null,"By default Tailwind makes the entire ",Object(o.a)(i.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(o.a)("a",null,"default color palette"))," available as divide colors."),Object(o.a)("p",null,"You can ",Object(o.a)(i.a,{href:"/docs/colors#customizing",passHref:!0},Object(o.a)("a",null,"customize your color palette"))," by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.colors")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, customize just your border and divide colors together using the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.borderColor")," section, or customize only the divide colors using the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.divideColor")," section."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token function-variable function"}),"divideColor"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token parameter"}),"theme")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token spread operator"}),"..."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token method function property-access"}),"theme"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'borderColors'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'primary'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'#3490dc'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'secondary'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'#ffed4a'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'danger'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'#e3342f'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(O.a,{plugin:"divideColor",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(N.a,{plugin:"divideColor",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=k},dYni:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:t,corePlugins:l}){const i=(0,s.default)(e("divideColor")),r=a=>l("divideOpacity")?(0,o.default)({color:a,property:"border-color",variable:"--tw-divide-opacity"}):{"border-color":(0,p.default)(a)};a(n.default.fromPairs(n.default.map(n.default.omit(i,"DEFAULT"),(a,e)=>[(0,c.default)("divide",e)+" > :not([hidden]) ~ :not([hidden])",r(a)])),t("divideColor"))}};var n=l(t("LvDl")),s=l(t("9Jru")),c=l(t("dzuX")),p=l(t("OiSs")),o=l(t("kFV+"));function l(a){return a&&a.__esModule?a:{default:a}}}},[["7WJl",0,2,6,10,1,3,4,5,7,8,11]]]);