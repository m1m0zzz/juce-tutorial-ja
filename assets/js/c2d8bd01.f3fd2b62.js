"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[343],{5656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(4848),o=n(8453),r=n(3449);n(6378);const s={title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210\u3001\u30d1\u30fc\u30c81",sidebar_position:3},l="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",c={id:"getting-started/tutorial_create_projucer_basic_plugin",title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210\u3001\u30d1\u30fc\u30c81",description:'\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001JUCE \u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\uff08VST3 \u3068 AudioUnit\uff09\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e Projucer \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u6700\u5f8c\u306b\u306f\u3001"Hello, World!" \u3068\u8a00\u3063\u3066\u3001Cubase \u3084 REAPER \u306e\u3088\u3046\u306a VST3 \u30db\u30b9\u30c8\u306b\u30ed\u30fc\u30c9\u3067\u304d\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5b8c\u6210\u3057\u307e\u3059\u3002',source:"@site/docs/getting-started/tutorial_create_projucer_basic_plugin.mdx",sourceDirName:"getting-started",slug:"/getting-started/tutorial_create_projucer_basic_plugin",permalink:"/juce-tutorial-ja/getting-started/tutorial_create_projucer_basic_plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/getting-started/tutorial_create_projucer_basic_plugin.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u6210\u3001\u30d1\u30fc\u30c81",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Projucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b",permalink:"/juce-tutorial-ja/getting-started/tutorial_manage_projucer_project"},next:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b \u305d\u306e2",permalink:"/juce-tutorial-ja/getting-started/tutorial_code_basic_plugin"}},a={},u=[{value:"VST3 and AudioUnit",id:"vst3-and-audiounit",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aaudiomidi\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b-\u30d1\u30fc\u30c81\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c81\uff1a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,i.jsx)(t.p,{children:'\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001JUCE \u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\uff08VST3 \u3068 AudioUnit\uff09\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e Projucer \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u6700\u5f8c\u306b\u306f\u3001"Hello, World!" \u3068\u8a00\u3063\u3066\u3001Cubase \u3084 REAPER \u306e\u3088\u3046\u306a VST3 \u30db\u30b9\u30c8\u306b\u30ed\u30fc\u30c9\u3067\u304d\u308b\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5b8c\u6210\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(t.p,{children:"\u30ec\u30d9\u30eb Intermediate"}),"\n",(0,i.jsx)(t.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 Windows, macOS, Linux"}),"\n",(0,i.jsx)(t.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u5f62\u5f0f\uff1a VST3, AU, Standalone"}),"\n",(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://shop.juce.com/get-juce/download",children:"JUCE\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),". Unpack the JUCE folder and place it to some location on your computer. Your user home folder is a convenient place."]}),"\n",(0,i.jsx)(t.p,{children:"JUCE\u30d5\u30a9\u30eb\u30c0\u306b\u3042\u308bProjucer\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["If you are not familiar with the Projucer yet, please read ",(0,i.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})," first."]}),"\n",(0,i.jsx)(t.h1,{id:"download-and-install-plug-in-dependencies",children:"Download and install plug-in dependencies"}),"\n",(0,i.jsx)(t.h2,{id:"vst3-and-audiounit",children:"VST3 and AudioUnit"}),"\n",(0,i.jsx)(t.p,{children:"VST3\u304a\u3088\u3073AU\uff08MacOS\u306e\u307f\uff09\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u3059\u3079\u3066JUCE\u306b\u540c\u68b1\u3055\u308c\u3066\u3044\u307e\u3059\uff08JUCE\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u9650\u308a\uff09\u3002"}),"\n",(0,i.jsx)(t.h1,{id:"create-an-audio-plug-in-project-with-the-projucer",children:"Create an audio plug-in project with the Projucer"}),"\n",(0,i.jsxs)(t.p,{children:["To create an audio plug-in with JUCE, create a new project in the Projucer and select ",(0,i.jsx)(t.strong,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3"})," as the project type. See ",(0,i.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})," if you don't know how to do that."]}),"\n",(0,i.jsx)(t.p,{children:"Projucer\u306e\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a\u306b\u304a\u3044\u3066\u3001\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30bf\u30a4\u30d7\u3084\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304cMIDI\u30ce\u30fc\u30c8\u3092\u53d7\u4fe1\u3059\u308b\u304b\u751f\u6210\u3059\u308b\u304b\u306a\u3069\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff08\u4ed6\u306b\u3082\u3044\u308d\u3044\u308d\u3042\u308a\u307e\u3059\uff09\u3002\u3053\u308c\u3089\u306e\u8a2d\u5b9a\u306f\u3044\u3064\u3067\u3082\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial we are creating a VST3 plug-in, so make sure that the ",(0,i.jsx)(t.strong,{children:"VST3"}),' setting is ticked in the "Plugin Formats" field. Then tick ',(0,i.jsx)(t.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3MIDI\u5165\u529b"})," and ",(0,i.jsx)(t.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3MIDI\u51fa\u529b"}),' in the "Plugin Characteristics" field below.']}),"\n",(0,i.jsxs)(t.p,{children:["That\u2019s all the config you need! Now click ",(0,i.jsx)(t.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3057\u3066IDE\u3067\u958b\u304f..."})," Your new project will open. Click the build button to verify that your plug-in builds and that everything has been set up correctly."]}),"\n",(0,i.jsx)(t.h1,{id:"set-up-plug-in-debugging-optional",children:"Set up plug-in debugging (optional)"}),"\n",(0,i.jsxs)(t.p,{children:["One of the challenges of building plug-ins is testing them. Thankfully, JUCE makes that easy, with a built-in plug-in host. To access the host go to ",(0,i.jsx)(t.code,{children:"extras/AudioPluginHost/"})," and open the ",(0,i.jsx)(t.code,{children:"\u30b8\u30e5\u30bb\u30fc\u30eb"})," file with the Projucer. Click ",(0,i.jsx)(t.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3057\u3066IDE\u3067\u958b\u304f..."}),". Then inside your IDE build the project to create a binary (which on Mac OS X you will find at ",(0,i.jsx)(t.code,{children:"extras/AudioPluginHost/Builds/MacOSX/build"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u30fb\u30ce\u30fc\u30c9\u30fb\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(r.A,{src:"thttps://docs.juce.com/master/tutorial_create_projucer_basic_plugin_1.png",caption:"The JUCE plug-in host"}),"\n",(0,i.jsxs)(t.p,{children:['Pressing "Cmd-P" (or going to ',(0,i.jsx)(t.strong,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3 > \u5229\u7528\u53ef\u80fd\u306a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30ea\u30b9\u30c8\u3092\u7de8\u96c6..."}),") will allow you to update the list of plug-ins on your system (you will only have to do this once per project). Click the options button at the bottom of the pop-up window and click ",(0,i.jsx)(t.strong,{children:"\u65b0\u898f\u307e\u305f\u306f\u66f4\u65b0\u3055\u308c\u305fVST3\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30b9\u30ad\u30e3\u30f3..."}),". On macOS JUCE Audio plugins are automatically copied to ",(0,i.jsx)(t.code,{children:"~/Library/Audio/Plug-Ins/VST3"}),", and the host application automatically searches that folder, so you shouldn\u2019t need to manually specify where to look \u2014 just click ",(0,i.jsx)(t.strong,{children:"\u30b9\u30ad\u30e3\u30f3"}),". On Windows you will need to manually copy the VST3 you built from your project's build folder to the VST3 installation folder, which is typically ",(0,i.jsx)(t.code,{children:"C:\xa5Program Files\xa5Common Files\xa5VST3"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'\u30b9\u30ad\u30e3\u30f3\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u30ce\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u306b\u623b\u3063\u3066\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f "yourcompany "\u3068\u3044\u3046\u4f1a\u793e\u306e\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002\uff09MIDI\u5165\u529b\u3068Audio Input\u30ce\u30fc\u30c9\u304c\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5165\u529b\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u308c\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u51fa\u529b\u304cAudio Output\u30ce\u30fc\u30c9\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u308c\u308b\u3088\u3046\u306b\u3001\u30ce\u30fc\u30c9\u3092\u63a5\u7d9a\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_create_projucer_basic_plugin_2.png",caption:"Making connections in the JUCE plug-in host"}),"\n",(0,i.jsxs)(t.p,{children:["Double click your plugin to launch the GUI. The default plugin does nothing but show ",(0,i.jsx)(t.strong,{children:"\u30cf\u30ed\u30fc\u30fb\u30ef\u30fc\u30eb\u30c9"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can select ",(0,i.jsx)(t.strong,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3 > \u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30d0\u30a4\u30b9\u8a2d\u5b9a\u306e\u5909\u66f4..."})," to make sure your inputs and outputs all go to the right places. Hit ",(0,i.jsx)(t.strong,{children:"\u30d5\u30a1\u30a4\u30eb > \u4fdd\u5b58"})," to make it easy to retrieve this configuration."]}),"\n",(0,i.jsxs)(t.p,{children:["Used in this way the Plug-In Host gives you a very simple environment in which to test a plug-in, but there\u2019s more that we can do. We can configure the host to enable step-through debugging of your plugin. To do this on macOS go back to your plug-in project in Xcode, click ",(0,i.jsx)(t.strong,{children:"\u88fd\u54c1 > \u30b9\u30ad\u30fc\u30e0 > \u30b9\u30ad\u30fc\u30e0\u3092\u7de8\u96c6..."}),", then under ",(0,i.jsx)(t.strong,{children:"\u8d70\u308b"})," select ",(0,i.jsx)(t.strong,{children:"\u305d\u306e\u4ed6..."})," from the ",(0,i.jsx)(t.strong,{children:"\u5b9f\u884c\u53ef\u80fd"})," dropdown and locate ",(0,i.jsx)(t.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30db\u30b9\u30c8.app"}),". Make sure ",(0,i.jsx)(t.strong,{children:"\u30c7\u30d0\u30c3\u30b0\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb"}),' is ticked. In Visual Studio on Windows you should go to the properties page of the VST3 build target, select the "Debugging" pane, then set the path to the AudioPluginHost executable in the "Command" field.']}),"\n",(0,i.jsx)(t.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u81ea\u52d5\u7684\u306b\u30db\u30b9\u30c8\u304c\u8d77\u52d5\u3057\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u30db\u30b9\u30c8\u5185\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u3066\u30b9\u30c6\u30c3\u30d7\u30b9\u30eb\u30fc\u30c7\u30d0\u30c3\u30b0\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h1,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["Now you are ready and good to go to code an audio plug-in that actually does some audio. Read on in ",(0,i.jsx)(t.a,{href:"../tutorial_code_basic_plugin/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c82: \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.p,{children:["To build AAX plug-ins (for Pro Tools) you will need to contact Avid for a developer license in order to access their SDK. If you do obtain access to the AAX SDK you will notice that the Projucer has a path that you can set in its ",(0,i.jsx)(t.strong,{children:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30fb\u30d7\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," window."]}),"\n",(0,i.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u8aad\u3081\u3070\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3060\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u306b\u5fc5\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3001"}),"\n",(0,i.jsx)(t.li,{children:"JUCE\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u7528\u306eProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3001"}),"\n",(0,i.jsx)(t.li,{children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u306e\u305f\u3081\u306e\u30c7\u30d0\u30c3\u30b0\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_manage_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c82\uff1aProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7ba1\u7406\u3059\u308b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_code_basic_plugin/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u57fa\u672c\u7684\u306aAudio/MIDI\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f5c\u308b, \u30d1\u30fc\u30c82: \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_plugin_examples/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f8b"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../tutorial_audio_bus_layouts/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u9069\u5207\u306a\u30d0\u30b9\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(4848);function o(e){let{src:t,caption:n,alt:o,width:r,height:s}=e;return(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:t,alt:o||n,width:r,height:s}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(4848);function o(e){let{path:t}=e;return(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);