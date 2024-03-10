"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[1829],{2908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var o=t(4848),s=t(8453),r=t(3449),i=t(6378);const c={title:"Implement the OSC protocol in your app",sidebar_position:9},a="Tutorial: Implement the OSC protocol in your app",l={id:"utility-classes/tutorial_osc_sender_receiver",title:"Implement the OSC protocol in your app",description:"Learn how to harness the Open Sound Control protocol to connect several applications together over a network. Send and receive interaction data between applications.",source:"@site/docs/utility-classes/tutorial_osc_sender_receiver.mdx",sourceDirName:"utility-classes",slug:"/utility-classes/tutorial_osc_sender_receiver",permalink:"/juce-tutorial-ja/utility-classes/tutorial_osc_sender_receiver",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/utility-classes/tutorial_osc_sender_receiver.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Implement the OSC protocol in your app",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Package your app or plugin for distribution",permalink:"/juce-tutorial-ja/utility-classes/tutorial_app_plugin_packaging"}},d={},h=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2},{value:"OSC Sender Implementation",id:"osc-sender-implementation",level:2},{value:"OSC Receiver Implementation",id:"osc-receiver-implementation",level:2},{value:"OSC Monitor Implementation",id:"osc-monitor-implementation",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{path:"tutorial_osc_sender_receiver.html"}),"\n",(0,o.jsx)(n.h1,{id:"tutorial-implement-the-osc-protocol-in-your-app",children:"Tutorial: Implement the OSC protocol in your app"}),"\n",(0,o.jsx)(n.p,{children:"Learn how to harness the Open Sound Control protocol to connect several applications together over a network. Send and receive interaction data between applications."}),"\n",(0,o.jsx)(n.p,{children:"Level: Intermediate"}),"\n",(0,o.jsx)(n.p,{children:"Platforms: Windows, macOS, Linux, iOS, Android"}),"\n",(0,o.jsxs)(n.p,{children:["Classes: ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCSender",title:"An OSC message sender.",children:"OSCSender"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver",title:"A class for receiving OSC data.",children:"OSCReceiver"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver_1_1Listener",title:"A class for receiving OSC data from an OSCReceiver.",children:"OSCReceiver::Listener"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver_1_1ListenerWithOSCAddress",title:"A class for receiving only those OSC messages from an OSCReceiver that match a given OSC address.",children:"OSCReceiver::ListenerWithOSCAddress"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCMessage",title:"An OSC Message.",children:"OSCMessage"}),", ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCBundle",title:"An OSC bundle.",children:"OSCBundle"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,o.jsx)(n.p,{children:"There are several demo projects to accompany this tutorial. Download links to these projects are provided in the relevant sections of the tutorial."}),"\n",(0,o.jsxs)(n.p,{children:["If you need help with this step in each of these sections, see ",(0,o.jsx)(n.a,{href:"../tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,o.jsx)(n.h1,{id:"the-demo-projects",children:"The demo projects"}),"\n",(0,o.jsx)(n.p,{children:"The demo projects provided with this tutorial present different applications necessary for OSC interactions. In \u6982\u8981, these applications are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"OSC Sender: The sender application contains a rotary knob and sends information out to other instances."}),"\n",(0,o.jsx)(n.li,{children:"OSC Receiver: The receiver application connects to the sender instance and receives the information to process and display."}),"\n",(0,o.jsx)(n.li,{children:"OSC Monitor: The monitor application also connects to the sender instance but monitors and logs the interactions more precisely."}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"Only one sender and one receiver/monitor application should be open at the same time for this tutorial to function properly."}),(0,o.jsx)(n.p,{children:"The code presented here is broadly similar to the OSC demo apps from the JUCE Examples."})]}),"\n",(0,o.jsx)(n.h1,{id:"osc-sender",children:"OSC Sender"}),"\n",(0,o.jsxs)(n.p,{children:["Download the demo project for this section here: ",(0,o.jsx)(n.a,{href:"/tutorials/PIPs/OSCSenderTutorial.zip",children:"PIP"})," | ",(0,o.jsx)(n.a,{href:"/tutorials/ZIPs/OSCSenderTutorial.zip",children:"ZIP"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsx)(n.p,{children:"When completed, the OSC sender application will display a single rotary knob that we can interact with when launched:"}),"\n",(0,o.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_osc_sender_receiver_screenshot1.png",caption:"OSC sender app window"}),"\n",(0,o.jsx)(n.h2,{id:"osc-sender-implementation",children:"OSC Sender Implementation"}),"\n",(0,o.jsx)(n.p,{children:"Let's start by implementing the sender application."}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"MainContentComponent"})," class, start by declaring private member variables for this application like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    juce::Slider rotaryKnob;    // [1]\n    juce::OSCSender sender;     // [2]\n \n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add a ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"Slider"})," object to capture user interactions [1] and an ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCSender",title:"An OSC message sender.",children:"OSCSender"})," object to connect to a receiver later on [2]."]}),"\n",(0,o.jsx)(n.p,{children:"In the class constructor, set the slider parameters and attempt to connect to the network like follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    MainContentComponent()\n    {\n        rotaryKnob.setRange (0.0, 1.0);\n        rotaryKnob.setSliderStyle (juce::Slider::RotaryVerticalDrag);\n        rotaryKnob.setTextBoxStyle (juce::Slider::TextBoxBelow, true, 150, 25);\n        rotaryKnob.setBounds (10, 10, 180, 180);\n        addAndMakeVisible (rotaryKnob);             // [3]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'        // specify here where to send OSC messages to: host URL and UDP port number\n        if (! sender.connect ("127.0.0.1", 9001))   // [4]\n            showConnectionErrorMessage ("Error: could not connect to UDP port 9001.");\n \n        setSize (200, 200);\n    }\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["[3]: Set the range, style and bounds of the slider and add the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"Component"})," to this class."]}),"\n",(0,o.jsxs)(n.li,{children:["[4]: Here we attempt to connect to the ",(0,o.jsx)(n.strong,{children:"localhost"}),' or IP address "127.0.0.1" on UDP port number 9001 by calling the ',(0,o.jsx)(n.code,{children:"connect()"})," function on the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCSender",title:"An OSC message sender.",children:"OSCSender"})," object. If the connection fails, we call the private function ",(0,o.jsx)(n.code,{children:"showConnectionErrorMessage()"})," declared later to display the error message to the user."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"For the purpose of this tutorial, we connect to the local network of our development machine on an arbitrary port number that we specify later on in the receiver."})}),"\n",(0,o.jsxs)(n.p,{children:["Next, implement the ",(0,o.jsx)(n.a,{href:"classSlider.html#a680d007f6a824a28a60aa05b4045e794",title:"You can assign a lambda to this callback object to have it called when the slider value is changed.",children:"Slider::onValueChange"})," callback for the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"Slider"})," object to send the OSC message to the receiver application like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'        rotaryKnob.onValueChange = [this]\n        {\n            // create and send an OSC message with an address and a float value:\n            if (! sender.send ("/juce/rotaryknob", (float) rotaryKnob.getValue()))\n                showConnectionErrorMessage ("Error: could not send OSC message.");\n        };\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the lambda function, send the OSC message using the ",(0,o.jsx)(n.code,{children:"send()"})," function on the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCSender",title:"An OSC message sender.",children:"OSCSender"}),' object with the address and the rotary knob value [5]. The address provided here as "/juce/rotaryknob" allows us to classify messages in the receiver later on. If the message fails to send, we call the same helper function ',(0,o.jsx)(n.code,{children:"showConnectionErrorMessage()"})," to display the error."]}),"\n",(0,o.jsxs)(n.p,{children:["We implement this function by displaying the error text in a dialog box asynchronously using the function ",(0,o.jsx)(n.code,{children:'[AlertWindow::showMessageBoxAsync()](classAlertWindow.html#abf9c608d6e03ddf828fa9629cff1418b "Shows a dialog box that just has a message and a single button to get rid of it.")'}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    void showConnectionErrorMessage (const juce::String& messageText)\n    {\n        juce::AlertWindow::showMessageBoxAsync (juce::AlertWindow::WarningIcon,\n                                                "Connection error",\n                                                messageText,\n                                                "OK");\n    }\n'})}),"\n",(0,o.jsx)(n.p,{children:"The sender implementation is now complete."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The source code for this modified version of the code can be found in the ",(0,o.jsx)(n.code,{children:"OSCSenderTutorial_02.h"})," file of the demo project."]})}),"\n",(0,o.jsx)(n.h1,{id:"osc-receiver",children:"OSC Receiver"}),"\n",(0,o.jsxs)(n.p,{children:["Download the demo project for this section here: ",(0,o.jsx)(n.a,{href:"/tutorials/PIPs/OSCReceiverTutorial.zip",children:"PIP"})," | ",(0,o.jsx)(n.a,{href:"/tutorials/ZIPs/OSCReceiverTutorial.zip",children:"ZIP"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsx)(n.p,{children:"When completed, the OSC receiver application will display a single rotary knob that we cannot interact with when launched:"}),"\n",(0,o.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_osc_sender_receiver_screenshot2.png",caption:"OSC receiver app window"}),"\n",(0,o.jsx)(n.h2,{id:"osc-receiver-implementation",children:"OSC Receiver Implementation"}),"\n",(0,o.jsxs)(n.p,{children:["To implement the receiver, simply declare a ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"Slider"})," object in ",(0,o.jsx)(n.code,{children:"MainContentComponent"})," class to reflect the changes made with the sender rotary knob:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"    //==============================================================================\n    juce::Slider rotaryKnob;\n \n    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainContentComponent)\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Instead of declaring an ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCSender",title:"An OSC message sender.",children:"OSCSender"})," object as a member like in the sender application, we inherit this time from ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver",title:"A class for receiving OSC data.",children:"OSCReceiver"})," to implement the MainContentComponent as a subclass [1]:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class MainContentComponent   : public juce::Component,\n                               private juce::OSCReceiver, // [1]\n                               private juce::OSCReceiver::ListenerWithOSCAddress // [2]\n{\npublic:\n"})}),"\n","\n","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    MainContentComponent()\n    {\n        rotaryKnob.setRange (0.0, 1.0);\n        rotaryKnob.setSliderStyle (juce::Slider::RotaryVerticalDrag);\n        rotaryKnob.setTextBoxStyle (juce::Slider::TextBoxBelow, true, 150, 25);\n        rotaryKnob.setBounds (10, 10, 180, 180);\n        rotaryKnob.setInterceptsMouseClicks (false, false);\n        addAndMakeVisible (rotaryKnob);\n \n        // specify here on which UDP port number to receive incoming OSC messages\n        if (! connect (9001))                       // [3]\n            showConnectionErrorMessage ("Error: could not connect to UDP port 9001.");\n \n        // tell the component to listen for OSC messages matching this address:\n        addListener (this, "/juce/rotaryknob");     // [4]\n \n        setSize (200, 200);\n    }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["// As a subclass to ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver",title:"A class for receiving OSC data.",children:"OSCReceiver"}),", directly connect to the correct port number to receive messages [3] and register this class as a listener to itself by providing the address to listen to [4]."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Make sure that the port number and the OSC address match with the sender application."})}),"\n",(0,o.jsxs)(n.p,{children:["When an ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCMessage",title:"An OSC Message.",children:"OSCMessage"})," object is received, the ",(0,o.jsx)(n.code,{children:"oscMessageReceived()"})," callback function is called:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    void oscMessageReceived (const juce::OSCMessage& message) override\n    {\n        if (message.size() == 1 && message[0].isFloat32())                              // [5]\n            rotaryKnob.setValue (juce::jlimit (0.0f, 10.0f, message[0].getFloat32()));  // [6]\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Override this function by first checking the size of the message and the value type [5]. Then set the value of the rotary knob by making sure that the range conforms to the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classSlider",title:"A slider control for changing a value.",children:"Slider"})," range [6]."]}),"\n",(0,o.jsx)(n.p,{children:"Implement the same error logging function as the sender application in case the connection fails:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    void showConnectionErrorMessage (const juce::String& messageText)\n    {\n        juce::AlertWindow::showMessageBoxAsync (juce::AlertWindow::WarningIcon,\n                                                "Connection error",\n                                                messageText,\n                                                "OK");\n    }\n'})}),"\n",(0,o.jsx)(n.p,{children:"You should now be able to control the receiver knob by moving the sender knob when both applications are launched."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The source code for this modified version of the code can be found in the ",(0,o.jsx)(n.code,{children:"OSCReceiverTutorial_02.h"})," file of the demo project."]})}),"\n",(0,o.jsx)(n.h1,{id:"osc-monitor",children:"OSC Monitor"}),"\n",(0,o.jsxs)(n.p,{children:["Download the demo project for this section here: ",(0,o.jsx)(n.a,{href:"/tutorials/PIPs/OSCMonitorTutorial.zip",children:"PIP"})," | ",(0,o.jsx)(n.a,{href:"/tutorials/ZIPs/OSCMonitorTutorial.zip",children:"ZIP"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,o.jsx)(n.p,{children:"When completed, the OSC monitor application will display a window that logs the interactions. When first launched without a sender instance, the monitor application cannot connect and the window should look something like this:"}),"\n",(0,o.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_osc_sender_receiver_screenshot3.png",caption:"OSC monitor app window"}),"\n",(0,o.jsx)(n.p,{children:"If launched while a sender instance is running, the monitor application will be able to connect to it and the window should look something like this:"}),"\n",(0,o.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_osc_sender_receiver_screenshot4.png",caption:"OSC monitor app window"}),"\n",(0,o.jsx)(n.h2,{id:"osc-monitor-implementation",children:"OSC Monitor Implementation"}),"\n",(0,o.jsxs)(n.p,{children:["Let's implement a different type of receiver that displays the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCMessage",title:"An OSC Message.",children:"OSCMessage"})," objects as text."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"MainContentComponent"})," class, we can see that the class inherits from the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver_1_1Listener",title:"A class for receiving OSC data from an OSCReceiver.",children:"OSCReceiver::Listener"})," class [1]. Notice that we do not inherit from ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver_1_1ListenerWithOSCAddress",title:"A class for receiving only those OSC messages from an OSCReceiver that match a given OSC address.",children:"OSCReceiver::ListenerWithOSCAddress"})," as we want to receive all the messages sent regardless of the address:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"class MainContentComponent   : public juce::Component,\n                               private juce::OSCReceiver::Listener // [1]\n{\npublic:\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Declare OSCLogListBox and ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver",title:"A class for receiving OSC data.",children:"OSCReceiver"})," objects as private member variables [2] and define a temporary int variable to store the port number [3] as shown below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    OSCLogListBox oscLogListBox;        // [2]\n    juce::OSCReceiver oscReceiver;\n \n    int currentPortNumber = -1;         // [3]\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the constructor, set corresponding parameters as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    MainContentComponent()\n    {\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"        oscLogListBox.setBounds (0, 60, 700, 340);  // [4]\n        addAndMakeVisible (oscLogListBox);\n \n        oscReceiver.addListener (this);             // [5]\n        oscReceiver.registerFormatErrorHandler ([this] (const char* data, int dataSize) // [6]\n                                                {\n                                                    oscLogListBox.addInvalidOSCPacket (data, dataSize);\n                                                });\n \n        setSize (700, 400);\n    }\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["[4]: Set the bounds to the OSCLogListBox and make the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComponent",title:"The base class for all JUCE user-interface objects.",children:"Component"})," visible."]}),"\n",(0,o.jsxs)(n.li,{children:["[5]: Add this class as a listener to the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver",title:"A class for receiving OSC data.",children:"OSCReceiver"})," object to receive callbacks."]}),"\n",(0,o.jsxs)(n.li,{children:["[6]: Install a custom error handler format on the ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCReceiver",title:"A class for receiving OSC data.",children:"OSCReceiver"})," by using a lambda function. Here we provide a pointer to the data that failed to parse and its size to the OSCLogListBox object."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When a button is clicked on the user interface of the monitor application, we call the corresponding function that we implement in the next step."}),"\n",(0,o.jsxs)(n.p,{children:['If the user clicks on the "connect" button, it should connect/disconnect depending on the application state [7]. In addition, every time the "connect" button is pressed, we call the ',(0,o.jsx)(n.code,{children:"updateConnectionStatusLabel()"})," helper function [8] as shown here:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    void connectButtonClicked()\n    {\n        if (! isConnected())            // [7]\n            connect();\n        else\n            disconnect();\n \n        updateConnectionStatusLabel();  // [8]\n    }\n"})}),"\n",(0,o.jsx)(n.p,{children:"To update the status label, simply change the text and colour depending on the connection state as described below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    void updateConnectionStatusLabel()\n    {\n        juce::String text = "Status: ";\n \n        if (isConnected())\n            text += "Connected to UDP port " + juce::String (currentPortNumber);\n        else\n            text += "Disconnected";\n \n        auto textColour = isConnected() ? juce::Colours::green : juce::Colours::red;\n'})}),"\n",(0,o.jsx)(n.p,{children:"To determine the connection state, we check whether the port number was changed from its default value of -1:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    bool isConnected() const\n    {\n        return currentPortNumber != -1;\n    }\n"})}),"\n",(0,o.jsx)(n.p,{children:'Otherwise, when the user presses the "clear" button, simply send a clear instruction to the OSCLogListBox and reset the screen log:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    void clearButtonClicked()\n    {\n        oscLogListBox.clear();\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To connect to the sender application, let's implement the ",(0,o.jsx)(n.code,{children:"connect()"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    void connect()\n    {\n        auto portToConnect = portNumberField.getText().getIntValue();   // [9]\n \n        if (! isValidOscPort (portToConnect))                           // [10]\n        {\n            handleInvalidPortNumberEntered();\n            return;\n        }\n \n        if (oscReceiver.connect (portToConnect))                        // [11]\n        {\n            currentPortNumber = portToConnect;\n            connectButton.setButtonText ("Disconnect");\n        }\n        else                                                            // [12]\n        {\n            handleConnectError (portToConnect);\n        }\n    }\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"[9]: Convert the port number text to an int value and store it in a temporary variable."}),"\n",(0,o.jsxs)(n.li,{children:["[10]: If the port number is invalid, we display a error message using the ",(0,o.jsx)(n.code,{children:"handleInvalidPortNumberEntered()"})," helper function."]}),"\n",(0,o.jsx)(n.li,{children:'[11]: Otherwise, this means that the port number is valid and we can attempt to connect. If the connection is successful, we update the temporary port number variable to the correct value and change the "connect" button text.'}),"\n",(0,o.jsxs)(n.li,{children:["[12]: If the connection fails, call the corresponding ",(0,o.jsx)(n.code,{children:"handleConnectError()"})," helper function to display the error."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In order to verify that the port number is valid, check if the range corresponds to 1 .. 65535 inclusive:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    bool isValidOscPort (int port) const\n    {\n        return port > 0 && port < 65536;\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:['To disconnect from the network, check if the disconnection was successful and if so, reset the port number to -1 and change the "connect" button text [13]. Otherwise, call the ',(0,o.jsx)(n.code,{children:"handleDisconnectError()"})," helper function [14]:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    void disconnect()\n    {\n        if (oscReceiver.disconnect())   // [13]\n        {\n            currentPortNumber = -1;\n            connectButton.setButtonText ("Connect");\n        }\n        else\n        {\n            handleDisconnectError();    // [14]\n        }\n    }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["When an ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCMessage",title:"An OSC Message.",children:"OSCMessage"})," is received, the following callback function is called and we transfer the content of the message to the OSCLogListBox:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    void oscMessageReceived (const juce::OSCMessage& message) override\n    {\n        oscLogListBox.addOSCMessage (message);\n    }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If an ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classOSCBundle",title:"An OSC bundle.",children:"OSCBundle"})," is received, a different callback function is called and we transfer the content of the bundle to the OSCLogListBox:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    void oscBundleReceived (const juce::OSCBundle& bundle) override\n    {\n        oscLogListBox.addOSCBundle (bundle);\n    }\n"})}),"\n",(0,o.jsx)(n.p,{children:"Complete the implementation by showing message box for each type of error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    //==============================================================================\n    void handleConnectError (int failedPort)\n    {\n        juce::AlertWindow::showMessageBoxAsync (juce::AlertWindow::WarningIcon,\n                                                "OSC Connection error",\n                                                "Error: could not connect to port " + juce::String (failedPort),\n                                                "OK");\n    }\n \n    //==============================================================================\n    void handleDisconnectError()\n    {\n        juce::AlertWindow::showMessageBoxAsync (juce::AlertWindow::WarningIcon,\n                                                "Unknown error",\n                                                "An unknown error occured while trying to disconnect from UDP port.",\n                                                "OK");\n    }\n \n    //==============================================================================\n    void handleInvalidPortNumberEntered()\n    {\n        juce::AlertWindow::showMessageBoxAsync (juce::AlertWindow::WarningIcon,\n                                                "Invalid port number",\n                                                "Error: you have entered an invalid UDP port number.",\n                                                "OK");\n    }\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now when the sender rotary knob is interacted with, the monitor application will log all the messages received and the window should look something like this:"}),"\n",(0,o.jsx)(r.A,{src:"https://docs.juce.com/master/tutorial_osc_sender_receiver_screenshot5.png",caption:"OSC monitor app window"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The source code for this modified version of the code can be found in the ",(0,o.jsx)(n.code,{children:"OSCMonitorTutorial_02.h"})," file of the demo project."]})}),"\n",(0,o.jsxs)(n.p,{children:["Modify the sender and receiver applications to handle different OSC messages using other GUI components such as ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classToggleButton",title:"A button that can be toggled on/off.",children:"ToggleButton"})," or ",(0,o.jsx)(n.a,{href:"https://docs.juce.com/master/classComboBox",title:"A component that lets the user choose from a drop-down list of choices.",children:"ComboBox"})," objects."]}),"\n",(0,o.jsx)(n.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we have learnt how to implement the OSC protocol to send information between application instances. In particular, we have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Sent OSC messages using a rotary knob in the sender application."}),"\n",(0,o.jsx)(n.li,{children:"Connected to the receiver application and handled the corresponding messages."}),"\n",(0,o.jsx)(n.li,{children:"Displayed the OSC interactions in a verbose manner using the monitor application."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_slider_values/",children:"Tutorial: The Slider class"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../tutorial_look_and_feel_customisation/",children:"Tutorial: Customise the look and feel of your app"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3449:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(4848);function s(e){let{src:n,caption:t,alt:s,width:r,height:i}=e;return(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:n,alt:s||t,width:r,height:i}),(0,o.jsx)("figcaption",{children:(0,o.jsx)("b",{children:t})})]})}},6378:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(4848);function s(e){let{path:n}=e;return(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://docs.juce.com/master/"+n,children:"\ud83d\udcda Source Page"})})}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);