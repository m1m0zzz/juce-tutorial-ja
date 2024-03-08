"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[7069],{5973:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=i(4848),n=i(8453);i(3449),i(6378);const s={title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",sidebar_position:3},a="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",r={id:"audio/tutorial_looping_audio_sample_buffer",title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001AudioSampleBuffer \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u683c\u7d0d\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u518d\u751f\u3057\u3001\u30eb\u30fc\u30d7\u3055\u305b\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u9332\u97f3\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30fc\u30bf\u3092\u64cd\u4f5c\u3059\u308b\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u57fa\u790e\u3068\u3057\u3066\u5f79\u7acb\u3061\u307e\u3059\u3002",source:"@site/docs/audio/tutorial_looping_audio_sample_buffer.mdx",sourceDirName:"audio",slug:"/audio/tutorial_looping_audio_sample_buffer",permalink:"/juce-tutorial-ja/audio/tutorial_looping_audio_sample_buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/audio/tutorial_looping_audio_sample_buffer.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u306e\u51e6\u7406",permalink:"/juce-tutorial-ja/audio/tutorial_processing_audio_input"},next:{title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09",permalink:"/juce-tutorial-ja/audio/tutorial_looping_audio_sample_buffer_advanced"}},l={},h=[{value:"Why the length limit?",id:"why-the-length-limit",level:2},{value:"Reading the sound file",id:"reading-the-sound-file",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebaudiosamplebuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001AudioSampleBuffer \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u683c\u7d0d\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u3092\u518d\u751f\u3057\u3001\u30eb\u30fc\u30d7\u3055\u305b\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u9332\u97f3\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30fc\u30bf\u3092\u64cd\u4f5c\u3059\u308b\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u57fa\u790e\u3068\u3057\u3066\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u30ec\u30d9\u30eb Intermediate"}),"\n",(0,o.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux"}),"\n",(0,o.jsxs)(t.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioBuffer",title:"A multi-channel buffer containing floating point audio samples.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d0\u30c3\u30d5\u30a1"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReader",title:"Reads samples from an audio file stream.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30ea\u30fc\u30c0\u30fc"}),", ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})]}),"\n",(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["This tutorial assumes you have already completed ",(0,o.jsx)(t.a,{href:"../tutorial_simple_synth_noise/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u30fb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b"})," and ",(0,o.jsx)(t.a,{href:"../tutorial_playing_sound_files/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u69cb\u7bc9"}),". If not, you should look at these first."]})}),"\n",(0,o.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,o.jsx)(t.a,{href:"/tutorials/PIPs/LoopingAudioSampleBufferTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,o.jsx)(t.a,{href:"/tutorials/ZIPs/LoopingAudioSampleBufferTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need help with this step, see ",(0,o.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,o.jsxs)(t.p,{children:["The demo project for this tutorial allows the user to open a sound file, read the whole file into an ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object, and play it in a loop. In ",(0,o.jsx)(t.a,{href:"../tutorial_playing_sound_files/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u69cb\u7bc9"})," we played sound files using an ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReaderSource",title:"A type of AudioSource that will read from an AudioFormatReader.",children:"AudioFormatReaderSource"})," object connected to an ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioTransportSource",title:"An AudioSource that takes a PositionableAudioSource and allows it to be played, stopped,...",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u30fb\u30bd\u30fc\u30b9"})," object to play the sound. Looping is possible using this method by enabling enabling the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReaderSource",title:"A type of AudioSource that will read from an AudioFormatReader.",children:"AudioFormatReaderSource"})," object's looping flag \u2014 using the ",(0,o.jsx)(t.a,{href:"classAudioFormatReaderSource.html#a15d8af211ce8cfcbc0c4aaac143b303e",title:"Toggles loop-mode.",children:"AudioFormatReaderSource::setLooping()"})," function."]}),"\n",(0,o.jsxs)(t.p,{children:["All of the code relevant to the discussion in this tutorial is in the ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class of the demo project."]}),"\n",(0,o.jsx)(t.h1,{id:"loading-sample-data-into-memory",children:"Loading sample data into memory"}),"\n",(0,o.jsxs)(t.p,{children:["There are many cases where it is probably better to use the built-in classes for sound file playback. There may be occasions where you need to do this yourself and this tutorial gives an introduction to some of the techniques. Sampler applications commonly load the sound file data into memory like this, especially when the sounds are relatively short (see the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classSamplerSound",title:"A subclass of SynthesiserSound that represents a sampled audio clip.",children:"\u30b5\u30f3\u30d7\u30e9\u30fc\u30b5\u30a6\u30f3\u30c9"})," class for an example). Synthesising sounds can also be achieved by storing a wavetable in an ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object and looping it at an appropriate rate to produce the required musical pitch. This is explored in ",(0,o.jsx)(t.a,{href:"../tutorial_wavetable_synth/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30b7\u30f3\u30bb\u30b7\u30b9"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial also highlights some of the potential multi-threading issues you may encounter when combining access to files, and audio processing on the audio thread. Some of these problems seem simple on the surface but often require carefully applied techniques in order to avoid crashes and audio glitches. These techniques are explored further in ",(0,o.jsx)(t.a,{href:"../tutorial_looping_audio_sample_buffer_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"why-the-length-limit",children:"Why the length limit?"}),"\n",(0,o.jsx)(t.p,{children:"\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u8aad\u307f\u8fbc\u3081\u308b\u30b5\u30a6\u30f3\u30c9\u30d5\u30a1\u30a4\u30eb\u306e\u9577\u3055\u30922\u79d2\u672a\u6e80\u306b\u5236\u9650\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u5236\u9650\u306f\u304b\u306a\u308a\u6063\u610f\u7684\u3067\u3059\u304c\u3001\u3053\u308c\u306b\u306f\u5927\u307e\u304b\u306b2\u3064\u306e\u7406\u7531\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["If the whole file is very large then your computer might run out of physical memory. In a real application, of course, you would be able to use a much higher limit. A 2-second stereo audio file, at a sample rate of 44.1kHz, loaded into an ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object, will only occupy 705,600 bytes of memory. (See notes)"]}),"\n",(0,o.jsx)(t.li,{children:"\u304b\u306a\u308a\u77ed\u3044\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u3063\u3066\u3082\u3001\u8aad\u307f\u8fbc\u307f\u306b\u306f\u4e9b\u7d30\u306a\u6642\u9593\u3057\u304b\u304b\u304b\u3089\u306a\u3044\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u30dd\u30a4\u30f3\u30c81\u306b\u3064\u3044\u3066\uff1a\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u304c\u6301\u3063\u3066\u3044\u308b\u7269\u7406\u30e1\u30e2\u30ea\u306e\u91cf\u3092\u8d85\u3048\u308b\u3068\u3001\u4eee\u60f3\u30e1\u30e2\u30ea\uff08\u3064\u307e\u308a\u30cf\u30fc\u30c9\u30c9\u30e9\u30a4\u30d6\u306a\u3069\u306e\u4e8c\u6b21\u8a18\u61b6\u88c5\u7f6e\uff09\u3092\u4f7f\u3044\u59cb\u3081\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3002\u3053\u308c\u3067\u306f\u3001\u305d\u3082\u305d\u3082\u30c7\u30fc\u30bf\u3092\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3059\u308b\u610f\u5473\u304c\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\uff01\u3082\u3061\u308d\u3093\u3001\u30e1\u30e2\u30ea\u304c\u4e0d\u8db3\u3059\u308c\u3070\u3001\u30c7\u30d0\u30a4\u30b9\u306b\u3088\u3063\u3066\u306f\u52d5\u4f5c\u304c\u5931\u6557\u3059\u308b\u3053\u3068\u3082\u3042\u308b\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["Regarding point 2: we keep the example simple by loading the audio data directly in, after the ",(0,o.jsx)(t.a,{href:"classFileChooser.html#a546ef74bcd139b67a90e4459cd591d21",title:"Shows a dialog box to choose a file to open.",children:"FileChooser::browseForFileToOpen()"})," function has returned the file selected by the user. This means that the ",(0,o.jsx)(t.em,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30b9\u30ec\u30c3\u30c9"})," will be blocked until all of the audio has been read in from disk into the ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object. Even with short sounds we should really do this on a background thread to keep the user interface as responsive as possible for the user. For long sounds the delay and unresponsiveness will be very noticeable. Adding another (background) thread would add to the complexity of this example. See ",(0,o.jsx)(t.a,{href:"../tutorial_looping_audio_sample_buffer_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09"})," for example of how to load files on a background thread in this way."]}),"\n",(0,o.jsx)(t.p,{children:"\u30b7\u30f3\u30d7\u30eb\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30c7\u30e2\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u9577\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u30ed\u30fc\u30c9\u3057\u3088\u3046\u3068\u3057\u3066\u3082\u30a8\u30e9\u30fc\u306f\u5831\u544a\u3055\u308c\u306a\u3044\u3002\u3053\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u5831\u544a\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306f\u3001\u8ffd\u52a0\u306e\u7df4\u7fd2\u3068\u3057\u3066\u3042\u306a\u305f\u306b\u6b8b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"reading-the-sound-file",children:"Reading the sound file"}),"\n",(0,o.jsxs)(t.p,{children:["When the user clicks the ",(0,o.jsx)(t.strong,{children:"\u30aa\u30fc\u30d7\u30f3..."})," button they are presented with a file chooser. The whole file is then read into an ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," member ",(0,o.jsx)(t.code,{children:"\u30d5\u30a1\u30a4\u30eb\u30d0\u30c3\u30d5\u30a1"})," in our ",(0,o.jsx)(t.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'    void openButtonClicked()\n    {\n        shutdownAudio();                                                                            // [1]\n \n        chooser = std::make_unique ("Select a Wave file shorter than 2 seconds to play...",\n                                                       juce::File{},\n                                                       "*.wav");\n        auto chooserFlags = juce::FileBrowserComponent::openMode\n                          | juce::FileBrowserComponent::canSelectFiles;\n \n        chooser->launchAsync (chooserFlags, [this] (const juce::FileChooser& fc)\n        {\n            auto file = fc.getResult();\n \n            if (file == juce::File{})\n                return;\n \n            std::unique_ptrreader (formatManager.createReaderFor (file)); // [2].\n \n            if (reader.get() != nullptr)\n            {\n                auto duration = (float) reader->lengthInSamples / reader->sampleRate; // [3].\n \n                if (duration < 2)\n                {\n                    fileBuffer.setSize ((int) reader->numChannels, (int) reader->lengthInSamples); // [4].\n                    reader->read (&fileBuffer, // [5]); // [4].\n                                  0, // [5.1]\n                                  (int) reader->lengthInSamples, // [5.2].\n                                  0, // [5.3]\n                                  true, // [5.4\uff3d\n                                  true); // [5.5\uff3d\n                    position = 0; // \u30106\n                    setAudioChannels (0, (int) reader->numChannels); // [7].\n                }\n                \u305d\u306e\u4ed6\n                {\n                    // \u30d5\u30a1\u30a4\u30eb\u304c2\u79d2\u4ee5\u4e0a\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u3002\n                }\n            }\n        });\n    }\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["[1]: Notice that we shut down the audio system for the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioAppComponent",title:"A base class for writing audio apps that stream from the audio i/o devices.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," object each time we open a new file. This is to avoid some of the multithreading issues hinted at already. Once the audio system is shut down, there is no danger that our ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function will be called on the ",(0,o.jsx)(t.em,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b9\u30ec\u30c3\u30c9"})," while we are still within the call to the ",(0,o.jsx)(t.a,{href:"classButton.html#a30b76ab312dc7f66e67596ae20540ec2",title:"You can assign a lambda to this callback object to have it called when the button is clicked.",children:"\u30dc\u30bf\u30f3::onClick"})," lambda function (which will have called this ",(0,o.jsx)(t.code,{children:"openButtonClicked()"})," function from the ",(0,o.jsx)(t.em,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30b9\u30ec\u30c3\u30c9"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["[2]: Here we create the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReader",title:"Reads samples from an audio file stream.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30ea\u30fc\u30c0\u30fc"})," object using the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatManager",title:"A class for keeping a list of available audio formats, and for deciding which one to use to open a gi...",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"})," object. Notice that we store this in a std::unique_ptr object as we need to manage this object ourselves. (In ",(0,o.jsx)(t.a,{href:"../tutorial_playing_sound_files/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u69cb\u7bc9"})," we pass the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReader",title:"Reads samples from an audio file stream.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30ea\u30fc\u30c0\u30fc"})," object to the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReaderSource",title:"A type of AudioSource that will read from an AudioFormatReader.",children:"AudioFormatReaderSource"})," object to manage for for us.) This operation may fail to create the reader object, therefore we have to check that the ",(0,o.jsx)(t.code,{children:"\u8aad\u8005"})," pointer is not a ",(0,o.jsx)(t.code,{children:"\u30cc\u30eb\u30d7\u30c8\u30eb"})," value on the next line."]}),"\n",(0,o.jsx)(t.li,{children:"[3]: This is where we calculate the duration of the sound file by dividing the length of the file in samples by its sample rate. We check that this is less that 2 seconds on the next line."}),"\n",(0,o.jsxs)(t.li,{children:["[4]: Here we resize the ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object by calling the ",(0,o.jsx)(t.a,{href:"classAudioBuffer.html#a4434de94aa03d7db6d7ef06977ddf0ac",title:"Changes the buffer's size or number of channels.",children:"AudioSampleBuffer::setSize()"})," function using the number of channels and length from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReader",title:"Reads samples from an audio file stream.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30ea\u30fc\u30c0\u30fc"})," object."]}),"\n",(0,o.jsxs)(t.li,{children:["[5]: This reads the audio data from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReader",title:"Reads samples from an audio file stream.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30ea\u30fc\u30c0\u30fc"})," object into our ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," ",(0,o.jsx)(t.code,{children:"\u30d5\u30a1\u30a4\u30eb\u30d0\u30c3\u30d5\u30a1"})," member using the ",(0,o.jsx)(t.a,{href:"classAudioFormatReader.html#ad180e2b06c2a10c0ca399c3231b155c0",children:"AudioFormatReader::read()"})," function. The arguments are:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["[5.1]: The destination start sample in the ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object where the data will start to be written."]}),"\n",(0,o.jsx)(t.li,{children:"[5.2]: The number of samples to read."}),"\n",(0,o.jsxs)(t.li,{children:["[5.3]: The start samples in the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/classAudioFormatReader",title:"Reads samples from an audio file stream.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30ea\u30fc\u30c0\u30fc"})," object where reading will start."]}),"\n",(0,o.jsx)(t.li,{children:"[5.4]: For stereo (or other two-channel) files this flag indicates whether to read the left channel."}),"\n",(0,o.jsx)(t.li,{children:"[5.5]: For stereo files this flag indicates whether to read the right channel."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["[6]: We need to store the most recent read position within our buffer as we play it. This resets our ",(0,o.jsx)(t.code,{children:"\u4f4d\u7f6e"})," member to zero."]}),"\n",(0,o.jsx)(t.li,{children:"[7]: This starts the audio system back up again. Here we have an opportunity to use the number of channels in the sound file to try and configure our audio device with the same number of channels."}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"processing-the-audio",children:"Processing the audio"}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function the appropriate number of samples is read from our ",(0,o.jsx)(t.code,{children:"\u30d5\u30a1\u30a4\u30eb\u30d0\u30c3\u30d5\u30a1"})," ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," member and written out the the ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object in the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"})," struct."]}),"\n",(0,o.jsxs)(t.p,{children:["While reading the audio data from the file we keep track of the current read position using the ",(0,o.jsx)(t.code,{children:"\u4f4d\u7f6e"})," member (being careful to update it after all the channels of the audio have been processed for the specified block of samples):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        auto numInputChannels = fileBuffer.getNumChannels()\uff1b\n        auto numOutputChannels = bufferToFill.buffer->getNumChannels()\uff1b\n \n        auto outputSamplesRemaining = bufferToFill.numSamples; // [8].\n        auto outputSamplesOffset = bufferToFill.startSample; // [9].\n \n        while (outputSamplesRemaining > 0)\n        {\n            auto bufferSamplesRemaining = fileBuffer.getNumSamples() - position; // [10].\n            auto samplesThisTime = juce::jmin (outputSamplesRemaining, bufferSamplesRemaining); // [11].\n \n            for (auto channel = 0; channel < numOutputChannels; ++channel)\n            {\n                bufferToFill.buffer->copyFrom (channel, // [12])\n                                               outputSamplesOffset, // [12.1].\n                                               fileBuffer, // [12.2].\n                                               channel % numInputChannels, // [12.3].\n                                               \u4f4d\u7f6e, // [12.4\uff3d\n                                               samplesThisTime); // [12.5].\n            }\n \n            outputSamplesRemaining -= samplesThisTime; // [13] }.\n            outputSamplesOffset += samplesThisTime; // \u301014\u3011.\n            \u4f4d\u7f6e += samplesThisTime; // \u301015\n \n            if (position == fileBuffer.getNumSamples())\n                position = 0; // [16\uff3d\n        }\n    }\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["[8]: The ",(0,o.jsx)(t.code,{children:"\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u6570"})," variable stores the total number of samples that the ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function needs to output taking a copy from the ",(0,o.jsx)(t.a,{href:"https://docs.juce.com/master/structAudioSourceChannelInfo",title:"Used by AudioSource::getNextAudioBlock().",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30bd\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u60c5\u5831"})," struct. We use this to check if we need to exit the ",(0,o.jsx)(t.code,{children:"while()"})," loop that starts on the next line."]}),"\n",(0,o.jsxs)(t.li,{children:["[9]: We also take a copy of the ",(0,o.jsx)(t.a,{href:"structAudioSourceChannelInfo.html#a42e88ccc05d4893015e2415785390259",title:"The first sample in the buffer from which the callback is expected to write data.",children:"AudioSourceChannelInfo::startSample"})," value to use as our offset within the destination buffer."]}),"\n",(0,o.jsx)(t.li,{children:"[10]: Here we calculate how many samples are left in the buffer from which we are reading."}),"\n",(0,o.jsxs)(t.li,{children:["[11]: For this pass of the ",(0,o.jsx)(t.code,{children:"while()"})," loop we need to output the smaller of the remaining samples for this call to the ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function and the remaining samples in the buffer \u2014 using the ",(0,o.jsx)(t.a,{href:"group__juce__core-maths.html#gae8394cdf11279b266f4aa741758c1669",children:"jmin()"})," function. If this is less than the total number of samples for this call to the ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function, then there will be one more pass of the ",(0,o.jsx)(t.code,{children:"while()"})," loop, before exiting."]}),"\n",(0,o.jsxs)(t.li,{children:["[12]: For each output channel we use the ",(0,o.jsx)(t.a,{href:"classAudioBuffer.html#a9ec751bfa23564c011bf3940ca17b743",title:"Copies samples from another buffer to this one.",children:"AudioSampleBuffer::copyFrom()"})," function to copy sections of data from one channel of one buffer to a channel of another buffer. Here we specify the destination channel index.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"[12.1]: This is the sample offset within the destination buffer."}),"\n",(0,o.jsxs)(t.li,{children:["[12.2]: This is the source ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object from which to copy."]}),"\n",(0,o.jsx)(t.li,{children:"[12.3]: This is the channel index of the source buffer. In case the source buffer has fewer channels than our destination buffer we use this modulo calculation. For example, a mono source buffer will mean that this always results in zero, copying the same data to each of the output channels."}),"\n",(0,o.jsx)(t.li,{children:"[12.4]: This is the position to start reading from in the source buffer."}),"\n",(0,o.jsx)(t.li,{children:"[12.5]: The number of samples to read that we calculated earlier."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["[13]: Now deduct the number of samples we just processed from the ",(0,o.jsx)(t.code,{children:"\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u6570"})," variable."]}),"\n",(0,o.jsxs)(t.li,{children:["[14]: Increment the ",(0,o.jsx)(t.code,{children:"\u51fa\u529b\u30b5\u30f3\u30d7\u30eb\u30aa\u30d5\u30bb\u30c3\u30c8"})," by the same amount in case we have another pass of the ",(0,o.jsx)(t.code,{children:"while()"})," loop."]}),"\n",(0,o.jsxs)(t.li,{children:["[15]: Offset our ",(0,o.jsx)(t.code,{children:"\u4f4d\u7f6e"})," member by the same amount too."]}),"\n",(0,o.jsxs)(t.li,{children:["[16]: Finally, check if the ",(0,o.jsx)(t.code,{children:"\u4f4d\u7f6e"})," member reached the end of the ",(0,o.jsx)(t.code,{children:"\u30d5\u30a1\u30a4\u30eb\u30d0\u30c3\u30d5\u30a1"})," ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object and reset it to zero to form the loop if necessary."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Add a level slider to control the audio playback level of the audio file (see ",(0,o.jsx)(t.a,{href:"../tutorial_synth_level_control/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"}),"). You can use the ",(0,o.jsx)(t.a,{href:"classAudioBuffer.html#a9ffc61d339e455d4bddc7cf055a63ee3",title:"Applies a gain multiple to a region of one channel.",children:"AudioSampleBuffer::applyGain()"})," or ",(0,o.jsx)(t.a,{href:"classAudioBuffer.html#ab0542e5b626b36087f0054e795695682",title:"Applies a range of gains to a region of a channel.",children:"AudioSampleBuffer::applyGainRamp()"})," functions to apply the gain to the data in an ",(0,o.jsx)(t.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object."]}),"\n",(0,o.jsx)(t.h1,{id:"multithreading-issues",children:"Multithreading issues"}),"\n",(0,o.jsxs)(t.p,{children:["As discussed previously, this tutorial avoids multithreading issues by shutting down and restarting audio each time the user clicks the ",(0,o.jsx)(t.strong,{children:"\u30aa\u30fc\u30d7\u30f3..."})," button. But what if we didn't do this \u2014 what could happen? There many things that could go wrong, all of which have to do with the fact that both the ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," and ",(0,o.jsx)(t.code,{children:"openButtonClicked()"})," functions could be running at the same time in different threads. Here are some examples:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Let's say that the application is already playing an audio file and the user clicks the ",(0,o.jsx)(t.strong,{children:"\u30aa\u30fc\u30d7\u30f3..."})," button and chooses a new file. Suppose the audio thread interrupts this function between [4] and [5]. The buffer has been resized but the data hasn't been written to the buffer. The buffer may still contain audio data from the previous file but it depends whether the memory for the buffer needed to be moved when it was resized. In any case we'll probably get a glitch."]}),"\n",(0,o.jsxs)(t.li,{children:["It's possible that the ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function could be interrupted by code in the ",(0,o.jsx)(t.code,{children:"openButtonClicked()"})," function. Suppose this happens just after [11] and that the ",(0,o.jsx)(t.code,{children:"openButtonClicked()"})," function has just reached [4]. The buffer might be resized to be shorter than it was but we already calculated our starting point a few lines earlier. This could lead to a memory access error and the application could crash."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"getNextAudioBlock()"})," function could be interrupted while calling the ",(0,o.jsx)(t.a,{href:"classAudioBuffer.html#a9ec751bfa23564c011bf3940ca17b743",title:"Copies samples from another buffer to this one.",children:"AudioSampleBuffer::copyFrom()"})," function. Again depending in the implementation of this we could end up accessing memory that we shouldn't."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["There are a number of other things that could go wrong. You may be familiar with using a ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Critical_section",children:"\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30bb\u30af\u30b7\u30e7\u30f3"})," to synchronise memory access between threads. This is just one possible solution but care should be taken using a ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Critical_section",children:"\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30bb\u30af\u30b7\u30e7\u30f3"})," in audio code as it can lead to ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Priority_inversion",children:"\u512a\u5148\u9806\u4f4d\u53cd\u8ee2"})," which could cause audio drop outs. We look at a solution that avoids critical sections in ",(0,o.jsx)(t.a,{href:"../tutorial_looping_audio_sample_buffer_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09"}),"."]})}),"\n",(0,o.jsx)(t.h1,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.p,{children:"44.1kHz\u306e2\u79d2\u9593\u306e\u30b9\u30c6\u30ec\u30aa\u30fb\u30aa\u30fc\u30c7\u30a3\u30aa\u306f\u3001AudioSampleBuffer\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b705,600\u30d0\u30a4\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"2\u30c1\u30e3\u30f3\u30cd\u30eb"}),"\n",(0,o.jsx)(t.li,{children:"2\u79d2"}),"\n",(0,o.jsx)(t.li,{children:"44,100\u30b5\u30f3\u30d7\u30eb"}),"\n",(0,o.jsxs)(t.li,{children:["4 bytes-per-sample (using the ",(0,o.jsx)(t.code,{children:"\u30d5\u30ed\u30fc\u30c8"})," type)"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Multiply these together and the result is: 2 x 2 x 2 x 44100 x 4 = 705600"}),"\n",(0,o.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u7d39\u4ecb\u3057\u305f\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u30b5\u30a6\u30f3\u30c9\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30fc\u30bf\u3092\u76f4\u63a5\u8aad\u307f\u8fbc\u3080\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u30c7\u30fc\u30bf\u3092\u518d\u751f\u7528\u306e\u30d0\u30c3\u30d5\u30a1\u306b\u30b3\u30d4\u30fc\u3059\u308b\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u30b7\u30f3\u30d7\u30eb\u306a\u30b5\u30f3\u30d7\u30e9\u30fc\u30fb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u3001\u30a6\u30a7\u30fc\u30d6\u30c6\u30fc\u30d6\u30eb\u30fb\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u3063\u305f\u30b7\u30f3\u30bb\u30b5\u30a4\u30b6\u30fc\u306e\u57fa\u790e\u3068\u306a\u308b\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5b58\u5728\u3059\u308b\u6f5c\u5728\u7684\u306a\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u554f\u984c\u306e\u3044\u304f\u3064\u304b\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_playing_sound_files/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u69cb\u7bc9"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_processing_audio_input/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3059\u308b"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_audio_thumbnail/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u6ce2\u5f62\u3092\u63cf\u304f"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../tutorial_looping_audio_sample_buffer_advanced/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3449:(e,t,i)=>{i.d(t,{A:()=>n});var o=i(4848);function n(e){let{src:t,caption:i,alt:n,width:s,height:a}=e;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:t,alt:n||i,width:s,height:a}),(0,o.jsx)("figcaption",{children:(0,o.jsx)("b",{children:i})})]})}},6378:(e,t,i)=>{i.d(t,{A:()=>n});var o=i(4848);function n(e){let{path:t}=e;return(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var o=i(6540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);