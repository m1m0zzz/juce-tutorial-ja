"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[9730],{5113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(4848),s=n(8453),i=n(3449);n(6378);const r={title:"\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",sidebar_position:2},l="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b",c={id:"interface-design/tutorial_look_and_feel_customisation",title:"\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",description:"Customise the drawing of fundamental widgets in your application. Make a custom \u30b9\u30ad\u30f3 for your application by drawing your own buttons, sliders, and other components.",source:"@site/docs/interface-design/tutorial_look_and_feel_customisation.mdx",sourceDirName:"interface-design",slug:"/interface-design/tutorial_look_and_feel_customisation",permalink:"/juce-tutorial-ja/interface-design/tutorial_look_and_feel_customisation",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_look_and_feel_customisation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",permalink:"/juce-tutorial-ja/interface-design/tutorial_component_parents_children"},next:{title:"JUCE\u306e\u30ab\u30e9\u30fc",permalink:"/juce-tutorial-ja/interface-design/tutorial_colours"}},a={},d=[{value:"Customising drawing",id:"customising-drawing",level:2},{value:"Slider customisation",id:"slider-customisation",level:2},{value:"Button customisation",id:"button-customisation",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"}),"\n",(0,o.jsxs)(t.p,{children:["Customise the drawing of fundamental widgets in your application. Make a custom ",(0,o.jsx)(t.em,{children:"\u30b9\u30ad\u30f3"})," for your application by drawing your own buttons, sliders, and other components."]}),"\n",(0,o.jsx)(t.p,{children:"\u30ec\u30d9\u30eb Beginner"}),"\n",(0,o.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux, iOS, Android"}),"\n",(0,o.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classButton",title:"A base class for buttons.",children:"\u30dc\u30bf\u30f3"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAffineTransform",title:"Represents a 2D affine-transformation matrix.",children:"\u30a2\u30d5\u30a3\u30f3\u5909\u63db"})]}),"\n",(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,o.jsx)(t.a,{href:"/tutorials/PIPs/LookAndFeelCustomisationTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,o.jsx)(t.a,{href:"/tutorials/ZIPs/LookAndFeelCustomisationTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need help with this step, see ",(0,o.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u6a19\u6e96\u7684\u306aJUCE\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3092\u7528\u3044\u3066\u30012\u3064\u306e\u30dc\u30bf\u30f3\u30682\u3064\u306e\u56de\u8ee2\u30b9\u30e9\u30a4\u30c0\u304b\u3089\u306a\u308bGUI\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_look_and_feel_customisation_screenshot1.png",caption:"Standard look-and-feel buttons and sliders"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," class is fundamental to creating customised GUIs in JUCE. Using the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," class you can perform simple customisations such as changing the default colours of certain components. But you can also customise the drawing of many types of component. For example, this allows you to create buttons and sliders with a custom appearance."]}),"\n",(0,o.jsx)(t.h1,{id:"customising-colours",children:"Customising colours"}),"\n",(0,o.jsxs)(t.p,{children:["When a ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," object is applied to a component, it is applied to that component ",(0,o.jsx)(t.em,{children:"\u305d\u3057\u3066"})," its child components (see ",(0,o.jsx)(t.a,{href:"../tutorial_component_parents_children/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),") unless the child components have specifically had a different look-and-feel assigned."]}),"\n",(0,o.jsxs)(t.p,{children:["One thing that you can do with the look-and-feel system is to override specific colours for elements of the standard JUCE components (see ",(0,o.jsx)(t.a,{href:"../tutorial_colours/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebJUCE\u306e\u8272"}),".) For example, if you add the following line to the ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor, then ",(0,o.jsx)(t.em,{children:"\u4e21\u65b9"})," dials will be red:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"getLookAndFeel().setColour (juce::Slider::thumbColourId, juce::Colours::red)\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_look_and_feel_customisation_screenshot2.png",caption:"Overriding look-and-feel colours"}),"\n",(0,o.jsxs)(t.p,{children:["To set the two dials differently we could make a new ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," instance and apply that to only one of the dials. First add a ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V4",title:"The latest JUCE look-and-feel style, as introduced in 2017.",children:"LookAndFeel_V4"})," object as a member [1] (this is the class that implements the default JUCE look-and-feel)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"private\uff1a\n    juce::LookAndFeel_V4 otherLookAndFeel; // [1].\n    juce::Slider dial1\uff1b\n    juce::Slider dial2\uff1b\n    juce::TextButton button1\uff1b\n    juce::TextButton button2\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u6b21\u306b\u3001\u5148\u307b\u3069\u8ffd\u52a0\u3057\u305f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30b3\u30fc\u30c9\u884c\u3092\u6b21\u306e\u3088\u3046\u306b\u5909\u66f4\u3059\u308b\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"otherLookAndFeel.setColour (juce::Slider::thumbColourId, juce::Colours::red)\uff1b\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's use this look-and-feel ",(0,o.jsx)(t.em,{children:"\u306e\u307f"})," for the first dial. Add this line of code to the ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor:"]}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u308c\u3067\u3001\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306aUI\u304c\u4f5c\u6210\u3055\u308c\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_look_and_feel_customisation_screenshot3.png",caption:"Using diffrent look-and-feel objects for different components"}),"\n",(0,o.jsxs)(t.p,{children:["Of course, in this simple example this approach offers no benefits compared to setting the ",(0,o.jsx)(t.a,{href:"classSlider.html#a1012002c53381ccc7c1fe7e604a75f44aee563b22e0033b0ed4f38e5296889835",title:"The colour to draw the thumb with.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::thumbColourId"})," colour on the slider objects directly. But your app may use multiple sliders for different purposes where you want sliders for one purpose to use one set of colours and sliders for other purposes to use different sets of colours. This approach allows you to change these colours globally as long as each slider is assigned the appropriate look-and-feel for its type."]}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u5229\u70b9\u306f\u3001\u5b9f\u969b\u306e\u63cf\u753b\u30b3\u30fc\u30c9\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u59cb\u3081\u308b\u3068\u306f\u3063\u304d\u308a\u3059\u308b\u3002\u7279\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u30fb\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u30fb\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"}),"\n",(0,o.jsx)(t.h1,{id:"custom-look-and-feel",children:"Custom look-and-feel"}),"\n",(0,o.jsxs)(t.p,{children:["To customise the drawing of certain components we need to create a new class that inherits from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," class. If you inherit directly from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," class itself then you'll need to implement ",(0,o.jsx)(t.em,{children:"\u3059\u3079\u3066"})," of the pure virtual functions. It's much more practical to inherit from one of the classes that already has all of these functions defined. Then you need override only the ones you need. Let's create a simple custom look-and-feel that has only this one colour change defined compared to the default look-and-feel."]}),"\n",(0,o.jsx)(t.p,{children:"\u307e\u305a\u3001\u5148\u307b\u3069\u8ffd\u52a0\u3057\u305f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u304b\u3089\u3053\u306e\u884c\u3092\u524a\u9664\u3059\u308b\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"otherLookAndFeel.setColour (juce::Slider::thumbColourId, juce::Colours::red)\uff1b\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now, add our new class, which inherits from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V4",title:"The latest JUCE look-and-feel style, as introduced in 2017.",children:"LookAndFeel_V4"})," class, before the ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"class OtherLookAndFeel : public juce::LookAndFeel_V4\n{\npublic\uff1a\n    OtherLookAndFeel()\n    {\n        setColour (juce::Slider::thumbColourId, juce::Colours::red)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Before we run this code, change the class name of our ",(0,o.jsx)(t.code,{children:"\u305d\u306e\u4ed6\u306e\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," member to OtherLookAndFeel [2]:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"private\uff1a\n    OtherLookAndFeel otherLookAndFeel; // [2].\n    juce::Slider dial1\uff1b\n    juce::Slider dial2\uff1b\n    juce::TextButton button1\uff1b\n    juce::TextButton button2\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u524d\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3068\u540c\u3058\u7d50\u679c\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"customising-drawing",children:"Customising drawing"}),"\n",(0,o.jsxs)(t.p,{children:["There are many functions in the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," class for many different types of components. The functions that are designated for a specific component type are easy to find as these are all declared within a nested class named ",(0,o.jsx)(t.code,{children:"\u30eb\u30c3\u30af\u30fb\u30a2\u30f3\u30c9\u30fb\u30d5\u30a3\u30fc\u30eb\u30fb\u30e1\u30bd\u30c3\u30c9"})," within the relevant component class."]}),"\n",(0,o.jsx)(t.h2,{id:"slider-customisation",children:"Slider customisation"}),"\n",(0,o.jsxs)(t.p,{children:["For example, take a look at the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/structSlider_1_1LookAndFeelMethods",title:"This abstract base class is implemented by LookAndFeel classes to provide slider drawing functionalit...",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::LookAndFeelMethods"})," within the JUCE API documentation. In this list you will notice a function named ",(0,o.jsx)(t.a,{href:"structSlider_1_1LookAndFeelMethods.html#ae63a9d8adce084cd5dbe02b960c73a9a",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::LookAndFeelMethods::drawRotarySlider()"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's override this in our ",(0,o.jsx)(t.code,{children:"\u305d\u306e\u4ed6LookAndFeel"})," class. Add the declaration to the class:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void drawRotarySlider (juce::Graphics& g, int x, int y, int width, int height, float sliderPos\u3001\n                           const float rotaryStartAngle, const float rotaryEndAngle, juce::Slider&) override\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u3053\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u304c\u6e21\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308b\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"g"}),": The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," context."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"x"}),": The x coordinate of the top-left of the rectangle within which we should draw our rotary slider."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"y"}),": The y coordinate of the top-left of the rectangle within which we should draw our rotary slider."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u5e45"}),": The width of the rectangle within which we should draw our rotary slider."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u9ad8\u3055"}),": The height of the rectangle within which we should draw our rotary slider."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u4f4d\u7f6e"}),": The ",(0,o.jsx)(t.em,{children:"\u4f4d\u7f6e"})," of the slider as a proportion in the range 0..1 (this is independent of the slider's actual range of values)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u56de\u8ee2\u958b\u59cb\u89d2\u5ea6"}),": The start angle of the dial rotation (in radians)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u56de\u8ee2\u7d42\u4e86\u89d2\u5ea6"}),": The end angle of the dial rotation (in radians)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u30b9\u30e9\u30a4\u30c0\u30fc"}),": The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"})," object itself."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The x, y, width, and height arguments take into account the size and position of any ",(0,o.jsx)(t.em,{children:"\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"})," that the slider may be using. This is why we can just access the slider position and size and use those values."]})}),"\n",(0,o.jsx)(t.p,{children:"\u3067\u306f\u3001\u6587\u5b57\u76e4\u306e\u6307\u91dd\u3092\u8868\u3059\u7dda\u3068\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u5186\u3060\u3051\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u6587\u5b57\u76e4\u3092\u63cf\u304f\u3088\u3046\u306b\u3001\u95a2\u6570\u672c\u4f53\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u307e\u305a\u3001\u6e21\u3055\u308c\u305f\u5024\u306b\u57fa\u3065\u3044\u3066\u8a08\u7b97\u3059\u308b\u305f\u3081\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u4e00\u6642\u5909\u6570\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"auto radius = (float) juce::jmin (width / 2, height / 2) - 4.0f\uff1b\n        auto centerX = (float) x + (float) width * 0.5f\uff1b\n        auto centreY = (float) y + (float) height * 0.5f\uff1b\n        auto rx = centerX - radius\uff1b\n        auto ry = centerY - radius\uff1b\n        auto rw = radius * 2.0f\uff1b\n        auto angle = rotaryStartAngle + sliderPos * (rotaryEndAngle - rotaryStartAngle)\uff1b\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["You can see that the final ",(0,o.jsx)(t.code,{children:"\u89d2\u5ea6"})," variable contains the angle at which the dial should point."]})}),"\n",(0,o.jsx)(t.p,{children:"\u6b21\u306b\u3001\u6587\u5b57\u76e4\u306e\u8272\u3092\u5857\u308a\u3064\u3076\u3057\u3001\u8f2a\u90ed\u3092\u63cf\u304f\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u3088\u3046\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// \u5857\u308a\u3064\u3076\u3057\n        g.setColour (juce::Colours::orange)\uff1b\n        g.fillEllipse (rx, ry, rw, rw)\uff1b\n \n        // \u8f2a\u90ed\n        g.setColour (juce::Colours::red)\uff1b\n        g.drawEllipse (rx, ry, rw, rw, 1.0f)\uff1b\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To draw the pointer itself, first we'll use a ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," object that we will translate and rotate into position by the required angle:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"juce::Path p\uff1b\n        auto pointerLength = radius * 0.33f\uff1b\n        auto pointerThickness = 2.0f\uff1b\n        p.addRectangle (-pointerThickness * 0.5f, -radius, pointerThickness, pointerLength)\uff1b\n        p.applyTransform (juce::AffineTransform::rotation (angle).translated (centreX, centreY))\uff1b\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u305d\u3057\u3066\u3001\u3053\u306e\u30d1\u30b9\u3092\u57cb\u3081\u3066\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u63cf\u753b\u3059\u308b\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// \u30dd\u30a4\u30f3\u30bf\n        g.setColour (juce::Colours::yellow)\uff1b\n        g.fillPath (p)\uff1b\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The completed code for this section can be found in the ",(0,o.jsx)(t.code,{children:"LookAndFeelCustomisationTutorial_02.h"})," file of the demo project for this tutorial."]})}),"\n",(0,o.jsx)(t.p,{children:"\u30dd\u30a4\u30f3\u30bf\u306e\u63cf\u753b\u3092\u5909\u66f4\u3059\u308b\u3002\u9577\u3055\u3092\u5909\u3048\u3066\u307f\u305f\u308a\u3001\u5c11\u3057\u592a\u3044\u3051\u308c\u3069\u4e38\u307f\u3092\u5e2f\u3073\u305f\u9577\u65b9\u5f62\u306b\u3057\u3066\u307f\u305f\u308a\u3001\u77e2\u5370\u3092\u63cf\u3044\u3066\u307f\u305f\u308a\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["This shows you only one simple customisation of one of the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"})," look-and-feel methods. But the principle applies to the other methods. Perhaps the best approach for creating other customisations is to look at the existing implementation in the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V4",title:"The latest JUCE look-and-feel style, as introduced in 2017.",children:"LookAndFeel_V4"})," or ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V3",title:"The latest JUCE look-and-feel style, as introduced in 2013.",children:"LookAndFeel_V3"})," classes and use this as a basis for your own code."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V4",title:"The latest JUCE look-and-feel style, as introduced in 2017.",children:"LookAndFeel_V4"})," class inherits from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V3",title:"The latest JUCE look-and-feel style, as introduced in 2013.",children:"LookAndFeel_V3"})," class and some methods are not redefined in the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V4",title:"The latest JUCE look-and-feel style, as introduced in 2017.",children:"LookAndFeel_V4"})," class."]})}),"\n",(0,o.jsx)(t.h2,{id:"button-customisation",children:"Button customisation"}),"\n",(0,o.jsxs)(t.p,{children:["Let's look at customising the buttons. First, let's set our ",(0,o.jsx)(t.code,{children:"\u305d\u306e\u4ed6LookAndFeel"})," class as the look-and-feel for our whole ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," by using this line in its constructor:"]}),"\n",(0,o.jsxs)(t.p,{children:["Let's also make sure that the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," object is not used on shutdown by the ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," anymore by supplying this line in its destructor:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"~MainContentComponent()\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n    {\n        setLookAndFeel(nullptr)\uff1b\n    }\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This will, of course, mean that both of our dials take on the appearance we customised in the previous section. Now let's add the ",(0,o.jsx)(t.a,{href:"structButton_1_1LookAndFeelMethods.html#a06f95e4c63f74cfe3af3f21698c9107a",children:"Button::LookAndFeelMethods::drawButtonBackground()"})," function declaration:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void drawButtonBackground (juce::Graphics& g, juce::Button& button, const juce::Colour& backgroundColour\u3001\n                               bool, bool isButtonDown) \u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u3053\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u304c\u6e21\u3055\u308c\u308b\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"g"}),": The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," context."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u30dc\u30bf\u30f3"}),": The ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classButton",title:"A base class for buttons.",children:"\u30dc\u30bf\u30f3"})," object itself."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"\u80cc\u666f\u8272"}),": The base background colour that should be used (which will have been chosen from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," colours based on the toggle state of the button)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"isMouseOverButton"}),": Whether the mouse pointer is within the bounds of the button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"isButtonDown"}),": Whether the mouse button is down."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u3067\u306f\u3001\u30dc\u30bf\u30f3\u306e\u77e9\u5f62\u3092\u80cc\u666f\u8272\u3067\u5857\u308a\u3064\u3076\u3059\u3060\u3051\u306e\u3001\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30dc\u30bf\u30f3\u80cc\u666f\u3092\u4f5c\u308b\u305f\u3081\u306b\u3001\u95a2\u6570\u672c\u4f53\u3092\u8ffd\u52a0\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"auto buttonArea = button.getLocalBounds()\uff1b\ng.setColour (backgroundColour)\uff1b\ng.fillRect (buttonArea)\uff1b\nbuttonfloat float UnityEventModifiers int buttonDefinition juce_UnityPluginInterface.h:191\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u308c\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_look_and_feel_customisation_screenshot4.png",caption:"Simple button"}),"\n",(0,o.jsxs)(t.p,{children:["If you interact with this, you will notice that the buttons do not respond visually to mouse pointer interaction. Let's implement a simple shadow effect. Change the ",(0,o.jsx)(t.code,{children:"drawButtonBackground()"})," function to this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"auto buttonArea = button.getLocalBounds()\uff1b\n        auto edge = 4\uff1b\n \n        buttonArea.removeFromLeft (edge)\uff1b\n        buttonArea.removeFromTop (edge)\uff1b\n \n        // \u30b7\u30e3\u30c9\u30a6\n        g.setColour (juce::Colours::darkgrey.withAlpha (0.5f))\uff1b\n        g.fillRect (buttonArea)\uff1b\n \n        auto offset = isButtonDown ?-edge / 2 : -edge\uff1b\n        buttonArea.translate (offset, offset)\uff1b\n \n        g.setColour (backgroundColour)\uff1b\n        g.fillRect (buttonArea)\uff1b\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The button will now appear to move as we click the button. Unfortunately, the text stays static, so we need to override the ",(0,o.jsx)(t.a,{href:"structButton_1_1LookAndFeelMethods.html#a3c7f5449c273361a926f5b82b8547383",title:"Draws the text for a TextButton.",children:"Button::LookAndFeelMethods::drawButtonText()"})," function to make this more believable. To write this function we'll start with a copy of the code from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel__V2",title:"This LookAndFeel subclass implements the juce style from around 2008-12.",children:"LookAndFeel_V2"})," class and add it to our OtherLookAndFeel class:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void drawButtonText (juce::Graphics& g, juce::TextButton& button, bool isMouseOverButton, bool isButtonDown) override\n{\n    auto font = getTextButtonFont (button, button.getHeight())\uff1b\n    g.setFont (font)\uff1b\n    g.setColour (button.findColour (button.getToggleState() ? juce::TextButton::textColourOnId)\n                                                            : juce::TextButton::textColourOffId)\n                       .withMultipliedAlpha (button.isEnabled() ?1.0f : 0.5f))\uff1b\n \n    auto yIndent = juce::jmin (4, button.proportionOfHeight (0.3f))\uff1b\n    auto cornerSize = juce::jmin (button.getHeight(), button.getWidth()) / 2\uff1b\n \n    auto fontHeight = juce::roundToInt (font.getHeight() * 0.6f)\uff1b\n    auto leftIndent = juce::jmin (fontHeight, 2 + cornerSize / (button.isConnectedOnLeft() ?4 : 2));\n    auto rightIndent = juce::jmin (fontHeight, 2 + cornerSize / (button.isConnectedOnRight() ?4 : 2));\n    auto textWidth = button.getWidth() - leftIndent - rightIndent\uff1b\n \n    if (textWidth > 0)\n        g.drawFittedText (button.getButtonText()\u3001\n                          leftIndent, yIndent, textWidth, button.getHeight() - yIndent * 2\u3001\n                          juce::Justification::centred, 2)\uff1b\n}\nTextButton\u6a19\u6e96\u7684\u306a\u83f1\u5f62\u306e\u80cc\u666f\u306b\u30c6\u30ad\u30b9\u30c8\u884c\u3092\u4f7f\u7528\u3059\u308b\u30dc\u30bf\u30f3\u3067\u3059\u3002\u5b9a\u7fa9 juce_TextButton.h:42\n\u5b9a\u7fa9 juce_AudioWorkgroup_mac.h:24\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We just need to change the offset at which the text is drawn to match the apparent movement in our ",(0,o.jsx)(t.code,{children:"drawButtonBackground()"})," function. We need to change only the last few lines:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"auto textWidth = button.getWidth() - leftIndent - rightIndent\uff1b\n \n        auto edge = 4\uff1b\n        auto offset = isButtonDown ? edge / 2 : 0\uff1b\n \n        if (textWidth > 0)\n            g.drawFittedText (button.getButtonText()\u3001\n                              leftIndent + offset, yIndent + offset, textWidth, button.getHeight() - yIndent * 2 - edge\u3001\n                              juce::Justification::centred, 2)\uff1b\n    }\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u308c\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\u3002"}),"\n",(0,o.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_look_and_feel_customisation_screenshot5.png",caption:"Buttons with shadows (Button 1 is shown "}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The completed code for this section can be found in the ",(0,o.jsx)(t.code,{children:"LookAndFeelCustomisationTutorial_03.h"})," file of the demo project for this tutorial."]})}),"\n",(0,o.jsx)(t.p,{children:"\u30de\u30a6\u30b9\u30dd\u30a4\u30f3\u30bf\u304c\u30dc\u30bf\u30f3\u306e\u4e0a\u306b\u6765\u305f\u3068\u304d\u306b\u53cd\u5fdc\u3059\u308b\u3088\u3046\u306b\u3001\u30dc\u30bf\u30f3\u306e\u63cf\u753b\u306b\u5909\u66f4\u3092\u52a0\u3048\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u80cc\u666f\u8272\u3092\u5c11\u3057\u8abf\u6574\u3057\u305f\u308a\u3001\u5f71\u306e\u8272\u3092\u5909\u3048\u305f\u308a\u3001\u77e9\u5f62\u306e\u30b5\u30a4\u30ba\u3084\u4f4d\u7f6e\u3092\u5fae\u5999\u306b\u5909\u3048\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial we have introduced the concept of customising the look-and-feel of JUCE components using the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classLookAndFeel",title:"LookAndFeel objects define the appearance of all the JUCE widgets, and subclasses can be used to appl...",children:"\u30eb\u30c3\u30af\u30a2\u30f3\u30c9\u30d5\u30a3\u30fc\u30eb"})," class. In particular you should now be able to:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u3067\u8272\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u65b0\u3057\u3044\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u306e\u30af\u30e9\u30b9\u3092\u4f5c\u308b\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u30b9\u30e9\u30a4\u30c0\u30fc\u3068\u30dc\u30bf\u30f3\u306e\u63cf\u753b\u30b3\u30fc\u30c9\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"}),"\n",(0,o.jsx)(t.li,{children:"JUCE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30eb\u30c3\u30af\uff06\u30d5\u30a3\u30fc\u30eb\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u691c\u7d22\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_colours/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebJUCE\u306e\u8272"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_slider_values/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_listeners_and_broadcasters/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30ea\u30b9\u30ca\u30fc\u3068\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30bf\u30fc"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_component_parents_children/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_animation/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_open_gl_application/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebOpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(4848);function s(e){let{src:t,caption:n,alt:s,width:i,height:r}=e;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:t,alt:s||n,width:i,height:r}),(0,o.jsx)("figcaption",{children:(0,o.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(4848);function s(e){let{path:t}=e;return(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);