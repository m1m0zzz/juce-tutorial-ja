"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[343],{6953:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=r(4848),t=r(8453);const o={title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c81",sidebar_position:3,tags:["\u4e2d\u7d1a"]},c="\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",s={id:"getting-started/tutorial_create_projucer_basic_plugin",title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c81",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001JUCE \u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\uff08VST3 \u3068 AudioUnit\uff09\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e Projucer \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",source:"@site/docs/getting-started/tutorial_create_projucer_basic_plugin.mdx",sourceDirName:"getting-started",slug:"/getting-started/tutorial_create_projucer_basic_plugin",permalink:"/juce-tutorial-ja/getting-started/tutorial_create_projucer_basic_plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/getting-started/tutorial_create_projucer_basic_plugin.mdx",tags:[{inline:!0,label:"\u4e2d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u4e2d\u7d1a"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c81",sidebar_position:3,tags:["\u4e2d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",permalink:"/juce-tutorial-ja/getting-started/tutorial_manage_projucer_project"},next:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c82",permalink:"/juce-tutorial-ja/getting-started/tutorial_code_basic_plugin"}},l={},u=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"VST3 \u3068 AudioUnit",id:"vst3-\u3068-audiounit",level:3},{value:"Projucer\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"projucer\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30c7\u30d0\u30c3\u30b0\u306e\u8a2d\u5b9a\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30c7\u30d0\u30c3\u30b0\u306e\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",level:2},{value:"\u5099\u8003",id:"\u5099\u8003",level:2},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u95a2\u9023\u9805\u76ee",id:"\u95a2\u9023\u9805\u76ee",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{CaptionImage:r,SourcePageLink:o}=n;return r||j("CaptionImage",!0),o||j("SourcePageLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u57fa\u672c\u7684\u306aaudiomidi\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b-\u30d1\u30fc\u30c81\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,i.jsx)(o,{path:"tutorial_create_projucer_basic_plugin"}),"\n",(0,i.jsx)(n.p,{children:'\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001JUCE \u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\uff08VST3 \u3068 AudioUnit\uff09\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e Projucer \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u6700\u5f8c\u306b\u306f\u3001"Hello, World!" \u3068\u8a00\u3063\u3066\u3001Cubase \u3084 REAPER \u306e\u3088\u3046\u306a VST3 \u30db\u30b9\u30c8\u306b\u30ed\u30fc\u30c9\u3067\u304d\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5b8c\u6210\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1a\u4e2d\u7d1a"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u5f62\u5f0f\uff1aVST3, AU, Standalone"}),"\n",(0,i.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://shop.juce.com/get-juce/download",children:"JUCE\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3002"}),"\nJUCE\u30d5\u30a9\u30eb\u30c0\u3092\u89e3\u51cd\u3057\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306e\u4efb\u610f\u306e\u5834\u6240\u306b\u7f6e\u304d\u307e\u3059\u3002\n\u30e6\u30fc\u30b6\u306e\u30db\u30fc\u30e0\u30d5\u30a9\u30eb\u30c0\u304c\u4fbf\u5229\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"JUCE\u30d5\u30a9\u30eb\u30c0\u306e\u4e2d\u306b\u3042\u308bProjucer\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["Projucer\u306b\u307e\u3060\u6163\u308c\u3066\u3044\u306a\u3044\u65b9\u306f\u3001",(0,i.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"\n\u3092\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,i.jsx)(n.h3,{id:"vst3-\u3068-audiounit",children:"VST3 \u3068 AudioUnit"}),"\n",(0,i.jsx)(n.p,{children:"VST3 \u304a\u3088\u3073 AU\uff08MacOS\u306e\u307f\uff09\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\n\u3059\u3079\u3066JUCE\u306b\u540c\u68b1\u3055\u308c\u3066\u3044\u307e\u3059\u3002\uff08JUCE\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u9650\u308a\uff09"}),"\n",(0,i.jsx)(n.h2,{id:"projucer\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",children:"Projucer\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["JUCE\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001Projucer\u3067\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7a2e\u985e\u3068\u3057\u3066 ",(0,i.jsx)(n.strong,{children:"Audio Plug-In"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002\nProjucer\u306e\u4f7f\u3044\u65b9\u304c\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001",(0,i.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Projucer\u306e\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a\u306b\u304a\u3044\u3066\u3001\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30bf\u30a4\u30d7\u3084\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304cMIDI\u30ce\u30fc\u30c8\u3092\u53d7\u4fe1\u3059\u308b\u304b\u751f\u6210\u3059\u308b\u304b\u306a\u3069\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3053\u308c\u3089\u306e\u8a2d\u5b9a\u306f\u3044\u3064\u3067\u3082\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:['\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306fVST3\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306e\u3067\u3001"Plugin Formats "\u30d5\u30a3\u30fc\u30eb\u30c9\u3067 ',(0,i.jsx)(n.strong,{children:"VST3"}),' \u8a2d\u5b9a\u306b\u30c1\u30a7\u30c3\u30af\u304c\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u6b21\u306b\u3001\u4e0b\u306e "Plugin Characteristics "\u30d5\u30a3\u30fc\u30eb\u30c9\u3067 ',(0,i.jsx)(n.strong,{children:"Plugin MIDI input"})," \u3068 ",(0,i.jsx)(n.strong,{children:"Plugin MIDI output"})," \u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5fc5\u8981\u306a\u8a2d\u5b9a\u306f\u4ee5\u4e0a\u3067\u3059\uff01",(0,i.jsx)(n.strong,{children:"Save Project and Open in IDE..."})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u958b\u304d\u307e\u3059\u3002\n\u30d3\u30eb\u30c9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u3059\u3079\u3066\u304c\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30c7\u30d0\u30c3\u30b0\u306e\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30c7\u30d0\u30c3\u30b0\u306e\u8a2d\u5b9a\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8ab2\u984c\u306e\u4e00\u3064\u306f\u3001\u305d\u308c\u3092\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\u3059\u3002\n\u3042\u308a\u304c\u305f\u3044\u3053\u3068\u306b\u3001JUCE\u306f\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3092\u5185\u8535\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u305d\u308c\u3092\u7c21\u5358\u306b\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30db\u30b9\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(n.code,{children:"extras/AudioPluginHost/"})," \u306b\u884c\u304d\u3001Projucer\u3067 ",(0,i.jsx)(n.code,{children:".jucer"})," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002\n",(0,i.jsx)(n.strong,{children:"Save Project\u3068Open in IDE..."})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n\u305d\u3057\u3066 IDE\u5185\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u30d0\u30a4\u30ca\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\uff08Mac OS X\u3067\u306f ",(0,i.jsx)(n.code,{children:"extras/AudioPluginHost/Builds/MacOSX/build"})," \u306b\u3042\u308a\u307e\u3059\uff09"]}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u30ce\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(r,{src:"https://docs.juce.com/master/tutorial_create_projucer_basic_plugin_1.png",caption:"JUCE plug-in host"}),"\n",(0,i.jsxs)(n.p,{children:['"Cmd-P" \u3092\u62bc\u3059\uff08\u307e\u305f\u306f ',(0,i.jsx)(n.strong,{children:"Options > Edit the List of Available Plug-ins..."}),"\uff09\u3068\u3001\n\u30b7\u30b9\u30c6\u30e0\u4e0a\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u30ea\u30b9\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b1\u56de\u3060\u3051\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\u3002\n\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u4e0b\u90e8\u306b\u3042\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u30fb\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,i.jsx)(n.strong,{children:"Scan for new or updated VST3 plug-ins..."})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","macOS\u306e\u5834\u5408\u3001JUCE Audio\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u81ea\u52d5\u7684\u306b ",(0,i.jsx)(n.code,{children:"~/Library/Audio/Plug-Ins/VST3"})," \u306b\u30b3\u30d4\u30fc\u3055\u308c\u3001\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u81ea\u52d5\u7684\u306b\u305d\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u691c\u7d22\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","Windows\u306e\u5834\u5408\u3001\u30d3\u30eb\u30c9\u3057\u305fVST3\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d3\u30eb\u30c9\u30d5\u30a9\u30eb\u30c0\u304b\u3089VST3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30d5\u30a9\u30eb\u30c0\uff08\u901a\u5e38\u306f ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\Common Files\\VST3"}),"\uff09\u306b\u624b\u52d5\u3067\u30b3\u30d4\u30fc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:'\u30b9\u30ad\u30e3\u30f3\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u30ce\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u306b\u623b\u3063\u3066\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f "yourcompany "\u3068\u3044\u3046\u4f1a\u793e\u306e\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002\n\uff09MIDI\u5165\u529b\u3068Audio Input\u30ce\u30fc\u30c9\u304c\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5165\u529b\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u308c\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u304cAudio Output\u30ce\u30fc\u30c9\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u308c\u308b\u3088\u3046\u306b\u3001\u30ce\u30fc\u30c9\u3092\u63a5\u7d9a\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(r,{src:"https://docs.juce.com/master/tutorial_create_projucer_basic_plugin_2.png",caption:"JUCE plug-in host \u3067\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068GUI\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u4f55\u3082\u3057\u307e\u305b\u3093\u304c\u3001Hello world\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Options > Change the Audio Device Settings..."})," \u3092\u9078\u629e\u3057\u3066\u3001\u5165\u529b\u3068\u51fa\u529b\u304c\u3059\u3079\u3066\u6b63\u3057\u3044\u5834\u6240\u306b\u884c\u304f\u3088\u3046\u306b\u3067\u304d\u307e\u3059\u3002\n",(0,i.jsx)(n.strong,{children:"File > Save"})," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u3053\u306e\u8a2d\u5b9a\u3092\u7c21\u5358\u306b\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u3088\u3046\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306e\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u306a\u74b0\u5883\u304c\u5f97\u3089\u308c\u307e\u3059\u3002\n\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b9\u30c6\u30c3\u30d7\u30b9\u30eb\u30fc\u30c7\u30d0\u30c3\u30b0\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u30db\u30b9\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","macOS \u3067\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001Xcode\u3067\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u623b\u308a\u3001",(0,i.jsx)(n.strong,{children:"Product > Scheme > Edit Scheme..."})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\n",(0,i.jsx)(n.strong,{children:"Run"})," \u3067 ",(0,i.jsx)(n.strong,{children:"Executable"})," \u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089 ",(0,i.jsx)(n.strong,{children:"Other..."})," \u3092\u9078\u629e\u3057\u3001",(0,i.jsx)(n.strong,{children:"Plugin Host.app"})," \u3092\u63a2\u3057\u307e\u3059\u3002\nDebug executable\u306b\u30c1\u30a7\u30c3\u30af\u304c\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.jsx)(n.br,{}),"\n",'Windows \u306e Visual Studio \u3067\u306f\u3001VST3\u30d3\u30eb\u30c9\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u30da\u30fc\u30b8\u306b\u884c\u304d\u3001\n"Debugging" \u30da\u30a4\u30f3\u3092\u9078\u629e\u3057\u3001"Command" \u30d5\u30a3\u30fc\u30eb\u30c9\u306b AudioPluginHost \u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30d1\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002']}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u81ea\u52d5\u7684\u306b\u30db\u30b9\u30c8\u304c\u8d77\u52d5\u3057\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u30db\u30b9\u30c8\u5185\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001\n\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u3066\u30b9\u30c6\u30c3\u30d7\u30b9\u30eb\u30fc\u30c7\u30d0\u30c3\u30b0\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",children:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u3067\u3001\u5b9f\u969b\u306b\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u518d\u751f\u3059\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002\n",(0,i.jsx)(n.a,{href:"../tutorial_code_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c82\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"}),"\n\u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5099\u8003",children:"\u5099\u8003"}),"\n",(0,i.jsxs)(n.p,{children:["Pro Tools\u7528\u306e AAX\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30d3\u30eb\u30c9\u3059\u308b\u306b\u306f\u3001Avid\u306b\u9023\u7d61\u3057\u3066SDK\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u958b\u767a\u8005\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nAAX SDK\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u3001Projucer\u306e ",(0,i.jsx)(n.strong,{children:"Global Preferences"})," \u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u8a2d\u5b9a\u3067\u304d\u308b\u30d1\u30b9\u304c\u3042\u308b\u3053\u3068\u306b\u6c17\u3065\u304f\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u306b\u5fc5\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3001"}),"\n",(0,i.jsx)(n.li,{children:"JUCE\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u7528\u306eProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3001"}),"\n",(0,i.jsx)(n.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u306e\u305f\u3081\u306e\u30c7\u30d0\u30c3\u30b0\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_manage_projucer_project/",children:"Projucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_code_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c82\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../plugins/tutorial_plugin_examples/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f8b"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../plugins/tutorial_audio_bus_layouts/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var i=r(6540);const t={},o=i.createContext(t);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);