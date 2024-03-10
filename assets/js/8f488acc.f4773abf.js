"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[7430],{2389:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=s(4848),i=s(8453),a=s(3449);s(6378);const r={title:"Graphics \u30af\u30e9\u30b9",sidebar_position:3},o="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9",c={id:"graphics/tutorial_graphics_class",title:"Graphics \u30af\u30e9\u30b9",description:"This tutorial shows how to use a \u30b0\u30e9\u30d5\u30a3\u30c3\u30af object to draw text, lines, and geometric shapes. This is fundamental to performing drawing in JUCE.",source:"@site/docs/graphics/tutorial_graphics_class.mdx",sourceDirName:"graphics",slug:"/graphics/tutorial_graphics_class",permalink:"/juce-tutorial-ja/graphics/tutorial_graphics_class",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/graphics/tutorial_graphics_class.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Graphics \u30af\u30e9\u30b9",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u8981\u90e8\u54c1",permalink:"/juce-tutorial-ja/graphics/tutorial_main_component"},next:{title:"\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",permalink:"/juce-tutorial-ja/graphics/tutorial_animation"}},l={},h=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Setting the font",id:"setting-the-font",level:2},{value:"Setting the position",id:"setting-the-position",level:2},{value:"Drawing lines",id:"drawing-lines",level:2},{value:"Drawing rectangles",id:"drawing-rectangles",level:2},{value:"Drawing circles",id:"drawing-circles",level:2},{value:"Drawing other polygons",id:"drawing-other-polygons",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebgraphics\u30af\u30e9\u30b9",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"}),"\n",(0,n.jsxs)(t.p,{children:["This tutorial shows how to use a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," object to draw text, lines, and geometric shapes. This is fundamental to performing drawing in JUCE."]}),"\n",(0,n.jsx)(t.p,{children:"\u30ec\u30d9\u30eb Beginner"}),"\n",(0,n.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux, iOS, Android"}),"\n",(0,n.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),", ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"}),", ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classFont",title:"Represents a particular font, including its size, style, etc.",children:"\u30d5\u30a9\u30f3\u30c8"}),", ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/namespaceColours",title:"Contains a set of predefined named colours (mostly standard HTML colours)",children:"\u30ab\u30e9\u30fc"}),", ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})]}),"\n",(0,n.jsx)(t.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,n.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,n.jsx)(t.a,{href:"/tutorials/PIPs/GraphicsTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,n.jsx)(t.a,{href:"/tutorials/ZIPs/GraphicsTutorial.zip",children:"\u30b8\u30c3\u30d7"})]}),"\n",(0,n.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,n.jsxs)(t.p,{children:["The demo project for this tutorial contains a main application window and a main component. You should be familiar with these from the last tutorials: ",(0,n.jsx)(t.a,{href:"../tutorial_main_window/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6"})," and ",(0,n.jsx)(t.a,{href:"../tutorial_main_component/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e1\u30a4\u30f3\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You already know that the appearance of the main component (or, as a matter of fact, any other Component!) is determined by the implementation of its ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function. The demo project here takes off where the last tutorial (",(0,n.jsx)(t.a,{href:"../tutorial_main_component/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e1\u30a4\u30f3\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),") concluded. The implementation of the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function initially looks as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'void paint (juce::Graphics& g)\n{\n    g.fillAll (juce::Colours::lightblue)\uff1b\n \n    g.setColour (juce::Colours::darkblue)\uff1b\n    g.setFont (14.0f)\uff1b\n    g.drawText ("Hello, World!", getLocalBounds(), juce::Justification::centred, true)\uff1b\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If you compile and run the app now, you should see that the window now has a light blue background colour, and the text ",(0,n.jsx)(t.strong,{children:"\u30cf\u30ed\u30fc\u3001\u30ef\u30fc\u30eb\u30c9\uff01"})," is drawn on top of it, in the centre of the window."]}),"\n",(0,n.jsxs)(t.p,{children:["In the following, we will add some code that draws some more graphics into the ",(0,n.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object, using the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class. This is a very powerful class, and we will be using it a lot in future tutorials to implement the custom visual appearance of different JUCE components."]}),"\n",(0,n.jsx)(t.h1,{id:"the-graphics-class",children:"The Graphics class"}),"\n",(0,n.jsxs)(t.p,{children:["Let's have another look at the paint function. Remember that the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function is a callback called by the operating system when it is time to render your ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," on screen \u2014 you should never call this function yourself."]}),"\n",(0,n.jsxs)(t.p,{children:["Notice that as the argument to this callback, a reference to a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," instance is passed in. This ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," object is provided by the underlying framework. It is the graphics context that you can use to render any graphical elements: text, lines, shapes, colours, gradients and much more. We will explore some of these in this tutorial."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class is usually only used in the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," callback. Normally, you should never use it anywhere else unless when drawing onto an image."]})}),"\n",(0,n.jsx)(t.h1,{id:"rendering-text",children:"Rendering text"}),"\n",(0,n.jsx)(t.h2,{id:"setting-the-font",children:"Setting the font"}),"\n",(0,n.jsx)(t.p,{children:"\u307e\u305a\u306f\u30c6\u30ad\u30b9\u30c8\u306e\u7d9a\u304d\u304b\u3089\u3002\u884c"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setFont(20.0f)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["sets the font size to 20 pixels for the subsequent line (which draws the text ",(0,n.jsx)(t.strong,{children:"\u30cf\u30ed\u30fc\u3001\u30ef\u30fc\u30eb\u30c9\uff01"})," using that font). But what if we want to not only change the size of the font, but also use another typeface and bold or italic letters? And how do we change the position of the text?"]}),"\n",(0,n.jsxs)(t.p,{children:["There is actually another version of the ",(0,n.jsx)(t.a,{href:"classGraphics.html#a1fbdb321975d90c45243027a61ac2be9",title:"Changes the font to use for subsequent text-drawing functions.",children:"Graphics::setFont()"})," function that takes a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classFont",title:"Represents a particular font, including its size, style, etc.",children:"\u30d5\u30a9\u30f3\u30c8"})," object instead of just a ",(0,n.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," that determines the size. You can create a new ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classFont",title:"Represents a particular font, including its size, style, etc.",children:"\u30d5\u30a9\u30f3\u30c8"})," object like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'juce::Font mainComponentFont ("Times New Roman", 20.0f, juce::Font::italic)\uff1b\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Because we are using this font for our main component, we choose the descriptive variable name ",(0,n.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d5\u30a9\u30f3\u30c8"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The first argument of the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classFont",title:"Represents a particular font, including its size, style, etc.",children:"\u30d5\u30a9\u30f3\u30c8"})," constructor determines the typeface, the second is the font size, and the third is the font style. Here, we chose italic for the style. The font styles are actually flags that can be used as a bitmask (see ",(0,n.jsx)(t.a,{href:"../tutorial_main_window/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30a6\u30a3\u30f3\u30c9\u30a6"}),"), so you can combine them for example like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'juce::Font mainComponentFont ("Times New Roman", 20.0f, juce::Font::bold | juce::Font::italic)\uff1b\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u3092\u518d\u5ea6\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u30d5\u30a9\u30f3\u30c8\u304c\u5909\u66f4\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u308b\u306f\u305a\u3060\u3002"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306b\u5b9f\u969b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u66f8\u4f53\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3001JUCE\u30a2\u30d7\u30ea\u3067\u30d5\u30a9\u30f3\u30c8\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u306a\u3044\u975e\u5e38\u306b\u4e00\u822c\u7684\u306a\u539f\u56e0\u3067\u3059\u3002"})}),"\n",(0,n.jsxs)(t.p,{children:["Instead of creating a named ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classFont",title:"Represents a particular font, including its size, style, etc.",children:"\u30d5\u30a9\u30f3\u30c8"})," object and then setting it with the ",(0,n.jsx)(t.a,{href:"classGraphics.html#a1fbdb321975d90c45243027a61ac2be9",title:"Changes the font to use for subsequent text-drawing functions.",children:"Graphics::setFont()"})," function on the next line, you could also do both in one statement:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'g.setFont (juce::Font ("Times New Roman", 20.0f, juce::Font::italic))\uff1b\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u3068\u306f\u3044\u3048\u3001\u901a\u5e38\u306f\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u5206\u96e2\u3057\u3066\u540d\u524d\u4ed8\u304d\u5909\u6570\u3092\u4f7f\u3063\u305f\u65b9\u304c\u3001\u30b3\u30fc\u30c9\u306e\u53ef\u8aad\u6027\u3068\u4fdd\u5b88\u6027\u306f\u5411\u4e0a\u3059\u308b\u3002(\u6700\u8fd1\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u3067\u306f\u3001\u3053\u306e\u3088\u3046\u306a\u8ffd\u52a0\u5909\u6570\u3092\u5c0e\u5165\u3057\u3066\u3082\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u306f\u5f71\u97ff\u3057\u307e\u305b\u3093)\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"setting-the-position",children:"Setting the position"}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u3053\u3067\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3057\u307e\u3059\u3002\u305d\u306e\u904e\u7a0b\u3067\u3001JUCE\u3067\u4f4d\u7f6e\u6c7a\u3081\u304c\u3069\u306e\u3088\u3046\u306b\u51e6\u7406\u3055\u308c\u308b\u304b\u3092\u5b66\u3073\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["The easy way would be to simply change the alignment of the text with respect to the whole component, for example by changing the ",(0,n.jsx)(t.a,{href:"classJustification.html#a1f8c07756c56fe8f31ed44964e51bfbcaf9d9adde20dce1aa38ff9a69be2b4384",title:"Indicates that the item should be centred vertically and horizontally.",children:"\u30b8\u30e3\u30b9\u30c6\u30a3\u30d5\u30a3\u30b1\u30fc\u30b7\u30e7\u30f3::\u4e2d\u592e\u63c3\u3048"})," value to another one of the possible values, for example the ",(0,n.jsx)(t.a,{href:"classJustification.html#a1f8c07756c56fe8f31ed44964e51bfbcaf2d7cc575db9d4d9a1305407625b7afd",title:"Indicates that the item should be placed in the top-left corner.",children:"\u30b8\u30e3\u30b9\u30c6\u30a3\u30d5\u30a3\u30b1\u30fc\u30b7\u30e7\u30f3::\u5de6\u4e0a"})," value. (You can also check out the other possible ",(0,n.jsx)(t.a,{href:"classJustification.html#a1f8c07756c56fe8f31ed44964e51bfbc",title:"Flag values that can be combined and used in the constructor.",children:"\u30b8\u30e3\u30b9\u30c6\u30a3\u30d5\u30a3\u30b1\u30fc\u30b7\u30e7\u30f3::\u30d5\u30e9\u30b0"})," values.) However, another very powerful approach is to explicitly define the size and position. There is another version of the ",(0,n.jsx)(t.a,{href:"classGraphics.html#aff45fc088e19374d3984e44a5c7d7639",title:"Draws a line of text within a specified rectangle.",children:"Graphics::drawText()"})," function using this approach. Change the line starting with the ",(0,n.jsx)(t.code,{children:"g.drawText()"})," call to the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'g.drawText ("Hello, World!", 20, 40, 200, 40, juce::Justification::centred, true)\uff1b\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This tells the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," object to render the text into an area that is 200 pixels wide, 40 pixels high, and located 20 pixels to the right and 40 pixels to the bottom from the top-left corner of the main component."]}),"\n",(0,n.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u306f\u3053\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,n.jsx)(a.A,{src:"https://docs.juce.com/master/tutorial_graphics_class_screenshot1.png",caption:"Customising the text font and position."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Remember: coordinates in JUCE are always measured from the top-left corner of the current component, which is the point (0, 0). They can be given as ",(0,n.jsx)(t.code,{children:"\u30a4\u30f3\u30c8"})," or ",(0,n.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," numbers. When used to specify the position of a graphical element or child component, it will be positioned such that its top left corner will appear at the given position."]})}),"\n",(0,n.jsxs)(t.p,{children:["Finally, the last argument of the ",(0,n.jsx)(t.a,{href:"classGraphics.html#aff45fc088e19374d3984e44a5c7d7639",title:"Draws a line of text within a specified rectangle.",children:"Graphics::drawText()"})," function is a ",(0,n.jsx)(t.code,{children:"\u30d6\u30fc\u30eb"})," flag which determines whether an ellipsis (...) should be shown if the text does not fit within the given width, or whether the text should be simply chopped off."]}),"\n",(0,n.jsx)(t.p,{children:"\u30c6\u30ad\u30b9\u30c8\u30fb\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5e45\u3092200\u304b\u3089\u5c0f\u3055\u3044\u5024\u306b\u5909\u66f4\u3057\u3001\u7701\u7565\u30d5\u30e9\u30b0\u304c\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u304b\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"classGraphics.html#aff45fc088e19374d3984e44a5c7d7639",title:"Draws a line of text within a specified rectangle.",children:"Graphics::drawText()"})," function is good for rendering single-line text. For multi-line text, it offers other functions such as ",(0,n.jsx)(t.a,{href:"classGraphics.html#ae6ae0dc5e9e1956af5998c18e0955a56",title:"Draws text across multiple lines.",children:"Graphics::drawMultiLineText()"})," and ",(0,n.jsx)(t.a,{href:"classGraphics.html#a41c5a930dfc9b8cdd8c8a464f7e11b46",title:"Tries to draw a text string inside a given space.",children:"Graphics::drawFittedText()"}),"."]})}),"\n",(0,n.jsx)(t.h1,{id:"rendering-geometrical-shapes",children:"Rendering geometrical shapes"}),"\n",(0,n.jsxs)(t.p,{children:["In this section, we continue with drawing some geometrical shapes using the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class."]}),"\n",(0,n.jsx)(t.h2,{id:"drawing-lines",children:"Drawing lines"}),"\n",(0,n.jsxs)(t.p,{children:["Add the following lines to the bottom of the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::green)\uff1b\ng.drawLine (10, 300, 590, 300, 5)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will draw a green horizontal line 5 pixels wide across the window, starting from (10, 300) and ending at (590, 300). Note that every time you want to draw a geometric shape in another colour than the one used last time, you have to call the ",(0,n.jsx)(t.a,{href:"classGraphics.html#a9a944a0006b7277fda473f0b1b4f028f",title:"Changes the current drawing colour.",children:"Graphics::setColour()"})," function before you draw."]}),"\n",(0,n.jsxs)(t.p,{children:["You can of course also draw diagonal lines by specifying other coordinates. In fact, JUCE also supports subpixel coordinates (you can use ",(0,n.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," values for the positions). If the position falls between physical screen pixels, JUCE will apply anti-aliasing for the drawing."]}),"\n",(0,n.jsxs)(t.p,{children:["Explore other types of lines. Can you figure out how to draw dashed lines, or arrows? Hint: have a look at the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class documentation."]}),"\n",(0,n.jsx)(t.h2,{id:"drawing-rectangles",children:"Drawing rectangles"}),"\n",(0,n.jsxs)(t.p,{children:["Drawing rectangles using the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," object is quite straightforward. Add the following line to the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function body:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::sandybrown)\uff1b\ng.drawRect (300, 120, 200, 170)\uff1b\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will render a brown rectangle, 200 pixels wide, 170 pixels high, positioned with its top-left corner at the position (300, 120)."}),"\n",(0,n.jsx)(t.p,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u7b2c5\u5f15\u6570\u3067\u7dda\u306e\u592a\u3055\u3092\u6307\u5b9a\u3067\u304d\u308b\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::sandybrown)\uff1b\ng.drawRect (300, 120, 200, 170, 3)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you want a filled rectangle, use the function ",(0,n.jsx)(t.a,{href:"classGraphics.html#a747de9976729f72d9f6188104e6b2215",title:"Fills a rectangle with the current colour or brush.",children:"Graphics::fillRect()"})," instead:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::sandybrown)\uff1b\ng.fillRect (300, 120, 200, 170)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Instead of giving the position, width, and height separately, there is a more convenient class to represent a rectangle: the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," class. There is also a version of the ",(0,n.jsx)(t.a,{href:"classGraphics.html#a42dc569175294c1e20e8177031a761af",title:"Draws a rectangular outline, using the current colour or brush.",children:"Graphics::drawRect()"})," function that takes such a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," instance to specify the position of the rectangle:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"juce::Rectangle\u5bb6 (300, 120, 200, 170)\uff1b\ng.setColour (juce::Colours::sandybrown)\uff1b\ng.fillRect (house)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This very convenient ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," class will be explored in a future tutorial."]}),"\n",(0,n.jsxs)(t.p,{children:["Find out how to draw a ",(0,n.jsx)(t.em,{children:"\u3069\u3063\u3057\u308a"})," rectangle. Next, also try to draw a ",(0,n.jsx)(t.em,{children:"\u5145\u586b"})," rounded rectangle."]}),"\n",(0,n.jsx)(t.p,{children:"\u77e9\u5f62\u3092\u7121\u5730\u3067\u5857\u308a\u3064\u3076\u3059\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u8272\u306e\u30b0\u30e9\u30c7\u30fc\u30b7\u30e7\u30f3\u3084\u4ed6\u306e\u3044\u304f\u3064\u304b\u306e\u30d1\u30bf\u30fc\u30f3\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u8336\u8272\u306e\u9577\u65b9\u5f62\u304c\u5bb6\u3092\u8868\u3057\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002\u5e02\u677e\u6a21\u69d8\u3067\u5857\u308a\u3064\u3076\u3059\u3053\u3068\u3067\u3001\u30ec\u30f3\u30ac\u306e\u3088\u3046\u306a\u8cea\u611f\u3092\u52a0\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u3067\u9577\u65b9\u5f62\u3092\u63cf\u753b\u3057\u307e\u3059\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"juce::Rectanglehouse (300, 120, 200, 170)\uff1b\ng.fillCheckerBoard (house, 30, 10, juce::Colours::sandybrown, juce::Colours::saddlebrown)\uff1b\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u4eca\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,n.jsx)(a.A,{src:"https://docs.juce.com/master/tutorial_graphics_class_screenshot2.png",caption:"Adding a line and a rectangle filled with a checkered pattern."}),"\n",(0,n.jsx)(t.h2,{id:"drawing-circles",children:"Drawing circles"}),"\n",(0,n.jsxs)(t.p,{children:["Let's see how the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class draws circles and ellipses. Have a look at the functions ",(0,n.jsx)(t.a,{href:"classGraphics.html#ae4cce288a14b690ce0eb3dd514559887",title:"Draws an elliptical stroke using the current colour or brush.",children:"Graphics::drawEllipse()"})," and ",(0,n.jsx)(t.a,{href:"classGraphics.html#ae965bf1c5fadee50c665b6508eb3e8f4",title:"Fills an ellipse with the current colour or brush.",children:"Graphics::fillEllipse()"}),". They work just like the ",(0,n.jsx)(t.a,{href:"classGraphics.html#a42dc569175294c1e20e8177031a761af",title:"Draws a rectangular outline, using the current colour or brush.",children:"Graphics::drawRect()"})," and ",(0,n.jsx)(t.a,{href:"classGraphics.html#a747de9976729f72d9f6188104e6b2215",title:"Fills a rectangle with the current colour or brush.",children:"Graphics::fillRect()"})," functions."]}),"\n",(0,n.jsx)(t.p,{children:"\u5c0f\u3055\u306a\u98a8\u666f\u306b\u592a\u967d\u3092\u52a0\u3048\u3066\u307f\u3088\u3046\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u53f3\u4e0a\u306b60\u30d4\u30af\u30bb\u30eb\u306e\u5186\u3092\u63cf\u304f\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::yellow)\uff1b\ng.drawEllipse (530, 10, 60, 60, 3)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that the position given (530, 10) does ",(0,n.jsx)(t.em,{children:"\u306a\u3044"})," place the centre of the circle at that position. Instead, as with all other graphical elements, the object will be placed such that the top-left corner of its enclosing rectangle will be located at the given position."]}),"\n",(0,n.jsx)(t.p,{children:"\u4f8b\u3048\u3070\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5883\u754c\u3092\u660e\u793a\u7684\u306b\u4f7f\u3063\u3066\u4f4d\u7f6e\u3092\u8a08\u7b97\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::yellow)\uff1b\ng.drawEllipse (getWidth() - 70, 10, 60, 60, 3)\uff1b\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Write a wrapper function around the ",(0,n.jsx)(t.a,{href:"classGraphics.html#ae4cce288a14b690ce0eb3dd514559887",title:"Draws an elliptical stroke using the current colour or brush.",children:"Graphics::drawEllipse()"})," function for drawing circles more conveniently. The function should take the coordinates of a point and a radius, and then draw a circle with the centre at this point and the given radius."]}),"\n",(0,n.jsx)(t.h2,{id:"drawing-other-polygons",children:"Drawing other polygons"}),"\n",(0,n.jsx)(t.p,{children:"\u6700\u5f8c\u306b\u3001\u5bb6\u306b\u5c4b\u6839\u3092\u3064\u3051\u3088\u3046\u3002\u3053\u308c\u306f\u8d64\u3044\u4e09\u89d2\u5f62\u306b\u306a\u308b\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["You will find out that there is no function called ",(0,n.jsx)(t.code,{children:"drawTriangle()"})," or ",(0,n.jsx)(t.code,{children:"drawPolygon()"})," in the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class. For this, we have to take a more generic approach."]}),"\n",(0,n.jsxs)(t.p,{children:["Check out the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," class. It essentially handles any sets of connected points. In this case, we need a triangle that comprises three points. For example, we could use the three points (300, 110), (500, 110), (400, 70) so that the roof triangle sits on top of the house rectangle."]}),"\n",(0,n.jsx)(t.p,{children:"\u3053\u308c\u304cJUCE\u30b3\u30fc\u30c9\u3067\u79c1\u305f\u3061\u306e\u8d64\u3044\u5c4b\u6839\u304c\u3069\u306e\u3088\u3046\u306b\u898b\u3048\u308b\u304b\u3060\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"g.setColour (juce::Colours::red)\uff1b\n \n\u30d1\u30b9\u5c4b\u6839\uff1b\nroof.addTriangle (300, 110, 500, 110, 400, 70)\uff1b\ng.fillPath (roof)\uff1b\n\u5b9a\u7fa9 juce_Path.h:68\nPath::addTrianglelevoid addTriangle(float x1, float y1, float x2, float y2, float x3, float y3)\u30d1\u30b9\u306b\u4e09\u89d2\u5f62\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u5b8c\u6210\u3057\u305f\u30c7\u30e2\u30a2\u30d7\u30ea\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u3053\u3093\u306a\u611f\u3058\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,n.jsx)(a.A,{src:"https://docs.juce.com/master/tutorial_graphics_class_screenshot3.png",caption:"The finished demo app."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," class is capable of many other things and will be explored in more depth in a future tutorial."]})}),"\n",(0,n.jsx)(t.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial, we showed how to use the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," object inside the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," callback of a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class to draw inside a component. You should now be familiar with:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u30c6\u30ad\u30b9\u30c8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3068\u66f8\u5f0f\u8a2d\u5b9a\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u7dda\u3092\u5f15\u304f\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u9577\u65b9\u5f62\u3001\u5186\u3001\u591a\u89d2\u5f62\u306a\u3069\u306e\u5e7e\u4f55\u5b66\u56f3\u5f62\u3092\u63cf\u304f\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You should now also know that a ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," object is a drawing context provided by the underlying framework and should not be used outside the ",(0,n.jsx)(t.code,{children:"\u30da\u30a4\u30f3\u30c8"})," callback."]}),"\n",(0,n.jsx)(t.h1,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class is capable of more graphical rendering functionality than discussed in this tutorial. Notably, you can use it to draw images (from image files) on the screen. There is also much more you can do using the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," class. Some other features of the ",(0,n.jsx)(t.a,{href:"https://docs.juce.com/master/classGraphics",title:"A graphics context, used for drawing a component or image.",children:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af"})," class include colour gradients, transparency layers, and transforms. Some of these will be covered in future tutorials."]}),"\n",(0,n.jsx)(t.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../tutorial_colours/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebJUCE\u306e\u8272"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../tutorial_component_parents_children/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../tutorial_point_line_rectangle/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../tutorial_rectangle_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../tutorial_open_gl_application/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebOpenGL\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3449:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(4848);function i(e){let{src:t,caption:s,alt:i,width:a,height:r}=e;return(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:t,alt:i||s,width:a,height:r}),(0,n.jsx)("figcaption",{children:(0,n.jsx)("b",{children:s})})]})}},6378:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(4848);function i(e){let{path:t}=e;return(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);