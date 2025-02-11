"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[6284],{9857:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=l(4848),t=l(8453);const i={title:"\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",sidebar_position:4,tags:["\u4e2d\u7d1a"]},s="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",a={id:"synth/tutorial_sine_synth",title:"\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u7c21\u5358\u306a\u30b5\u30a4\u30f3\u6ce2\u5408\u6210\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u6b63\u5f26\u6ce2\u767a\u632f\u5668\u306e\u72b6\u614b\u3092\u7ba1\u7406\u3057\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u306b\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/synth/tutorial_sine_synth.mdx",sourceDirName:"synth",slug:"/synth/tutorial_sine_synth",permalink:"/juce-tutorial-ja/synth/tutorial_sine_synth",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/synth/tutorial_sine_synth.mdx",tags:[{inline:!0,label:"\u4e2d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u4e2d\u7d1a"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",sidebar_position:4,tags:["\u4e2d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"\u30c7\u30b7\u30d9\u30eb\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",permalink:"/juce-tutorial-ja/synth/tutorial_synth_db_level_control"},next:{title:"MIDI\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",permalink:"/juce-tutorial-ja/synth/tutorial_synth_using_midi_input"}},c={},d=[{value:"\u30b9\u30bf\u30fc\u30c8",id:"\u30b9\u30bf\u30fc\u30c8",level:2},{value:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u6b63\u5f26\u6ce2\u306e\u751f\u6210",id:"\u6b63\u5f26\u6ce2\u306e\u751f\u6210",level:2},{value:"\u56fd\u5bb6\u306e\u7dad\u6301",id:"\u56fd\u5bb6\u306e\u7dad\u6301",level:3},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u3092\u4f7f\u3046",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u3092\u4f7f\u3046",level:3},{value:"\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u51fa\u529b",id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u51fa\u529b",level:3},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u69cb\u6210",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u69cb\u6210",level:3},{value:"\u5468\u6ce2\u6570\u306e\u5909\u5316\u3092\u6ed1\u3089\u304b\u306b\u3059\u308b",id:"\u5468\u6ce2\u6570\u306e\u5909\u5316\u3092\u6ed1\u3089\u304b\u306b\u3059\u308b",level:2},{value:"\u30b9\u30e0\u30fc\u30b8\u30f3\u30b0\u7528\u30b9\u30c6\u30fc\u30c8\u30fb\u30e1\u30f3\u30d0\u30fc",id:"\u30b9\u30e0\u30fc\u30b8\u30f3\u30b0\u7528\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30d0\u30fc",level:3},{value:"\u5408\u6210\u30b3\u30fc\u30c9\u306e\u66f4\u65b0",id:"\u5408\u6210\u30b3\u30fc\u30c9\u306e\u66f4\u65b0",level:3},{value:"\u5099\u8003",id:"\u5099\u8003",level:2},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{CaptionImage:l,SourcePageLink:i}=n;return l||h("CaptionImage",!0),i||h("SourcePageLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,r.jsx)(i,{path:"tutorial_sine_synth"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u7c21\u5358\u306a\u30b5\u30a4\u30f3\u6ce2\u5408\u6210\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u6b63\u5f26\u6ce2\u767a\u632f\u5668\u306e\u72b6\u614b\u3092\u7ba1\u7406\u3057\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u306b\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1a\u4e2d\u7d1a"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,r.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioAppComponent.html",title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u51fa\u529b\u30c7\u30d0\u30a4\u30b9\u304b\u3089\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3059\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u66f8\u304f\u305f\u3081\u306e\u57fa\u672c\u30af\u30e9\u30b9\u3002",children:"AudioAppComponent"}),",",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),",",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/structMathConstants.html",title:"\u3088\u304f\u4f7f\u308f\u308c\u308b\u6570\u5b66\u5b9a\u6570\u3002",children:"MathConstants"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30b9\u30bf\u30fc\u30c8",children:"\u30b9\u30bf\u30fc\u30c8"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f",(0,r.jsx)(n.a,{href:"../tutorial_synth_level_control/",children:"Tutorial: Control audio levels"}),"\u305d\u308c\u306f\u6700\u521d\u306b\u8aad\u3093\u3067\u7406\u89e3\u3059\u3079\u304d\u3060\u3063\u305f\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u3053\u3061\u3089\u304b\u3089\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/tutorials/PIPs/SineSynthTutorial.zip",children:"PIP"}),"|",(0,r.jsx)(n.a,{href:"https://docs.juce.com/tutorials/ZIPs/SineSynthTutorial.zip",children:"ZIP"}),".\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u89e3\u51cd\u3057\u3001\u6700\u521d\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(n.a,{href:"../../getting-started/tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001Projucer\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002\u6b63\u5f26\u6ce2\u306e\u5468\u6ce2\u6570\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u304c1\u3064\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6b63\u5f26\u6ce2\u306e\u751f\u6210",children:"\u6b63\u5f26\u6ce2\u306e\u751f\u6210"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\u95a2\u6570",(0,r.jsx)(n.code,{children:"std::sin()"}),".\u3053\u308c\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u96fb\u6d41\u3092\u4fdd\u5b58\u3057\u3066\u6b63\u5f26\u6ce2\u751f\u6210\u306e\u72b6\u614b\u3092\u7dad\u6301\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.jsx)(n.em,{children:"\u4f4d\u76f8\u89d2"}),"\u3068\u3001\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u3054\u3068\u306b\u4f4d\u76f8\u89d2\u304c\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u91cf\u3067\u3059\u3002\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u3054\u3068\u306e\u5909\u5316\u306e\u5927\u304d\u3055\uff08\u300c\u30c7\u30eb\u30bf\u300d\uff09\u306f\u3001\u51fa\u529b\u306e\u30b5\u30f3\u30d7\u30eb\u30fb\u30ec\u30fc\u30c8\u3068\u3001\u751f\u6210\u3057\u305f\u3044\u6b63\u5f26\u6ce2\u306e\u5468\u6ce2\u6570\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u307b\u3068\u3093\u3069\u306e\u5408\u6210\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u306f",(0,r.jsx)(n.code,{children:"std::sin()"}),"\u6700\u3082\u52b9\u7387\u7684\u306a\u624b\u6cd5\u3067\u306f\u306a\u3044\u3060\u308d\u3046\u3002\u4e00\u822c\u7684\u306b",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Table-lookup_synthesis",children:"wavetable"}),"\u3092\u53c2\u7167\u3055\u308c\u305f\u3044\u3002",(0,r.jsx)(n.a,{href:"../tutorial_wavetable_synth/",children:"Tutorial: Wavetable synthesis"}),".\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u306f\u6b63\u5f26\u6ce2\u4ee5\u5916\u306e\u6ce2\u5f62\u3082\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u56fd\u5bb6\u306e\u7dad\u6301",children:"\u56fd\u5bb6\u306e\u7dad\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u3005\u306e",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u30af\u30e9\u30b9\u306b\u306f3\u3064\u306e",(0,r.jsx)(n.code,{children:"double"}),"\u30e1\u30f3\u30d0\u30fc[1]:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    double currentSampleRate = 0.0, currentAngle = 0.0, angleDelta = 0.0; // [1]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3092\u66f4\u65b0\u3059\u308b\u5358\u7d14\u306a\u95a2\u6570\u304c\u3042\u308b\u3002",(0,r.jsx)(n.code,{children:"angleDelta"}),"\u30e1\u30f3\u30d0\u30fc\u3060\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void updateAngleDelta()\n    {\n        auto cyclesPerSample = frequencySlider.getValue() / currentSampleRate;         // [2]\n        angleDelta = cyclesPerSample * 2.0 * juce::MathConstants::pi;          // [3]\n    }\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[2]\u307e\u305a\u3001\u5404\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u306b\u5fc5\u8981\u306a\u30b5\u30a4\u30af\u30eb\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"[3]\u305d\u3057\u3066\u3001\u3053\u308c\u306b\u6b63\u5f26\u6ce21\u5468\u671f\u306e\u9577\u3055\u3092\u639b\u3051\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\u30022pi\u30e9\u30b8\u30a2\u30f3"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u95a2\u6570\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3059\u308b\u524d\u306b\u3001\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u30ec\u30fc\u30c8\u3092\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u3053\u308c\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u306e\u751f\u6210\u983b\u5ea6\u3092\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3067\u30011\u30b5\u30f3\u30d7\u30eb\u3042\u305f\u308a\u306b\u5fc5\u8981\u306a\u5909\u5316\u91cf\u3092\u77e5\u308b\u305f\u3081\u3067\u3059\u3002\u30b5\u30f3\u30d7\u30eb\u30ec\u30fc\u30c8\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioAppComponent.html#a70634aa3ffaf6e7ff0d233e5933a063d",title:"\u30bd\u30fc\u30b9\u306b\u6f14\u594f\u306e\u6e96\u5099\u3092\u6307\u793a\u3059\u308b\u3002",children:"AudioAppComponent::prepareToPlay()"}),"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void prepareToPlay (int, double sampleRate) override\n    {\n        currentSampleRate = sampleRate;\n        updateAngleDelta();\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u30ec\u30fc\u30c8\u5024\u306e\u30b3\u30d4\u30fc\u3092\u4fdd\u5b58\u3057",(0,r.jsx)(n.code,{children:"updateAngleDelta()"}),"\u95a2\u6570\u306f\u5f53\u521d\u306f"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u3092\u4f7f\u3046",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u3092\u4f7f\u3046"}),"\n",(0,r.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u4e2d\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u52d5\u3044\u305f\u3089",(0,r.jsx)(n.code,{children:"angleDelta"}),"\u307e\u305f\u30e1\u30f3\u30d0\u30fc\u3060\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        frequencySlider.onValueChange = [this]\n        {\n            if (currentSampleRate > 0.0)\n                updateAngleDelta();\n        };\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3092\u547c\u3073\u51fa\u3059\u524d\u306b\u3001\u30b5\u30f3\u30d7\u30eb\u30ec\u30fc\u30c8\u304c\u6709\u52b9\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3002",(0,r.jsx)(n.code,{children:"updateAngleDelta()"}),"\u95a2\u6570\u3092\u518d\u3073\u4f7f\u7528\u3059\u308b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u51fa\u529b",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u51fa\u529b"}),"\n",(0,r.jsxs)(n.p,{children:["\u671f\u9593\u4e2d",(0,r.jsx)(n.code,{children:"getNextAudioBlock()"}),"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u5b9f\u969b\u306e\u30b5\u30a4\u30f3\u6ce2\u3092\u751f\u6210\u3057\u3001\u305d\u308c\u3092\u51fa\u529b\u306b\u66f8\u304d\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        auto level = 0.125f;\n        auto* leftBuffer  = bufferToFill.buffer->getWritePointer (0, bufferToFill.startSample);\n        auto* rightBuffer = bufferToFill.buffer->getWritePointer (1, bufferToFill.startSample);\n \n        for (auto sample = 0; sample < bufferToFill.numSamples; ++sample)\n        {\n            auto currentSample = (float) std::sin (currentAngle);\n            currentAngle += angleDelta;\n            leftBuffer[sample]  = currentSample * level;\n            rightBuffer[sample] = currentSample * level;\n        }\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u3054\u3068\u306b\u3001\u73fe\u5728\u306e\u89d2\u5ea6\u306b\u5bfe\u3059\u308b\u30b5\u30a4\u30f3\u95a2\u6570\u3092\u8a08\u7b97\u3057\u3001\u6b21\u306e\u30b5\u30f3\u30d7\u30eb\u306e\u89d2\u5ea6\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u3002\u30ec\u30d9\u30eb\u3092",(0,r.jsx)(n.code,{children:"0.125"}),"\u30d5\u30eb\u30b9\u30b1\u30fc\u30eb\u306e\u6b63\u5f26\u6ce2\u306f\u975e\u5e38\u306b\u5927\u304d\u304f\u306a\u308b\uff01\u79c1\u305f\u3061\u306f\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\uff08\u305d\u3057\u3066\u304a\u305d\u3089\u304f\u305d\u3046\u3059\u3079\u304d\u3060\uff09\u3002",(0,r.jsx)(n.em,{children:"\u30e9\u30c3\u30d7"}),"\u306b\u9054\u3059\u308b\u3068\u3001\u73fe\u5728\u306e\u89d2\u5ea6\u5024\u3092\u30bc\u30ed\u306b\u623b\u3059\u30022pi.\u3088\u308a\u5927\u304d\u306a\u5024\u306f\u307e\u3060\u6709\u52b9\u306a\u5024\u3092\u8fd4\u3059\u306e\u3067\u3001\u5b9f\u969b\u306b\u306f\u3053\u306e\u8a08\u7b97\u3092\u907f\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u6b21\u306e\u753b\u50cf\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u5f97\u3089\u308c\u308b\uff1a"]}),"\n",(0,r.jsx)(l,{src:"https://docs.juce.com/master/tutorial_synth_sine_graph1.png",caption:"\u4f4d\u76f8\u89d2\u3092\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\u3067\u793a\u3059\u30d5\u30eb\u30b9\u30b1\u30fc\u30eb\xb11.0\u306e\u6b63\u5f26\u6ce2\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u69cb\u6210",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u69cb\u6210"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u304c\u975e\u7dda\u5f62\u306b\u5909\u5316\u3059\u308b\u3053\u3068\u306b\u304a\u6c17\u3065\u304d\u304b\u3082\u3057\u308c\u306a\u3044\uff08\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u3001\u4eca\u3059\u3050\u8a66\u3057\u3066\u307f\u308b\u3079\u304d\u3060\uff09\u3002\u5b9f\u306f\u3053\u306e\u5909\u5316\u306f\u5bfe\u6570\u7684\u306a\u3082\u306e\u306a\u306e\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5c0f\u3055\u3044\u5024\u3067\u306f\u5206\u89e3\u80fd\u304c\u9ad8\u304f\u306a\u308a\u3001\u5927\u304d\u3044\u5024\u3067\u306f\u5206\u89e3\u80fd\u304c\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002\u5468\u6ce2\u6570\u5024\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u65b9\u6cd5\u304c\u9069\u5207\u306a\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\uff08\u97f3\u697d\u7684\u306b\u306f\u3001\u30ea\u30cb\u30a2\u306b\u7b49\u3057\u304f\u5909\u5316\u3059\u308b\u3088\u308a\u3082\u3001\u5468\u6ce2\u6570\u9593\u306e\u6bd4\u7387\u3067\u7b49\u3057\u304f\u5909\u5316\u3059\u308b\u3088\u3046\u306b\u805e\u3053\u3048\u308b\u304b\u3089\u3067\u3059\uff09\u3002\u3053\u306e\u8a2d\u5b9a\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a2d948c662c1f636810d3125d8b3f0d47",title:"\u5024\u306e\u5206\u5e03\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30ad\u30e5\u30fc\u4fc2\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u3002",children:"Slider::setSkewFactorFromMidPoint()"}),"\u6a5f\u80fd[4].\u79c1\u305f\u3061\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u7bc4\u56f2\u306f\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u300250..5000\u3057\u305f\u304c\u3063\u3066\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u30c8\u30e9\u30c3\u30af\u306e\u4e2d\u5fc3\u3092500\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u6700\u5c0f\u5024\u3068\u4e2d\u592e\u3001\u4e2d\u592e\u3068\u6700\u5927\u5024\u306e\u9593\u306b\u7b49\u3057\u3044\u97f3\u697d\u7684\u9593\u9694\u304c\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    MainContentComponent()\n    {\n        addAndMakeVisible (frequencySlider);\n        frequencySlider.setRange (50.0, 5000.0);\n        frequencySlider.setSkewFactorFromMidPoint (500.0); // [4]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,r.jsx)(n.em,{children:"\u30b9\u30ad\u30e5\u30fc\u4fc2\u6570"}),"\u3092\u4f7f\u3063\u3066\u76f4\u63a5\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#aba8fe3610e7198bd4c1f2804736bfbf2",title:"\u5024\u306e\u5206\u5e03\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30ad\u30e5\u30fc\u4fc2\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u3002",children:"Slider::setSkewFactor()"}),"\u95a2\u6570\u306f\u3001\u4e2d\u9593\u70b9\u3067\u3069\u306e\u3088\u3046\u306a\u5024\u304c\u6b32\u3057\u3044\u304b\u3092\u8003\u3048\u308b\u65b9\u304c\u7c21\u5358\u306a\u5834\u5408\u304c\u591a\u3044\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u30a8\u30af\u30b5\u30b5\u30a4\u30ba",type:"danger",children:(0,r.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5225\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u8ffd\u52a0\u3057\u3066\u3001\u30b5\u30a4\u30f3\u6ce2\u306e\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u3002\u30ec\u30d9\u30eb\u30921.0- \u306e\u6700\u5927\u5024\u3067\u3042\u308b\u30020.25\u3067\u3044\u3044\u306f\u305a\u3060\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5468\u6ce2\u6570\u306e\u5909\u5316\u3092\u6ed1\u3089\u304b\u306b\u3059\u308b",children:"\u5468\u6ce2\u6570\u306e\u5909\u5316\u3092\u6ed1\u3089\u304b\u306b\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:"\u30b9\u30e9\u30a4\u30c0\u3092\u52d5\u304b\u3059\u3068\u3001\u7279\u306b\u9ad8\u3044\u5468\u6ce2\u6570\u3067\u3001\u8033\u306b\u805e\u3053\u3048\u308b\u3001\u304a\u305d\u3089\u304f\u4e0d\u8981\u306a\u30a2\u30fc\u30c1\u30d5\u30a1\u30af\u30c8\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u306b\u304a\u6c17\u3065\u304d\u3067\u3057\u3087\u3046\u3002\u3053\u308c\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u304c\u5b9f\u969b\u306b\u306f\u96e2\u6563\u7684\u306a\u30b9\u30c6\u30c3\u30d7\u3067\u5909\u5316\u3057\u3066\u304a\u308a\u3001\u30b9\u30e9\u30a4\u30c0\u3092\u7d20\u65e9\u304f\u52d5\u304b\u3059\u3068\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u304b\u306a\u308a\u5927\u304d\u304f\u306a\u308b\u305f\u3081\u3067\u3059\u3002\u3053\u308c\u306b\u52a0\u3048\u3066\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5468\u6ce2\u6570\u306f\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30ed\u30c3\u30af\u3054\u3068\u306b\u3057\u304b\u66f4\u65b0\u3055\u308c\u306a\u3044\u305f\u3081\u3001\u3053\u308c\u3089\u306e\u5909\u5316\u306e\u6b63\u78ba\u306a\u52b9\u679c\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u30d6\u30ed\u30c3\u30af\u30b5\u30a4\u30ba\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e0\u30fc\u30b8\u30f3\u30b0\u7528\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30d0\u30fc",children:"\u30b9\u30e0\u30fc\u30b8\u30f3\u30b0\u7528\u30b9\u30c6\u30fc\u30c8\u30fb\u30e1\u30f3\u30d0\u30fc"}),"\n",(0,r.jsxs)(n.p,{children:["\u3072\u3068\u3064\u306f\u3001\u5408\u6210\u306b\u4f7f\u308f\u308c\u3066\u3044\u308b\u73fe\u5728\u306e\u5468\u6ce2\u6570\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3001\u3082\u3046\u3072\u3068\u3064\u306f\u3001\u5408\u6210\u306b\u4f7f\u308f\u308c\u3066\u3044\u308b\u73fe\u5728\u306e\u5468\u6ce2\u6570\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3060\u3002",(0,r.jsx)(n.em,{children:"\u30bf\u30fc\u30b2\u30c3\u30c8"}),"\u30e6\u30fc\u30b6\u30fc\u304c\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u52d5\u304b\u3057\u3066\u8981\u6c42\u3057\u305f\u983b\u5ea6\u3002\u305d\u306e\u5f8c\u3001\u3053\u308c\u3089\u306e\u5024\u306e\u9593\u3092\u3088\u308a\u3086\u3063\u304f\u308a\u3068\u30e9\u30f3\u30d7\u3057\u3066\u3001\u30a2\u30fc\u30c1\u30d5\u30a1\u30af\u30c8\u3092\u9664\u53bb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    double currentFrequency = 500.0, targetFrequency = 500.0; // [5]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u5024\u3092\u540c\u6642\u306b\u521d\u671f\u5316\u3059\u308b[5].\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u540c\u3058\u5024\u306b\u521d\u671f\u5316\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002[6]:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    MainContentComponent()\n    {\n        addAndMakeVisible (frequencySlider);\n        frequencySlider.setRange (50.0, 5000.0);\n        frequencySlider.setSkewFactorFromMidPoint (500.0);\n        frequencySlider.setValue (currentFrequency, juce::dontSendNotification);  // [6]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5408\u6210\u30b3\u30fc\u30c9\u306e\u66f4\u65b0",children:"\u5408\u6210\u30b3\u30fc\u30c9\u306e\u66f4\u65b0"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u304c\u6a5f\u80fd\u3059\u308b\u9375\u306f\u3001\u73fe\u5728\u5024\u3068\u76ee\u6a19\u5024\u304c\u540c\u3058\u304b\u7570\u306a\u308b\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u3002\u3082\u3057\u540c\u3058\u306a\u3089\u3001\u5358\u7d14\u306b\u5143\u306e\u30b3\u30fc\u30c9\u3092",(0,r.jsx)(n.code,{children:"angleDelta"}),"\u30e1\u30f3\u30d0\u30fc\u306f\u5909\u66f4\u3059\u308b\u5fc5\u8981\u306f\u306a\u3044\u3002\u3082\u3057\u73fe\u5728\u5024\u3068\u76ee\u6a19\u5024\u304c\u7570\u306a\u308b\u306a\u3089\u3001\u305d\u306e\u6642\u70b9\u3067",(0,r.jsx)(n.code,{children:"angleDelta"}),"\u5404\u30b5\u30f3\u30d7\u30eb\u306e\u30e1\u30f3\u30d0\u30fc\u306f\u3001\u73fe\u5728\u306e\u5024\u3092\u5f90\u3005\u306b\u76ee\u6a19\u5024\u306b\u8fd1\u3065\u3051\u3066\u3044\u304f\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u3067\u306f\u3001\u51fa\u529b\u30d0\u30c3\u30d5\u30a1\u306e\u30b5\u30f3\u30d7\u30eb\u6570\u3092\u30e9\u30f3\u30d7\u306e\u9577\u3055\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30d0\u30c3\u30d5\u30a1\u30b5\u30a4\u30ba\u304c\u975e\u5e38\u306b\u5c0f\u3055\u3044\u5834\u5408\u3001\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u304c\u805e\u3053\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        auto level = 0.125f;\n        auto* leftBuffer  = bufferToFill.buffer->getWritePointer (0, bufferToFill.startSample);\n        auto* rightBuffer = bufferToFill.buffer->getWritePointer (1, bufferToFill.startSample);\n \n        auto localTargetFrequency = targetFrequency;\n \n        if (! juce::approximatelyEqual (localTargetFrequency, currentFrequency))                              // [7]\n        {\n            auto frequencyIncrement = (localTargetFrequency - currentFrequency) / bufferToFill.numSamples;    // [8]\n \n            for (auto sample = 0; sample < bufferToFill.numSamples; ++sample)\n            {\n                auto currentSample = (float) std::sin (currentAngle);\n                currentFrequency += frequencyIncrement;                                                       // [9]\n                updateAngleDelta();                                                                           // [10]\n                currentAngle += angleDelta;\n                leftBuffer[sample]  = currentSample * level;\n                rightBuffer[sample] = currentSample * level;\n            }\n \n            currentFrequency = localTargetFrequency;\n        }\n        else                                                                                                  // [11]\n        {\n            for (auto sample = 0; sample < bufferToFill.numSamples; ++sample)\n            {\n                auto currentSample = (float) std::sin (currentAngle);\n                currentAngle += angleDelta;\n                leftBuffer[sample]  = currentSample * level;\n                rightBuffer[sample] = currentSample * level;\n            }\n        }\n    }\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[7]\u30bf\u30fc\u30b2\u30c3\u30c8\u304c\u73fe\u5728\u306e\u5024\u3068\u7570\u306a\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3002\u3053\u306e\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u9593\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u30e1\u30c3\u30bb\u30fc\u30b8\u30b9\u30ec\u30c3\u30c9\u4e0a\u3067\u5024\u3092\u5909\u66f4\u3057\u305f\u5834\u5408\u306b\u5099\u3048\u3066\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u5024\u306e\u30ed\u30fc\u30ab\u30eb\u30b3\u30d4\u30fc\u3092\u53d6\u3063\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.li,{children:"[8]1\u30b5\u30f3\u30d7\u30eb\u306b\u5fc5\u8981\u306a\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"[9]\u73fe\u5728\u306e\u5468\u6ce2\u6570\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["[10]\u3092\u66f4\u65b0\u3059\u308b\u3002",(0,r.jsx)(n.code,{children:"deltaAngle"}),"\u3053\u306e\u65b0\u3057\u3044\u5468\u6ce2\u6570\u306b\u57fa\u3065\u304f\u30e1\u30f3\u30d0\u30fc\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"[11]\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u3001\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306e\u66f8\u5f0f\u306f\u3001\u4ee5\u4e0b\u306e\u5178\u578b\u7684\u306a\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Digital_signal_processing",children:"DSP"}),"\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u5185\u90e8\u3067\u306f\u6761\u4ef6\u6587\u306f\u4f7f\u308f\u306a\u3044\u3002",(0,r.jsx)(n.code,{children:"for()"}),"\u30eb\u30fc\u30d7\u3092\u4f7f\u7528\u3059\u308b\u3002\u305d\u306e\u4ee3\u308f\u308a\u306b\u3001\u6761\u4ef6\u3092\u30eb\u30fc\u30d7\u306e\u5916\u3067\u30c6\u30b9\u30c8\u3055\u305b\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u5909\u5316\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u306b\u3088\u3063\u3066\u30012\u3064\u306e\u7570\u306a\u308b\u3001\u3057\u304b\u3057\u3088\u304f\u4f3c\u305f\u30eb\u30fc\u30d7\u3092\u4f7f\u3046\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u5f8c\u306b",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a680d007f6a824a28a60aa05b4045e794",title:"\u3053\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30e9\u30e0\u30c0\u3092\u4ee3\u5165\u3057\u3066\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",children:"Slider::onValueChange"}),"\u30d8\u30eb\u30d1\u30fc\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\u5024\u3092\u66f4\u65b0\u3059\u308b\u3060\u3051\u3067\u3042\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        frequencySlider.onValueChange = [this] { targetFrequency = frequencySlider.getValue(); };\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3067\u7d42\u308f\u308a\u3067\u3059\uff01\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u52d5\u304d\u306b\u3088\u308b\u30a2\u30fc\u30c1\u30d5\u30a1\u30af\u30c8\u304c\u53d6\u308a\u9664\u304b\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u30a8\u30af\u30b5\u30b5\u30a4\u30ba",type:"danger",children:(0,r.jsx)(n.p,{children:"\u4ee5\u524d\u306e\u7df4\u7fd2\u3067\u8ffd\u52a0\u3057\u305f\u30ec\u30d9\u30eb\u30fb\u30b9\u30e9\u30a4\u30c0\u30fb\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306b\u30b9\u30e0\u30fc\u30b8\u30f3\u30b0\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5099\u8003",children:"\u5099\u8003"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f4d\u76f8\u89d2\u3092\u5dfb\u304d\u8fbc\u307e\u306a\u30442pi\u306f\u3001\u3059\u3079\u3066\u306e\u72b6\u6cc1\u306b\u304a\u3044\u3066\u7406\u60f3\u7684\u3067\u3042\u308b\u3068\u306f\u9650\u308a\u307e\u305b\u3093\u3002\u3082\u3057",(0,r.jsx)(n.code,{children:"float"}),"\u3088\u308a\u3082",(0,r.jsx)(n.code,{children:"double"}),"\u5909\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u73fe\u5728\u306e\u89d2\u5ea6\u5024\u304c\u975e\u5e38\u306b\u5927\u304d\u304f\u306a\u3063\u305f\u3068\u304d\u306b\u3001\u8a08\u7b97\u304c\u4e0d\u6b63\u78ba\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002\u3067\u4f4d\u76f8\u3092\u30e9\u30c3\u30d7\u3057\u306a\u3044\u3053\u3068\u30672pi\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3002",(0,r.jsx)(n.code,{children:"std::sin()"}),"\u95a2\u6570\u306f\u3001\u5358\u7d14\u306a\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u6280\u6cd5\u306b\u6bd4\u3079\u3001\u305d\u308c\u306a\u308a\u306b\u3046\u307e\u304f\u6a5f\u80fd\u3059\u308b\u3002\u53c2\u7167",(0,r.jsx)(n.a,{href:"../tutorial_wavetable_synth/",children:"Tutorial: Wavetable synthesis"}),"\u3092\u53c2\u7167\u3055\u308c\u305f\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b5\u30a4\u30f3\u6ce2\u306e\u5408\u6210\u3068\u5236\u5fa1\u306e\u57fa\u672c\u7684\u306a\u65b9\u6cd5\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\u3053\u3053\u3067\u306f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6b63\u5f26\u6ce2\u767a\u632f\u5668\u306e\u72b6\u614b\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u4e0d\u53ef\u6b20\u306a\u5909\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u3053\u308c\u3089\u306e\u5909\u6570\u3092\u3069\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308c\u3070\u3001\u671b\u307e\u3057\u3044\u7d50\u679c\u304c\u5f97\u3089\u308c\u308b\u304b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5909\u5316\u3092\u6ed1\u3089\u304b\u306b\u3059\u308b\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../interface-design/tutorial_slider_values/",children:"Tutorial: The Slider class"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_simple_synth_noise/",children:"Tutorial: Build a white noise generator"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_synth_db_level_control/",children:"Tutorial: Control audio levels using decibels"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_synth_level_control/",children:"Tutorial: Control audio levels"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_synth_using_midi_input/",children:"Tutorial: Build a MIDI synthesiser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_wavetable_synth/",children:"Tutorial: Wavetable synthesis"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>a});var r=l(6540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);