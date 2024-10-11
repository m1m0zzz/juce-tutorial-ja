"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[4358],{8197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var a=n(4848),s=n(8453),o=n(3449),r=n(6378);const i={title:"Using an UndoManager with a ValueTree",sidebar_position:5},c="Tutorial: Using an UndoManager with a ValueTree",d={id:"utility-classes/tutorial_undo_manager_value_tree",title:"Using an UndoManager with a ValueTree",description:"Implement undo/redo actions in your applications. Easily restore previous intermediate states with UndoableAction objects and learn how to group undoable actions into transactions.",source:"@site/docs/utility-classes/tutorial_undo_manager_value_tree.mdx",sourceDirName:"utility-classes",slug:"/utility-classes/tutorial_undo_manager_value_tree",permalink:"/juce-tutorial-ja/utility-classes/tutorial_undo_manager_value_tree",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/utility-classes/tutorial_undo_manager_value_tree.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Using an UndoManager with a ValueTree",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"The ValueTree class",permalink:"/juce-tutorial-ja/utility-classes/tutorial_value_tree"},next:{title:"App analytics collection",permalink:"/juce-tutorial-ja/utility-classes/tutorial_analytics_collection"}},l={},h=[{value:"\u306f\u3058\u3081\u308b",id:"\u306f\u3058\u3081\u308b",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{path:"tutorial_undo_manager_value_tree"}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"tutorial-using-an-undomanager-with-a-valuetree",children:"Tutorial: Using an UndoManager with a ValueTree"})}),"\n",(0,a.jsxs)(t.p,{children:["Implement undo/redo actions in your applications. Easily restore previous intermediate states with ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoableAction",title:"Used by the UndoManager class to store an action which can be done and undone.",children:"UndoableAction"})," objects and learn how to group undoable actions into transactions."]}),"\n",(0,a.jsx)(t.p,{children:"Level: Intermediate"}),"\n",(0,a.jsx)(t.p,{children:"Platforms: Windows, macOS, Linux"}),"\n",(0,a.jsxs)(t.p,{children:["Classes: ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoableAction",title:"Used by the UndoManager class to store an action which can be done and undone.",children:"UndoableAction"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTreeView",title:"A tree-view component.",children:"TreeView"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTreeViewItem",title:"An item in a TreeView.",children:"TreeViewItem"})]}),"\n",(0,a.jsx)(t.h2,{id:"\u306f\u3058\u3081\u308b",children:"\u306f\u3058\u3081\u308b"}),"\n",(0,a.jsxs)(t.p,{children:["This tutorial assumes basic understanding of ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," objects as explained in ",(0,a.jsx)(t.a,{href:"../tutorial_value_tree/",children:"Tutorial: The ValueTree class"}),". If you haven't done so already, you should read that tutorial first."]}),"\n",(0,a.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,a.jsx)(t.a,{href:"/tutorials/PIPs/UndoManagerValueTreeTutorial.zip",children:"PIP"})," | ",(0,a.jsx)(t.a,{href:"/tutorials/ZIPs/UndoManagerValueTreeTutorial.zip",children:"ZIP"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,a.jsxs)(t.p,{children:["If you need help with this step, see ",(0,a.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,a.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,a.jsxs)(t.p,{children:["The demo project illustrates the use of the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," class in conjunction with ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," objects to show how easily past history can be restored. It presents the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," data as a tree structure using the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTreeView",title:"A tree-view component.",children:"TreeView"})," and ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTreeViewItem",title:"An item in a TreeView.",children:"TreeViewItem"})," classes. If you build and run the project, you should see something like this:"]}),"\n",(0,a.jsx)(o.A,{src:"https://docs.juce.com/master/tutorial_undo_manager_value_tree_screenshot1.png",caption:"The demo project application window"}),"\n",(0,a.jsxs)(t.p,{children:["At the moment, we can drag and drop ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," nodes and change the hierarchy of the data structure. We can also expand and collapse children but we cannot undo and redo our changes. Let's try to implement that functionality using the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," class."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The code presented here is broadly similar to the ",(0,a.jsx)(t.strong,{children:"ValueTreesDemo"})," from the JUCE Demo."]})}),"\n",(0,a.jsx)(t.h1,{id:"adding-undoredo-buttons",children:"Adding Undo/Redo buttons"}),"\n",(0,a.jsxs)(t.p,{children:["Let's first add two ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextButton",title:"A button that uses the standard lozenge-shaped background with a line of text on it.",children:"TextButton"})," objects to our user interface to allow undo and redo functionality. You should be familiar with lambda functions for this section and if you need help with these steps, you can refer to the ",(0,a.jsx)(t.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"})," tutorial."]}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.code,{children:"MainContentComponent"})," class, declare ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextButton",title:"A button that uses the standard lozenge-shaped background with a line of text on it.",children:"TextButton"})," variables for each button [1]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    juce::TreeView tree;\n    juce::TextButton undoButton, redoButton;    // [1]\n    std::unique_ptr rootItem;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the constructor member initialisation list, set the text for the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextButton",title:"A button that uses the standard lozenge-shaped background with a line of text on it.",children:"TextButton"})," objects [2]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'    MainContentComponent()\n        : undoButton ("Undo"),\n          redoButton ("Redo")   // [2]\n    {\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, make the buttons visible [3] and prepare the lambda functions to be assigned to the ",(0,a.jsx)(t.a,{href:"classButton.html#a30b76ab312dc7f66e67596ae20540ec2",title:"You can assign a lambda to this callback object to have it called when the button is clicked.",children:"Button::onClick"})," helper objects [4]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"//...\naddAndMakeVisible (undoButton);\naddAndMakeVisible (redoButton);          // [3]\nundoButton.onClick = [this] {  };\nredoButton.onClick = [this] {  };        // [4]\n \nsetSize (600, 400);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can then set the bounds for the buttons in the ",(0,a.jsx)(t.code,{children:"resized()"})," method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void resized() override\n    {\n        // This is called when the MainContentComponent is resized.\n        // If you add any child components, this is where you should\n        // update their positions.\n \n        auto r = getLocalBounds();\n \n        auto buttons = r.removeFromBottom (20);\n        undoButton.setBounds (buttons.removeFromLeft (100));\n        redoButton.setBounds (buttons.removeFromLeft (100));\n \n        tree.setBounds (r);\n    }\n"})}),"\n",(0,a.jsx)(t.h1,{id:"passing-the-undomanager-instance-as-an-argument",children:"Passing the UndoManager instance as an argument"}),"\n",(0,a.jsxs)(t.p,{children:["Since the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," class handles undo/redo behaviour automatically, we need only pass the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," instance as a parameter to register ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoableAction",title:"Used by the UndoManager class to store an action which can be done and undone.",children:"UndoableAction"})," objects. To implement this, first declare an instance of the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," class [1]:"]}),"\n",(0,a.jsxs)(t.p,{children:["Then assign the functions to be called when the buttons are clicked in order to handle the corresponding undo/redo behaviour. In the lambda functions, respectively call ",(0,a.jsx)(t.code,{children:'[UndoManager::undo()](classUndoManager.html#a39f45c284e8d0df1a0d378e676246931 "Tries to roll-back the last transaction.")'})," and ",(0,a.jsx)(t.code,{children:'[UndoManager::redo()](classUndoManager.html#aaea507a3b9eaea3360c0e393edf69ccb "Tries to redo the last transaction that was undone.")'})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"        addAndMakeVisible (undoButton);\n        addAndMakeVisible (redoButton);                         // [3]\n        undoButton.onClick = [this] { undoManager.undo(); };\n        redoButton.onClick = [this] { undoManager.redo(); };    // [4]\n \n        setSize (600, 400);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.code,{children:"ValueTreeItem"})," class, we also keep a reference to the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," instance [2]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"private:\n    juce::ValueTree tree;\n    juce::UndoManager& undoManager; // [2]\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the member initialisation list of the class constructor, assign the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," reference [3]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    ValueTreeItem (const juce::ValueTree& v, juce::UndoManager& um)\n        : tree (v), undoManager (um)    // [3]\n    {\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Whenever a sub-item of ValueTreeItem is created recursively, we need to pass the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," instance [4]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void refreshSubItems()\n    {\n        clearSubItems();\n \n        for (auto i = 0; i < tree.getNumChildren(); ++i)\n            addSubItem (new ValueTreeItem (tree.getChild (i), undoManager));    // [4]\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can now instantiate the root ValueTreeItem by passing the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," instance [5] in the ",(0,a.jsx)(t.code,{children:"MainContentComponent"})," class:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"        tree.setDefaultOpenness (true);\n        tree.setMultiSelectEnabled (true);\n        rootItem.reset (new ValueTreeItem (createRootValueTree(), undoManager));    // [5]\n        tree.setRootItem (rootItem.get());\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now there are three different methods that need to be updated to register the changes we perform on the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTreeView",title:"A tree-view component.",children:"TreeView"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void itemDropped (const juce::DragAndDropTarget::SourceDetails&, int insertIndex) override\n    {\n        juce::OwnedArray selectedTrees;\n        getSelectedTreeViewItems (*getOwnerView(), selectedTrees);\n \n        moveItems (*getOwnerView(), selectedTrees, tree, insertIndex, undoManager);     // [1]\n    }\n \n    static void moveItems (juce::TreeView& treeView, const juce::OwnedArray& items,\n                           juce::ValueTree newParent, int insertIndex, juce::UndoManager& undoManager)\n    {\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"                    v.getParent().removeChild (v, &undoManager);                        // [2]\n                    newParent.addChild (v, insertIndex, &undoManager);                  // [3]\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[1]: Whenever an item is drag and dropped, pass the undoManager to the static function that handles the move."}),"\n",(0,a.jsx)(t.li,{children:"[2]: We need to remove the child from the previous parent and register that action to the undoManager."}),"\n",(0,a.jsx)(t.li,{children:"[3]: We can then add the child to a new parent and register the new action to the undoManager."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["By passing the ",(0,a.jsx)(t.code,{children:"undoManager"})," reference to the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," functions ",(0,a.jsx)(t.code,{children:"addChild()"})," and ",(0,a.jsx)(t.code,{children:"removeChild()"}),", we let the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," perform the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoableAction",title:"Used by the UndoManager class to store an action which can be done and undone.",children:"UndoableAction"})," for us by calling the ",(0,a.jsx)(t.code,{children:"perform()"})," function under the hood. We will cover ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoableAction",title:"Used by the UndoManager class to store an action which can be done and undone.",children:"UndoableAction"})," objects in a future tutorial."]}),"\n",(0,a.jsxs)(t.p,{children:["Display descriptions of stored undo and redo actions in ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classLabel",title:"A component that displays a text string, and can optionally become a text editor when clicked.",children:"Label"})," components next to their respective ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextButton",title:"A button that uses the standard lozenge-shaped background with a line of text on it.",children:"TextButton"})," objects using the ",(0,a.jsx)(t.code,{children:"getUndoDescription()"})," and ",(0,a.jsx)(t.code,{children:"getRedoDescription()"})," functions respectively."]}),"\n",(0,a.jsx)(t.h1,{id:"handle-events-as-transactions",children:"Handle events as transactions"}),"\n",(0,a.jsxs)(t.p,{children:["Another useful feature of the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," is its ability to group several actions together as a single undo/redo transaction. By calling the ",(0,a.jsx)(t.code,{children:"beginNewTransaction()"})," function on the ",(0,a.jsx)(t.code,{children:"undoManager"})," instance, all the calls to the ",(0,a.jsx)(t.code,{children:"perform()"})," function of the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," are grouped together until the next ",(0,a.jsx)(t.code,{children:"beginNewTransaction()"})," call."]}),"\n",(0,a.jsxs)(t.p,{children:["As an example, let's create a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTimer",title:"Makes repeated callbacks to a virtual method at a specified time interval.",children:"Timer"})," to call the ",(0,a.jsx)(t.code,{children:"beginNewTransaction()"})," function periodically and store groups of actions together as transactions. In the ",(0,a.jsx)(t.code,{children:"MainContentComponent"}),", inherit from the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTimer",title:"Makes repeated callbacks to a virtual method at a specified time interval.",children:"Timer"})," class to receive timer callbacks [1]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"class MainContentComponent   : public juce::Component,\n                               public juce::DragAndDropContainer,\n                               private juce::Timer      // [1]\n{\npublic:\n"})}),"\n",(0,a.jsx)(t.p,{children:"Declare the callback function in the corresponding header file [2]:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void timerCallback() override               // [2]\n    {\n        undoManager.beginNewTransaction();      // [4]\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"Start the timer in the constructor with the desired interval in milliseconds betwen transaction calls [3]:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"        startTimer (500);       // [3]\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, we can call the ",(0,a.jsx)(t.code,{children:"beginNewTransaction()"})," function on the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," in the timer callback [4]:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void timerCallback() override               // [2]\n    {\n        undoManager.beginNewTransaction();      // [4]\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"Implement transactions every five undo/redo actions instead of using a timer to separate groups of actions."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The source code for this modified version of the code can be found in the ",(0,a.jsx)(t.code,{children:"UndoManagerTutorial_02.h"})," file of the demo project."]})}),"\n",(0,a.jsx)(t.h1,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,a.jsx)(t.p,{children:"By completing this tutorial, you have learnt how to restore previous states of your application. In particular, we have:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Stored ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoableAction",title:"Used by the UndoManager class to store an action which can be done and undone.",children:"UndoableAction"})," objects into ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," objects."]}),"\n",(0,a.jsxs)(t.li,{children:["Passed an ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classUndoManager",title:"Manages a list of undo/redo commands.",children:"UndoManager"})," instance as a parameter to ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classValueTree",title:"A powerful tree structure that can be used to hold free-form data, and which can handle its own undo ...",children:"ValueTree"})," access functions."]}),"\n",(0,a.jsx)(t.li,{children:"Handled groups of undo/redo actions as transactions."}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"\u95a2\u9023\u9805\u76ee",children:"\u95a2\u9023\u9805\u76ee"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../tutorial_value_tree/",children:"Tutorial: The ValueTree class"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../tutorial_audio_processor_value_tree_state/",children:"Tutorial: Saving and loading your plug-in state"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(4848);function s(e){let{src:t,caption:n,alt:s,width:o,height:r}=e;return(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:t,alt:s||n,width:o,height:r}),(0,a.jsx)("figcaption",{children:(0,a.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(4848);function s(e){let{path:t}=e;return(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:`https://docs.juce.com/master/${t}.html`,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(6540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);