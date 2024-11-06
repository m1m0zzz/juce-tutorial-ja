"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[3219],{4192:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(4848),t=n(8453);const s={title:"\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30b7\u30f3\u30bb\u30b7\u30b9",sidebar_position:6,tags:["\u521d\u7d1a"]},c="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b",d={id:"midi/tutorial_new_projucer_project",title:"\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30b7\u30f3\u30bb\u30b7\u30b9",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3068\u3001Projucer \u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 JUCE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u307e\u305f\u3001JUCE \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3001\u5b9f\u884c\u3001\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Xcode \u3084 Visual Studio \u306a\u3069\u306e IDE \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/midi/tutorial_new_projucer_project.mdx",sourceDirName:"midi",slug:"/midi/tutorial_new_projucer_project",permalink:"/juce-tutorial-ja/midi/tutorial_new_projucer_project",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/midi/tutorial_new_projucer_project.mdx",tags:[{inline:!0,label:"\u521d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u521d\u7d1a"}],version:"current",sidebarPosition:6,frontMatter:{title:"\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30b7\u30f3\u30bb\u30b7\u30b9",sidebar_position:6,tags:["\u521d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"MPE\u30be\u30fc\u30f3\u306e\u7406\u89e3",permalink:"/juce-tutorial-ja/midi/tutorial_mpe_zones"},next:{title:"Plugins",permalink:"/juce-tutorial-ja/category/plugins"}},l={},o=[{value:"\u30b9\u30bf\u30fc\u30c8",id:"\u30b9\u30bf\u30fc\u30c8",level:2},{value:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6",id:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a6\u30a3\u30f3\u30c9\u30a6",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u629e",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u629e",level:3},{value:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3067\u958b\u304d\u307e\u3059\u3002",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u30cd\u30a4\u30c6\u30a3\u30d6ide\u3067\u958b\u304d\u307e\u3059",level:3},{value:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",id:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",level:2},{value:"PIP\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f",id:"pip\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u3053\u3061\u3089\u3082\u53c2\u7167",id:"\u3053\u3061\u3089\u3082\u53c2\u7167",level:2}];function j(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{CaptionImage:n,SourcePageLink:s}=r;return n||a("CaptionImage",!0),s||a("SourcePageLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebprojucer\u30d1\u30fc\u30c81projucer\u3092\u59cb\u3081\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})}),"\n",(0,i.jsx)(s,{path:"tutorial_new_projucer_project"}),"\n",(0,i.jsx)(r.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3068\u3001Projucer \u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 JUCE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u307e\u305f\u3001JUCE \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3001\u5b9f\u884c\u3001\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Xcode \u3084 Visual Studio \u306a\u3069\u306e IDE \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3082\u5b66\u3073\u307e\u3059\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u30ec\u30d9\u30eb\u521d\u5fc3\u8005"}),"\n",(0,i.jsx)(r.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,i.jsx)(r.h2,{id:"\u30b9\u30bf\u30fc\u30c8",children:"\u30b9\u30bf\u30fc\u30c8"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://www.juce.com/get-juce",children:"Download JUCE"}),".JUCE\u30d5\u30a9\u30eb\u30c0\u3092\u89e3\u51cd\u3057\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306e\u4efb\u610f\u306e\u5834\u6240\u306b\u7f6e\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u306e\u30db\u30fc\u30e0\u30d5\u30a9\u30eb\u30c0\u304c\u4fbf\u5229\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u5148\u307b\u3069\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305fJUCE\u30d5\u30a9\u30eb\u30c0\u306b\u5165\u308a\u307e\u3059\u3002\u305d\u3053\u306b\u3042\u308bProjucer\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a6\u30a3\u30f3\u30c9\u30a6",children:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6"}),"\n",(0,i.jsxs)(r.p,{children:["Projucer\u3092\u521d\u3081\u3066\u8d77\u52d5\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002(\u5f8c\u3067",(0,i.jsx)(r.strong,{children:"\u65b0\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"Projucer\u306e\u30e1\u30a4\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089\uff09\uff1a"]}),"\n",(0,i.jsx)(n,{src:"https://docs.juce.com/master/tutorial_new_projucer_project_screenshot1.png",caption:"Projucer - \u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u3002"}),"\n",(0,i.jsx)(r.h3,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u629e",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u629e"}),"\n",(0,i.jsx)(r.p,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u5de6\u5074\u3067\u3001\u4f5c\u6210\u3057\u305f\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u3054\u3068\u306b\u3001Projucer\u306f\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3001\u3059\u3079\u3066\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u9069\u5207\u306a\u6700\u5c0f\u9650\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u3059\u3050\u306b\u5b9f\u969b\u306e\u6a5f\u80fd\u306e\u958b\u767a\u306b\u53d6\u308a\u639b\u304b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u521d\u3081\u3066JUCE\u3092\u4f7f\u3046\u5834\u5408\u3067\u3001\u4f55\u304b\u3089\u59cb\u3081\u305f\u3089\u3088\u3044\u304b\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u4ee5\u4e0b\u306f\u3001\u73fe\u5728\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u306e\u6982\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7a2e\u985e"}),(0,i.jsx)(r.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30d6\u30e9\u30f3\u30af"})}),(0,i.jsx)(r.td,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u7a7a\u767d\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"})}),(0,i.jsx)(r.td,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u7a7a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u6301\u3064\u6700\u5c0f\u9650\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u304b\u3089\u59cb\u3081\u3066\u3001JUCE\u304c\u63d0\u4f9b\u3059\u308b\u69d8\u3005\u306a\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u3001\u3088\u308a\u591a\u304f\u306eGUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306a\u3069\u306e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30aa\u30fc\u30c7\u30a3\u30aa"})}),(0,i.jsxs)(r.td,{children:["\u3053\u308c\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u6700\u5c0f\u9650\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"}),"\u3057\u304b\u3057\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u51fa\u529b\u3092\u7c21\u5358\u306b\u884c\u3046\u305f\u3081\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u30b3\u30fc\u30c9\u3092\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30b2\u30fc\u30e0\u3084\u30de\u30eb\u30c1\u30e1\u30c7\u30a3\u30a2\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u3001\u69d8\u3005\u306a\u7528\u9014\u306b\u304a\u4f7f\u3044\u3044\u305f\u3060\u3051\u307e\u3059\u3002"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30b3\u30f3\u30bd\u30fc\u30eb"})}),(0,i.jsx)(r.td,{children:"JUCE\u306f\u3001GUI\u3092\u5168\u304f\u6301\u305f\u306a\u3044\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b\u306e\u306b\u3082\u975e\u5e38\u306b\u4fbf\u5229\u3067\u3059\u3002\u305d\u306e\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"})}),(0,i.jsx)(r.td,{children:"\u3053\u308c\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8868\u793a\u3092\u63cf\u753b\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30fb\u30e2\u30d0\u30a4\u30eb\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u3053\u3053\u304b\u3089\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/OpenGL"})}),(0,i.jsxs)(r.td,{children:["\u3053\u308c\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u7a7a\u767d\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"}),"\u3057\u304b\u3057\u30013D\u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3084GLSL\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u542b\u3080\u63cf\u753b\u6a5f\u80fd\u306b\u306fOpenGL\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3/\u30d9\u30fc\u30b7\u30c3\u30af"})}),(0,i.jsxs)(r.td,{children:["\u3053\u308c\u306f\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002VST\u3001AudioUnit\u3001AAX\u30d7\u30e9\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9\u304c\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u6b63\u3057\u304f\u52d5\u4f5c\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u8ffd\u52a0\u306e\u6e96\u5099\u624b\u9806\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u53c2\u7167",(0,i.jsx)(r.a,{href:"../../getting-started/tutorial_create_projucer_basic_plugin/",children:"Tutorial: Create a basic Audio/MIDI plugin, Part 1: Setting up"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"\u30e9\u30a4\u30d6\u30e9\u30ea/\u9759\u7684, \u30e9\u30a4\u30d6\u30e9\u30ea/\u52d5\u7684"})}),(0,i.jsx)(r.td,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30bf\u30a4\u30d7\u306f\u3001JUCE\u306e\u4e0a\u306b\u69cb\u7bc9\u3059\u308b\u518d\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u6210\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002Projucer\u306f\u3001\u9759\u7684\u30ea\u30f3\u30af\u3068\u52d5\u7684\u30ea\u30f3\u30af\u306e\u4e21\u65b9\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f5c\u6210\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"})]})]})]}),"\n",(0,i.jsxs)(r.p,{children:["\u307e\u305f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u51fa\u767a\u70b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u30b5\u30f3\u30d7\u30eb\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3082\u6570\u591a\u304f\u3042\u308a\u307e\u3059\u3002",(0,i.jsx)(r.code,{children:"JUCE/examples"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u95b2\u89a7\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(r.strong,{children:"\u30aa\u30fc\u30d7\u30f3\u4f8b"}),"\u30bf\u30d6"]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["\u9078\u629e\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u306b\u3088\u3063\u3066\u5236\u9650\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,i.jsx)(r.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3/GUI"}),"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3084OpenGL\u306f\u3044\u3064\u3067\u3082\u5f8c\u304b\u3089\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u5f8c\u304b\u3089\u7c21\u5358\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]})}),"\n",(0,i.jsx)(r.h3,{id:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",children:"\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,i.jsx)(r.p,{children:"\u9069\u5207\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u305f\u5f8c\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u53f3\u5074\u306b\u3042\u308b\u8ffd\u52a0\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3092\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d"}),"- \u3053\u3053\u3067\u30a2\u30d7\u30ea\u306e\u540d\u524d\u3092\u6c7a\u3081\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb"}),"- JUCE\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,i.jsx)(r.em,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb"}),".\u3053\u3053\u3067\u3001\u3069\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u3081\u308b\u304b\u3092\u9078\u629e\u3057\u3001\u305d\u306e\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067",(0,i.jsx)(r.code,{children:"modules"}),"\u30b5\u30d6\u30d5\u30a9\u30eb\u30c0\u306f\u3001\u5148\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f JUCE \u30d5\u30a9\u30eb\u30c0\u306e\u4e2d\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u8f38\u51fa\u696d\u8005"}),"- \u3053\u3053\u3067\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u3068\u30c7\u30d0\u30c3\u30b0\u306b\u4f7f\u7528\u3059\u308b\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30d7\u30ea\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3068\u30e2\u30d0\u30a4\u30eb\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3082\u5b9a\u7fa9\u3057\u307e\u3059\u3002Projucer\u3067\u306f\u3001\u5f8c\u304b\u3089\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3084IDE\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Projucer\u306b\u306f\u73fe\u5728\u3001\u4ee5\u4e0b\u306eIDE\u3001\u30d3\u30eb\u30c9\u30fb\u30b7\u30b9\u30c6\u30e0\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7528\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u5bfe\u8c61OS"}),(0,i.jsx)(r.th,{children:"\u5bfe\u5fdc\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\u30aa\u30fc\u30a8\u30b9\u30a8\u30c3\u30af\u30b9"}),(0,i.jsx)(r.td,{children:"\u30a8\u30c3\u30af\u30b9\u30b3\u30fc\u30c9"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u30ba"}),(0,i.jsx)(r.td,{children:"\u30d3\u30b8\u30e5\u30a2\u30eb\u30b9\u30bf\u30b8\u30aa\u3001Code::Blocks"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\u30ea\u30ca\u30c3\u30af\u30b9"}),(0,i.jsx)(r.td,{children:"Makefile, Code::Blocks"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"iOS"}),(0,i.jsx)(r.td,{children:"\u30a8\u30c3\u30af\u30b9\u30b3\u30fc\u30c9"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9"}),(0,i.jsx)(r.td,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u30b9\u30bf\u30b8\u30aa"})]})]})]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.a,{href:"https://docs.juce.com/master/classFile.html",title:"\u30ed\u30fc\u30ab\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u8868\u3059\u3002",children:"File"}),"\u5236\u4f5c\u30aa\u30d7\u30b7\u30e7\u30f3"]}),"- \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7a2e\u985e\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u81ea\u52d5\u751f\u6210\u3059\u308b\u30b3\u30fc\u30c9\u306e\u9078\u629e\u80a2\u304c\u3042\u308a\u307e\u3059\u3002JUCE\u306b\u6163\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u5fc5\u8981\u306a\u3082\u306e\u3092\u3059\u3079\u3066\u81ea\u52d5\u751f\u6210\u3057\u3001\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u306b\u306f\u3001\u901a\u5e38\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u9078\u629e\u304c\u6700\u9069\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u3059\u3079\u3066\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u305f\u3089**\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210...**\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u5834\u6240\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u30cd\u30a4\u30c6\u30a3\u30d6ide\u3067\u958b\u304d\u307e\u3059",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3067\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001Projucer\u304b\u3089\u76f4\u63a5\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e00\u756a\u4e0a\u306e\u30dc\u30bf\u30f3\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,i.jsx)(n,{src:"https://docs.juce.com/master/tutorial_new_projucer_project_screenshot2.png",caption:"Projucer - IDE\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3057\u3066\u958b\u304f"}),"\n",(0,i.jsx)(r.p,{children:"IDE\uff08Xcode\u3001Visual Studio\u306a\u3069\uff09\u3092\u958b\u3044\u305f\u306e\u3067\u3001JUCE\u30a2\u30d7\u30ea\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u5b9f\u884c\u3057\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u9069\u5207\u306a\u30cd\u30a4\u30c6\u30a3\u30d6IDE/\u30d3\u30eb\u30c9\u30fb\u30b7\u30b9\u30c6\u30e0\u3092\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u3088\u3063\u3066\u306f\u3001\u8ffd\u52a0\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001Android\u5411\u3051\u306b\u958b\u767a\u3059\u308b\u306b\u306fAndroid SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsxs)(r.p,{children:["\u3059\u3079\u3066\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u30bf\u30fc\u30b2\u30c3\u30c8\uff08\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff09\u306f\u3001Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001Projucer\u3067\u4fdd\u5b58\u3059\u308b\u305f\u3073\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002\u3044\u3064\u3067\u3082\u65b0\u3057\u3044\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u30fb\u30bf\u30fc\u30b2\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3055\u3089\u306b\u591a\u304f\u306eIDE\u3084\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u3053\u306e\u4ed6\u306e\u6a5f\u80fd\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.jsx)(r.a,{href:"../../getting-started/tutorial_manage_projucer_project/",children:"Tutorial: Projucer Part 2: Manage your Projucer projects"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",children:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"}),"\n",(0,i.jsxs)(r.p,{children:["\u65e2\u5b58\u306eProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f\u306b\u306f\u3001\u6b21\u306e\u3044\u305a\u308c\u304b\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,i.jsx)(r.code,{children:".jucer"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u5185\u306e",(0,i.jsx)(r.strong,{children:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"}),"\u3092\u30a6\u30a3\u30b6\u30fc\u30c9\u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002(\u306b\u79fb\u52d5\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002**\u30aa\u30fc\u30d7\u30f3...**Projucer\u306e\u30e1\u30a4\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089)\u3002"]}),"\n",(0,i.jsx)(r.h3,{id:"pip\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f",children:"PIP\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f"}),"\n",(0,i.jsxs)(r.p,{children:["\u3042\u306a\u305f\u306f\u6b21\u306e\u3088\u3046\u306a\u5834\u9762\u306b\u51fa\u304f\u308f\u3059\u304b\u3082\u3057\u308c\u306a\u3044\u3002",(0,i.jsx)(r.em,{children:"Projucer\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"(PIP)\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u3053\u308c\u3089\u306f\u57fa\u672c\u7684\u306b\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u3067\u3001\u901a\u5e38\u306e",(0,i.jsx)(r.code,{children:".h"}),"\u3053\u306e\u62e1\u5f35\u6a5f\u80fd\u306f\u3001Projucer\u306b\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u30011\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u6b63\u3057\u3044\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u3092\u6301\u3064\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"PIP\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u306b\u306f\u3001\u540c\u69d8\u306b**\u30aa\u30fc\u30d7\u30f3...**\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u958b\u304f\u304b\u3001Projucer\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u30c9\u30e9\u30c3\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsx)(r.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"JUCE\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,i.jsx)(r.li,{children:"Projucer\u3092\u4f7f\u3063\u3066\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,i.jsx)(r.li,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092OSX\u306eXcode\u3084Windows\u306eVisual Studio\u306a\u3069\u306e\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(r.li,{children:"\u30bf\u30fc\u30b2\u30c3\u30c8\u3068\u3059\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3067\u30a2\u30d7\u30ea\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3001\u5b9f\u884c\u3001\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3002"}),"\n",(0,i.jsx)(r.li,{children:"\u65e2\u5b58\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068PIP\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u3053\u3061\u3089\u3082\u53c2\u7167",children:"\u3053\u3061\u3089\u3082\u53c2\u7167"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../../getting-started/tutorial_manage_projucer_project/",children:"Tutorial: Projucer Part 2: Manage your Projucer projects"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../../getting-started/tutorial_create_projucer_basic_plugin/",children:"Tutorial: Create a basic Audio/MIDI plugin, Part 1: Setting up"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"../../getting-started/tutorial_choosing_projucer_template/",children:"Tutorial: Projucer Part 3: Choosing the right Projucer template for your application"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}function a(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>d});var i=n(6540);const t={},s=i.createContext(t);function c(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);