"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[1447],{3538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(4848),s=n(8453),o=n(3449);n(6378),n(5706);const a={title:"\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",sidebar_position:4,tags:["\u521d\u7d1a"]},r="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",c={id:"graphics/tutorial_animation",title:"\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",description:"Create simple animations in your JUCE applications. Bring static geometry shapes to life using the \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 class.",source:"@site/docs/graphics/tutorial_animation.mdx",sourceDirName:"graphics",slug:"/graphics/tutorial_animation",permalink:"/juce-tutorial-ja/graphics/tutorial_animation",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/graphics/tutorial_animation.mdx",tags:[{label:"\u521d\u7d1a",permalink:"/juce-tutorial-ja/tags/\u521d\u7d1a"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",sidebar_position:4,tags:["\u521d\u7d1a"]},sidebar:"tutorialSidebar",previous:{title:"Graphics \u30af\u30e9\u30b9",permalink:"/juce-tutorial-ja/graphics/tutorial_graphics_class"},next:{title:"OpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9",permalink:"/juce-tutorial-ja/graphics/tutorial_open_gl_application"}},h={},l=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,i.jsxs)(t.p,{children:["Create simple animations in your JUCE applications. Bring static geometry shapes to life using the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class."]}),"\n",(0,i.jsx)(t.p,{children:"\u30ec\u30d9\u30eb\uff1a\u521d\u7d1a"}),"\n",(0,i.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,i.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})]}),"\n",(0,i.jsx)(t.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,i.jsx)(t.a,{href:"/tutorials/PIPs/AnimationTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,i.jsx)(t.a,{href:"/tutorials/ZIPs/AnimationTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,i.jsxs)(t.p,{children:["If you need help with this step, see ",(0,i.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,i.jsxs)(t.p,{children:["When completed, the demo project will display a continuous and smooth animation of a fish on the screen made of multiple ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," and ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," objects."]}),"\n",(0,i.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_animation_screenshot1.png",caption:"The demo project window"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The code presented here is broadly similar to the ",(0,i.jsx)(t.strong,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b"})," from the JUCE Examples."]})}),"\n",(0,i.jsx)(t.h1,{id:"the-animatedappcomponent-class",children:"The AnimatedAppComponent class"}),"\n",(0,i.jsxs)(t.p,{children:["When creating a simple animated JUCE application, a useful class to inherit from is the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class. Just as the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," or ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classOpenGLAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"OpenGLAppComponent"})," classes are useful for audio applications and OpenGL applications respectively, the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," offers functions that are beneficial to animation making namely:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"setFramesPerSecond()\uff1a\u3053\u306e\u95a2\u6570\u3092\u4f7f\u3046\u3068\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u3067\u304d\u308b\u3060\u3051\u30b9\u30e0\u30fc\u30ba\u306b\u52d5\u304b\u3059\u305f\u3081\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u6bb5\u968e\u3067FPS\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u3053\u306e\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3068\u3001\u6307\u5b9a\u3055\u308c\u305f\u983b\u5ea6\u3067\u518d\u63cf\u753b\u51e6\u7406\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.li,{children:"update()\uff1a\u3053\u306e\u95a2\u6570\u306f\u3001setFramesPerSecond() \u95a2\u6570\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u5272\u5408\u3067\u547c\u3073\u51fa\u3055\u308c\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6bb5\u968e\u7684\u306b\u9032\u3081\u3066\u3044\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.li,{children:"getFrameCounter()\uff1a\u5b9a\u7fa9\u3055\u308c\u305f FPS \u30ec\u30fc\u30c8\u3067\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u3066\u4ee5\u6765\u3001update() \u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u56de\u6570\u306e\u5408\u8a08\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u8a08\u7b97\u3059\u308b\u305f\u3081\u306e\u5468\u671f\u7684\u306a\u6570\u5b66\u95a2\u6570\u3067\u6709\u7528\u3067\u3059\u3002"}),"\n",(0,i.jsx)(t.li,{children:"getMillisecondsSinceLastUpdate()\uff1a\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u306b\u95a2\u4fc2\u306a\u304f\u6b63\u78ba\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001\u6700\u5f8c\u306eupdate()\u95a2\u6570\u547c\u3073\u51fa\u3057\u304b\u3089\u306e\u6240\u8981\u6642\u9593\u3092\u30df\u30ea\u79d2\u3067\u8fd4\u3059\u3082\u30461\u3064\u306e\u4fbf\u5229\u306a\u95a2\u6570\u3067\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By using these functions along with the paint() function of the parent ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class, we can start creating simple animations."]}),"\n",(0,i.jsx)(t.h1,{id:"animating-a-circle",children:"Animating a Circle"}),"\n",(0,i.jsxs)(t.p,{children:["As we can see in the ",(0,i.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class, the MainContentComponent inherits from the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The first step to creating an animation is to set the frame rate of our animation. We do this in the MainContentComponent constructor like so [1] by calling the setFramesPerSecond() function:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"MainContentComponent()\n    {\n        setSize (800, 600)\uff1b\n        setFramesPerSecond (60); // [1].\n    }\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u3053\u3067\u306fFPS\u309260\u306b\u8a2d\u5b9a\u3057\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30921\u79d2\u9593\u306b60\u56de\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001\u5185\u90e8\u7684\u306b60Hz\u306e\u5468\u6ce2\u6570\u3067\u30bf\u30a4\u30de\u30fc\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u307b\u3068\u3093\u3069\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30fb\u30ec\u30fc\u30c8\u306b\u307b\u307c\u7b49\u3057\u304f\u3001\u30b9\u30e0\u30fc\u30ba\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["Let's start by animating a simple circle in a circular motion. In the paint() function, first set the colour in which we want to draw the circle by calling the setColour() function of the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class [2]. Next define the radius of the circular path that the shape will follow [3] as shown here:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"void paint (juce::Graphics& g) override\n{\n    //...\n \n    g.setColour (getLookAndFeel().findColour (Slider::thumbColourId));       // [2]\n \n    int radius = 150;                                                        // [3]\n \n    juce::Pointp (getWidth() / 2.0f + 1.0f * radius\u3001\n                          getHeight() / 2.0f + 1.0f * \u534a\u5f84); // [4].\n \n    g.fillEllipse (p.x, p.y, 30.0f, 30.0f); // [5].\n}\n\u30b9\u30e9\u30a4\u30c0\u30fc::thumbColourId@ thumbColourId\u89aa\u6307\u3092\u63cf\u753b\u3059\u308b\u8272\u5b9a\u7fa9 juce_Slider.h:873\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then create a ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," that represents the position of the center of our shape at the given time frame [4]. Here, in order to create a circular motion first find the center of the screen by dividing the width and height of the screen by two. Then offset the x and y coordinates of the shape by adding the radius value to both of them."]}),"\n",(0,i.jsxs)(t.p,{children:["Lastly, paint the actual circle by using the fillEllipse() function by providing the previously defined ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," coordinates and a diameter of 30 as arguments."]}),"\n",(0,i.jsx)(t.p,{children:"\u4eca\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u5186\u304c\u3069\u3046\u306a\u308b\u304b\u308f\u304b\u308a\u307e\u3059\u304b\uff1f\u5ea7\u6a19\u7cfb\u304c\u5de6\u4e0a\u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u5186\u306f\u534a\u5f84\u306e\u5024\u3060\u3051\u53cd\u5bfe\u65b9\u5411\u306b\u62bc\u3055\u308c\u308b\u306e\u3060\uff1a"}),"\n",(0,i.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_animation_screenshot2.png",caption:"The static circle"}),"\n",(0,i.jsxs)(t.p,{children:["Let's modify our declaration of our ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," to create the actual motion."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    void paint (juce::Graphics& g) override\n    {\n        // (Our component is opaque, so we must completely fill the background with a solid colour)\n        g.fillAll (getLookAndFeel().findColour (juce::ResizableWindow::backgroundColourId));\n \n        g.setColour (getLookAndFeel().findColour (juce::Slider::thumbColourId));\n \n        int radius = 150;\n \n        juce::Pointp ((float) getWidth() / 2.0f + 1.0f * (float) radius * std::sin ((float) getFrameCounter() * 0.04f)\u3001\n                              (float) getHeight() / 2.0f + 1.0f * (float) radius * std::cos ((float) getFrameCounter() * 0.04f))\uff1b\n \n        g.fillEllipse (p.x, p.y, 30.0f, 30.0f)\uff1b\n    }\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here we use the getFrameCounter() function to retrieve the counter on the number of frames since the start of our animation and use its value to compute a value between -1 ..1 using the sine and cosine functions for the width and height respectively. The scalar multiplication of 0.04 on the frame counter controls the speed at which the periodic functions will alternate to create circular motion."}),"\n",(0,i.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u5186\u904b\u52d5\u304c\u73fe\u308c\u308b\u306f\u305a\u3060\u3002"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The source code for this modified version of the code can be found in the ",(0,i.jsx)(t.code,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_02.h"})," file of the demo project."]})}),"\n",(0,i.jsx)(t.h1,{id:"animating-a-path",children:"Animating a Path"}),"\n",(0,i.jsx)(t.p,{children:"\u5186\u306e\u4ee3\u308f\u308a\u306b\u3001\u6b21\u306f\u5186\u5f62\u306e\u30d1\u30b9\u306b\u6cbf\u3063\u3066\u7dda\u3092\u30a2\u30cb\u30e1\u30fc\u30c8\u3057\u3066\u307f\u3088\u3046\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["Using the same code base as the previous section we are going to create multiple ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," objects along which a ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," will be created instead of just a single animated ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"}),". Modify the paint() function as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    void paint (juce::Graphics& g) override\n    {\n        // (Our component is opaque, so we must completely fill the background with a solid colour)\n        g.fillAll (getLookAndFeel().findColour (juce::ResizableWindow::backgroundColourId));\n \n        g.setColour (getLookAndFeel().findColour (juce::Slider::thumbColourId));\n \n        auto numberOfDots = 15;     // [1]\n \n        juce::Path spinePath;       // [2]\n \n        for (auto i = 0; i < numberOfDots; ++i) // [3]\n        {\n            int radius = 150;\n \n            juce::Pointp ((float) getWidth() / 2.0f + 1.0f * (float) radius * std::sin ((float) getFrameCounter() * 0.04f + (float) i * 0.12f)\u3001\n                                  (float) getHeight() / 2.0f + 1.0f * (float) radius * std::cos ((float) getFrameCounter() * 0.04f + (float) i * 0.12f))\uff1b\n \n            if (i == 0)\n                spinePath.startNewSubPath (p); // \u3053\u308c\u304c\u6700\u521d\u306e\u70b9\u306e\u5834\u5408\u3001\u65b0\u3057\u3044\u30d1\u30b9\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\n            else\n                spinePath.lineTo (p); // ...\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u3001\u6b21\u306e\u70b9\u3092\u8ffd\u52a0\u3059\u308b\u3002\n        }\n \n        // \u4f5c\u6210\u3057\u305f\u30d1\u30b9\u306e\u5468\u56f2\u306b\u8f2a\u90ed\u3092\u63cf\u304f\n        g.strokePath (spinePath, juce::PathStrokeType (4.0f)); // [4].\n    }\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"[1]: First define the number of dots to create along the path."}),"\n",(0,i.jsxs)(t.li,{children:["[2]: Next create a ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," object to draw the line that will connect the dots."]}),"\n",(0,i.jsxs)(t.li,{children:["[3]: Now for every dot, create the same ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," object as before but this time we are going to offset the animation for every subsequent iteration in the loop. Notice the addition of an offset of 0.12 between every dot in the circular motion. If the iteration is the first one, we create a new sub path by calling the startNewSubPath() function on the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," object, otherwise we connect the current dot to the previously defined dots on the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["[4]: Finally, draw an outline around the created ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," along the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," objects."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u5186\u5f62\u306b\u5f15\u304b\u308c\u305f\u7dda\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),"\n",(0,i.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_animation_screenshot3.png",caption:"The circular path"}),"\n",(0,i.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eFPS\u3092\u5909\u66f4\u3057\u3066\u307f\u3066\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u6ed1\u3089\u304b\u3055\u304c\u3069\u306e\u3088\u3046\u306b\u5909\u5316\u3059\u308b\u304b\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6620\u753b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u6a19\u6e96\u7684\u306a24FPS\u3067\u306f\u3069\u3046\u306a\u308b\u3067\u3057\u3087\u3046\u304b\uff1f"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The source code for this modified version of the code can be found in the ",(0,i.jsx)(t.code,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_03.h"})," file of the demo project."]})}),"\n",(0,i.jsx)(t.h1,{id:"animating-a-fish",children:"Animating a Fish"}),"\n",(0,i.jsxs)(t.p,{children:["Let's try something a little more interesting by animating a fish from the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," and ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," objects we have created so far."]}),"\n",(0,i.jsx)(t.p,{children:"In order to show the actual points drawn along the circular path and create the body of the fish, let's add a line in our for loop that draws the circles by using the fillEllipse() function and by specifying an increasing width and height for each dot along the line [1] like so:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"void paint (juce::Graphics& g) override\n{\n    //...\n    g.setColour (getLookAndFeel().findColour (juce::Slider::thumbColourId));\n \n    auto fishLength = 15;\n \n    juce::Path spinePath;\n \n    for (auto i = 0; i < fishLength; ++i)\n    {\n        int radius = 150;\n \n        juce::Pointp (getWidth() / 2.0f + 1.0f * radius * std::sin (getFrameCounter() * 0.04f + i * 0.12f)\u3001\n                              getHeight() / 2.0f + 1.0f * radius * std::cos (getFrameCounter() * 0.04f + i * 0.12f))\uff1b\n \n        // \u9b5a\u306b\u6cbf\u3063\u3066\u5186\u3092\u63cf\u304f\n        g.fillEllipse (p.x - i, p.y - i, 2.0f + 2.0f * i, 2.0f + 2.0f * i); // [1].\n \n        if (i == 0)\n            spinePath.startNewSubPath (p); // \u3053\u308c\u304c\u6700\u521d\u306e\u70b9\u306e\u5834\u5408\u3001\u65b0\u3057\u3044\u30d1\u30b9\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\n        else\n            spinePath.lineTo (p); // ...\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u3001\u6b21\u306e\u70b9\u3092\u8ffd\u52a0\u3059\u308b\u3002\n    }\n \n    // \u4f5c\u6210\u3057\u305f\u30d1\u30b9\u306e\u5468\u56f2\u306b\u8f2a\u90ed\u3092\u63cf\u304f\n    g.strokePath (spinePath, juce::PathStrokeType (4.0f))\uff1b\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u3055\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u9b5a\u306e\u3088\u3046\u306b\u898b\u3048\u59cb\u3081\u308b\u304c\u3001\u307e\u3060\u9b5a\u306e\u3088\u3046\u306b\u306f\u52d5\u304b\u306a\u3044\u3082\u306e\u304c\u898b\u3048\u308b\u306f\u305a\u3060\u3002"}),"\n",(0,i.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_animation_screenshot4.png",caption:"The body of the fish"}),"\n",(0,i.jsx)(t.p,{children:"\u305d\u3053\u3067\u3001\u9b5a\u306e\u52d5\u304d\u3092\u6a21\u5023\u3059\u308b\u305f\u3081\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u5c11\u3057\u5909\u3048\u3066\u307f\u3088\u3046\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"void paint (juce::Graphics& g) override\n{\n    //...\n \n    for (auto i = 0; i < fishLength; ++i)\n    {\n        auto radius = 100 + 10 * std::sin (getFrameCounter() * 0.1f + i * 0.5f); // [2]\n \n        juce::Pointp (getWidth() / 2.0f + 1.0f * radius * std::sin (getFrameCounter() * 0.04f + i * 0.12f)\u3001\n                              getHeight() / 2.0f + 1.0f * radius * std::cos (getFrameCounter() * 0.04f + i * 0.12f))\uff1b\n \n        //...\n    }\n    //...\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here we apply modulation to the radius of the circle using a sine function and the frame counter by using the same getFrameCounter() function along with a scalar and a slightly different offset for every dot along the line [2]. This should provide us with a snake like motion if we run the application."}),"\n",(0,i.jsx)(t.p,{children:"\u305d\u306e\u52d5\u304d\u306f\u8aac\u5f97\u529b\u304c\u3042\u308b\u3088\u3046\u306b\u898b\u3048\u308b\u304c\u3001\u9a5a\u304d\u304c\u306a\u304f\u3001\u6700\u521d\u306e\u5186\u8ecc\u9053\u306e\u307e\u307e\u3001\u304b\u306a\u308a\u901f\u304f\u7e70\u308a\u8fd4\u3055\u308c\u308b\u305f\u3081\u3001\u5c11\u3057\u5358\u8abf\u306a\u5370\u8c61\u3092\u53d7\u3051\u308b\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"void paint (juce::Graphics& g) override\n{\n    //...\n \n    for (auto i = 0; i < fishLength; ++i)\n    {\n        auto radius = 100 + 10 * std::sin (getFrameCounter() * 0.1f + i * 0.5f);\n \n        juce::Pointp (getWidth() / 2.0f + 1.5f * radius * std::sin (getFrameCounter() * 0.02f + i * 0.12f)\u3001\n                              getHeight() / 2.0f + 1.0f * radius * std::cos (getFrameCounter() * 0.04f + i * 0.12f)); // [3].\n \n        //...\n    }\n    //...\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If we offset the rate of our sine and cosine functions in the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," creation and provide a different ratio for the width and height of the radius [3], we can get much more convincing results."]}),"\n",(0,i.jsx)(t.p,{children:"\u6700\u5f8c\u306b\u3082\u3046\u4e00\u5ea6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3001\u52d5\u304d\u306e\u30e9\u30f3\u30c0\u30e0\u6027\u304c\u6539\u5584\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6c17\u3065\u304f\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u540c\u69d8\u306e\u65b9\u6cd5\u3067\u3001\u9b5a\u306e\u9577\u3055\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u72ec\u81ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5f62\u72b6\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The source code for this modified version of the code can be found in the ",(0,i.jsx)(t.code,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_04.h"})," file of the demo project."]})}),"\n",(0,i.jsx)(t.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30b8\u30aa\u30e1\u30c8\u30ea\u5f62\u72b6\u3092\u30a2\u30cb\u30e1\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002\u7279\u306b"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Explored the mechanics of the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAnimatedAppComponent",title:"A base class for writing simple one-page graphical apps.",children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3App\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class."]}),"\n",(0,i.jsxs)(t.li,{children:["Painted shapes using the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class."]}),"\n",(0,i.jsx)(t.li,{children:"\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306b\u56f3\u5f62\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3055\u305b\u308b\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_graphics_class/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_point_line_rectangle/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_rectangle_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_open_gl_application/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebOpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(4848);function s(e){let{src:t,caption:n,alt:s,width:o,height:a}=e;return(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:t,alt:s||n,width:o,height:a}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("b",{children:n})})]})}},5706:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(4848);const s=e=>e.includes("::")?"struct"+e.replace("::","_1_1"):"class"+e;function o(e){let{refs:t}=e;return(0,i.jsxs)("p",{children:["\u30af\u30e9\u30b9\uff1a",t.map((e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{href:`https://docs.juce.com/master/${s(e)}.html`,children:e}),", "]})))]})}},6378:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(4848);function s(e){let{path:t}=e;return(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:`https://docs.juce.com/master/${t}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);