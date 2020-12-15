_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[86],{ap0H:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),p=t.n(s),o=c.a.createElement;function r(a){var e=a.suffix,t=a.children+(e?" - ".concat(e):"");return o(p.a,null,o("title",{key:"title"},t),o("meta",{key:"twitter:title",name:"twitter:title",content:t}),o("meta",{key:"og:title",property:"og:title",content:t}))}},eaVQ:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),p=t.n(s),o=t("7ljp"),r=t("YFqc"),m=t.n(r),b=t("tc9R"),l=t("vRWG"),j=t("I6Nb"),O=(p.a.createElement,{Layout:l.DocumentationLayout,meta:{title:"Install Tailwind CSS with Create React App",description:"Setting up Tailwind CSS in a Create React App project.",tool:"Create React App"},tableOfContents:[{title:"Creating your project",slug:"creating-your-project",children:[]},{title:"Setting up Tailwind CSS",slug:"setting-up-tailwind-css",children:[{title:"Install Tailwind via npm",slug:"install-tailwind-via-npm"},{title:"Install and configure CRACO",slug:"install-and-configure-craco"},{title:"Create your configuration file",slug:"create-your-configuration-file"},{title:"Configure Tailwind to remove unused styles in production",slug:"configure-tailwind-to-remove-unused-styles-in-production"},{title:"Include Tailwind in your CSS",slug:"include-tailwind-in-your-css"}]}]}),i=j.ContentsLayout;function N(a){var e=a.components,t=Object(c.a)(a,["components"]);return Object(o.a)(i,Object(n.a)({},O,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(b.a,{level:2,id:"creating-your-project",toc:!0},"Creating your project"),Object(o.a)("p",null,"Start by creating a new Create React App project if you don't have one set up already.\nThe most common approach is to use ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/"}),"Create React App"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx create-react-app my-project\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"cd")," my-project"))),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"setting-up-tailwind-css",toc:!0},"Setting up Tailwind CSS"),Object(o.a)(b.a,{level:3,id:"install-tailwind-via-npm",toc:!0},"Install Tailwind via npm"),Object(o.a)("p",null,"Install Tailwind and its peer-dependencies using ",Object(o.a)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9"))),Object(o.a)("p",null,"Create React App doesn't support PostCSS 8 yet so you need to install ",Object(o.a)(m.a,{href:"/docs/installation#post-css-7-compatibility-build",passHref:!0},Object(o.a)("a",null,"the Tailwind CSS v2.0 PostCSS 7 compatibility build"))," for now as we've shown above.\n"),Object(o.a)(b.a,{level:3,id:"install-and-configure-craco",toc:!0},"Install and configure CRACO"),Object(o.a)("p",null,"Since Create React App doesn't let you override the PostCSS configuration natively, we also need to install ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gsoft-inc/craco"}),"CRACO")," to be able to configure Tailwind:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," @craco/craco"))),Object(o.a)("p",null,"Once it's installed, update your ",Object(o.a)("inlineCode",{parentName:"p"},"scripts")," in your ",Object(o.a)("inlineCode",{parentName:"p"},"package.json")," file to use ",Object(o.a)("inlineCode",{parentName:"p"},"craco")," instead of ",Object(o.a)("inlineCode",{parentName:"p"},"react-scripts")," for all scripts except ",Object(o.a)("inlineCode",{parentName:"p"},"eject"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-json"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-json"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-json"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"scripts"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-json"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"start"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"react-scripts start"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"build"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"react-scripts build"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"test"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"react-scripts test"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-json"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"start"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"craco start"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"build"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"craco build"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"test"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"craco test"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-json"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property"}),'"eject"'),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),'"react-scripts eject"'),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Next, create a ",Object(o.a)("inlineCode",{parentName:"p"},"craco.config.js")," at the root of our project and add the ",Object(o.a)("inlineCode",{parentName:"p"},"tailwindcss")," and ",Object(o.a)("inlineCode",{parentName:"p"},"autoprefixer")," as PostCSS plugins:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// craco.config.js"),"\nmodule",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  style",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    postcss",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      plugins",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss'"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'autoprefixer'"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"If you're planning to use any other PostCSS plugins, you should read our documentation on ",Object(o.a)(m.a,{href:"/docs/using-with-preprocessors",passHref:!0},Object(o.a)("a",null,"using PostCSS as your preprocessor"))," for more details about the best way to order them alongside Tailwind."),Object(o.a)(b.a,{level:3,id:"create-your-configuration-file",toc:!0},"Create your configuration file"),Object(o.a)("p",null,"Next, generate your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx tailwindcss init"))),Object(o.a)("p",null,"This will create a minimal ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file at the root of your project:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  purge",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  darkMode",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or 'media' or 'class'"),"\n  theme",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  variants",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  plugins",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"Learn more about configuring Tailwind in the ",Object(o.a)(m.a,{href:"/docs/configuration",passHref:!0},Object(o.a)("a",null,"configuration documentation")),"."),Object(o.a)(b.a,{level:3,id:"configure-tailwind-to-remove-unused-styles-in-production",toc:!0},"Configure Tailwind to remove unused styles in production"),Object(o.a)("p",null,"In your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, configure the ",Object(o.a)("inlineCode",{parentName:"p"},"purge")," option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./src/**/*.{js,jsx,ts,tsx}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./public/index.html'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   darkMode",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// or 'media' or 'class'"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   variants",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   plugins",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Read our separate guide on ",Object(o.a)(m.a,{href:"/docs/optimizing-for-production",passHref:!0},Object(o.a)("a",null,"optimizing for production"))," to learn more about tree-shaking unused styles for best performance.\n"),Object(o.a)(b.a,{level:3,id:"include-tailwind-in-your-css",toc:!0},"Include Tailwind in your CSS"),Object(o.a)("p",null,"Open the ",Object(o.a)("inlineCode",{parentName:"p"},"./src/index.css")," file that Create React App generates for you by default\nand use the ",Object(o.a)("inlineCode",{parentName:"p"},"@tailwind")," directive to include Tailwind's ",Object(o.a)("inlineCode",{parentName:"p"},"base"),", ",Object(o.a)("inlineCode",{parentName:"p"},"components"),", and ",Object(o.a)("inlineCode",{parentName:"p"},"utilities")," styles, replacing the original file contents:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* ./src/index.css */"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(o.a)("p",null,"Tailwind will swap these directives out at build-time with all of the styles it generates based on your configured design system."),Object(o.a)("p",null,"Read our documentation on ",Object(o.a)(m.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"adding base styles")),", ",Object(o.a)(m.a,{href:"/docs/extracting-components",passHref:!0},Object(o.a)("a",null,"extracting components")),", and ",Object(o.a)(m.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(o.a)("a",null,"adding new utilities"))," for best practices on extending Tailwind with your own custom CSS.\n"),Object(o.a)("p",null,"Finally, ensure your CSS file is being imported in your ",Object(o.a)("inlineCode",{parentName:"p"},"./src/index.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// src/index.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"React")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"from")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'react'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"ReactDOM")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"from")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'react-dom'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./index.css'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"import")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"App")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"from")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./App'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"import")," reportWebVitals ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token keyword module"}),"from")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./reportWebVitals'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"),"\n"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"ReactDOM"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token method function property-access"}),"render"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"<"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"React"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"StrictMode")),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),">"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"<"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"App")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"/"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),">"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"<"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"/"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"React"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"StrictMode")),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),">"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token dom variable"}),"document"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token method function property-access"}),"getElementById"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'root'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"),"\n"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."))))),Object(o.a)("hr",null),Object(o.a)("p",null,"You're finished! Now when you run ",Object(o.a)("inlineCode",{parentName:"p"},"npm run start"),", Tailwind CSS will be ready to use in your Create React App project."),Object(o.a)("p",null,Object(o.a)(m.a,{href:"/docs/utility-first",passHref:!0},Object(o.a)("a",null,"Next learn about the utility-first workflow ","\u2192")),"\n")))}N.isMDXComponent=!0,N.layoutProps=O},ecob:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/create-react-app",function(){return t("eaVQ")}])},vRWG:function(a,e,t){"use strict";t.r(e),t.d(e,"DocumentationLayout",(function(){return O}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),p=t("ekQu"),o=t("8Kt/"),r=t.n(o),m=t("nOHt"),b=t("ap0H"),l=t("1Q1k"),j=s.a.createElement;function O(a){var e=Object(m.useRouter)();return j(s.a.Fragment,null,j(b.a,{suffix:"/"===e.pathname?void 0:"Tailwind CSS"},a.layoutProps.meta.metaTitle||a.layoutProps.meta.title),j(r.a,null,j("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),j("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),j(p.b,Object(n.a)({nav:l.a},a)))}}},[["ecob",0,2,1,3,4,5]]]);