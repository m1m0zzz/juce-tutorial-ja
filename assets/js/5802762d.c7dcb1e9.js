"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[3219],{3924:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=t(4848),i=t(8453),o=t(3449);t(6378);const s={title:"\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30b7\u30f3\u30bb\u30b7\u30b9",sidebar_position:6},c="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b",d={id:"midi/tutorial_new_projucer_project",title:"\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30b7\u30f3\u30bb\u30b7\u30b9",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3068\u3001Projucer \u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 JUCE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u307e\u305f\u3001JUCE \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3001\u5b9f\u884c\u3001\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Xcode \u3084 Visual Studio \u306a\u3069\u306e IDE \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/midi/tutorial_new_projucer_project.mdx",sourceDirName:"midi",slug:"/midi/tutorial_new_projucer_project",permalink:"/juce-tutorial-ja/midi/tutorial_new_projucer_project",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/midi/tutorial_new_projucer_project.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30b7\u30f3\u30bb\u30b7\u30b9",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MPE\u30be\u30fc\u30f3\u306e\u7406\u89e3",permalink:"/juce-tutorial-ja/midi/tutorial_mpe_zones"},next:{title:"Plugins",permalink:"/juce-tutorial-ja/category/plugins"}},l={},a=[{value:"Select your project type",id:"select-your-project-type",level:2},{value:"Create your new project",id:"create-your-new-project",level:2},{value:"Export the project and open in your native IDE",id:"export-the-project-and-open-in-your-native-ide",level:2},{value:"Opening PIP files",id:"opening-pip-files",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebprojucer\u30d1\u30fc\u30c81projucer\u3092\u59cb\u3081\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"\n",(0,n.jsx)(r.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3068\u3001Projucer \u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 JUCE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u307e\u305f\u3001JUCE \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3001\u5b9f\u884c\u3001\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Xcode \u3084 Visual Studio \u306a\u3069\u306e IDE \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u30ec\u30d9\u30eb Beginner"}),"\n",(0,n.jsx)(r.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux, iOS, Android"}),"\n",(0,n.jsx)(r.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.juce.com/get-juce",children:"JUCE\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),". Unpack the JUCE folder and place it to some location on your computer. Your user home folder is a convenient place."]}),"\n",(0,n.jsx)(r.p,{children:"\u5148\u307b\u3069\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305fJUCE\u30d5\u30a9\u30eb\u30c0\u306b\u5165\u308a\u307e\u3059\u3002\u305d\u3053\u306b\u3042\u308bProjucer\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.h1,{id:"the-new-project-window",children:"The new project window"}),"\n",(0,n.jsxs)(r.p,{children:["The first time you launch Projucer, you are presented with the new project window. (You can also launch this later by selecting ",(0,n.jsx)(r.strong,{children:"\u65b0\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," from the Projucer's main menu.):"]}),"\n",(0,n.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_new_projucer_project_screenshot1.png",caption:"Projucer - new project window."}),"\n",(0,n.jsx)(r.h2,{id:"select-your-project-type",children:"Select your project type"}),"\n",(0,n.jsx)(r.p,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u5de6\u5074\u3067\u3001\u4f5c\u6210\u3057\u305f\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u3054\u3068\u306b\u3001Projucer\u306f\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3001\u3059\u3079\u3066\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u9069\u5207\u306a\u6700\u5c0f\u9650\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u3059\u3050\u306b\u5b9f\u969b\u306e\u6a5f\u80fd\u306e\u958b\u767a\u306b\u53d6\u308a\u639b\u304b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u521d\u3081\u3066JUCE\u3092\u4f7f\u3046\u5834\u5408\u3067\u3001\u4f55\u304b\u3089\u59cb\u3081\u305f\u3089\u3088\u3044\u304b\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u3044\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0b\u306f\u3001\u73fe\u5728\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u306e\u6982\u8981\u3067\u3059\u3002"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7a2e\u985e"}),(0,n.jsx)(r.th,{children:"\u8aac\u660e"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30d6\u30e9\u30f3\u30af"})}),(0,n.jsx)(r.td,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u7a7a\u767d\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"})}),(0,n.jsx)(r.td,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u7a7a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u6301\u3064\u6700\u5c0f\u9650\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u59cb\u3081\u3066\u3001JUCE\u304c\u63d0\u4f9b\u3059\u308b\u69d8\u3005\u306a\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u3001\u3088\u308a\u591a\u304f\u306eGUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306a\u3069\u306e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30aa\u30fc\u30c7\u30a3\u30aa"})}),(0,n.jsxs)(r.td,{children:["This creates a minimal JUCE application, like ",(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"}),", but automatically adds all the setup code that you need to easily get audio input and output. You can use this for games, multimedia applications, and much more."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30b3\u30f3\u30bd\u30fc\u30eb"})}),(0,n.jsx)(r.td,{children:"JUCE\u306f\u3001GUI\u3092\u5168\u304f\u6301\u305f\u306a\u3044\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b\u306e\u306b\u3082\u975e\u5e38\u306b\u4fbf\u5229\u3067\u3059\u3002\u305d\u306e\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"})}),(0,n.jsx)(r.td,{children:"\u3053\u308c\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8868\u793a\u3092\u63cf\u753b\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u59cb\u3081\u3066\u3001\u4f8b\u3048\u3070\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30fb\u30e2\u30d0\u30a4\u30eb\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/OpenGL"})}),(0,n.jsxs)(r.td,{children:["This creates a blank JUCE application, like ",(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"}),", but adds support for OpenGL to draw features including 3D model import and GLSL shaders."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3/\u30d9\u30fc\u30b7\u30c3\u30af"})}),(0,n.jsxs)(r.td,{children:["This creates a basic audio plug-in. All the code to support VST, AudioUnit and AAX plug-in formats, is added automatically. Depending on your setup, this project type may require some additional preparation steps to work correctly. See ",(0,n.jsx)(r.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})," for more information."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"\u30e9\u30a4\u30d6\u30e9\u30ea/\u9759\u7684, \u30e9\u30a4\u30d6\u30e9\u30ea/\u52d5\u7684"})}),(0,n.jsx)(r.td,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u306f\u3001JUCE\u306e\u4e0a\u306b\u69cb\u7bc9\u3059\u308b\u518d\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u6210\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002Projucer\u306f\u3001\u9759\u7684\u30ea\u30f3\u30af\u3068\u52d5\u7684\u30ea\u30f3\u30af\u306e\u4e21\u65b9\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f5c\u6210\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["There are also many example projects which can serve as an alternative starting point for your project, They are located in the subfolder ",(0,n.jsx)(r.code,{children:"JUCE/\u4f8b"})," and can be browsed by clicking the ",(0,n.jsx)(r.strong,{children:"\u30aa\u30fc\u30d7\u30f3\u4f8b"})," tab."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["You are not limited by the project type you choose; for example, if you selected ",(0,n.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"}),", you can always add animations and OpenGL later. However, you cannot easily convert an Application to a Library or an Audio Plug-In later."]})}),"\n",(0,n.jsx)(r.h2,{id:"create-your-new-project",children:"Create your new project"}),"\n",(0,n.jsx)(r.p,{children:"\u9069\u5207\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u305f\u5f8c\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u53f3\u5074\u306b\u3042\u308b\u8ffd\u52a0\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3092\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d"})," - Here, you choose a name for your app."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb"})," - The JUCE framework code is organised into ",(0,n.jsx)(r.em,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb"}),". Here, you can select which modules are included in your project and in the section below you can specify the location of the ",(0,n.jsx)(r.code,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb"})," subfolder located inside the JUCE folder you installed earlier."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u8f38\u51fa\u696d\u8005"})," - Here, you select which native IDEs you want to use to build and debug your app. This also defines the desktop and mobile platforms that your app will support. Don't worry, this is not a final choice \u2014 with the Projucer, you can add additional platforms and IDEs later."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Projucer\u306b\u306f\u73fe\u5728\u3001\u4ee5\u4e0b\u306eIDE\u3001\u30d3\u30eb\u30c9\u30fb\u30b7\u30b9\u30c6\u30e0\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7528\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u5bfe\u8c61OS"}),(0,n.jsx)(r.th,{children:"\u5bfe\u5fdc\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u30aa\u30fc\u30a8\u30b9\u30a8\u30c3\u30af\u30b9"}),(0,n.jsx)(r.td,{children:"\u30a8\u30c3\u30af\u30b9\u30b3\u30fc\u30c9"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u30ba"}),(0,n.jsx)(r.td,{children:"\u30d3\u30b8\u30e5\u30a2\u30eb\u30b9\u30bf\u30b8\u30aa\u3001Code::Blocks"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u30ea\u30ca\u30c3\u30af\u30b9"}),(0,n.jsx)(r.td,{children:"Makefile, Code::Blocks"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"iOS"}),(0,n.jsx)(r.td,{children:"\u30a8\u30c3\u30af\u30b9\u30b3\u30fc\u30c9"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9"}),(0,n.jsx)(r.td,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u30b9\u30bf\u30b8\u30aa"})]})]})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"\u30d5\u30a1\u30a4\u30eb"})," Creation Options"]})," - Depending on the project type, this field may offer some options on what code to auto-generate. If you are new to JUCE, the default selection is usually the best way to go to auto-generate everything you need and get you going quickly."]}),"\n",(0,n.jsxs)(r.li,{children:["When you have reviewed all your settings, click the ",(0,n.jsx)(r.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210..."})," button to generate the project at a specified location."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"export-the-project-and-open-in-your-native-ide",children:"Export the project and open in your native IDE"}),"\n",(0,n.jsx)(r.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001Projucer\u304b\u3089\u76f4\u63a5\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e00\u756a\u4e0a\u306e\u30dc\u30bf\u30f3\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,n.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_new_projucer_project_screenshot2.png",caption:"Projucer - save and open project in IDE"}),"\n",(0,n.jsx)(r.p,{children:"IDE\uff08Xcode\u3001Visual Studio\u306a\u3069\uff09\u3092\u958b\u3044\u305f\u306e\u3067\u3001JUCE\u30a2\u30d7\u30ea\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u5b9f\u884c\u3057\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u9069\u5207\u306a\u30cd\u30a4\u30c6\u30a3\u30d6IDE/\u30d3\u30eb\u30c9\u30fb\u30b7\u30b9\u30c6\u30e0\u3092\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u3088\u3063\u3066\u306f\u3001\u8ffd\u52a0\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001Android\u5411\u3051\u306b\u958b\u767a\u3059\u308b\u306b\u306fAndroid SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,n.jsxs)(r.p,{children:["All export targets (which are the native IDE projects) are generated when you create your Projucer project. They are also updated every time you save it in the Projucer. At any time, you can create new export targets to add support for more IDEs and platforms to your project. You can read about this and more features for managing your Projucer project in ",(0,n.jsx)(r.a,{href:"../tutorial_manage_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b"}),"."]}),"\n",(0,n.jsx)(r.h1,{id:"open-an-existing-project",children:"Open an existing project"}),"\n",(0,n.jsxs)(r.p,{children:["To open up an existing Projucer project, you can either double-click on the ",(0,n.jsx)(r.code,{children:"\u30b8\u30e5\u30bb\u30fc\u30eb"})," file contained in the project folder or click on ",(0,n.jsx)(r.strong,{children:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"})," from the wizard. (You can also navigate to ",(0,n.jsx)(r.strong,{children:"\u30aa\u30fc\u30d7\u30f3..."})," from the Projucer's main menu.)"]}),"\n",(0,n.jsx)(r.h2,{id:"opening-pip-files",children:"Opening PIP files"}),"\n",(0,n.jsxs)(r.p,{children:["You may come across ",(0,n.jsx)(r.em,{children:"Projucer\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," (PIP) files when following other JUCE tutorials. These are essentially header files with the usual ",(0,n.jsx)(r.code,{children:".h"})," extension that provide metadata to the Projucer in order to automatically create a project with the correct modules and exporters from a single file."]}),"\n",(0,n.jsxs)(r.p,{children:["PIP files can be opened similarly by either selecting the file from the ",(0,n.jsx)(r.strong,{children:"\u30aa\u30fc\u30d7\u30f3..."})," dialog of the Projucer's main menu or a simple drag-and-drop onto the Projucer interface window."]}),"\n",(0,n.jsx)(r.h1,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(r.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"JUCE\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,n.jsx)(r.li,{children:"Projucer\u3092\u4f7f\u3063\u3066\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092OSX\u306eXcode\u3084Windows\u306eVisual Studio\u306a\u3069\u306e\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u30bf\u30fc\u30b2\u30c3\u30c8\u3068\u3059\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3067\u30a2\u30d7\u30ea\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3001\u5b9f\u884c\u3001\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068PIP\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.h1,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../tutorial_manage_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../tutorial_choosing_projucer_template/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer Part 3: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e"})}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3449:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(4848);function i(e){let{src:r,caption:t,alt:i,width:o,height:s}=e;return(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:r,alt:i||t,width:o,height:s}),(0,n.jsx)("figcaption",{children:(0,n.jsx)("b",{children:t})})]})}},6378:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(4848);function i(e){let{path:r}=e;return(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://docs.juce.com/master/"+r,children:"\ud83d\udcda Source Page"})})}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(6540);const i={},o=n.createContext(i);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);