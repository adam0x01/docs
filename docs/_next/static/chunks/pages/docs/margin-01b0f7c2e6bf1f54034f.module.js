(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[104],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),p=n("Zb5r"),o=n("AOjV"),i=s.a.createElement;function r(a){var{plugin:e,name:n}=a,t=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),r="By default, ".concat(t.length?"only ".concat(Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(s)," variants:"),i(o.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var n={},t=0;t<a.length;t++){var s=a[t],c=e(s),p=n[c];Array.isArray(p)?n[c].push(s):n[c]=[s]}return n}},"cOG/":function(a,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return p}));var t=n("C4b9"),s=n.n(t);function c(a){return[...a].sort((a,e)=>{var n=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t)?0:isNaN(n)?1:isNaN(t)?-1:n-t})}function p(a){return Object.values(s()(a,a=>a.match(/^(.*?)[^-]+$/)[1])).flatMap(c)}},dES5:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),i=n("YFqc"),r=n.n(i),l=n("tc9R"),m=n("pOT7"),u=n("vRWG"),d=n("I6Nb"),b=n("o6L6"),g=n.n(b),j=n("8C7G"),O=n("wH44"),N=n("cOG/"),f=(p.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:g(),sort:N.b},meta:{title:"Margin",description:"Utilities for controlling an element's margin.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Add margin to a single side",slug:"add-margin-to-a-single-side",children:[]},{title:"Add horizontal margin",slug:"add-horizontal-margin",children:[]},{title:"Add vertical margin",slug:"add-vertical-margin",children:[]},{title:"Add margin to all sides",slug:"add-margin-to-all-sides",children:[]},{title:"Negative margins",slug:"negative-margins",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Margin scale",slug:"margin-scale"},{title:"Negative values",slug:"negative-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=d.ContentsLayout;function h(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(o.a)(k,Object(t.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"add-margin-to-a-single-side",toc:!0},"Add margin to a single side"),Object(o.a)("p",null,"Control the margin on one side of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"m{t|r|b|l}-{size}")," utilities."),Object(o.a)("p",null,"For example, ",Object(o.a)("inlineCode",{parentName:"p"},"mt-6")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"1.5rem")," of margin to the top of an element, ",Object(o.a)("inlineCode",{parentName:"p"},"mr-4")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"1rem")," of margin to the right of an element, ",Object(o.a)("inlineCode",{parentName:"p"},"mb-8")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"2rem")," of margin to the bottom of an element, and ",Object(o.a)("inlineCode",{parentName:"p"},"ml-2")," would add ",Object(o.a)("inlineCode",{parentName:"p"},"0.5rem")," of margin to the left of an element.")),Object(o.a)(m.a,{preview:'\n  <div class="flex flex-wrap justify-around items-center text-white font-mono">\n\n    <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">\n      <div class="mt-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">mt-8</div>\n    </div>\n\n    <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">\n      <div class="mr-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">mr-8</div>\n    </div>\n\n    <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">\n      <div class="mb-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">mb-8</div>\n    </div>\n\n    <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">\n      <div class="ml-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">ml-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">mt-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mt-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">mr-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mr-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">mb-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mb-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">ml-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ml-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"add-horizontal-margin",toc:!0},"Add horizontal margin"),Object(o.a)("p",null,"Control the horizontal margin of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"mx-{size}")," utilities.")),Object(o.a)(m.a,{preview:'\n  <div class="flex justify-around items-center text-white font-mono">\n    <div class="bg-stripes bg-stripes-purple-500">\n      <div class="mx-8 bg-purple-500 rounded-md flex items-center justify-center py-3 px-4">mx-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">mx-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mx-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"add-vertical-margin",toc:!0},"Add vertical margin"),Object(o.a)("p",null,"Control the vertical margin of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"my-{size}")," utilities.")),Object(o.a)(m.a,{preview:'\n  <div class="flex justify-around items-center text-white font-mono">\n    <div class="bg-stripes bg-stripes-emerald-500">\n      <div class="my-8 bg-emerald-500 rounded-md flex items-center justify-center py-3 px-4">my-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">my-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>my-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"add-margin-to-all-sides",toc:!0},"Add margin to all sides"),Object(o.a)("p",null,"Control the margin on all sides of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"m-{size}")," utilities.")),Object(o.a)(m.a,{preview:'\n  <div class="flex justify-around items-center text-white font-mono">\n    <div class="bg-stripes bg-stripes-light-blue-500">\n      <div class="m-8 bg-light-blue-500 rounded-md flex items-center justify-center py-3 px-4">m-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">m-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>m-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"negative-margins",toc:!0},"Negative margins"),Object(o.a)("p",null,"Control the negative margin of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"-m{side?}-{size}")," utilities.")),Object(o.a)(m.a,{preview:'\n  <div class="flex justify-around items-center text-white font-mono">\n    <div class="flex flex-col items-center">\n      <div class="relative w-32 h-16 bg-fuchsia-300 rounded-md overflow-hidden">\n        <div class="absolute bottom-0 w-full h-8 bg-stripes bg-stripes-red-900"></div>\n      </div>\n      <div class="relative -mt-8 bg-fuchsia-500 rounded-md flex items-center justify-center py-3 px-4">-mt-8</div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-32 h-16 bg-fuchsia-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">-mt-8</span> bg-fuchsia-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>-mt-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("hr",null),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the margin of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing margin utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:my-8")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"my-8")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"mt-8 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:my-8"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)("hr",null),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"margin-scale",toc:!0},"Margin scale"),Object(o.a)("p",null,"By default Tailwind provides 20 margin utilities for each side and axis."),Object(o.a)("p",null,"If you'd like to customize these values for padding, margin, width, and height all at once, use the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     spacing",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'16px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'48px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"To customize only the margin values, use the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.margin")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     margin",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sm",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'8px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       md",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'16px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       lg",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       xl",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'48px'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"negative-values",toc:!0},"Negative values"),Object(o.a)("p",null,"If you'd like to add additional negative margin classes (taking the form ",Object(o.a)("inlineCode",{parentName:"p"},"-m{side?}-{size}"),"), prefix the keys in your config file with a dash:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       margin",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'-72'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'-18rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Tailwind is smart enough to generate classes like ",Object(o.a)("inlineCode",{parentName:"p"},"-mx-72")," when it sees the leading dash, not ",Object(o.a)("inlineCode",{parentName:"p"},"mx--72")," like you might expect."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"margin",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"margin",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},h7NQ:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/margin",function(){return n("dES5")}])},o6L6:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n}){const c=[(a,e)=>({[(0,s.default)("m",e)]:{margin:""+a}}),(a,e)=>({[(0,s.default)("my",e)]:{"margin-top":""+a,"margin-bottom":""+a},[(0,s.default)("mx",e)]:{"margin-left":""+a,"margin-right":""+a}}),(a,e)=>({[(0,s.default)("mt",e)]:{"margin-top":""+a},[(0,s.default)("mr",e)]:{"margin-right":""+a},[(0,s.default)("mb",e)]:{"margin-bottom":""+a},[(0,s.default)("ml",e)]:{"margin-left":""+a}})];a(t.default.flatMap(c,a=>t.default.flatMap(e("margin"),a)),n("margin"))}};var t=c(n("LvDl")),s=c(n("dzuX"));function c(a){return a&&a.__esModule?a:{default:a}}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return j}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),p=n("iuhU"),o=n("ZMKu"),i=c.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},m={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(a){var e=Object(s.useRef)(),{0:n,1:c}=Object(s.useState)(!1),{0:p,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),()=>{a.disconnect()}}function t(){o({height:e.current.contentDocument.body.scrollHeight})}},[n]),i("iframe",Object(t.a)({},a,{ref:e,onLoad:()=>c(!0),style:p}))}function b(a){var{color:e,snippet:n}=a;return i("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",r[e],{"bg-gray-800":!r[e]})},i("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(a){var{preview:e,src:n,snippet:t,previewClassName:s,color:c="gray"}=a;return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):i(d,{src:n,className:Object(p.a)("w-full rounded-t-xl",l[c])}),i(b,{color:c,snippet:t}))}function j(a){var{preview:e,src:n,previewClassName:t,snippet:c,color:r="gray",min:g=!1}=a,j=Object(s.useRef)(),O=Object(o.h)(0),N=Object(s.useRef)(),{0:f,1:k}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var a=new window.ResizeObserver(()=>{O.set(0)});return a.observe(j.current),()=>{a.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:j,className:"relative rounded-t-xl ".concat(m[r])},i("div",{className:g?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,a=>-a)}},e?i("div",{className:Object(p.a)("rounded-t-xl",t,l[r],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(d,{src:n,className:Object(p.a)("w-full rounded-t-xl",l[r],{"pointer-events-none":f})}))),i("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(u[r]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:r,snippet:c}))}}},[["h7NQ",0,2,6,10,1,3,4,5,7,8]]]);