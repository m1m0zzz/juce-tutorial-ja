"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[6742],{6527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(4848),a=n(8453);n(3449),n(6378);const o={title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u306e\u51e6\u7406",sidebar_position:2},r="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3059\u308b",s={id:"audio/tutorial_processing_audio_input",title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u306e\u51e6\u7406",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3057\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u306b\u6e21\u3059\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/audio/tutorial_processing_audio_input.mdx",sourceDirName:"audio",slug:"/audio/tutorial_processing_audio_input",permalink:"/juce-tutorial-ja/audio/tutorial_processing_audio_input",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/audio/tutorial_processing_audio_input.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u306e\u51e6\u7406",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u69cb\u7bc9",permalink:"/juce-tutorial-ja/audio/tutorial_playing_sound_files"},next:{title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",permalink:"/juce-tutorial-ja/audio/tutorial_looping_audio_sample_buffer"}},l={},u=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Reusing buffers",id:"reusing-buffers",level:2},{value:"Getting active channels",id:"getting-active-channels",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3059\u308b",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3059\u308b"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3057\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u306b\u6e21\u3059\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u30ec\u30d9\u30eb\uff1a\u521d\u7d1a"}),"\n",(0,i.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,i.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classRandom",title:"A random number generator.",children:"\u30e9\u30f3\u30c0\u30e0"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"}),", ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioBuffer",title:"A multi-channel buffer containing floating point audio samples.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d0\u30c3\u30d5\u30a1"})]}),"\n",(0,i.jsx)(t.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,i.jsx)(t.a,{href:"/tutorials/PIPs/ProcessingAudioInputTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,i.jsx)(t.a,{href:"/tutorials/ZIPs/ProcessingAudioInputTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"\u304a\u4f7f\u3044\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u304c\u3001\u30de\u30a4\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u8981\u6c42\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\uff08\u73fe\u5728\u3001iOS\u3001Android\u3001macOS Mojave\uff09\u3001Projucer\u306e\u95a2\u9023\u3059\u308b\u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u30fc\u306e\u4e0b\u306b\u5bfe\u5fdc\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u518d\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsxs)(t.p,{children:["If you need help with this step, see ",(0,i.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,i.jsxs)(t.p,{children:["The demo project modulates an incoming signal with white noise. The level of the white noise can be changed which affects the level of the overall output (see ",(0,i.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"}),' for the technique used to generate the white noise). The result is a very "fuzzy" version of the input signal.']}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u969b\u306b\u306f\u3001\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u907f\u3051\u308b\u3088\u3046\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u52b9\u679c\u306f\u304b\u306a\u308a\u9762\u767d\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\uff01\uff09\u3002"})}),"\n",(0,i.jsx)(t.p,{children:"\u30de\u30a4\u30af\u3068\u30d8\u30c3\u30c9\u30d5\u30a9\u30f3\u306f\u5225\u3005\u306b\u4f7f\u3046\u306e\u304c\u30d9\u30b9\u30c8\u3060\u308d\u3046\u3002\u3082\u3061\u308d\u3093\u3001\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u6b63\u3057\u304f\u6a5f\u80fd\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u4f55\u3089\u304b\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u30c7\u30d0\u30a4\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(t.h1,{id:"audio-input",children:"Audio input"}),"\n",(0,i.jsxs)(t.p,{children:["This tutorial uses the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class as the basis for the demo project application. In other tutorials we generate audio within the ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function \u2014 see ",(0,i.jsx)(t.a,{href:"../tutorial_simple_synth_noise/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30fb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"}),", ",(0,i.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"}),", and ",(0,i.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"}),". In this tutorial we read the audio input and output some audio too. In the ",(0,i.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor we request two audio inputs and two audio outputs:"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"\u5b9f\u969b\u306b\u5229\u7528\u53ef\u80fd\u306a\u5165\u529b\u307e\u305f\u306f\u51fa\u529b\u306e\u6570\u306f\u3001\u79c1\u305f\u3061\u304c\u8981\u6c42\u3059\u308b\u6570\u3088\u308a\u3082\u5c11\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(t.h2,{id:"reusing-buffers",children:"Reusing buffers"}),"\n",(0,i.jsxs)(t.p,{children:["It is important to know that the input and output buffers are not completely separate. The same buffer is used for the input and output. You can test this by temporarily commenting out all of the code in the ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function. If you then run the application, the audio input will be passed directly to the output. In the ",(0,i.jsx)(t.code,{children:"getNextAudioBlock()"})," function, the number of channels in the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioBuffer",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object within the ",(0,i.jsx)(t.code,{children:"\u30d0\u30c3\u30d5\u30a1\u30fc\u30c8\u30a5\u30d5\u30a3\u30eb"})," struct may be larger than the number input channels, the number of output channels, or both. It is important to access only the data that refers to the number of input and output channels that you have requested, ",(0,i.jsx)(t.em,{children:"\u305d\u3057\u3066"})," that are available. In particular, if you have more input channels than output channels you ",(0,i.jsx)(t.em,{children:"\u3079\u304b\u3089\u305a"})," modify the channels that should contain read-only data."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-active-channels",children:"Getting active channels"}),"\n","\n","\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"../tutorial_big_integer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebBigInteger \u30af\u30e9\u30b9"})," for other operations that can be performed on ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"})," objects."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        auto* device = deviceManager.getCurrentAudioDevice()\uff1b\n        auto activeInputChannels = device->getActiveInputChannels()\uff1b\n        auto activeOutputChannels = device->getActiveOutputChannels()\uff1b\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To work out the maximum number of channels over which we need to iterate, we can inspect the bits in the ",(0,i.jsx)(t.a,{href:"https://docs.juce.com/master/classBigInteger",title:"An arbitrarily large integer class.",children:"BigInteger"})," objects to find the highest numbered bit. The maximum number of channels will be one more than this."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"auto maxInputChannels = activeInputChannels .getHighestBit() + 1\uff1b\n        auto maxOutputChannels = activeOutputChannels.getHighestBit() + 1\uff1b\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u6b21\u306b\u3001\u30ec\u30d9\u30eb\u30b9\u30e9\u30a4\u30c0\u304b\u3089\u5e0c\u671b\u306e\u30ec\u30d9\u30eb\u3092\u53d6\u5f97\u3057\u3001\u51fa\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u30921\u3064\u305a\u3064\u51e6\u7406\u3057\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u51e6\u7406\u3057\u307e\u3059\u3002\u5165\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u6700\u5927\u6570\u304c\u30bc\u30ed\u306e\u5834\u5408\uff08\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u304c\u306a\u3044\u5834\u5408\u30012\u3064\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u8981\u6c42\u3057\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u305d\u3046\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\uff09\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u51e6\u7406\u3057\u3088\u3046\u3068\u3057\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002\u3053\u306e\u5834\u5408\u3001\u5358\u306b\u51fa\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u30d0\u30c3\u30d5\u30a1\u3092\u30bc\u30ed\u306b\u3057\u307e\u3059\uff08\u7121\u97f3\u3092\u51fa\u529b\u3057\u307e\u3059\uff09\u3002\u500b\u3005\u306e\u51fa\u529b\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u306e\u5834\u5408\u3082\u3042\u308b\u306e\u3067\u3001\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u72b6\u614b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u306e\u5834\u5408\u306f\u305d\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u30b5\u30a4\u30ec\u30f3\u30b9\u3092\u51fa\u529b\u3059\u308b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"auto level = (float) levelSlider.getValue()\uff1b\n \n        for (auto channel = 0; channel < maxOutputChannels; ++channel)\n        {\n            if ((! activeOutputChannels[channel]) || maxInputChannels == 0)\n            {\n                bufferToFill.buffer->clear (channel, bufferToFill.startSample, bufferToFill.numSamples)\uff1b\n            }\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u305d\u3057\u3066\u3001\u5165\u529b\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u51e6\u7406\u3057\u3001\u51fa\u529b\u3059\u308b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\u305d\u306e\u4ed6\n            {\n                auto actualInputChannel = channel % maxInputChannels; // [1].\n \n                if (! activeInputChannels[channel]) // [2].\n                {\n                    bufferToFill.buffer->clear (channel, bufferToFill.startSample, bufferToFill.numSamples)\uff1b\n                }\n                else // [3].\n                {\n                    auto* inBuffer = bufferToFill.buffer->getReadPointer (actualInputChannel\u3001\n                                                                          bufferToFill.startSample)\uff1b\n                    auto* outBuffer = bufferToFill.buffer->getWritePointer (channel, bufferToFill.startSample)\uff1b\n \n                    for (auto sample = 0; sample < bufferToFill.numSamples; ++sample)\n                    {\n                        auto noise = (random.nextFloat() * 2.0f) - 1.0f\uff1b\n                        outBuffer[sample] = inBuffer[sample] + (inBuffer[sample] * noise * level)\uff1b\n                    }\n                }\n            }\n        }\n    \n"})}),"\n",(0,i.jsx)(t.p,{children:"\u30b3\u30fc\u30c9\u306e\u8aac\u660e\u306f\u7c21\u5358\u3067\u3042\u308d\u3046\u304c\u3001\u3044\u304f\u3064\u304b\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\u3092\u7d39\u4ecb\u3057\u3088\u3046\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'[1]: We may have requested more output channels than input channels, so our app needs to make a decision about what to do about these extra outputs. In this example we simply repeat the input channels if we have more outputs than inputs. (To do this we use the modulo operator to "wrap" our access to the input channels based on the number of input channels available.) In other applications it may be more appropriate to output silence for higher numbered channels where there are more output channels than input channels.'}),"\n",(0,i.jsx)(t.li,{children:"[2]: Individual input channels may be inactive so we output silence in this case too."}),"\n",(0,i.jsxs)(t.li,{children:["[3]: This final block ",(0,i.jsx)(t.em,{children:"\u5b9f\u969b\u306b"})," does the processing! Here we get pointers to the input and output buffer samples and add some noise to the input samples."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In this example we don't smooth the amplitude changes as we do in ",(0,i.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"}),". This is partly to keep the example simple, but you probably wouldn't hear any additional glitches due to the crackling effect anyway. Modify the code to simply output the input channels, scaled by the level slider value, but also smooth out the level changes so that there are no glitches."]}),"\n",(0,i.jsx)(t.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u304b\u3089\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u51e6\u7406\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\u7279\u306b"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304b\u3089\u30aa\u30fc\u30c7\u30a3\u30aa\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5165\u529b\u3068\u51fa\u529b\u306e\u30d0\u30c3\u30d5\u30a1\u306f\u5171\u6709\u3055\u308c\u308b\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30c1\u30e3\u30f3\u30cd\u30eb\u3068\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u3069\u3046\u6271\u3046\u304b\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5165\u529b\u3068\u51fa\u529b\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u6570\u304c\u7570\u306a\u308b\u5834\u5408\u3001\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u304b\u3092\u63a8\u8ad6\u3059\u308b\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_audio_device_manager/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioDeviceManager\u30af\u30e9\u30b9"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_simple_synth_noise/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30fb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_sine_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30b5\u30a4\u30f3\u6ce2\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u3092\u4f5c\u308b"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(4848);function a(e){let{src:t,caption:n,alt:a,width:o,height:r}=e;return(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:t,alt:a||n,width:o,height:r}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(4848);function a(e){let{path:t}=e;return(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:`https://docs.juce.com/master/${t}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);