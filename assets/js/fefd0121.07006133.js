"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[2832],{1184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=t(4848),a=t(8453),o=t(3449),i=t(6378);const s={title:"The Random class",sidebar_position:2},l="Tutorial: The Random class",c={id:"utility-classes/tutorial_random",title:"The Random class",description:"This tutorial introduces generating random numbers using the Random class. Random numbers are useful in all sorts of situations including games, cryptography, and audio.",source:"@site/docs/utility-classes/tutorial_random.mdx",sourceDirName:"utility-classes",slug:"/utility-classes/tutorial_random",permalink:"/juce-tutorial-ja/utility-classes/tutorial_random",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/utility-classes/tutorial_random.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"The Random class",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The BigInteger class",permalink:"/juce-tutorial-ja/utility-classes/tutorial_big_integer"},next:{title:"File reading",permalink:"/juce-tutorial-ja/utility-classes/tutorial_file_reading"}},d={},h=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Setting a maximum value",id:"setting-a-maximum-value",level:2},{value:"Setting a minimum and maximum value",id:"setting-a-minimum-and-maximum-value",level:2},{value:"Larger integers",id:"larger-integers",level:2},{value:"Floating point values",id:"floating-point-values",level:2},{value:"Random rectangle positions",id:"random-rectangle-positions",level:2},{value:"Random rectangle sizes",id:"random-rectangle-sizes",level:2},{value:"Random colours",id:"random-colours",level:2},{value:"Choosing randomly from an array",id:"choosing-randomly-from-an-array",level:2},{value:"Weighted distributions",id:"weighted-distributions",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{path:"tutorial_random.html"}),"\n",(0,r.jsx)(n.h1,{id:"tutorial-the-random-class",children:"Tutorial: The Random class"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial introduces generating random numbers using the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class. ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," numbers are useful in all sorts of situations including games, cryptography, and audio."]}),"\n",(0,r.jsx)(n.p,{children:"Level: Beginner"}),"\n",(0,r.jsx)(n.p,{children:"Platforms: Windows, macOS, Linux, iOS, Android"}),"\n",(0,r.jsxs)(n.p,{children:["Classes: ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"}),", ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRange",title:"A general-purpose range object, that simply represents any linear range with a start and end point.",children:"Range"}),", ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"}),", ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classColour",title:"Represents a colour, also including a transparency value.",children:"Colour"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["Download the demo project for this tutorial here: ",(0,r.jsx)(n.a,{href:"/tutorials/PIPs/RandomTutorial.zip",children:"PIP"})," | ",(0,r.jsx)(n.a,{href:"/tutorials/ZIPs/RandomTutorial.zip",children:"ZIP"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,r.jsxs)(n.p,{children:["If you need help with this step, see ",(0,r.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,r.jsxs)(n.p,{children:["The demo project sets up a simple text console where we can display the results of various operations. This allows us to demonstrate some of the features of the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class in this tutorial."]}),"\n",(0,r.jsxs)(n.p,{children:["In its default configuration, the demo project displays a series of 100 randomly-generated 32-bit integers. These values should be distributed roughly uniformly in the range -2,147,483,648 .. 2,147,483,647. Of course these values aren't truly random. Since they are generated by a computer, they are ",(0,r.jsx)(n.em,{children:"pseudorandom"}),". For most purposes the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," object will be random enough, but you may need to use more sophisticated techniques for certain critical or specialist applications."]}),"\n",(0,r.jsx)(n.h1,{id:"test-bed-code",children:"Test bed code"}),"\n",(0,r.jsxs)(n.p,{children:["Throughout this tutorial we will modify parts of the demo project to demonstrate different features of the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class. All of the code under discussion is in the ",(0,r.jsx)(n.code,{children:"MainComponent"})," class. In fact, many of the changes in the first instance will be to the ",(0,r.jsx)(n.code,{children:"runExample()"})," function."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    void runExample()\n    {\n        logMessage ("------------------------- START --------------------------");\n \n        for (auto iteration = 0; iteration < 100; ++iteration)\n        {\n            auto randomInt = juce::Random::getSystemRandom().nextInt();\n \n            logMessage (juce::String (randomInt));\n        }\n \n        logMessage ("----------------------- FINISHED -------------------------");\n    }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here we access a shared (global) ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," object using the ",(0,r.jsx)(n.a,{href:"classRandom.html#ad7d9d42dd0efbb68d569e975b0778518",title:"The overhead of creating a new Random object is fairly small, but if you want to avoid it,...",children:"Random::getSystemRandom()"})," function. We call the ",(0,r.jsx)(n.a,{href:"classRandom.html#a69dd2014564478eb13ca41c03679c8f9",title:"Returns the next random 32 bit integer.",children:"Random::nextInt()"})," function with this system ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," object to generate a random number. In most cases it is satisfactory to use this system random object for generating all of your random numbers. In some cases it is necessary to create your own instance of the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class. This is usually where the values you are generating are being generated on another thread \u2014 see ",(0,r.jsx)(n.a,{href:"../tutorial_simple_synth_noise/",children:"Tutorial: Build a white noise generator"}),". If two (or more) threads try to access the system ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," object then the sequence could get corrupted and may cause problems."]}),"\n",(0,r.jsx)(n.h1,{id:"limiting-ranges",children:"Limiting ranges"}),"\n",(0,r.jsxs)(n.p,{children:["You will almost certainly want to limit the range of values generated by the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class. While this can be done using simple arithmetic, the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class makes it even easier."]}),"\n",(0,r.jsx)(n.h2,{id:"setting-a-maximum-value",children:"Setting a maximum value"}),"\n",(0,r.jsxs)(n.p,{children:["To set the maximum value you simply pass the ",(0,r.jsx)(n.a,{href:"classRandom.html#a69dd2014564478eb13ca41c03679c8f9",title:"Returns the next random 32 bit integer.",children:"Random::nextInt()"})," an integer like so:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"auto randomInt = juce::Random::getSystemRandom().nextInt (6);\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will set the maximum value to one less than the argument passed. In this case the values will be in the range 0 .. 5. It might be easier in this case to think of the argument as being the number of possible outcomes. Using 6 as the maximum value means there are 6 possible outcomes. This is just like rolling a die except the faces of the die are number 0 .. 5 rather than 1 .. 6!"}),"\n",(0,r.jsx)(n.h2,{id:"setting-a-minimum-and-maximum-value",children:"Setting a minimum and maximum value"}),"\n",(0,r.jsx)(n.p,{children:"Of course, to generate values in the range 1 .. 6 we could just add 1 like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"auto randomInt = juce::Random::getSystemRandom().nextInt (6) + 1;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["But, the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class can handle this for us by passing it a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRange",title:"A general-purpose range object, that simply represents any linear range with a start and end point.",children:"Range"})," object"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"auto randomInt = juce::Random::getSystemRandom().nextInt (juce::Range (1, 7));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The maximum value still needs to be one larger than the maximum value we want the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," object to be able to generate. The minimum value is ",(0,r.jsx)(n.em,{children:"inclusive"})," and the maximum value is ",(0,r.jsx)(n.em,{children:"exclusive"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"other-numerical-types",children:"Other numerical types"}),"\n",(0,r.jsxs)(n.p,{children:["In the examples above the values generated are all in the range of 32-bit integers. The ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class can generate 64-bit integer values and even arbitrarily large integers using the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"})," class."]}),"\n",(0,r.jsx)(n.h2,{id:"larger-integers",children:"Larger integers"}),"\n",(0,r.jsxs)(n.p,{children:["To generate 64-bit integers use the ",(0,r.jsx)(n.a,{href:"classRandom.html#aa78fa923adb76a168c5c67d072cfcef3",title:"Returns the next 64-bit random number.",children:"Random::nextInt64()"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"auto randomInt = juce::Random::getSystemRandom().nextInt64();\n"})}),"\n",(0,r.jsx)(n.p,{children:"This generates an integer in the range \u22129,223,372,036,854,775,808 .. 9,223,372,036,854,775,807. To specify a smaller range for 64-bit integers you would need to perform the arithmetic yourself."}),"\n",(0,r.jsxs)(n.p,{children:["To generate arbitrarily large integers use the ",(0,r.jsx)(n.a,{href:"classRandom.html#af9aacfc547bfcdba8aa2fa8f04022896",title:"Returns a BigInteger containing a random number.",children:"Random::nextLargeNumber()"})," function. This returns a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"})," object and takes a single ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"})," object as an argument to indicate the maximum value (again the maximum value is ",(0,r.jsx)(n.em,{children:"exclusive"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void runExample()\n{\n    logMessage ("------------------------- START --------------------------");\n \n    juce::BigInteger maximumValue;\n    maximumValue.setBit (256);\n \n    for (auto iteration = 0; iteration < 100; ++iteration)\n    {\n        auto randomInt = juce::Random::getSystemRandom().nextLargeNumber (maximumValue);\n        logMessage (randomInt.toString (10));\n    }\n \n    logMessage ("----------------------- FINISHED -------------------------");\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here, we create a very large maximum value of 2256 by setting bit 256 in the ",(0,r.jsx)(n.code,{children:"maximumValue"})," ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"})," object. The output is some very large, randomly generated integers. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"...\n104920467355765962354471349450287456411052143302125448224736731840703932891139\n113537286625531390989138082815985050172086775818737779507269901485377454431686\n57847088262227027688174446009482649397747696846679750345153185249067937632876\n54822036781617285561665007930420018266697875685845320423632890189355412858007\n69785221527278648790869522951189615281519473001003509768672723497611119666776\n53474255551114041705196319572561227500136240211575200675493708156631961926592\n99704173402721617789464355135995656339243151513499563088758939994549638940776\n89393625021259981953975863158742834192382645809510667002452217673394247775970\n16555501734946882319812302845214545517919239951054372751749796998179564377182\n----------------------- FINISHED -------------------------\n"})}),"\n",(0,r.jsx)(n.h2,{id:"floating-point-values",children:"Floating point values"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class can generate floating-point values too:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void runExample()\n{\n    logMessage ("------------------------- START --------------------------");\n \n    for (auto iteration = 0; iteration < 100; ++iteration)\n    {\n        auto randomValue = juce::Random::getSystemRandom().nextFloat();\n \n        logMessage (juce::String (randomValue));\n    }\n \n    logMessage ("----------------------- FINISHED -------------------------");\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["And it can generate ",(0,r.jsx)(n.code,{children:"double"})," values:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"auto randomValue = juce::Random::getSystemRandom().nextDouble();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In both of these cases the values returned are in the range 0.0 .. 1.0. To generate a different range you will need to apply the arithmetic yourself (see ",(0,r.jsx)(n.a,{href:"../tutorial_simple_synth_noise/",children:"Tutorial: Build a white noise generator"})," for an example). You can use the ",(0,r.jsx)(n.a,{href:"group__juce__core-maths.html#ga53851e83e8f5c5faeb5dbc64196bb329",children:"jmap()"})," function for this."]}),"\n",(0,r.jsx)(n.h1,{id:"visualising-values",children:"Visualising values"}),"\n",(0,r.jsx)(n.p,{children:"It can be useful to visualise the random values generated, rather than looking at long lists of numbers. This is especially useful if you need a set of random values with a distribution other than a uniform distribution. This can also create some interesting patterns."}),"\n",(0,r.jsx)(n.h2,{id:"random-rectangle-positions",children:"Random rectangle positions"}),"\n",(0,r.jsxs)(n.p,{children:["Change the ",(0,r.jsx)(n.code,{children:"MainContentComponent"})," to the following simple code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class MainContentComponent   : public juce::Component\n{\npublic:\n    MainContentComponent()\n    {\n        setSize (600, 600);\n    }\n \n    ~MainContentComponent() {}\n \n    void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::black);\n        g.setColour (juce::Colours::orange);\n \n        auto& random = juce::Random::getSystemRandom();\n        juce::Rectangle rect (0, 0, 20, 20);\n \n        for (auto i = 0; i < 100; ++i)\n        {\n            rect.setCentre (random.nextInt (getWidth()), random.nextInt (getHeight()));\n            g.drawRect (rect);\n        }\n    }\n \nprivate:\n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\nJUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR#define JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(className)This is a shorthand way of writing both a JUCE_DECLARE_NON_COPYABLE and JUCE_LEAK_DETECTOR macro for ...Definition juce_PlatformDefs.h:245\n"})}),"\n",(0,r.jsx)(n.p,{children:"This should generate an image something like this:"}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot1.png",caption:"100 randomly generated rectangles"}),"\n",(0,r.jsxs)(n.p,{children:["Try resizing the window. You will notice that a new set of rectangles is generated each time the window is resized and the ",(0,r.jsx)(n.code,{children:"paint()"})," function is called."]}),"\n",(0,r.jsx)(n.p,{children:"Try changing the number of rectangles and the size of the rectangles. You could make the rectangle size proportion to the size of the window, for example. Try drawing circles instead of rectangles."}),"\n",(0,r.jsx)(n.h2,{id:"random-rectangle-sizes",children:"Random rectangle sizes"}),"\n",(0,r.jsx)(n.p,{children:"To randomise the size of the rectangles we could do this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void paint (Graphics& g) override\n{\n    g.fillAll (juce::Colours::black);\n    g.setColour (juce::Colours::orange);\n \n    auto& random = juce::Random::getSystemRandom();\n    juce::Rectangle rect (0, 0, 20, 20);\n \n    for (auto i = 0; i < 100; ++i)\n    {\n        rect.setSize (random.nextInt (getWidth() / 4), random.nextInt (getHeight() / 4));\n        rect.setCentre (random.nextInt (getWidth()), random.nextInt (getHeight()));\n        g.drawRect (rect);\n    }\n}\nGraphicsA graphics context, used for drawing a component or image.Definition juce_GraphicsContext.h:48\nGraphics::drawRectvoid drawRect(int x, int y, int width, int height, int lineThickness=1) constDraws a rectangular outline, using the current colour or brush.\nGraphics::fillAllvoid fillAll() constFills the context's entire clip region with the current colour or brush.\nGraphics::setColourvoid setColour(Colour newColour)Changes the current drawing colour.\n"})}),"\n",(0,r.jsx)(n.p,{children:"To make this generate squares each time we could do this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"for (auto i = 0; i < 100; ++i)\n{\n    auto size = random.nextInt (jmin (getWidth(), getHeight()) / 4);\n    rect.setSize (size, size);\n    rect.setCentre (random.nextInt (getWidth()), random.nextInt (getHeight()));\n    g.drawRect (rect);\n}\njminconstexpr Type jmin(Type a, Type b)Returns the smaller of two values.Definition juce_MathsFunctions.h:355\n"})}),"\n",(0,r.jsx)(n.h2,{id:"random-colours",children:"Random colours"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/namespaceColours",title:"Contains a set of predefined named colours (mostly standard HTML colours)",children:"Colours"})," can be randomised too, but to create colours that work well together using randomisation is a little trickier. For example, this generates a new random colour for each of the rectangles. But this colour could be ",(0,r.jsx)(n.em,{children:"any"})," colour:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::black);\n \n    auto& random = juce::Random::getSystemRandom();\n    juce::Rectangle rect (0, 0, 20, 20);\n \n    for (auto i = 0; i < 100; ++i)\n    {\n        juce::Colour colour (random.nextInt (256),\n                             random.nextInt (256),\n                             random.nextInt (256));\n \n        g.setColour (colour);\n \n        rect.setCentre (random.nextInt (getWidth()), random.nextInt (getHeight()));\n        g.drawRect (rect);\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This should look something like this:"}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot2.png",caption:"Randomly generated colours"}),"\n",(0,r.jsx)(n.p,{children:"To limit the colours in a simple way we could randomise only one or two of the elements (red, green, or blue) and limit the range of values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"juce::Colour colour (random.nextInt (juce::Range (100, 256)),\n                     random.nextInt (juce::Range (50,  200)),\n                     200);\n \ng.setColour (colour);\n"})}),"\n",(0,r.jsx)(n.p,{children:"This produces colours in the pink and purple shades:"}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot3.png",caption:"Pinks and purples"}),"\n",(0,r.jsx)(n.p,{children:"To be more specific, you could generate colours using hue, saturation, and brightness. For example, the oranges are at a hue of around 30\xb0 (or 0.083 in the 0 .. 1 range). If we generate random hues in the range 0.05 .. 0.15 these should all be different shades of orange."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"for (auto i = 0; i < 100; ++i)\n{\n    auto hue = juce::jmap (random.nextFloat(), 0.05f, 0.15f);\n    g.setColour (juce::Colour::fromHSV (hue, 0.9f, 0.9f, 1.0f));\n \n    rect.setCentre (random.nextInt (getWidth()), random.nextInt (getHeight()));\n    g.drawRect (rect);\n}\n"})}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot4.png",caption:"Randomly generated orange hues"}),"\n",(0,r.jsx)(n.p,{children:"Try generating other collections of random colours that work well together."}),"\n",(0,r.jsx)(n.h2,{id:"choosing-randomly-from-an-array",children:"Choosing randomly from an array"}),"\n",(0,r.jsx)(n.p,{children:"You could choose randomly from a specific set of colours by using an array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class MainContentComponent   : public Component\n{\npublic:\n    MainContentComponent()\n    {\n        colours.add (juce::Colours::white);\n        colours.add (juce::Colours::orange);\n        colours.add (juce::Colours::lightgreen);\n \n        setSize (400, 400);\n    }\n \n    ~MainContentComponent() {}\n \n    void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::black);\n \n        auto& random = Random::getSystemRandom();\n        juce::Rectangle rect (0.0f, 0.0f, 5.0f, 5.0f);\n \n        for (auto i = 0; i < 1000; ++i)\n        {\n            g.setColour (colours[random.nextInt (colours.size())]);\n            rect.setCentre ((float) random.nextInt (getWidth()),\n                            (float) random.nextInt (getHeight()));\n            g.drawEllipse (rect, 1.0f);\n        }\n    }\n \nprivate:\n    juce::Array colours;\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\nComponentThe base class for all JUCE user-interface objects.Definition juce_Component.h:39\nRandom::getSystemRandomstatic Random & getSystemRandom() noexceptThe overhead of creating a new Random object is fairly small, but if you want to avoid it,...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here we store the items in an array. To select an item at random we generate a random value based on the array's size. Then we use this value as the index into the array."}),"\n",(0,r.jsx)(n.h1,{id:"other-distributions",children:"Other distributions"}),"\n",(0,r.jsx)(n.p,{children:"All of the random numbers generated in this tutorial so far have been uniformly distributed between the minimum and maximum values. While this is not a tutorial on statistics, it can be useful to know some simple methods of making certain randomly-generated values more likely to occur than others. This has application in games, computer-generated art, and generative sound and music."}),"\n",(0,r.jsx)(n.p,{children:"In the following code we generate 1,000 circles distributed uniformly across the window:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void paint (juce::Graphics& g) override\n{\n    g.fillAll (juce::Colours::black);\n    g.setColour (juce::Colours::orange);\n \n    auto& random = juce::Random::getSystemRandom();\n    juce::Rectangle rect (0.0f, 0.0f, 5.0f, 5.0f);\n \n    for (auto i = 0; i < 1000; ++i)\n    {\n        rect.setCentre ((float) random.nextInt (getWidth()),\n                        (float) random.nextInt (getHeight()));\n        g.drawEllipse (rect, 1.0f);\n    }\n}\n"})}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot5.png",caption:"Uniformly distributed circles"}),"\n",(0,r.jsx)(n.p,{children:"You can see from the image that the circles are roughly distributed uniformly."}),"\n",(0,r.jsx)(n.p,{children:"A linear distribution is where values at one end of the range are more likely than others. Values across the range become less likely towards the other end of the range. The probability between these two points changes in a linear fashion. A simple way to implement this is to generate one random value based on the outcome of another random value. In the following example we generate linearly-distributed values for both the x and y coordinates of the circles."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"for (auto i = 0; i < 1000; ++i)\n{\n    auto x = random.nextInt (random.nextInt (Range (1, getWidth())));\n    auto y = random.nextInt (random.nextInt (Range (1, getHeight())));\n \n    rect.setCentre (x, y);\n    g.drawEllipse (rect, 1.0f);\n}\nRangeA general-purpose range object, that simply represents any linear range with a start and end point.Definition juce_Range.h:43\nxfloat xDefinition juce_UnityPluginInterface.h:191\nyfloat float yDefinition juce_UnityPluginInterface.h:191\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here you can see that we generate one random value then pass the result to the ",(0,r.jsx)(n.a,{href:"classRandom.html#a69dd2014564478eb13ca41c03679c8f9",title:"Returns the next random 32 bit integer.",children:"Random::nextInt()"})," function to generate the final value."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["We can't use zero as the maximum value passed to the ",(0,r.jsx)(n.a,{href:"classRandom.html#a69dd2014564478eb13ca41c03679c8f9",title:"Returns the next random 32 bit integer.",children:"Random::nextInt()"})," function so we have to make sure the first random number has a minimum of 1."]})}),"\n",(0,r.jsx)(n.p,{children:"The result should look something like this:"}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot6.png",caption:"Circles focused around the top-left corner"}),"\n",(0,r.jsx)(n.p,{children:"Since values towards zero are more likely, the circles appear to be focused around the top-left corner. To focus the circles around the centre we could change the code like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"auto centreX = getWidth()  / 2;\nauto centreY = getHeight() / 2;\n \nfor (auto i = 0; i < 1000; ++i)\n{\n    auto x0 = random.nextInt (juce::Range (1, getWidth()  / 2));\n    auto x  = random.nextInt (juce::Range (centreX - x0, centreX + x0));\n    auto y0 = random.nextInt (juce::Range (1, getHeight() / 2));\n    auto y  = random.nextInt (juce::Range (centreY - y0, centreY + y0));\n \n    rect.setCentre (x, y);\n    g.drawEllipse (rect, 1.0f);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"weighted-distributions",children:"Weighted distributions"}),"\n",(0,r.jsx)(n.p,{children:"In some cases you may want to weight the probability of certain outcomes specifically. Let's take our earlier example where we chose randomly from three colours in an array. Let's say we want white to be the most likely, orange less likely, and green even less likely than orange. We could define probabilities as shown in the following table:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Colour"}),(0,r.jsx)(n.th,{children:"Probability"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"White"}),(0,r.jsx)(n.td,{children:"70%"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Orange"}),(0,r.jsx)(n.td,{children:"25%"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Green"}),(0,r.jsx)(n.td,{children:"5%"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["We could add an additional array of ",(0,r.jsx)(n.em,{children:"weights"})," to our code where the indices of the weights correspond with the indices of the colours:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class MainContentComponent   : public juce::Component\n{\npublic:\n    MainContentComponent()\n    {\n        colours.add (juce::Colours::white);\n        weights.add (0.7f);\n \n        colours.add (juce::Colours::orange);\n        weights.add (0.25f);\n \n        colours.add (juce::Colours::lightgreen);\n        weights.add (0.05f);\n \n        setSize (400, 400);\n    }\n \n    void paint (juce::Graphics& g) override\n    {\n        g.fillAll (juce::Colours::black);\n \n        juce::Random random;\n        juce::Rectangle rect (0.0f, 0.0f, 5.0f, 5.0f);\n \n        auto sumOfWeights = sumFloatArray (weights); // [1]\n \n        for (auto i = 0; i < 1000; ++i)\n        {\n            g.setColour (colourAtQuantile (random.nextFloat() * sumOfWeights)); // [2]\n \n            rect.setCentre ((float) random.nextInt (getWidth()),\n                            (float) random.nextInt (getHeight()));\n \n            g.drawEllipse (rect, 1.0f);\n        }\n    }\n \nprivate:\n    static float sumFloatArray (const juce::Array& values)\n    {\n        auto sum = 0.0f;\n \n        for (auto value : values)\n            sum += value;\n \n        return sum;\n    }\n \n    static int indexOfQuantile (const juce::Array& weights, float quantile)\n    {\n        auto runningTotal = 0.0f; // [4]\n \n        for (auto weight : weights)\n        {\n            runningTotal += weight;\n \n            if (quantile < runningTotal) // [5]\n                return weights.indexOf (weight);\n        }\n \n        return -1;\n    }\n \n    juce::Colour colourAtQuantile (float quantile) const  // [3]\n    {\n        auto index = indexOfQuantile (weights, quantile);\n        return index < 0 ? juce::Colours::transparentBlack : colours[index];\n    }\n \n    //==============================================================================\n    juce::Array colours;\n    juce::Array weights;\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"This works as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[1]: To generate the random number, first take the sum of the weights. In this case we know that the sum of the weights is 1.0, but using this technique the weights do not ",(0,r.jsx)(n.em,{children:"need"})," to sum to 1.0."]}),"\n",(0,r.jsx)(n.li,{children:"[2]: Then generate a random number in the range 0 .. sum."}),"\n",(0,r.jsxs)(n.li,{children:["[3]: The ",(0,r.jsx)(n.code,{children:"colourAtQuantile()"})," function uses this value to find the colour."]}),"\n",(0,r.jsx)(n.li,{children:"[4]: This is achieved by keeping a running total of the weights as we iterate over the the array of weights."}),"\n",(0,r.jsx)(n.li,{children:"[5]: When the running total exceeds the randomly generated value we have found the colour."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The code for this final example can be found in the ",(0,r.jsx)(n.code,{children:"RandomTutorial_02.h"})," file of the demo project."]})}),"\n",(0,r.jsx)(n.p,{children:"The result is shown in the following screenshot:"}),"\n",(0,r.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_random_screenshot7.png",caption:"Weighted choices of colours"}),"\n",(0,r.jsx)(n.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsxs)(n.p,{children:["In this tutorial we have introduced the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"Random"})," class and generating random numbers in general. After reading this tutorial you should be able to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate random integers and floating point values."}),"\n",(0,r.jsx)(n.li,{children:"Limit the range of the random numbers generated."}),"\n",(0,r.jsx)(n.li,{children:"Use random values to perform drawing tasks."}),"\n",(0,r.jsx)(n.li,{children:"Generate specific ranges of randomly generated colours."}),"\n",(0,r.jsx)(n.li,{children:"Choose values randomly from an array, including weighting the probability of these choices."}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_big_integer/",children:"Tutorial: The BigInteger class"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_colours/",children:"Tutorial: Colours in JUCE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_file_reading/",children:"Tutorial: File reading"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_simple_synth_noise/",children:"Tutorial: Build a white noise generator"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3449:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(4848);function a(e){let{src:n,caption:t,alt:a,width:o,height:i}=e;return(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:n,alt:a||t,width:o,height:i}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("b",{children:t})})]})}},6378:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(4848);function a(e){let{path:n}=e;return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://docs.juce.com/master/"+n,children:"\ud83d\udcda Source Page"})})}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);