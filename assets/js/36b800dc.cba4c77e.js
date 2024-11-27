"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[9421],{3927:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var r=i(4848),t=i(8453);const l={title:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9",sidebar_position:8,tags:["\u521d\u7d1a"]},d="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9",s={id:"interface-design/tutorial_slider_values",title:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306fSlider\u30af\u30e9\u30b9\u3067\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u52d5\u304d\u306b\u5fdc\u7b54\u3059\u308b\u65b9\u6cd5\u3068\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u304b\u3089\u5024\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u3067\u5024\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4e0d\u53ef\u6b20\u306a\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u30c6\u30af\u30cb\u30c3\u30af\u3082\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/interface-design/tutorial_slider_values.mdx",sourceDirName:"interface-design",slug:"/interface-design/tutorial_slider_values",permalink:"/juce-tutorial-ja/interface-design/tutorial_slider_values",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_slider_values.mdx",tags:[{inline:!0,label:"\u521d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u521d\u7d1a"}],version:"current",sidebarPosition:8,frontMatter:{title:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9",sidebar_position:8,tags:["\u521d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"\u30ea\u30b9\u30ca\u30fc\u3068\u653e\u9001\u5c40",permalink:"/juce-tutorial-ja/interface-design/tutorial_listeners_and_broadcasters"},next:{title:"\u30e9\u30d9\u30eb\u30af\u30e9\u30b9",permalink:"/juce-tutorial-ja/interface-design/tutorial_label"}},c={},a=[{value:"\u30b9\u30bf\u30fc\u30c8",id:"\u30b9\u30bf\u30fc\u30c8",level:2},{value:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"JUCE Slider\u30af\u30e9\u30b9\u3002",id:"juce-slider\u30af\u30e9\u30b9",level:2},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u8ffd\u52a0",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u8ffd\u52a0",level:3},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u4f4d\u7f6e",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u4f4d\u7f6e",level:3},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5909\u5316\u3078\u306e\u5bfe\u5fdc",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5909\u5316\u3078\u306e\u5bfe\u5fdc",level:3},{value:"\u521d\u671f\u5024\u306e\u8a2d\u5b9a",id:"\u521d\u671f\u5024\u306e\u8a2d\u5b9a",level:3},{value:"\u3044\u304f\u3064\u304b\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"\u3044\u304f\u3064\u304b\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:2},{value:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3092\u5e83\u304f\u3059\u308b",id:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3092\u5e83\u304f\u3059\u308b",level:3},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u5024\u306e\u6b6a\u307f",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u5024\u306e\u6b6a\u307f",level:3},{value:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30fb\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u7c21\u7d20\u5316",id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u7c21\u7d20\u5316",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{CaptionImage:i,SourcePageLink:l}=n;return i||u("CaptionImage",!0),l||u("SourcePageLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9"})}),"\n",(0,r.jsx)(l,{path:"tutorial_slider_values"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30af\u30e9\u30b9\u3067\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u52d5\u304d\u306b\u5fdc\u7b54\u3059\u308b\u65b9\u6cd5\u3068\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u304b\u3089\u5024\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u3067\u5024\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4e0d\u53ef\u6b20\u306a\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u30c6\u30af\u30cb\u30c3\u30af\u3082\u7d39\u4ecb\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\u521d\u5fc3\u8005"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,r.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),",",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a1977aeac9b4363e8ed0cac0ac103055a",children:"Slider::Listener"}),",",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html",title:"\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002",children:"Label"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30b9\u30bf\u30fc\u30c8",children:"\u30b9\u30bf\u30fc\u30c8"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f",(0,r.jsx)(n.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"}),"\u305d\u308c\u306f\u6700\u521d\u306b\u8aad\u3093\u3067\u7406\u89e3\u3059\u3079\u304d\u3060\u3063\u305f\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u3053\u3061\u3089\u304b\u3089\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/tutorials/PIPs/SliderValuesTutorial.zip",children:"PIP"}),"|",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/tutorials/ZIPs/SliderValuesTutorial.zip",children:"ZIP"}),".\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u89e3\u51cd\u3057\u3001\u6700\u521d\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(n.a,{href:"../../getting-started/tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u30012\u3064\u306e\u76f4\u7dda\u7684\u306a\u6c34\u5e73\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u4e00\u65b9\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u306f",(0,r.jsx)(n.strong,{children:"\u983b\u5ea6"}),"\u3082\u3046\u3072\u3068\u3064\u306f",(0,r.jsx)(n.strong,{children:"\u671f\u9593"}),"\u6b21\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\uff1a"]}),"\n",(0,r.jsx)(i,{src:"https://docs.juce.com/master/tutorial_slider_values_screenshot1.png",caption:"2\u3064\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u3068\u305d\u306e\u5024\u3092\u793a\u3059\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30e6\u30fc\u30b6\u30fc\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3069\u3061\u3089\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u3082\u3001\u57fa\u672c\u7684\u306b\u306f\u540c\u3058\u5024\u3092\u8868\u793a\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u3060\u3002f)\u306f\u7d99\u7d9a\u6642\u9593(d):"}),"\n",(0,r.jsx)(n.p,{children:"f =1\u2044d"}),"\n",(0,r.jsx)(n.p,{children:"\u3069\u3061\u3089\u304b\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u52d5\u304b\u3059\u3068\u3001\u3082\u3046\u4e00\u65b9\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u3082\u66f4\u65b0\u3055\u308c\u3001\u5909\u66f4\u304c\u53cd\u6620\u3055\u308c\u308b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"juce-slider\u30af\u30e9\u30b9",children:"JUCE Slider\u30af\u30e9\u30b9\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u7bc4\u56f2\u3092\u8a2d\u5b9a\u3057\u3001\u5024\u306e\u5909\u5316\u3092\u30ea\u30c3\u30b9\u30f3\u3057\u3001\u30b9\u30e9\u30a4\u30c0\u306e\u5024\u3092\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u66f4\u65b0\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002\u30c7\u30e2\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u4e21\u65b9\u306e\u30b9\u30e9\u30a4\u30c0\u306b\u30c6\u30ad\u30b9\u30c8\u30fb\u30dc\u30c3\u30af\u30b9\u304c\u542b\u307e\u308c\u3001\u3053\u306e\u30c6\u30ad\u30b9\u30c8\u30fb\u30dc\u30c3\u30af\u30b9\u306b\u306f\u5468\u6ce2\u6570\u306e\u5358\u4f4d (",(0,r.jsx)(n.strong,{children:"\u30d8\u30eb\u30c4"}),"\u30d8\u30eb\u30c4\uff09\u3068\u6301\u7d9a\u6642\u9593(",(0,r.jsx)(n.strong,{children:"s"}),"\u79d2\uff09\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u8ffd\u52a0",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u8ffd\u52a0"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u306f\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30fb\u30e1\u30f3\u30d0\u30fc\u3068\u3057\u3066\u6211\u3005\u306e\u30c1\u30fc\u30e0\u306b\u52a0\u3048\u3089\u308c\u3066\u3044\u308b\u3002",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u30af\u30e9\u30b9\u3067\u3042\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"private:\n    juce::Slider frequencySlider;\n    juce::Label  frequencyLabel;\n    juce::Slider durationSlider;\n    juce::Label  durationLabel;\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3092\u8ffd\u52a0\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html",title:"\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002",children:"Label"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u30c6\u30ad\u30b9\u30c8\u3092\u8868\u793a\u3059\u308b",(0,r.jsx)(n.strong,{children:"\u983b\u5ea6"}),"\u305d\u3057\u3066",(0,r.jsx)(n.strong,{children:"\u671f\u9593"}),"\u3092\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5de6\u306b\u7f6e\u304f\u3002\u30b9\u30e9\u30a4\u30c0\u30fc\u30fb\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306e\u3059\u3050\u5de6\u306b\u3042\u308b\u30dc\u30c3\u30af\u30b9\u306f\u3001\u73fe\u5728\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u5024\u3092\u8868\u793a\u3059\u308b\u3082\u306e\u3067\u3001\u5b9f\u969b\u306b\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3092\u8ffd\u52a0\u3057\u305f\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a1977aeac9b4363e8ed0cac0ac103055a",children:"Slider::Listener"}),"\u30af\u30e9\u30b9\u3092\u57fa\u5e95\u30af\u30e9\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5909\u66f4\u3092\u53d7\u3051\u53d6\u308b\u3088\u3046\u306b\u30af\u30e9\u30b9\u3092\u767b\u9332\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class MainContentComponent   : public juce::Component,\n                               public juce::Slider::Listener\n{\npublic:\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u3005\u306e",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u3057\u3066\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u8ffd\u52a0\u3059\u308b (",(0,r.jsx)(n.a,{href:"../tutorial_component_parents_children/",children:"Tutorial: Parent and child components"}),")\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u308c\u3089\u3092\u8868\u793a\u3055\u305b\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u8868\u3059\u3053\u3068\u306e\u3067\u304d\u308b\u5024\u306e\u7bc4\u56f2\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u6700\u521d\u306b",(0,r.jsx)(n.code,{children:"frequencySlider"}),"\u30e1\u30f3\u30d0\u30fc\u3060\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'    MainContentComponent()\n    {\n        addAndMakeVisible (frequencySlider);\n        frequencySlider.setRange (50, 5000.0);          // [1]\n        frequencySlider.setTextValueSuffix (" Hz");     // [2]\n        frequencySlider.addListener (this);             // [3]\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[1]\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u7bc4\u56f2\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a9fbc23e67deb4a18d172c357a7cff14c",title:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u306e\u9650\u754c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",children:"Slider::setRange()"}),"\u95a2\u6570\u3067\u3042\u308b\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"[2]\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u30c6\u30ad\u30b9\u30c8\u8868\u793a\u306b\u3001\u5024\u306e\u5358\u4f4d\u3092\u793a\u3059\u30b5\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["[3]\u3092\u52a0\u3048\u308b\u3002",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30ea\u30b9\u30ca\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5bfe\u5fdc\u3059\u308b\u30e9\u30d9\u30eb\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'        addAndMakeVisible (frequencyLabel);\n        frequencyLabel.setText ("Frequency", juce::dontSendNotification);\n        frequencyLabel.attachToComponent (&frequencySlider, true); // [4]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html#a3c2397c0da1249f9e27e2279e0f2d4eb",title:"\u3053\u306e\u30e9\u30d9\u30eb\u3092\u5225\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u300c\u304f\u3063\u3064\u3051\u308b\u300d\u3002",children:"Label::attachToComponent()"}),"\u6a5f\u80fd[4]\u306f\u3001\u30e9\u30d9\u30eb\u3092\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u96a3\u63a5\u3055\u305b\u308b\u306e\u306b\u3068\u3066\u3082\u4fbf\u5229\u3067\u3059\u3002\u756a\u76ee\u306e\u5f15\u6570\u3001",(0,r.jsx)(n.code,{children:"true"}),"\u30e9\u30d9\u30eb\u3092\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 (",(0,r.jsx)(n.code,{children:"false"}),"\u3067\u306f\u4e0a\u306b\u914d\u7f6e\u3055\u308c\u308b)\u3002\u5f8c\u307b\u3069\u8aac\u660e\u3059\u308b\u304c\u3001\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e\u3092\u624b\u52d5\u3067",(0,r.jsx)(n.code,{children:"MainContentComponent::resized()"}),"\u95a2\u6570\u3067\u3042\u308b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,r.jsx)(n.code,{children:"durationSlider"}),"\u305d\u3057\u3066",(0,r.jsx)(n.code,{children:"durationLabel"}),"\u306e\u7bc4\u56f2\u306e\u9006\u6570\u3068\u306a\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u308b\u3002",(0,r.jsx)(n.code,{children:"frequencySlider"}),"\u30e1\u30f3\u30d0\u30fc\u3060\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'        addAndMakeVisible (durationSlider);\n        durationSlider.setRange (1.0 / frequencySlider.getMaximum(),\n                                 1.0 / frequencySlider.getMinimum());\n        durationSlider.setTextValueSuffix (" s");\n        durationSlider.addListener (this);\n \n        addAndMakeVisible (durationLabel);\n        durationLabel.setText ("Duration", juce::dontSendNotification);\n        durationLabel.attachToComponent (&durationSlider, true);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u4f4d\u7f6e",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u4f4d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b9\u30e9\u30a4\u30c0\u30fc\u306f",(0,r.jsx)(n.code,{children:"MainContentComponent::resized()"}),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u305f\u3002\u79c1\u305f\u3061\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html#a3c2397c0da1249f9e27e2279e0f2d4eb",title:"\u3053\u306e\u30e9\u30d9\u30eb\u3092\u5225\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u300c\u304f\u3063\u3064\u3051\u308b\u300d\u3002",children:"Label::attachToComponent()"}),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u30e9\u30d9\u30eb\u3092\u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u8cbc\u308a\u4ed8\u3051\u308b\u3068\u3001\u30e9\u30d9\u30eb\u306f\u81ea\u52d5\u7684\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5de6\u5074\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void resized() override\n    {\n        auto sliderLeft = 120;\n        frequencySlider.setBounds (sliderLeft, 20, getWidth() - sliderLeft - 10, 20);\n        durationSlider .setBounds (sliderLeft, 50, getWidth() - sliderLeft - 10, 20);\n    }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5909\u5316\u3078\u306e\u5bfe\u5fdc",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5909\u5316\u3078\u306e\u5bfe\u5fdc"}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30ea\u30b9\u30ca\u30fc\u304c\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u306e\u5909\u5316\u306b\u53cd\u5fdc\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void sliderValueChanged (juce::Slider* slider) override\n    {\n        if (slider == &frequencySlider)\n            durationSlider.setValue (1.0 / frequencySlider.getValue(), juce::dontSendNotification);\n        else if (slider == &durationSlider)\n            frequencySlider.setValue (1.0 / durationSlider.getValue(), juce::dontSendNotification);\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSliderListener.html#aa43e257ace7dd4a61399b30cb3285e75",title:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u3002",children:"Slider::Listener::sliderValueChanged()"}),"\u95a2\u6570\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a1977aeac9b4363e8ed0cac0ac103055a",children:"Slider::Listener"}),"\u3092\u57fa\u672c\u30af\u30e9\u30b9\u3068\u3059\u308b\u3002\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u9006\u6570\u3092\u3082\u3046\u4e00\u65b9\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u6e21\u3059\u3060\u3051\u3067\u3059\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a430a5c4e56b39dd622f5800f787e0822",title:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u73fe\u5728\u5024\u3092\u5909\u66f4\u3059\u308b\u3002",children:"Slider::setValue()"}),"\u95a2\u6570\u3092\u4f7f\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u305d\u306e\u5909\u5316\u3092\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30c8\u3057\u306a\u3044\u3088\u3046\u306b\u6307\u793a\u3059\u308b\u3002\u3053\u308c\u306f\u3001\u3053\u306e\u3088\u3046\u306b2\u3064\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u4e92\u3044\u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u7121\u9650\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30eb\u30fc\u30d7\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002\u30b9\u30e9\u30a4\u30c0\u30fc\u306e",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/group__juce__events-messages.html#gga25a31a4bdc02a0d0adb743e26dd14ba9a057928146704d53dfee6f4ac33c92629",children:"dontSendNotification"}),"\u5024\u306f\u3053\u306e\u30eb\u30fc\u30d7\u306e\u53ef\u80fd\u6027\u3092\u65ad\u3061\u5207\u308b\u3002\u6f14\u7b97\u304c\u6b63\u78ba\u3067\u3001\u4e21\u65b9\u5411\u306e\u5909\u63db\u304c\u540c\u3058\u7d50\u679c\u3092\u751f\u3080\u3068\u4eee\u5b9a\u3059\u308b\u3068\u3001\u3053\u308c\u306f\u5fc5\u8981\u306a\u3044\u306f\u305a\u3067\u3059\u3002\u3068\u3044\u3046\u306e\u3082\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u30ea\u30b9\u30ca\u30fc\u306b\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30c8\u3059\u308b\u306e\u306f\u3001\u5024\u304c\u5b9f\u969b\u306b\u5909\u5316\u3057\u305f\u5834\u5408\u3060\u3051\u3060\u304b\u3089\u3067\u3059\u3002(\u3053\u306e\u3088\u3046\u306a\u72b6\u6cc1\u3067\u306f\u3001\u5909\u63db\u306b\u308f\u305a\u304b\u306a\u4e38\u3081\u8aa4\u5dee\u304c\u3042\u308b\u5834\u5408\u306b\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059)\u3002\u3092\u7701\u7565\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/group__juce__events-messages.html#gga25a31a4bdc02a0d0adb743e26dd14ba9a057928146704d53dfee6f4ac33c92629",children:"dontSendNotification"}),"\u3053\u306e\u5024\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u52d5\u4f5c\u3067\u3042\u308b",(0,r.jsx)(n.em,{children:"\u610f\u5fd7"}),"\u653e\u9001\u304c\u5909\u308f\u308b\u3002\u3092\u4f7f\u3046\u304b\u3069\u3046\u304b\u306f\u3001\u672c\u5f53\u306b\u614e\u91cd\u306b\u8003\u3048\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/group__juce__events-messages.html#gga25a31a4bdc02a0d0adb743e26dd14ba9a057928146704d53dfee6f4ac33c92629",children:"dontSendNotification"}),"\u3042\u308b\u3044\u306f\u3001\u305d\u3046\u3067\u306a\u304f\u3066\u3082\u3001\u3042\u306a\u305f\u81ea\u8eab\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3051\u308b\u7279\u5b9a\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u521d\u671f\u5024\u306e\u8a2d\u5b9a",children:"\u521d\u671f\u5024\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u306f",(0,r.jsx)(n.code,{children:"frequencySlider"}),"\u30b9\u30e9\u30a4\u30c0\u30fc\u306f500\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3002\u3053\u308c\u306b\u3088\u308a",(0,r.jsx)(n.code,{children:"durationSlider"}),"\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u66f4\u65b0\u3059\u308b\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/group__juce__events-messages.html#gga25a31a4bdc02a0d0adb743e26dd14ba9a057928146704d53dfee6f4ac33c92629",children:"dontSendNotification"}),"\u4eca\u56de\u306f\u4fa1\u5024\u304c\u3042\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        frequencySlider.setValue (500.0); // [5]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u3044\u304f\u3064\u304b\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",children:"\u3044\u304f\u3064\u304b\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"}),"\n",(0,r.jsx)(n.p,{children:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u3088\u308a\u52b9\u679c\u7684\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u3053\u306b\u3044\u304f\u3064\u304b\u306e\u7c21\u5358\u306a\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3092\u52a0\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3092\u5e83\u304f\u3059\u308b",children:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3092\u5e83\u304f\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["\u306e\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",(0,r.jsx)(n.code,{children:"durationSlider"}),"\u7279\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u306f\u3001\u305d\u306e\u5024\u3092\u6e80\u8db3\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u591a\u304f\u306e\u6841\u3092\u5fc5\u8981\u3068\u3059\u308b\u3002\u305d\u306e\u305f\u3081\u306b",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a5bc748a21e72fe14153bc9fe5ac03e77",title:"\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u30dc\u30c3\u30af\u30b9\u306e\u4f4d\u7f6e\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5909\u66f4\u3059\u308b\u3002",children:"Slider::setTextBoxStyle()"}),"\u95a2\u6570\u306b\u8ffd\u52a0\u3059\u308b\u3002\u4ee5\u4e0b\u306e2\u884c\u306e\u30b3\u30fc\u30c9\u3092",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u30d3\u30eb\u30c0\u30fc"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        frequencySlider.setTextBoxStyle (juce::Slider::TextBoxLeft, false, 160, frequencySlider.getTextBoxHeight());\n        durationSlider .setTextBoxStyle (juce::Slider::TextBoxLeft, false, 160, durationSlider .getTextBoxHeight());\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u306b\u3088\u308a\u3001\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306f\u3044\u305a\u308c\u3082160\u30d4\u30af\u30bb\u30eb\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\uff08\u305f\u3060\u3057\u3001\u9ad8\u3055\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a8258ee0e1222f3e02a696243a3468578",title:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u9ad8\u3055\u3092\u8fd4\u3057\u307e\u3059\u3002",children:"Slider::getTextBoxHeight()"}),"\u95a2\u6570)\u3002"]}),"\n",(0,r.jsx)(i,{src:"https://docs.juce.com/master/tutorial_slider_values_screenshot2.png",caption:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u5e45\u304c\u5e83\u304f\u306a\u3063\u305f\u30b9\u30e9\u30a4\u30c0\u30fc\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u5024\u306e\u6b6a\u307f",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u5024\u306e\u6b6a\u307f"}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u30c8\u30e9\u30c3\u30af\u306f\u30ea\u30cb\u30a2\u3067\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u306f\u30b9\u30e9\u30a4\u30c0\u30fc\u30c8\u30e9\u30c3\u30af\u306b\u6cbf\u3063\u305f\u30b9\u30e9\u30a4\u30c0\u30fc\u30b5\u30e0\u306e\u4f4d\u7f6e\u306b\u6bd4\u4f8b\u3057\u307e\u3059\u3002\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u64cd\u4f5c\u3057\u3066\u307f\u308b\u3068\u3001\u3053\u308c\u304c\u3069\u3046\u3082\u3057\u3063\u304f\u308a\u3053\u306a\u3044\u306e\u306f\u660e\u3089\u304b\u3060\u3002\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u8abf\u6574\u3059\u308b",(0,r.jsx)(n.em,{children:"\u30b9\u30ad\u30e5\u30fc"}),"\u3092\u4f7f\u3063\u3066\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u8ecc\u8de1\u3092\u5bfe\u6570\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a2d948c662c1f636810d3125d8b3f0d47",title:"\u5024\u306e\u5206\u5e03\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30ad\u30e5\u30fc\u4fc2\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u3002",children:"Slider::setSkewFactorFromMidPoint()"}),"\u95a2\u6570\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e2\u884c\u306e\u30b3\u30fc\u30c9\u3092",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u304c\u8a2d\u5b9a\u3055\u308c\u305f\u5f8c\u306b\u4f7f\u7528\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        frequencySlider.setSkewFactorFromMidPoint (500);\n        durationSlider .setSkewFactorFromMidPoint (0.002);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30c8\u30e9\u30c3\u30af\u306e\u4e2d\u9593\u70b9\u306b500\u3092\u7f6e\u304f\u3002",(0,r.jsx)(n.code,{children:"frequencySlider"}),"\u30b9\u30e9\u30a4\u30c0\u30fc\u306f0.002\u3067\u3042\u308b\u3002",(0,r.jsx)(n.code,{children:"durationSlider"}),"\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u52d5\u304b\u3059\u3002\u4e8b\u5b9f\u4e0a\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306f\u7b49\u3057\u304f\u3001\u3057\u304b\u3057\u53cd\u5bfe\u65b9\u5411\u306b\u52d5\u304f\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u975e\u7dda\u5f62\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30c8\u30e9\u30c3\u30af\u306f\u3001\u6642\u9593\u3084\u5468\u6ce2\u6570\u306a\u3069\u3001\u5c0f\u3055\u306a\u5024\u3067\u306f\u3088\u308a\u7d30\u304b\u304f\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u305f\u3044\u304c\u3001\u5927\u304d\u306a\u5024\u3067\u306f\u305d\u308c\u307b\u3069\u7d30\u304b\u3044\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u306a\u3044\u50be\u5411\u304c\u3042\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u52b9\u679c\u7684\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u5b8c\u6210\u3057\u305f\u30b3\u30fc\u30c9\u306f",(0,r.jsx)(n.code,{children:"SliderValuesTutorial_02.h"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.admonition,{title:"\u30a8\u30af\u30b5\u30b5\u30a4\u30ba",type:"danger",children:(0,r.jsxs)(n.p,{children:["\u3078\u306e\u547c\u3073\u51fa\u3057\u306e\u5024\u3092\u5909\u3048\u3066\u307f\u308b\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a2d948c662c1f636810d3125d8b3f0d47",title:"\u5024\u306e\u5206\u5e03\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30ad\u30e5\u30fc\u4fc2\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u3002",children:"Slider::setSkewFactorFromMidPoint()"}),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u3055\u307e\u3056\u307e\u306a\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u30b5\u30a4\u30ba\u3092\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u306eAPI\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u3001\u4ed6\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3092\u8a66\u3057\u3066\u307f\u308b\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u7c21\u7d20\u5316",children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u30fb\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u7c21\u7d20\u5316"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u793a\u3057\u305f\u3088\u3046\u306a\u30ea\u30b9\u30ca\u30fc\u3084\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30bf\u30fc\u306e\u30d1\u30e9\u30c0\u30a4\u30e0\u3092\u4f7f\u3046\u4ee3\u308f\u308a\u306b\u3001\u6700\u65b0\u306e C++ \u6a19\u6e96\u306e\u30e9\u30e0\u30c0\u95a2\u6570\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5358\u7d14\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u8907\u96d1\u306a\u5b9f\u88c5\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044\u5358\u7d14\u306a\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306b\u306f\u7279\u306b\u52b9\u679c\u7684\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u307e\u305a\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a1977aeac9b4363e8ed0cac0ac103055a",children:"Slider::Listener"}),"\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u3001\u6b21\u306e\u3088\u3046\u306bMainContentComponent\u30af\u30e9\u30b9\u306e\u5b9a\u7fa9\u3092\u5fa9\u5143\u3059\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class MainContentComponent   : public juce::Component\n{\npublic:\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b21\u306b\u3001MainContentComponent\u3092\u30ea\u30b9\u30ca\u30fc\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001MainContentComponent\u3092",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30e9\u30e0\u30c0\u95a2\u6570\u3092",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html#a680d007f6a824a28a60aa05b4045e794",title:"\u3053\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30e9\u30e0\u30c0\u3092\u4ee3\u5165\u3057\u3066\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",children:"Slider::onValueChange"}),"\u30d8\u30eb\u30d1\u30fc\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'    MainContentComponent()\n    {\n        addAndMakeVisible (frequencySlider);\n        frequencySlider.setRange (50, 5000.0);\n        frequencySlider.setTextValueSuffix (" Hz");\n        frequencySlider.onValueChange = [this] { durationSlider.setValue (1.0 / frequencySlider.getValue(), juce::dontSendNotification); };\n \n        addAndMakeVisible (frequencyLabel);\n        frequencyLabel.setText ("Frequency", juce::dontSendNotification);\n        frequencyLabel.attachToComponent (&frequencySlider, true);\n \n        addAndMakeVisible (durationSlider);\n        durationSlider.setRange (1.0 / frequencySlider.getMaximum(),\n                                 1.0 / frequencySlider.getMinimum());\n        durationSlider.setTextValueSuffix (" s");\n        durationSlider.onValueChange = [this] { frequencySlider.setValue (1.0 / durationSlider.getValue(), juce::dontSendNotification); };\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u306e\u5024\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u308b\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u30b3\u30fc\u30c9\u306e\u5b9f\u88c5\u306f",(0,r.jsx)(n.code,{children:"SliderValuesTutorial_03.h"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider.html",title:"\u5024\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002",children:"Slider"}),"\u30af\u30e9\u30b9\u3067\u5b66\u3093\u3060\u3002\u7279\u306b\u79c1\u305f\u3061\u306f\u5b66\u3093\u3060\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u7279\u5b9a\u306e\u7bc4\u56f2\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.li,{children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u306e\u5909\u5316\u306b\u3069\u3046\u5bfe\u5fdc\u3059\u308b\u304b"}),"\n",(0,r.jsx)(n.li,{children:"\u5bfe\u6570\u76ee\u76db\u308a\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u50be\u304d\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_combo_box/",children:"Tutorial: The ComboBox class"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_label/",children:"Tutorial: The Label class"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_radio_buttons_checkboxes/",children:"Tutorial: Radio buttons and checkboxes"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var r=i(6540);const t={},l=r.createContext(t);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);