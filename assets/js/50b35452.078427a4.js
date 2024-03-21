"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[7659],{4456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(4848),o=t(8453),r=t(3449);t(6378);const s={title:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u5165\u9580",sidebar_position:1},d="\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u3092\u59cb\u3081\u3088\u3046",c={id:"mobile/tutorial_android_studio",title:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u5165\u9580",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE\u30d9\u30fc\u30b9\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306eAndroid Studio\u306e\u4f7f\u3044\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/mobile/tutorial_android_studio.mdx",sourceDirName:"mobile",slug:"/mobile/tutorial_android_studio",permalink:"/juce-tutorial-ja/mobile/tutorial_android_studio",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/mobile/tutorial_android_studio.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u5165\u9580",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mobile",permalink:"/juce-tutorial-ja/category/mobile"},next:{title:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u306e\u753b\u9762\u30b5\u30a4\u30ba\u306e\u7ba1\u7406",permalink:"/juce-tutorial-ja/mobile/tutorial_android_screen_sizes"}},l={},a=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"Installing Android Studio",id:"installing-android-studio",level:2},{value:"Installing additional SDKs",id:"installing-additional-sdks",level:2},{value:"Creating an Projucer project",id:"creating-an-projucer-project",level:2},{value:"Modifications to the application code",id:"modifications-to-the-application-code",level:2},{value:"Opening in Android Studio",id:"opening-in-android-studio",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u3092\u59cb\u3081\u3088\u3046",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9\u3092\u59cb\u3081\u3088\u3046"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001JUCE\u30d9\u30fc\u30b9\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306eAndroid Studio\u306e\u4f7f\u3044\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\uff1a\u521d\u7d1a"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff1aAndroid"}),"\n",(0,i.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Android Studio\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066JUCE\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h1,{id:"installing-the-tools-and-development-kits",children:"Installing the tools and development kits"}),"\n",(0,i.jsx)(n.p,{children:"Android\u7528\u306eJUCE\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u524d\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u6a19\u6e96\u30c4\u30fc\u30eb\u3001Android SDK\u3001Android NDK\uff08Native Development Kit\uff09\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"installing-android-studio",children:"Installing Android Studio"}),"\n",(0,i.jsxs)(n.p,{children:["Download Android Studio from the following URL: ",(0,i.jsx)(n.a,{href:"https://developer.android.com/sdk/index.html",children:"https://developer.android.com/sdk/index.html"})]}),"\n",(0,i.jsx)(n.p,{children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306f\u304b\u306a\u308a\u5927\u304d\u3044\u306e\u3067\u3001\u6642\u9593\u304c\u304b\u304b\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff08macOS\u3068Windows\u3067\u7d04700MB\uff09\u3002\u3053\u308c\u306f\u6700\u521d\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3060\u3051\u3067\u3001\u5f8c\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u9805\u76ee\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u5168\u4f53\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u3053\u3068\u3092\u899a\u609f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u958b\u59cb\u3057\u305f\u5f8c\u306b\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u306e\u300cAndroid Studio\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u300d\u30da\u30fc\u30b8\u306e\u6307\u793a\u306b\u3059\u3079\u3066\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u304a\u4f7f\u3044\u306eOS\u306b\u3088\u3063\u3066\u306f\u3001JDK\uff08Java Development Kit\uff09\u30927.0\u4ee5\u964d\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30d7\u30ed\u30bb\u30b9\u4e2d\uff08Windows\u306e\u5834\u5408\uff09\u3001\u307e\u305f\u306fAndroid Studio\u3092\u6700\u521d\u306b\u8d77\u52d5\u3057\u305f\u3068\u304d\uff08Mac OS X\u306e\u5834\u5408\uff09\u306b\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3088\u3046\u4fc3\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"Android Studio\u306e\u6a19\u6e96\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u884c\u3046\u3002Windows\u306e\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u3092\u4f7f\u3063\u3066\u884c\u3046\u304c\u3001Mac OS X\u306e\u5834\u5408\u306fAndroid Studio\u3092\u6700\u521d\u306b\u958b\u3044\u305f\u3068\u304d\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5b8c\u4e86\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot1.png",caption:"Use the standard install type (Mac OS X)"}),"\n",(0,i.jsx)(n.p,{children:"\u7269\u7406\u7684\u306aAndroid\u30c7\u30d0\u30a4\u30b9\u3092\u3044\u304f\u3064\u304b\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u3001\u4eee\u60f3\u30c7\u30d0\u30a4\u30b9\u3067\u30c6\u30b9\u30c8\u3059\u308b\u3068\u4fbf\u5229\u306a\u306e\u3067\u3001\u30d7\u30ed\u30f3\u30d7\u30c8\u304c\u8868\u793a\u3055\u308c\u305f\u3089\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot3.png",caption:"Install an Android Virtual Device (Mac OS X)](tutorial_android_studio_screenshot2.png) ![Install an Android Virtual Device (Windows)"}),"\n",(0,i.jsxs)(n.p,{children:["Keep clicking through the install process (clicking ",(0,i.jsx)(n.strong,{children:"\u6b21\u306e\u30da\u30fc\u30b8"}),") until it is finished."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-additional-sdks",children:"Installing additional SDKs"}),"\n",(0,i.jsxs)(n.p,{children:["Now that Android Studio itself is installed we need some additional tools. In the ",(0,i.jsx)(n.strong,{children:"Android Studio\u3078\u3088\u3046\u3053\u305d"})," window, click the ",(0,i.jsx)(n.strong,{children:"\u8a2d\u5b9a"})," button in the bottom right corner."]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot4.png",caption:"Go to Configure (on both Mac OS X and Windows)"}),"\n",(0,i.jsxs)(n.p,{children:["Then click the ",(0,i.jsx)(n.strong,{children:"SDK\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"})," button."]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot5.png",caption:"Select the SDK Manager (on both Mac OS X and Windows)"}),"\n",(0,i.jsxs)(n.p,{children:["If you need other SDK Platforms, then you can select the ones you need in the ",(0,i.jsx)(n.strong,{children:"SDK\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"})," tab. The defaults should work fine for now."]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot6.png",caption:"Select the SDK platforms needed"}),"\n",(0,i.jsxs)(n.p,{children:["One more thing that we need is the ",(0,i.jsx)(n.em,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9NDK"}),". This is critical for JUCE to work with Android since it provides the C/C++ APIs for writing Android applications. You should make sure that CMake is installed, which is required to build the apps and LLDB for debugging C/C++ code. Note that these may be already installed. To install these, select the SDK Tools tab within the SDK Manager, select the items and press ",(0,i.jsx)(n.strong,{children:"\u5fdc\u52df\u3059\u308b"})," as shown in the following screenshot:"]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot7.png",caption:"Install the NDK and other tools"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure that at ",(0,i.jsx)(n.em,{children:"\u6700\u4f4e"})," the items that are shown selected in the screenshot above are selected on your system (on either Windows or Mac OS X). It is fine to install additional items if you wish. Click the ",(0,i.jsx)(n.strong,{children:"\u5fdc\u52df\u3059\u308b"})," button when you're done."]}),"\n",(0,i.jsx)(n.h1,{id:"using-the-projucer",children:"Using the Projucer"}),"\n",(0,i.jsxs)(n.p,{children:["Now that Android Studio, the Android SDKs, and the Android NDK are installed we can configure the Projucer to create JUCE-based Android Studio projects for us. (If you are not familiar with the Projucer, you may wish to refer to ",(0,i.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"}),".) To do this we need to know where the Android SDKs (and the NDK) are installed."]}),"\n",(0,i.jsxs)(n.p,{children:["The location of the Android SDK is shown at top of the ",(0,i.jsx)(n.strong,{children:"SDK\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"}),' window. The path will be something like this (where "username" is your user name):']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"C:\u25c6UsersUsernameAppAppData"})," (on Windows)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/\u30e6\u30fc\u30b6\u30fc\u540d/Library/Android/sdk"})," (on Mac OS X)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Copy this path from the ",(0,i.jsx)(n.strong,{children:"SDK\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"}),' window to your clipboard ("CMD-C" on Mac OS X or "Ctrl-C" on Windows)']}),"\n",(0,i.jsxs)(n.p,{children:["Open the Projucer application and navigate to menu item ",(0,i.jsx)(n.strong,{children:"Projucer > \u30b0\u30ed\u30fc\u30d0\u30eb\u691c\u7d22\u30d1\u30b9..."}),' Paste the path ("CMD-V" on Mac OS X or "Ctrl-V" on Windows) into the ',(0,i.jsx)(n.strong,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9SDK"}),' field. When you hit "Return" the text should be displayed in white text. This is shown in the following screenshot:']}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot8.png",caption:"Enter your path to the Android SDK (shown on Mac OS X)"}),"\n",(0,i.jsx)(n.p,{children:"SDK\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u3001\u307e\u305f\u306f\u6b63\u3057\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001Projucer\u306f\u5165\u529b\u3057\u305f\u30d1\u30b9\u3092\u8d64\u5b57\u3067\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["The NDK is found within the SDK in the ",(0,i.jsx)(n.code,{children:"ndk\u30d0\u30f3\u30c9\u30eb"})," directory. It will be something like this:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"C:\u25c6Usersusername \u25c6Appata \u25c6Local \u25c6Android \u25c6sdk \u25c6ndk-bundle"})," (on Windows)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/\u30e6\u30fc\u30b6\u30fc\u540d/Library/Android/sdk/ndk-bundle"})," (on Mac OS X)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Enter your SDK path, with the ",(0,i.jsx)(n.code,{children:"ndk\u30d0\u30f3\u30c9\u30eb"})," directory appended, into the ",(0,i.jsx)(n.strong,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9NDK"})," field within the ",(0,i.jsx)(n.strong,{children:"\u30b0\u30ed\u30fc\u30d0\u30eb\u691c\u7d22\u30d1\u30b9"})," window."]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot9.png",caption:"Enter your path to the Android NDK (shown on Mac OS X)"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u5834\u5408\u3082\u3001\u30d1\u30b9\u304c\u6b63\u3057\u304fNDK\u304c\u6b63\u3057\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308c\u3070\u767d\u3067\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff08\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u8d64\u3067\u8868\u793a\u3055\u308c\u307e\u3059\uff09\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-projucer-project",children:"Creating an Projucer project"}),"\n",(0,i.jsxs)(n.p,{children:["Now let's create a new project. Navigate to menu item ",(0,i.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb > \u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8..."})," Choose a ",(0,i.jsx)(n.strong,{children:"GUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," project type, choose a location for the project, and make sure that you check the ",(0,i.jsx)(n.strong,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9"})," target platform. This is shown in the following screenshot:"]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot10.png",caption:"Setting up a new Projucer project"}),"\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"\u4f5c\u6210..."})," button."]}),"\n",(0,i.jsxs)(n.p,{children:["Unless you installed all of the Android SDKs earlier, you will need to change the minimum SDK version supported in the Projucer project. Select the ",(0,i.jsx)(n.strong,{children:"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9"})," exporter in the left hand-column and find the ",(0,i.jsx)(n.strong,{children:"\u6700\u5c0fSDK\u30d0\u30fc\u30b8\u30e7\u30f3"})," field. We suggest entering a value between 23 and 27 as shown in the following screenshot:"]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot11.png",caption:"Setting the minimum SDK version"}),"\n",(0,i.jsx)(n.h2,{id:"modifications-to-the-application-code",children:"Modifications to the application code"}),"\n",(0,i.jsxs)(n.p,{children:["There is a minor change that you can make to the application code, to work well on Android devices, in terms of the screen layout. In the Projucer, select the ",(0,i.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb"})," tab and select the ",(0,i.jsx)(n.code,{children:"\u30e1\u30a4\u30f3.cpp"}),". Update the ",(0,i.jsx)(n.code,{children:"\u30e1\u30a4\u30f3\u30a6\u30a3\u30f3\u30c9\u30a6"})," constructor as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"//...\nMainWindow (juce::String name) : DocumentWindow (name\u3001\n                                                  juce::Colours::lightgrey\u3001\n                                                  DocumentWindow::allButtons)\n{\n    setUsingNativeTitleBar (true)\uff1b\n    setContentOwned (new MainContentComponent(), true)\uff1b\n \n    setFullScreen (true); // centerWithSize()\u3092\u547c\u3073\u51fa\u3059\u306e\u3067\u306f\u306a\u304f\u3001\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n    setVisible (true)\uff1b\n}\n//...\nDocumentWindow\u30bf\u30a4\u30c8\u30eb\u30d0\u30fc\u3068\u6700\u5927\u5316\u3001\u6700\u5c0f\u5316\u3001\u9589\u3058\u308b\u30dc\u30bf\u30f3\u3092\u6301\u3064\u30b5\u30a4\u30ba\u5909\u66f4\u53ef\u80fd\u306a\u30a6\u30a3\u30f3\u30c9\u30a6\u5b9a\u7fa9 juce_DocumentWindow.h:58\nnameint UnityEventModifiers const char * nameDefinition juce_UnityPluginInterface.h:195\nColours\u5b9a\u7fa9\u6e08\u307f\u306e\u540d\u524d\u4ed8\u304d\u30ab\u30e9\u30fc\u30bb\u30c3\u30c8\uff08\u4e3b\u306b\u6a19\u6e96\u7684\u306a HTML \u30ab\u30e9\u30fc\uff09\u5b9a\u7fa9 juce_Colours.h:37\n\u5b9a\u7fa9 juce_AudioWorkgroup_mac.h:24\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\uff08\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30fb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u4e00\u822c\u7684\u306a\uff09\u30a6\u30a3\u30f3\u30c9\u30a6\u5185\u3067\u306f\u306a\u304f\u3001\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u3067\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"opening-in-android-studio",children:"Opening in Android Studio"}),"\n",(0,i.jsxs)(n.p,{children:["You can now open the project in Android Studio by clicking the ",(0,i.jsx)(n.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3057\u3066IDE\u3067\u958b\u304f..."})," button in the Projucer. Android Studio should open and display this window:"]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot12.png",caption:"Opening the project in Android Studio"}),"\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"OK"}),' button and the project should import and open. If the project fails to compile, follow the instructions to install any additional SDKs. You may need to install an older version of the SDK for the project to compile. You should now be able to run the project from within Android Studio. Hit the "run" button:']}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot13.png",caption:"Hit the Run button"}),"\n",(0,i.jsxs)(n.p,{children:["Android Studio will ask you which device you want to use. As this is the first time you launch the app, you will need to create a virtual device to run it. Click the ",(0,i.jsx)(n.strong,{children:"\u65b0\u898f\u4eee\u60f3\u30c7\u30d0\u30a4\u30b9\u306e\u4f5c\u6210"})," button to set up a new device and select the device of your choice. You should now have a virtual device, so you can select it in the list and click the ",(0,i.jsx)(n.strong,{children:"OK"})," button. (If you have an Android device connected via USB you should also see it in that window.) This is shown in the following screenshot:"]}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot14.png",caption:"Running on a virtual device"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u8d77\u52d5\u3059\u308b\u306f\u305a\u3067\u3059\uff01\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3067\u3059\uff08\u3053\u308c\u306f\u30c7\u30d0\u30a4\u30b9\u3092\u6a2a\u5411\u304d\u306b\u56de\u8ee2\u3055\u305b\u305f\u72b6\u614b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\uff09\uff1a"}),"\n",(0,i.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_android_studio_screenshot15.png",caption:"Our Hello World! app on the device"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'\u4eee\u60f3\u30c7\u30d0\u30a4\u30b9\u3092\u56de\u8ee2\u3055\u305b\u308b\u306b\u306f\u3001"Control-F11 "\u3067\u53cd\u6642\u8a08\u56de\u308a\u306b\u3001"Control-F12 "\u3067\u6642\u8a08\u56de\u308a\u306b\u56de\u8ee2\u3055\u305b\u307e\u3059\u3002(Mac OS X\u3067\u306f "fn "\u30ad\u30fc\u3082\u62bc\u3057\u305f\u307e\u307e\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\u3002'})}),"\n",(0,i.jsx)(n.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u30c8\u30d4\u30c3\u30af\u3092\u53d6\u308a\u4e0a\u3052\u307e\u3057\u305f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Android Studio\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Android SDK\u3068Android NDK\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Android Studio\u7528\u306eProjucer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Projucer \u3067\u751f\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Android Studio \u3067\u958b\u304f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4eee\u60f3\uff08\u307e\u305f\u306f\u5b9f\uff09\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebProjucer\u30d1\u30fc\u30c81\uff1aProjucer\u3092\u59cb\u3081\u308b"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../tutorial_android_screen_sizes/",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30ebAndroid\u306e\u753b\u9762\u30b5\u30a4\u30ba\u3092\u7ba1\u7406\u3059\u308b"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3449:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(4848);function o(e){let{src:n,caption:t,alt:o,width:r,height:s}=e;return(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:n,alt:o||t,width:r,height:s}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("b",{children:t})})]})}},6378:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(4848);function o(e){let{path:n}=e;return(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:`https://docs.juce.com/master/${n}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);