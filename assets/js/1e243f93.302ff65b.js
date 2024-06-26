"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[3860],{183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(4848),s=n(8453),o=n(3449);n(6378);const a={title:"\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u767a\u751f\u5668\u3092\u4f5c\u308b",sidebar_position:1},r="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30fb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b",l={id:"synth/tutorial_simple_synth_noise",title:"\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u767a\u751f\u5668\u3092\u4f5c\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u7c21\u5358\u306a\u5408\u6210\u3068\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u3001JUCE \u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff08\u304a\u3088\u3073\u30d7\u30e9\u30b0\u30a4\u30f3\uff09\u306e\u30b3\u30f3\u30bb\u30d7\u30c8\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306e\u9375\u3068\u306a\u308a\u307e\u3059\u3002",source:"@site/docs/synth/tutorial_simple_synth_noise.mdx",sourceDirName:"synth",slug:"/synth/tutorial_simple_synth_noise",permalink:"/juce-tutorial-ja/synth/tutorial_simple_synth_noise",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/synth/tutorial_simple_synth_noise.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u767a\u751f\u5668\u3092\u4f5c\u308b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Synth",permalink:"/juce-tutorial-ja/category/synth"},next:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",permalink:"/juce-tutorial-ja/synth/tutorial_synth_level_control"}},d={},c=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"The audio application lifecycle",id:"the-audio-application-lifecycle",level:2},{value:"Initialising the audio application",id:"initialising-the-audio-application",level:2},{value:"Generating audio data",id:"generating-audio-data",level:2},{value:"The AudioSampleBuffer class",id:"the-audiosamplebuffer-class",level:2},{value:"Generating white noise using the Random class",id:"generating-white-noise-using-the-random-class",level:2},{value:"Shutting down the audio application",id:"shutting-down-the-audio-application",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30fb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u7c21\u5358\u306a\u5408\u6210\u3068\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u3001JUCE \u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff08\u304a\u3088\u3073\u30d7\u30e9\u30b0\u30a4\u30f3\uff09\u306e\u30b3\u30f3\u30bb\u30d7\u30c8\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306e\u9375\u3068\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u30ec\u30d9\u30eb\uff1a\u4e2d\u7d1a"}),"\n",(0,i.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,i.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioBuffer",title:"A multi-channel buffer containing floating point audio samples.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d0\u30c3\u30d5\u30a1"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})]}),"\n",(0,i.jsx)(t.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,i.jsx)(t.a,{href:"/tutorials/PIPs/SimpleSynthNoiseTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,i.jsx)(t.a,{href:"/tutorials/ZIPs/SimpleSynthNoiseTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,i.jsxs)(t.p,{children:["If you need help with this step, see ",(0,i.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This tutorial assumes that you are familiar with the basic principles of digital audio. In particular, you should know how audio signals are represented using sampling. You should also be familiar with the idea of the ",(0,i.jsx)(t.em,{children:"\u30b5\u30f3\u30d7\u30eb\u30ec\u30fc\u30c8"})," in this context (which you may know as ",(0,i.jsx)(t.em,{children:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u30ec\u30fc\u30c8"}),", ",(0,i.jsx)(t.em,{children:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570"}),", or other similar terms)."]}),"\n",(0,i.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,i.jsxs)(t.p,{children:["The demo project was created using ",(0,i.jsx)(t.a,{href:"https://juce.com/projucer",children:"\u30d7\u30ed\u30b8\u30e5\u30fc\u30b5\u30fc"})," ",(0,i.jsx)(t.strong,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," template."]}),"\n",(0,i.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_simple_synth_noise_screenshot1.png",caption:"The Audio Application template shown highlighted within The Projucer."}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001JUCE\u3067\u72ec\u81ea\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u51fa\u767a\u70b9\u3068\u3057\u3066\u5f79\u7acb\u3061\u307e\u3059\u3002\u3053\u306e\u30c7\u30e2\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u3092\u5408\u6210\u3057\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u30c7\u30d0\u30a4\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304b\u3089\u518d\u751f\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h1,{id:"the-audio-application-template",children:"The Audio Application template"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u306e\u307f\u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3068\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u30c7\u30fc\u30bf\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u306b\u3064\u3044\u3066\u306f\u3001\u4ed6\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u8aac\u660e\u3057\u307e\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class inherits from the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class rather than the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"juce_audio_utils"})," module is added to the project, in addition to the other audio-related modules that are added to projects by default."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Audio Application \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001\u3053\u3053\u3067\u63d0\u4f9b\u3059\u308b\u4f8b\u306e\u3088\u3046\u306a\u5358\u7d14\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u3088\u308a\u8907\u96d1\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u57fa\u672c\u7684\u306b\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\u30c7\u30d0\u30a4\u30b9\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3068\u76f4\u63a5\u5bfe\u8a71\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3082\u62e1\u5f35\u53ef\u80fd\u3067\u3059\u3002JUCE\u306b\u3088\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210\u306b\u3064\u3044\u3066\u306f\u3001\u4ed6\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"the-audio-application-lifecycle",children:"The audio application lifecycle"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class is an abstract base class, it has three ",(0,i.jsx)(t.a,{href:"http://www.learncpp.com/cpp-tutorial/126-pure-virtual-functions-abstract-base-classes-and-interface-classes/",children:"\u30d4\u30e5\u30a2\u30d0\u30fc\u30c1\u30e3\u30eb"})," functions that represent the lifecycle of our audio application that we ",(0,i.jsx)(t.em,{children:"\u30de\u30b9\u30c8"})," implement in our derived class:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a70634aa3ffaf6e7ff0d233e5933a063d",title:"Tells the source to prepare for playing.",children:"AudioAppComponent::prepareToPlay()"}),": This is called just before audio processing starts."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a588d9b990fc308774215548959e0fc50",title:"Allows the source to release anything it no longer needs after playback has stopped.",children:"AudioAppComponent::releaseResources()"}),": This is called when audio processing has finished."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#aec5e36e694a5bd2edae903d1079166b1",title:"Called repeatedly to fetch subsequent blocks of audio data.",children:"AudioAppComponent::getNextAudioBlock()"}),": This is called each time the audio hardware needs a new block of audio data."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Of these three, the most important is perhaps ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#aec5e36e694a5bd2edae903d1079166b1",title:"Called repeatedly to fetch subsequent blocks of audio data.",children:"AudioAppComponent::getNextAudioBlock()"}),", since this is where you will either generate or process audio in your JUCE audio application. To understand how this works, we need to know a little about how modern computers generate audio. The audio hardware needs to generate a certain number of samples per channel for each second of audio. The CD-quality sample rate is 44.1kHz, which means there needs to be 44100 samples per second per channel sent to the audio hardware for playback. Rather than being passed to the audio hardware a single sample at a time, the samples are passed in buffers \u2014 or blocks \u2014 containing a certain number of samples. For example, at 44.1kHz and a block size of 441 our ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#aec5e36e694a5bd2edae903d1079166b1",title:"Called repeatedly to fetch subsequent blocks of audio data.",children:"AudioAppComponent::getNextAudioBlock()"})," function would be called 100 times per second."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The buffer size of 441 samples, above, is used to keep the arithmetic simple for the purposes of explanation. In practice, a buffer size of 441 would be unusual. Hardware buffer sizes would almost certainly be a even number and would tend to be powers-of-two (256, 512, 1024, and so on). It is important that your application is prepared to deal with ",(0,i.jsx)(t.em,{children:"\u3044\u305a\u308c\u3082"})," buffer size. For more information on the settings for sample rate and buffer sizes, see ",(0,i.jsx)(t.a,{href:"../tutorial_audio_device_manager/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioDeviceManager\u30af\u30e9\u30b9"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["Essentially, our ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#aec5e36e694a5bd2edae903d1079166b1",title:"Called repeatedly to fetch subsequent blocks of audio data.",children:"AudioAppComponent::getNextAudioBlock()"})," is servicing the ",(0,i.jsx)(t.em,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30b3\u30fc\u30eb\u30d0\u30c3\u30af"})," of the audio hardware. It is important to note that this function will be called from another thread (the ",(0,i.jsx)(t.em,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b9\u30ec\u30c3\u30c9"})," in most cases)."]}),"\n",(0,i.jsx)(t.p,{children:"JUCE\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u3055\u3089\u306b2\u3064\u306e\u91cd\u8981\u306a\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002\u4eca\u56de\u306f\u3001\u305d\u308c\u3089\u3092\u5b9f\u88c5\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a1cb6b457848fa80df7efc39cf095d465",title:"A subclass should call this from their constructor, to set up the audio.",children:"AudioAppComponent::setAudioChannels()"}),": We must call this to register the number of input and output channels we need. Typically, we do this in our constructor. In turn, this function triggers the start of audio processing in our application."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a40f1e657f048d02c5d065de566a84d92",title:"Shuts down the audio device and clears the audio source.",children:"AudioAppComponent::shutdownAudio()"}),": We must call this to shutdown the audio system. Typically, we do this in our destructor."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"initialising-the-audio-application",children:"Initialising the audio application"}),"\n",(0,i.jsxs)(t.p,{children:["Let's now explore our simple implementation of a noise generator by examining the life cycle of an audio application in more detail. Our constructor needs to set up the size of the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object (see ",(0,i.jsx)(t.a,{href:"../tutorial_main_component/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e1\u30a4\u30f3\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"). We also need to initialise at least one audio output:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"MainContentComponent()\n    {\n        setSize (800, 600)\uff1b\n        setAudioChannels (0, 2); // \u5165\u529b\u306a\u3057\u3001\u51fa\u529b2\u3064\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["As mentioned above, the call to the ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a1cb6b457848fa80df7efc39cf095d465",title:"A subclass should call this from their constructor, to set up the audio.",children:"AudioAppComponent::setAudioChannels()"})," function triggers the audio system to start up. In particular, it will call the ",(0,i.jsx)(t.code,{children:"prepareToPlay()"})," function:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'void prepareToPlay (int samplesPerBlockExpected, double sampleRate) override\n    {\n        juce::String message\uff1b\n        message << "\u518d\u751f\u6e96\u5099\u4e2d\u3067\u3059\uff1b\n        message << " samplesPerBlockExpected = " << samplesPerBlockExpected << " \\n"\uff1b\n        message << " sampleRate = " << sampleRate\uff1b\n        juce::Logger::getCurrentLogger()->writeToLog (message)\uff1b\n    }\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this case we don't really need to do anything here, but as it is a ",(0,i.jsx)(t.a,{href:"http://www.learncpp.com/cpp-tutorial/126-pure-virtual-functions-abstract-base-classes-and-interface-classes/",children:"\u30d4\u30e5\u30a2\u30d0\u30fc\u30c1\u30e3\u30eb"})," function we ",(0,i.jsx)(t.em,{children:"\u30de\u30b9\u30c8"})," implement at least an empty function. Here we log some useful information that we can gain about the audio system on the target device at this point. The ",(0,i.jsx)(t.code,{children:"\u671f\u5f85\u3055\u308c\u308b\u30b5\u30f3\u30d7\u30eb\u6570"})," argument, as its name suggests, is the size (in samples) of the buffers of audio that we can expect to be asked for each time a buffer of audio is requested in our ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function. This buffer size might vary between callbacks, but it is a good indication. The ",(0,i.jsx)(t.code,{children:"\u30b5\u30f3\u30d7\u30eb\u30ec\u30fc\u30c8"})," argument tells us the current sample rate of the hardware. We would need this if we were doing something that is frequency-dependent, such as synthesising tones (see ",(0,i.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"}),") or using equalisation. We would also need to know the sample rate if we were using delay effects. We don't need this information to generate noise."]}),"\n",(0,i.jsx)(t.h2,{id:"generating-audio-data",children:"Generating audio data"}),"\n",(0,i.jsxs)(t.p,{children:["Soon after this call to our ",(0,i.jsx)(t.code,{children:"prepareToPlay()"})," function the audio thread will begin requesting blocks of audio via the ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#aec5e36e694a5bd2edae903d1079166b1",title:"Called repeatedly to fetch subsequent blocks of audio data.",children:"AudioAppComponent::getNextAudioBlock()"})," function. This function is passed a single ",(0,i.jsx)(t.code,{children:"\u30d0\u30c3\u30d5\u30a1\u30fc\u30c8\u30a5\u30d5\u30a3\u30eb"})," argument that is an ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"})," struct. The ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"})," struct contains a multichannel buffer of audio samples. It also contains two integer values that specify which region of this buffer should be processed on this call. In more detail, the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"})," contains the following members:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1*\u30d0\u30c3\u30d5\u30a1"}),": An AudioSampleBuffer object is a multichannel buffer of audio data that is essentially a multidimensional array of ",(0,i.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," values. When our ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function is called, this buffer contains any audio data from the target device's audio input (if we requested audio input). When our ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function returns, we must have filled the relevant section of the buffer with audio that we want to play."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"int startSample"}),": This is the sample index within the buffer where our ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function should start reading or writing audio."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"int numSamples"}),": This is the number of samples in the buffer that should be read or written."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u5024\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30fc\u30bf\u306f\u3001\u975e\u5e38\u306b\u7c21\u5358\u3067\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u4fe1\u53f7\u306e\u5404\u30b5\u30f3\u30d7\u30eb\u306f\u3001\u516c\u79f0\xb11.0\u306e\u7bc4\u56f2\u306e\u5024\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_simple_synth_noise_graph1.png",caption:"A full scale \xb11.0 sine wave."}),"\n",(0,i.jsxs)(t.p,{children:["At a peak level of \xb11.0 like this the output level will be ",(0,i.jsx)(t.em,{children:"\u3068\u3066\u3082"})," loud. In fact, this is the loudest the audio system will be able to generate without clipping. Typically, we will need to output audio that doesn't exceed this \xb11.0 limit (although it is fine for intermediate stages of processing to go beyond this limit, as long as the final output is lower)."]}),"\n",(0,i.jsx)(t.h2,{id:"the-audiosamplebuffer-class",children:"The AudioSampleBuffer class"}),"\n",(0,i.jsxs)(t.p,{children:["While the AudioSampleBuffer class is (at a very basic level) just a multichannel array of ",(0,i.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," values, it provides a useful set of functions for dealing with audio data. Many of these functions will be covered in later tutorials, but here we make use of the following functions:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioBuffer.html#a3a9ecde91bf5b96871ce3a474c1d831f",title:"Returns the number of channels of audio data that this buffer contains.",children:"AudioSampleBuffer::getNumChannels()"}),": This returns the number of audio channels stored in the buffer. In this case the value should match the number of output channels we requested in our call to the ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a1cb6b457848fa80df7efc39cf095d465",title:"A subclass should call this from their constructor, to set up the audio.",children:"AudioAppComponent::setAudioChannels()"})," function earlier. (This value will always be the maximum of the number of input and output channels.)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"classAudioBuffer.html#a10cfe91eb4965895bc258cee02409d3b",title:"Returns a writeable pointer to one of the buffer's channels.",children:"AudioSampleBuffer::getWritePointer()"}),": This returns a pointer to the buffer of ",(0,i.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," values at a specific sample offset."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u5358\u7d14\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001\u30d0\u30c3\u30d5\u30a1\u306e\u8981\u6c42\u3055\u308c\u305f\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u30e9\u30f3\u30c0\u30e0\u306a\u5024\u3067\u6e80\u305f\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3057\u3001\u305d\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30d0\u30c3\u30d5\u30a1\u5185\u3067\u958b\u59cb\u30b5\u30f3\u30d7\u30eb\u3092\u898b\u3064\u3051\u3001\u5fc5\u8981\u306a\u30b5\u30f3\u30d7\u30eb\u6570\u3092\u30d0\u30c3\u30d5\u30a1\u306b\u66f8\u304d\u8fbc\u307f\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        for (auto channel = 0; channel < bufferToFill.buffer->getNumChannels(); ++channel)\n        {\n            // \u3053\u306e\u97f3\u58f0\u51fa\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30d0\u30c3\u30d5\u30a1\u5185\u306e\u958b\u59cb\u30b5\u30f3\u30d7\u30eb\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\n            auto* buffer = bufferToFill.buffer->getWritePointer (channel, bufferToFill.startSample)\uff1b\n \n            // \u5fc5\u8981\u306a\u30b5\u30f3\u30d7\u30eb\u6570\u3092-0.125\u304b\u3089+0.125\u306e\u9593\u306e\u30ce\u30a4\u30ba\u3067\u57cb\u3081\u308b\n            for (auto sample = 0; sample < bufferToFill.numSamples; ++sample)\n                buffer[sample] = random.nextFloat() * 0.25f - 0.125f\uff1b\n        }\n    }\n"})}),"\n",(0,i.jsx)(t.h2,{id:"generating-white-noise-using-the-random-class",children:"Generating white noise using the Random class"}),"\n",(0,i.jsxs)(t.p,{children:["Here we make use of the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})," class in order to generate our random values (see ",(0,i.jsx)(t.a,{href:"../tutorial_random/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e9\u30f3\u30c0\u30e0\u30fb\u30af\u30e9\u30b9"}),"). To generate white noise we need to generate uniformly distributed random numbers around zero. Here we generate random values between -0.125 and +0.125 by first calling the ",(0,i.jsx)(t.a,{href:"classRandom.html#aec88d4e5cf44faaa038f6cfb41e96406",title:"Returns the next random floating-point number.",children:"\u30e9\u30f3\u30c0\u30e0::nextFloat()"})," function. This generates values between 0 and 1. Then we multiply the result of this by 0.25 and subtract 0.125. (See ",(0,i.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})," for more information on this process.) Notice that we didn't use the ",(0,i.jsx)(t.a,{href:"classRandom.html#ad7d9d42dd0efbb68d569e975b0778518",title:"The overhead of creating a new Random object is fairly small, but if you want to avoid it,...",children:"Random::getSystemRandom()"})," function to get the shared ",(0,i.jsx)(t.em,{children:"\u30b7\u30b9\u30c6\u30e0"})," ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})," object, as shown in other tutorials (",(0,i.jsx)(t.a,{href:"../tutorial_random/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30e9\u30f3\u30c0\u30e0\u30fb\u30af\u30e9\u30b9"}),"). This is because we are calling the ",(0,i.jsx)(t.a,{href:"classRandom.html#aec88d4e5cf44faaa038f6cfb41e96406",title:"Returns the next random floating-point number.",children:"\u30e9\u30f3\u30c0\u30e0::nextFloat()"})," function on the audio thread. We need to create our own ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})," object otherwise the values might get corrupted by other threads using that shared ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})," object. To achieve this, an instance of the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"})," class is added to our ",(0,i.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\uff1a\n    juce::Random random\uff1b\n \n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent).\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"shutting-down-the-audio-application",children:"Shutting down the audio application"}),"\n",(0,i.jsxs)(t.p,{children:["When our application is closed, our destructor will be called. At this point we should call the ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a40f1e657f048d02c5d065de566a84d92",title:"Shuts down the audio device and clears the audio source.",children:"AudioAppComponent::shutdownAudio()"})," function:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"~MainContentComponent()\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n    {\n        shutdownAudio()\uff1b\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Calling the ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a40f1e657f048d02c5d065de566a84d92",title:"Shuts down the audio device and clears the audio source.",children:"AudioAppComponent::shutdownAudio()"})," function will, in turn, cause the ",(0,i.jsx)(t.a,{href:"classAudioAppComponent.html#a588d9b990fc308774215548959e0fc50",title:"Allows the source to release anything it no longer needs after playback has stopped.",children:"AudioAppComponent::releaseResources()"})," function to be called. This is a good place to dispose of resources, if we allocated any during the running of our audio process (for example, if we allocated memory or opened some files). In this case, we didn't need any additional resources and we just log the function call with a simple message:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'void releaseResources() override\n    {\n        juce::Logger::getCurrentLogger()->writeToLog ("Releasing audio resources")\uff1b\n    }\n'})}),"\n",(0,i.jsx)(t.p,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u306e\u6570\u3092\u5909\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u30e2\u30ce\u30e9\u30eb\u30ce\u30a4\u30ba\u306f\u30b9\u30c6\u30ec\u30aa\u30ce\u30a4\u30ba\u3068\u306f\u5fae\u5999\u306b\u9055\u3063\u3066\u805e\u3053\u3048\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30de\u30eb\u30c1\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30b5\u30a6\u30f3\u30c9\u30ab\u30fc\u30c9\u304c\u3042\u308c\u3070\u30012\u30c1\u30e3\u30f3\u30cd\u30eb\u4ee5\u4e0a\u306e\u30ce\u30a4\u30ba\u3092\u751f\u6210\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u767a\u751f\u3059\u308b\u30ce\u30a4\u30ba\u306e\u30ec\u30d9\u30eb\u3092\u5909\u3048\u3066\u307f\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30ec\u30d9\u30eb0.1\u306e\u30ce\u30a4\u30ba\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001\u30e9\u30f3\u30c0\u30e0\u306b\u751f\u6210\u3055\u308c\u305f\u5024\u306b0.2\u3092\u639b\u3051\u30010.1\u3092\u5f15\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsxs)(t.p,{children:["This tutorial has introduced the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class, used by the Audio Application template, in order to generate audio. We have covered the following topics:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b7\u30b9\u30c6\u30e0\u306e\u521d\u671f\u5316\u3068\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306b\u5fdc\u7b54\u3057\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3002"}),"\n",(0,i.jsxs)(t.li,{children:["Using the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"})," struct and the AudioSampleBuffer class."]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_audio_device_manager/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioDeviceManager\u30af\u30e9\u30b9"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_synth_db_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30c7\u30b7\u30d9\u30eb\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_synth_using_midi_input/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebMIDI\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_wavetable_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30b7\u30f3\u30bb\u30b7\u30b9"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(4848);function s(e){let{src:t,caption:n,alt:s,width:o,height:a}=e;return(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:t,alt:s||n,width:o,height:a}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(4848);function s(e){let{path:t}=e;return(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:`https://docs.juce.com/master/${t}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);