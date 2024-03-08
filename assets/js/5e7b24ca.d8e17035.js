"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[6392],{3684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(4848),r=n(8453),i=n(3449);n(6378);const s={title:"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af",sidebar_position:5},a="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af",c={id:"interface-design/tutorial_rectangle_advanced",title:"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af",description:"\u30b7\u30f3\u30d7\u30eb\u304b\u3064\u5f37\u529b\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308c\u3070\u3001\u30d0\u30b0\u304c\u5c11\u306a\u304f\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3067\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u77e9\u5f62\u3092\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u3067\u4f55\u5ea6\u304b\u7d30\u5206\u5316\u3057\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5168\u4f53\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u6e80\u305f\u3057\u307e\u3059\u3002",source:"@site/docs/interface-design/tutorial_rectangle_advanced.mdx",sourceDirName:"interface-design",slug:"/interface-design/tutorial_rectangle_advanced",permalink:"/juce-tutorial-ja/interface-design/tutorial_rectangle_advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_rectangle_advanced.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9",permalink:"/juce-tutorial-ja/interface-design/tutorial_point_line_rectangle"},next:{title:"FlexBox\u3068Grid\u3092\u4f7f\u3063\u305f\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6GUI\u30ec\u30a4\u30a2\u30a6\u30c8",permalink:"/juce-tutorial-ja/interface-design/tutorial_flex_box_grid"}},d={},l=[{value:"Traditional laying out",id:"traditional-laying-out",level:2},{value:"Layout by subdividing rectangles",id:"layout-by-subdividing-rectangles",level:2},{value:"Reordering items",id:"reordering-items",level:2},{value:"Resizing the component",id:"resizing-the-component",level:2},{value:"Other scenarios",id:"other-scenarios",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306agui\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af"}),"\n",(0,o.jsx)(t.p,{children:"\u30b7\u30f3\u30d7\u30eb\u304b\u3064\u5f37\u529b\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308c\u3070\u3001\u30d0\u30b0\u304c\u5c11\u306a\u304f\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u3067\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u77e9\u5f62\u3092\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u3067\u4f55\u5ea6\u304b\u7d30\u5206\u5316\u3057\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5168\u4f53\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u6e80\u305f\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u30ec\u30d9\u30eb Intermediate"}),"\n",(0,o.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux, iOS, Android"}),"\n",(0,o.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classTextButton",title:"A button that uses the standard lozenge-shaped background with a line of text on it.",children:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30bf\u30f3"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/namespaceColours",title:"Contains a set of predefined named colours (mostly standard HTML colours)",children:"\u30ab\u30e9\u30fc"})]}),"\n",(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,o.jsx)(t.a,{href:"/tutorials/PIPs/RectangleAdvancedTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,o.jsx)(t.a,{href:"/tutorials/ZIPs/RectangleAdvancedTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need help with this step, see ",(0,o.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,o.jsx)(t.p,{children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u5c11\u6570\u306e\u30dc\u30bf\u30f3\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3001\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f\u3001\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u3068\u3057\u3066\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001JUCE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3042\u308c\u3070\u3069\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002IDE\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u30e1\u30a4\u30f3\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u6b21\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot1.png",caption:"Simple application layout"}),"\n",(0,o.jsx)(t.h1,{id:"rectangle-layouts",children:"Rectangle layouts"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30e1\u30a4\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u3044\u304f\u3064\u304b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.em,{children:"\u30d8\u30c3\u30c0\u30fc"})," section that might contain a title or perhaps a toolbar."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.em,{children:"\u30d5\u30c3\u30bf\u30fc"})," section that might contain some other information about the application."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.em,{children:"\u30b5\u30a4\u30c9\u30d0\u30fc"})," that might contain a series of sections or other content."]}),"\n",(0,o.jsx)(t.li,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["These are added in the ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor (see ",(0,o.jsx)(t.a,{href:"../tutorial_component_parents_children/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," and ",(0,o.jsx)(t.a,{href:"../tutorial_colours/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebJUCE\u306e\u8272"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'MainContentComponent()\n    {\n        header.setColour (juce::TextButton::buttonColourId, juce::Colours::cornflowerblue)\uff1b\n        header.setButtonText ("Header")\uff1b\n        addAndMakeVisible (header)\uff1b\n \n        footer.setColour (juce::TextButton::buttonColourId, juce::Colours::cornflowerblue)\uff1b\n        footer.setButtonText ("\u30d5\u30c3\u30bf\u30fc")\uff1b\n        addAndMakeVisible (footer)\uff1b\n \n        sidebar.setColour (juce::TextButton::buttonColourId, juce::Colours::grey)\uff1b\n        sidebar.setButtonText ("\u30b5\u30a4\u30c9\u30d0\u30fc")\uff1b\n        addAndMakeVisible (sidebar)\uff1b\n \n        limeContent.setColour (juce::TextButton::buttonColourId, juce::Colours::lime)\uff1b\n        addAndMakeVisible (limeContent)\uff1b\n \n        grapefruitContent.setColour (juce::TextButton::buttonColourId, juce::Colours::yellowgreen)\uff1b\n        addAndMakeVisible (grapefruitContent)\uff1b\n \n        lemonContent.setColour (juce::TextButton::buttonColourId, juce::Colours::yellow)\uff1b\n        addAndMakeVisible (lemonContent)\uff1b\n \n        orangeContent.setColour (juce::TextButton::buttonColourId, juce::Colours::orange)\uff1b\n        addAndMakeVisible (orangeContent)\uff1b\n \n        setSize (400, 400)\uff1b\n    }\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u5b9f\u969b\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306f\u3001Component::resized()\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3066\u884c\u3046\u306e\u304c\u4e00\u822c\u7684\u3060\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"traditional-laying-out",children:"Traditional laying out"}),"\n",(0,o.jsx)(t.p,{children:"\u5f93\u6765\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba\u3092\u8a08\u7b97\u3057\u3001\u305d\u308c\u3089\u306e\u5408\u8a08\u304c\u5e38\u306b\u6b63\u3057\u3044\u30b5\u30a4\u30ba\u306b\u306a\u308b\u3088\u3046\u306b\u6ce8\u610f\u3057\u306a\u304c\u3089\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3057\u3066\u3044\u305f\u3002\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30e1\u30a4\u30f3\u90e8\u5206\u306b\u30ab\u30e9\u30fc\u30dc\u30bf\u30f3\u3092\u914d\u7f6e\u3059\u308b\u306e\u3067\u3055\u3048\u3001\u9762\u5012\u306b\u306a\u308b\u3057\u3001\u9593\u9055\u3044\u3082\u8d77\u3053\u3057\u3084\u3059\u3044\u3002\u540c\u3058\u5927\u304d\u3055\u306e\u30dc\u30bf\u30f3\u30924\u3064\u4e26\u3079\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"//...\n    limeContent .setBounds (0, 0, 200, 24)\uff1b\n    \u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4Content.setBounds\uff080\u300124\u3001200\u300124\uff09\uff1b\n    lemonContent .setBounds (0, 48, 200, 24)\uff1b\n    orangeContent .setBounds (0, 72, 200, 24)\uff1b\n//...\n"})}),"\n",(0,o.jsxs)(t.p,{children:["(I proved my own point when writing this tutorial by getting the final ",(0,o.jsx)(t.code,{children:"\u30aa\u30ec\u30f3\u30b8\u30b3\u30f3\u30c6\u30f3\u30c4"})," component in the wrong place twice!)"]}),"\n",(0,o.jsxs)(t.p,{children:["At the very least the calculations are time-consuming when you can be focusing your coding efforts on more important things! The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," class provides some simple yet powerful features for making the job of laying out components more flexible, and in some ways easier, once you are familiar with the technique. This involves subdividing the main rectangle into smaller and smaller sub-rectangles."]}),"\n",(0,o.jsx)(t.h2,{id:"layout-by-subdividing-rectangles",children:"Layout by subdividing rectangles"}),"\n",(0,o.jsx)(t.p,{children:"\u30e1\u30a4\u30f3\u306e\u9577\u65b9\u5f62\u3092\u7d30\u5206\u5316\u3057\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u65b9\u6cd5\u306f\u3001\u5f93\u6765\u306e\u65b9\u6cd5\u3068\u540c\u7b49\u306b\u601d\u3048\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u3002\u3057\u304b\u3057\u3001\u591a\u304f\u306e\u5229\u70b9\u304c\u3042\u308b\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["It encourages you to use fewer ",(0,o.jsx)(t.em,{children:"\u30de\u30b8\u30c3\u30af\u30ca\u30f3\u30d0\u30fc"})," (hard-coded values) in your code, which make modifying and maintaining your layout harder in the future."]}),"\n",(0,o.jsx)(t.li,{children:"\u591a\u304f\u306e\u5834\u5408\u3001\u30ec\u30a4\u30a2\u30a6\u30c8\u306f\u3001\u5024\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u30b3\u30fc\u30c9\u306e\u9806\u5e8f\u3092\u5909\u3048\u308b\u3060\u3051\u3067\u5909\u66f4\u3067\u304d\u308b\uff01"}),"\n",(0,o.jsx)(t.li,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u304c\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u306f\u307f\u51fa\u3057\u305f\u308a\u3001\u307e\u3063\u305f\u304f\u57cb\u307e\u3089\u306a\u304b\u3063\u305f\u308a\u3059\u308b\u3088\u308a\u3082\u3001\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30da\u30fc\u30b9\u3092\u6b63\u78ba\u306b\u57cb\u3081\u308b\u65b9\u304c\u306f\u308b\u304b\u306b\u7c21\u5358\u3067\u3059\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u30b5\u30a4\u30ba\u5909\u66f4\u53ef\u80fd\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6271\u3044\u3001\u7279\u5b9a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u5c11\u306a\u304f\u3068\u3082\u4e00\u5b9a\u306e\u30b5\u30a4\u30ba\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3068\u3044\u3046\u30eb\u30fc\u30eb\u3092\u4f5c\u308b\u65b9\u304c\u7c21\u5358\u3060\u3002"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The code for the ",(0,o.jsx)(t.code,{children:"MainContentComponent::resized()"})," function in the demo application looks like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void resized() override\n    {\n        auto area = getLocalBounds()\uff1b\n \n        auto headerFooterHeight = 36\uff1b\n        header.setBounds (area.removeFromTop (headerFooterHeight))\uff1b\n        footer.setBounds (area.removeFromBottom (headerFooterHeight))\uff1b\n \n        auto sidebarWidth = 80\uff1b\n        sidebar.setBounds (area.removeFromLeft (sidebarWidth)); // [2].\n \n        auto contentItemHeight = 24\uff1b\n        orangeContent.setBounds (area.removeFromTop (contentItemHeight))\uff1b\n        limeContent.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09; // [1] \u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4\u3002\n        \u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4Content.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09\uff1b\n        lemonContent.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's look in detail at the first few lines of this function. First we get the ",(0,o.jsx)(t.em,{children:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d0\u30a6\u30f3\u30ba"})," of the component we are laying out, using the Component::getLocalBounds() function. This always returns a rectangle that is at position (0, 0) with the same width and height as the component:"]}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u305f\u3081\u306b\u7d30\u5206\u5316\u3059\u308b\u77e9\u5f62\u3067\u3042\u308b\u3002\u6700\u521d\u306e\u5206\u5272\u306f\u30d8\u30c3\u30c0\u30fc\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u3053\u3068\u3067\u3059\uff1a"}),"\n",(0,o.jsxs)(t.p,{children:["Here we take the rectangle that represents the whole component and effectively create two rectangles. The ",(0,o.jsx)(t.a,{href:"classRectangle.html#a3fbd4e7e1df5336980fb7ec5e752a222",title:"Removes a strip from the top of this rectangle, reducing this rectangle by the specified amount and r...",children:"\u77e9\u5f62::removeFromTop()"})," function returns a rectangle that is at the position of the original rectangle, the same width, but only the height requested by the argument. In this case we ask for a rectangle that is 36 pixels high. The other thing that this function does is that it ",(0,o.jsx)(t.em,{children:"\u30e2\u30c7\u30a3\u30d5\u30a1\u30a4"})," the original rectangle removing the rectangle that we just returned. Essentially, it slices the rectangle at 36 pixels from the top, returns the upper rectangle and modifies the original rectangle to be equal to the lower rectangle."]}),"\n",(0,o.jsx)(t.p,{children:"\u5358\u4f53\u3067\u306f\u3053\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot2.png",caption:"Our first subdivision"}),"\n",(0,o.jsx)(t.p,{children:"\u756a\u76ee\u306e\u7d30\u76ee\u306f\u3001\u30d5\u30c3\u30bf\u30fc\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3067\u3042\u308b\uff1a"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"classRectangle.html#a6f7d3a88adfc3b3bf699ca4ce5b9e6c0",title:"Removes a strip from the bottom of this rectangle, reducing this rectangle by the specified amount an...",children:"\u77e9\u5f62::removeFromBottom()"})," function does the same as the ",(0,o.jsx)(t.a,{href:"classRectangle.html#a3fbd4e7e1df5336980fb7ec5e752a222",title:"Removes a strip from the top of this rectangle, reducing this rectangle by the specified amount and r...",children:"\u77e9\u5f62::removeFromTop()"})," function, except it removes a rectangle from the bottom of the main rectangle and retains the upper rectangle. At this point, our component looks like this:"]}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot3.png",caption:"Our second subdivision"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u6b21\u306b\u3001\u6b8b\u308a\u306e\u9577\u65b9\u5f62\u306e\u5de6\u304b\u308980\u30d4\u30af\u30bb\u30eb\u3092\u524a\u9664\u3057\u3066\u30b5\u30a4\u30c9\u30d0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,o.jsxs)(t.li,{children:["We then subdivide the remaining rectangle multiple times by using the ",(0,o.jsx)(t.a,{href:"classRectangle.html#a3fbd4e7e1df5336980fb7ec5e752a222",title:"Removes a strip from the top of this rectangle, reducing this rectangle by the specified amount and r...",children:"\u77e9\u5f62::removeFromTop()"})," function."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u6700\u5f8c\u306b\u3001\u5b8c\u5168\u306b\u30ec\u30a4\u30a2\u30a6\u30c8\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b8c\u6210\u3059\u308b\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"reordering-items",children:"Reordering items"}),"\n",(0,o.jsxs)(t.p,{children:["As mentioned earlier, it is really easy to reorder items using this technique. For example, we could move the orange content at the top simply by listing it first in the ",(0,o.jsx)(t.code,{children:"\u30ea\u30b5\u30a4\u30ba"})," function [1]:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"auto contentItemHeight = 24\uff1b\n        orangeContent.setBounds (area.removeFromTop (contentItemHeight))\uff1b\n        limeContent.setBounds (area.removeFromTop (contentItemHeight)); // [1].\n        \u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4Content.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09\uff1b\n        lemonContent.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u3093\u306a\u611f\u3058\u3060\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot4.png",caption:"Reordering items"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"\u56fa\u5b9a\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u65b9\u304c\u660e\u3089\u304b\u306b\u30a8\u30ec\u30ac\u30f3\u30c8\u3060\u3002\u53ef\u5909\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u3055\u3089\u306b\u6709\u52b9\u3067\u3042\u308b\u3002"})}),"\n",(0,o.jsxs)(t.p,{children:["We can't move the sidebar to the right-hand side simply by reordering items, but it is just matter of using the ",(0,o.jsx)(t.a,{href:"classRectangle.html#a67c1ae2bf4753bda71894271dc94b4f6",title:"Removes a strip from the right-hand edge of this rectangle, reducing this rectangle by the specified ...",children:"\u77e9\u5f62::removeFromRight()"})," function rather than ",(0,o.jsx)(t.a,{href:"classRectangle.html#a6f09929fd89d447eb230c170446788ac",title:"Removes a strip from the left-hand edge of this rectangle, reducing this rectangle by the specified a...",children:"\u77e9\u5f62::removeFromLeft()"})," [2]:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"auto sidebarWidth = 80\uff1b\n        sidebar.setBounds (area.removeFromLeft (sidebarWidth)); // [2].\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u4eca\u306f\u3053\u3046\u306a\u3063\u3066\u3044\u308b\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot5.png",caption:"Moving the sidebar to the right"}),"\n",(0,o.jsx)(t.h2,{id:"resizing-the-component",children:"Resizing the component"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u5f97\u3089\u308c\u308b\u3082\u3046\u3072\u3068\u3064\u306e\u5229\u70b9\u306f\u3001\u30ea\u30b5\u30a4\u30ba\u304c\u3057\u3070\u3057\u3070\u300c\u3046\u307e\u304f\u3044\u304f\u300d\u3053\u3068\u3060\u3002\u3053\u308c\u306f\u3001\u5e45\u3092\u5e83\u304f\u3001\u9ad8\u3055\u3092\u4f4e\u304f\u3057\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot6.png",caption:"Resizing our simple layout"}),"\n",(0,o.jsx)(t.p,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u4e00\u90e8\u307e\u305f\u306f\u5168\u90e8\u3092\u30d7\u30ed\u30dd\u30fc\u30b7\u30e7\u30ca\u30eb\u306b\u3057\u305f\u3044\u5834\u5408\u3001\u30b3\u30fc\u30c9\u306b\u7d44\u307f\u8fbc\u3080\u306e\u306f\u7c21\u5358\u3060\u3002\u4f8b\u3048\u3070\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u5e45\u3092\u5e38\u306b\u5168\u4f53\u306e4\u5206\u306e1\u306b\u3057\u305f\u3044\u5834\u5408\u306a\u3069\u3067\u3059\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sidebar.setBounds (area.removeFromRight (area.getWidth() / 4))\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u308c\u3092\u8a66\u3057\u3066\u307f\u308c\u3070\u3001\u6709\u7528\u306a\u4e0b\u9650\u304c\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3060\u308d\u3046\u3002\u3053\u306e\u65b9\u6cd5\u3092\u53d6\u308a\u5165\u308c\u308b\u306e\u3082\u7c21\u5358\u3067\u3059\u3002\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u5e45\u3092\u5168\u5e45\u306e4\u5206\u306e1\u306b\u8a2d\u5b9a\u3057\u300180\u30d4\u30af\u30bb\u30eb\u3092\u4e0b\u9650\u3068\u3059\u308b\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sidebar.setBounds (area.removeFromRight (juce::jmax (80, area.getWidth() / 4)))\uff1b\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Create several more buttons with different colours and add them, arranged horizontally, to the section below the ",(0,o.jsx)(t.code,{children:"\u30aa\u30ec\u30f3\u30b8\u30b3\u30f3\u30c6\u30f3\u30c4"}),", ",(0,o.jsx)(t.code,{children:"\u30e9\u30a4\u30e0\u30b3\u30f3\u30c6\u30f3\u30c4"}),", ",(0,o.jsx)(t.code,{children:"\u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4\u30b3\u30f3\u30c6\u30f3\u30c4"}),", and ",(0,o.jsx)(t.code,{children:"\u30ec\u30e2\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4"})," components. Make them fill the entire remaining width."]}),"\n",(0,o.jsx)(t.h2,{id:"other-scenarios",children:"Other scenarios"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u3053\u307e\u3067\u306e\u4f8b\u3067\u306f\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u6b21\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u914d\u7f6e\u3059\u308b\u305f\u3081\u306b\u3001\u6b8b\u308a\u306e\u77e9\u5f62\u3092\u7d30\u5206\u5316\u3057\u7d9a\u3051\u3066\u304d\u305f\u3002\u30b5\u30d6\u77e9\u5f62\u306e1\u3064\u3092\u4fdd\u5b58\u3057\u3066\u3001\u4ee3\u308f\u308a\u306b\u305d\u308c\u3092\u7d30\u5206\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["For example, to place items in a list ",(0,o.jsx)(t.strong,{children:"\u5185"})," the ",(0,o.jsx)(t.em,{children:"\u30b5\u30a4\u30c9\u30d0\u30fc"})," in our example, we would need to store the sidebar rectangle temporarily, then subdivide that. To illustrate this, add three more components to the demo project [3], [4], and [5]:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"private\uff1a\n    juce::TextButton header\uff1b\n    juce::TextButton \u30b5\u30a4\u30c9\u30d0\u30fc\uff1b\n \n    juce::TextButton sideItemA; // [3].\n    juce::TextButton sideItemB; // [4].\n    juce::TextButton sideItemC; // [5] \u3067\u3059\u3002\n \n    juce::TextButton limeContent\uff1b\n    juce::TextButton grapefruitContent\uff1b\n    juce::TextButton lemonContent\uff1b\n    juce::TextButton orangeContent\uff1b\n    juce::TextButton \u30d5\u30c3\u30bf\u30fc\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then configure them in the constructor, while removing the text from the sidebar button [7]:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'//...\n    sidebar.setColour (juce::TextButton::buttonColourId, juce::Colours::grey)\uff1b\n    // [7]\n    addAndMakeVisible (sidebar)\uff1b\n \n    sideItemA.setColour (juce::TextButton::buttonColourId, juce::Colours::maroon)\uff1b\n    sideItemB.setColour (juce::TextButton::buttonColourId, juce::Colours::maroon)\uff1b\n    sideItemC.setColour (juce::TextButton::buttonColourId, juce::Colours::maroon)\uff1b\n    sideItemA.setButtonText ("\u30a2\u30a4\u30c6\u30e0A")\uff1b\n    sideItemB.setButtonText ("\u30a2\u30a4\u30c6\u30e0B")\uff1b\n    sideItemC.setButtonText\uff08\u300c\u30a2\u30a4\u30c6\u30e0C\u300d\uff09\uff1b\n    addAndMakeVisible (sideItemA)\uff1b\n    addAndMakeVisible (sideItemB)\uff1b\n    addAndMakeVisible (sideItemC)\uff1b\n//...\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Finally, change the ",(0,o.jsx)(t.code,{children:"\u30ea\u30b5\u30a4\u30ba"})," function to the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void resized() override\n{\n    auto area = getLocalBounds()\uff1b\n \n    auto headerFooterHeight = 36\uff1b\n    header.setBounds (area.removeFromTop (headerFooterHeight))\uff1b\n    footer.setBounds (area.removeFromBottom (headerFooterHeight))\uff1b\n \n    auto sideBarArea = area.removeFromRight (juce::jmax (80, area.getWidth() / 4))\uff1b\n    sidebar.setBounds (sideBarArea)\uff1b\n \n    auto sideItemHeight = 40\uff1b\n    auto sideItemMargin = 5\uff1b\n    sideItemA.setBounds\uff08sideBarArea.removeFromTop\uff08sideItemHeight\uff09.reduced\uff08sideItemMargin\uff09\uff09\uff1b\n    sideItemB.setBounds\uff08sideBarArea.removeFromTop\uff08sideItemHeight\uff09.reduced\uff08sideItemMargin\uff09\uff09\uff1b\n    sideItemC.setBounds\uff08sideBarArea.removeFromTop\uff08sideItemHeight\uff09.reduced\uff08sideItemMargin\uff09\uff09\uff1b\n \n    auto contentItemHeight = 24\uff1b\n    orangeContent.setBounds (area.removeFromTop (contentItemHeight))\uff1b\n    limeContent.setBounds (area.removeFromTop (contentItemHeight))\uff1b\n    \u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4Content.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09\uff1b\n    lemonContent.setBounds\uff08area.removeFromTop\uff08contentItemHeight\uff09\uff09\uff1b\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Notice also the use of the ",(0,o.jsx)(t.a,{href:"classRectangle.html#a5623a7886c63a08917b392c7bc1135a9",title:"Returns a rectangle that is smaller than this one by a given amount.",children:"\u77e9\u5f62::\u7e2e\u5c0f()"})," function which insets the edges of the rectangle, effectively placing the rectangle within a margin. Build and run the application and it should now look like this."]}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_rectangle_advanced_screenshot7.png",caption:"More sophisticated subdivisions"}),"\n",(0,o.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial we have explored the use of a particular set of functions within the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," class for subdividing rectangles. In particular, we have seen that using this technique for laying out components. We can:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u3088\u308a\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u30b3\u30fc\u30c9\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ec\u30a4\u30a2\u30a6\u30c8\u3059\u308b\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u30b3\u30fc\u30c9\u306e\u30de\u30b8\u30c3\u30af\u30ca\u30f3\u30d0\u30fc\u306e\u4f7f\u7528\u3092\u6e1b\u3089\u3059\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u6700\u5c0f\u9650\u306e\u30b3\u30fc\u30c9\u5909\u66f4\u3067\u3001\u30ec\u30a4\u30a2\u30a6\u30c8\u4f4d\u7f6e\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u914d\u7f6e\u9806\u5e8f\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_component_parents_children/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_look_and_feel_customisation/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_point_line_rectangle/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_flex_box_grid/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebFlexBox\u3068Grid\u3092\u4f7f\u3063\u305f\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6GUI\u30ec\u30a4\u30a2\u30a6\u30c8"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(4848);function r(e){let{src:t,caption:n,alt:r,width:i,height:s}=e;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:t,alt:r||n,width:i,height:s}),(0,o.jsx)("figcaption",{children:(0,o.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(4848);function r(e){let{path:t}=e;return(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);