"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[3837],{5935:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=o(4848),s=o(8453);const l={title:"ComboBox\u30af\u30e9\u30b9",sidebar_position:10,tags:["\u521d\u7d1a"]},r="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebComboBox\u30af\u30e9\u30b9",c={id:"interface-design/tutorial_combo_box",title:"ComboBox\u30af\u30e9\u30b9",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306fComboBox\u30af\u30e9\u30b9\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u30a2\u30a4\u30c6\u30e0\u306e\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002\u30ea\u30b9\u30c8\u306e\u5185\u5bb9\u306fComboBox\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u52d5\u7684\u306b\u5909\u66f4\u3067\u304d\u3001\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u306b\u3082\u4f7f\u3048\u308b\u3002",source:"@site/docs/interface-design/tutorial_combo_box.mdx",sourceDirName:"interface-design",slug:"/interface-design/tutorial_combo_box",permalink:"/juce-tutorial-ja/interface-design/tutorial_combo_box",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_combo_box.mdx",tags:[{inline:!0,label:"\u521d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u521d\u7d1a"}],version:"current",sidebarPosition:10,frontMatter:{title:"ComboBox\u30af\u30e9\u30b9",sidebar_position:10,tags:["\u521d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"\u30e9\u30d9\u30eb\u30af\u30e9\u30b9",permalink:"/juce-tutorial-ja/interface-design/tutorial_label"},next:{title:"\u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u3068\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9",permalink:"/juce-tutorial-ja/interface-design/tutorial_radio_buttons_checkboxes"}},a={},i=[{value:"\u30b9\u30bf\u30fc\u30c8",id:"\u30b9\u30bf\u30fc\u30c8",level:2},{value:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"ComboBox\u30af\u30e9\u30b9",id:"combobox\u30af\u30e9\u30b9",level:2},{value:"\u30a2\u30a4\u30c6\u30e0\u306e\u8ffd\u52a0",id:"\u30a2\u30a4\u30c6\u30e0\u306e\u8ffd\u52a0",level:3},{value:"\u5909\u5316\u3078\u306e\u5bfe\u5fdc",id:"\u5909\u5316\u3078\u306e\u5bfe\u5fdc",level:3},{value:"\u30a2\u30a4\u30c6\u30e0ID\u756a\u53f7\u306e\u4f7f\u7528",id:"\u30a2\u30a4\u30c6\u30e0id\u756a\u53f7\u306e\u4f7f\u7528",level:3},{value:"\u30bb\u30af\u30b7\u30e7\u30f3\u3068\u4ed5\u5207\u308a",id:"\u30bb\u30af\u30b7\u30e7\u30f3\u3068\u4ed5\u5207\u308a",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u5165\u529b",id:"\u30c6\u30ad\u30b9\u30c8\u5165\u529b",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u3053\u3061\u3089\u3082\u53c2\u7167",id:"\u3053\u3061\u3089\u3082\u53c2\u7167",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CaptionImage:o,SourcePageLink:l}=n;return o||h("CaptionImage",!0),l||h("SourcePageLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebcombobox\u30af\u30e9\u30b9",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebComboBox\u30af\u30e9\u30b9"})}),"\n",(0,t.jsx)(l,{path:"tutorial_combo_box"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30af\u30e9\u30b9\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u30a2\u30a4\u30c6\u30e0\u306e\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002\u30ea\u30b9\u30c8\u306e\u5185\u5bb9\u306f",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u52d5\u7684\u306b\u5909\u66f4\u3067\u304d\u3001\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u306b\u3082\u4f7f\u3048\u308b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\u521d\u5fc3\u8005"}),"\n",(0,t.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,t.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),",",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html",title:"\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002",children:"Label"}),",",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classFont.html",title:"\u30b5\u30a4\u30ba\u3084\u30b9\u30bf\u30a4\u30eb\u306a\u3069\u3001\u7279\u5b9a\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8868\u3057\u307e\u3059\u3002",children:"Font"}),",",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classColour.html",title:"\u8272\u3092\u8868\u3057\u3001\u900f\u660e\u5ea6\u306e\u5024\u3082\u542b\u3080\u3002",children:"Colour"}),",",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/namespaceColours.html",title:"\u5b9a\u7fa9\u6e08\u307f\u306e\u540d\u524d\u4ed8\u304d\u8272\u306e\u30bb\u30c3\u30c8\u3092\u542b\u3080\uff08\u307b\u3068\u3093\u3069\u306f\u6a19\u6e96\u7684\u306aHTML\u30ab\u30e9\u30fc\uff09\u3002",children:"Colours"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30b9\u30bf\u30fc\u30c8",children:"\u30b9\u30bf\u30fc\u30c8"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u3053\u3061\u3089\u304b\u3089\uff1a",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/tutorials/PIPs/ComboBoxTutorial.zip",children:"PIP"}),"|",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/tutorials/ZIPs/ComboBoxTutorial.zip",children:"ZIP"}),".\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u89e3\u51cd\u3057\u3001\u6700\u521d\u306e\u30d8\u30c3\u30c0\u30fc\u30d5\u30a1\u30a4\u30eb\u3092Projucer\u3067\u958b\u304f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,t.jsx)(n.a,{href:"../../getting-started/tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,t.jsxs)(n.p,{children:["\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u4e0a\u90e8\u306e",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html",title:"\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002",children:"Label"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",(0,t.jsx)(n.a,{href:"../tutorial_label/",children:"Tutorial: The Label class"}),"). A",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f",(0,t.jsx)(n.strong,{children:"\u30d7\u30ec\u30fc\u30f3"}),",",(0,t.jsx)(n.strong,{children:"\u592a\u5b57"}),"\u305d\u3057\u3066",(0,t.jsx)(n.strong,{children:"\u30a4\u30bf\u30ea\u30c3\u30af"}),".\u30e6\u30fc\u30b6\u30fc\u306f\u3053\u308c\u3089\u306e\u9805\u76ee\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u3066\u3001\u30e9\u30d9\u30eb\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o,{src:"https://docs.juce.com/master/tutorial_combo_box_screenshot1.png",caption:"\u30d5\u30a9\u30f3\u30c8\u30b9\u30bf\u30a4\u30eb\u306e\u9078\u629e"}),"\n",(0,t.jsx)(n.h2,{id:"combobox\u30af\u30e9\u30b9",children:"ComboBox\u30af\u30e9\u30b9"}),"\n",(0,t.jsxs)(n.p,{children:["\u306e\u6a5f\u80fd\u306e\u591a\u304f\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30af\u30e9\u30b9A",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u306e\u30ea\u30b9\u30c8\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002\u3053\u308c\u3089\u306e\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u306f\u305d\u308c\u305e\u308cID\u756a\u53f7(",(0,t.jsx)(n.code,{children:"int"}),"\u5024)\u3002\u3069\u306e\u9805\u76ee\u304c\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u304b\u306f\u3001\u4ee5\u4e0b\u306e\u65b9\u6cd5\u3067\u554f\u3044\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u3092\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308bID\u3092\u53d6\u5f97\u3059\u308b\u3002",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#ab6232527104faad901ba0fa1380cd8ec",title:"\u73fe\u5728\u30dc\u30c3\u30af\u30b9\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30a2\u30a4\u30c6\u30e0\u306eID\u3092\u8fd4\u3057\u307e\u3059\u3002",children:"ComboBox::getSelectedId()"}),"\u307e\u305f\u306f"]}),"\n",(0,t.jsxs)(n.li,{children:["\u3092\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u8981\u6c42\u3059\u308b\u3002",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#a420630894c696545c29271f557f7614d",title:"\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002",children:"ComboBox::getText()"}),"\u95a2\u6570\u3067\u3042\u308b\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30af\u30e9\u30b9\u306f\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30bf\u30fc\u3067\u3082\u3042\u308b\u3002\u5909\u66f4\u3092\u805e\u304f\u306b\u306f",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox_1_1Listener.html",title:"ComboBox \u304b\u3089\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306e\u30af\u30e9\u30b9\u3067\u3059\u3002",children:"ComboBox::Listener"}),"\u30af\u30e9\u30b9\uff08\u53c2\u7167",(0,t.jsx)(n.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"}),"\u3092\u4f7f\u3063\u3066\u30e9\u30e0\u30c0\u95a2\u6570\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u308b\u3002",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#a9cf2e20990541b9fbb539cd4a8e0ac4e",title:"\u3053\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30e9\u30e0\u30c0\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u3067\u3001\u30bb\u30ec\u30af\u30c6\u30c3\u30c9ID\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",children:"ComboBox::onChange"}),"\u30d8\u30eb\u30d1\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u898b\u3066\u307f\u3088\u3046\u3002\u79c1\u305f\u3061\u306e",(0,t.jsx)(n.code,{children:"MainContentComponent"}),"\u30af\u30e9\u30b9\u306b\u306f4\u4eba\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30e1\u30f3\u30d0\u30fc\u304c\u3044\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'    juce::Label textLabel { {}, "The quick brown fox jumps over the lazy dog." };\n    juce::Font textFont   { 12.0f };\n    juce::ComboBox styleMenu;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html",title:"\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002",children:"Label"}),"\u305d\u3057\u3066",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classFont.html",title:"\u30b5\u30a4\u30ba\u3084\u30b9\u30bf\u30a4\u30eb\u306a\u3069\u3001\u7279\u5b9a\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8868\u3057\u307e\u3059\u3002",children:"Font"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u8a2d\u5b9a\u3055\u308c\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"    MainContentComponent()\n    {\n        addAndMakeVisible (textLabel);\n        textLabel.setFont (textFont);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u30a2\u30a4\u30c6\u30e0\u306e\u8ffd\u52a0",children:"\u30a2\u30a4\u30c6\u30e0\u306e\u8ffd\u52a0"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a2\u30a4\u30c6\u30e0\u306f",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30921\u3064\u305a\u3064",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#a37491da45f1cbb74e47f145e5664d8bf",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3059\u308b\u9805\u76ee\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",children:"ComboBox::addItem()"}),"\u95a2\u6570\u3092\u4f7f\u3046\u3002\u3053\u3053\u3067\u306f\u3001ID\u756a\u53f71\u30012\u30013\u306e\u300c\u30d7\u30ec\u30fc\u30f3\u300d\u3001\u300c\u30dc\u30fc\u30eb\u30c9\u300d\u3001\u300c\u30a4\u30bf\u30ea\u30c3\u30af\u300d\u9805\u76ee\u3092\u305d\u308c\u305e\u308c\u8ffd\u52a0\u3059\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'        // add items to the combo-box\n        addAndMakeVisible (styleMenu);\n        styleMenu.addItem ("Plain",  1);\n        styleMenu.addItem ("Bold",   2);\n        styleMenu.addItem ("Italic", 3);\n \n        styleMenu.onChange = [this] { styleMenuChanged(); };\n        styleMenu.setSelectedId (1);\n \n        setSize (400, 200);\n    }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5909\u5316\u3078\u306e\u5bfe\u5fdc",children:"\u5909\u5316\u3078\u306e\u5bfe\u5fdc"}),"\n",(0,t.jsxs)(n.p,{children:["\u767b\u9332\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u305f\u3002",(0,t.jsx)(n.code,{children:"MainContentComponent"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30ea\u30b9\u30ca\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3002",(0,t.jsx)(n.code,{children:"styleMenu"})," ",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u308b\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u5834\u5408",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#a9cf2e20990541b9fbb539cd4a8e0ac4e",title:"\u3053\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30e9\u30e0\u30c0\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u3067\u3001\u30bb\u30ec\u30af\u30c6\u30c3\u30c9ID\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",children:"ComboBox::onChange"}),"\u30d8\u30eb\u30d1\u30fc\u30fb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u76f4\u63a5\u547c\u3073\u51fa\u3059",(0,t.jsx)(n.code,{children:"styleMenuChanged()"}),"\u95a2\u6570\u3067\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"styleMenu.onChange = [this] { styleMenuChanged(); };\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u306b\u3064\u3044\u3066",(0,t.jsx)(n.code,{children:"styleMenuChanged()"}),"\u95a2\u6570\u306f",(0,t.jsx)(n.code,{children:"styleMenu"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"    void styleMenuChanged()\n    {\n        switch (styleMenu.getSelectedId())\n        {\n            case 1: textFont.setStyleFlags (juce::Font::plain);  break;\n            case 2: textFont.setStyleFlags (juce::Font::bold);   break;\n            case 3: textFont.setStyleFlags (juce::Font::italic); break;\n            default: break;\n        }\n \n        textLabel.setFont (textFont);\n    }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306f",(0,t.jsx)(n.code,{children:"textFont"})," ",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classFont.html",title:"\u30b5\u30a4\u30ba\u3084\u30b9\u30bf\u30a4\u30eb\u306a\u3069\u3001\u7279\u5b9a\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u8868\u3057\u307e\u3059\u3002",children:"Font"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30e6\u30fc\u30b6\u30fc\u306e\u9078\u629e\u306b\u5fdc\u3058\u3066\u9069\u5207\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u3053\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u3063\u3066",(0,t.jsx)(n.code,{children:"textLabel"})," ",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classLabel.html",title:"\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u5217\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002",children:"Label"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30f3\u30c8\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u30a2\u30a4\u30c6\u30e0id\u756a\u53f7\u306e\u4f7f\u7528",children:"\u30a2\u30a4\u30c6\u30e0ID\u756a\u53f7\u306e\u4f7f\u7528"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a2\u30a4\u30c6\u30e0 ID \u306b\u306f\u4efb\u610f\u306e\u6574\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,t.jsx)(n.em,{children:"\u305f\u3060\u3057"}),"\u30bc\u30ed\u3002\u30bc\u30ed\u306b\u306f\u7279\u5225\u306a\u610f\u5473\u304c\u3042\u308b\u3002\u3053\u308c\u306f\u3001\u3069\u306e\u9805\u76ee\u3082\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u306e\u306b\u4f7f\u308f\u308c\u308b\uff08\u9805\u76ee\u304c\u307e\u3060\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u3001\u3042\u308b\u3044\u306f",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u4ed6\u306e\u30ab\u30b9\u30bf\u30e0\u30fb\u30c6\u30ad\u30b9\u30c8\u3092\u8868\u793a\u3057\u3066\u3044\u308b\uff09\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["1\u30012\u30013\u306e\u3088\u3046\u306a\u5358\u7d14\u306a\u6570\u5b57\u3092\u30b3\u30fc\u30c9\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u7ba1\u7406\u306f\u7c21\u5358\u3060\u3002\u3057\u304b\u3057\u3001\u30a2\u30d7\u30ea\u306e\u958b\u767a\u304c\u9032\u3080\u306b\u3064\u308c\u3066\u3001\u3053\u308c\u306f\u3059\u3050\u306b\u7ba1\u7406\u3057\u304d\u308c\u306a\u304f\u306a\u308b\u3002\u3053\u306e\u5834\u5408\u306f",(0,t.jsx)(n.code,{children:"enum"}),".\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306e",(0,t.jsx)(n.code,{children:"enum"}),"\u79c1\u305f\u3061\u306e\u30b9\u30bf\u30a4\u30eb\u306e\u305f\u3081\u306b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"    enum FontStyles\n    {\n        stylePlain = 1,\n        styleBold,\n        styleItalic,\n        numberOfStyles\n    };\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u305d\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u5024\u3092",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'        addAndMakeVisible (styleMenu);\n \n        // add items to the combo-box\n        styleMenu.addItem ("Plain",  1);\n        styleMenu.addItem ("Bold",   2);\n        styleMenu.addItem ("Italic", 3);\n \n        styleMenu.onChange = [this] { styleMenuChanged(); };\n        styleMenu.setSelectedId (stylePlain);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u305d\u3057\u3066\u3001\u6211\u3005\u306e",(0,t.jsx)(n.code,{children:"styleMenuChanged()"}),"\u95a2\u6570\u3067\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void styleMenuChanged()\n{\n    switch (styleMenu.getSelectedId())\n    {\n        case stylePlain:  textFont.setStyleFlags (juce::Font::plain);  break;\n        case styleBold:   textFont.setStyleFlags (juce::Font::bold);   break;\n        case styleItalic: textFont.setStyleFlags (juce::Font::italic); break;\n    }\n \n    textLabel.setFont (textFont);\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c11\u306a\u304f\u3068\u3082\u3001\u3053\u308c\u3067\u30b3\u30fc\u30c9\u306f\u305a\u3063\u3068\u8aad\u307f\u3084\u3059\u304f\u306a\u308b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"ID\u30ca\u30f3\u30d0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u4ed6\u306e\u4e00\u822c\u7684\u306a\u6226\u7565\u306f\u4ee5\u4e0b\u306e\u901a\u308a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u914d\u5217\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e\u9805\u76ee\u306b\u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002ID\u3092\u914d\u5217\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u304c\u3001\u30a4\u30f3\u30c7\u30c3\u30af\u30b90\u306f\u672a\u4f7f\u7528\u306e\u307e\u307e\u306b\u3059\u308b\u304b\u3001\u30aa\u30d5\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001ID\u3092100\u304b\u3089\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff08100\u3001101\u3001102\u306a\u3069\uff09\u3002ID100\u306f\u914d\u5217\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b90\u3068\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3001100\u3092\u8db3\u3057\u305f\u308a\u5f15\u3044\u305f\u308a\u3059\u308b\u3053\u3068\u3067\u3001ID\u3068\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u7c21\u5358\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u306e\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u3054\u3068\u306b\u3001\u7570\u306a\u308b\u7bc4\u56f2\u306e\u6574\u6570\u306e\u30d0\u30c3\u30c1\u3092\u4f7f\u3046\u3002\u4f8b\u3048\u3070\u3001\u3042\u308b\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306b\u306f100, 101, 102...\u3001\u5225\u306e\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306b\u306f200, 201, 202...\u3068\u3044\u3063\u305f\u5177\u5408\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u30a2\u30a4\u30c6\u30e0\u30c6\u30ad\u30b9\u30c8\u306e\u30cf\u30c3\u30b7\u30e5\u3092\u4f7f\u3046\u6b21\u306e\u3088\u3046\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classString.html#ad8ca5cb11984df03ff9697442da5ae4b",title:"\u3053\u306e\u6587\u5b57\u5217\u304b\u3089\u304a\u305d\u3089\u304f\u30e6\u30cb\u30fc\u30af\u306a32\u30d3\u30c3\u30c8\u30cf\u30c3\u30b7\u30e5\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3002",children:"String::hashCode()"}),"\u3092\u53d6\u5f97\u3059\u308b\u3002",(0,t.jsx)(n.em,{children:"\u304a\u305d\u3089\u304f"}),"\u6587\u5b57\u5217\u306e\u4e00\u610f\u306a\u30cf\u30c3\u30b7\u30e5\u30b3\u30fc\u30c9\u3092\u8fd4\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u3053\u308c\u306f\u30bc\u30ed\u3092\u8fd4\u3059\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u7a7a\u306e\u6587\u5b57\u5217\u306b\u3053\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30cf\u30c3\u30b7\u30e5\u30b3\u30fc\u30c9\u306f\u30bc\u30ed\u3092\u8fd4\u3057\u307e\u3059\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u30bb\u30af\u30b7\u30e7\u30f3\u3068\u4ed5\u5207\u308a",children:"\u30bb\u30af\u30b7\u30e7\u30f3\u3068\u4ed5\u5207\u308a"}),"\n",(0,t.jsxs)(n.p,{children:["\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e\u9805\u76ee\u30ea\u30b9\u30c8\u306b\u306f\u3001\u4ed5\u5207\u308a\u3084\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u898b\u51fa\u3057\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u975e\u5e38\u306b\u9577\u3044\u30ea\u30b9\u30c8\u3067\u306f\u7279\u306b\u4fbf\u5229\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u306e\u8272\u3092\u5909\u3048\u308b\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u3092\u30a2\u30d7\u30ea\u306b\u8ffd\u52a0\u3057\u3066\u307f\u3088\u3046\u3002\u307e\u305a",(0,t.jsx)(n.code,{children:"enum"}),"\u79c1\u305f\u3061\u306e\u8272\u306e\u305f\u3081\u306b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"    enum TextColours\n    {\n        black = 1,\n        white,\n        red,\n        darkred,\n        indianred,\n        green,\n        darkgreen,\n        lightgreen,\n        blue,\n        darkblue,\n        lightblue,\n        numberOfColours\n    };\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u305d\u3057\u3066\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc\u304c\u52a0\u308f\u3063\u305f\u3002",(0,t.jsx)(n.code,{children:"MainContentComponent"}),"\u30af\u30e9\u30b9\u3067\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'    juce::Label textLabel { {}, "The quick brown fox jumps over the lazy dog." };\n    juce::Font textFont   { 12.0f };\n    juce::ComboBox styleMenu;\n    juce::ComboBox coloursMenu;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u306e\u4e2d\u3067",(0,t.jsx)(n.code,{children:"MainContentComponent"}),"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306b\u65b0\u3057\u3044\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u3053\u3053\u3067\u306f2\u3064\u306e\u65b0\u3057\u3044\u95a2\u6570\u3092\u7d39\u4ecb\u3059\u308b\u3001",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#af53bb419bb136f11f6f0342702d8d902",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306b\u533a\u5207\u308a\u7dda\u3092\u8ffd\u52a0\u3059\u308b\u3002",children:"ComboBox::addSeparator()"}),"\u305d\u3057\u3066",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html#ad376928ef517800c42628399e1a80990",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306b\u898b\u51fa\u3057\u3092\u8ffd\u52a0\u3057\u3001\u9805\u76ee\u3092\u7570\u306a\u308b\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30b0\u30eb\u30fc\u30d7\u5206\u3051\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002",children:"ComboBox::addSectionHeading()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'        addAndMakeVisible (coloursMenu);\n \n        coloursMenu.addItem ("Black", black);\n        coloursMenu.addItem ("White", white);\n        coloursMenu.addSeparator();\n \n        coloursMenu.addSectionHeading ("Reds");\n        coloursMenu.addItem ("Red",        red);\n        coloursMenu.addItem ("Dark Red",   darkred);\n        coloursMenu.addItem ("Indian Red", indianred);\n        coloursMenu.addSeparator();\n \n        coloursMenu.addSectionHeading ("Greens");\n        coloursMenu.addItem ("Green",       green);\n        coloursMenu.addItem ("Dark Green",  darkgreen);\n        coloursMenu.addItem ("Light Green", lightgreen);\n        coloursMenu.addSeparator();\n \n        coloursMenu.addSectionHeading ("Blues");\n        coloursMenu.addItem ("Blue",       blue);\n        coloursMenu.addItem ("Dark Blue",  darkblue);\n        coloursMenu.addItem ("Light Blue", lightblue);\n \n        coloursMenu.onChange = [this] { coloursMenuChanged(); };\n        coloursMenu.setSelectedId (black);\n \n        coloursMenu.setEditableText (true);\n \n        setSize (400, 200);\n    }\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u30bb\u30af\u30b7\u30e7\u30f3\u898b\u51fa\u3057\u306a\u3057\u3067\u30bb\u30d1\u30ec\u30fc\u30bf\u30fc\u3092\u4f7f\u3046\u3053\u3068\u3082\u3001\u30bb\u30d1\u30ec\u30fc\u30bf\u30fc\u306a\u3057\u3067\u30bb\u30af\u30b7\u30e7\u30f3\u898b\u51fa\u3057\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u308b\u304c\u3001\u3053\u308c\u3089\u306f\u4e00\u7dd2\u306b\u4f7f\u3046\u3068\u3046\u307e\u304f\u3044\u304f\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u30bb\u30d1\u30ec\u30fc\u30bf\u30fc\u3068\u30bb\u30af\u30b7\u30e7\u30f3\u898b\u51fa\u3057\u306f\u9078\u629e\u3067\u304d\u305a\u3001\u95a2\u9023\u3059\u308bID\u756a\u53f7\u3082\u3042\u308a\u307e\u305b\u3093\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["\u306e\u5909\u66f4\u3092\u51e6\u7406\u3059\u308b\u65b0\u3057\u3044\u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002",(0,t.jsx)(n.code,{children:"coloursMenu"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void coloursMenuChanged()\n{\n    juce::Colour textColour;\n \n    switch (coloursMenu.getSelectedId())\n    {\n        case black:      textColour = Colours::black;      break;\n        case white:      textColour = Colours::white;      break;\n \n        case red:        textColour = Colours::red;        break;\n        case darkred:    textColour = Colours::darkred;    break;\n        case indianred:  textColour = Colours::indianred;  break;\n \n        case green:      textColour = Colours::green;      break;\n        case darkgreen:  textColour = Colours::darkgreen;  break;\n        case lightgreen: textColour = Colours::lightgreen; break;\n \n        case blue:       textColour = Colours::blue;       break;\n        case darkblue:   textColour = Colours::darkblue;   break;\n        case lightblue:  textColour = Colours::lightblue;  break;\n    }\n \n    textLabel.setColour (juce::Label::textColourId, textColour);\n}\nColours::lightblueconst Colour lightblueDefinition juce_Colours.h:114\nColours::greenconst Colour greenDefinition juce_Colours.h:102\nColours::darkblueconst Colour darkblueDefinition juce_Colours.h:72\nColours::darkredconst Colour darkredDefinition juce_Colours.h:82\nColours::whiteconst Colour whiteDefinition juce_Colours.h:188\nColours::blueconst Colour blueDefinition juce_Colours.h:60\nColours::blackconst Colour blackDefinition juce_Colours.h:58\nColours::indianredconst Colour indianredDefinition juce_Colours.h:106\nColours::darkgreenconst Colour darkgreenDefinition juce_Colours.h:76\nColours::redconst Colour redDefinition juce_Colours.h:165\nColours::lightgreenconst Colour lightgreenDefinition juce_Colours.h:118\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u306e\u5883\u754c\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u304a\u5fd8\u308c\u306a\u304f\u3002",(0,t.jsx)(n.code,{children:"coloursMenu"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092",(0,t.jsx)(n.code,{children:"resized()"}),"\u95a2\u6570\u3067\u3042\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"    void resized() override\n    {\n        textLabel  .setBounds (10, 10, getWidth() - 20, 20);\n        styleMenu  .setBounds (10, 40, getWidth() - 20, 20);\n        coloursMenu.setBounds (10, 70, getWidth() - 20, 20);\n    }\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,t.jsx)(o,{src:"https://docs.juce.com/master/tutorial_combo_box_screenshot2.png",caption:"\u8272\u3068\u30b9\u30bf\u30a4\u30eb\u306e\u9078\u629e"}),"\n",(0,t.jsx)(n.p,{children:"\u30e9\u30d9\u30eb\u30c6\u30ad\u30b9\u30c8\u306e\u8272\u3092\u5909\u66f4\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u30c6\u30ad\u30b9\u30c8\u5165\u529b",children:"\u30c6\u30ad\u30b9\u30c8\u5165\u529b"}),"\n",(0,t.jsxs)(n.p,{children:["\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30b9\u30c8\u3055\u308c\u305f\u9805\u76ee\u306e\u307f\u3092\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u3092\u7de8\u96c6\u53ef\u80fd\u306b\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u4ed6\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e",(0,t.jsx)(n.code,{children:"MainContentComponent"}),"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067",(0,t.jsx)(n.code,{children:"coloursMenu"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u7de8\u96c6\u53ef\u80fd\u306b\u3059\u308b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"        coloursMenu.setEditableText (true);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u3067\u306f\u3001\u3053\u306e\u95a2\u6570\u306b",(0,t.jsx)(n.code,{children:"coloursMenu"}),'\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3001\u30c6\u30ad\u30b9\u30c8\u309216\u9032\u6570\u306e\u30ab\u30e9\u30fc\u30b3\u30fc\u30c9\u3068\u3057\u3066\u6271\u3044\u307e\u3059\u3002\u30ab\u30e9\u30fc\u30b3\u30fc\u30c9\u306fARGB\u5f62\u5f0f\u3067\u3059\uff08\u4f8b\u3048\u3070\u3001"ff8888888 "\u306f\u4e0d\u900f\u660e\u306a\u4e2d\u9593\u7070\u8272\u306b\u306a\u308a\u307e\u3059\uff09\uff1a']}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,t.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox.html",title:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u306e\u9078\u629e\u80a2\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3055\u305b\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",children:"ComboBox"}),"\u30af\u30e9\u30b9\u3067\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3067\u3057\u3087\u3046\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3057\u3001\u305d\u3053\u306b\u9805\u76ee\u3092\u8ffd\u52a0\u3059\u308b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e\u9805\u76ee\u306b\u95a2\u9023\u3059\u308bID\u756a\u53f7\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u3067\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u9805\u76ee\u3092\u5909\u66f4\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u5fdc\u3059\u308b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b3\u30f3\u30dc\u30dc\u30c3\u30af\u30b9\u306e\u9805\u76ee\u3092\u7121\u52b9\u306b\u3057\u305f\u308a\u6709\u52b9\u306b\u3057\u305f\u308a\u3059\u308b\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u3053\u3061\u3089\u3082\u53c2\u7167",children:"\u3053\u3061\u3089\u3082\u53c2\u7167"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../tutorial_label/",children:"Tutorial: The Label class"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../tutorial_table_list_box/",children:"Tutorial: The TableListBox class"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);