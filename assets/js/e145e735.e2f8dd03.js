"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[9172],{5954:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>j,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=t(4848),c=t(8453),o=t(3449),i=t(6378);const s={title:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",sidebar_position:2},j="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aProjucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",d={id:"getting-started/tutorial_manage_projucer_project",title:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",description:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b",source:"@site/docs/getting-started/tutorial_manage_projucer_project.mdx",sourceDirName:"getting-started",slug:"/getting-started/tutorial_manage_projucer_project",permalink:"/juce-tutorial-ja/getting-started/tutorial_manage_projucer_project",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/getting-started/tutorial_manage_projucer_project.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Projucer\u3092\u59cb\u3081\u308b",permalink:"/juce-tutorial-ja/getting-started/tutorial_new_projucer_project"},next:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210\u3001\u30d1\u30fc\u30c81",permalink:"/juce-tutorial-ja/getting-started/tutorial_create_projucer_basic_plugin"}},a={},u=[{value:"\u306f\u3058\u3081\u3088\u3046",id:"\u306f\u3058\u3081\u3088\u3046",level:2},{value:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020",id:"projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7ba1\u7406",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7ba1\u7406",level:2},{value:"\u30bd\u30fc\u30b9\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0\u3068\u7de8\u96c6",id:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0\u3068\u7de8\u96c6",level:3},{value:"JUCE\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u7ba1\u7406",id:"juce\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u7ba1\u7406",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebprojucer\u30d1\u30fc\u30c82projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aProjucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b"}),"\n",(0,n.jsx)(i.A,{path:"tutorial_manage_projucer_project.html"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"\n\u3067\u306f\u3001\u65b0\u3057\u3044JUCE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u308c\u3092\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u958b\u59cb\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3001Projucer\u306f\u305d\u308c\u3060\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u3059\u3079\u3066\u306e\u8a2d\u5b9a\u3092\u7ba1\u7406\u3057\u305f\u308a\u3001\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3059\u308b\u305f\u3081\u306e\u975e\u5e38\u306b\u5f37\u529b\u306a\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30c4\u30fc\u30eb\u3067\u3082\u3042\u308a\u307e\u3059\u3002\n\u3042\u306a\u305f\u304cJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b\u3068\u304d\u3001Projucer\u306f\u305d\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u901a\u3057\u3066\u3042\u306a\u305f\u306e\u5fe0\u5b9f\u306a\u4f34\u4fb6\u3068\u306a\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u91cd\u8981\u306a\u6a5f\u80fd\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u30ec\u30d9\u30eb: \u30d3\u30ae\u30ca\u30fc"}),"\n",(0,n.jsx)(r.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0: Windows, macOS, Linux, iOS, Android"}),"\n",(0,n.jsx)(r.h2,{id:"\u306f\u3058\u3081\u3088\u3046",children:"\u306f\u3058\u3081\u3088\u3046"}),"\n",(0,n.jsxs)(r.p,{children:["\u65b0\u3057\u3044 JUCE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001Projucer \u3067\u958b\u304d\u307e\u3059\u3002\u3053\u308c\u306f\n",(0,n.jsx)(r.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"\n\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020",children:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020"}),"\n",(0,n.jsx)(r.p,{children:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020\u3092\u8a73\u3057\u304f\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u4ee5\u4e0b\u306f\u3001Projucer\u304c\u751f\u6210\u3059\u308bJUCE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u3067\u3059\u3002"}),"\n",(0,n.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_manage_projucer_project_screenshot1.png",caption:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u89e3\u5256"}),"\n",(0,n.jsxs)(r.p,{children:["\u4e00\u756a\u4e0a\u306e\u30ec\u30d9\u30eb\u306b\u306f ",(0,n.jsx)(r.code,{children:".jucer"})," \u30d5\u30a1\u30a4\u30eb\uff08\u4e0a\u3067\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u3066\u3044\u308b\uff09\u304c\u3042\u308a\u3001\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001Projucer\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u958b\u304d\u307e\u3059\u3002\n",(0,n.jsx)(r.code,{children:".jucer"})," \u30d5\u30a1\u30a4\u30eb\u306e\u4ed6\u306b\u30013\u3064\u306e\u30b5\u30d6\u30d5\u30a9\u30eb\u30c0\u304c\u751f\u6210\u3055\u308c\u307e\u3059"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u30d5\u30a9\u30eb\u30c0"}),(0,n.jsx)(r.th,{children:"\u5185\u5bb9"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Source"})}),(0,n.jsx)(r.td,{children:"JUCE\u30a2\u30d7\u30ea\u306eC++\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Builds"})}),(0,n.jsxs)(r.td,{children:["Projucer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u30bf\u30fc\u30b2\u30c3\u30c8\u3002\u4e0a\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u306f\u3001Xcode \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3068 Visual Studio \u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u4f8b\u3068\u3057\u3066\u5f37\u8abf\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u3066\u3001JUCE\u30a2\u30d7\u30ea\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3001\u30c7\u30d0\u30c3\u30b0\u3001\u5b9f\u884c\u3092\u958b\u59cb\u3057\u307e\u3059\u3002(\u3082\u3061\u308d\u3093\u3001Projucer \u306e ",(0,n.jsx)(r.strong,{children:"Open in ..."})," \u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059)\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"JuceLibraryCode"})}),(0,n.jsx)(r.td,{children:"\u3053\u3053\u306b\u3001JUCE\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u4ecb\u3057\u3066JUCE\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30b3\u30fc\u30c9\u3092\u30a4\u30f3\u30af\u30eb\u30fc\u30c9\u3059\u308b\u81ea\u52d5\u751f\u6210\u30d8\u30c3\u30c0\u30d5\u30a1\u30a4\u30eb\u3092\u3044\u304f\u3064\u304b\u793a\u3057\u307e\u3059\u3002\u5b9f\u969b\u306eJUCE\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30b3\u30fc\u30c9\u306f\u3053\u3053\u306b\u306f\u306a\u304f\u3001\u5148\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u30b0\u30ed\u30fc\u30d0\u30ebJUCE\u30d5\u30a9\u30eb\u30c0\u306e\u4e2d\u306b\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7ba1\u7406",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7ba1\u7406"}),"\n",(0,n.jsx)(r.p,{children:"\u305d\u308c\u3067\u306f\u3001JUCE \u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u969b\u306b\u983b\u7e41\u306b\u4f7f\u7528\u3059\u308b Projucer \u306e\u6700\u3082\u91cd\u8981\u306a\u6a5f\u80fd\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0\u3068\u7de8\u96c6",children:"\u30bd\u30fc\u30b9\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0\u3068\u7de8\u96c6"}),"\n",(0,n.jsx)(r.p,{children:"Projucer \u306f C++ \u30bd\u30fc\u30b9\u30fb\u30d5\u30a1\u30a4\u30eb\u306e\u305f\u3081\u306e\u30d5\u30a1\u30a4\u30eb\u30fb\u30d6\u30e9\u30a6\u30b6\u3068\u57fa\u672c\u7684\u306a\u30b3\u30fc\u30c9\u30fb\u30a8\u30c7\u30a3\u30bf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u308c\u306f\u5de6\u5074\u306e\u30d5\u30a1\u30a4\u30eb\u30fb\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fb\u30bf\u30d6\u306e\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002\u3053\u3093\u306a\u611f\u3058\u3067\u3059"}),"\n",(0,n.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_manage_projucer_project_screenshot3.png",caption:"Projucer\u306e\u30d5\u30a1\u30a4\u30eb\u30ca\u30d3\u30b2\u30fc\u30bf\uff08\u5de6\uff09\u3068\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u30a8\u30c7\u30a3\u30bf\uff08\u53f3\uff09"}),"\n",(0,n.jsx)(r.p,{children:"Projucer\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u65b0\u3057\u3044\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u65e2\u5b58\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3057\u305f\u308a\u3001\u540d\u524d\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30b0\u30eb\u30fc\u30d7\u306b\u6574\u7406\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3053\u308c\u3092\u884c\u3046\u306b\u306f\uff08\u4ed6\u306e\u6a5f\u80fd\u306b\u3082\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\uff09\u3001\u5de6\u5074\u306e\u30d5\u30a1\u30a4\u30eb\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30bf\u30d6\u3067\u300c+\u300d\u30de\u30fc\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\n\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u30b0\u30eb\u30fc\u30d7\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u3084\u308a\u305f\u3044\u3053\u3068\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"\u30b0\u30eb\u30fc\u30d7\u306f\u30d5\u30a9\u30eb\u30c0\u3068\u540c\u3058\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\nProjucer \u3067\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u3069\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u4fdd\u5b58\u3059\u308b\u304b\u3082\u5c0b\u306d\u3089\u308c\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001\u30b0\u30eb\u30fc\u30d7\u69cb\u9020\u3068\u306f\u7570\u306a\u308b\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u3092\u6301\u3064\u3053\u3068\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002\n\u3057\u304b\u3057\u3001\u30b0\u30eb\u30fc\u30d7\u304c\u30d5\u30a9\u30eb\u30c0\u306e\u69cb\u9020\u3068\u540d\u524d\u306b\u5f93\u3046\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u306f\u3001\u975e\u5e38\u306b\u63a8\u5968\u3055\u308c\u3001\u826f\u3044\u7fd2\u6163\u3067\u3059\u3002"})}),"\n",(0,n.jsx)(r.p,{children:"\u30d5\u30a1\u30a4\u30eb\u69cb\u9020\u3092\u5909\u66f4\u3057\u3066\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u3068\u3001\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30cd\u30a4\u30c6\u30a3\u30d6 IDE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5909\u66f4\u304c\u53cd\u6620\u3055\u308c\u307e\u3059\u3002\n\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u3001\u958b\u767a\u3059\u308b\u3059\u3079\u3066\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u69cb\u9020\u3092\u7c21\u5358\u306b\u4e00\u8cab\u6027\u3092\u4fdd\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsx)(r.p,{children:"\u30cd\u30a4\u30c6\u30a3\u30d6 IDE (Xcode, Visual Studio \u306a\u3069) \u5185\u3067\u3001JUCE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u30bd\u30fc\u30b9\u30fb\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3001\u540d\u524d\u5909\u66f4\u3001\u304a\u3088\u3073/\u307e\u305f\u306f\u524a\u9664\u3057\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002\n\u3053\u308c\u3089\u306e\u5909\u66f4\u306f\u3001\u6b21\u306b Projucer \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3057\u305f\u3068\u304d\u306b\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059 (\u30cd\u30a4\u30c6\u30a3\u30d6 IDE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u6bce\u56de\u518d\u751f\u6210\u3055\u308c\u307e\u3059)\u3002\n\u3053\u306e\u3088\u3046\u306a\u5909\u66f4\u3092\u884c\u3046\u306b\u306f\u3001\u5e38\u306bProjucer\u81ea\u4f53\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,n.jsx)(r.p,{children:"Projucer \u306e\u30b3\u30fc\u30c9\u30fb\u30a8\u30c7\u30a3\u30bf\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u30fb\u30d6\u30e9\u30a6\u30b6\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u3068\u8868\u793a\u3055\u308c\u308b\u3002\n\u30b3\u30fc\u30c9\u306b\u7d20\u65e9\u304f\u5909\u66f4\u3092\u52a0\u3048\u308b\u306b\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6IDE\u3092\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001Projucer\u3067\u5909\u66f4\u3092\u52a0\u3048\u3001\u5909\u66f4\u3092\u4fdd\u5b58\u3059\u308b\u3060\u3051\u3067\u3088\u3044\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"juce\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u7ba1\u7406",children:"JUCE\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u7ba1\u7406"}),"\n",(0,n.jsx)(r.p,{children:"JUCE\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30b3\u30fc\u30c9\u306f\u3001\u69d8\u3005\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u6574\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bf\u30a4\u30d7\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_manage_projucer_project_screenshot4.png",caption:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308bJUCE\u30e2\u30b8\u30e5\u30fc\u30eb\uff08\u5de6\u3001\u30cf\u30a4\u30e9\u30a4\u30c8\uff09\u3068\u30e2\u30b8\u30e5\u30fc\u30eb\u8a2d\u5b9a\u30da\u30fc\u30b8\uff08\u53f3\uff09"}),"\n",(0,n.jsx)(r.p,{children:'\u307b\u3068\u3093\u3069\u306e JUCE \u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u3001\u9069\u5207\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u305f\u3081\u306b\u4ed6\u306e JUCE \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002\n\u3082\u3057\u3001\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4ed6\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u524a\u9664\u3057\u305f\u5834\u5408\u3001Projucer \u306f "\u58ca\u308c\u305f" \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8d64\u304f\u30cf\u30a4\u30e9\u30a4\u30c8\u3057\u307e\u3059\u3002\n\u305d\u3057\u3066\u3001"\u58ca\u308c\u305f "\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u524a\u9664\u3059\u308b\u304b\u3001\u8db3\u308a\u306a\u3044\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8ffd\u52a0\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002'}),"\n",(0,n.jsx)(r.p,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30bf\u30d6\u3067\u8a2d\u5b9a\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u8a2d\u5b9a\u30da\u30fc\u30b8\u304c\u958b\u304d\u307e\u3059\u3002\n\u73fe\u5728\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u6982\u8981\u304c\u8868\u793a\u3055\u308c\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d1\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d1\u30b9\u3092\u4e00\u5ea6\u306b\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4e00\u3064\u306b\u6b63\u3057\u3044\u30d1\u30b9\u3092\u5165\u529b\u3057\u3001\u305d\u308c\u3092\u9078\u629e\u3057\u3001\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d1\u30b9\u3092\u8a2d\u5b9a...\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u307e\u305f\u306f\u3001 ",(0,n.jsx)(r.strong,{children:"Enable/disable global path for modules..."})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u691c\u7d22\u30d1\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u30b0\u30ed\u30fc\u30d0\u30eb\u691c\u7d22\u30d1\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001MacOS\u3067\u306f\u30e1\u30cb\u30e5\u30fc\u306e Projucer > Global Search Paths\u3001Windows\u3068Linux\u3067\u306fFile > Global Search Paths\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u30d6\u30e9\u30a6\u30b6\u3067\u500b\u3005\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u56fa\u6709\u306e\u8a2d\u5b9a\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\n\u305d\u3053\u3067\u3001\u7279\u5b9a\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u7279\u5b9a\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u4f7f\u7528\u3057\u3066\u3044\u308bSDK\u3084\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u3069\u306e\u8ffd\u52a0\u4f9d\u5b58\u95a2\u4fc2\u3078\u306e\u30d1\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u901a\u5e38\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u8a2d\u5b9a\u3067\u554f\u984c\u306a\u304f\u52d5\u4f5c\u3059\u308b\u306e\u3067\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u5165\u308b\u5fc5\u8981\u306f\u307b\u3068\u3093\u3069\u306a\u3044\u306f\u305a\u3067\u3059\u3002"})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3449:(e,r,t)=>{t.d(r,{A:()=>c});var n=t(4848);function c(e){let{src:r,caption:t,alt:c,width:o,height:i}=e;return(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:r,alt:c||t,width:o,height:i}),(0,n.jsx)("figcaption",{children:(0,n.jsx)("b",{children:t})})]})}},6378:(e,r,t)=>{t.d(r,{A:()=>c});var n=t(4848);function c(e){let{path:r}=e;return(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://docs.juce.com/master/"+r,children:"\ud83d\udcda Source Page"})})}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(6540);const c={},o=n.createContext(c);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);