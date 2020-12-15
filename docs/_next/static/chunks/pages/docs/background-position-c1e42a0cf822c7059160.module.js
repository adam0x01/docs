(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"13Zk":function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,theme:n,variants:t}){a(s.default.fromPairs(s.default.map(n("backgroundPosition"),(a,n)=>[(0,e.default)("bg",n),{"background-position":a}])),t("backgroundPosition"))}};var s=p(t("LvDl")),e=p(t("dzuX"));function p(a){return a&&a.__esModule?a:{default:a}}},"1D70":function(a,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return N}));var s=t("wx14"),e=t("Ff2n"),p=t("q1tI"),c=t.n(p),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),b=t("vRWG"),m=t("I6Nb"),g=t("13Zk"),d=t.n(g),k=(t("AOjV"),t("8C7G")),j=t("wH44"),O=(c.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:d()},meta:{title:"Background Position",description:"Utilities for controlling the position of an element's background image.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Background Positions",slug:"background-positions"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=m.ContentsLayout;function N(a){var{components:n}=a,t=Object(e.a)(a,["components"]);return Object(o.a)(h,Object(s.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-{side}")," utilities to control the position of an element's background image.")),Object(o.a)(u.a,{preview:'\n  <div class="flex justify-around mb-8">\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-left-top</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-left-top bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-top</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-top bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-right-top</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-right-top bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n  </div>\n  <div class="flex justify-around mb-8">\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-left</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-left bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-center</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-center bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-right</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-right bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n  </div>\n  <div class="flex justify-around">\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-left-bottom</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-left-bottom bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-bottom</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-bottom bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-light-blue-600 font-medium mb-1">.bg-right-bottom</p>\n      <div class="mx-auto bg-light-blue-300 rounded-md w-24 h-24 bg-right-bottom bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-left-top</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-top</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-right-top</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-left</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-center</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-right</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-left-bottom</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-bottom</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat <span class="code-highlight bg-code-highlight">bg-right-bottom</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the position of an element's background image at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background position utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:bg-top")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-top")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(s.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-center ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-top")," ...",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token style-attr language-css"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"})," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"}),"style")),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'="'),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token property"}),"background-image"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token url"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token function"}),"url"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"("),"...",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),")"))),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"background-positions",toc:!0},"Background Positions"),Object(o.a)("p",null,"By default Tailwind provides nine ",Object(o.a)("inlineCode",{parentName:"p"},"background-position")," utilities. You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.backgroundPosition")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(s.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     backgroundPosition",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       bottom",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'bottom'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'bottom-4'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'center bottom 1rem'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       center",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'center'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       left",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'left'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'left-bottom'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'left bottom'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'left-top'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'left top'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       right",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'right'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'right-bottom'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'right bottom'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'right-top'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'right top'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       top",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'top'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'top-4'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'center top 1rem'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(k.a,{plugin:"backgroundPosition",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(j.a,{plugin:"backgroundPosition",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},"8C7G":function(a,n,t){"use strict";t.d(n,"a",(function(){return i}));var s=t("q1tI"),e=t.n(s),p=t("98BF"),c=t("Zb5r"),o=t("AOjV"),l=e.a.createElement;function i(a){var{plugin:n,name:t}=a,s=p.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(a,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var e=["responsive","hover","focus","active","group-hover"].filter(a=>!s.includes(a)).slice(0,2),i="By default, ".concat(s.length?"only ".concat(Object(c.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(e)," variants:"),l(o.a,{path:"variants.extend",before:"...",add:{[n]:e}}))}},Q8Gg:function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-position",function(){return t("1D70")}])},pOT7:function(a,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return k}));var s=t("wx14"),e=t("q1tI"),p=t.n(e),c=t("iuhU"),o=t("ZMKu"),l=p.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(a){var n=Object(e.useRef)(),{0:t,1:p}=Object(e.useState)(!1),{0:c,1:o}=Object(e.useState)({});return Object(e.useEffect)(()=>{if(t){var a=new window.ResizeObserver(s);return s(),a.observe(n.current.contentDocument.body),()=>{a.disconnect()}}function s(){o({height:n.current.contentDocument.body.scrollHeight})}},[t]),l("iframe",Object(s.a)({},a,{ref:n,onLoad:()=>p(!0),style:c}))}function g(a){var{color:n,snippet:t}=a;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[n],{"bg-gray-800":!i[n]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[n]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function d(a){var{preview:n,src:t,snippet:s,previewClassName:e,color:p="gray"}=a;return l("div",{className:"relative overflow-hidden mb-8"},n?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[p],e,{"p-10":!e}),dangerouslySetInnerHTML:{__html:n}}):l(m,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[p])}),l(g,{color:p,snippet:s}))}function k(a){var{preview:n,src:t,previewClassName:s,snippet:p,color:i="gray",min:d=!1}=a,k=Object(e.useRef)(),j=Object(o.h)(0),O=Object(e.useRef)(),{0:h,1:N}=Object(e.useState)(!1);return Object(e.useEffect)(()=>{var a=new window.ResizeObserver(()=>{j.set(0)});return a.observe(k.current),()=>{a.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:k,className:"relative rounded-t-xl ".concat(u[i])},l("div",{className:d?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(j,a=>-a)}},n?l("div",{className:Object(c.a)("rounded-t-xl",s,r[i],{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):l(m,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[i],{"pointer-events-none":h})}))),l("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(d?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[i]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(g,{color:i,snippet:p}))}}},[["Q8Gg",0,2,6,10,1,3,4,5,7,8]]]);