"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[4428],{7038:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=i(4848),n=i(8453),l=i(3449);i(6378);const a={title:"\u30c7\u30b7\u30d9\u30eb\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",sidebar_position:3},r="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30c7\u30b7\u30d9\u30eb\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b",o={id:"synth/tutorial_synth_db_level_control",title:"\u30c7\u30b7\u30d9\u30eb\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30c7\u30b7\u30d9\u30eb\u30b9\u30b1\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u51fa\u529b\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u5024\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u3001\u3088\u308a\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002",source:"@site/docs/synth/tutorial_synth_db_level_control.mdx",sourceDirName:"synth",slug:"/synth/tutorial_synth_db_level_control",permalink:"/juce-tutorial-ja/synth/tutorial_synth_db_level_control",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/synth/tutorial_synth_db_level_control.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u30c7\u30b7\u30d9\u30eb\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",permalink:"/juce-tutorial-ja/synth/tutorial_synth_level_control"},next:{title:"\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b",permalink:"/juce-tutorial-ja/synth/tutorial_sine_synth"}},c={},h=[{value:"The Decibels class",id:"the-decibels-class",level:2},{value:"Converting decibels to linear gain",id:"converting-decibels-to-linear-gain",level:2},{value:"Processing the audio",id:"processing-the-audio",level:2},{value:"Issues with this approach",id:"issues-with-this-approach",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30c7\u30b7\u30d9\u30eb\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30c7\u30b7\u30d9\u30eb\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30c7\u30b7\u30d9\u30eb\u30b9\u30b1\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u51fa\u529b\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u5024\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u3001\u3088\u308a\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u30ec\u30d9\u30eb Intermediate"}),"\n",(0,s.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux"}),"\n",(0,s.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"}),", ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"}),", ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"\u30b9\u30c8\u30ea\u30f3\u30b0"})]}),"\n",(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,s.jsx)(t.a,{href:"/tutorials/PIPs/SynthDecibelLevelControlTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,s.jsx)(t.a,{href:"/tutorials/ZIPs/SynthDecibelLevelControlTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,s.jsxs)(t.p,{children:["If you need help with this step, see ",(0,s.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["This tutorial leads on from ",(0,s.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"}),". You should have followed that tutorial before continuing."]})}),"\n",(0,s.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,s.jsxs)(t.p,{children:["In a similar way to the ",(0,s.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})," demo project, the demo project for this tutorial presents a window containing a single slider. This time the slider value is represented in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"}),". This value in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," needs to be converted to a linear gain value before being used in the audio processing algorithm. Most audio applications express gain to users in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," as this often ",(0,s.jsx)(t.em,{children:"\u30d5\u30a3\u30fc\u30ea\u30f3\u30b0"})," more natural as the values are varied (or compared). The user interface for the demo project is shown in the following screenshot."]}),"\n",(0,s.jsx)(l.A,{src:"https://docs.juce.com/master/tutorial_synth_db_level_control_screenshot1.png",caption:"The demo project main window showing the control slider in decibels."}),"\n",(0,s.jsx)(t.h1,{id:"creating-a-customised-slider",children:"Creating a customised slider"}),"\n",(0,s.jsxs)(t.p,{children:["Notice this time that the text displayed adjacent to the slider not only shows the value in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"}),' but it also shows the suffix "dB". This is achieved by creating a custom slider class, ',(0,s.jsx)(t.code,{children:"\u30c7\u30b7\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc"})," that inherits from the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"})," class. In this custom slider class the text box interface is customised to display the value in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"}),". While a suffix to the text displayed within a ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"})," object's text box can be added using the ",(0,s.jsx)(t.a,{href:"classSlider.html#ac416a101b5d9a504f61e2f50dc593f61",title:"Sets a suffix to append to the end of the numeric value when it's displayed as a string.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::setTextValueSuffix()"})," function, we need one more customisation. This is to customise the way that values are converted such that we can display ",(0,s.jsx)(t.strong,{children:"-INF dB"})," when the level drops very low."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"INF"})," refers to ",(0,s.jsx)(t.em,{children:"\u30a4\u30f3\u30d5\u30a3\u30cb\u30c6\u30a3"})," where -INF dB is treated as silence for the purposes of our application."]})}),"\n",(0,s.jsx)(t.h2,{id:"the-decibels-class",children:"The Decibels class"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class contains a number of static functions necessary for the conversion between the values in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," and linear gain. It also provides a simple means of converting values in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," to a ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"\u30b9\u30c8\u30ea\u30f3\u30b0"})," object. For example, we override the virtual function ",(0,s.jsx)(t.a,{href:"classSlider.html#a5a1693166d0815f812202b1a3a6eb202",title:"Turns the slider's current value into a text string.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::getTextFromValue()"})," by using the ",(0,s.jsx)(t.a,{href:"classDecibels.html#a808a763495ccbe5d504fbd501bb85e0d",title:"Converts a decibel reading to a string.",children:"\u30c7\u30b7\u30d9\u30eb::toString()"})," function (in the ",(0,s.jsx)(t.code,{children:"\u30c7\u30b7\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc"})," class) like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"juce::String getTextFromValue (double value) \u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n    {\n        juce::Decibels::toString (value) \u3092\u8fd4\u3057\u307e\u3059\uff1b\n    }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This allows our ",(0,s.jsx)(t.code,{children:"\u30c7\u30b7\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc"})," class to display the appropriate text in its text box for a given slider value."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class doesn't have a function to convert a ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"\u30b9\u30c8\u30ea\u30f3\u30b0"})," object back to a value in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"}),", so we need to write our own. Here we override the ",(0,s.jsx)(t.a,{href:"classSlider.html#a532774d3294a058784f7d4291b33b720",title:"Subclasses can override this to convert a text string to a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::getValueFromText()"})," virtual function (again in the ",(0,s.jsx)(t.code,{children:"\u30c7\u30b7\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc"})," class):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'double getValueFromText (const juce::String& text) override\n    {\n        auto minusInfinitydB = -100.0\uff1b\n \n        auto decibelText = text.upToFirstOccurrenceOf ("dB", false, false).trim(); // [1].\n \n        return decibelText.equalsIgnoreCase ("-INF") ? minusInfinitydB\n                                                     : decibelText.getDoubleValue(); // [2].\n    }\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306b\u5024\u3092\u5165\u529b\u3057\u3001\u305d\u308c\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u6709\u52b9\u306a\u5024\u306b\u5909\u63db\u3055\u308c\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['[1]: Strip off the "dB" suffix from the text (if it is present), and trim the text to remove any leading or trailing whitespace (using the ',(0,s.jsx)(t.a,{href:"classString.html#a5ed648f71d99bb8aef15e8ba35422a30",title:"Returns a copy of this string with any whitespace characters removed from the start and end.",children:"\u6587\u5b57\u5217::\u30c8\u30ea\u30e0()"})," function)."]}),"\n",(0,s.jsxs)(t.li,{children:['[2]: Check if the remaining text is "-INF" and return -100 in this case (this is the default value in ',(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," for -INF dB that the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class uses, see the ",(0,s.jsx)(t.a,{href:"#tutorial_synth_db_level_control_notes",children:"\u5099\u8003"})," for this tutorial for a discussion on this). Otherwise we convert this remaining text to a ",(0,s.jsx)(t.code,{children:"\u30c0\u30d6\u30eb"})," value and return it."]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"using-the-slider-value",children:"Using the slider value"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})," we accessed the slider's value directly in the ",(0,s.jsx)(t.code,{children:"getNextAudioBlock()"})," function. Since the conversion from ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," to linear gain involves some potentially CPU-intensive arithmetic, it would be wise to avoid performing the conversion too often, especially on the audio thread. In the demo project for this tutorial we store a ",(0,s.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," member ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," in the ",(0,s.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class and update this value when the slider changes using a listener."]}),"\n",(0,s.jsxs)(t.p,{children:["We initialise the ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," member to zero in the constructor and convert this to ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," using the ",(0,s.jsx)(t.a,{href:"classDecibels.html#a2a2c7152fe5560836cd81e6d167da537",title:"Converts a gain level into a dBFS value.",children:"\u30c7\u30b7\u30d9\u30eb::gainToDecibels()"})," function to give the slider its initial position (using the ",(0,s.jsx)(t.a,{href:"classSlider.html#a430a5c4e56b39dd622f5800f787e0822",title:"Changes the slider's current value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::setValue()"})," function) like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"MainContentComponent()\n    {\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'decibelSlider.setValue (juce::Decibels::gainToDecibels (level))\uff1b\n        decibelLabel.setText ("Noise Level in dB", juce::dontSendNotification)\uff1b\n'})}),"\n",(0,s.jsx)(t.h2,{id:"converting-decibels-to-linear-gain",children:"Converting decibels to linear gain"}),"\n",(0,s.jsxs)(t.p,{children:["In our lambda function of our ",(0,s.jsx)(t.a,{href:"classSlider.html#a680d007f6a824a28a60aa05b4045e794",title:"You can assign a lambda to this callback object to have it called when the slider value is changed.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::onValueChange"})," helper object we perform the conversion from the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," scale used by the slider to the linear gain value we need for audio processing:"]}),"\n",(0,s.jsxs)(t.p,{children:["This function will be called when we first set the slider's value using the ",(0,s.jsx)(t.a,{href:"classSlider.html#a430a5c4e56b39dd622f5800f787e0822",title:"Changes the slider's current value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::setValue()"})," function in our constructor. This will call the lambda function assigned to the ",(0,s.jsx)(t.a,{href:"classSlider.html#a680d007f6a824a28a60aa05b4045e794",title:"You can assign a lambda to this callback object to have it called when the slider value is changed.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc::onValueChange"})," helper object when the value changes and our ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," member will be set correctly."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Add another ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classLabel",title:"A component that displays a text string, and can optionally become a text editor when clicked.",children:"\u30e9\u30d9\u30eb"})," object to the ",(0,s.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class that displays the linear gain value."]}),"\n",(0,s.jsxs)(t.li,{children:["Add another ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"\u30b9\u30e9\u30a4\u30c0\u30fc"})," object to the ",(0,s.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class that displays linear gain value allowing the user to view and specify the noise level using either slider. Both sliders should update correctly when either slider is moved. (See ",(0,s.jsx)(t.a,{href:"../tutorial_slider_values/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9"})," for a simple of example of converting between different units.)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"processing-the-audio",children:"Processing the audio"}),"\n",(0,s.jsxs)(t.p,{children:["In our ",(0,s.jsx)(t.code,{children:"MainContentComponent::getNextAudioBlock()"})," we process the audio:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        auto currentLevel = level\uff1b\n        auto levelScale = currentLevel * 2.0f\uff1b\n \n        for (auto channel = 0; channel < bufferToFill.buffer->getNumChannels(); ++channel)\n        {\n            auto* buffer = bufferToFill.buffer->getWritePointer (channel, bufferToFill.startSample)\uff1b\n \n            for (auto sample = 0; sample < bufferToFill.numSamples; ++sample)\n                buffer[sample] = random.nextFloat() * levelScale - currentLevel\uff1b\n        }\n    }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that this is almost identical to the ",(0,s.jsx)(t.code,{children:"getNextAudioBlock()"})," function from ",(0,s.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})," ",(0,s.jsx)(t.em,{children:"\u305f\u3060\u3057"})," that we just take a function-local copy of the ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," value then calculate our ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb\u30b9\u30b1\u30fc\u30eb"})," value as before."]}),"\n",(0,s.jsx)(t.h2,{id:"issues-with-this-approach",children:"Issues with this approach"}),"\n",(0,s.jsxs)(t.p,{children:["One issue with this approach is that the ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," variable might change its value abruptly during the execution of the audio thread (in this case, in between two calls to ",(0,s.jsx)(t.code,{children:"\u30b2\u30c3\u30c8\u30cd\u30af\u30b9\u30c8\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30ed\u30c3\u30af"}),"). Such changes will typically introduce audio artefacts such as an audible crackling. To avoid this, in a real-world synthesiser we would want a ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," value that changes smoothly. Techniques to accomplish this are explored in other tutorials (see ",(0,s.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Another issue is related to thread safety. Writing to a member variable like ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb"})," in one thread (the GUI thread) and reading the same value from another thread (the audio thread) is technically undefined behaviour in C++ if no thread synchronisation takes place (either via critical sections or using atomics). These issues are beyond the scope of this tutorial and will be discussed in a future tutorial. In this particular case we don't have to worry about this too much, because on typical architectures (x86, x86_64, ARM) reading and writing a single ",(0,s.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," is an atomic operation: the reads and writes cannot be intermingled and are generally safe."]}),"\n",(0,s.jsxs)(t.p,{children:["Thinking further, it might be tempting to optimise the code further by making ",(0,s.jsx)(t.code,{children:"\u30ec\u30d9\u30eb\u30b9\u30b1\u30fc\u30eb"})," a member variable too (and therefore not calculate it for every call to the ",(0,s.jsx)(t.code,{children:"getNextAudioBlock()"})," function). But then the two member variables would not be updated as a single atomic operation anymore. There are, of course, ways around this as well, but this is beyond the scope of this tutorial."]}),"\n",(0,s.jsx)(t.h1,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.p,{children:["The code presented in the demo project for this tutorial assumes that we want to treat a value of -100 dB or lower as -INF dB (that is a linear gain value of zero). This value of -100 dB is the default value used by the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class but you can override this in its calculations. This is achieved by providing an additional argument to each of the functions in the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class specifying which value should be treated as -INF dB. For example, to use -96 dB (and below) as -INF dB when updating our slider value in the ",(0,s.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor we could do this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"decibelSlider.setValue(juce::Decibels::gainToDecibels(\u30ec\u30d9\u30eb, -96.0f))\uff1b\n"})}),"\n",(0,s.jsxs)(t.p,{children:["But of course we need to ensure that all parts of our application use the same value for -INF dB. There is one potential problem with the code for the demo project since we hard-code ",(0,s.jsx)(t.code,{children:"-100.0"})," in our ",(0,s.jsx)(t.code,{children:"\u30c7\u30b7\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc::getValueFromText()"})," function. If the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class changes its default value (for some reason) then our code would break. Unfortunately, this default value is a private member of the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class, so we can't ask the ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class for its default value. Instead, we would need to specify our own default value and use this throughout."]}),"\n",(0,s.jsxs)(t.p,{children:["Modify the demo project to specify your own default value for -INF as -96 dB. You should need to update both the ",(0,s.jsx)(t.code,{children:"\u30c7\u30b7\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc"})," class and the ",(0,s.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class."]}),"\n",(0,s.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u7d39\u4ecb\u3057\u305f\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.juce.com/master/classDecibels",title:"This class contains some helpful static methods for dealing with decibel values.",children:"\u30c7\u30b7\u30d9\u30eb"})," class."]}),"\n",(0,s.jsxs)(t.li,{children:["Converting back and forth between the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," scale and linear gain."]}),"\n",(0,s.jsxs)(t.li,{children:["Creating a custom slider for displaying values in the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decibel",children:"\u30c7\u30b7\u30d9\u30eb"})," scale."]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_slider_values/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b9\u30e9\u30a4\u30c0\u30fc\u30af\u30e9\u30b9"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_simple_synth_noise/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30fb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_synth_using_midi_input/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebMIDI\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../tutorial_wavetable_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30b7\u30f3\u30bb\u30b7\u30b9"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3449:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(4848);function n(e){let{src:t,caption:i,alt:n,width:l,height:a}=e;return(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:t,alt:n||i,width:l,height:a}),(0,s.jsx)("figcaption",{children:(0,s.jsx)("b",{children:i})})]})}},6378:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(4848);function n(e){let{path:t}=e;return(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(6540);const n={},l=s.createContext(n);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);