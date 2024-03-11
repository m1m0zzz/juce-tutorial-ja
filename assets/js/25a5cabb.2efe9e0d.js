"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[478],{9124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(4848),i=t(8453);t(3449),t(6378);const o={title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09",sidebar_position:4},a="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09",s={id:"audio/tutorial_looping_audio_sample_buffer_advanced",title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09",description:"This tutorial shows how to play and loop audio stored in an \u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1 object using thread-safe techniques. A technique for loading the audio data on a background thread is also introduced.",source:"@site/docs/audio/tutorial_looping_audio_sample_buffer_advanced.mdx",sourceDirName:"audio",slug:"/audio/tutorial_looping_audio_sample_buffer_advanced",permalink:"/juce-tutorial-ja/audio/tutorial_looping_audio_sample_buffer_advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/audio/tutorial_looping_audio_sample_buffer_advanced.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f",permalink:"/juce-tutorial-ja/audio/tutorial_looping_audio_sample_buffer"},next:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u6ce2\u5f62\u3092\u63cf\u304f",permalink:"/juce-tutorial-ja/audio/tutorial_audio_thumbnail"}},c={},l=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Reference-counted objects",id:"reference-counted-objects",level:2},{value:"Implementing the background thread",id:"implementing-the-background-thread",level:2},{value:"Opening the file",id:"opening-the-file",level:2},{value:"Playing the buffer",id:"playing-the-buffer",level:2},{value:"Passing the file path to the background thread",id:"passing-the-file-path-to-the-background-thread",level:2},{value:"Accessing the path from the background thread",id:"accessing-the-path-from-the-background-thread",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebaudiosamplebuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u4e0a\u7d1a\u8005\u5411\u3051",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\uff08\u4e0a\u7d1a\u8005\u5411\u3051\uff09"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial shows how to play and loop audio stored in an ",(0,r.jsx)(n.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object using thread-safe techniques. A technique for loading the audio data on a background thread is also introduced."]}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1aAdvanced"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aWindows, macOS, Linux"}),"\n",(0,r.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\uff1a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedObject",title:"A base class which provides methods for reference-counting.",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),", ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedArray",title:"Holds a list of objects derived from ReferenceCountedObject, or which implement basic reference-count...",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u914d\u5217"}),", ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classThread",title:"Encapsulates a thread.",children:"\u30b9\u30ec\u30c3\u30c9"}),", ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classAudioBuffer",title:"A multi-channel buffer containing floating point audio samples.",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d0\u30c3\u30d5\u30a1"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial leads on from ",(0,r.jsx)(n.a,{href:"../tutorial_looping_audio_sample_buffer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"}),". If you haven't done so already, you should read that tutorial first."]}),"\n",(0,r.jsxs)(n.p,{children:["Download the demo project for this tutorial here: ",(0,r.jsx)(n.a,{href:"/tutorials/PIPs/LoopingAudioSampleBufferAdvancedTutorial.zip",children:"\u30d4\u30c3\u30d7"})," | ",(0,r.jsx)(n.a,{href:"/tutorials/ZIPs/LoopingAudioSampleBufferAdvancedTutorial.zip",children:"\u30b8\u30c3\u30d7"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,r.jsxs)(n.p,{children:["If you need help with this step, see ",(0,r.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,r.jsxs)(n.p,{children:["The demo project implements similar behaviour to the demo project from ",(0,r.jsx)(n.a,{href:"../tutorial_looping_audio_sample_buffer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"}),". It allows the user to open an audio file that is loaded into a buffer and played in a loop. One major difference in this tutorial is that the audio system is kept running, rather than shutting it down each time we browse for a file. This is achieved by using some helpful classes for communicating between threads in a thread-safe manner."]}),"\n",(0,r.jsx)(n.h1,{id:"thread-safe-techniques",children:"Thread-safe techniques"}),"\n",(0,r.jsxs)(n.p,{children:["You should recall in ",(0,r.jsx)(n.a,{href:"../tutorial_looping_audio_sample_buffer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"})," how we solved the potential problem of the audio thread and the message thread accessing potentially incomplete or corrupted data. Just before we browsed for a file we shut down the audio system. Then, once a file was selected, we opened the file and restarted the audio system. This is clearly an impractical and cumbersome method in a real application!"]}),"\n",(0,r.jsx)(n.h2,{id:"reference-counted-objects",children:"Reference-counted objects"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedObject",title:"A base class which provides methods for reference-counting.",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," class is a useful tool for passing messages and data between threads. Here, we store our ",(0,r.jsx)(n.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object and the playback position in a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedObject",title:"A base class which provides methods for reference-counting.",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," class. To help with debugging, and to help illustrate how the class works, we also include ",(0,r.jsx)(n.code,{children:"\u540d\u79f0"})," member (although this isn't strictly necessary for the class to function):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    class ReferenceCountedBuffer  : public juce::ReferenceCountedObject\n    {\n    public:\n        typedef juce::ReferenceCountedObjectPtrPtr\uff1b\n \n        ReferenceCountedBuffer (const juce::String& nameToUse\u3001\n                                int numChannels\u3001\n                                int numSamples)\n            : name (nameToUse)\u3001\n              \u30d0\u30c3\u30d5\u30a1 (numChannels, numSamples)\n        {\n            DBG (juce::String ("Buffer named \'") + name + "\' built. numChannels = " + juce::String (numChannels) + ", numSamples = " + juce::String (numSamples))\uff1b\n        }\n \n        ~ReferenceCountedBuffer()\n        {\n            DBG (juce::String ("Buffer named \'") + name + "\' \u7834\u58ca\u3055\u308c\u307e\u3057\u305f")\uff1b\n        }\n \n        juce::AudioSampleBuffer* getAudioSampleBuffer()\n        {\n            return &buffer\uff1b\n        }\n \n        int position = 0\uff1b\n \n    private\uff1a\n        juce::String name\uff1b\n        juce::AudioSampleBuffer buffer\uff1b\n \n        JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (ReferenceCountedBuffer).\n    };\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"typedef"})," at the top of the class is an important part in implementing a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedObject",title:"A base class which provides methods for reference-counting.",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," subclass. Rather than storing our ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," object in a raw pointer, we store it in a ",(0,r.jsx)(n.code,{children:"ReferenceCountedBuffer::Ptr"})," type. It is this that manages the reference count of the object (incrementing and decrementing as necessary) and its lifetime (deleting the object when the reference count reaches zero). We can also store an array of ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," objects using the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedArray",title:"Holds a list of objects derived from ReferenceCountedObject, or which implement basic reference-count...",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u914d\u5217"})," class."]}),"\n",(0,r.jsxs)(n.p,{children:["In our ",(0,r.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class we store both an array and a single instance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    juce::SpinLock mutex;\n    juce::ReferenceCountedArray\u30d0\u30c3\u30d5\u30a1\u30fc\n    ReferenceCountedBuffer::Ptr currentBuffer\uff1b\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"\u30d0\u30c3\u30d5\u30a1"})," member keeps hold of our buffers in the array until we are absolutely sure they are no longer needed by the audio thread. The ",(0,r.jsx)(n.code,{children:"\u30ab\u30ec\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1"})," member holds the currently selected buffer."]}),"\n",(0,r.jsx)(n.h2,{id:"implementing-the-background-thread",children:"Implementing the background thread"}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class inherits from the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classThread",title:"Encapsulates a thread.",children:"\u30b9\u30ec\u30c3\u30c9"})," class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class MainContentComponent : public juce::AudioAppComponent\u3001\n                               private juce::Thread\n{\npublic\uff1a\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is used to implement our background thread. Our overridden ",(0,r.jsx)(n.a,{href:"classThread.html#aae90dfabab3e1776cf01a26e7ee3a620",title:"Must be implemented to perform the thread's actual code.",children:"\u30b9\u30ec\u30c3\u30c9::run()"})," function is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void run() \u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n    {\n        while (! threadShouldExit())\n        {\n            checkForBuffersToFree()\uff1b\n            wait (500)\uff1b\n        }\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here, we check whether there are any buffers to be freed, then our thread waits for 500ms or to be woken up (using the ",(0,r.jsx)(n.a,{href:"classThread.html#a0b4d5a1ffaa35cc13f323a0524012a2b",title:"Wakes up the thread.",children:"\u30b9\u30ec\u30c3\u30c9::notify()"})," function). Essentially, this means that the check will occur at least every 500ms. The ",(0,r.jsx)(n.code,{children:"checkForBuffersToFree()"})," function searches through our ",(0,r.jsx)(n.code,{children:"\u30d0\u30c3\u30d5\u30a1"})," array to see if any buffers can be freed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void checkForBuffersToFree()\n    {\n        for (auto i = buffers.size(); --i >= 0;)                           // [1]\n        {\n            ReferenceCountedBuffer::Ptr buffer (buffers.getUnchecked (i)); // [2].\n \n            if (buffer->getReferenceCount() == 2) // [3].\n                buffers.remove (i)\uff1b\n        }\n    }\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[1]: It is useful to remember to iterate over the array in reverse in these situations. It is easier to avoid corrupting the array index access if we remove items as we iterate over the array."}),"\n",(0,r.jsx)(n.li,{children:"[2]: This retains a copy of a buffer at the specified index."}),"\n",(0,r.jsxs)(n.li,{children:["[3]: If the reference count at this point is equal to 2 then we know that the audio thread can't be using the buffer and we can remove it from the array. One of these two references will be in the ",(0,r.jsx)(n.code,{children:"\u30d0\u30c3\u30d5\u30a1"})," and the other will be in the local ",(0,r.jsx)(n.code,{children:"\u30d0\u30c3\u30d5\u30a1"})," variable. The removed buffer will delete itself as the ",(0,r.jsx)(n.code,{children:"\u30d0\u30c3\u30d5\u30a1"})," variable goes out of scope (as this will be the last remaining reference)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Of course, we need to start the thread as our application starts, which we do in our ",(0,r.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," constructor:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"startThread()\uff1b\n    }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"opening-the-file",children:"Opening the file"}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.code,{children:"openButtonClicked()"})," function is similar to the ",(0,r.jsx)(n.code,{children:"openButtonClicked()"})," function from ",(0,r.jsx)(n.a,{href:"../tutorial_looping_audio_sample_buffer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"})," with some minor differences:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    void openButtonClicked()\n    {\n        chooser = std::make_unique ("Select a Wave file shorter than 2 seconds to play...",\n                                                       juce::File{},\n                                                       "*.wav");\n        auto chooserFlags = juce::FileBrowserComponent::openMode\n                          | juce::FileBrowserComponent::canSelectFiles;\n \n        chooser->launchAsync (chooserFlags, [this] (const juce::FileChooser& fc)\n        {\n            auto file = fc.getResult();\n \n            if (file == juce::File{})\n                return;\n \n            std::unique_ptrreader (formatManager.createReaderFor (file))\uff1b\n \n            if (reader != nullptr)\n            {\n                auto duration = (float) reader->lengthInSamples / reader->sampleRate\uff1b\n \n                if (duration < 2)\n                {\n                    ReferenceCountedBuffer::Ptr newBuffer = new ReferenceCountedBuffer (file.getFileName()\u3001\n                                                                                        (int) reader->numChannels\u3001\n                                                                                        (int) reader->lengthInSamples)\uff1b\n \n                    reader->read (newBuffer->getAudioSampleBuffer(), 0, (int) reader->lengthInSamples, 0, true, true)\uff1b\n \n                    {\n                        const juce::SpinLock::ScopedLockType lock (mutex)\uff1b\n                        currentBuffer = newBuffer\uff1b\n                    }\n \n                    buffers.add (newBuffer)\uff1b\n                }\n                \u305d\u306e\u4ed6\n                {\n                    // \u30d5\u30a1\u30a4\u30eb\u304c2\u79d2\u4ee5\u4e0a\u3042\u308b\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u3002\n                }\n            }\n        });\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u305d\u306e\u9055\u3044\u3067\u3042\u308b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Allocate a new instance of our ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," class."]}),"\n",(0,r.jsxs)(n.li,{children:["Read the audio data into the ",(0,r.jsx)(n.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object that it contains."]}),"\n",(0,r.jsx)(n.li,{children:"\u73fe\u5728\u306e\u30d0\u30c3\u30d5\u30a1\u306b\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u3053\u308c\u3092\u30d0\u30c3\u30d5\u30a1\u306e\u914d\u5217\u306b\u8ffd\u52a0\u3059\u308b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To clear the current buffer we can just set its value to ",(0,r.jsx)(n.code,{children:"\u30cc\u30eb\u30d7\u30c8\u30eb"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void clearButtonClicked()\n    {\n        const juce::SpinLock::ScopedLockType lock (mutex)\uff1b\n        currentBuffer = nullptr\uff1b\n    }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"playing-the-buffer",children:"Playing the buffer"}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.code,{children:"getNextAudioBlock()"})," function is similar to the ",(0,r.jsx)(n.code,{children:"getNextAudioBlock()"})," function from ",(0,r.jsx)(n.a,{href:"../tutorial_looping_audio_sample_buffer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"})," except we need to access our current ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," object and the ",(0,r.jsx)(n.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object it contains."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override\n    {\n        auto retainedCurrentBuffer = [&]() -> ReferenceCountedBuffer::Ptr // [4].\n        {\n            const juce::SpinLock::ScopedTryLockType \u30ed\u30c3\u30af (mutex)\uff1b\n \n            if (lock.isLocked())\n                return currentBuffer\uff1b\n \n            return nullptr\uff1b\n        }();\n \n        if (retainedCurrentBuffer == nullptr) // [5].\n        {\n            bufferToFill.clearActiveBufferRegion()\uff1b\n            \u3092\u8fd4\u3057\u307e\u3059\uff1b\n        }\n \n        auto* currentAudioSampleBuffer = retainedCurrentBuffer->getAudioSampleBuffer(); // [6].\n        auto position = retainedCurrentBuffer->position; // [7].\n \n        auto numInputChannels = currentAudioSampleBuffer->getNumChannels()\uff1b\n        auto numOutputChannels = bufferToFill.buffer->getNumChannels()\uff1b\n \n        auto outputSamplesRemaining = bufferToFill.numSamples\uff1b\n        auto outputSamplesOffset = 0\uff1b\n \n        while (outputSamplesRemaining > 0)\n        {\n            auto bufferSamplesRemaining = currentAudioSampleBuffer->getNumSamples() - position\uff1b\n            auto samplesThisTime = juce::jmin (outputSamplesRemaining, bufferSamplesRemaining)\uff1b\n \n            for (auto channel = 0; channel < numOutputChannels; ++channel)\n            {\n                bufferToFill.buffer->copyFrom (channel\u3001\n                                               bufferToFill.startSample + outputSamplesOffset\u3001\n                                               *currentAudioSampleBuffer\u3001\n                                               channel % numInputChannels\u3001\n                                               position\u3001\n                                               samplesThisTime)\uff1b\n            }\n \n            outputSamplesRemaining -= samplesThisTime\uff1b\n            outputSamplesOffset += samplesThisTime\uff1b\n            position += samplesThisTime\uff1b\n \n            if (position == currentAudioSampleBuffer->getNumSamples())\n                position = 0\uff1b\n        }\n \n        retainedCurrentBuffer->position = position; // [8].\n    }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u8981\u306a\u5909\u66f4\u70b9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3060\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[4]: We retain a copy of the ",(0,r.jsx)(n.code,{children:"\u30ab\u30ec\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1"})," member. After this point in the function it doesn't matter if the ",(0,r.jsx)(n.code,{children:"\u30ab\u30ec\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1"})," member is changed on another thread since we have taken a local copy. Note that we use a try lock here, so that the audio thread doesn't get stuck waiting to access the ",(0,r.jsx)(n.code,{children:"\u30ab\u30ec\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1"})," in the case that another thread is currently modifying it."]}),"\n",(0,r.jsxs)(n.li,{children:["[5]: We output silence if the ",(0,r.jsx)(n.code,{children:"\u30ab\u30ec\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1"})," member was null when we took a copy."]}),"\n",(0,r.jsxs)(n.li,{children:["[6]: We access the ",(0,r.jsx)(n.a,{href:"group__juce__audio__basics-buffers.html#gab339ebab0d3b10c91c0d47c8fd2e50d2",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u30d0\u30c3\u30d5\u30a1"})," object within the ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," object."]}),"\n",(0,r.jsx)(n.li,{children:"[7]: We get the current playback position for the buffer."}),"\n",(0,r.jsxs)(n.li,{children:["[8]: After modifying the current playback position, we store it back in the ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," object."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This algorithm ensures that ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," objects aren't deleted on the the audio thread. It is not a good idea to allocate or free memory on the audio thread. The ",(0,r.jsx)(n.code,{children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30ab\u30a6\u30f3\u30c8\u30d0\u30c3\u30d5\u30a1\u30fc"})," objects will only be deleted on our background thread."]}),"\n",(0,r.jsx)(n.h1,{id:"reading-the-audio-on-the-background-thread",children:"Reading the audio on the background thread"}),"\n",(0,r.jsx)(n.p,{children:"\u79c1\u305f\u3061\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u4f9d\u7136\u3068\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u30b9\u30ec\u30c3\u30c9\u3067\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u30b9\u30ec\u30c3\u30c9\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3001\u5927\u304d\u306a\u30d5\u30a1\u30a4\u30eb\u306f\u30ed\u30fc\u30c9\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u3053\u308c\u306f\u7406\u60f3\u7684\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u5b9f\u969b\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30b9\u30ec\u30c3\u30c9\u3092\u4f7f\u3063\u3066\u3053\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"passing-the-file-path-to-the-background-thread",children:"Passing the file path to the background thread"}),"\n",(0,r.jsxs)(n.p,{children:["First, add the following member to the ",(0,r.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"juce::CriticalSection pathMutex\uff1b\n    juce::String chosenPath\uff1b\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now change the ",(0,r.jsx)(n.code,{children:"openButtonClicked()"})," function to ",(0,r.jsx)(n.em,{children:"\u30b9\u30ef\u30c3\u30d7"})," the full path of the file into this member. Swapping strings is not technically thread-safe, so we also need to take a lock to ensure that no other threads try to modify ",(0,r.jsx)(n.code,{children:"chosenPath"})," while this thread is using it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    void openButtonClicked()\n    {\n        chooser = std::make_unique("Select a Wave file shorter than 2 seconds to play..."\u3001\n                                                       juce::File{}\u3001\n                                                       "*.wav")\uff1b\n        auto chooserFlags = juce::FileBrowserComponent::openMode\n                          | juce::FileBrowserComponent::canSelectFiles\uff1b\n \n        chooser->launchAsync (chooserFlags, [this] (const juce::FileChooser& fc))\n        {\n            auto file = fc.getResult()\uff1b\n \n            if (file == juce::File{})\n                \u3092\u8fd4\u3057\u307e\u3059\uff1b\n \n            auto path = file.getFullPathName()\uff1b\n \n \n            {\n                const juce::ScopedLock lock (pathMutex)\uff1b\n                chosenPath.swapWith (path)\uff1b\n            }\n \n            notify()\uff1b\n        });\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u3053\u3067\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u305f\u3081\u306b\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30fb\u30b9\u30ec\u30c3\u30c9\u3067\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u306e\u3067\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30fb\u30b9\u30ec\u30c3\u30c9\u3082\u30a6\u30a7\u30a4\u30af\u30a2\u30c3\u30d7\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-path-from-the-background-thread",children:"Accessing the path from the background thread"}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.code,{children:"\u5b9f\u884c()"})," function should be updated as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"void run() \u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n    {\n        while (! threadShouldExit())\n        {\n            checkForPathToOpen()\uff1b\n            checkForBuffersToFree()\uff1b\n            wait (500)\uff1b\n        }\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"checkForPathToOpen()"})," function checks the ",(0,r.jsx)(n.code,{children:"chosenPath"})," member by swapping it into a local variable. Again, swapping is not thread-safe, so we must take a lock before accessing ",(0,r.jsx)(n.code,{children:"chosenPath"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    void checkForPathToOpen()\n    {\n        juce::String pathToOpen;\n \n        {\n            const juce::ScopedLock lock (pathMutex);\n            pathToOpen.swapWith (chosenPath);\n        }\n \n        if (pathToOpen.isNotEmpty())\n        {\n            juce::File file (pathToOpen);\n            std::unique_ptrreader (formatManager.createReaderFor (file))\uff1b\n \n            if (reader.get() != nullptr)\n            {\n                auto duration = (float) reader->lengthInSamples / reader->sampleRate\uff1b\n \n                if (duration < 2)\n                {\n                    ReferenceCountedBuffer::Ptr newBuffer = new ReferenceCountedBuffer (file.getFileName()\u3001\n                                                                                        (int) reader->numChannels\u3001\n                                                                                        (int) reader->lengthInSamples)\uff1b\n \n                    reader->read (newBuffer->getAudioSampleBuffer(), 0, (int) reader->lengthInSamples, 0, true, true)\uff1b\n \n                    {\n                        const juce::SpinLock::ScopedLockType lock (mutex)\uff1b\n                        currentBuffer = newBuffer\uff1b\n                    }\n \n                    buffers.add (newBuffer)\uff1b\n                }\n                \u305d\u306e\u4ed6\n                {\n                    // \u30d5\u30a1\u30a4\u30eb\u304c2\u79d2\u4ee5\u4e0a\u3042\u308b\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u3002\n                }\n            }\n        \n    \n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"\u30d1\u30b9\u3092\u958b\u304f"})," variable is an empty string then we know there isn't a new file to open. The remainder of the code in this function should be familiar to you."]}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u518d\u5ea6\u5b9f\u884c\u3059\u308c\u3070\u3001\u6b63\u3057\u304f\u6a5f\u80fd\u3059\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The final code for this section can be found in the ",(0,r.jsx)(n.code,{children:"LoopingAudioSampleBufferAdvancedTutorial_02.h"})," file of the demo project."]})}),"\n",(0,r.jsx)(n.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u7279\u306b\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u3001\u30b9\u30ec\u30c3\u30c9\u9593\u3067\u30c7\u30fc\u30bf\u3092\u53d7\u3051\u6e21\u3059\u305f\u3081\u306e\u4fbf\u5229\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u4ee5\u4e0b\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3067\u3057\u3087\u3046\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Implement a subclass of the ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedObject",title:"A base class which provides methods for reference-counting.",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," class."]}),"\n",(0,r.jsxs)(n.li,{children:["Maintain the lifetime of a ",(0,r.jsx)(n.a,{href:"https://docs.juce.com/master/classReferenceCountedObject",title:"A base class which provides methods for reference-counting.",children:"\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," in a multi-threaded application."]}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u8981\u306b\u306a\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u524a\u9664\u3084\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306a\u3069\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30fb\u30b9\u30ec\u30c3\u30c9\u3092\u5b9f\u88c5\u3059\u308b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_playing_sound_files/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u69cb\u7bc9"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_processing_audio_input/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u5165\u529b\u3092\u51e6\u7406\u3059\u308b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_audio_thumbnail/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u6ce2\u5f62\u3092\u63cf\u304f"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../tutorial_looping_audio_sample_buffer/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAudioSampleBuffer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u30eb\u30fc\u30d7\u518d\u751f"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3449:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(4848);function i(e){let{src:n,caption:t,alt:i,width:o,height:a}=e;return(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:n,alt:i||t,width:o,height:a}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("b",{children:t})})]})}},6378:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(4848);function i(e){let{path:n}=e;return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:`https://docs.juce.com/master/${n}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);