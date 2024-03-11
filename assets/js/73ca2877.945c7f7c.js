"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[6865],{8238:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=n(4848),a=n(8453),i=n(3449),s=n(6378);const o={title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8ffd\u52a0",sidebar_position:1,tags:["\u30d3\u30ae\u30ca\u30fc"]},l="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8ffd\u52a0",c={id:"plugins/tutorial_audio_parameter",title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8ffd\u52a0",description:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8ffd\u52a0\u3057\u3066\u3001\u30c7\u30b8\u30bf\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ef\u30fc\u30af\u30b9\u30c6\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3068\u30aa\u30fc\u30c8\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002",source:"@site/docs/plugins/tutorial_audio_parameter.mdx",sourceDirName:"plugins",slug:"/plugins/tutorial_audio_parameter",permalink:"/juce-tutorial-ja/plugins/tutorial_audio_parameter",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/plugins/tutorial_audio_parameter.mdx",tags:[{label:"\u30d3\u30ae\u30ca\u30fc",permalink:"/juce-tutorial-ja/tags/\u30d3\u30ae\u30ca\u30fc"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8ffd\u52a0",sidebar_position:1,tags:["\u30d3\u30ae\u30ca\u30fc"]},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/juce-tutorial-ja/category/plugins"},next:{title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u4fdd\u5b58\u3068\u8aad\u307f\u8fbc\u307f",permalink:"/juce-tutorial-ja/plugins/tutorial_audio_processor_value_tree_state"}},d={},h=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Configuring the parameters",id:"configuring-the-parameters",level:2},{value:"Performing the gain processing",id:"performing-the-gain-processing",level:2},{value:"Storing and retrieving parameters",id:"storing-and-retrieving-parameters",level:2},{value:"Smoothing gain changes",id:"smoothing-gain-changes",level:2},{value:"Using XML to store the processor&#39;s state",id:"using-xml-to-store-the-processors-state",level:2},{value:"Adding a boolean parameter",id:"adding-a-boolean-parameter",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30e9\u30b0\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8ffd\u52a0",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a\u30d7\u30e9\u30b0\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8ffd\u52a0"}),"\n",(0,t.jsx)(s.A,{path:"tutorial_audio_parameter"}),"\n",(0,t.jsx)(r.p,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8ffd\u52a0\u3057\u3066\u3001\u30c7\u30b8\u30bf\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ef\u30fc\u30af\u30b9\u30c6\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3068\u30aa\u30fc\u30c8\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\n\u30aa\u30fc\u30c7\u30a3\u30aa\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u306b\u4f7f\u7528\u3057\u3001\u305d\u306e\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u30ec\u30d9\u30eb\uff1a\u30d3\u30ae\u30ca\u30fc"}),"\n",(0,t.jsx)(r.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,t.jsxs)(r.p,{children:["\u30af\u30e9\u30b9\uff1a\n",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/tutorial_audio_parameter.html",children:"AudioParameterFloat"}),",\n",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterBool.html",children:"AudioParameterBool"}),",\n",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classGenericAudioProcessorEditor.html",children:"GenericAudioProcessorEditor"})]}),"\n",(0,t.jsx)(r.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,t.jsxs)(r.p,{children:["Download the demo project for this tutorial here: ",(0,t.jsx)(r.a,{href:"/tutorials/PIPs/AudioParameterTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,t.jsx)(r.a,{href:"/tutorials/ZIPs/AudioParameterTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,t.jsxs)(r.p,{children:["If you need help with this step, see ",(0,t.jsx)(r.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["You should also know how to build an audio plug-in using JUCE and load this into your preferred audio host (also known as a Digital Audio Workstation \u2014 DAW). See ",(0,t.jsx)(r.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})," for an introduction."]}),"\n",(0,t.jsx)(r.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,t.jsxs)(r.p,{children:["The demo project is based on the ",(0,t.jsx)(r.em,{children:"\u30b2\u30a4\u30f3\u30d7\u30e9\u30b0\u30a4\u30f3"})," project in the ",(0,t.jsx)(r.code,{children:"JUCE/examples/Plugins"})," directory. This plug-in simply changes the gain of an incoming signal using a single parameter."]}),"\n",(0,t.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_audio_parameter_screenshot1.png",caption:"The gain plug-in UI in Logic Pro X"}),"\n",(0,t.jsx)(r.h1,{id:"the-gain-processor",children:"The gain processor"}),"\n",(0,t.jsxs)(r.p,{children:["Most of the code in the ",(0,t.jsx)(r.code,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc"})," class is the same as that generated by the Projucer when you use the ",(0,t.jsx)(r.strong,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3"})," project template. For simplicity, we have bundled the processor code into a single ",(0,t.jsx)(r.code,{children:".h"})," file rather than being split across a ",(0,t.jsx)(r.code,{children:".cpp"})," and an ",(0,t.jsx)(r.code,{children:".h"})," file."]}),"\n",(0,t.jsx)(r.h2,{id:"configuring-the-parameters",children:"Configuring the parameters"}),"\n",(0,t.jsx)(r.p,{children:"\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306b\u306f\u3001\u5404\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u30fb\u30e1\u30f3\u30d0\u30fc\u3092\u683c\u7d0d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u79c1\u305f\u3061\u306e\u5834\u5408\u306f1\u3064\u3060\u3051\u3067\u3059\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\uff1a\n    //==============================================================================\n    juce::AudioParameterFloat* gain\uff1b\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (TutorialProcessor)\n};\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u30d7\u30ed\u30bb\u30c3\u30b5\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5fc5\u8981\u3068\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306b\u5272\u308a\u5f53\u3066\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u306e\u5358\u7d14\u306a\u4f8b\u3067\u306f\u3001\u8a2d\u5b9a\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306f1\u3064\u3060\u3051\u3067\u3059\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5()\n    {\n        addParameter (gain = new juce::AudioParameterFloat ("gain", // parameterID\n                                                            "Gain", // \u30d1\u30e9\u30e1\u30fc\u30bf\u540d\n                                                            0.0f, // \u6700\u5c0f\u5024\n                                                            1.0f, // \u6700\u5927\u5024\n                                                            0.5f)); // \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\n    }\n'})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["The base class (",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioProcessor",title:"Base class for audio processing classes or plugins.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ed\u30bb\u30c3\u30b5"}),") takes ownership of the parameter objects, which is why we use raw pointers to store our parameters in the derived processor class. This is safe because you know for certain that the base class will be deconstructed after our derived class. In addition to this, you can also assume that the processor's editor component will be deleted before the processor object."]})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"\u30d1\u30e9\u30e1\u30fc\u30bfID"})," should be a unique identifier for this parameter. Think of this like a variable name; it can contain alphanumeric characters and underscores, but no spaces. The ",(0,t.jsx)(r.em,{children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u540d"})," is the name that will be displayed on the screen."]}),"\n","\n","\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'addParameter (gain = new juce::AudioParameterFloat ("gain",                                      // parameter ID\n                                                    "Gain",                                      // parameter name\n                                                    juce::NormalisableRange(0.0f, 1.0f), // \u30d1\u30e9\u30e1\u30fc\u30bf\u7bc4\u56f2\n                                                    0.5f)); // \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\n'})}),"\n","\n","\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterFloat",title:"A subclass of AudioProcessorParameter that provides an easy way to create a parameter which maps onto...",children:"AudioParameterFloat"})," class also has additional optional lambda functions that can be specified to convert the value to text and vice-versa. This is especially useful if you want to display the parameter's value as a string or allow the user to type in the value."]})}),"\n",(0,t.jsx)(r.h2,{id:"performing-the-gain-processing",children:"Performing the gain processing"}),"\n",(0,t.jsxs)(r.p,{children:["Once the parameters have been created and added, your plug-in can interact with these parameter objects. In our case we simply retrieve the ",(0,t.jsx)(r.em,{children:"\u30b2\u30a4\u30f3"})," value in the ",(0,t.jsx)(r.code,{children:"TutorialProcessor::processBlock()"})," function:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"void processBlock (juce::AudioSampleBuffer& buffer, juce::MidiBuffer&) override\n    {\n        buffer.applyGain\uff08*\u30b2\u30a4\u30f3\uff09\uff1b\n    }\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"classAudioBuffer.html#a9ffc61d339e455d4bddc7cf055a63ee3",title:"Applies a gain multiple to a region of one channel.",children:"AudioSampleBuffer::applyGain()"})," function applies our gain value to all samples across all channels in the buffer."]}),"\n",(0,t.jsxs)(r.p,{children:["This illustrates the idiom that you should use when using the audio parameter classes: dereference the pointer to the parameter to obtain the parameter value. In this case, because we are using an ",(0,t.jsx)(r.code,{children:'[AudioParameterFloat](https://docs.juce.com/master/classAudioParameterFloat "A subclass of AudioProcessorParameter that provides an easy way to create a parameter which maps onto...")'}),", we get a float."]}),"\n",(0,t.jsxs)(r.p,{children:["The other ",(0,t.jsx)(r.code,{children:"AudioParameter*XXX*"})," classes work in a similar way:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterInt",title:"Provides a class of AudioProcessorParameter that can be used as an integer value with a given range.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d1\u30e9\u30e1\u30fc\u30bfInt"})," class works with integers."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterBool",title:"Provides a class of AudioProcessorParameter that can be used as a boolean value.",children:"AudioParameterBool"})," class works with boolean values."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterChoice",title:"Provides a class of AudioProcessorParameter that can be used to select an indexed,...",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d1\u30e9\u30e1\u30fc\u30bf\u9078\u629e"})," class works with arrays of strings representing text-based options."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"storing-and-retrieving-parameters",children:"Storing and retrieving parameters"}),"\n",(0,t.jsxs)(r.p,{children:["In addition to providing routines for processing audio you also need to provide methods for storing and retrieving the ",(0,t.jsx)(r.em,{children:"\u5168\u4f53"})," state of your plug-in into a block of memory. This should include the current values of all of your parameters, but it can also include other state information if needed (for example, if your plug-in deals with files, it might store the file paths)."]}),"\n",(0,t.jsx)(r.p,{children:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b2\u30a4\u30f3\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u4fdd\u5b58\u3059\u308b\u3082\u306e\u306f\u305f\u3060\u3072\u3068\u3064\u3001\u30b2\u30a4\u30f3\u5024\u305d\u306e\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u3092\u4fdd\u5b58\u3059\u308b\u306e\u306f\u3001\u6d6e\u52d5\u5c0f\u6570\u70b9\u5024\u3092\u30d0\u30a4\u30ca\u30ea\u5f62\u5f0f\u3067\u66f8\u304d\u8fbc\u3080\u306e\u3068\u540c\u3058\u304f\u3089\u3044\u7c21\u5358\u3060\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"void getStateInformation (juce::MemoryBlock& destData) override\n    {\n        juce::MemoryOutputStream (destData, true).writeFloat (*gain)\uff1b\n    }\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"classAudioProcessor.html#a5d79591b367a7c0516e4ef4d1d6c32b2",title:"The host will call this method when it wants to save the processor's internal state.",children:"AudioProcessor::getStateInformation()"})," callback is called when plug-in needs to have its state stored. For example, this happens when the user saves their DAW project or saves a preset (in some DAWs). We can put anything we like into the ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classMemoryBlock",title:"A class to hold a resizable block of raw data.",children:"\u30e1\u30e2\u30ea\u30fc\u30d6\u30ed\u30c3\u30af"})," object that is passed to this function."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"classAudioProcessor.html#a6154837fea67c594a9b35c487894df27",title:"This must restore the processor's state from a block of data previously created using getStateInforma...",children:"AudioProcessor::setStateInformation()"})," function needs to do the opposite: it should read data from a memory location and restore the state of our plug-in:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    void setStateInformation (const void* data, int sizeInBytes) override\n    {\n        *gain = juce::MemoryInputStream (data, static_cast(sizeInBytes), false).readFloat()\uff1b\n    }\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u30b2\u30a4\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30d0\u30a4\u30ca\u30ea\u5f62\u5f0f\u3067\u306f\u306a\u304f\u3001\u6587\u5b57\u5217\u3068\u3057\u3066\u4fdd\u5b58\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(r.h1,{id:"improving-the-gain-processor",children:"Improving the gain processor"}),"\n",(0,t.jsx)(r.p,{children:"\u3053\u306e\u30b2\u30a4\u30f3\u30fb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306b\u306f\u3044\u304f\u3064\u304b\u6539\u5584\u70b9\u304c\u3042\u308b\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u30b2\u30a4\u30f3\u3092\u5909\u3048\u308b\u3068\u4fe1\u53f7\u306b\u4e0d\u9023\u7d9a\u6027\u304c\u751f\u3058\u3001\u30b2\u30a4\u30f3\u3092\u7d20\u65e9\u304f\u5909\u8abf\u3059\u308b\u3068\u5c0f\u3055\u306a\u30af\u30ea\u30c3\u30af\u97f3\u3068\u3057\u3066\u805e\u3053\u3048\u308b\u3002"}),"\n",(0,t.jsx)(r.li,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u72b6\u614b\u3092\u4fdd\u5b58\u3059\u308b\u306b\u306f\u3001XML\u3092\u4f7f\u3046\u3068\u4fbf\u5229\u3067\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"smoothing-gain-changes",children:"Smoothing gain changes"}),"\n",(0,t.jsxs)(r.p,{children:["Using the AudioSampleBuffer class we can easily perform ramping gain changes over the whole block size of the buffer. In order to do this we need to store the value of the gain parameter from the ",(0,t.jsx)(r.em,{children:"\u524d"})," audio callback. First, add a member variable to the ",(0,t.jsx)(r.code,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc"})," class [1]:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\uff1a\n    //==============================================================================\n    juce::AudioParameterFloat* gain\uff1b\n    float previousGain; // [1\uff3d\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (TutorialProcessor)\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Then, ensure that this value is initialised in the ",(0,t.jsx)(r.code,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5::preparePlay()"})," function:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"void prepareToPlay (double, int) override\n    {\n        previousGain = *gain\uff1b\n    }\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Finally, modify the ",(0,t.jsx)(r.code,{children:"TutorialProcessor::processBlock()"})," function to perform the gain ramp:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"void processBlock (juce::AudioSampleBuffer& buffer, juce::MidiBuffer&) override\n    {\n        auto currentGain = gain->get()\uff1b\n \n        if (juce::approximatelyEqual (currentGain, previousGain))\n        {\n            buffer.applyGain (currentGain)\uff1b\n        }\n        else\n        {\n            buffer.applyGainRamp (0, buffer.getNumSamples(), previousGain, currentGain)\uff1b\n            previousGain = currentGain\uff1b\n        }\n    }\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Here you can see that if the value hasn't changed, then we simply apply a constant gain. If the value has changed, then we apply the gain ramp, then update the ",(0,t.jsx)(r.code,{children:"\u524d\u30b2\u30a4\u30f3"})," value for next time."]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["The source code for this modified version of the plug-in can be found in the ",(0,t.jsx)(r.code,{children:"AudioParameterTutorial_02.h"})," file of the demo project."]})}),"\n",(0,t.jsx)(r.p,{children:"\u5e73\u6ed1\u5316\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5909\u66f4\u3057\u3001\u51e6\u7406\u30d6\u30ed\u30c3\u30af\u30b5\u30a4\u30ba\u306b\u4f9d\u5b58\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"using-xml-to-store-the-processors-state",children:"Using XML to store the processor's state"}),"\n",(0,t.jsxs)(r.p,{children:["Storing the plug-in state in a binary format results in using less memory and storage space for your plug-in's state. However, it is often more convient to use a format such as XML or ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classJSON",title:"Contains static methods for converting JSON-formatted text to and from var objects.",children:"JSON"}),". This makes debugging easier and it also simplifies making the stored state information compatible with future versions of your plug-in. In particular, XML makes it easy to:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u60c5\u5831\u30d6\u30ed\u30c3\u30af\u306b\u306a\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306b\u8a2d\u5b9a\u3059\u308b\u3002"}),"\n",(0,t.jsx)(r.li,{children:"\u60c5\u5831\u30d6\u30ed\u30c3\u30af\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u542b\u3081\u308b\u3053\u3068\u3067\u3001\u7570\u306a\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u524d\u65b9\u4e92\u63db\u6027\u3068\u5f8c\u65b9\u4e92\u63db\u6027\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u30b2\u30a4\u30f3\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u72b6\u614b\u3092XML\u306b\u4fdd\u5b58\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'    void getStateInformation (juce::MemoryBlock& destData) override\n    {\n        std::unique_ptrxml (new juce::XmlElement ("ParamTutorial"))\uff1b\n        xml->setAttribute ("gain", (double) *gain)\uff1b\n        copyXmlToBinary (*xml, destData)\uff1b\n    }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"classAudioProcessor.html#a6d0c1c945bebbc967d187c0f08b42c4b",title:"Helper function that just converts an xml element into a binary blob.",children:"AudioProcessor::copyXmlToBinary()"})," function is a convenient helper function to convert XML to a binary blob. To retrieve the state we can do the opposite:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'    void setStateInformation (const void* data, int sizeInBytes) override\n    {\n        std::unique_ptrxmlState (getXmlFromBinary (data, sizeInBytes))\uff1b\n \n        if (xmlState.get() != nullptr)\n            if (xmlState->hasTagName ("ParamTutorial"))\n                *gain = (float) xmlState->getDoubleAttribute ("gain", 1.0)\uff1b\n    }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Where the ",(0,t.jsx)(r.a,{href:"classAudioProcessor.html#a80c616e54758a0a411d27d6d76df956c",title:"Retrieves an XML element that was stored as binary with the copyXmlToBinary() method.",children:"AudioProcessor::getXmlFromBinary()"})," function converts binary data\u2014created with ",(0,t.jsx)(r.a,{href:"classAudioProcessor.html#a6d0c1c945bebbc967d187c0f08b42c4b",title:"Helper function that just converts an xml element into a binary blob.",children:"AudioProcessor::copyXmlToBinary()"})," function\u2014back to XML."]}),"\n",(0,t.jsxs)(r.p,{children:["Importantly, you can see the error checking going on here. If the information block ",(0,t.jsx)(r.strong,{children:"\u3067\u306f\u306a\u3044"})," XML then the function will do nothing. It also checks for the ",(0,t.jsx)(r.em,{children:"\u30bf\u30b0\u540d"}),' "ParamTutorial" and only proceeds if this name is found. The gain value will also default to 1.0 if the gain parameter isn\'t found. Adding version information is as simple as adding another attribute for this purpose. Then more error checking would allow you to handle different versions of the state information.']}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["The source code for this modified version of the plug-in can be found in the ",(0,t.jsx)(r.code,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d1\u30e9\u30e1\u30fc\u30bf\u30fb\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb_03.h"})," file of the demo project."]})}),"\n",(0,t.jsx)(r.h1,{id:"adding-a-phase-invert-parameter",children:"Adding a phase invert parameter"}),"\n",(0,t.jsxs)(r.p,{children:["Let's add a ",(0,t.jsx)(r.em,{children:"\u4f4d\u76f8\u53cd\u8ee2"})," parameter to our gain plug-in!"]}),"\n",(0,t.jsx)(r.h2,{id:"adding-a-boolean-parameter",children:"Adding a boolean parameter"}),"\n",(0,t.jsxs)(r.p,{children:["First, add an AudioParameterBool* member to the ",(0,t.jsx)(r.code,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc"})," class [2]:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\uff1a\n    //==============================================================================\n    juce::AudioParameterFloat* gain\uff1b\n    juce::AudioParameterBool* invertPhase; // [2].\n \n    float previousGain\uff1b\n \n    //==============================================================================\n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (TutorialProcessor)\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Then we need to allocate and add the parameter in the ",(0,t.jsx)(r.code,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc"})," constructor [3]:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5()\n    {\n        addParameter (gain = new juce::AudioParameterFloat ("gain", "Gain", 0.0f, 1.0f, 0.5f))\uff1b\n        addParameter (invertPhase = new juce::AudioParameterBool ("invertPhase", "Invert Phase", false)); // [3].\n    }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Of course a boolean parameter doesn't have a specifiable range, only a default value. We'll need to update our ",(0,t.jsx)(r.code,{children:"TutorialProcessor::getStateInformation()"})," function [4]:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'    void getStateInformation (juce::MemoryBlock& destData) override\n    {\n        std::unique_ptrxml (new juce::XmlElement ("ParamTutorial"))\uff1b\n        xml->setAttribute ("gain", (double) *gain)\uff1b\n        xml->setAttribute ("invertPhase", *invertPhase); // [4].\n        copyXmlToBinary (*xml, destData)\uff1b\n    }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["And the ",(0,t.jsx)(r.code,{children:"TutorialProcessor::setStateInformation()"})," function [5]:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'    void setStateInformation (const void* data, int sizeInBytes) override\n    {\n        std::unique_ptrxmlState (getXmlFromBinary (data, sizeInBytes))\uff1b\n \n        if (xmlState.get() != nullptr)\n        {\n            if (xmlState->hasTagName ("ParamTutorial"))\n            {\n                *gain = (float) xmlState->getDoubleAttribute ("gain", 1.0)\uff1b\n                *invertPhase = xmlState->getBoolAttribute ("invertPhase", false); // [5].\n            }\n        }\n    }\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"void processBlock (juce::AudioSampleBuffer& buffer, juce::MidiBuffer&) override\n    {\n        auto phase = *invertPhase ?-1.0f : 1.0f; // [6].\n        auto currentGain = *gain * phase; // [7].\n \n        if (juce::approximatelyEqual (currentGain, previousGain))\n        {\n            buffer.applyGain (currentGain)\uff1b\n        }\n        else\n        {\n            buffer.applyGainRamp (0, buffer.getNumSamples(), previousGain, currentGain)\uff1b\n            previousGain = currentGain\uff1b\n        }\n    }\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u3053\u3053\u3067\u6ce8\u76ee\u3057\u3066\u307b\u3057\u3044\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["[6]: We choose either +1 or -1 depending on the state of the ",(0,t.jsx)(r.code,{children:"\u9006\u4f4d\u76f8"})," parameter."]}),"\n",(0,t.jsxs)(r.li,{children:["[7]: We multiply this by the value of the ",(0,t.jsx)(r.code,{children:"\u30b2\u30a4\u30f3"})," parameter."]}),"\n",(0,t.jsx)(r.li,{children:"\u3053\u306e\u95a2\u6570\u306e\u6b8b\u308a\u306e\u30b3\u30fc\u30c9\u306f\u3001\u5e73\u6ed1\u5316\u6280\u8853\u3082\u542b\u3081\u3066\u540c\u3058\u3067\u3042\u308b\u3002"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Finally, the ",(0,t.jsx)(r.code,{children:"\u524d\u30b2\u30a4\u30f3"})," value needs to be initialised in the ",(0,t.jsx)(r.code,{children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30bb\u30c3\u30b5::prepareToPlay()"})," function:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"void prepareToPlay (double, int) override\n    {\n        auto phase = *invertPhase ?-1.0f : 1.0f\uff1b\n        previousGain = *gain * phase\uff1b\n    }\n"})}),"\n",(0,t.jsx)(r.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsxs)(r.p,{children:["In this tutorial we have learned about using audio parameters within the ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioProcessor",title:"Base class for audio processing classes or plugins.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ed\u30bb\u30c3\u30b5"})," class. In particular we have explored:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Creating ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterFloat",title:"A subclass of AudioProcessorParameter that provides an easy way to create a parameter which maps onto...",children:"AudioParameterFloat"})," objects to represent our processor's variable parameters."]}),"\n",(0,t.jsxs)(r.li,{children:["Using the values from ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterFloat",title:"A subclass of AudioProcessorParameter that provides an easy way to create a parameter which maps onto...",children:"AudioParameterFloat"})," objects to control audio processing."]}),"\n",(0,t.jsx)(r.li,{children:"\u30d7\u30ed\u30bb\u30c3\u30b5\u306e\u72b6\u614b\u60c5\u5831\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fb\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3057\u3001\u53d6\u308a\u51fa\u3059\u3002"}),"\n",(0,t.jsxs)(r.li,{children:["Using ",(0,t.jsx)(r.a,{href:"https://docs.juce.com/master/classAudioParameterBool",title:"Provides a class of AudioProcessorParameter that can be used as a boolean value.",children:"AudioParameterBool"})," objects to represent parameters that are in either an on or off state."]}),"\n"]}),"\n",(0,t.jsx)(r.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"../tutorial_create_projucer_basic_plugin/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"../tutorial_audio_bus_layouts/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"../tutorial_audio_processor_value_tree_state/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30e9\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u4fdd\u5b58\u3068\u8aad\u307f\u8fbc\u307f"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"../tutorial_audio_processor_graph/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30ab\u30b9\u30b1\u30fc\u30c9\u30d7\u30e9\u30b0\u30a4\u30f3\u30a8\u30d5\u30a7\u30af\u30c8"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},3449:(e,r,n)=>{n.d(r,{A:()=>a});var t=n(4848);function a(e){let{src:r,caption:n,alt:a,width:i,height:s}=e;return(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:r,alt:a||n,width:i,height:s}),(0,t.jsx)("figcaption",{children:(0,t.jsx)("b",{children:n})})]})}},6378:(e,r,n)=>{n.d(r,{A:()=>a});var t=n(4848);function a(e){let{path:r}=e;return(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:`https://docs.juce.com/master/${r}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(6540);const a={},i=t.createContext(a);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);