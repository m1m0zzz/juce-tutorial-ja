"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[5532],{352:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"plugins/tutorial_audio_bus_layouts","title":"\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b","description":"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3057\u3001\u5236\u9650\u3059\u308b\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002Apple\u306eLogic Pro\u306b\u642d\u8f09\u3055\u308c\u3066\u3044\u308bauval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u3001AU\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002","source":"@site/docs/plugins/tutorial_audio_bus_layouts.mdx","sourceDirName":"plugins","slug":"/plugins/tutorial_audio_bus_layouts","permalink":"/juce-tutorial-ja/plugins/tutorial_audio_bus_layouts","draft":false,"unlisted":false,"editUrl":"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/plugins/tutorial_audio_bus_layouts.mdx","tags":[{"inline":true,"label":"\u521d\u7d1a","permalink":"/juce-tutorial-ja/tags/\u521d\u7d1a"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b","sidebar_position":3,"tags":["\u521d\u7d1a"]},"sidebar":"tutorialSidebar","previous":{"title":"\u30d7\u30e9\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u4fdd\u5b58\u3068\u8aad\u307f\u8fbc\u307f","permalink":"/juce-tutorial-ja/plugins/tutorial_audio_processor_value_tree_state"},"next":{"title":"\u30ab\u30b9\u30b1\u30fc\u30c9\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30a8\u30d5\u30a7\u30af\u30c8","permalink":"/juce-tutorial-ja/plugins/tutorial_audio_processor_graph"}}');var s=t(4848),o=t(8453);const u={title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b",sidebar_position:3,tags:["\u521d\u7d1a"]},l="\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b",a={},r=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3",id:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u30d0\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5272\u308a\u5f53\u3066",id:"\u30d0\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5272\u308a\u5f53\u3066",level:2},{value:"\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u8a2d\u5b9a",id:"\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u8a2d\u5b9a",level:2},{value:"BusesLayout\u306e\u30c6\u30b9\u30c8",id:"buseslayout\u306e\u30c6\u30b9\u30c8",level:2},{value:"auval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u305f\u30c6\u30b9\u30c8",id:"auval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u305f\u30c6\u30b9\u30c8",level:3},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3067\u306e\u30c6\u30b9\u30c8",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3067\u306e\u30c6\u30b9\u30c8",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u95a2\u9023\u9805\u76ee",id:"\u95a2\u9023\u9805\u76ee",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components},{CaptionImage:t,ClassList:i,SourcePageLink:u}=e;return t||p("CaptionImage",!0),i||p("ClassList",!0),u||p("SourcePageLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,s.jsx)(u,{path:"tutorial_audio_bus_layouts"}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3057\u3001\u5236\u9650\u3059\u308b\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002Apple\u306eLogic Pro\u306b\u642d\u8f09\u3055\u308c\u3066\u3044\u308bauval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u3001AU\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30ec\u30d9\u30eb\uff1a\u521d\u7d1a"}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u5f62\u5f0f\uff1aVST, VST3, AU, Standalone"}),"\n",(0,s.jsx)(i,{refs:["AudioProcessor::BusesLayout","AudioProcessor::BusesProperties","AudioChannelSet","AudioProcessor"]}),"\n",(0,s.jsx)(e.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306b\u5f93\u3046\u306b\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u958b\u3044\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u304b\u3001\u307e\u305f\u306fProjucer\u5185\u3067\u65b0\u3057\u3044\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u52a9\u3051\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\uff1a\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3001\u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"AudioUnit\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3001auval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u30c6\u30b9\u30c8\u3059\u308b\u306b\u306f\u3001macOS\u4e0a\u3067\u30d3\u30eb\u30c9\u3057\u3001Logic Pro X\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.h2,{id:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3",children:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3"}),"\n",(0,s.jsx)(e.p,{children:"JUCE\u306eAudioProcessor\u30af\u30e9\u30b9\u306f\u3001\u4e0b\u56f3\u306e\u3088\u3046\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u5165\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u53d7\u3051\u53d6\u308a\u3001\u5165\u529b\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u51e6\u7406\u3057\u3001\u305d\u306e\u7d50\u679c\u3092\u3044\u304f\u3064\u304b\u306e\u51fa\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u4f9b\u7d66\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(t,{src:"https://docs.juce.com/master/tutorial_audio_bus_layouts_screenshot1.png",caption:"I/O\u30c1\u30e3\u30f3\u30cd\u30eb\u4ed8\u304d\u30d7\u30e9\u30b0\u30a4\u30f3"}),"\n",(0,s.jsx)(e.p,{children:"\u591a\u304f\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ed\u30bb\u30c3\u30b5\u3067\u306f\u3001\u3053\u308c\u3067\u5341\u5206\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u30db\u30b9\u30c8\u3068\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306e\u9593\u306e\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5bb9\u6613\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u308c\u3089\u306e\u500b\u3005\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30b0\u30eb\u30fc\u30d7\u3068\u3057\u3066\u8868\u73fe\u3057\u305f\u3044\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4e0b\u56f3\u306e\u3088\u3046\u306b\u3001\u6700\u521d\u306e4\u3064\u306e\u5165\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30e1\u30a4\u30f3\u30c1\u30e3\u30f3\u30cd\u30eb\u3068\u3057\u3066\u4f7f\u3044\u3001\u6700\u5f8c\u306e2\u3064\u306e\u5165\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30b5\u30a4\u30c9\u30c1\u30a7\u30a4\u30f3\u3068\u3057\u3066\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(t,{src:"https://docs.juce.com/master/tutorial_audio_bus_layouts_screenshot2.png",caption:"I/O\u30d0\u30b9\u4ed8\u304d\u30d7\u30e9\u30b0\u30a4\u30f3"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u56f3\u306e\u9ec4\u8272\u3044\u77e2\u5370\u306f\u30d0\u30b9\u3068\u547c\u3070\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u30d0\u30b9\u3068\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u5185\u3067\u540c\u3058\u4fe1\u53f7\u7d4c\u8def\u3092\u5171\u6709\u3059\u308b\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30b0\u30eb\u30fc\u30d7\u306e\u3053\u3068\u3067\u3001\u4f8b\u3048\u3070\u30e1\u30a4\u30f3\u30fb\u30aa\u30fc\u30c7\u30a3\u30aa\u4fe1\u53f7\u7d4c\u8def\u3084\u30b5\u30a4\u30c9\u30c1\u30a7\u30a4\u30f3\u4fe1\u53f7\u7d4c\u8def\u3092\u6307\u3057\u307e\u3059\u3002JUCE\u3067\u306f\u5404\u30d0\u30b9\u306b\u540d\u524d\u304c\u3064\u3044\u3066\u304a\u308a\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u5185\u3067\u306e\u7279\u5b9a\u306e\u7528\u9014\u3092\u8b58\u5225\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"\u307b\u3068\u3093\u3069\u306eDAW\u3067\u306f\u3001\u6700\u521d\u306e\u5165\u529b\u30d0\u30b9\u307e\u305f\u306f\u6700\u521d\u306e\u51fa\u529b\u30d0\u30b9\u3092\u30e1\u30a4\u30f3\u30d0\u30b9\u3068\u547c\u3073\u307e\u3059\u3002JUCE\u3067\u306f\u3001\u5358\u306b\u6700\u521d\u306e\u5165\u529b\u30d0\u30b9\u307e\u305f\u306f\u51fa\u529b\u30d0\u30b9\u3067\u3042\u308b\u30e1\u30a4\u30f3\u30d0\u30b9\u3092\u6307\u3059\u30b3\u30e1\u30f3\u30c8\u3084\u30e1\u30bd\u30c3\u30c9\u540d\u3092\u6642\u3005\u898b\u304b\u3051\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u3057\u304b\u3057\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306e\u5165\u51fa\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30b0\u30eb\u30fc\u30d7\u5316\u3057\u3001\u305d\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u540d\u524d\u3092\u4ed8\u3051\u308b\u3060\u3051\u3067\u306f\u5341\u5206\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u5404\u30d0\u30b9\u5185\u306e\u5404\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u7a7a\u9593\u7684\u306a\u4f4d\u7f6e\u3065\u3051\u306b\u95a2\u3059\u308b\u60c5\u5831\u3082\u4f1d\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b9\u30c6\u30ec\u30aa\u30d0\u30b9(Left, Right)\u3001\u30af\u30a2\u30c9\u30e9\u30d5\u30a9\u30cb\u30c3\u30af\u30d0\u30b9(Left, Right, Left Surround, Right Surround)\u3001\u30e2\u30ce\u30e9\u30eb\u30d0\u30b9(Centre)\u306a\u3069\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002JUCE\u3067\u306f\u3001\u5404\u30d0\u30b9\u306bAudioChannelSet\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3001\u3053\u306eAudioChannelSet\u306b\u306f\u3001\u3053\u308c\u3089\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u30fb\u30bb\u30c3\u30c8\u306e\u7a7a\u9593\u7684\u306a\u4f4d\u7f6e\u304c\u8a18\u8ff0\u3055\u308c\u307e\u3059\uff08\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff09\uff1aAudioChannelSet::mono(), AudioChannelSet::stereo(), AudioChannelSet::quadraphonic() \u306a\u3069\uff09\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u30d0\u30b9\u306eAudioChannelSet\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5bff\u547d\u3092\u901a\u3058\u3066\u56fa\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001DAW\u30e6\u30fc\u30b6\u30fc\u304c\u30b5\u30a4\u30c9\u30c1\u30a7\u30a4\u30f3\u30fb\u30bd\u30fc\u30b9\u3092\u30e2\u30ce\u30e9\u30eb\u304b\u3089\u30b9\u30c6\u30ec\u30aa\u306b\u5207\u308a\u66ff\u3048\u305f\u6642\u306a\u3069\u3001DAW\u306f\u3044\u3064\u3067\u3082\u7279\u5b9a\u306e\u30d0\u30b9\u306b\u5bfe\u3057\u3066\u7570\u306a\u308bAudioChannelSet\u3092\u8981\u6c42\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306b\u3001JUCE\u306f\u5404\u30d0\u30b9\u304c\u3069\u306eAudioChannelSet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u304b\u3092\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u554f\u3044\u5408\u308f\u305b\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"AudioChannelSet::disabled()\u3068\u547c\u3070\u308c\u308b\u3001\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u542b\u307e\u306a\u3044\u7279\u5225\u306aAudioChannelSet\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e AudioChannelSet \u306f\u3001\u4f8b\u3048\u3070 DAW \u3067\u30b5\u30a4\u30c9\u30c1\u30a7\u30a4\u30f3\u304c\u63a5\u7d9a\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u304d\u306a\u3069\u3001\u7279\u5b9a\u306e\u30d0\u30b9\u304c\u73fe\u5728\u4f7f\u308f\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u305f\u3081\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u7d04\u3059\u308b\u3068\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5404\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3044\u3064\u3067\u3082\u901a\u4fe1\u3059\u308b\u306b\u306f\u3001DAW\u3068\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30d0\u30b9\u306b\u30b0\u30eb\u30fc\u30d7\u5316\u3059\u308b\u60c5\u5831\u3092\u4ea4\u63db\u3059\u308b\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5404\u30d0\u30b9\u306e\u540d\u524d\u3068\u73fe\u5728\u306eAudioChannelSet\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u4ea4\u63db\u3059\u308b\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u3069\u306eAudioChannelSet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5404\u30d0\u30b9\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u30cd\u30b4\u30b7\u30a8\u30fc\u30c8\u3059\u308b\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u8005\u3068\u3057\u3066\u3001\u3053\u306e\u60c5\u5831\u3092\u30db\u30b9\u30c8\u306b\u4f1d\u3048\u308b\u65b9\u6cd5\u3092\u63a2\u308b\u3053\u3068\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u30d0\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5272\u308a\u5f53\u3066",children:"\u30d0\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5272\u308a\u5f53\u3066"}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u66f8\u304f\u3068\u304d\u3001\u307e\u305a\u6700\u521d\u306e2\u70b9\uff08\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u30d0\u30b9\u306b\u30b0\u30eb\u30fc\u30d7\u5206\u3051\u3057\u3066\u540d\u524d\u3092\u4ed8\u3051\u3001\u5404\u30d0\u30b9\u306eAudioChannelSet\u3092\u9078\u629e\u3059\u308b\uff09\u306b\u6ce8\u76ee\u3057\u307e\u3059\u3002\u3053\u306e\u60c5\u5831\u306f\u3001AudioProcessor\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306bAudioProcessor::BusesProperties\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u6b21\u306e\u3088\u3046\u306b\u6e21\u3059\u3053\u3068\u3067\u3001DAW\u306b\u4f1d\u3048\u3089\u308c\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'ExampleAudioProcessor()\n    : AudioProcessor (BusesProperties().withInput  ("Input",  juce::AudioChannelSet::stereo(), true)\n                                       .withOutput ("Output", juce::AudioChannelSet::stereo(), true))\n{\n//...\n'})}),"\n",(0,s.jsx)(e.p,{children:'\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u306f\u3001\u3053\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u304c2\u3064\u306e\u30d0\u30b9\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092DAW\u306b\u901a\u77e5\u3057\u307e\u3059\uff1a1\u3064\u306f "Input "\u3068\u3044\u3046\u540d\u524d\u306e\u5165\u529b\u30d0\u30b9\u3067\u3001\u3082\u30461\u3064\u306f "Output "\u3068\u3044\u3046\u540d\u524d\u306e\u51fa\u529b\u30d0\u30b9\u3067\u3059\u3002withInput()\u95a2\u6570\u3068withOutput()\u95a2\u6570\u306e2\u756a\u76ee\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u3001\u305d\u308c\u305e\u308c\u306e\u30d0\u30b9\u306e\u521d\u671fAudioChannelSet\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002DAW\u306f\u3044\u3064\u3067\u3082\u3053\u308c\u3092\u5909\u66f4\u3067\u304d\u308b\u3053\u3068\u3092\u899a\u3048\u3066\u304a\u304f\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u30023\u756a\u76ee\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u3001\u30d0\u30b9\u304c\u521d\u671f\u72b6\u614b\u3067\u6709\u52b9\u304b\u7121\u52b9\u304b\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e2\u3064\u306e\u30d0\u30b9\u306f\u30e1\u30a4\u30f3\u30d0\u30b9\u306a\u306e\u3067\u3001\u7121\u52b9\u306b\u3059\u308b\u306e\u306f\u3042\u307e\u308a\u610f\u5473\u304c\u3042\u308a\u307e\u305b\u3093\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u524d\u8ff0\u306e\u4f8b\u306f\u3001\u901a\u5e38\u30a8\u30d5\u30a7\u30af\u30c8\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u30b7\u30f3\u30bb\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u306f\u901a\u5e38\u51fa\u529b\u30d0\u30b9\u3057\u304b\u306a\u3044\u306e\u3067\u3001\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'ExampleAudioProcessor()\n    : AudioProcessor (BusesProperties().withOutput ("Output", juce::AudioChannelSet::stereo(), true))\n{\n//...\n'})}),"\n",(0,s.jsx)(e.p,{children:"JUCE\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3082\u30461\u3064\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30bf\u30a4\u30d7\u306f\u3001MIDI\u30a8\u30d5\u30a7\u30af\u30c8\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3059\u3002\u3053\u308c\u3089\u306fMIDI\u3092\u51e6\u7406\u3059\u308b\u3060\u3051\u306a\u306e\u3067\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d0\u30b9\u306f\u4e00\u5207\u6301\u3063\u3066\u3044\u307e\u305b\u3093\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"ExampleAudioProcessor()\n    : AudioProcessor (BusesProperties())\n{\n//...\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:'\u4e0a\u8a18\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fb\u30b3\u30fc\u30c9\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306eAudioProcessor\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3068\u6df7\u540c\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u5f8c\u65b9\u4e92\u63db\u6027\u306e\u305f\u3081\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306f\u3001"Input "\u3068\u3044\u3046\u540d\u524d\u306e\u521d\u671f\u72b6\u614b\u3067\u7121\u52b9\u306a\u5165\u529b\u30d0\u30b9\u30921\u3064\u3068\u3001"Output "\u3068\u3044\u3046\u540d\u524d\u306e\u521d\u671f\u72b6\u614b\u3067\u7121\u52b9\u306a\u51fa\u529b\u30d0\u30b9\u30921\u3064\u3001\u305d\u308c\u305e\u308cAudioChannelSet::stereo()\u3068\u3057\u3066\u6301\u3064\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002'})}),"\n",(0,s.jsx)(e.h2,{id:"\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u8a2d\u5b9a",children:"\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(e.p,{children:'DAW\u306f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u63d0\u4f9b\u3055\u308c\u305f\u521d\u671fAudioChannelSet\u3092\u3044\u3064\u3067\u3082\u5909\u66f4\u3057\u305f\u3044\u304b\u3082\u3057\u308c\u306a\u3044\u306e\u3067\u3001\u4eca\u5fc5\u8981\u306a\u552f\u4e00\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u7279\u5b9a\u306e\u30d0\u30b9\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bAudioChannelSet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u53d7\u52d5\u7684\u3067\u3001\u5e38\u306b\u30db\u30b9\u30c8\u306e\u300c\u306a\u3059\u304c\u307e\u307e\u300d\u306b\u306a\u308a\u307e\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u53d7\u52d5\u7684\u3067\u3001\u5e38\u306b\u30db\u30b9\u30c8\u306e "\u306a\u3059\u304c\u307e\u307e "\u3067\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u3067\u304d\u308b\u306e\u306f\u3001\u8981\u6c42\u3055\u308c\u305fAudioChannelSet\u306e\u8a2d\u5b9a\u3092\u62d2\u5426\u3059\u308b\u304b\u53d7\u3051\u5165\u308c\u308b\u304b\u3060\u3051\u3067\u3059\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306fAudioProcessor::isBusesLayoutSupported()\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5404\u30d0\u30b9\u306eAudioChannelSet\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u5217\u3067\u3042\u308b1\u3064\u306eBusesLayout\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u5165\u51fa\u529b\u30d0\u30b9\u306e\u914d\u5217\u306e\u8981\u7d20\u6570\u306f\u3001AudioProcessor\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u6307\u5b9a\u3057\u305f\u30d0\u30b9\u306e\u6570\u3068\u5e38\u306b\u4e00\u81f4\u3057\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"AudioProcessor::isBusesLayoutSupported()\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u306f\u3001\u4e0e\u3048\u3089\u308c\u305fBusesLayout\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u8fd4\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u3001\u3053\u3053\u306b\u793a\u3059\u3088\u3046\u306b\u3001DAW\u304c\u8981\u6c42\u3059\u308b\u4efb\u610f\u306eBusesLayout\u3092\u53d7\u3051\u5165\u308c\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"bool isBusesLayoutSupported (const BusesLayout& layouts) const\n{\n    return true;\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u307b\u3068\u3093\u3069\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u3001\u30e1\u30a4\u30f3\u306e\u5165\u51fa\u529b\u30d0\u30b9\u30921\u3064\u3057\u304b\u6301\u3063\u3066\u3044\u307e\u305b\u3093\u3002\u4e00\u822c\u7684\u306b\u306f\u3001AudioChannelSet\u3092\u5165\u529b\u5074\u3068\u51fa\u529b\u5074\u3067\u540c\u3058\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"bool isBusesLayoutSupported (const BusesLayout& layouts) const\n{\n    return layouts.getMainInputChannelSet() == layouts.getMainOutputChannelSet();\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"AudioChannelSet::disabled()\u3068\u3044\u3046\u7279\u5225\u306aAudioChannelSet\u304c\u3042\u308a\u3001\u7279\u5b9a\u306e\u30d0\u30b9\u304c\u30c7\u30a3\u30b9\u30a8\u30fc\u30d6\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3059\u3053\u3068\u3092\u899a\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002\u307b\u3068\u3093\u3069\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30e1\u30a4\u30f3\u30fb\u30d0\u30b9\u304c\u30c7\u30a3\u30b9\u30a8\u30fc\u30d6\u30eb\u306b\u306a\u308b\u3053\u3068\u3092\u671b\u307e\u306a\u3044\u306e\u3067\u3001\u6b21\u306e\u3088\u3046\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306b\u305d\u306e\u30c1\u30a7\u30c3\u30af\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"bool isBusesLayoutSupported (const BusesLayout& layouts) const\n{\n    if (layouts.getMainInputChannelSet()  == juce::AudioChannelSet::disabled()\n     || layouts.getMainOutputChannelSet() == juce::AudioChannelSet::disabled())\n        return false;\n \n    return layouts.getMainInputChannelSet() == layouts.getMainOutputChannelSet();\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u30e2\u30ce\u304b\u3089\u30e2\u30ce\u3001\u307e\u305f\u306f\u30b9\u30c6\u30ec\u30aa\u304b\u3089\u30b9\u30c6\u30ec\u30aa\u306e\u30b3\u30f3\u30d5\u30a3\u30ae\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3057\u304b\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u3068\u3057\u307e\u3057\u3087\u3046\u3002\u4e0a\u306e\u30b3\u30fc\u30c9\u306e\u6700\u5f8c\u306e\u884c\u306f\u3001\u5165\u529b\u3068\u51fa\u529b\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u304c\u540c\u3058\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u3059\u3067\u306b\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u5165\u529b\u30d0\u30b9\u304b\u51fa\u529b\u30d0\u30b9\u306e\u3069\u3061\u3089\u304b\u4e00\u65b9\u306b\u5bfe\u3057\u3066\u3001\u6b21\u306e\u3088\u3046\u306a\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3046\u3060\u3051\u3067\u3088\u3044\u306e\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"bool isBusesLayoutSupported (const BusesLayout& layouts) const\n{\n    if (layouts.getMainInputChannelSet()  == juce::AudioChannelSet::disabled()\n     || layouts.getMainOutputChannelSet() == juce::AudioChannelSet::disabled())\n        return false;\n \n    if (layouts.getMainOutputChannelSet() != juce::AudioChannelSet::mono()\n     && layouts.getMainOutputChannelSet() != juce::AudioChannelSet::stereo())\n        return false;\n \n    return layouts.getMainInputChannelSet() == layouts.getMainOutputChannelSet();\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"buseslayout\u306e\u30c6\u30b9\u30c8",children:"BusesLayout\u306e\u30c6\u30b9\u30c8"}),"\n",(0,s.jsx)(e.p,{children:"isBusesLayoutSupported()\u95a2\u6570\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u30a8\u30c3\u30b8\u30b1\u30fc\u30b9\u3092\u898b\u843d\u3068\u3059\u3053\u3068\u306f\u975e\u5e38\u306b\u7c21\u5358\u3067\u3042\u308b\u305f\u3081\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u69cb\u6210\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001AudioUnits\u306e\u30c6\u30b9\u30c8\u3068\u691c\u8a3c\u3092\u884c\u3046Apple\u306eLogic Pro\u306b\u542b\u307e\u308c\u308bauval\u30c4\u30fc\u30eb\u3068\u3001VST\u3068AU\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308bJUCE\u306b\u542b\u307e\u308c\u308bAudio Plugin Host\u306e2\u3064\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"auval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u305f\u30c6\u30b9\u30c8",children:"auval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u305f\u30c6\u30b9\u30c8"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001AudioUnits\u306emacOS\u3067\u306e\u307f\u4f7f\u7528\u53ef\u80fd\u306a\u30c4\u30fc\u30eb\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"auval\u30c4\u30fc\u30eb\u306f\u3001AudioUnits\u3092Logic Pro X\u3084Final Cut Pro X\u306a\u3069\u306eApple\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3067\u30ed\u30fc\u30c9\u3059\u308b\u524d\u306b\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"auval\u30c4\u30fc\u30eb\u306f\u3001Logic Pro X\u3067Logic Pro X > Preferences > Plug-in Manager...\u3068\u9032\u307f\u3001\u3053\u3053\u306b\u793a\u3059\u3088\u3046\u306bReset & Rescan Selection\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u691c\u8a3c\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(t,{src:"https://docs.juce.com/master/tutorial_audio_bus_layouts_screenshot3.png",caption:"Logic Pro X\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"}),"\n",(0,s.jsx)(e.p,{children:"\u3057\u304b\u3057\u3001\u6b21\u306e\u3088\u3046\u306b\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089\u547c\u3073\u51fa\u3059\u3053\u3068\u3082\u3067\u304d\u308b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"auval -v aufx Test Manu\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7b2c1\u5f15\u6570\u306fAU\u30e1\u30a4\u30f3\u30bf\u30a4\u30d7\u3092\u8868\u3057\u3001\u30a8\u30d5\u30a7\u30af\u30c8\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5b9f\u88c5\u3059\u308b\u5834\u5408\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f'aufx'\u3067\u3059\u3002\u7b2c2\u5f15\u6570\u3068\u7b2c3\u5f15\u6570\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306eProjucer\u8a2d\u5b9a\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d7\u30e9\u30b0\u30a4\u30f3\u30b3\u30fc\u30c9\u3068\u30e1\u30fc\u30ab\u30fc\u30b3\u30fc\u30c9\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(t,{src:"https://docs.juce.com/master/tutorial_audio_bus_layouts_screenshot4.png",caption:"The Projucer plugin settings"}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u3068\u3057\u3066\u3001AU\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u51fa\u529b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"    AU Validation Tool\n    Version: 1.6.1a1\n    Copyright 2003-2013, Apple Inc. All Rights Reserved.\n    Specify -h (-help) for command options\n \n--------------------------------------------------\nVALIDATING AUDIO UNIT: 'aufx' - 'Test' - 'Manu'\n--------------------------------------------------\nManufacturer String: Manu\nAudioUnit Name: TestPlugin\nComponent Version: 1.0.0 (0x10000)\n \n  * PASS\n--------------------------------------------------\nFORMAT TESTS:\n \nReported Channel Capabilities (explicit):\n      [1, 1]  [2, 2]\n \nInput/Output Channel Handling:\n1-1   1-2   1-4   1-5   1-6   1-7   1-8   2-2   2-4   2-5   2-6   2-7   2-8   4-4   4-5   5-5   6-6   7-7   8-8\nX                                         X\n \n# # AudioChannelLayouts (5), Input Scope:\n//...\n \nIs Audio Channel Layout Available:\nMono    Stereo  Binau.  AU_4    Ambi.   AU_5    AU_5_0  AU_6    AU_6_0  AU_7_0  AU_7_0F AU_8    AU_5_1  AU_6_1  AU_7_1  AU_7_1F\nX       X       X\n \n//...\n \n# # AudioChannelLayouts (5), Output Scope:\n//...\n \nIs Audio Channel Layout Available:\nMono    Stereo  Binau.  AU_4    Ambi.   AU_5    AU_5_0  AU_6    AU_6_0  AU_7_0  AU_7_0F AU_8    AU_5_1  AU_6_1  AU_7_1  AU_7_1F\nX       X       X\n \n//...\n \n  * PASS\n--------------------------------------------------\nAU VALIDATION SUCCEEDED.\n--------------------------------------------------\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u306e\u51fa\u529b\u3067\u308f\u304b\u308b\u3088\u3046\u306b\u3001\u3053\u306e\u30c6\u30b9\u30c8\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30e2\u30ce\u304b\u3089\u30e2\u30ce\u3001\u30b9\u30c6\u30ec\u30aa\u304b\u3089\u30b9\u30c6\u30ec\u30aa\u306e\u30b3\u30f3\u30d5\u30a3\u30ae\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u304b\u53d7\u3051\u4ed8\u3051\u306a\u3044\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u308b\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"10.12.0\u304b\u308910.13.1\u307e\u3067\u306emacOS\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001auval\u306b\u30d0\u30b0\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u304c\u6b63\u3057\u304f\u5831\u544a\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3067\u306e\u30c6\u30b9\u30c8",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8\u3067\u306e\u30c6\u30b9\u30c8"}),"\n",(0,s.jsx)(e.p,{children:"\u3082\u3046\u4e00\u3064\u306e\u4fbf\u5229\u306a\u30c4\u30fc\u30eb\u306f\u3001JUCE \u306b\u542b\u307e\u308c\u308b Audio Plugin Host \u3067\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u306e JUCE/examples \u30d5\u30a9\u30eb\u30c0\u306b\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30c4\u30fc\u30eb\u306f\u3001\u5b9f\u884c\u6642\u306b\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u3001VST\u3084AU\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"Audio Plugin Host\u306e\u69cb\u7bc9\u3068\u4f7f\u7528\u306b\u3064\u3044\u3066\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\uff1a\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210\u3001\u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"Audio Plugin Host\u3092\u958b\u304d\u3001\u30c6\u30b9\u30c8\u3057\u305f\u3044\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001Configure Audio I/O\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(t,{src:"https://docs.juce.com/master/tutorial_audio_bus_layouts_screenshot5.png",caption:"Audio I/O settings of a plugin"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u3053\u3067\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u8a31\u53ef\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30a4\u30f3\u30d7\u30c3\u30c8\u307e\u305f\u306f\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u306e\u30d0\u30b9\u3092\u8ffd\u52a0\u307e\u305f\u306f\u524a\u9664\u3057\u3001\u9078\u629e\u3057\u305f\u30d0\u30b9\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u30bb\u30c3\u30c8\u3092\u5909\u66f4\u3057\u3001\u30d0\u30b9\u3092\u81ea\u7531\u306b\u6709\u52b9/\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u521d\u3081\u3066\u30ea\u30fc\u30c9\u3057\u305f\u6642\u3001AudioProcessor\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u306eBusesLayout\u30b3\u30f3\u30d5\u30a3\u30ae\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u5165\u529b\u3068\u51fa\u529b\u306e\u30d4\u30f3\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u30a8\u30af\u30b5\u30b5\u30a4\u30ba",type:"danger",children:(0,s.jsx)(e.p,{children:"\u3055\u307e\u3056\u307e\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a66\u3057\u3001auval\u30c4\u30fc\u30eb\u3068Audio Plugin Host\u3067\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u52d5\u4f5c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7570\u306a\u308b\u30c1\u30e3\u30f3\u30cd\u30eb\u30bb\u30c3\u30c8\u3067\u5165\u529b\u3001\u51fa\u529b\u3001\u30b5\u30a4\u30c9\u30c1\u30a7\u30fc\u30f3\u30d0\u30b9\u3092\u5b9a\u7fa9\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30bf\u30a4\u30d7\u306b\u9069\u3057\u305f\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"auval\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066AudioUnits\u306e\u30d0\u30b9\u914d\u7f6e\u69cb\u6210\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"JUCE\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30db\u30b9\u30c8\u3067\u3001\u7570\u306a\u308b\u30d0\u30b9\u30fb\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../../getting-started/tutorial_create_projucer_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../../getting-started/tutorial_code_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c82\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../tutorial_plugin_examples/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f8b"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"../tutorial_audio_processor_graph/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30ab\u30b9\u30b1\u30fc\u30c9\u30d7\u30e9\u30b0\u30a4\u30f3\u30a8\u30d5\u30a7\u30af\u30c8"})}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(n,e,t)=>{t.d(e,{R:()=>u,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function u(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:u(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);