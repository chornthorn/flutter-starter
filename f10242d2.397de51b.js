(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var o=a(2),n=a(6),r=(a(0),a(81)),l={id:"blog",title:"Say Hello Flutter",description:"Introduction > Installation: Installation instructions for Redux and related packages",hide_title:!0},c={unversionedId:"blog/blog",id:"blog/blog",isDocsHomePage:!1,title:"Say Hello Flutter",description:"Introduction > Installation: Installation instructions for Redux and related packages",source:"@site/../docs/blog/Blog.md",slug:"/blog/blog",permalink:"/blog/blog",version:"current"},b=[{value:"Hello Flutter",id:"hello-flutter",children:[]},{value:"Redux Core",id:"redux-core",children:[]},{value:"Complementary Packages",id:"complementary-packages",children:[]},{value:"Create a React Redux App",id:"create-a-react-redux-app",children:[]}],p={rightToc:b};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"flutters-blog"},"Flutter's Blog"),Object(r.b)("h2",{id:"hello-flutter"},"Hello Flutter"),Object(r.b)("p",null,"Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect)."),Object(r.b)("p",null,"It's available as a package on NPM for use with a module bundler or in a Node application:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/flutter/flutter.git -b stable\n")),Object(r.b)("p",null,"It's also available as a UMD build, which can be loaded from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://unpkg.com/@reduxjs/toolkit/dist/"}),"the ",Object(r.b)("inlineCode",{parentName:"a"},"dist")," folder on unpkg"),". The UMD builds make Redux Toolkit available as a ",Object(r.b)("inlineCode",{parentName:"p"},"window.RTK")," global variable."),Object(r.b)("h2",{id:"redux-core"},"Redux Core"),Object(r.b)("p",null,"To install the stable version:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"# NPM\nnpm install redux\n\n# Yarn\nyarn add redux\n")),Object(r.b)("p",null,"If you're not, you can ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://unpkg.com/redux/"}),"access these files on unpkg"),", download them, or point your package manager to them."),Object(r.b)("p",null,"Most commonly, people consume Redux as a collection of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.commonjs.org/"}),"CommonJS")," modules. These modules are what you get when you import ",Object(r.b)("inlineCode",{parentName:"p"},"redux")," in a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://browserify.org/"}),"Browserify"),", or a Node environment. If you like to live on the edge and use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://rollupjs.org"}),"Rollup"),", we support that as well."),Object(r.b)("p",null,"If you don't use a module bundler, it's also fine. The ",Object(r.b)("inlineCode",{parentName:"p"},"redux")," npm package includes precompiled production and development ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/umdjs/umd"}),"UMD")," builds in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://unpkg.com/redux/dist/"}),Object(r.b)("inlineCode",{parentName:"a"},"dist")," folder"),". They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://unpkg.com/redux/dist/redux.js"}),Object(r.b)("inlineCode",{parentName:"a"},"<script>")," tag")," on the page, or ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975"}),"tell Bower to install it"),". The UMD builds make Redux available as a ",Object(r.b)("inlineCode",{parentName:"p"},"window.Redux")," global variable."),Object(r.b)("p",null,"The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://caniuse.com/#feat=es5"}),"any modern browser"),". You don't need to use Babel or a module bundler to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux.js.org/introduction/examples#counter-vanilla"}),"get started with Redux"),"."),Object(r.b)("h2",{id:"complementary-packages"},"Complementary Packages"),Object(r.b)("p",null,"Most likely, you'll also need ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"the React bindings")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux-devtools"}),"the developer tools"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-redux\nnpm install --save-dev redux-devtools\n")),Object(r.b)("p",null,"Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://browserify.org/"}),"Browserify")," for the most comfortable development experience."),Object(r.b)("h2",{id:"create-a-react-redux-app"},"Create a React Redux App"),Object(r.b)("p",null,"The recommended way to start new apps with React and Redux is by using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reduxjs/cra-template-redux"}),"official Redux+JS template")," for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),"Create React App"),", which takes advantage of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/"}),"Redux Toolkit")," and React Redux's integration with React components."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template redux\n")))}u.isMDXComponent=!0}}]);