"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[6392],{7181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"interface-design/tutorial_rectangle_advanced","title":"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af","description":"\u30b7\u30f3\u30d7\u30eb\u304b\u3064\u5f37\u529b\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308c\u3070\u3001\u30d0\u30b0\u304c\u5c11\u306a\u304f\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3067\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u77e9\u5f62\u3092\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u3067\u4f55\u5ea6\u304b\u7d30\u5206\u5316\u3057\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5168\u4f53\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u6e80\u305f\u3057\u307e\u3059\u3002","source":"@site/docs/interface-design/tutorial_rectangle_advanced.mdx","sourceDirName":"interface-design","slug":"/interface-design/tutorial_rectangle_advanced","permalink":"/juce-tutorial-ja/interface-design/tutorial_rectangle_advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_rectangle_advanced.mdx","tags":[{"inline":true,"label":"\u4e2d\u7d1a","permalink":"/juce-tutorial-ja/tags/\u4e2d\u7d1a"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af","sidebar_position":5,"tags":["\u4e2d\u7d1a"]},"sidebar":"tutorialSidebar","previous":{"title":"\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9","permalink":"/juce-tutorial-ja/interface-design/tutorial_point_line_rectangle"},"next":{"title":"FlexBox\u3068Grid\u3092\u4f7f\u3063\u305f\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6GUI\u30ec\u30a4\u30a2\u30a6\u30c8","permalink":"/juce-tutorial-ja/interface-design/tutorial_flex_box_grid"}}');var r=t(4848),s=t(8453);const a={title:"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af",sidebar_position:5,tags:["\u4e2d\u7d1a"]},i="\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af",c={},d=[{value:"\u30b9\u30bf\u30fc\u30c8",id:"\u30b9\u30bf\u30fc\u30c8",level:2},{value:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u9577\u65b9\u5f62\u30ec\u30a4\u30a2\u30a6\u30c8",id:"\u9577\u65b9\u5f62\u30ec\u30a4\u30a2\u30a6\u30c8",level:2},{value:"\u4f1d\u7d71\u7684\u306a\u30ec\u30a4\u30a2\u30a6\u30c8",id:"\u4f1d\u7d71\u7684\u306a\u30ec\u30a4\u30a2\u30a6\u30c8",level:3},{value:"\u9577\u65b9\u5f62\u306e\u7d30\u5206\u5316\u306b\u3088\u308b\u30ec\u30a4\u30a2\u30a6\u30c8",id:"\u9577\u65b9\u5f62\u306e\u7d30\u5206\u5316\u306b\u3088\u308b\u30ec\u30a4\u30a2\u30a6\u30c8",level:3},{value:"\u30a2\u30a4\u30c6\u30e0\u306e\u4e26\u3073\u66ff\u3048",id:"\u30a2\u30a4\u30c6\u30e0\u306e\u4e26\u3073\u66ff\u3048",level:3},{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b5\u30a4\u30ba\u5909\u66f4",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b5\u30a4\u30ba\u5909\u66f4",level:3},{value:"\u305d\u306e\u4ed6\u306e\u30b7\u30ca\u30ea\u30aa",id:"\u305d\u306e\u4ed6\u306e\u30b7\u30ca\u30ea\u30aa",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CaptionImage:t,SourcePageLink:o}=n;return t||h("CaptionImage",!0),o||h("SourcePageLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u9ad8\u5ea6\u306agui\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af",children:"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af"})}),"\n",(0,r.jsx)(o,{path:"tutorial_rectangle_advanced"}),"\n",(0,r.jsx)(n.p,{children:"\u30b7\u30f3\u30d7\u30eb\u304b\u3064\u5f37\u529b\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308c\u3070\u3001\u30d0\u30b0\u304c\u5c11\u306a\u304f\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3067\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u77e9\u5f62\u3092\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u3067\u4f55\u5ea6\u304b\u7d30\u5206\u5316\u3057\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5168\u4f53\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u6e80\u305f\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1a\u4e2d\u7d1a"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,r.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html",title:"\u77e9\u5f62\u3092\u7ba1\u7406\u3057\u3001\u305d\u306e\u77e9\u5f62\u306b\u5bfe\u3057\u3066\u5e7e\u4f55\u5b66\u7684\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3002",children:"Rectangle"}),",",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classTextButton.html",title:"\u6a19\u6e96\u7684\u306a\u83f1\u5f62\u306e\u80cc\u666f\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u4e26\u3079\u305f\u30dc\u30bf\u30f3\u3002",children:"TextButton"}),",",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/namespaceColours.html",title:"\u5b9a\u7fa9\u6e08\u307f\u306e\u540d\u524d\u4ed8\u304d\u8272\u306e\u30bb\u30c3\u30c8\u3092\u542b\u3080\uff08\u307b\u3068\u3093\u3069\u306f\u6a19\u6e96\u7684\u306aHTML\u30ab\u30e9\u30fc\uff09\u3002",children:"Colours"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30b9\u30bf\u30fc\u30c8",children:"\u30b9\u30bf\u30fc\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u3053\u3061\u3089\u304b\u3089\uff1a",(0,r.jsx)(n.a,{href:"https://docs.juce.com/tutorials/PIPs/RectangleAdvancedTutorial.zip",children:"PIP"}),"|",(0,r.jsx)(n.a,{href:"https://docs.juce.com/tutorials/ZIPs/RectangleAdvancedTutorial.zip",children:"ZIP"}),".\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u89e3\u51cd\u3057\u3001\u6700\u521d\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(n.a,{href:"../../getting-started/tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u5c11\u6570\u306e\u30dc\u30bf\u30f3\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3001\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f\u3001\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u3068\u3057\u3066\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001JUCE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3042\u308c\u3070\u3069\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002IDE\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u30e1\u30a4\u30f3\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u6b21\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot1.png",caption:"\u30b7\u30f3\u30d7\u30eb\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30ec\u30a4\u30a2\u30a6\u30c8"}),"\n",(0,r.jsx)(n.h2,{id:"\u9577\u65b9\u5f62\u30ec\u30a4\u30a2\u30a6\u30c8",children:"\u9577\u65b9\u5f62\u30ec\u30a4\u30a2\u30a6\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30e1\u30a4\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u3044\u304f\u3064\u304b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A",(0,r.jsx)(n.em,{children:"\u30d8\u30c3\u30c0\u30fc"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30bf\u30a4\u30c8\u30eb\u3084\u30c4\u30fc\u30eb\u30d0\u30fc\u3092\u542b\u3080\u304b\u3082\u3057\u308c\u306a\u3044\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["A",(0,r.jsx)(n.em,{children:"\u30d5\u30c3\u30bf\u30fc"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u3059\u308b\u4ed6\u306e\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["A",(0,r.jsx)(n.em,{children:"\u30b5\u30a4\u30c9\u30d0\u30fc"}),"\u3053\u308c\u306f\u3001\u4e00\u9023\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3084\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u542b\u3080\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306f",(0,r.jsx)(n.code,{children:"MainContentComponent"}),"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf (",(0,r.jsx)(n.a,{href:"../tutorial_component_parents_children/",children:"Tutorial: Parent and child components"}),"\u305d\u3057\u3066",(0,r.jsx)(n.a,{href:"../tutorial_colours/",children:"Tutorial: Colours in JUCE"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'    MainContentComponent()\n    {\n        header.setColour (juce::TextButton::buttonColourId, juce::Colours::cornflowerblue);\n        header.setButtonText ("Header");\n        addAndMakeVisible (header);\n \n        footer.setColour (juce::TextButton::buttonColourId, juce::Colours::cornflowerblue);\n        footer.setButtonText ("Footer");\n        addAndMakeVisible (footer);\n \n        sidebar.setColour (juce::TextButton::buttonColourId, juce::Colours::grey);\n        sidebar.setButtonText ("Sidebar");\n        addAndMakeVisible (sidebar);\n \n        limeContent.setColour (juce::TextButton::buttonColourId, juce::Colours::lime);\n        addAndMakeVisible (limeContent);\n \n        grapefruitContent.setColour (juce::TextButton::buttonColourId, juce::Colours::yellowgreen);\n        addAndMakeVisible (grapefruitContent);\n \n        lemonContent.setColour (juce::TextButton::buttonColourId, juce::Colours::yellow);\n        addAndMakeVisible (lemonContent);\n \n        orangeContent.setColour (juce::TextButton::buttonColourId, juce::Colours::orange);\n        addAndMakeVisible (orangeContent);\n \n        setSize (400, 400);\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9f\u969b\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306f\u3001Component::resized()\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3066\u884c\u3046\u306e\u304c\u4e00\u822c\u7684\u3060\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4f1d\u7d71\u7684\u306a\u30ec\u30a4\u30a2\u30a6\u30c8",children:"\u4f1d\u7d71\u7684\u306a\u30ec\u30a4\u30a2\u30a6\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u5f93\u6765\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba\u3092\u8a08\u7b97\u3057\u3001\u305d\u308c\u3089\u306e\u5408\u8a08\u304c\u5e38\u306b\u6b63\u3057\u3044\u30b5\u30a4\u30ba\u306b\u306a\u308b\u3088\u3046\u306b\u6ce8\u610f\u3057\u306a\u304c\u3089\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3057\u3066\u3044\u305f\u3002\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30e1\u30a4\u30f3\u90e8\u5206\u306b\u30ab\u30e9\u30fc\u30dc\u30bf\u30f3\u3092\u914d\u7f6e\u3059\u308b\u306e\u3067\u3055\u3048\u3001\u9762\u5012\u306b\u306a\u308b\u3057\u3001\u9593\u9055\u3044\u3084\u3059\u3044\u3002\u540c\u3058\u5927\u304d\u3055\u306e\u30dc\u30bf\u30f3\u30924\u3064\u4e26\u3079\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"//...\n    limeContent      .setBounds (0, 0,  200, 24);\n    grapefruitContent.setBounds (0, 24, 200, 24);\n    lemonContent     .setBounds (0, 48, 200, 24);\n    orangeContent    .setBounds (0, 72, 200, 24);\n//...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["(\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u66f8\u304f\u306b\u3042\u305f\u3063\u3066\u3001\u6700\u7d42\u7684\u306b",(0,r.jsx)(n.code,{children:"orangeContent"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30922\u5ea6\u9593\u9055\u3048\u305f\uff01)"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5c11\u306a\u304f\u3068\u3082\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u52b4\u529b\u3092\u3082\u3063\u3068\u91cd\u8981\u306a\u3053\u3068\u306b\u96c6\u4e2d\u3067\u304d\u308b\u306e\u306b\u3001\u8a08\u7b97\u306b\u306f\u6642\u9593\u304c\u304b\u304b\u308b\uff01\u305d\u306e",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html",title:"\u77e9\u5f62\u3092\u7ba1\u7406\u3057\u3001\u305d\u306e\u77e9\u5f62\u306b\u5bfe\u3057\u3066\u5e7e\u4f55\u5b66\u7684\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3002",children:"Rectangle"}),"\u30af\u30e9\u30b9\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u4f5c\u696d\u3092\u3088\u308a\u67d4\u8edf\u306b\u3001\u3042\u308b\u610f\u5473\u3067\u306f\u7c21\u5358\u306b\u3059\u308b\u305f\u3081\u306e\u3001\u30b7\u30f3\u30d7\u30eb\u304b\u3064\u5f37\u529b\u306a\u6a5f\u80fd\u3092\u3044\u304f\u3064\u304b\u63d0\u4f9b\u3057\u3066\u3044\u308b\u3002\u3053\u308c\u306f\u3001\u30e1\u30a4\u30f3\u306e\u77e9\u5f62\u3092\u3088\u308a\u5c0f\u3055\u306a\u30b5\u30d6\u77e9\u5f62\u306b\u7d30\u5206\u5316\u3059\u308b\u3082\u306e\u3067\u3042\u308b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9577\u65b9\u5f62\u306e\u7d30\u5206\u5316\u306b\u3088\u308b\u30ec\u30a4\u30a2\u30a6\u30c8",children:"\u9577\u65b9\u5f62\u306e\u7d30\u5206\u5316\u306b\u3088\u308b\u30ec\u30a4\u30a2\u30a6\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u30e1\u30a4\u30f3\u306e\u9577\u65b9\u5f62\u3092\u7d30\u5206\u5316\u3057\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u65b9\u6cd5\u306f\u3001\u5f93\u6765\u306e\u65b9\u6cd5\u3068\u540c\u7b49\u306b\u601d\u3048\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u3002\u3057\u304b\u3057\u3001\u591a\u304f\u306e\u5229\u70b9\u304c\u3042\u308b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u305d\u306e\u305f\u3081\u3001\u4f7f\u7528\u91cf\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002",(0,r.jsx)(n.em,{children:"\u30de\u30b8\u30c3\u30af\u30ca\u30f3\u30d0\u30fc"}),"(\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3055\u308c\u305f\u5024)\u304c\u30b3\u30fc\u30c9\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u3068\u3001\u5c06\u6765\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u5909\u66f4\u3057\u305f\u308a\u4fdd\u5b88\u3057\u305f\u308a\u3059\u308b\u306e\u304c\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u591a\u304f\u306e\u5834\u5408\u3001\u30ec\u30a4\u30a2\u30a6\u30c8\u306f\u3001\u5024\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u30b3\u30fc\u30c9\u306e\u9806\u5e8f\u3092\u5909\u3048\u308b\u3060\u3051\u3067\u5909\u66f4\u3067\u304d\u308b\uff01"}),"\n",(0,r.jsx)(n.li,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u304c\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u306f\u307f\u51fa\u3057\u305f\u308a\u3001\u307e\u3063\u305f\u304f\u57cb\u307e\u3089\u306a\u304b\u3063\u305f\u308a\u3059\u308b\u3088\u308a\u3082\u3001\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30da\u30fc\u30b9\u3092\u6b63\u78ba\u306b\u57cb\u3081\u308b\u65b9\u304c\u306f\u308b\u304b\u306b\u7c21\u5358\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30b5\u30a4\u30ba\u5909\u66f4\u53ef\u80fd\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6271\u3044\u3001\u7279\u5b9a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u5c11\u306a\u304f\u3068\u3082\u4e00\u5b9a\u306e\u30b5\u30a4\u30ba\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3068\u3044\u3046\u30eb\u30fc\u30eb\u3092\u4f5c\u308b\u65b9\u304c\u7c21\u5358\u3060\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u306e\u30b3\u30fc\u30c9\u306f",(0,r.jsx)(n.code,{children:"MainContentComponent::resized()"}),"\u95a2\u6570\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"    void resized() override\n    {\n        auto area = getLocalBounds();\n \n        auto headerFooterHeight = 36;\n        header.setBounds (area.removeFromTop    (headerFooterHeight));\n        footer.setBounds (area.removeFromBottom (headerFooterHeight));\n \n        auto sidebarWidth = 80;\n        sidebar.setBounds (area.removeFromLeft (sidebarWidth)); // [2]\n \n        auto contentItemHeight = 24;\n        orangeContent.setBounds     (area.removeFromTop (contentItemHeight));\n        limeContent.setBounds       (area.removeFromTop (contentItemHeight)); // [1]\n        grapefruitContent.setBounds (area.removeFromTop (contentItemHeight));\n        lemonContent.setBounds      (area.removeFromTop (contentItemHeight));\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u95a2\u6570\u306e\u6700\u521d\u306e\u6570\u884c\u3092\u8a73\u3057\u304f\u898b\u3066\u307f\u3088\u3046\u3002\u6700\u521d\u306b",(0,r.jsx)(n.em,{children:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d0\u30a6\u30f3\u30ba"}),"Component::getLocalBounds()\u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u5e38\u306b\u3001\u4f4d\u7f6e (0, 0) \u306b\u3042\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u540c\u3058\u5e45\u3068\u9ad8\u3055\u306e\u77e9\u5f62\u3092\u8fd4\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        auto area = getLocalBounds();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u305f\u3081\u306b\u7d30\u5206\u5316\u3059\u308b\u77e9\u5f62\u3067\u3042\u308b\u3002\u6700\u521d\u306e\u5206\u5272\u306f\u30d8\u30c3\u30c0\u30fc\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u3053\u3068\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        header.setBounds (area.removeFromTop    (headerFooterHeight));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5168\u4f53\u3092\u8868\u3059\u9577\u65b9\u5f62\u3092\u53d6\u308a\u51fa\u3057\u3001\u52b9\u679c\u7684\u306b2\u3064\u306e\u9577\u65b9\u5f62\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u305d\u306e",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a3fbd4e7e1df5336980fb7ec5e752a222",title:"\u3053\u306e\u77e9\u5f62\u306e\u4e0a\u90e8\u304b\u3089\u30b9\u30c8\u30ea\u30c3\u30d7\u3092\u524a\u9664\u3057\u3001\u3053\u306e\u77e9\u5f62\u3092\u6307\u5b9a\u3055\u308c\u305f\u91cf\u3060\u3051\u7e2e\u5c0f\u3057\u3001r...",children:"Rectangle::removeFromTop()"}),"\u95a2\u6570\u306f\u3001\u5143\u306e\u77e9\u5f62\u306e\u4f4d\u7f6e\u306b\u3001\u540c\u3058\u5e45\u3067\u3001\u5f15\u6570\u3067\u8981\u6c42\u3055\u308c\u305f\u9ad8\u3055\u3060\u3051\u306e\u77e9\u5f62\u3092\u8fd4\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u9ad8\u305536\u30d4\u30af\u30bb\u30eb\u306e\u77e9\u5f62\u3092\u8981\u6c42\u3057\u3066\u3044\u308b\u3002\u3053\u306e\u95a2\u6570\u304c\u884c\u3046\u3082\u3046\u3072\u3068\u3064\u306e\u3053\u3068\u306f",(0,r.jsx)(n.em,{children:"\u30e2\u30c7\u30a3\u30d5\u30a1\u30a4"}),"\u5143\u306e\u77e9\u5f62\u304b\u3089\u5148\u307b\u3069\u8fd4\u3057\u305f\u77e9\u5f62\u3092\u53d6\u308a\u9664\u304f\u3002\u57fa\u672c\u7684\u306b\u306f\u3001\u77e9\u5f62\u3092\u4e0a\u304b\u308936\u30d4\u30af\u30bb\u30eb\u3067\u30b9\u30e9\u30a4\u30b9\u3057\u3001\u4e0a\u306e\u77e9\u5f62\u3092\u8fd4\u3057\u3001\u5143\u306e\u77e9\u5f62\u3092\u4e0b\u306e\u77e9\u5f62\u3068\u7b49\u3057\u304f\u306a\u308b\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5358\u4f53\u3067\u306f\u3053\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot2.png",caption:"\u6700\u521d\u306e\u30b5\u30d6\u30c7\u30a3\u30d3\u30b8\u30e7\u30f3"}),"\n",(0,r.jsx)(n.p,{children:"\u756a\u76ee\u306e\u7d30\u76ee\u306f\u3001\u30d5\u30c3\u30bf\u30fc\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3067\u3042\u308b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        footer.setBounds (area.removeFromBottom (headerFooterHeight));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a6f7d3a88adfc3b3bf699ca4ce5b9e6c0",title:"\u3053\u306e\u77e9\u5f62\u306e\u5e95\u8fba\u304b\u3089\u5e2f\u3092\u53d6\u308a\u9664\u304d\u3001\u3053\u306e\u77e9\u5f62\u3092\u6307\u5b9a\u3055\u308c\u305f\u91cf\u3060\u3051\u7e2e\u5c0f\u3059\u308b\u3002",children:"Rectangle::removeFromBottom()"}),"\u95a2\u6570\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a3fbd4e7e1df5336980fb7ec5e752a222",title:"\u3053\u306e\u77e9\u5f62\u306e\u4e0a\u90e8\u304b\u3089\u30b9\u30c8\u30ea\u30c3\u30d7\u3092\u524a\u9664\u3057\u3001\u3053\u306e\u77e9\u5f62\u3092\u6307\u5b9a\u3055\u308c\u305f\u91cf\u3060\u3051\u7e2e\u5c0f\u3057\u3001r...",children:"Rectangle::removeFromTop()"}),"\u305f\u3060\u3057\u3001\u30e1\u30a4\u30f3\u77e9\u5f62\u306e\u4e0b\u90e8\u304b\u3089\u77e9\u5f62\u3092\u524a\u9664\u3057\u3001\u4e0a\u90e8\u306e\u77e9\u5f62\u3092\u4fdd\u6301\u3059\u308b\u3002\u3053\u306e\u6642\u70b9\u3067\u3001\u79c1\u305f\u3061\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot3.png",caption:"\u7b2c\u4e8c\u5206\u8b72\u5730"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6b21\u306b\u3001\u6b8b\u308a\u306e\u9577\u65b9\u5f62\u306e\u5de6\u304b\u308980\u30d4\u30af\u30bb\u30eb\u3092\u524a\u9664\u3057\u3066\u30b5\u30a4\u30c9\u30d0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6b21\u306b\u3001\u6b8b\u308a\u306e\u77e9\u5f62\u3092",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a3fbd4e7e1df5336980fb7ec5e752a222",title:"\u3053\u306e\u77e9\u5f62\u306e\u4e0a\u90e8\u304b\u3089\u30b9\u30c8\u30ea\u30c3\u30d7\u3092\u524a\u9664\u3057\u3001\u3053\u306e\u77e9\u5f62\u3092\u6307\u5b9a\u3055\u308c\u305f\u91cf\u3060\u3051\u7e2e\u5c0f\u3057\u3001r...",children:"Rectangle::removeFromTop()"}),"\u95a2\u6570\u3067\u3042\u308b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u5f8c\u306b\u3001\u5b8c\u5168\u306b\u30ec\u30a4\u30a2\u30a6\u30c8\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b8c\u6210\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30a2\u30a4\u30c6\u30e0\u306e\u4e26\u3073\u66ff\u3048",children:"\u30a2\u30a4\u30c6\u30e0\u306e\u4e26\u3073\u66ff\u3048"}),"\n",(0,r.jsxs)(n.p,{children:["\u524d\u8ff0\u3057\u305f\u3088\u3046\u306b\u3001\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3048\u3070\u30a2\u30a4\u30c6\u30e0\u306e\u4e26\u3073\u66ff\u3048\u306f\u5b9f\u306b\u7c21\u5358\u3060\u3002\u4f8b\u3048\u3070\u3001\u30aa\u30ec\u30f3\u30b8\u8272\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u756a\u4e0a\u306b\u79fb\u52d5\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",(0,r.jsx)(n.code,{children:"resized()"}),"\u6a5f\u80fd[1]:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        auto contentItemHeight = 24;\n        orangeContent.setBounds     (area.removeFromTop (contentItemHeight));\n        limeContent.setBounds       (area.removeFromTop (contentItemHeight)); // [1]\n        grapefruitContent.setBounds (area.removeFromTop (contentItemHeight));\n        lemonContent.setBounds      (area.removeFromTop (contentItemHeight));\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u3093\u306a\u611f\u3058\u3060\uff1a"}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot4.png",caption:"\u30a2\u30a4\u30c6\u30e0\u306e\u4e26\u3073\u66ff\u3048"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u56fa\u5b9a\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u65b9\u304c\u660e\u3089\u304b\u306b\u30a8\u30ec\u30ac\u30f3\u30c8\u3060\u3002\u53ef\u5909\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u3055\u3089\u306b\u6709\u52b9\u3067\u3042\u308b\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9805\u76ee\u306e\u4e26\u3073\u66ff\u3048\u3060\u3051\u3067\u306f\u30b5\u30a4\u30c9\u30d0\u30fc\u3092\u53f3\u5074\u306b\u79fb\u52d5\u3055\u305b\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a67c1ae2bf4753bda71894271dc94b4f6",title:"\u3053\u306e\u77e9\u5f62\u306e\u53f3\u7aef\u304b\u3089\u30b9\u30c8\u30ea\u30c3\u30d7\u3092\u524a\u9664\u3057\u3001\u3053\u306e\u77e9\u5f62\u3092\u6307\u5b9a\u3055\u308c\u305f ... \u3060\u3051\u7e2e\u5c0f\u3059\u308b\u3002",children:"Rectangle::removeFromRight()"}),"\u95a2\u6570\u3067\u306f\u306a\u304f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a6f09929fd89d447eb230c170446788ac",title:"\u3053\u306e\u77e9\u5f62\u306e\u5de6\u7aef\u304b\u3089\u30b9\u30c8\u30ea\u30c3\u30d7\u3092\u524a\u9664\u3057\u3001\u3053\u306e\u77e9\u5f62\u3092\u6307\u5b9a\u3055\u308c\u305f\u9577\u3055\u3060\u3051\u7e2e\u5c0f\u3059\u308b\u3002",children:"Rectangle::removeFromLeft()"})," [2]:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"        auto sidebarWidth = 80;\n        sidebar.setBounds (area.removeFromLeft (sidebarWidth)); // [2]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4eca\u306f\u3053\u3046\u306a\u3063\u3066\u3044\u308b\uff1a"}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot5.png",caption:"\u30b5\u30a4\u30c9\u30d0\u30fc\u3092\u53f3\u306b\u79fb\u52d5"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b5\u30a4\u30ba\u5909\u66f4",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b5\u30a4\u30ba\u5909\u66f4"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u5f97\u3089\u308c\u308b\u3082\u3046\u3072\u3068\u3064\u306e\u5229\u70b9\u306f\u3001\u30ea\u30b5\u30a4\u30ba\u304c\u3057\u3070\u3057\u3070\u300c\u3046\u307e\u304f\u3044\u304f\u300d\u3053\u3068\u3060\u3002\u3053\u308c\u306f\u3001\u5e45\u3092\u5e83\u304f\u3001\u9ad8\u3055\u3092\u4f4e\u304f\u3057\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot6.png",caption:"\u30b7\u30f3\u30d7\u30eb\u306a\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u30b5\u30a4\u30ba\u5909\u66f4"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u4e00\u90e8\u307e\u305f\u306f\u5168\u90e8\u3092\u30d7\u30ed\u30dd\u30fc\u30b7\u30e7\u30ca\u30eb\u306b\u3057\u305f\u3044\u5834\u5408\u3001\u30b3\u30fc\u30c9\u306b\u7d44\u307f\u8fbc\u3080\u306e\u306f\u7c21\u5358\u3060\u3002\u4f8b\u3048\u3070\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u5e45\u3092\u5e38\u306b\u5168\u4f53\u306e4\u5206\u306e1\u306b\u3057\u305f\u3044\u5834\u5408\u306a\u3069\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"sidebar.setBounds (area.removeFromRight (area.getWidth() / 4));\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3092\u8a66\u3057\u3066\u307f\u308c\u3070\u3001\u6709\u7528\u306a\u4e0b\u9650\u304c\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3060\u308d\u3046\u3002\u3053\u306e\u65b9\u6cd5\u3092\u53d6\u308a\u5165\u308c\u308b\u306e\u3082\u7c21\u5358\u3067\u3059\u3002\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u5e45\u3092\u5168\u5e45\u306e4\u5206\u306e1\u306b\u8a2d\u5b9a\u3057\u300180\u30d4\u30af\u30bb\u30eb\u3092\u4e0b\u9650\u3068\u3059\u308b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"sidebar.setBounds (area.removeFromRight (juce::jmax (80, area.getWidth() / 4)));\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u30a8\u30af\u30b5\u30b5\u30a4\u30ba",type:"danger",children:(0,r.jsxs)(n.p,{children:["\u3055\u3089\u306b\u7570\u306a\u308b\u8272\u306e\u30dc\u30bf\u30f3\u3092\u3044\u304f\u3064\u304b\u4f5c\u6210\u3057\u3001\u305d\u308c\u3089\u3092\u6c34\u5e73\u306b\u4e26\u3079\u3066\u3001\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u3002",(0,r.jsx)(n.code,{children:"orangeContent"}),",",(0,r.jsx)(n.code,{children:"limeContent"}),",",(0,r.jsx)(n.code,{children:"grapefruitContent"}),"\u305d\u3057\u3066",(0,r.jsx)(n.code,{children:"lemonContent"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3002\u6b8b\u308a\u306e\u5e45\u3044\u3063\u3071\u3044\u306b\u306a\u308b\u3088\u3046\u306b\u3059\u308b\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u305d\u306e\u4ed6\u306e\u30b7\u30ca\u30ea\u30aa",children:"\u305d\u306e\u4ed6\u306e\u30b7\u30ca\u30ea\u30aa"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u3053\u307e\u3067\u306e\u4f8b\u3067\u306f\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u6b21\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u914d\u7f6e\u3059\u308b\u305f\u3081\u306b\u3001\u6b8b\u308a\u306e\u77e9\u5f62\u3092\u7d30\u5206\u5316\u3057\u7d9a\u3051\u3066\u304d\u305f\u3002\u30b5\u30d6\u77e9\u5f62\u306e1\u3064\u3092\u4fdd\u5b58\u3057\u3066\u3001\u4ee3\u308f\u308a\u306b\u305d\u308c\u3092\u7d30\u5206\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u30ea\u30b9\u30c8\u306b\u9805\u76ee\u3092\u914d\u7f6e\u3059\u308b\u306b\u306f",(0,r.jsx)(n.strong,{children:"\u5185"}),"\u305d\u306e",(0,r.jsx)(n.em,{children:"\u30b5\u30a4\u30c9\u30d0\u30fc"}),"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u77e9\u5f62\u3092\u4e00\u6642\u7684\u306b\u4fdd\u5b58\u3057\u3001\u305d\u308c\u3092\u7d30\u5206\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u8aac\u660e\u3059\u308b\u305f\u3081\u306b\u3001\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3055\u3089\u306b3\u3064\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002[3],[4]\u305d\u3057\u3066[5]:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"private:\n    juce::TextButton header;\n    juce::TextButton sidebar;\n \n    juce::TextButton sideItemA; // [3]\n    juce::TextButton sideItemB; // [4]\n    juce::TextButton sideItemC; // [5]\n \n    juce::TextButton limeContent;\n    juce::TextButton grapefruitContent;\n    juce::TextButton lemonContent;\n    juce::TextButton orangeContent;\n    juce::TextButton footer;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306b\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u30dc\u30bf\u30f3\u304b\u3089\u30c6\u30ad\u30b9\u30c8\u3092\u524a\u9664\u3057\u306a\u304c\u3089\u3001\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u305d\u308c\u3089\u3092\u8a2d\u5b9a\u3059\u308b\u3002[7]:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'//...\n    sidebar.setColour (juce::TextButton::buttonColourId, juce::Colours::grey);\n    // [7]\n    addAndMakeVisible (sidebar);\n \n    sideItemA.setColour (juce::TextButton::buttonColourId, juce::Colours::maroon);\n    sideItemB.setColour (juce::TextButton::buttonColourId, juce::Colours::maroon);\n    sideItemC.setColour (juce::TextButton::buttonColourId, juce::Colours::maroon);\n    sideItemA.setButtonText ("Item A");\n    sideItemB.setButtonText ("Item B");\n    sideItemC.setButtonText ("Item C");\n    addAndMakeVisible (sideItemA);\n    addAndMakeVisible (sideItemB);\n    addAndMakeVisible (sideItemC);\n//...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u5f8c\u306b",(0,r.jsx)(n.code,{children:"resized()"}),"\u95a2\u6570\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5909\u66f4\u3059\u308b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"void resized() override\n{\n    auto area = getLocalBounds();\n \n    auto headerFooterHeight = 36;\n    header.setBounds (area.removeFromTop    (headerFooterHeight));\n    footer.setBounds (area.removeFromBottom (headerFooterHeight));\n \n    auto sideBarArea = area.removeFromRight (juce::jmax (80, area.getWidth() / 4));\n    sidebar.setBounds (sideBarArea);\n \n    auto sideItemHeight = 40;\n    auto sideItemMargin = 5;\n    sideItemA.setBounds (sideBarArea.removeFromTop (sideItemHeight).reduced (sideItemMargin));\n    sideItemB.setBounds (sideBarArea.removeFromTop (sideItemHeight).reduced (sideItemMargin));\n    sideItemC.setBounds (sideBarArea.removeFromTop (sideItemHeight).reduced (sideItemMargin));\n \n    auto contentItemHeight = 24;\n    orangeContent.setBounds     (area.removeFromTop (contentItemHeight));\n    limeContent.setBounds       (area.removeFromTop (contentItemHeight));\n    grapefruitContent.setBounds (area.removeFromTop (contentItemHeight));\n    lemonContent.setBounds      (area.removeFromTop (contentItemHeight));\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u306e\u4f7f\u7528\u306b\u3082\u6ce8\u76ee\u3057\u3066\u307b\u3057\u3044\u3002",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html#a5623a7886c63a08917b392c7bc1135a9",title:"\u3053\u306e\u77e9\u5f62\u3088\u308a\u6307\u5b9a\u3057\u305f\u91cf\u3060\u3051\u5c0f\u3055\u3044\u77e9\u5f62\u3092\u8fd4\u3059\u3002",children:"Rectangle::reduced()"}),"\u3053\u306e\u95a2\u6570\u306f\u77e9\u5f62\u306e\u7aef\u3092\u306f\u3081\u8fbc\u307f\u3001\u77e9\u5f62\u3092\u52b9\u679c\u7684\u306b\u30de\u30fc\u30b8\u30f3\u5185\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(t,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot7.png",caption:"\u3088\u308a\u6d17\u7df4\u3055\u308c\u305f\u5206\u8b72\u5730"}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle.html",title:"\u77e9\u5f62\u3092\u7ba1\u7406\u3057\u3001\u305d\u306e\u77e9\u5f62\u306b\u5bfe\u3057\u3066\u5e7e\u4f55\u5b66\u7684\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3002",children:"Rectangle"}),"\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u77e9\u5f62\u3092\u7d30\u5206\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u7279\u306b\u3001\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u3053\u3068\u3092\u898b\u3066\u304d\u305f\u3002\u3067\u304d\u308b\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u3088\u308a\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u30b3\u30fc\u30c9\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u30b3\u30fc\u30c9\u306e\u30de\u30b8\u30c3\u30af\u30ca\u30f3\u30d0\u30fc\u306e\u4f7f\u7528\u3092\u6e1b\u3089\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6700\u5c0f\u9650\u306e\u30b3\u30fc\u30c9\u5909\u66f4\u3067\u3001\u30ec\u30a4\u30a2\u30a6\u30c8\u4f4d\u7f6e\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u914d\u7f6e\u9806\u5e8f\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_component_parents_children/",children:"Tutorial: Parent and child components"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_look_and_feel_customisation/",children:"Tutorial: Customise the look and feel of your app"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_point_line_rectangle/",children:"Tutorial: The Point, Line, and Rectangle classes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_flex_box_grid/",children:"Tutorial: Responsive GUI layouts using FlexBox and Grid"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);