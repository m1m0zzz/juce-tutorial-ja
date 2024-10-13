"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[855],{3758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(4848),r=t(8453);const a={title:"\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9",sidebar_position:4},s="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9",o={id:"interface-design/tutorial_point_line_rectangle",title:"\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9",description:'Use the \u30dd\u30a4\u30f3\u30c8 coordinates."), \u30e9\u30a4\u30f3, and \u9577\u65b9\u5f62 classes to simplify your geometry calculations.',source:"@site/docs/interface-design/tutorial_point_line_rectangle.mdx",sourceDirName:"interface-design",slug:"/interface-design/tutorial_point_line_rectangle",permalink:"/juce-tutorial-ja/interface-design/tutorial_point_line_rectangle",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/interface-design/tutorial_point_line_rectangle.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JUCE\u306e\u30ab\u30e9\u30fc",permalink:"/juce-tutorial-ja/interface-design/tutorial_colours"},next:{title:"\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30fb\u30c6\u30af\u30cb\u30c3\u30af",permalink:"/juce-tutorial-ja/interface-design/tutorial_rectangle_advanced"}},c={},l=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Using the Rectangle and Point classes",id:"using-the-rectangle-and-point-classes",level:2},{value:"Using the Point and Path classes",id:"using-the-point-and-path-classes",level:2},{value:"Testing points within rectangles",id:"testing-points-within-rectangles",level:2},{value:"Line intersections",id:"line-intersections",level:2},{value:"Rectangle intersections",id:"rectangle-intersections",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{CaptionImage:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CaptionImage",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u7dda\u77e9\u5f62\u30af\u30e9\u30b9",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u70b9\u3001\u7dda\u3001\u77e9\u5f62\u30af\u30e9\u30b9"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"}),", and ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," classes to simplify your geometry calculations."]}),"\n",(0,i.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1a\u521d\u7d1a"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux, iOS, Android"}),"\n",(0,i.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRange",title:"A general-purpose range object, that simply represents any linear range with a start and end point.",children:"\u30ec\u30f3\u30b8"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["Download the demo project for this tutorial here: ",(0,i.jsx)(n.a,{href:"/tutorials/PIPs/PointLineRectangleTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,i.jsx)(n.a,{href:"/tutorials/ZIPs/PointLineRectangleTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need help with this step, see ",(0,i.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,i.jsx)(n.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u7c21\u5358\u306a\u63cf\u753b\u64cd\u4f5c\u3092\u884c\u3044\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u72b6\u614b\u3067\u306f\u3001\u5de6\u4e0a\u306b\u5c0f\u3055\u306a\u30aa\u30ec\u30f3\u30b8\u8272\u306e\u56db\u89d2\u304c\u3042\u308b\u7070\u8272\u306e\u80cc\u666f\u3092\u63cf\u753b\u3057\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot1.png",caption:"Simple drawing of a square"}),"\n",(0,i.jsxs)(n.p,{children:["We are going to look at different ways of drawing lines and rectangles, and how the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"}),", and ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," classes can simplify the way you think about drawing operations (and component positions) in JUCE."]}),"\n",(0,i.jsx)(n.h1,{id:"rectangle-basics",children:"Rectangle basics"}),"\n",(0,i.jsxs)(n.p,{children:["A great deal of graphics drawing and component layout code needs to deal with rectangles. This tutorial starts with the simple drawing of a filled square. We are now going to explore how the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"}),", and ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," classes can help us with drawing operations. We can also apply these techniques to the positioning of child components (in your Component::resized() function). Our starter code in the ",(0,i.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function is this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::darkgrey)\uff1b\n        g.setColour (juce::Colours::orange)\uff1b\n \n        g.fillRect (10, 10, 40, 40)\uff1b\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here we specify the bounds of the rectangle directly to the ",(0,i.jsx)(n.a,{href:"classGraphics.html#a747de9976729f72d9f6188104e6b2215",title:"Fills a rectangle with the current colour or brush.",children:"Graphics::fillRect()"})," function as separate integers:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"g.fillRect (10, // x\n            10, // y\n            40, // \u5e45\n            40); // \u9ad8\u3055\n"})}),"\n",(0,i.jsxs)(n.p,{children:["While this is straightforward, if we specify the bounds as a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object, it becomes much easier to perform manipulations of the rectangle."]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-rectangle-and-point-classes",children:"Using the Rectangle and Point classes"}),"\n",(0,i.jsxs)(n.p,{children:["It is easy to replace these separate coordinates, width, and height values with a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object, like so [1]:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n \n    juce::Rectangle\u9818\u57df (10, 10, 40, 40); // [1].\n \n    g.setColour (juce::Colours::orange)\uff1b\n    g.fillRect (area)\uff1b\n}\n"})}),"\n","\n","\n",(0,i.jsxs)(n.p,{children:["There are other ways to create rectangles. For example, rather than specifying width and height, we might have two points that we want to use as corners of the rectangle. We can use the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"})," class and a different ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," constructor:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n    g.setColour (juce::Colours::orange);\n    juce::Rectangle area (juce::Point (10, 10),\n                               juce::Point(50, 50));\n \n    g.fillRect (area)\uff1b\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c6\u30af\u30cb\u30c3\u30af\u306e\u7d20\u6674\u3089\u3057\u3044\u70b9\u306e\u3072\u3068\u3064\u306f\u3001\u4efb\u610f\u306e2\u70b9\u3092\u6307\u5b9a\u3067\u304d\u308b\u3053\u3068\u3060\u3002\u3053\u308c\u3089\u306e\u70b9\u306f\u77e9\u5f62\u306e\u5de6\u4e0a\u3068\u53f3\u4e0b\u306e\u89d2\u3092\u8868\u3059\u5fc5\u8981\u306f\u306a\u3044\u3002\u5f93\u3063\u3066\u3001\u3053\u308c\u306b\u76f8\u5f53\u3059\u308b\u3082\u306e\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"juce::Rectangle area (juce::Point (10, 50),\n                           juce::Point(50, 10));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-point-and-path-classes",children:"Using the Point and Path classes"}),"\n",(0,i.jsxs)(n.p,{children:["In fact, using a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," object we can specify a rectangle with four points defining each corner:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n    g.setColour (juce::Colours::orange);\n \n    juce::Path path;\n    path.startNewSubPath (juce::Point (10, 10));\n    path.lineTo (juce::Point (50, 10));\n    path.lineTo (juce::Point (50, 50));\n    path.lineTo (juce::Point(10, 50));\n    path.closeSubPath()\uff1b\n \n    g.fillPath (path)\uff1b\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note"}),"\n",(0,i.jsx)(n.p,{children:"\u30d1\u30b9\u306e\u30dd\u30a4\u30f3\u30c8\u3092\u5909\u3048\u3066\u3001\u4ed6\u306e\u56db\u89d2\u5f62\u5f62\u72b6\u3092\u4f5c\u3063\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30d1\u30b9\u306b\u76f4\u63a5\u77e9\u5f62\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n    g.setColour (juce::Colours::orange);\n \n    juce::Path path;\n    juce::Rectangle\u9818\u57df (10, 10, 40, 40)\uff1b\n    path.addRectangle (area)\uff1b\n \n    g.fillPath (path)\uff1b\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note"}),"\n",(0,i.jsx)(n.h2,{id:"testing-points-within-rectangles",children:"Testing points within rectangles"}),"\n",(0,i.jsxs)(n.p,{children:["Another useful feature of a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object is that it can test whether it contains a specified point. To test this out, we are going to get our component to repaint itself each time we click the mouse. To do this, add the following function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void mouseDown (const juce::MouseEvent&) override\n    {\n        repaint()\uff1b\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now let's write our ",(0,i.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function such that it randomly generates a rectangle and a point. Then it will draw the rectangle and then a smaller rectangle located around the point. This smaller rectangle will be drawn in a different colour depending upon whether the randomly-generated point is within the larger rectangle or not. Our ",(0,i.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function should start as before, but we're going to generate some random values so let's cache a reference of the system ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})," object too."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::darkgrey)\uff1b\n        g.setColour (juce::Colours::orange)\uff1b\n \n        auto& random = juce::Random::getSystemRandom()\uff1b\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6b21\u306b\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u9577\u65b9\u5f62\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        juce::Range rectRange (20, getWidth() / 2);\n        juce::RectanglerectArea (random.nextInt (rectRange)\u3001\n                                       random.nextInt (rectRange)\u3001\n                                       random.nextInt (rectRange)\u3001\n                                       random.nextInt (rectRange))\uff1b\n \n        g.drawRect (rectArea, 2)\uff1b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We limit the range of random values for each of the rectangle elements using a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRange",title:"A general-purpose range object, that simply represents any linear range with a start and end point.",children:"\u30ec\u30f3\u30b8"})," object. We also draw (rather than fill) the rectangle with a thickness of 2 points. To draw the smaller rectangle we are going to need another ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object. If we use only two arguments to the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," constructor, it creates a ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," object with the specified width and height (in that order) at a position of zero (0, 0). Add this line:"]}),"\n",(0,i.jsxs)(n.p,{children:["Now let's randomly-generate a point and position the centre of the ",(0,i.jsx)(n.code,{children:"\u70b9\u9762\u7a4d"})," rectangle at that point. Add the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        juce::Point point (random.nextInt (juce::Range (0, getWidth())),\n                                random.nextInt (juce::Range(0, getHeight()))\uff1b\n        pointArea.setCentre (point)\uff1b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This demonstrates another useful feature of the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," class as we can position its centre if we wish. This is sometimes preferable to considering a rectangle's position to be its top-left corner. Now we can use the ",(0,i.jsx)(n.a,{href:"classRectangle.html#a48d94ffec18b4b4755b316c3b223c645",title:"Returns true if this coordinate is inside the rectangle.",children:"\u77e9\u5f62::contains()"})," function to determine whether the ",(0,i.jsx)(n.code,{children:"\u30dd\u30a4\u30f3\u30c8"})," object is within the bounds of the ",(0,i.jsx)(n.code,{children:"\u77e9\u5f62\u9818\u57df"})," object. Add this code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"g.setColour (rectArea.contains (point) ? juce::Colours::limegreen\n                                               : juce::Colours::cornflowerblue)\uff1b\n \n        g.fillRect (pointArea)\uff1b\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u518d\u63cf\u753b\u3059\u308b\u306b\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot4.png",caption:"Testing points within rectangles"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The code for this example can be found in the ",(0,i.jsx)(n.code,{children:"PointLineRectangleTutorial_02.h"})," file of the demo project."]})}),"\n",(0,i.jsx)(n.h1,{id:"dealing-with-lines",children:"Dealing with lines"}),"\n",(0,i.jsx)(n.p,{children:"\u7dda\u306e\u63cf\u753b\u3068\u51e6\u7406\u3082\u540c\u69d8\u306b\u7c21\u5358\u3060\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u5bfe\u89d2\u7dda\u3092\u63cf\u753b\u3059\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n    g.setColour (juce::Colours::orange);\n \n    juce::Line line (juce::Point (10, 10),\n                            juce::Point(50, 50));\n \n    g.drawLine (line, 2.0f)\uff1b\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"line-intersections",children:"Line intersections"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"})," class can also perform line intersection tests. To test this out we are going to generate several randomly-generated lines, then we are going to draw a circle at the points where any of these lines intersect with any of the other lines. First let's set up our ",(0,i.jsx)(n.code,{children:"\u30da\u30a4\u30f3\u30c8"})," function with a background and get ready for generating some random numbers:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::darkgrey)\uff1b\n        g.setColour (juce::Colours::orange)\uff1b\n \n        auto& random = juce::Random::getSystemRandom()\uff1b\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3067\u306f\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u7dda\u3092\u751f\u6210\u3057\u3001\u63cf\u753b\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u914d\u5217\u306b\u683c\u7d0d\u3057\u3066\u307f\u3088\u3046\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        juce::Range lineRange (0, getWidth());\n        juce::Array> lines;\n        auto numLines = 10;\n \n        for (auto i = 0; i < numLines; ++i)\n        {\n            juce::Lineline ((float) random.nextInt (lineRange)\u3001\n                                    (float) random.nextInt (lineRange)\u3001\n                                    (float) random.nextInt (lineRange)\u3001\n                                    (float) random.nextInt (lineRange))\uff1b\n \n            lines.add (line)\uff1b\n            g.drawLine (line, 2.0f)\uff1b\n        }\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6b21\u306b\u8272\u3092\u5909\u3048\u3001\u5186\u3092\u63cf\u304f\u5883\u754c\u3068\u306a\u308b\u6b63\u65b9\u5f62\u3092\u7528\u610f\u3059\u308b\u3002\u3053\u308c\u3092\u52a0\u3048\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        g.setColour (juce::Colours::palegreen);\n        juce::RectanglepointArea (8, 8)\uff1b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, we'll iterate over the array of lines checking for intersections with any of the other lines using the ",(0,i.jsx)(n.a,{href:"classLine.html#ab65eb5685ecd0cfa39bee23c3d4f36d7",title:"Finds the intersection between two lines.",children:"Line::intersects()"})," function. We then move the centre of the ",(0,i.jsx)(n.code,{children:"\u70b9\u9762\u7a4d"})," rectangle to this point and paint a circle. To do this, add the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        for (auto lineI : lines)\n        {\n            for (auto lineJ : lines)\n            {\n                if (lines.indexOf (lineI) != lines.indexOf (lineJ))\n                {\n                    juce::Point\u4ea4\u5dee\u70b9\u3060\uff1b\n \n                    if (lineI.intersects (lineJ, intersection))// [2]\n                    {\n                        pointArea.setCentre (intersection)\uff1b\n                        g.fillEllipse (pointArea)\uff1b\n                    }\n                }\n            }\n        }\n    \n"})}),"\n",(0,i.jsxs)(n.p,{children:["The piece of code that checks for the intersection [2], calls the ",(0,i.jsx)(n.a,{href:"classLine.html#ab65eb5685ecd0cfa39bee23c3d4f36d7",title:"Finds the intersection between two lines.",children:"Line::intersects()"})," function. This not only returns ",(0,i.jsx)(n.code,{children:"\u771f\u306e"})," if the lines actually intersect, but also returns the point at which they intersect in the ",(0,i.jsx)(n.code,{children:"\u4ea4\u5dee\u70b9"})," argument."]}),"\n",(0,i.jsx)(n.p,{children:"\u4eca\u3059\u3050\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30de\u30a6\u30b9\u306e\u30af\u30ea\u30c3\u30af\u306b\u53cd\u5fdc\u3057\u3066\u518d\u63cf\u753b\u3059\u308b\u30b3\u30fc\u30c9\u3092\u6b8b\u3057\u3066\u304a\u3051\u3070\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u65b0\u3057\u3044\u7dda\u306e\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot5.png",caption:"Line intersections"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The code for this example can be found in the ",(0,i.jsx)(n.code,{children:"PointLineRectangle\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_03.h"})," file of the demo project."]})}),"\n",(0,i.jsxs)(n.p,{children:["If we didn't check the ",(0,i.jsx)(n.code,{children:"\u30d6\u30fc\u30eb"})," returned by the ",(0,i.jsx)(n.a,{href:"classLine.html#ab65eb5685ecd0cfa39bee23c3d4f36d7",title:"Finds the intersection between two lines.",children:"Line::intersects()"})," function, or we used the ",(0,i.jsx)(n.a,{href:"classLine.html#a7d4ae6edb918339e3dad61a7bae179d0",title:"Finds the intersection between two lines.",children:"Line::getIntersection()"})," instead, then points would be drawn in places where the lines ",(0,i.jsx)(n.em,{children:"\u3060\u308d\u3046"})," intersect should they be extended in each direction to an infinite length. For example, look at the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//..\n    if (lines.indexOf (lineI) != lines.indexOf (lineJ))\n    {\n        juce::Point\u4ea4\u5dee\u70b9\uff1b\n        pointArea.setCentre (lineI.getIntersection (lineJ))\uff1b\n        g.fillEllipse (pointArea)\uff1b\n    }\n//..\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u305d\u3046\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u751f\u6210\u3055\u308c\u308b\uff1a"}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot6.png",caption:"Line intersections beyond the endpoints"}),"\n",(0,i.jsxs)(n.p,{children:["The final ",(0,i.jsx)(n.code,{children:"for()"})," loop in the code for this example is simple, but not ideal. The problem is that it checks each line against every other line ",(0,i.jsx)(n.em,{children:"\u500d"}),". Rewrite this code such that it only checks each pair of lines once. You should be able to remove the ",(0,i.jsx)(n.code,{children:"if (lines.indexOf (lineI) != lines.indexOf (lineJ))"})," statement as part of this rewrite."]}),"\n",(0,i.jsx)(n.h1,{id:"manipulating-rectangles",children:"Manipulating rectangles"}),"\n",(0,i.jsxs)(n.p,{children:["Now let's look at some more manipulations of rectangles that we can perform. Before we start, let's add a simple function to generate a random colour (see ",(0,i.jsx)(n.a,{href:"../tutorial_random/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e9\u30f3\u30c0\u30e0\u30fb\u30af\u30e9\u30b9"}),") as we're going to be doing this quite a number of times in the following examples:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u9759\u7684 juce::Colour getRandomColour()\n    {\n        auto& random = juce::Random::getSystemRandom()\uff1b\n \n        return juce::Colour ((juce::uint8) random.nextInt (256)\u3001\n                             (juce::uint8) random.nextInt (256)\u3001\n                             (juce::uint8) random.nextInt (256))\uff1b\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's extend the code for drawing the rectangle by using the ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," class, by drawing ten squares in a diagonal pattern, and using a randomly-generated colour:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n \n    juce::Rectangle\u30a8\u30ea\u30a2\uff0810, 10, 40, 40\uff09\uff1b\n \n    auto numSquares = 10\uff1b\n \n    for (auto i = 0; i < numSquares; ++i)\n    {\n        g.setColour (getRandomColour())\uff1b\n        g.fillRect (area)\uff1b\n \n        area.translate (30, 30); // [3].\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"classRectangle.html#aa13dfd466078c2710fdea6ff2f7b263b",title:"Moves the rectangle's position by adding amount to its x and y coordinates.",children:"\u77e9\u5f62::translate()"})," function [3] moves the given rectangle by the horizontal and vertical offsets provided. The result should look something like the following screenshot:"]}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot2.png",caption:"Diagonal pattern of squares"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u3053\u3067\u306f\u305d\u306e\u30b3\u30fc\u30c9\u3092\u62e1\u5f35\u3057\u3066\u3001\u6b21\u306e\u63cf\u753b\u64cd\u4f5c\u306e\u524d\u306b\u77e9\u5f62\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3059\u308b\u3002\u3053\u308c\u306b\u52a0\u3048\u3066\u3001\u5e73\u884c\u79fb\u52d5\u306f\u77e9\u5f62\u306e\u5e45\u3068\u9ad8\u3055\u306b\u7b49\u3057\u304f\u306a\u308b\u3088\u3046\u306b\u884c\u308f\u308c\u308b\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::darkgrey);\n \n    juce::Rectangle area (10, 10, 40, 40);\n \n    auto& random = juce::Random::getSystemRandom();\n    auto numSquares = 10;\n \n    for (auto i = 0; i < numSquares; ++i)\n    {\n        g.setColour (getRandomColour());\n        g.fillRect (area);\n \n        area.translate (area.getWidth(), area.getHeight());        // [4]\n        area.setSize (random.nextInt (juce::Range (20, 40)),  // width\n                      random.nextInt (juce::Range(20, 40)); // \u9ad8\u3055\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u77e9\u5f62\u306f\u305d\u306e\u89d2\u3067\u300c\u7d50\u5408\u300d\u3055\u308c\u308b\uff1a"}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot3.png",caption:"Rectangles joined at the corners"}),"\n",(0,i.jsxs)(n.p,{children:["As an alternative to using the ",(0,i.jsx)(n.a,{href:"classRectangle.html#aa13dfd466078c2710fdea6ff2f7b263b",title:"Moves the rectangle's position by adding amount to its x and y coordinates.",children:"\u77e9\u5f62::translate()"}),' function, we could instead use addition to "add" points to rectangle in order to translate them. This means we could replace [4] above with the following line:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"area += juce::Point(area.getWidth(),area.getHeight())\uff1b\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rectangle-intersections",children:"Rectangle intersections"}),"\n",(0,i.jsxs)(n.p,{children:["If we have rectangles that overlap, we can determine the intersecting area using the ",(0,i.jsx)(n.a,{href:"classRectangle.html#a50e80bae322913e844bc628a99fa3166",title:"Returns the region that is the overlap between this and another rectangle.",children:"\u77e9\u5f62::getIntersection()"})," function. In the following example we calculate the intersecting rectangle between the current and next rectangles in the series. To make this clear, we draw outlines for each rectangle in the series and highlight the intersecting areas by drawing them as filled rectangles."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::darkgrey);\n \n        juce::Rectangle area (10, 10, 40, 40);\n \n        auto& random = juce::Random::getSystemRandom();\n        juce::Range rectRandomRange (20, 40);\n        auto numSquares = 10;\n \n        for (auto i = 0; i < numSquares; ++i)\n        {\n            auto nextArea = area + juce::Point(random.nextInt (rectRandomRange), // [5].\n                                                     random.nextInt (rectRandomRange))\uff1b\n \n            g.setColour (getRandomColour())\uff1b\n            g.fillRect (area.getIntersection (nextArea)); // [6].\n \n            g.setColour (getRandomColour())\uff1b\n            g.drawRect (area, 2); // [7].\n \n            area = nextArea\uff1b\n        }\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that we use the ",(0,i.jsx)(n.code,{children:"+"})," operator to offset the rectangle [5]. We also fill the intersecting areas first [6] before drawing the rectangle outlines [7]. This causes the last intersecting area to be drawn without its final corresponding rectangle."]}),"\n",(0,i.jsx)(t,{src:"https://docs.juce.com/master/tutorial_point_line_rectangle_screenshot7.png",caption:"Rectangle intersections"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The code for this final example can be found in the ",(0,i.jsx)(n.code,{children:"PointLineRectangle\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_04.h"})," file of the demo project."]})}),"\n",(0,i.jsx)(n.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial we have introduced the template classes ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPoint",title:"A pair of (x, y) coordinates.",children:"\u30dd\u30a4\u30f3\u30c8"}),", ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"}),", and ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"}),". In particular, we have covered the following techniques:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Creating and manipulating ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," objects and using them in drawing code."]}),"\n",(0,i.jsxs)(n.li,{children:["Creating ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classRectangle",title:"Manages a rectangle and allows geometric operations to be performed on it.",children:"\u9577\u65b9\u5f62"})," objects from corner points or by intersections of two rectangles."]}),"\n",(0,i.jsxs)(n.li,{children:["Creating ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classPath",title:"A path is a sequence of lines and curves that may either form a closed shape or be open-ended.",children:"\u30d1\u30b9"})," objects containing rectangles."]}),"\n",(0,i.jsxs)(n.li,{children:["Creating ",(0,i.jsx)(n.a,{href:"https://docs.juce.com/master/classLine",title:"Represents a line.",children:"\u30e9\u30a4\u30f3"})," objects, drawing lines, and finding points where lines intersect."]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_component_parents_children/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u89aa\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_graphics_class/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebGraphics\u30af\u30e9\u30b9"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_random/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e9\u30f3\u30c0\u30e0\u30fb\u30af\u30e9\u30b9"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_rectangle_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u9ad8\u5ea6\u306aGUI\u30ec\u30a4\u30a2\u30a6\u30c8\u30c6\u30af\u30cb\u30c3\u30af"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_flex_box_grid/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebFlexBox\u3068Grid\u3092\u4f7f\u3063\u305f\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6GUI\u30ec\u30a4\u30a2\u30a6\u30c8"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);