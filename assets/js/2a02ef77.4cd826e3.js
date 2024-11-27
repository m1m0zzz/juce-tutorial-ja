"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[7781],{2878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=n(4848),i=n(8453);const a={title:"SIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u305f\u6700\u9069\u5316",sidebar_position:4,tags:["\u4e0a\u7d1a"]},r="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebSIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u305f\u6700\u9069\u5316",c={id:"dsp/tutorial_simd_register_optimisation",title:"SIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u305f\u6700\u9069\u5316",description:"\u30d7\u30ed\u30bb\u30c3\u30b5\u306e\u4e26\u5217\u6027\u3092\u5229\u7528\u3057\u3066\u3001\u5358\u4e00\u547d\u4ee4\u8907\u6570\u30c7\u30fc\u30bf\u8a08\u7b97\u3092\u5b9f\u884c\u3002\u4e26\u884c\u51e6\u7406\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u9069\u5316\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/dsp/tutorial_simd_register_optimisation.mdx",sourceDirName:"dsp",slug:"/dsp/tutorial_simd_register_optimisation",permalink:"/juce-tutorial-ja/dsp/tutorial_simd_register_optimisation",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/dsp/tutorial_simd_register_optimisation.mdx",tags:[{inline:!0,label:"\u4e0a\u7d1a",permalink:"/juce-tutorial-ja/tags/\u4e0a\u7d1a"}],version:"current",sidebarPosition:4,frontMatter:{title:"SIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u305f\u6700\u9069\u5316",sidebar_position:4,tags:["\u4e0a\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"\u30c7\u30a3\u30ec\u30a4\u30e9\u30a4\u30f3\u3067\u30b9\u30c8\u30ea\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u3092\u4f5c\u6210",permalink:"/juce-tutorial-ja/dsp/tutorial_dsp_delay_line"},next:{title:"\u9ad8\u901f\u30d5\u30fc\u30ea\u30a8\u5909\u63db",permalink:"/juce-tutorial-ja/dsp/tutorial_simple_fft"}},l={},o=[{value:"\u30b9\u30bf\u30fc\u30c8",id:"\u30b9\u30bf\u30fc\u30c8",level:2},{value:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"SIMD\u547d\u4ee4",id:"simd\u547d\u4ee4",level:2},{value:"IIR\u30d5\u30a3\u30eb\u30bf\u30fc",id:"iir\u30d5\u30a3\u30eb\u30bf\u30fc",level:2},{value:"SIMD\u6700\u9069\u5316IIR\u30d5\u30a3\u30eb\u30bf\u30fc",id:"simd\u6700\u9069\u5316iir\u30d5\u30a3\u30eb\u30bf\u30fc",level:2},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{CaptionImage:n,SourcePageLink:a}=t;return n||u("CaptionImage",!0),a||u("SourcePageLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebsimdregister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u305f\u6700\u9069\u5316",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebSIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u305f\u6700\u9069\u5316"})}),"\n",(0,s.jsx)(a,{path:"tutorial_simd_register_optimisation"}),"\n",(0,s.jsx)(t.p,{children:"\u30d7\u30ed\u30bb\u30c3\u30b5\u306e\u4e26\u5217\u6027\u3092\u5229\u7528\u3057\u3066\u3001\u5358\u4e00\u547d\u4ee4\u8907\u6570\u30c7\u30fc\u30bf\u8a08\u7b97\u3092\u5b9f\u884c\u3002\u4e26\u884c\u51e6\u7406\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u9069\u5316\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u30ec\u30d9\u30eb\uff1a\u4e0a\u7d1a"}),"\n",(0,s.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,s.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/structdsp_1_1SIMDRegister.html",title:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6SIMD\u30ec\u30b8\u30b9\u30bf\u30fb\u30bf\u30a4\u30d7\u306e\u30e9\u30c3\u30d1\u30fc\u3002",children:"dsp::SIMDRegister"}),",",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/namespacedsp_1_1IIR.html",title:"IIR\u30d5\u30a3\u30eb\u30bf\u51e6\u7406\u306e\u305f\u3081\u306e\u30af\u30e9\u30b9\u3002",children:"dsp::IIR"}),",",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/structdsp_1_1ProcessorDuplicator.html",title:"\u30e2\u30ce\u30e9\u30eb\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30af\u30e9\u30b9\u3092\u8907\u88fd\u3057\u3001\u30de\u30eb\u30c1\u30c1\u30e3\u30f3\u30cd\u30eb\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30af\u30e9\u30b9\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30de\u30eb\u30c1\u30c1\u30e3\u30f3\u30cd\u30eb\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30af\u30e9\u30b9\u306b\u5909\u63db\u3057\u307e\u3059\u3002",children:"dsp::ProcessorDuplicator"}),"AudioDataConverters\u3001",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classdsp_1_1AudioBlock.html",title:"\u6700\u5c0f\u304b\u3064\u8efd\u91cf\u306e\u30c7\u30fc\u30bf\u69cb\u9020\u3067\u3001\u3044\u304f\u3064\u304b\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u306e\u30ea\u30b9\u30c8\u3092\u542b\u3080\u3002",children:"dsp::AudioBlock"}),",",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"})]}),"\n",(0,s.jsx)(t.h2,{id:"\u30b9\u30bf\u30fc\u30c8",children:"\u30b9\u30bf\u30fc\u30c8"}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u3053\u3061\u3089\u304b\u3089\uff1a",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/tutorials/PIPs/SIMDRegisterTutorial.zip",children:"PIP"}),"|",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/tutorials/ZIPs/SIMDRegisterTutorial.zip",children:"ZIP"}),".\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u89e3\u51cd\u3057\u3001\u6700\u521d\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304f\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,s.jsx)(t.a,{href:"../../getting-started/tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u8aad\u307f\u8fbc\u3093\u3060\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d5\u30a1\u30a4\u30eb\u3092IIR\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u901a\u3057\u3066\u518d\u751f\u3057\u3001\u8a66\u8074\u6642\u306b\u51e6\u7406\u30fb\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6700\u9069\u5316\u306e\u76ee\u7684\u306f\u3001\u540c\u3058IIR\u30d5\u30a3\u30eb\u30bf\u30fc\u306bSIMD\u547d\u4ee4\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001CPU\u30d1\u30ef\u30fc\u3092\u3069\u308c\u3060\u3051\u8efd\u6e1b\u3067\u304d\u308b\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n,{src:"https://docs.juce.com/master/tutorial_simd_register_optimisation_screenshot1.png",caption:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a6\u30a3\u30f3\u30c9\u30a6"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["\u3053\u3053\u3067\u7d39\u4ecb\u3059\u308b\u30b3\u30fc\u30c9\u306f\u3001\u5927\u307e\u304b\u306b\u4ee5\u4e0b\u306e\u3082\u306e\u3068\u4f3c\u3066\u3044\u308b\u3002",(0,s.jsx)(t.strong,{children:"SIMDRegisterDemo"}),"DSP\u30c7\u30e2\u3088\u308a"]})}),"\n",(0,s.jsx)(t.h2,{id:"simd\u547d\u4ee4",children:"SIMD\u547d\u4ee4"}),"\n",(0,s.jsx)(t.p,{children:'SIMD\u3068\u306f "Single Instruction Multiple Data"\uff08\u5358\u4e00\u547d\u4ee4\u8907\u6570\u30c7\u30fc\u30bf\uff09\u306e\u7565\u3067\u3001\u6700\u65b0\u306eCPU\u304c\u8907\u6570\u306e\u30ec\u30b8\u30b9\u30bf\u306b\u6570\u5024\u3092\u30ed\u30fc\u30c9\u3057\u3066\u540c\u3058\u8a08\u7b97\u3092\u4e00\u5ea6\u306b\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30011\u3064\u306e\u547d\u4ee4\u3092\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u9069\u7528\u3067\u304d\u308b\u65b9\u6cd5\u3092\u6307\u3059\u3002\u30c7\u30b8\u30bf\u30eb\u4fe1\u53f7\u51e6\u7406\u306e\u4e16\u754c\u3067\u306f\u3001\u3053\u306e\u30bf\u30a4\u30d7\u306e\u4e26\u5217\u51e6\u7406\u304cMIMD\uff08Multiple Instruction Multiple Data\uff09\u306e\u3088\u3046\u306a\u4ed6\u306e\u30bf\u30a4\u30d7\u3088\u308a\u3082\u597d\u307e\u308c\u307e\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u30b9\u30ec\u30c3\u30c9\u304c\u4ed6\u306e\u30b9\u30ec\u30c3\u30c9\u3068\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u5408\u3044\u306b\u306a\u3089\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u6700\u3082\u91cd\u8981\u3067\u3042\u308a\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u3067\u306f\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u547d\u4ee4\u306e\u9806\u5e8f\u306f\u540c\u3058\u306b\u4fdd\u305f\u308c\u308b\u3079\u304d\u3067\u3042\u308b\u3002'}),"\n",(0,s.jsx)(t.p,{children:"SIMD\u306f\u500b\u3005\u306e\u30c7\u30fc\u30bf\u3067\u306f\u306a\u304f\u3001\u30c7\u30fc\u30bf\u30b9\u30c8\u30ea\u30fc\u30e0\u306e\u30d9\u30af\u30c8\u30eb\u4e0a\u3067\u52d5\u4f5c\u3059\u308b\u305f\u3081\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d0\u30c3\u30d5\u30a1\u304b\u3089\u30c7\u30fc\u30bf\u30d6\u30ed\u30c3\u30af\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u306b\u6163\u308c\u3066\u3044\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u306b\u3055\u3089\u306b\u9069\u3057\u3066\u3044\u308b\u3002SIMD\u306f\u307e\u305f\u3001DSP\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u975e\u5e38\u306b\u4e00\u822c\u7684\u306a\u3001\u8907\u6570\u306e\u30c7\u30fc\u30bf\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u540c\u3058\u30b9\u30ab\u30e9\u30fc\u6f14\u7b97\u3092\u9069\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306b\u3082\u5a01\u529b\u3092\u767a\u63ee\u3059\u308b\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u4e00\u822c\u7684\u306a\u30b3\u30fc\u30c9\u3092\u6700\u9069\u5316\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u73fe\u5728\u3067\u306f\u30b3\u30f3\u30d1\u30a4\u30e9\u304c\u81ea\u52d5\u7684\u306b\u884c\u3046\u306e\u304c\u666e\u901a\u3060\u304c\u3001DSP\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u30d9\u30af\u30c8\u30eb\u5316\u306f\u5fc5\u305a\u3057\u3082\u7c21\u5358\u3067\u306f\u306a\u3044\u3002\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u306f\u3001\u6b63\u3057\u304f\u6700\u9069\u5316\u3059\u308b\u305f\u3081\u306b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u304c\u4f55\u3092\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u306e\u304b\u3001\u5fc5\u305a\u3057\u3082\u4eba\u9593\u7684\u306b\u7406\u89e3\u3067\u304d\u308b\u3068\u306f\u9650\u308a\u307e\u305b\u3093\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u3053\u306e\u4f5c\u696d\u306f\u901a\u5e38\u624b\u52d5\u3067\u884c\u308f\u308c\u3001SIMDRegister\u30af\u30e9\u30b9\u306fJUCE\u3067\u3053\u308c\u3092\u884c\u3046\u305f\u3081\u306e\u4fbf\u5229\u306a\u30c4\u30fc\u30eb\u3067\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"SIMDRegister\u30af\u30e9\u30b9\u304c\u4fbf\u5229\u306a\u306e\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u30d7\u30ed\u30bb\u30c3\u30b5\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u304b\u3089\u3067\u3059\u3002CPU\u306b\u3088\u3063\u3066\u3001\u30ec\u30b8\u30b9\u30bf\u306e\u30b5\u30a4\u30ba\u3084\u6570\u304c\u7570\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u3001\u3059\u3079\u3066\u306eCPU\u30d9\u30f3\u30c0\u30fc\u3092\u8003\u616e\u3059\u308b\u306e\u306f\u3059\u3050\u306b\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3059\u3079\u3066SIMDRegister\u30af\u30e9\u30b9\u304c\u51e6\u7406\u3057\u3066\u304f\u308c\u308b\u306e\u3067\u3001\u3042\u3068\u306f\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u30d9\u30af\u30c8\u30eb\u5316\u3057\u305f\u3044\u547d\u4ee4\u30bb\u30c3\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"SIMDRegister\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9\u306f\u6bd4\u8f03\u7684\u7c21\u5358\u3067\u3001\u57fa\u672c\u7684\u306b\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u306e\u7f6e\u304d\u63db\u3048\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002\u6b21\u306e\u3088\u3046\u306a\u7c21\u5358\u306a\u30b3\u30fc\u30c9\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"float calculateDSPEffect (float x,\n                          float y)\n{\n    auto z = x + (y * 2.0f);\n \n    return z;\n}\nxfloat xDefinition juce_UnityPluginInterface.h:200\nyfloat float yDefinition juce_UnityPluginInterface.h:200\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u3092SIMDRegister\u30af\u30e9\u30b9\u3067\u30e9\u30c3\u30d7\u3059\u308b\u3060\u3051\u3067\u3001\u7c21\u5358\u306b\u30d9\u30af\u30c8\u30eb\u5316\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"SIMDRegister calculateDSPEffect (SIMDRegister x,\n                                        SIMDRegister y)\n{\n    auto z = x + (y * 2.0f);\n \n    return z;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"DSP\u30b3\u30fc\u30c9\u3067\u306f\u3001\u6761\u4ef6\u6587\u306f\u975e\u5e38\u306b\u9045\u304f\u3001\u4e00\u822c\u306b\u5206\u5c90\u306f\u3067\u304d\u308b\u3060\u3051\u907f\u3051\u308b\u3079\u304d\u3067\u3042\u308b\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u6b21\u306e\u4f8b\u306fSIMD\u6700\u9069\u5316\u306e\u826f\u3044\u5019\u88dc\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"float calculateDSPEffect (float x,\n                          float y)\n{\n    auto z = (x > y ? x + (y * 2.0f) : y);\n \n    return z;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5e78\u3044\u306a\u3053\u3068\u306b\u3001SIMDRegister\u30af\u30e9\u30b9\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u6b63\u3057\u3044\u7d50\u679c\u3092\u9078\u629e\u3067\u304d\u308b\u30d3\u30c3\u30c8\u30de\u30b9\u30af\u3092\u63d0\u4f9b\u3057\u3066\u304f\u308c\u308b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"SIMDRegister calculateDSPEffect (SIMDRegister x,\n                                        SIMDRegister y)\n{\n    auto mask = SIMDRegister::greaterThan (x, y);\n    auto z = ((x + (y * 2.0f)) & mask) + (y & (~mask));\n \n    return z;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001SIMD\u3092\u4f7f\u3063\u3066IIR\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6700\u9069\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"iir\u30d5\u30a3\u30eb\u30bf\u30fc",children:"IIR\u30d5\u30a3\u30eb\u30bf\u30fc"}),"\n",(0,s.jsxs)(t.p,{children:["\u306e\u4e2d\u3067",(0,s.jsx)(t.code,{children:"SIMDTutorialFilter"}),"\u30af\u30e9\u30b9\u3067\u306f\u3001\u307e\u305a\u3053\u3053\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u30d5\u30a3\u30eb\u30bf\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306a\u3069\u306e\u30e1\u30f3\u30d0\u5909\u6570\u3092\u5b9a\u7fa9\u3059\u308b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'    dsp::ProcessorDuplicator, dsp::IIR::Coefficients> iir;\n \n    ChoiceParameter typeParam { { "Low-pass", "High-pass", "Band-pass" }, 1, "Type" };\n    SliderParameter cutoffParam { { 20.0, 20000.0 }, 0.5, 440.0f, "Cutoff", "Hz" };\n    SliderParameter qParam { { 0.3, 20.0 }, 0.5, 0.7, "Q" };\n \n    std::vector parameters { &typeParam, &cutoffParam, &qParam };\n    double sampleRate = 0.0;\n};\n'})}),"\n",(0,s.jsx)(t.p,{children:"ProcessorDuplicator\u5185\u306bIIR\u30d5\u30a3\u30eb\u30bf\u30fc\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067\u3001\u5404\u30c1\u30e3\u30f3\u30cd\u30eb\u306eprepare()\u3001process()\u3001reset()\u95a2\u6570\u3092\u500b\u5225\u306b\u547c\u3073\u51fa\u3059\u5fc3\u914d\u304c\u306a\u304f\u306a\u308a\u3001\u30e2\u30ce\u30e9\u30eb\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u3092\u81ea\u52d5\u7684\u306b\u30de\u30eb\u30c1\u30c1\u30e3\u30f3\u30cd\u30eb\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u307e\u305f\u3001\u901a\u904e\u30d5\u30a3\u30eb\u30bf\u306e\u30bf\u30a4\u30d7\u3001\u30ab\u30c3\u30c8\u30aa\u30d5\u5468\u6ce2\u6570\u3001\u30b7\u30e3\u30fc\u30d7\u30cd\u30b9Q\u306a\u3069\u3001\u30d5\u30a3\u30eb\u30bf\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u5b9a\u7fa9\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"updateParameters()\u95a2\u6570\u3067\u306f\u3001\u753b\u9762\u4e0a\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u66f4\u65b0\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void updateParameters()\n    {\n        if (sampleRate != 0.0)\n        {\n            auto cutoff = static_cast (cutoffParam.getCurrentValue());\n            auto qVal   = static_cast (qParam.getCurrentValue());\n \n            switch (typeParam.getCurrentSelectedID())\n            {\n                case 1:     *iir.state = *dsp::IIR::Coefficients::makeLowPass  (sampleRate, cutoff, qVal); break;\n                case 2:     *iir.state = *dsp::IIR::Coefficients::makeHighPass (sampleRate, cutoff, qVal); break;\n                case 3:     *iir.state = *dsp::IIR::Coefficients::makeBandPass (sampleRate, cutoff, qVal); break;\n                default:    break;\n            }\n        }\n    }\n"})}),"\n",(0,s.jsx)(t.p,{children:"DSP\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u3001makeLowPass()\u3001makeHighPass()\u3001makeBandPass()\u95a2\u6570\u3092\u305d\u308c\u305e\u308c\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u30013\u3064\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u30bf\u30a4\u30d7\u306e\u4fbf\u5229\u306a\u4fc2\u6570\u3092\u63d0\u4f9b\u3057\u3066\u304f\u308c\u308b\u3002"}),"\n",(0,s.jsx)(t.p,{children:"prepare()\u95a2\u6570\u3067\u306f\u3001ProcessSpec\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304b\u3089\u30b5\u30f3\u30d7\u30eb\u30fb\u30ec\u30fc\u30c8\u3092\u8a2d\u5b9a\u3057\u3001\u30ed\u30fc\u30d1\u30b9\u30fb\u30d5\u30a3\u30eb\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5834\u5408\u306eIIR\u30d5\u30a3\u30eb\u30bf\u4fc2\u6570\u3092\u8a2d\u5b9a\u3057\u3001\u51e6\u7406\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066prepare()\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u30d5\u30a3\u30eb\u30bf\u3092\u6e96\u5099\u3059\u308b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void prepare (const dsp::ProcessSpec& spec)\n    {\n        sampleRate = spec.sampleRate;\n \n        iir.state = dsp::IIR::Coefficients::makeLowPass (sampleRate, 440.0);\n        iir.prepare (spec);\n    }\n"})}),"\n",(0,s.jsx)(t.p,{children:"process()\u95a2\u6570\u306e\u4e2d\u3067\u30011\u3064\u306e\u30d6\u30ed\u30c3\u30af\u304c\u5165\u529b\u3068\u51fa\u529b\u306e\u4e21\u65b9\u306b\u4f7f\u308f\u308c\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\u4e0a\u306eprocess()\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void process (const dsp::ProcessContextReplacing& context)\n    {\n        iir.process (context);\n    }\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u6700\u5f8c\u306b\u3001reset()\u95a2\u6570\u3067\u30d5\u30a3\u30eb\u30bf\u30fc\u306breset\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void reset()\n    {\n        iir.reset();\n    }\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u3067\u306f\u3001\u3053\u306eIIR\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u6700\u9069\u5316\u3092\u59cb\u3081\u3088\u3046\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"simd\u6700\u9069\u5316iir\u30d5\u30a3\u30eb\u30bf\u30fc",children:"SIMD\u6700\u9069\u5316IIR\u30d5\u30a3\u30eb\u30bf\u30fc"}),"\n",(0,s.jsxs)(t.p,{children:["IIR\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u30b3\u30fc\u30c9\u3092\u6700\u9069\u5316\u3059\u308b\u524d\u306b\u3001SIMD\u304c\u30b7\u30b9\u30c6\u30e0\u3067\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f",(0,s.jsx)(t.code,{children:"JUCE_USE_SIMD"}),"\u30de\u30af\u30ed\u3092\u4f7f\u3063\u3066\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\u5b9f\u88c5\u5168\u4f53\u3092\u3053\u306e\u3088\u3046\u306b\u30e9\u30c3\u30d7\u3059\u308b\u3053\u3068\u3067\u3001SIMD\u30de\u30b7\u30f3\u3067\u958b\u767a\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3067\u304d\u308b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#if JUCE_USE_SIMD\n \n//==============================================================================\ntemplate \nstatic T* toBasePointer (dsp::SIMDRegister* r) noexcept\n{\n    return reinterpret_cast (r);\n}\n \nconstexpr auto registerSize = dsp::SIMDRegister::size();\n \nstruct SIMDTutorialFilter\n{\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"};\n \n#endif\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u307e\u305a\u3001IIR\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u30e1\u30f3\u30d0\u30fc\u5909\u6570\u3068\u3001AudioBlock\u3068",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),"\u306e\u4e0b\u306b\u3042\u308b\u51e6\u7406\u3092\u5bb9\u6613\u306b\u3059\u308b\u305f\u3081\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3002",(0,s.jsx)(t.code,{children:"SIMDTutorialFilter"}),"\u30af\u30e9\u30b9\u3067\u3042\u308b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'    dsp::IIR::Coefficients::Ptr iirCoefficients;                 // [1]\n    std::unique_ptr>> iir;\n \n    dsp::AudioBlock> interleaved;              // [2]\n    dsp::AudioBlock zero;\n \n    juce::HeapBlock interleavedBlockData, zeroData;               // [3]\n \n    ChoiceParameter typeParam { { "Low-pass", "High-pass", "Band-pass" }, 1, "Type" };\n    SliderParameter cutoffParam { { 20.0, 20000.0 }, 0.5, 440.0f, "Cutoff", "Hz" };\n    SliderParameter qParam { { 0.3, 20.0 }, 0.5, 0.7, "Q" };\n \n    std::vector parameters { &typeParam, &cutoffParam, &qParam };\n    double sampleRate = 0.0;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["IIR\u4fc2\u6570\u3092\u30dd\u30a4\u30f3\u30bf\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3001SIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u30d5\u30a3\u30eb\u30bf\u3092\u4e00\u610f\u306a\u30dd\u30a4\u30f3\u30bf\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3001\u30b5\u30f3\u30d7\u30eb\u30fb\u30bf\u30a4\u30d7\u3092\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002[1].\u30b5\u30f3\u30d7\u30eb\u30fb\u30bf\u30a4\u30d7\u3092\u30e9\u30c3\u30d7\u3059\u308b\u305f\u3081\u306bSIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3059\u308bAudioBlock\u3092\u4f5c\u6210\u3057\u3001\u5f8c\u3067\u51fa\u529b\u30d6\u30ed\u30c3\u30af\u3092\u683c\u7d0d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30bc\u30ed\u30fb\u30c7\u30fc\u30bf\u7528\u306b\u5225\u306eAudioBlock\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002[2].\u5272\u308a\u5f53\u3066",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),"\u5bfe\u5fdc\u3059\u308bAudioBlock\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3001SIMDRegister\u30d9\u30af\u30c8\u30eb\u306e\u8981\u7d20\u6570\u3092\u6301\u3064\u30c1\u30e3\u30f3\u30cd\u30eb\u30dd\u30a4\u30f3\u30bf\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8[3]."]}),"\n",(0,s.jsx)(t.p,{children:"prepare()\u95a2\u6570\u3067\u3001\u524d\u3068\u540c\u3058\u3088\u3046\u306b\u30b5\u30f3\u30d7\u30eb\u30fb\u30ec\u30fc\u30c8\u3092\u8a2d\u5b9a\u3057\u3001\u30d5\u30a3\u30eb\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u4fc2\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002[4].\u30b5\u30f3\u30d7\u30eb\u30fb\u30bf\u30a4\u30d7\u3068\u5148\u306b\u5b9a\u7fa9\u3057\u305f\u4fc2\u6570\u3092SIMDRegister\u30e9\u30c3\u30d1\u30fc\u3067\u5305\u3093\u3060\u65b0\u3057\u3044IIR\u30d5\u30a3\u30eb\u30bf\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u3066\u3001\u30d5\u30a3\u30eb\u30bf\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002[5]\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3042\u308b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void prepare (const dsp::ProcessSpec& spec)\n    {\n        sampleRate = spec.sampleRate;   // [4]\n \n        iirCoefficients = dsp::IIR::Coefficients::makeLowPass (sampleRate, 440.0f);\n        iir.reset (new dsp::IIR::Filter> (iirCoefficients)); // [5]\n \n        interleaved = dsp::AudioBlock> (interleavedBlockData, 1, spec.maximumBlockSize);\n        zero        = dsp::AudioBlock (zeroData, dsp::SIMDRegister::size(), spec.maximumBlockSize); // [6]\n \n        zero.clear();\n \n        auto monoSpec = spec;\n        monoSpec.numChannels = 1;\n        iir->prepare (monoSpec);    // [7]\n    }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u30c7\u30fc\u30bf\u3068\u30bc\u30ed\u30c7\u30fc\u30bf\u7528\u306eAudioBlock\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),"\u5148\u306b\u5b9a\u7fa9\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8[6].\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30d6\u30ed\u30c3\u30af\u306f1\u3064\u306e\u30c1\u30e3\u30cd\u30eb\u3057\u304b\u5fc5\u8981\u3068\u305b\u305a\u3001\u6700\u5927\u30d6\u30ed\u30c3\u30af\u30b5\u30a4\u30ba\u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u60c5\u5831\u304b\u3089\u53d6\u5f97\u3055\u308c\u308b\u3002\u30bc\u30ed\u30fb\u30c7\u30fc\u30bf\u30fb\u30d6\u30ed\u30c3\u30af\u306fSIMDRegister\u30d9\u30af\u30c8\u30eb\u306e\u30b5\u30a4\u30ba\u3092\u53d6\u308a\u3001\u51e6\u7406\u524d\u306b\u30af\u30ea\u30a2\u3055\u308c\u308b\u3002\u30d5\u30a3\u30eb\u30bf\u306f\u3001\u73fe\u5728\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u60c5\u5831\u306b\u57fa\u3065\u3044\u3066\u30c1\u30e3\u30cd\u30eb\u6570\u3092\u30e2\u30ce\u30e9\u30eb\u306b\u6e1b\u3089\u3059\u3053\u3068\u3067\u6e96\u5099\u3055\u308c\u308b\u3002[7]\u30de\u30eb\u30c1\u30c1\u30e3\u30f3\u30cd\u30eb\u30b5\u30f3\u30d7\u30eb\u306f\u5f8c\u3067\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3055\u308c\u30011\u3064\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u3068\u3057\u3066\u51e6\u7406\u3055\u308c\u308b\u304b\u3089\u3067\u3042\u308b\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u6700\u5f8c\u306b\u3001process()\u95a2\u6570\u306e\u4e2d\u3067\u3001\u6700\u9069\u5316\u3055\u308c\u305f\u51e6\u7406\u306e\u305f\u3081\u306b\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30b5\u30f3\u30d7\u30eb\u3092\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3059\u308b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void process (const dsp::ProcessContextReplacing& context)\n    {\n        jassert (context.getInputBlock().getNumSamples()  == context.getOutputBlock().getNumSamples());\n        jassert (context.getInputBlock().getNumChannels() == context.getOutputBlock().getNumChannels());\n \n        const auto& input  = context.getInputBlock(); // [9]\n        const auto numSamples = (int) input.getNumSamples();\n \n        auto inChannels = prepareChannelPointers (input); // [10]\n \n        using Format = juce::AudioData::Format;\n \n        juce::AudioData::interleaveSamples (juce::AudioData::NonInterleavedSource { inChannels.data(),                                 registerSize, },\n                                            juce::AudioData::InterleavedDest      { toBasePointer (interleaved.getChannelPointer (0)), registerSize },\n                                            numSamples); // [11]\n \n        iir->process (dsp::ProcessContextReplacing> (interleaved)); // [12]\n \n        auto outChannels = prepareChannelPointers (context.getOutputBlock()); // [13]\n \n        juce::AudioData::deinterleaveSamples (juce::AudioData::InterleavedSource  { toBasePointer (interleaved.getChannelPointer (0)), registerSize },\n                                              juce::AudioData::NonInterleavedDest { outChannels.data(),                                registerSize },\n                                              numSamples); // [14]\n    }\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"[8]\u307e\u305a\u3001\u5165\u529b\u30d6\u30ed\u30c3\u30af\u3068\u51fa\u529b\u30d6\u30ed\u30c3\u30af\u306e\u30b5\u30f3\u30d7\u30eb\u6570\u3068\u30c1\u30e3\u30f3\u30cd\u30eb\u6570\u304c\u540c\u3058\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(t.li,{children:"[9]\u6b21\u306b\u3001\u5165\u529b\u30d6\u30ed\u30c3\u30af\u3068\u51e6\u7406\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u6570\u3092\u53d6\u5f97\u3059\u308b\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["[10]SIMDRegister\u306e\u5404\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u3064\u3044\u3066\u3001\u305d\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u5165\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u30c1\u30e3\u30f3\u30cd\u30eb\u30dd\u30a4\u30f3\u30bf\u3092\u5bfe\u5fdc\u3059\u308b",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),".\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u3001\u51fa\u529b\u30c1\u30e3\u30cd\u30eb\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3001\u30bc\u30ed\u30fb\u30c7\u30fc\u30bf\u30fb\u30c1\u30e3\u30cd\u30eb\u30fb\u30dd\u30a4\u30f3\u30bf\u3092\u30b3\u30d4\u30fc\u3059\u308b\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["[11]\u30c1\u30e3\u30f3\u30cd\u30eb\u30fb\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u30b3\u30d4\u30fc\u3057\u3066\u3001\u7570\u306a\u308b\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u3059\u3079\u3066\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3059\u308b\u3002",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),"\u3092\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3057\u305fAudioBlock\u306b\u633f\u5165\u3057\u3001\u30b5\u30f3\u30d7\u30eb\u6570\u3068\u30c1\u30e3\u30f3\u30cd\u30eb\u6570\u3092SIMDRegister\u306e\u30b5\u30a4\u30ba\u3068\u3057\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.li,{children:"[12]\u30b5\u30f3\u30d7\u30eb\u30fb\u30bf\u30a4\u30d7\u306eSIMDRegister\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30fb\u30d6\u30ed\u30c3\u30af\u30fb\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u3001\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u51e6\u7406\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["[13]\u6b21\u306b\u3001\u3059\u3079\u3066\u306e\u5165\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u3064\u3044\u3066\u3001\u51fa\u529b\u30d6\u30ed\u30c3\u30af\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u30dd\u30a4\u30f3\u30bf\u3092\u3001\u5bfe\u5fdc\u3059\u308b",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["[14]\u6700\u5f8c\u306b\u3001\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3055\u308c\u305fAudioBlock\u304b\u3089\u30c1\u30e3\u30f3\u30cd\u30eb\u30dd\u30a4\u30f3\u30bf\u306b\u30b3\u30d4\u30fc\u3059\u308b\u3053\u3068\u3067\u3001\u7570\u306a\u308b\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u3059\u3079\u3066\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u30c7\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3057\u307e\u3059\u3002",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classHeapBlock.html",title:"\u30d2\u30fc\u30d7\u4e0a\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30c6\u30ca\u30fb\u30af\u30e9\u30b9\u3002",children:"HeapBlock"}),"\u3067\u3001\u30b5\u30f3\u30d7\u30eb\u6570\u3068\u30c1\u30e3\u30f3\u30cd\u30eb\u6570\u3092 SIMDRegister \u306e\u30b5\u30a4\u30ba\u3068\u3057\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u30d5\u30a3\u30eb\u30bf\u306ereset()\u95a2\u6570\u306f\u3069\u3061\u3089\u306e\u5834\u5408\u3082\u540c\u3058\u307e\u307e\u3067\u3042\u308a\u3001\u6700\u9069\u5316\u306f\u5b8c\u4e86\u3057\u305f\u3002"}),"\n",(0,s.jsx)(t.p,{children:"updateParameters()\u95a2\u6570\u3092\u6b21\u306e\u3088\u3046\u306b\u66f4\u65b0\u3057\u3066\u3001\u65b0\u3057\u3044\u4fc2\u6570\u30dd\u30a4\u30f3\u30bf\u3092\u8003\u616e\u3059\u308c\u3070\u3088\u3044\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"    void updateParameters()\n    {\n        if (sampleRate != 0.0)\n        {\n            auto cutoff = static_cast (cutoffParam.getCurrentValue());\n            auto qVal   = static_cast (qParam.getCurrentValue());\n \n            switch (typeParam.getCurrentSelectedID())\n            {\n                case 1:   *iirCoefficients = *dsp::IIR::Coefficients::makeLowPass  (sampleRate, cutoff, qVal); break;\n                case 2:   *iirCoefficients = *dsp::IIR::Coefficients::makeHighPass (sampleRate, cutoff, qVal); break;\n                case 3:   *iirCoefficients = *dsp::IIR::Coefficients::makeBandPass (sampleRate, cutoff, qVal); break;\n                default:  break;\n            }\n        }\n    }\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["\u3053\u306e\u4fee\u6b63\u7248\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f",(0,s.jsx)(t.code,{children:"SIMDRegisterTutorial_02.h"}),"\u30d5\u30a1\u30a4\u30eb\u306b\u3042\u308b\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001SIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066DSP\u30b3\u30fc\u30c9\u3092\u6700\u9069\u5316\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002\u7279\u306b"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"SIMD\u547d\u4ee4\u306e\u5229\u70b9\u3092\u5b66\u3076"}),"\n",(0,s.jsx)(t.li,{children:"\u30b5\u30a6\u30f3\u30c9\u30d5\u30a1\u30a4\u30eb\u3092IIR\u30d5\u30a3\u30eb\u30bf\u30fc\u3067\u51e6\u7406"}),"\n",(0,s.jsx)(t.li,{children:"SIMDRegister\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066IIR\u30d5\u30a3\u30eb\u30bf\u3092\u6700\u9069\u5316"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../../audio/tutorial_audio_thumbnail/",children:"Tutorial: Draw audio waveforms"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../../audio/tutorial_playing_sound_files/",children:"Tutorial: Build an audio player"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_dsp_introduction/",children:"Tutorial: Introduction to DSP"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../../audio/tutorial_looping_audio_sample_buffer/",children:"Tutorial: Looping audio using the AudioSampleBuffer class"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../../audio/tutorial_looping_audio_sample_buffer_advanced/",children:"Tutorial: Looping audio using the AudioSampleBuffer class (advanced)"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);