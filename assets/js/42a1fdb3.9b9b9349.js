"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[9356],{5:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(4848),c=s(8453),t=(s(3449),s(6378));const i={title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",sidebar_position:5,tags:["\u521d\u7d1a"]},o="Projucer\u30d1\u30fc\u30c83\uff1a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",l={id:"getting-started/tutorial_choosing_projucer_template",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",description:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u5207\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u3001\u6700\u521d\u306e\u3046\u3061\u306f\u5384\u4ecb\u306a\u4f5c\u696d\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u6700\u521d\u304b\u3089\u9069\u5207\u306a\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3059\u308b\u3053\u3068\u3067\u3001\u751f\u7523\u6027\u304c\u98db\u8e8d\u7684\u306b\u5411\u4e0a\u3057\u307e\u3059",source:"@site/docs/getting-started/tutorial_choosing_projucer_template.mdx",sourceDirName:"getting-started",slug:"/getting-started/tutorial_choosing_projucer_template",permalink:"/juce-tutorial-ja/getting-started/tutorial_choosing_projucer_template",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/getting-started/tutorial_choosing_projucer_template.mdx",tags:[{inline:!0,label:"\u521d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u521d\u7d1a"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",sidebar_position:5,tags:["\u521d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c82",permalink:"/juce-tutorial-ja/getting-started/tutorial_code_basic_plugin"},next:{title:"Audio",permalink:"/juce-tutorial-ja/category/audio"}},h={},d=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"\u9069\u5207\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u9069\u5207\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092",id:"\u9069\u5207\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u9069\u5207\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092",level:2},{value:"GUI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"gui\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"gui\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:3},{value:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:3},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:3},{value:"OpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"opengl\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:3},{value:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u30b3\u30f3\u30bd\u30fc\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"\u30b3\u30f3\u30bd\u30fc\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:3},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3",id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3",level:3},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u9759\u7684/\u52d5\u7684\u30e9\u30a4\u30d6\u30e9\u30ea",id:"\u9759\u7684\u52d5\u7684\u30e9\u30a4\u30d6\u30e9\u30ea",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u95a2\u9023\u9805\u76ee",id:"\u95a2\u9023\u9805\u76ee",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"projucer\u30d1\u30fc\u30c83\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fprojucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",children:"Projucer\u30d1\u30fc\u30c83\uff1a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e"})}),"\n",(0,r.jsx)(t.A,{path:"tutorial_choosing_projucer_template"}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u5207\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u3001\u6700\u521d\u306e\u3046\u3061\u306f\u5384\u4ecb\u306a\u4f5c\u696d\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u6700\u521d\u304b\u3089\u9069\u5207\u306a\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3059\u308b\u3053\u3068\u3067\u3001\u751f\u7523\u6027\u304c\u98db\u8e8d\u7684\u306b\u5411\u4e0a\u3057\u307e\u3059\n\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Projucer\u304c\u63d0\u4f9b\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u6ce8\u610f\u3059\u3079\u304d\u4e3b\u306a\u30af\u30e9\u30b9\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1a\u521d\u7d1a"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,r.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"}),",\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"}),",\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioAppComponent.html",children:"AudioAppComponent"}),",\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent.html",children:"AnimatedAppComponent"}),",\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classOpenGLAppComponent.html",children:"OpenGLAppComponent"}),",\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessor.html",children:"AudioProcessor"}),",\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,r.jsx)(n.p,{children:"Projucer\u3092\u3088\u304f\u7406\u89e3\u3057\u3001Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020\u3092\u57fa\u672c\u7684\u306b\u7406\u89e3\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u52a9\u3051\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\n",(0,r.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9069\u5207\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u9069\u5207\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092",children:"\u9069\u5207\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u9069\u5207\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092"}),"\n",(0,r.jsx)(n.p,{children:"\u958b\u767a\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u306f\u3001Projucer\u30a6\u30a3\u30b6\u30fc\u30c9\u304b\u3089\u5225\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9078\u3073\u305f\u304f\u306a\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n\u4ee5\u4e0b\u306e\u30b0\u30e9\u30d5\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u6700\u9069\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308b\u305f\u3081\u306e\u8996\u899a\u7684\u306a\u8cea\u554f\u8868\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.juce.com/master/dot_inline_dotgraph_1.svg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u3059\u3050\u306b\u5bfe\u5fdc\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001\nJUCE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3069\u306e\u3088\u3046\u306b\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u306b\u3064\u3044\u3066\u306e\u8aac\u660e\u3092\u8aad\u3080\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"gui\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"GUI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:["\u5168\u3066\u306eGUI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001\u958b\u767a\u3092\u59cb\u3081\u308b\u305f\u3081\u306e\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u30fb\u30e6\u30fc\u30b6\u30fc\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u8868\u793a\u3059\u308b\u306e\u3067\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"}),"\n\u304b\u3089\u6d3e\u751f\u3057\u305f\u30af\u30e9\u30b9\u304c\u4f5c\u6210\u3055\u308c\u305f Main.cpp \u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"}),"\n\u30af\u30e9\u30b9\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3068\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3059\u308b\u62bd\u8c61\u57fa\u5e95\u30af\u30e9\u30b9\u3067\u3059\u3002\n\u307e\u305f\u3001Main.cpp \u30d5\u30a1\u30a4\u30eb\u306f GUI \u304c\u5b58\u5728\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"gui\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",children:"GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsxs)(n.p,{children:["GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u3059\u3079\u3066\u306eGUI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e2d\u3067\u6700\u3082\u6c4e\u7528\u7684\u3067\u3042\u308a\u3001Main.cpp\u30d5\u30a1\u30a4\u30eb\u306b\u52a0\u3048\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"}),"\n\u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fMainComponent\u30af\u30e9\u30b9\u3082\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"}),"\n\u30af\u30e9\u30b9\u306f\u3001JUCE\u306e\u5168\u3066\u306e\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u3067\u3059\u3002\u3059\u3079\u3066\u306eGUI\u8981\u7d20\u306f\u3001MainComponent\u30af\u30e9\u30b9\u306b\u5b9a\u7fa9\u3057\u3066\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.juce.com/master/dot_inline_dotgraph_2.svg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30bd\u30fc\u30b9\u30fb\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Main.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f\u3082\u306e\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:["MainComponent.h\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fMainComponent\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb"]}),"\n",(0,r.jsxs)(n.li,{children:["MainComponent.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f MainComponent \u306e\u5b9f\u88c5\u30d5\u30a1\u30a4\u30eb"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bGUI\u304c\u5fc5\u8981\u3067\u3042\u308b\u3053\u3068\u306f\u308f\u304b\u3063\u3066\u3044\u308b\u304c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a5f\u80fd\u306b\u3064\u3044\u3066\u78ba\u4fe1\u304c\u6301\u3066\u306a\u3044\u3001\u3042\u308b\u3044\u306f\u67d4\u8edf\u6027\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\n",(0,r.jsx)(n.a,{href:"../../graphics/tutorial_main_window/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6"})," \u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsxs)(n.p,{children:["\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fGUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001MainComponent\u304c\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"}),"\n\u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioAppComponent.html",children:"AudioAppComponent"}),"\n\u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["AudioAppComponent\u30af\u30e9\u30b9\u306f\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u3068\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioSource.html",children:"AudioSource"}),"\n\u306e\u6a5f\u80fd\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u62bd\u8c61\u7684\u306a\u57fa\u672c\u30af\u30e9\u30b9\u3067\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u51fa\u529b\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u51fa\u767a\u70b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.juce.com/master/dot_inline_dotgraph_3.svg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"Audio Application\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30bd\u30fc\u30b9\u30d5\u30a9\u30eb\u30c0\u306b\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Main.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f\u3082\u306e\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["MainComponent.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioAppComponent.html",children:"AudioAppComponent"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fMainComponent\u306e\u30d8\u30c3\u30c0\u30fc\u3068\u5b9f\u88c5\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bGUI\u3092\u5099\u3048\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u51fa\u529b\u6a5f\u80fd\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Audio Application \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\n",(0,r.jsx)(n.a,{href:"../../synth/tutorial_simple_synth_noise/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsxs)(n.p,{children:["\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fGUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001MainComponent\u304c\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent.html",children:"AnimatedAppComponent"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent.html",children:"AnimatedAppComponent"})," \u30af\u30e9\u30b9\u306f\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u3068\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classTimer.html",children:"Timer"})," \u306e\u6a5f\u80fd\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u62bd\u8c61\u30d9\u30fc\u30b9\u30af\u30e9\u30b9\u3067\u3001\n\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30b9\u30bf\u30fc\u30c8\u30dd\u30a4\u30f3\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.juce.com/master/dot_inline_dotgraph_4.svg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30bd\u30fc\u30b9\u30d5\u30a9\u30eb\u30c0\u306b\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Main.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f\u3082\u306e\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["MainComponent.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent.html",children:"AnimatedAppComponent"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fMainComponent\u306e\u30d8\u30c3\u30c0\u30fc\u3068\u5b9f\u88c5\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e GUI \u306b\u7c21\u5358\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306b\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Animated Application\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\n",(0,r.jsx)(n.a,{href:"../../graphics/tutorial_animation/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"opengl\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",children:"OpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsxs)(n.p,{children:["OpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fGUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f3c\u3066\u3044\u308b\u304c\u3001MainComponent\u304c\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classOpenGLAppComponent.html",children:"OpenGLAppComponent"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3059\u308b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classOpenGLAppComponent.html",children:"OpenGLAppComponent"})," \u30af\u30e9\u30b9\u306f\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u3068\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classOpenGLRenderer.html",children:"OpenGLRenderer"}),"\n\u306e\u6a5f\u80fd\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u62bd\u8c61\u57fa\u5e95\u30af\u30e9\u30b9\u3067\u3001\u8907\u96d1\u306a\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u51fa\u767a\u70b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.juce.com/master/dot_inline_dotgraph_5.svg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"OpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30bd\u30fc\u30b9\u30fb\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Main.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classJUCEApplication.html",children:"JUCEApplication"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f\u3082\u306e\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["MainComponent.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classOpenGLAppComponent.html",children:"OpenGLAppComponent"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f MainComponent \u306e\u30d8\u30c3\u30c0\u30fc\u3068\u5b9f\u88c5\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eGUI\u3067OpenGL\u3092\u4f7f\u7528\u3057\u3066\u8907\u96d1\u306a\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8981\u7d20\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u305f\u3044\u5834\u5408\u306b\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["OpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\n",(0,r.jsx)(n.a,{href:"../../graphics/tutorial_open_gl_application/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aOpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30f3\u30bd\u30fc\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30bd\u30fc\u30b9\u30d5\u30a9\u30eb\u30c0\u306b\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"Main.cpp\uff1aMain.cpp\uff1aC\u30b9\u30bf\u30a4\u30eb\u306e main() \u95a2\u6570\u3092\u63d0\u4f9b\u3057\u3001\u5bfe\u5fdc\u3059\u308b\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u30d0\u30a4\u30ca\u30ea\u304c\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int main (int argc, char* argv[])\n{\n \n    // ..your code goes here!\n \n    return 0;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u3067\u306f\u3001Main.cpp \u30d5\u30a1\u30a4\u30eb\u306b\u30af\u30e9\u30b9\u306f\u4f5c\u6210\u3055\u308c\u305a\u3001\n\u30d9\u30fc\u30b9\u30fb\u30af\u30e9\u30b9\u3082\u7d99\u627f\u3055\u308c\u307e\u305b\u3093\u304c\u3001",(0,r.jsx)(n.code,{children:".jucer"})," \u30d5\u30a1\u30a4\u30eb\u3068 JUCE \u30e9\u30a4\u30d6\u30e9\u30ea\u30fb\u30b3\u30fc\u30c9\u30fb\u30d5\u30a9\u30eb\u30c0\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bGUI\u3092\u5fc5\u8981\u3068\u305b\u305a\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsx)(n.h3,{id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3"}),"\n",(0,r.jsxs)(n.p,{children:["Audio Plugin\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001Projucer\u304c\u63d0\u4f9b\u3059\u308b\u4ed6\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u6bd4\u8f03\u3057\u3066\u3001\u5168\u4f53\u7684\u306b\u7570\u306a\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u69cb\u9020\u3092\u6301\u3063\u3066\u304a\u308a\u3001\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessor.html",children:"AudioProcessor"})," \u3068\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessor.html",children:"AudioProcessor"})," \u30af\u30e9\u30b9\u306f\u3001\n\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u3092\u51e6\u7406\u3059\u308b\u62bd\u8c61\u7684\u306a\u57fa\u672c\u30af\u30e9\u30b9\u3067\u3059\u3002\n\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8868\u3057\u3001VST\u3001AU\u3001RTAS\u3001AAX\u306a\u3069\u306e\u7570\u306a\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3088\u3063\u3066\u30e9\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"})," \u30af\u30e9\u30b9\u306f\n",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent.html",children:"Component"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f\u57fa\u5e95\u30af\u30e9\u30b9\u3067\u3001\n\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306eGUI\u6a5f\u80fd\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.juce.com/master/dot_inline_dotgraph_6.svg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"Audio Plugin\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30bd\u30fc\u30b9\u30d5\u30a9\u30eb\u30c0\u306b\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["PluginProcessor.h\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessor.html",children:"AudioProcessor"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fPluginProcessor\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["PluginProcessor.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessor.html",children:"AudioProcessor"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fPluginProcessor\u306e\u5b9f\u88c5\u30d5\u30a1\u30a4\u30eb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["PluginEditor.h\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305f PluginEditor \u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["PluginEditor.cpp\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"})," \u30af\u30e9\u30b9\u304b\u3089\u6d3e\u751f\u3057\u305fPluginEditor\u306e\u5b9f\u88c5\u30d5\u30a1\u30a4\u30eb\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u306f\u3001DAW\u307e\u305f\u306fGUI\u3092\u5099\u3048\u305f\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30db\u30b9\u30c8\u3067\u304d\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Audio Plugin\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\n",(0,r.jsx)(n.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})," \u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsx)(n.h3,{id:"\u9759\u7684\u52d5\u7684\u30e9\u30a4\u30d6\u30e9\u30ea",children:"\u9759\u7684/\u52d5\u7684\u30e9\u30a4\u30d6\u30e9\u30ea"}),"\n",(0,r.jsx)(n.p,{children:"\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u8208\u5473\u304c\u3042\u308b\u5834\u5408\u3001Projucer\u306f\u9759\u7684\u304a\u3088\u3073\u52d5\u7684\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u6210\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3067\u306f\u3001\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306f\u4f5c\u6210\u3055\u308c\u307e\u305b\u3093\u304c\u3001.jucer\u30d5\u30a1\u30a4\u30eb\u3068JUCE\u30e9\u30a4\u30d6\u30e9\u30ea\u30b3\u30fc\u30c9\u30d5\u30a9\u30eb\u30c0\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u305d\u3057\u3066\u3001\u3044\u3064\u3067\u3082JUCE\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u5229\u4fbf\u6027\u3068\u5171\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u7531\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306eProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3057\u305f\u3002\u7279\u306b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5404\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u3069\u306e\u3088\u3046\u306b\u7279\u5b9a\u306e\u30bf\u30a4\u30d7\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u547c\u3073\u51fa\u3057\u3066\u3044\u308b\u304b\u3092\u5b66\u3093\u3060\u3002"}),"\n",(0,r.jsx)(n.li,{children:"JUCE\u306e\u69d8\u3005\u306a\u30af\u30e9\u30b9\u306f\u3001\u305d\u306e\u3088\u3046\u306a\u69d8\u3005\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fc3\u9032\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"JUCE\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u57fa\u672c\u7684\u306a\u4ed5\u7d44\u307f\u3092\u7406\u89e3\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_manage_projucer_project/",children:"Projucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_code_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c82\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../graphics/tutorial_main_window/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../synth/tutorial_simple_synth_noise/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../graphics/tutorial_animation/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../graphics/tutorial_open_gl_application/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aOpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3449:(e,n,s)=>{s.d(n,{A:()=>c});var r=s(4848);function c(e){let{src:n,caption:s,alt:c,width:t,height:i}=e;return(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:n,alt:c||s,width:t,height:i}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("b",{children:s})})]})}},6378:(e,n,s)=>{s.d(n,{A:()=>c});var r=s(4848);function c(e){let{path:n}=e;return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:`https://docs.juce.com/master/${n}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const c={},t=r.createContext(c);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);