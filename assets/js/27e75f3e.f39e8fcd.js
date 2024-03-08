"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[2843],{7687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(4848),s=t(8453),i=t(3449);t(6378);const r={title:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",sidebar_position:1},c="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",a={id:"interface-design/tutorial_component_parents_children",title:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",description:"This tutorial introduces the hierarchical nature of the \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 class whereby one component can contain one or more nested child components. This is key to laying out user interfaces in JUCE.",source:"@site/docs/interface-design/tutorial_component_parents_children.mdx",sourceDirName:"interface-design",slug:"/interface-design/tutorial_component_parents_children",permalink:"/juce-tutorial-ja/interface-design/tutorial_component_parents_children",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_component_parents_children.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interface Design",permalink:"/juce-tutorial-ja/category/interface-design"},next:{title:"\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",permalink:"/juce-tutorial-ja/interface-design/tutorial_look_and_feel_customisation"}},h={},d=[{value:"Adding child components",id:"adding-child-components",level:2},{value:"Setting child component bounds",id:"setting-child-component-bounds",level:2},{value:"The floor",id:"the-floor",level:2},{value:"The house",id:"the-house",level:2},{value:"The wall",id:"the-wall",level:3},{value:"The roof",id:"the-roof",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,o.jsxs)(n.p,{children:["This tutorial introduces the hierarchical nature of the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class whereby one component can contain one or more nested child components. This is key to laying out user interfaces in JUCE."]}),"\n",(0,o.jsx)(n.p,{children:"\u30ec\u30d9\u30eb Beginner"}),"\n",(0,o.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux, iOS, Android"}),"\n",(0,o.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/namespaceColours",title:"Contains a set of predefined named colours (mostly standard HTML colours)",children:"\u30ab\u30e9\u30fc"})]}),"\n",(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This tutorial leads on from ",(0,o.jsx)(n.a,{href:"../tutorial_graphics_class/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"}),", which you should have read and understood first."]})}),"\n",(0,o.jsxs)(n.p,{children:["Download the demo project for this tutorial here: ",(0,o.jsx)(n.a,{href:"/tutorials/PIPs/ComponentParentsChildrenTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,o.jsx)(n.a,{href:"/tutorials/ZIPs/ComponentParentsChildrenTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need help with this step, see ",(0,o.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,o.jsx)(n.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,o.jsx)(n.p,{children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u3001\u5bb6\u306e\u7c21\u5358\u306a\u56f3\u9762\u3092\u542b\u3080\u30b7\u30fc\u30f3\u3092\u8868\u793a\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_component_parents_children_screenshot1.png",caption:"A scene comprising separate elements."}),"\n",(0,o.jsxs)(n.p,{children:["Does that look familiar? It's rather similar to the end result of ",(0,o.jsx)(n.a,{href:"../tutorial_graphics_class/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"}),"! The difference here is that each of the parts is drawn into a separate ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object using separate ",(0,o.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"}),' functions. As we will see, these are grouped logically. For example, the wall of the house and its roof are grouped into a single "house" object.']}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u308c\u304c\u3069\u306e\u3088\u3046\u306b\u7d44\u307f\u5408\u308f\u3055\u308c\u308b\u306e\u304b\u3001\u306a\u305c\u3053\u306e\u3088\u3046\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u69cb\u6210\u3059\u308b\u306e\u304c\u826f\u3044\u306e\u304b\u3001\u63a2\u3063\u3066\u307f\u3088\u3046\u3002"}),"\n",(0,o.jsx)(n.h1,{id:"the-component-class-hierarchy",children:"The Component class hierarchy"}),"\n",(0,o.jsxs)(n.p,{children:["Most user interfaces comprise a number of elements, such as pieces of text, buttons, sliders, menus, and so on. For example, the following screenshot shows the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioDeviceSelectorComponent",title:"A component containing controls to let the user change the audio settings of an AudioDeviceManager ob...",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30d0\u30a4\u30b9\u30bb\u30ec\u30af\u30bf\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class (which is for controlling audio hardware settings, see ",(0,o.jsx)(n.a,{href:"../tutorial_audio_device_manager/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioDeviceManager\u30af\u30e9\u30b9"})," for more information). This contains a button, some labels, some menus (combo boxes), some radio buttons, and an audio level indicator."]}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_component_parents_children_screenshot2.png",caption:"A user interface for controlling audio hardware settings."}),"\n",(0,o.jsxs)(n.p,{children:["Some individual user interface elements may also group together other user interface elements to form more useful controls. For example, the JUCE ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"})," class can contain not only the slider itself but also a text box that shows the slider's current value. This is shown in the following screenshot:"]}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_component_parents_children_screenshot3.png",caption:"The JUCE Slider class."}),"\n",(0,o.jsxs)(n.p,{children:["In each of these cases, by separating the individual elements into separate parts of hierarchy, it is much easier to design the layout of the interface (and respond to user interaction). Some components may use their ",(0,o.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function to draw themselves. Other components may simply contain other components. Some components may contain other components ",(0,o.jsx)(n.em,{children:"\u305d\u3057\u3066"})," perform some drawing. The design choices are quite flexible."]}),"\n",(0,o.jsx)(n.h1,{id:"the-maincontentcomponent-class",children:"The MainContentComponent class"}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial the ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class contains an instance of another component class as a member. This is the ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class, which draws the actual scene. Look at the ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class within the project. A SceneComponent object is added as a private member:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"private\uff1a\n    SceneComponent scene\uff1b\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"adding-child-components",children:"Adding child components"}),"\n",(0,o.jsxs)(n.p,{children:["Within the ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor, this ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object is added as a ",(0,o.jsx)(n.em,{children:"\u5b50\u4f9b"})," component and the ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object becomes its ",(0,o.jsx)(n.em,{children:"\u89aa"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u5e38\u306b1\u3064\u306e\u89aa\u3092\u6301\u305f\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u5fc5\u8981\u3067\u3042\u308c\u3070\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u89aa\u304b\u3089\u524a\u9664\u3057\u3001\u5225\u306e\u89aa\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,o.jsx)(n.p,{children:"\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u53ef\u8996\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e2\u3064\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u5225\u3005\u306b\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001Component::addAndMakeVisible()\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u308c\u30892\u3064\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u30921\u3064\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u5b9f\u884c\u3059\u308b\u306e\u304cJUCE\u306e\u4e00\u822c\u7684\u306a\u30a4\u30c7\u30a3\u30aa\u30e0\u3067\u3059\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MainContentComponent()\n    {\n        addAndMakeVisible (scene)\uff1b\n        setSize (600, 400)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setting-child-component-bounds",children:"Setting child component bounds"}),"\n",(0,o.jsxs)(n.p,{children:["While our ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class sets its own size during construction, many component objects initially have a zero size. The call to the Component::setSize() function will in turn trigger a call to our ",(0,o.jsx)(n.code,{children:"MainContentComponent::resized()"})," function. This is a good place to set the size and position of any child components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void resized() override\n    {\n        scene.setBounds (0, 0, getWidth(), getHeight())\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The important point here is that the coordinates in the call to the ",(0,o.jsx)(n.code,{children:"SceneComponent::setBounds()"})," function are relative to its parent component (in this case our ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object). What this means is that the top-left corner of the parent component is point (0, 0) and the child component will be positioned such that its top-left corner will be relative to this point. In fact our ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object fills the entire content of our ",(0,o.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object. An alternative way to write this is to use the Component::getLocalBounds() function. This returns a ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object representing the bounds of the component that calls it. This results in a rectangle with a position (0, 0) and a size that its width and height. This ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object can then be passed to the ",(0,o.jsx)(n.code,{children:"SceneComponent::setBounds()"})," function. The alternative code is shown in the following code snippet:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void resized() override\n{\n    scene.setBounds (getLocalBounds())\uff1b\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The next section of this tutorial reflects the structure of this ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Child components may be positioned to exceed the bounds of the parent component but everything outside the parent component's bounds will not be drawn. If you can't see your component, make sure that the bounds have been set properly (for example, in the parent component\u2019s ",(0,o.jsx)(n.code,{children:"\u30ea\u30b5\u30a4\u30ba"})," function)."]})}),"\n",(0,o.jsx)(n.h1,{id:"the-scene",children:"The scene"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class does some of its own drawing and contains two child components (representing the floor and the house). The ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," declaration is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"class SceneComponent : public juce::Component\n{\n// ...\nprivate\uff1a\n    FloorComponent floor\uff1b\n    HouseComponent house\uff1b\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (SceneComponent)\n};\nJUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR#define JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(className)\u3053\u308c\u306f\u3001JUCE_DECLARE_NON_COPYABLE \u3068 JUCE_LEAK_DETECTOR \u30de\u30af\u30ed\u306e\u4e21\u65b9\u3092 ...\u5b9a\u7fa9 juce_PlatformDefs.h:245 \u306b\u8a18\u8ff0\u3059\u308b\u7701\u7565\u8a18\u6cd5\u3067\u3059\u3002\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"\u30d5\u30ed\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," and ",(0,o.jsx)(n.code,{children:"\u30cf\u30a6\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," objects are added and made visible in the constructor:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8()\n    {\n        addAndMakeVisible (floor)\uff1b\n        addAndMakeVisible (house)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To draw the sky, we fill the entire component with light blue in the ",(0,o.jsx)(n.code,{children:"SceneComponent::paint()"})," function."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::lightblue)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The floor and the house have their bounds positioned within the ",(0,o.jsx)(n.code,{children:"SceneComponent::resized()"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void resized() override\n    {\n        floor.setBounds (10, 297, 580, 5)\uff1b\n        house.setBounds (300, 70, 200, 220)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u307e\u305a\u81ea\u5206\u81ea\u8eab\u3092\u63cf\u753b\u3057\u3001\u305d\u306e\u4e0a\u306b\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u63cf\u753b\u3057\u307e\u3059\u3002\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4e0a\u306b\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001Component::paintOverChildren()\u95a2\u6570\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3067\u304d\u307e\u3059\u3002\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u305f\u9806\u306b\u63cf\u753b\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001Component::toFront(), Component::toBack(), Component::toBehind(), \u307e\u305f\u306f Component::setAlwaysOnTop() \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u5f8c\u3067\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,o.jsx)(n.p,{children:"\u305d\u308c\u305e\u308c\u306e\u30af\u30e9\u30b9\u306e\u4e2d\u3067\u3001\u5e8a\u3068\u5bb6\u304c\u3069\u306e\u3088\u3046\u306b\u63cf\u304b\u308c\u3066\u3044\u308b\u304b\u3092\u898b\u3066\u307f\u3088\u3046\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"the-floor",children:"The floor"}),"\n",(0,o.jsxs)(n.p,{children:["The floor is drawn as a green horizontal line (as in ",(0,o.jsx)(n.a,{href:"../tutorial_graphics_class/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"}),") five pixels thick, centred vertically within the component, and spanning its full width. Here is the ",(0,o.jsx)(n.code,{children:"\u30d5\u30ed\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8::\u30da\u30a4\u30f3\u30c8()"})," function (from the ",(0,o.jsx)(n.code,{children:"\u30d5\u30ed\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.setColour (juce::Colours::green)\uff1b\n        g.drawLine (0.0f, (float) getHeight() / 2.0f, (float) getWidth(), (float) getHeight() / 2.0f, 5.0f)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"the-house",children:"The house"}),"\n",(0,o.jsxs)(n.p,{children:["The house itself doesn't perform any drawing of its own (it does not have a ",(0,o.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function) but comprises two other components (representing the wall and roof of the house) in the ",(0,o.jsx)(n.code,{children:"\u30cf\u30a6\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"class HouseComponent : public juce::Component\n{\n// ...\nprivate\uff1a\n    WallComponent wall\uff1b\n    RoofComponent roof\uff1b\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (HouseComponent)\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"\u30a6\u30a9\u30fc\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," and ",(0,o.jsx)(n.code,{children:"\u30eb\u30fc\u30d5\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," objects are added and made visible in the constructor:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u30cf\u30a6\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8()\n    {\n        addAndMakeVisible (wall)\uff1b\n        addAndMakeVisible (roof)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["These are positioned proportionally in the ",(0,o.jsx)(n.code,{children:"\u30cf\u30a6\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8::\u30ea\u30b5\u30a4\u30ba()"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void resized() override\n    {\n        auto separation = juce::jlimit (2, 10, getHeight() / 20); // [1].\n \n        roof.setBounds (0, 0, getWidth(), (int) (getHeight() * 0.2) - separation / 2); // [2].\n        wall.setBounds (0, (int) (getHeight() * 0.20) + \u5206\u96e2 / 2, getWidth(), (int) (getHeight() * 0.80) - \u5206\u96e2); // [3].\n    }\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["[1]: First we calculate the separation between the roof and wall. Let's make this 1\u204420 of the height of the house but make it no smaller than 2 pixels \u2014 using the ",(0,o.jsx)(n.a,{href:"group__juce__core-maths.html#gacf7cd562ab136d15d3bf5c3be047cf96",children:"jlimit()"})," function. This so that there is always a gap between the roof and the wall even when the height is small. When the height is large then the gap remains proportional to the height."]}),"\n",(0,o.jsx)(n.li,{children:"[2]: The roof is set to be the full width of the house and 1\u20445 of the height of the house. This is adjusted to account for the separation."}),"\n",(0,o.jsx)(n.li,{children:"[3]: The wall is positioned under the roof occupying 4\u20445 of the height of the house. This is also adjusted to account for the separation."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"the-wall",children:"The wall"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"\u30a6\u30a9\u30fc\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class is simple. It just fills itself with a checkerboard pattern in the ",(0,o.jsx)(n.code,{children:"\u30a6\u30a9\u30fc\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8::\u30da\u30a4\u30f3\u30c8()"})," function (from the ",(0,o.jsx)(n.code,{children:"\u30a6\u30a9\u30fc\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.fillCheckerBoard (getLocalBounds().toFloat(), 30, 10\u3001\n                            juce::Colours::sandybrown, juce::Colours::saddlebrown)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(n.h3,{id:"the-roof",children:"The roof"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"\u30eb\u30fc\u30d5\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class draws a triangle using a ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," object in the ",(0,o.jsx)(n.code,{children:"\u30eb\u30fc\u30d5\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8::\u30da\u30a4\u30f3\u30c8()"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.setColour (juce::Colours::red)\uff1b\n \n        juce::Path roof\uff1b\n        roof.addTriangle (0.0f, (float) getHeight(), (float) getWidth(), (float) getHeight(), (float) getWidth() / 2.0f, 0.0f)\uff1b\n        g.fillPath (roof)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If we call the width of the ",(0,o.jsx)(n.code,{children:"\u30eb\u30fc\u30d5\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object w and the height h then the three points that make up the triangle are: (0, h), (w, h\uff09, (w\u20442, 0)."]}),"\n",(0,o.jsx)(n.p,{children:"\u30b7\u30fc\u30f3\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f4d\u7f6e\u3092\u5909\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,o.jsx)(n.h1,{id:"adding-a-sun",children:"Adding a sun"}),"\n",(0,o.jsxs)(n.p,{children:["Let's add a sun to our scene. A number of empty functions are provided for you in the ",(0,o.jsx)(n.code,{children:"\u30b5\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class, to which we will add some code in a moment."]}),"\n",(0,o.jsxs)(n.p,{children:["First, we need to make some changes to the ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class. Add an instance of the ",(0,o.jsx)(n.code,{children:"\u30b5\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class to the private section [4]:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"private\uff1a\n    FloorComponent floor\uff1b\n    HouseComponent house\uff1b\n    SunComponent sun; // [4].\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (SceneComponent)\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then we need to add the sun and make it visible [5]:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8()\n    {\n        addAndMakeVisible (floor)\uff1b\n        addAndMakeVisible (house)\uff1b\n        addAndMakeVisible (sun); // [5].\n    }\n"})}),"\n",(0,o.jsx)(n.p,{children:"And position the sun in the top-right corner [6]:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void resized() override\n    {\n        floor.setBounds (10, 297, 580, 5)\uff1b\n        house.setBounds (300, 70, 200, 220)\uff1b\n        sun .setBounds (530, 10, 60, 60); // [6].\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We need to add the drawing code to the ",(0,o.jsx)(n.code,{children:"\u30b5\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8::\u30da\u30a4\u30f3\u30c8()"})," function (in the ",(0,o.jsx)(n.code,{children:"\u30b5\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.setColour (juce::Colours::yellow)\uff1b\n \n        auto lineThickness = 3.0f\uff1b\n        g.drawEllipse (lineThickness * 0.5f\u3001\n                       lineThickness * 0.5f\u3001\n                       (float) getWidth() - lineThickness * 2\u3001\n                       (float) getHeight() - lineThickness * 2\u3001\n                       lineThickness)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6955\u5186\u3092\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5883\u754c\u5185\u306b\u308f\u305a\u304b\u306b\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u7dda\u306e\u592a\u3055\u306b\u4f9d\u5b58\u3059\u308b\u306f\u305a\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u5ea7\u6a19\u306b\u6b63\u78ba\u306b\u4f4d\u7f6e\u3059\u308b\u7dda\u306e\u4e2d\u5fc3\u3060\u304b\u3089\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7aef\u306b\u7dda\u3092\u5f15\u3044\u305f\u5834\u5408\u3001\u7dda\u306e\u592a\u3055\u306e\u534a\u5206\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u67a0\u5916\u306b\u4f4d\u7f6e\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u6955\u5186\u306e\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba\u3092\u5c11\u3057\u8abf\u6574\u3057\u306a\u3044\u3068\u3069\u3046\u306a\u308b\u304b\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_component_parents_children_screenshot4.png",caption:"Drawing is clipped to the bounds of the component."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Another way around this is to use the Component::setPaintingIsUnclipped() function to allow the component to draw beyond its bounds. Make sure you read the ",(0,o.jsx)(n.a,{href:"https://juce.com/doc/classes",children:"API"})," documentation, as there are some caveats in the use of this function."]})}),"\n",(0,o.jsx)(n.p,{children:"\u6700\u7d42\u7684\u306a\u30b7\u30fc\u30f3\u306f\u3053\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_component_parents_children_screenshot5.png",caption:"Our final scene."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The changed code for this step can be found in the ",(0,o.jsx)(n.code,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u89aa\u5b50\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_02.h"})," file of the demo project."]})}),"\n",(0,o.jsxs)(n.p,{children:["Using the code above, the sun is always drawn as an ellipse. Since we specify the ",(0,o.jsx)(n.code,{children:"\u30b5\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object to be a square, we don't notice this potential problem. Fix the ",(0,o.jsx)(n.code,{children:"\u30b5\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class such that it always draws a circle within its bounds \u2014 rather than an ellipse \u2014 even if its width and height aren't the same."]}),"\n",(0,o.jsx)(n.h1,{id:"reusing-components",children:"Reusing components"}),"\n",(0,o.jsxs)(n.p,{children:["One of the main benefits of the coordinate system used by the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class, is that drawing is always performed relative to the top-left of the component. Another benefit of encapsulating drawing into a separate class is that it can be reused easily."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, we can easily add another house [7] to the ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"private\uff1a\n    FloorComponent floor\uff1b\n    HouseComponent house\uff1b\n    HouseComponent smallHouse; // [7].\n    SunComponent sun\uff1b\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (SceneComponent)\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then add it and make it visible [8] in the ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8()\n    {\n        addAndMakeVisible (floor)\uff1b\n        addAndMakeVisible (house)\uff1b\n        addAndMakeVisible (smallHouse); // [8] \u3092\u8ffd\u52a0\u3059\u308b\u3002\n        addAndMakeVisible (sun)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And position it [9] in the ",(0,o.jsx)(n.code,{children:"SceneComponent::resized()"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"void resized() override\n    {\n        floor .setBounds (10, 297, 580, 5)\uff1b\n        house .setBounds (300, 70, 200, 220)\uff1b\n        smallHouse .setBounds (50, 50, 50, 50); // [9].\n        sun .setBounds (530, 10, 60, 60)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5c0f\u3055\u306a\u5bb6\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30b7\u30fc\u30f3\u306f\u3053\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_component_parents_children_screenshot6.png",caption:"Our final scene with an additional small house."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The changed code for this final step can be found in the ",(0,o.jsx)(n.code,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u89aa\u5b50\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_03.h"})," file of the demo project."]})}),"\n",(0,o.jsxs)(n.p,{children:["Create a new class ",(0,o.jsx)(n.code,{children:"\u30b9\u30c8\u30ea\u30fc\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," that contains a number of ",(0,o.jsx)(n.code,{children:"\u30cf\u30a6\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," objects in a row to form a street, and add it to the project. Modify the ",(0,o.jsx)(n.code,{children:"\u30b7\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class such that it contains some streets and individual houses."]}),"\n",(0,o.jsx)(n.h1,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial we have introduced the hierarchical parent and child system that is used by the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class. In particular, we have learned:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Component::addAndMakeVisible() \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u76f8\u5bfe\u7684\u306a\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u305d\u308c\u81ea\u8eab\u304c\u63cf\u753b\u3092\u884c\u3046\u3053\u3068\u3082\u3001\u63cf\u753b\u3092\u884c\u3046\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u3053\u3068\u3082\u3001\u305d\u306e\u4e21\u65b9\u3092\u884c\u3046\u3053\u3068\u3082\u3067\u304d\u308b\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6700\u521d\u306b\u63cf\u753b\u3092\u5b9f\u884c\u3057\u3001\u6b21\u306b\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u89aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u305f\u9806\u306b\u63cf\u753b\u3055\u308c\u308b\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u63cf\u753b\u306f\u901a\u5e38\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5883\u754c\u306b\u30af\u30ea\u30c3\u30d7\u3055\u308c\u308b\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_graphics_class/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_look_and_feel_customisation/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_point_line_rectangle/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_rectangle_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_open_gl_application/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebOpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3449:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(4848);function s(e){let{src:n,caption:t,alt:s,width:i,height:r}=e;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:n,alt:s||t,width:i,height:r}),(0,o.jsx)("figcaption",{children:(0,o.jsx)("b",{children:t})})]})}},6378:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(4848);function s(e){let{path:n}=e;return(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://docs.juce.com/master/"+n,children:"\ud83d\udcda Source Page"})})}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);