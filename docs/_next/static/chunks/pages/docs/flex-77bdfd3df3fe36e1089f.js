_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"/5Oe":function(a,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return O}));var t=e("wx14"),s=e("Ff2n"),c=e("q1tI"),p=e.n(c),o=e("7ljp"),i=e("YFqc"),l=e.n(i),r=e("tc9R"),u=e("pOT7"),d=e("vRWG"),m=e("I6Nb"),g=e("V0zS"),b=e.n(g),k=e("8C7G"),f=e("wH44"),j=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b.a},meta:{title:"Flex",description:"Utilities for controlling how flex items both grow and shrink.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Initial",slug:"initial",children:[]},{title:"Flex 1",slug:"flex-1",children:[]},{title:"Auto",slug:"auto",children:[]},{title:"None",slug:"none",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Flex Values",slug:"flex-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=m.ContentsLayout;function O(a){var n=a.components,e=Object(s.a)(a,["components"]);return Object(o.a)(h,Object(t.a)({},j,e,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"initial",toc:!0},"Initial"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"flex-initial")," to allow a flex item to shrink but not grow, taking into account its initial size:")),Object(o.a)(u.a,{preview:'\n  <p class="text-sm text-indigo-600">Items don\'t grow when there\'s extra space</p>\n  <div class="mt-2 flex space-x-4">\n    <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Short\n    </div>\n    <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Medium length\n    </div>\n  </div>\n\n  <p class="mt-8 text-sm text-indigo-600">Items shrink if possible when needed</p>\n  <div class="mt-2 flex space-x-4">\n    <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Short\n    </div>\n    <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Medium length\n    </div>\n    <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-initial</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Won\'t grow, but will shrink if needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-initial</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Won\'t grow, but will shrink if needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-initial</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Won\'t grow, but will shrink if needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"flex-1",toc:!0},"Flex 1"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"flex-1")," to allow a flex item to grow and shrink as needed, ignoring its initial size:")),Object(o.a)(u.a,{preview:'\n  <p class="text-sm text-fuchsia-600">Default behavior</p>\n  <div class="mt-2 flex space-x-4">\n    <div class="rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Short\n    </div>\n    <div class="rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Medium length\n    </div>\n    <div class="rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n        Significantly larger amount of content\n    </div>\n  </div>\n\n  <p class="mt-8 text-sm text-fuchsia-600">With <code>.flex-1</code></p>\n  <div class="mt-2 flex space-x-4">\n    <div class="flex-1 rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Short\n    </div>\n    <div class="flex-1 rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Medium length\n    </div>\n    <div class="flex-1 rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Significantly larger amount of content\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-1</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed without taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-1</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed without taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-1</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed without taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"flex-auto")," to allow a flex item to grow and shrink, taking into account its initial size:")),Object(o.a)(u.a,{preview:'\n  <p class="text-sm text-light-blue-600">Default behavior</p>\n  <div class="mt-2 flex space-x-4">\n    <div class="rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Short\n    </div>\n    <div class="rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Medium length\n    </div>\n    <div class="rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Significantly larger amount of content\n    </div>\n  </div>\n\n  <p class="mt-8 text-sm text-light-blue-600">With <code>.flex-auto</code></p>\n  <div class="mt-2 flex space-x-4">\n    <div class="flex-auto rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Short\n    </div>\n    <div class="flex-auto rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Medium length\n    </div>\n    <div class="flex-auto rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Significantly larger amount of content\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"none",toc:!0},"None"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"flex-none")," to prevent a flex item from growing or shrinking:")),Object(o.a)(u.a,{preview:'\n  <div class="flex space-x-4">\n    <div class="flex-1 rounded-md bg-emerald-300 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Item that can grow or shrink if needed\n    </div>\n    <div class="flex-none rounded-md bg-emerald-500 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Item that cannot grow or shrink\n    </div>\n    <div class="flex-1 rounded-md bg-emerald-300 text-white font-semibold flex items-center justify-center py-3 px-6">\n      Item that can grow or shrink if needed\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">flex-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed taking initial size into account --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Will grow and shrink as needed --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control how a flex item both grows and shrinks at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:flex-1")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"flex-1")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex-none ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-1")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    Responsive flex item\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"flex-values",toc:!0},"Flex Values"),Object(o.a)("p",null,"By default Tailwind provides four ",Object(o.a)("inlineCode",{parentName:"p"},"flex")," utilities. You change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.flex")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     flex",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1 1 0%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       auto",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1 1 auto'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       initial",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 1 auto'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       inherit",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'inherit'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       none",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'none'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2 2 0%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(k.a,{plugin:"flex",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(f.a,{plugin:"flex",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=j},"8C7G":function(a,n,e){"use strict";e.d(n,"a",(function(){return r}));var t=e("rePB"),s=e("q1tI"),c=e.n(s),p=e("98BF"),o=e("Zb5r"),i=e("AOjV"),l=c.a.createElement;function r(a){var n=a.plugin,e=a.name,s=p.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),r="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(e," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,n)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",e," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(o.a)(c)," \u53d8\u4f53:"),l(i.a,{path:"variants.extend",before:"...",add:Object(t.a)({},n,c)}))}},V0zS:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,theme:n,variants:e}){a(t.default.fromPairs(t.default.map(n("flex"),(a,n)=>[(0,s.default)("flex",n),{flex:a}])),e("flex"))}};var t=c(e("LvDl")),s=c(e("dzuX"));function c(a){return a&&a.__esModule?a:{default:a}}},XvAz:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex",function(){return e("/5Oe")}])},pOT7:function(a,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return k}));var t=e("wx14"),s=e("q1tI"),c=e.n(s),p=e("iuhU"),o=e("ZMKu"),i=c.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(a){var n=Object(s.useRef)(),e=Object(s.useState)(!1),c=e[0],p=e[1],o=Object(s.useState)({}),l=o[0],r=o[1];return Object(s.useEffect)((function(){if(c){var a=new window.ResizeObserver(e);return e(),a.observe(n.current.contentDocument.body),function(){a.disconnect()}}function e(){r({height:n.current.contentDocument.body.scrollHeight})}}),[c]),i("iframe",Object(t.a)({},a,{ref:n,onLoad:function(){return p(!0)},style:l}))}function g(a){var n=a.color,e=a.snippet;return i("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",l[n],{"bg-gray-800":!l[n]})},i("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[n]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})))}function b(a){var n=a.preview,e=a.src,t=a.snippet,s=a.previewClassName,c=a.color,o=void 0===c?"gray":c;return i("div",{className:"relative overflow-hidden mb-8"},n?i("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",r[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):i(m,{src:e,className:Object(p.a)("w-full rounded-t-xl",r[o])}),i(g,{color:o,snippet:t}))}function k(a){var n=a.preview,e=a.src,t=a.previewClassName,c=a.snippet,l=a.color,b=void 0===l?"gray":l,k=a.min,f=void 0!==k&&k,j=Object(s.useRef)(),h=Object(o.h)(0),O=Object(s.useRef)(),v=Object(s.useState)(!1),x=v[0],N=v[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){h.set(0)}));return a.observe(j.current),function(){a.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:j,className:"relative rounded-t-xl ".concat(u[b])},i("div",{className:f?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(h,(function(a){return-a}))}},n?i("div",{className:Object(p.a)("rounded-t-xl",t,r[b],{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}):i(m,{src:e,className:Object(p.a)("w-full rounded-t-xl",r[b],{"pointer-events-none":x})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(f?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[b]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:b,snippet:c}))}}},[["XvAz",0,2,6,10,1,3,4,5,7,8]]]);