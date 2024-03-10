"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[6716],{7894:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>u});var r=n(4848),s=n(8453),o=n(3449),l=n(6378);const d={title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c82",sidebar_position:4,tags:["\u4e2d\u7d1a"]},c="\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c82\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",t={id:"getting-started/tutorial_code_basic_plugin",title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c82",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001",source:"@site/docs/getting-started/tutorial_code_basic_plugin.mdx",sourceDirName:"getting-started",slug:"/getting-started/tutorial_code_basic_plugin",permalink:"/juce-tutorial-ja/getting-started/tutorial_code_basic_plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/getting-started/tutorial_code_basic_plugin.mdx",tags:[{label:"\u4e2d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u4e2d\u7d1a"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c82",sidebar_position:4,tags:["\u4e2d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210 \u30d1\u30fc\u30c81",permalink:"/juce-tutorial-ja/getting-started/tutorial_create_projucer_basic_plugin"},next:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u305fProjucer\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",permalink:"/juce-tutorial-ja/getting-started/tutorial_choosing_projucer_template"}},a={},u=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",id:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",level:2},{value:"\u30b7\u30f3\u30d7\u30eb\u306aGUI\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",id:"\u30b7\u30f3\u30d7\u30eb\u306agui\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30d7\u30ed\u30bb\u30c3\u30b5\u30fb\u30af\u30e9\u30b9\u306b\u5236\u5fa1\u60c5\u5831\u3092\u6e21\u3059",id:"\u30d7\u30ed\u30bb\u30c3\u30b5\u30af\u30e9\u30b9\u306b\u5236\u5fa1\u60c5\u5831\u3092\u6e21\u3059",level:3},{value:"MIDI\u30ce\u30fc\u30c8\u306e\u4fee\u6b63",id:"midi\u30ce\u30fc\u30c8\u306e\u4fee\u6b63",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u95a2\u9023\u9805\u76ee",id:"\u95a2\u9023\u9805\u76ee",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"\u57fa\u672c\u7684\u306aaudiomidi\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b-\u30d1\u30fc\u30c82\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c82\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"}),"\n",(0,r.jsx)(l.A,{path:"tutorial_code_basic_plugin.html"}),"\n",(0,r.jsx)(i.p,{children:'\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001\nJUCE \u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\uff08VST3 \u3068 AudioUnit\uff09\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e Projucer \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u6700\u5f8c\u306b\u306f\u3001"Hello, World!" \u3068\u8a00\u3063\u3066\u3001\nCubase \u3084 REAPER \u306e\u3088\u3046\u306a VST3 \u30db\u30b9\u30c8\u306b\u30ed\u30fc\u30c9\u3067\u304d\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5b8c\u6210\u3057\u307e\u3059\u3002'}),"\n",(0,r.jsx)(i.p,{children:"\u30ec\u30d9\u30eb\uff1a\u4e2d\u7d1a"}),"\n",(0,r.jsx)(i.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,r.jsx)(i.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u5f62\u5f0f\uff1aVST, VST3, AU, Standalone"}),"\n",(0,r.jsxs)(i.p,{children:["\u30af\u30e9\u30b9\uff1a",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"}),",\n",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classAudioProcessor.html",children:"AudioProcessor"}),",\n",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classSlide.htmlr",children:"Slider"}),",\n",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classMidiMessage.html",children:"MidiMessage"}),",\n",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classMidiBuffer.html",children:"MidiBuffer"})]}),"\n",(0,r.jsx)(i.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,r.jsxs)(i.p,{children:["Projucer\u3092\u8d77\u52d5\u3057\u3001",(0,r.jsx)(i.strong,{children:"TutorialPlugin"})," \u3068\u3044\u3046\u540d\u524d\u3067\u65b0\u3057\u3044\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u305d\u306e\u65b9\u6cd5\u3092\u899a\u3048\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.jsx)(i.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(i.h2,{id:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",children:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsxs)(i.p,{children:["\u65b0\u3057\u304f\u4f5c\u6210\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u4e3b\u306b2\u3064\u306e\u30af\u30e9\u30b9\u304c\u542b\u307e\u308c\u307e\u3059\u3002\n",(0,r.jsx)(i.code,{children:"PluginProcessor"})," \u306f\u30aa\u30fc\u30c7\u30a3\u30aa\u3068 MIDI\u306eIO\u3068\u51e6\u7406\u30ed\u30b8\u30c3\u30af\u3092\u51e6\u7406\u3057\u3001",(0,r.jsx)(i.code,{children:"PluginEditor"})," \u306f\u753b\u9762\u4e0a\u306eGUI\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3084\u30d3\u30b8\u30e5\u30a2\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3\u3092\u51e6\u7406\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(i.p,{children:"\u3053\u306e2\u3064\u306e\u9593\u3067\u60c5\u5831\u3092\u3084\u308a\u53d6\u308a\u3059\u308b\u5834\u5408\u3001\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30a8\u30c7\u30a3\u30bf\u306e\u89aa\u3068\u8003\u3048\u308b\u306e\u304c\u30d9\u30b9\u30c8\u3067\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u306f1\u3064\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30a8\u30c7\u30a3\u30bf\u306f\u8907\u6570\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u5404\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u3078\u306e\u53c2\u7167\u3092\u6301\u3061\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30b9\u30ec\u30c3\u30c9\u306e\u60c5\u5831\u3084\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u7de8\u96c6\u3057\u305f\u308a\u3001\u30a2\u30af\u30bb\u30b9\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3053\u306e\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30b9\u30ec\u30c3\u30c9\u306b\u60c5\u5831\u3092\u8a2d\u5b9a\u3057\u305f\u308a\u53d6\u5f97\u3057\u305f\u308a\u3059\u308b\u306e\u306f\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u4ed5\u4e8b\u3067\u3042\u308a\u3001\u305d\u306e\u9006\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"PluginProcessor.cpp"})," \u3067\u7de8\u96c6\u3059\u308b\u4e3b\u306a\u95a2\u6570\u306f ",(0,r.jsx)(i.code,{children:"processBlock()"})," \u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002\n\u3053\u308c\u306f\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30fc\u30bf\u3068MIDI\u30c7\u30fc\u30bf\u306e\u4e21\u65b9\u3092\u53d7\u4fe1\u3057\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u51fa\u529b\u306b\u51fa\u529b\u3057\u307e\u3059\u3002\n",(0,r.jsx)(i.code,{children:"PluginEditor.cpp"})," \u30d5\u30a1\u30a4\u30eb\u3067\u5909\u66f4\u3059\u308b\u4e3b\u306a\u95a2\u6570\u306f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u3001\n\u3053\u3053\u3067\u30a6\u30a3\u30f3\u30c9\u30a6\u3068GUI\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u521d\u671f\u5316\u3057\u3066\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001",(0,r.jsx)(i.code,{children:"paint()"})," \u30e1\u30bd\u30c3\u30c9\u3067\u8ffd\u52a0\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3068\u30ab\u30b9\u30bf\u30e0GUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u63cf\u753b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(i.p,{children:["\u30a8\u30c7\u30a3\u30bf\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306b\u306f\u73fe\u5728\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3059\u308b ",(0,r.jsx)(i.code,{children:"setSize (400, 300)"})," \u3068\u3044\u3046\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u5358\u7d14\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306b\u3001",(0,r.jsx)(i.code,{children:"(200, 200)"})," \u306e\u5c0f\u3055\u306a\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"TutorialPluginAudioProcessorEditor::TutorialPluginAudioProcessorEditor (TutorialPluginAudioProcessor& p)\n    : AudioProcessorEditor (&p), audioProcessor (p)\n{\n    // \u3053\u3053\u3067\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3057\u307e\u3059\n    setSize (200, 200);\n}\n"})}),"\n",(0,r.jsx)(i.h3,{id:"\u30b7\u30f3\u30d7\u30eb\u306agui\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",children:"\u30b7\u30f3\u30d7\u30eb\u306aGUI\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,r.jsx)(i.p,{children:"MIDI\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u97f3\u91cf\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(i.p,{children:["\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u306bmidiVolume [1]\u3068\u3044\u3046\u65b0\u3057\u3044 ",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classSlider.html",children:"Slider"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u308a\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"class TutorialPluginAudioProcessorEditor : public juce::AudioProcessorEditor\n{\npublic:\n    TutorialPluginAudioProcessorEditor (TutorialPluginAudioProcessor&);\n    ~TutorialPluginAudioProcessorEditor();\n \n    //===================================================================\n    void paint (juce::Graphics&) override;\n    void resized() override;\n \nprivate:\n    // \u3053\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u306f\u3001\u7de8\u96c6\u8005\u304c\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u7d20\u65e9\u304f\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\n    // \u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30bb\u30c3\u30b5\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\n    TutorialPluginAudioProcessor& audioProcessor;\n \n    juce::Slider midiVolume; // [1]\n \n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (TutorialPluginAudioProcessorEditor)\n};\n"})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classAudioProcessorEditor.html",children:"AudioProcessorEditor"}),"\n\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u304a\u3044\u3066\u3001\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30a2\u30d7\u30ea\u306e ",(0,r.jsx)(i.em,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," \u3068\u540c\u3058\u5f79\u5272\u3092\u679c\u305f\u3057\u307e\u3059\u3002\n",(0,r.jsx)(i.a,{href:"../../graphics/tutorial_main_component/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30e1\u30a4\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"]})}),"\n",(0,r.jsxs)(i.p,{children:["\u3053\u306e\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u30a8\u30c7\u30a3\u30bf\u30fc\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u69d8\u3005\u306a\u95a2\u6570\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001",(0,r.jsx)(i.code,{children:"addAndMakeVisible (&midiVolume)"})," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u53d6\u308a\u4ed8\u3051\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\n\u69d8\u3005\u306a\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30b9\u30bf\u30a4\u30eb\u3068\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u3042\u308b\u306e\u3067\u3001\u81ea\u5206\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u3063\u3066\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u304c\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\u3088\u3046\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u8abf\u6574\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'TutorialPluginAudioProcessorEditor::TutorialPluginAudioProcessorEditor (TutorialPluginAudioProcessor& p)\n    : AudioProcessorEditor (&p), audioProcessor (p)\n{\n    // \u3053\u3053\u3067\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3057\u307e\u3059\n    setSize (200, 200);\n \n    // \u3053\u308c\u3089\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u5b9a\u7fa9\u3057\u307e\u3059\n    midiVolume.setSliderStyle (juce::Slider::LinearBarVertical);\n    midiVolume.setRange (0.0, 127.0, 1.0);\n    midiVolume.setTextBoxStyle (juce::Slider::NoTextBox, false, 90, 0);\n    midiVolume.setPopupDisplayEnabled (true, false, this);\n    midiVolume.setTextValueSuffix (" Volume");\n    midiVolume.setValue(1.0);\n \n    // \u3053\u306e\u95a2\u6570\u306f\u30a8\u30c7\u30a3\u30bf\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3059\n    addAndMakeVisible (&midiVolume);\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["JUCE\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u306f ",(0,r.jsx)(i.code,{children:"resized()"})," \u3068\u3044\u3046\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u521d\u671f\u5316\u6642\u306b\u4e00\u5ea6\u547c\u3073\u51fa\u3055\u308c\u3001\n\u30e6\u30fc\u30b6\u306b\u3088\u3063\u3066\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30b5\u30a4\u30ba\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\uff08\u30ea\u30b5\u30a4\u30ba\u304c\u6709\u52b9\u306a\u5834\u5408\uff09\u3002\n\u3053\u308c\u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\uff08\u304a\u3088\u3073\u4ed6\u306e GUI \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff09\u306e\u30b5\u30a4\u30ba\u3068\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\u306e\u306b\u9069\u3057\u305f\u5834\u6240\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"void TutorialPluginAudioProcessorEditor::resized()\n{\n    // \u5f15\u6570 (x, y, width, height) \u3067\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3057\u307e\u3059\n    midiVolume.setBounds (40, 30, 20, getHeight() - 60);\n}\n"})}),"\n",(0,r.jsxs)(i.p,{children:["\u307e\u305f\u3001",(0,r.jsx)(i.code,{children:"paint()"}),' \u95a2\u6570\u3067 "Hello World" \u30c6\u30ad\u30b9\u30c8\u3092 "Midi Volume" \u306b\u5909\u66f4\u3057\u3001\u4e00\u756a\u4e0a\u306b\u79fb\u52d5\u3055\u305b\u307e\u3057\u3087\u3046\u3002\n\u3053\u306e\u95a2\u6570\u306f\u3059\u3079\u3066\u306e\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30a4\u30d7\u3084GUI\u8981\u7d20\u3092\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u63cf\u753b\u3059\u308b\u5834\u6240\u3067\u3059\u3002']}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'void TutorialPluginAudioProcessorEditor::paint (juce::Graphics& g)\n{\n    // \u30a6\u30a3\u30f3\u30c9\u30a6\u5168\u4f53\u3092\u767d\u304f\u5857\u308a\u3064\u3076\u3059\n    g.fillAll (juce::Colours::white);\n \n    // \u73fe\u5728\u306e\u63cf\u753b\u8272\u3092\u9ed2\u306b\u8a2d\u5b9a\u3059\u308b\n    g.setColour (juce::Colours::black);\n \n    // \u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3057\u3001\u30c6\u30ad\u30b9\u30c8\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u63cf\u753b\u3059\u308b\n    g.setFont (15.0f);\n \n    g.drawFittedText ("Midi Volume", 0, 0, getWidth(), 30, juce::Justification::centred, 1);\n}\n'})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u305d\u306e\u30e1\u30bd\u30c3\u30c9 ",(0,r.jsx)(i.code,{children:"paint()"})," \u304a\u3088\u3073 ",(0,r.jsx)(i.code,{children:"resized()"})," \u306b\u3064\u3044\u3066\u306f\u3001\n",(0,r.jsx)(i.a,{href:"../../graphics/tutorial_graphics_class",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aGraphics\u30af\u30e9\u30b9"})," \u3068\n",(0,r.jsx)(i.a,{href:"../../interface-design/tutorial_component_parents_children",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(i.p,{children:"\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30db\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u4e0a\u3067\u6b21\u306e\u3088\u3046\u306a\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u4f5c\u6210\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_code_basic_plugin_1.png",caption:""}),"\n",(0,r.jsx)(i.h3,{id:"\u30d7\u30ed\u30bb\u30c3\u30b5\u30af\u30e9\u30b9\u306b\u5236\u5fa1\u60c5\u5831\u3092\u6e21\u3059",children:"\u30d7\u30ed\u30bb\u30c3\u30b5\u30fb\u30af\u30e9\u30b9\u306b\u5236\u5fa1\u60c5\u5831\u3092\u6e21\u3059"}),"\n",(0,r.jsx)(i.p,{children:"\u3053\u308c\u3067\u3001\u8abf\u6574\u3067\u304d\u308b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u3067\u304d\u307e\u3057\u305f\u304c\u3001\u5b9f\u969b\u306b\u306f\u4f55\u3082\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u307e\u305b\u3093\u3002\n\u5165\u529b\u3055\u308c\u308bMIDI\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30bf\u30fc\u30bb\u30d7\u30c8\u3057\u3066\u3001\u30ce\u30fc\u30c8\u30fb\u30aa\u30f3\u30fb\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u7f6e\u304d\u63db\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30b9\u30ec\u30c3\u30c9\u3067MIDI\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\n\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30b9\u30ec\u30c3\u30c9\u306b\u65b0\u3057\u3044\u5909\u6570\u3092\u4f5c\u6210\u3057\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u4f7f\u3063\u3066\u5909\u66f4\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(i.p,{children:["\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30af\u30e9\u30b9\u306e\u30d8\u30c3\u30c0\u30fc\u306b ",(0,r.jsx)(i.code,{children:"noteOnVel"})," \u3068\u3044\u3046\u65b0\u3057\u3044 public float \u5909\u6570\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u3053\u308c\u306f\u30b9\u30e9\u30a4\u30c0\u30fc\u3067\u8a2d\u5b9a\u3059\u308b\u5909\u6570\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"public:\n    float noteOnVel;\n"})}),"\n",(0,r.jsx)(i.p,{children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u3053\u306e\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u30fb\u30ea\u30b9\u30ca\u30fc\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u3069\u306e\u30af\u30e9\u30b9\u3067\u3082\u30b9\u30e9\u30a4\u30c0\u30fc\u30fb\u30ea\u30b9\u30ca\u30fc\u306e\u6a5f\u80fd\u3092\u7d99\u627f\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u76ee\u7684\u3067\u306f\u3001\u3053\u306e\u6a5f\u80fd\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u30fb\u30af\u30e9\u30b9\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["\u30ea\u30b9\u30ca\u30fc\u306b\u3064\u3044\u3066\u306e\u3088\u308a\u8a73\u3057\u3044\u8aac\u660e\u306f\u3001\n",(0,r.jsx)(i.a,{href:"../../interface-design/tutorial_listeners_and_broadcasters/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30ea\u30b9\u30ca\u30fc\u3068\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30bf\u30fc"}),"\n\u3092\u3054\u89a7\u304f\u3060\u3055\u3044"]})}),"\n",(0,r.jsx)(i.p,{children:"\u7d99\u627f [2]\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570 [3]\u3092\u8ffd\u52a0\u3057\u3066\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u30af\u30e9\u30b9\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"class TutorialPluginAudioProcessorEditor : public juce::AudioProcessorEditor,\n                                           private juce::Slider::Listener     // [2]\n{\npublic:\n    TutorialPluginAudioProcessorEditor (TutorialPluginAudioProcessor&);\n    ~TutorialPluginAudioProcessorEditor();\n \n    //==================================================================\n    // \u3053\u308c\u306f\u6a19\u6e96\u7684\u306a\u30b8\u30e5\u30fc\u30b9\u306e\u5857\u308a\u65b9\u3060\u304c...\n    void paint (juce::Graphics& g) override;\n \n    void resized() override;\n \nprivate:\n    void sliderValueChanged (juce::Slider* slider) override; // [3]\n \n    //==================================================================\n    // \u3053\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u306f\u3001\u7de8\u96c6\u8005\u304c\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u7d20\u65e9\u304f\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\n    // \u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30bb\u30c3\u30b5\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\n    TutorialPluginAudioProcessor& audioProcessor;\n \n    juce::Slider midiVolume;\n \n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (TutorialPluginAudioProcessorEditor)\n};\n"})}),"\n",(0,r.jsx)(i.p,{children:"\u6b21\u306b\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u3001\u30dc\u30ea\u30e5\u30fc\u30e0\u30fb\u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u30ea\u30b9\u30ca\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"TutorialPluginAudioProcessorEditor::TutorialPluginAudioProcessorEditor (TutorialPluginAudioProcessor& p)\n    : AudioProcessorEditor (&p), audioProcessor (p)\n{\n    // ...\n \n    // \u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u30ea\u30b9\u30ca\u30fc\u3092\u8ffd\u52a0\u3059\u308b\n    midiVolume.addListener (this);\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:"...\u305d\u3057\u3066\u3001\u30d1\u30d6\u30ea\u30c3\u30af\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fb\u30dc\u30ea\u30e5\u30fc\u30e0\u5909\u6570\u3092\u8a2d\u5b9a\u3059\u308b\u30ea\u30b9\u30ca\u30fc\u95a2\u6570\u3092\u633f\u5165\u3059\u308b\uff1a"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"void TutorialPluginAudioProcessorEditor::sliderValueChanged (juce::Slider* slider)\n{\n    audioProcessor.noteOnVel = midiVolume.getValue();\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:"\u3053\u308c\u3067\u3001\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30fb\u30af\u30e9\u30b9\u306e\u5909\u6570\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u30b9\u30e9\u30a4\u30c0\u30fc\u304c\u3067\u304d\u307e\u3057\u305f\u3002\n\u3053\u306e\u30d7\u30ed\u30bb\u30c3\u30b5\u5909\u6570\u3092\u4f7f\u3063\u3066MIDI\u30c7\u30fc\u30bf\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"}),"\n",(0,r.jsx)(i.h3,{id:"midi\u30ce\u30fc\u30c8\u306e\u4fee\u6b63",children:"MIDI\u30ce\u30fc\u30c8\u306e\u4fee\u6b63"}),"\n",(0,r.jsxs)(i.p,{children:["\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30af\u30e9\u30b9\u306e ",(0,r.jsx)(i.code,{children:"processBlock()"})," \u30e1\u30bd\u30c3\u30c9\u306f\u3001MIDI\u3068\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u4e21\u65b9\u306e\u30d0\u30c3\u30d5\u30a1\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u53d7\u4fe1\u3057\u3001\u751f\u6210\u3057\u307e\u3059\u3002\nMIDI\u30d0\u30c3\u30d5\u30a1\u3092\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3057\u3066\u3001noteOn\u30bf\u30a4\u30d7\u306e\u30b7\u30b0\u30ca\u30eb\u3092\u30a4\u30f3\u30bf\u30fc\u30bb\u30d7\u30c8\u3057\u3001\u305d\u306e\u30d9\u30ed\u30b7\u30c6\u30a3\u3092\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(i.p,{children:["MIDI\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3059\u3079\u3066\u3053\u306e\u95a2\u6570\u306b\u6e21\u3055\u308c\u307e\u3059\u3002\n\u901a\u904e\u3059\u308bMIDI\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.jsx)(i.code,{children:"processedMidi"})," \u3068\u3044\u3046\u65b0\u3057\u3044 ",(0,r.jsx)(i.a,{href:"https://docs.juce.com/master/classMidiBuffer.html",children:"MidiBuffer"}),"\n\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u5909\u66f4\u3057\u305fMIDI\u30b7\u30b0\u30ca\u30eb\u3092\u3053\u306e\u65b0\u3057\u3044\u30d0\u30c3\u30d5\u30a1\u306b\u8ffd\u52a0\u3057\u3066\u304b\u3089\u3001\u6700\u5f8c\u306b\u5143\u306e\u30d0\u30c3\u30d5\u30a1\u3068\u5165\u308c\u66ff\u3048\u307e\u3059\uff08\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u76f4\u63a5\u5909\u66f4\u3059\u308b\u554f\u984c\u3092\u907f\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff09\u3002\n",(0,r.jsx)(i.code,{children:"processBlock()"})," \u30e1\u30bd\u30c3\u30c9\u5185\u306e\u73fe\u5728\u306e\u30b3\u30fc\u30c9\u3092\u524a\u9664\u3057\uff08\u3053\u308c\u306f\u30aa\u30fc\u30c7\u30a3\u30aa\u30d0\u30c3\u30d5\u30a1\u3092\u51e6\u7406\u3059\u308b\u3082\u306e\u3067\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\uff09\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"void TutorialPluginAudioProcessor::processBlock (juce::AudioBuffer<float>& buffer, juce::MidiBuffer& midiMessages)\n{\n    buffer.clear();\n \n    juce::MidiBuffer processedMidi;\n \n    for (const auto metadata : midiMessages)\n    {\n        auto message = metadata.getMessage();\n        const auto time = metadata.samplePosition;\n \n        if (message.isNoteOn())\n        {\n            message = juce::MidiMessage::noteOn (message.getChannel(),\n                                                 message.getNoteNumber(),\n                                                 (juce::uint8) noteOnVel);\n        }\n \n        processedMidi.addEvent (message, time);\n    }\n \n    midiMessages.swapWith (processedMidi);\n}\n"})}),"\n",(0,r.jsxs)(i.p,{children:["\u30db\u30b9\u30c8\u74b0\u5883\u3067\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u901a\u3057\u3066\u9001\u3089\u308c\u3066\u304f\u308b\u3059\u3079\u3066\u306eMIDI\u30ce\u30fc\u30c8\u30aa\u30f3\u4fe1\u53f7\u304c\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u3067\u8a2d\u5b9a\u3057\u305f\u5024\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\n\u4e0a\u8a18\u306e ",(0,r.jsx)(i.code,{children:"if()"})," \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u306f\u3001\u4ed6\u306e\u30bf\u30a4\u30d7\u306e\u5165\u529bMIDI\u4fe1\u53f7\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u69d8\u3005\u306a\u5909\u63db\u3084\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u9069\u7528\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u3082\u4f7f\u3048\u307e\u3059\u3002\n\u3053\u308c\u3089\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3048\u3070\u3001\u3088\u308a\u8907\u96d1\u306a\u30a8\u30d5\u30a7\u30af\u30c8\u3084GUI\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(i.admonition,{title:"\u30a8\u30af\u30b5\u30b5\u30a4\u30ba",type:"danger",children:(0,r.jsx)(i.p,{children:"\u30dc\u30bf\u30f3\u3084\u30b9\u30e9\u30a4\u30c0\u306a\u3069\u306e\u4ed6\u306eGUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8a66\u3057\u3066\u307f\u305f\u308a\u3001\nJUCE\u306e\u6a5f\u80fd\u3092\u4f53\u9a13\u3059\u308b\u305f\u3081\u306bJUCE DemoRunner\u3092\u30c1\u30a7\u30c3\u30af\u3057\u305f\u308a\u3001\u8a73\u7d30\u306b\u3064\u3044\u3066\u306fAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["\u5165\u529b\u3055\u308c\u305fMIDI\u30ce\u30fc\u30c8\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u306f\u3001\u4eca\u5f8c\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u53d6\u308a\u4e0a\u3052\u307e\u3059\n\uff08",(0,r.jsx)(i.a,{href:"../../synth/tutorial_synth_using_midi_input",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aMIDI\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"}),"\u3092\u53c2\u7167\uff09\u3002\n\u3068\u308a\u3042\u3048\u305a\u3001",(0,r.jsx)(i.code,{children:"JUCE/examples/Plugins"})," \u306b\u3042\u308b ",(0,r.jsx)(i.code,{children:"AudioPluginDemo"})," \u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(i.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(i.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\u57fa\u672c\u7684\u306aGUI\u3092\u5099\u3048\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059"}),"\n",(0,r.jsx)(i.li,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306bMIDI\u30c7\u30fc\u30bf\u3092\u53d7\u4fe1\u3055\u305b\u307e\u3059"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../tutorial_new_projucer_project/",children:"Projucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../../plugins/tutorial_plugin_examples/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f8b"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../../plugins/tutorial_audio_bus_layouts/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../../graphics/tutorial_main_component/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30e1\u30a4\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../../graphics/tutorial_graphics_class",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1aGraphics\u30af\u30e9\u30b9"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../../interface-design/tutorial_component_parents_children",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../../interface-design/tutorial_listeners_and_broadcasters/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30ea\u30b9\u30ca\u30fc\u3068\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30bf\u30fc"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3449:(e,i,n)=>{n.d(i,{A:()=>s});var r=n(4848);function s(e){let{src:i,caption:n,alt:s,width:o,height:l}=e;return(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:i,alt:s||n,width:o,height:l}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("b",{children:n})})]})}},6378:(e,i,n)=>{n.d(i,{A:()=>s});var r=n(4848);function s(e){let{path:i}=e;return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://docs.juce.com/master/"+i,children:"\ud83d\udcda Source Page"})})}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>d});var r=n(6540);const s={},o=r.createContext(s);function l(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);