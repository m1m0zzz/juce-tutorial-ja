"use strict";(self.webpackChunkjuce_tutorial_ja=self.webpackChunkjuce_tutorial_ja||[]).push([[4790],{4338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=n(4848),s=n(8453),i=n(3449),r=n(6378);const o={title:"File reading",sidebar_position:3},l="Tutorial: File reading",c={id:"utility-classes/tutorial_file_reading",title:"File reading",description:"Open and read data from text and binary files.",source:"@site/docs/utility-classes/tutorial_file_reading.mdx",sourceDirName:"utility-classes",slug:"/utility-classes/tutorial_file_reading",permalink:"/juce-tutorial-ja/utility-classes/tutorial_file_reading",draft:!1,unlisted:!1,editUrl:"https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/docs/utility-classes/tutorial_file_reading.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"File reading",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"The Random class",permalink:"/juce-tutorial-ja/utility-classes/tutorial_random"},next:{title:"The ValueTree class",permalink:"/juce-tutorial-ja/utility-classes/tutorial_value_tree"}},d={},h=[{value:"The File class",id:"the-file-class",level:2},{value:"The FilenameComponent class",id:"the-filenamecomponent-class",level:2},{value:"Reading a whole file into a string",id:"reading-a-whole-file-into-a-string",level:2},{value:"Reading a file line by line",id:"reading-a-file-line-by-line",level:2},{value:"Reading a file byte by byte",id:"reading-a-file-byte-by-byte",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{path:"tutorial_file_reading.html"}),"\n",(0,a.jsx)(t.h1,{id:"tutorial-file-reading",children:"Tutorial: File reading"}),"\n",(0,a.jsx)(t.p,{children:"Open and read data from text and binary files."}),"\n",(0,a.jsx)(t.p,{children:"Level: Beginner"}),"\n",(0,a.jsx)(t.p,{children:"Platforms: Windows, macOS, Linux"}),"\n",(0,a.jsxs)(t.p,{children:["Classes: ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextEditor",title:"An editable text box.",children:"TextEditor"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"String"}),", ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classMemoryBlock",title:"A class to hold a resizable block of raw data.",children:"MemoryBlock"})]}),"\n",(0,a.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsxs)(t.p,{children:["Download the demo project for this tutorial here: ",(0,a.jsx)(t.a,{href:"/tutorials/PIPs/FileReadingTutorial.zip",children:"PIP"})," | ",(0,a.jsx)(t.a,{href:"/tutorials/ZIPs/FileReadingTutorial.zip",children:"ZIP"}),". Unzip the project and open the first header file in the Projucer."]}),"\n",(0,a.jsxs)(t.p,{children:["If you need help with this step, see ",(0,a.jsx)(t.a,{href:"../tutorial_new_projucer_project/",children:"Tutorial: Projucer Part 1: Getting started with the Projucer"}),"."]}),"\n",(0,a.jsx)(t.h1,{id:"the-demo-project",children:"The demo project"}),"\n",(0,a.jsxs)(t.p,{children:["The demo project presents a simple window which allows you to select a file, using a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," object. This file is opened, read as a string, and displayed in a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextEditor",title:"An editable text box.",children:"TextEditor"})," component."]}),"\n",(0,a.jsx)(t.h1,{id:"files-in-juce",children:"Files in JUCE"}),"\n",(0,a.jsx)(t.p,{children:"This tutorial illustrates the basic techniques for reading files using JUCE. Files are one aspect of cross-platform development that need to be handled carefully because file systems on different operating systems sometimes work in quite different ways. As a developer using JUCE you are not immune to these problems, but JUCE makes the experience more consistent across different platforms and will often raise assertions in your debug builds if it can see that your code does something that may lead to problems."}),"\n",(0,a.jsx)(t.h2,{id:"the-file-class",children:"The File class"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," class in JUCE represents an ",(0,a.jsx)(t.em,{children:"absolute"})," path to a file or a directory (whether it actually exists or not). The simplest way to create a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," object is to pass it a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"String"})," that contains the absolute path. For example, on macOS, Linux or Android the following would be an absolute path:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'juce::File path ("/path/to/file.txt");\n'})}),"\n",(0,a.jsxs)(t.p,{children:["But the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," class enables ways of manipulating paths by requesting child files that are relative to a parent directory, obtaining the parent directory, and so on. For example, the code above could be rewritten using the ",(0,a.jsx)(t.a,{href:"classFile.html#a087bb8f0a60069234b13ab965fb5014a",title:"Returns a file that represents a relative (or absolute) sub-path of the current one.",children:"File::getChildFile()"})," function like so:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'juce::File path (File ("/path").getChildFile ("to").getChildFile ("file.txt"));\nFileRepresents a local file or directory.Definition juce_File.h:48\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In this example the code has become more verbose but in real-world scenarios it is common to need to access multiple files from the same directory. Therefore, it makes sense to store the parent directory in one ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," object and request child files as and when they are needed."]}),"\n",(0,a.jsx)(t.p,{children:"On Windows, an equivalent absolute path might be:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'juce::File path ("C:\\path\\to\\file.txt");\n'})}),"\n",(0,a.jsx)(t.p,{children:"Dealing with child and parent directories is the same on each platform. JUCE handles the platform differences (such as path separators)."}),"\n",(0,a.jsx)(t.h2,{id:"the-filenamecomponent-class",children:"The FilenameComponent class"}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial we are going to use a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," object to allow the user to select a file using a standard operating system window. We can attach a listener to the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," object (see ",(0,a.jsx)(t.a,{href:"../tutorial_listeners_and_broadcasters/",children:"Tutorial: Listeners and Broadcasters"}),") and when the file changes we can obtain the currently chosen file as a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," object."]}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," object shows a text box that contains an absolute path. It also provides a button for the user to select a file from the operating system. There is also a drop-down menu that contains a list of recently used files. This is populated automatically during use, but these recently-used files can be added manually too (for example, hardcoded into your application or from a preferences file)."]}),"\n",(0,a.jsxs)(t.p,{children:["As we will see in a moment, the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," constructor has quite a few arguments\u2014and it doesn't have a default constructor. When this is the case, it is often easier to store child components in std::unique_ptr objects. (Since this means that they don't have to be initialised in the class initialiser list in the constructor.) We also need a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextEditor",title:"An editable text box.",children:"TextEditor"})," component, which we will use to display the file's contents. The ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextEditor",title:"An editable text box.",children:"TextEditor"})," class ",(0,a.jsx)(t.em,{children:"does"})," have a default constructor, but for consistency we store both component objects in std::unique_ptr objects:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    std::unique_ptr fileComp;\n    std::unique_ptr        textContent;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In our ",(0,a.jsx)(t.code,{children:"MainContentComponent"})," constructor we allocate a new ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," object and initialise it with some settings suitable for opening files (since the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," class can also be used for choosing locations for saving files too). Within this constructor we can provide a list of file suffixes that we wish to be able to select (for example, ",(0,a.jsx)(t.code,{children:'"*.txt;*.foo"'}),"). We can also enforce a suffix (which is more useful for saving files). In both of these arguments we pass an empty string, which means that no filtering will be performed. Other arguments are self-explanatory, defining other ways that we want the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," object to behave (see the comments in the code):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'    MainContentComponent()\n    {\n        fileComp.reset (new juce::FilenameComponent ("fileComp",\n                                                     {},                       // current file\n                                                     false,                    // can edit file name,\n                                                     false,                    // is directory,\n                                                     false,                    // is for saving,\n                                                     {},                       // browser wildcard suffix,\n                                                     {},                       // enforced suffix,\n                                                     "Select file to open"));  // text when nothing selected\n        addAndMakeVisible (fileComp.get());\n        fileComp->addListener (this);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponentListener",title:"Listens for events happening to a FilenameComponent.",children:"FilenameComponentListener"})," callback we obtain the currently chosen file and pass it to our ",(0,a.jsx)(t.code,{children:"readFile()"})," function:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void filenameComponentChanged (juce::FilenameComponent* fileComponentThatHasChanged) override\n    {\n        if (fileComponentThatHasChanged == fileComp.get())\n            readFile (fileComp->getCurrentFile());\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In each of the examples that follow, the ",(0,a.jsx)(t.code,{children:"readFile()"})," function will read the chosen file in different ways. But we need somewhere to display the results, so we set up a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classTextEditor",title:"An editable text box.",children:"TextEditor"})," component in our ",(0,a.jsx)(t.code,{children:"MainContentComponent"})," constructor too:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"        textContent.reset (new juce::TextEditor());\n        addAndMakeVisible (textContent.get());\n        textContent->setMultiLine (true);\n        textContent->setReadOnly (true);\n        textContent->setCaretVisible (false);\n \n        setSize (600, 400);\n    }\n"})}),"\n",(0,a.jsx)(t.h2,{id:"reading-a-whole-file-into-a-string",children:"Reading a whole file into a string"}),"\n",(0,a.jsxs)(t.p,{children:["While the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," class is designed primarily to store and manipulate paths to files, there are a few convenient functions for reading files in really simple ways. For example, the ",(0,a.jsx)(t.a,{href:"classFile.html#a07b95f6831ee4ed5b49241ce6af8539d",title:"Reads a file into memory as a string.",children:"File::loadFileAsString()"})," function does exactly what it says: it reads a whole file into a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"String"})," object. Of course, if the file selected isn't a text file then the result may be impossible to make sense of (although JUCE won't crash). This function can detect and read both UTF-8 and UTF-16 formats:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void readFile (const juce::File& fileToRead)\n    {\n        if (! fileToRead.existsAsFile()) // [1]\n            return;\n \n        auto fileText = fileToRead.loadFileAsString();\n \n        textContent->setText (fileText);\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Notice that we check to see if the file chosen actually exists [1]. Since we chose the file from the operating systems then this shouldn't fail, but it's good practice to make these kinds of checks when dealing with files. Run the app and load the ",(0,a.jsx)(t.code,{children:"juce.txt"})," text file provided in the ",(0,a.jsx)(t.code,{children:"Resources"})," directory of the demo project. The result will be as shown in the following screenshot:"]}),"\n",(0,a.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_file_reading_screenshot1.png",caption:"Reading and displaying a text file"}),"\n",(0,a.jsxs)(t.p,{children:["There is an equivalent function\u2014",(0,a.jsx)(t.a,{href:"classFile.html#a889b8b0784b4f97c5bf93ffc24c3650d",title:"Loads a file's contents into memory as a block of binary data.",children:"File::loadFileAsData()"}),"\u2014to read an entire file into a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classMemoryBlock",title:"A class to hold a resizable block of raw data.",children:"MemoryBlock"})," object."]}),"\n",(0,a.jsx)(t.h2,{id:"reading-a-file-line-by-line",children:"Reading a file line by line"}),"\n",(0,a.jsxs)(t.p,{children:["For more control over the file reading process, you will need to use a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"})," object. One way to do this is to construct a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"})," object by passing its constructor the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFile",title:"Represents a local file or directory.",children:"File"})," object that represents the file you want to read [2]."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"})," class is a subclass of the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classInputStream",title:"The base class for streams that read data.",children:"InputStream"})," class, which is the base class for streams that read data."]})}),"\n",(0,a.jsx)(t.p,{children:"Add the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void readFile (const juce::File& fileToRead)\n    {\n        if (! fileToRead.existsAsFile())\n            return;  // file doesn't exist\n \n        juce::FileInputStream inputStream (fileToRead); // [2]\n \n        if (! inputStream.openedOk())\n            return;  // failed to open\n"})}),"\n",(0,a.jsx)(t.p,{children:'We are going to read the file line by line, but we are also going to detect lines that start with the "*" character. Then we\'ll format these lines in a different font, using these lines as headings for the other text. Add the following code:'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'        textContent->clear();\n \n        auto normalFont = textContent->getFont();\n        auto titleFont  = normalFont.withHeight (normalFont.getHeight() * 1.5f).boldened();\n        juce::String asterix ("*");\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The next part is to read data from the ",(0,a.jsx)(t.code,{children:"inputStream"})," object, in a ",(0,a.jsx)(t.code,{children:"while()"})," loop, until the stream is exhausted [3]. Add this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"        while (! inputStream.isExhausted()) // [3]\n        {\n            auto line = inputStream.readNextLine();\n \n            if (line.startsWith (asterix))\n            {\n                line = line.removeCharacters (asterix);\n                textContent->setFont (titleFont);\n            }\n            else\n            {\n                textContent->setFont (normalFont);\n            }\n \n            // append the text to the textContent\n            textContent->insertTextAtCaret (line + juce::newLine);\n        }\n    }\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can see that this:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["reads a line, using the ",(0,a.jsx)(t.a,{href:"classInputStream.html#af16acc8f2fd769adb559a781ece8e903",title:"Reads a UTF-8 string from the stream, up to the next linefeed or carriage return.",children:"InputStream::readNextLine()"})," function,"]}),"\n",(0,a.jsx)(t.li,{children:'checks to see if the line starts with a "*",'}),"\n",(0,a.jsxs)(t.li,{children:["sets the font for the ",(0,a.jsx)(t.code,{children:"textContent"})," object accordingly,"]}),"\n",(0,a.jsx)(t.li,{children:'removes any "*" characters, if necessary, and'}),"\n",(0,a.jsxs)(t.li,{children:["appends line of text to the ",(0,a.jsx)(t.code,{children:"textContent"})," object."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Loading the same ",(0,a.jsx)(t.code,{children:"juce.txt"})," file should result in the something like the following screenshot:"]}),"\n",(0,a.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_file_reading_screenshot2.png",caption:"Reading the file line by line"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The code for the example in this subsection can be found in the ",(0,a.jsx)(t.code,{children:"FileReadingTutorial_02.h"})," file of the demo project."]})}),"\n",(0,a.jsx)(t.h2,{id:"reading-a-file-byte-by-byte",children:"Reading a file byte by byte"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classInputStream",title:"The base class for streams that read data.",children:"InputStream"}),", and therefore ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"}),", classes also have functions for reading files in smaller pieces, right down to reading a byte at a time. To illustrate this, let's load a text file and display each word in a different colour. First let's add a function to generate random colours. Add this function which generates a random colour, but clips the brightness to a specified minimum (this is to ensure that the colour will be visible against the black background):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    static juce::Colour getRandomColour (float minBrightness)\n    {\n        auto& random = juce::Random::getSystemRandom();\n        juce::Colour colour ((juce::uint8) random.nextInt (256),\n                             (juce::uint8) random.nextInt (256),\n                             (juce::uint8) random.nextInt (256));\n \n        return colour.getBrightness() >= minBrightness ? colour\n                                                       : colour.withBrightness (minBrightness);\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now let's add a function that reads data from a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"})," object until it reaches a space character. This will then return the text up to, and including, the space. It creates a small memory buffer, using the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classMemoryBlock",title:"A class to hold a resizable block of raw data.",children:"MemoryBlock"})," class, then uses the ",(0,a.jsx)(t.a,{href:"classInputStream.html#a2e5944641712d84b6da2eee5d394326a",title:"Reads a byte from the stream.",children:"InputStream::readByte()"})," function to read bytes one at a time from the ",(0,a.jsx)(t.code,{children:"inputStream"})," object:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    static juce::String readUpToNextSpace (juce::FileInputStream& inputStream)\n    {\n        juce::MemoryBlock buffer (256);\n        auto* data = static_cast (buffer.getData());\n        size_t i = 0;\n \n        while ((data[i] = inputStream.readByte()) != 0 && i < buffer.getSize())\n            if (data[i++] == ' ')\n                break;\n \n        return juce::String::fromUTF8 (data, (int) i); // [4]\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"classString.html#aa0116dc51d7bdd363d14c72bba60060a",title:"Creates a String from a UTF-8 encoded buffer.",children:"String::fromUTF8()"})," [4] function attempts to convert the raw binary data to a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"String"})," object."]}),"\n",(0,a.jsxs)(t.p,{children:["Finally, in our ",(0,a.jsx)(t.code,{children:"readFile()"})," function, we use our ",(0,a.jsx)(t.code,{children:"readUpToNextSpace"})," function to read the words from the text file until the stream is exhausted. Add the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"void readFile (const juce::File& fileToRead)\n{\n    if (! fileToRead.existsAsFile())\n        return;  // file doesn't exist\n \n    juce::FileInputStream inputStream (fileToRead);\n \n    if (! inputStream.openedOk())\n        return;  // failed to open\n \n    textContent->clear();\n \n    while (! inputStream.isExhausted())\n    {\n        auto nextWord = readUpToNextSpace (inputStream);\n        textContent->setColour (juce::TextEditor::textColourId, getRandomColour (0.75f));\n        textContent->insertTextAtCaret (nextWord);\n    }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"Running this code will result in something like the following screenshot."}),"\n",(0,a.jsx)(i.A,{src:"https://docs.juce.com/master/tutorial_file_reading_screenshot3.png",caption:"Reading the file in smaller chunks"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The code for the example in this subsection can be found in the ",(0,a.jsx)(t.code,{children:"FileReadingTutorial_03.h"})," file of the demo project."]})}),"\n",(0,a.jsxs)(t.p,{children:["An alternative way of creating a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"})," object is to use the ",(0,a.jsx)(t.a,{href:"classFile.html#a668db4b90ac7839c70f0a9ac22124c29",title:"Creates a stream to read from this file.",children:"File::createInputStream()"})," function. This function returns a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFileInputStream",title:"An input stream that reads from a local file.",children:"FileInputStream"})," object on the heap, allocated using the ",(0,a.jsx)(t.code,{children:"new"})," operator. This means that it is ",(0,a.jsx)(t.em,{children:"very"})," important that you deallocate the object when you are finished. Ideally, you should use a std::unique_ptr object for this. A slight difference here is that the ",(0,a.jsx)(t.a,{href:"classFile.html#a668db4b90ac7839c70f0a9ac22124c29",title:"Creates a stream to read from this file.",children:"File::createInputStream()"})," function will return a ",(0,a.jsx)(t.code,{children:"nullptr"})," value if the file stream fails to open. The following code shows the typical pattern that you should use in this case:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    void readFile (const juce::File& fileToRead)\n    {\n        if (! fileToRead.existsAsFile())\n            return;  // file doesn't exist\n \n        if (std::unique_ptr inputStream { fileToRead.createInputStream() })\n        {\n            textContent->clear();\n \n            while (! inputStream->isExhausted())\n            {\n                auto nextWord = readUpToNextSpace (*inputStream);\n                textContent->setColour (juce::TextEditor::textColourId, getRandomColour (0.75f));\n                textContent->insertTextAtCaret (nextWord);\n            }\n        }\n    }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You may notice that the colours of words at the ends of some lines are identical to the colour of the word at the start of the next line. This is because we are looking only for the space character as a delimiter. Modify the code to look for new line, carriage return, and tab characters too. (These are characters ",(0,a.jsx)(t.code,{children:"'\\n'"}),", ",(0,a.jsx)(t.code,{children:"'\\r'"}),", and ",(0,a.jsx)(t.code,{children:"'\\t'"}),".)"]}),"\n",(0,a.jsx)(t.h1,{id:"reading-binary-data",children:"Reading binary data"}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial we have looked at reading string data from a file. In addition to reading single bytes from a file, the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classInputStream",title:"The base class for streams that read data.",children:"InputStream"})," class also includes functions for reading other fundamental types. For example:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"classInputStream.html#a59eb456ebfbe9d4c7fdfd4c14337e19a",title:"Reads four bytes from the stream as a little-endian 32-bit value.",children:"InputStream::readInt()"})," \u2014 reads an ",(0,a.jsx)(t.code,{children:"int"})," (32-bit) from the stream."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"classInputStream.html#a0c4b0f9f1fa9515fea5a98d2ffe7ae02",title:"Reads two bytes from the stream as a little-endian 16-bit value.",children:"InputStream::readShort()"})," \u2014 reads a ",(0,a.jsx)(t.code,{children:"short"})," (16-bit) integer from the stream."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"classInputStream.html#a46d7f191f1872bc27550db3fa0733f59",title:"Reads four bytes as a 32-bit floating point value.",children:"InputStream::readFloat()"})," \u2014 reads a ",(0,a.jsx)(t.code,{children:"float"})," (32-bit) from the stream."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["These all read multi-byte values using the little endian byte order. To read them as big endian values there are alternative versions\u2014for example, the ",(0,a.jsx)(t.a,{href:"classInputStream.html#a84ab1bcc547eee621c4c6c2502af808d",title:"Reads four bytes from the stream as a big-endian 32-bit value.",children:"InputStream::readIntBigEndian()"})," function. You can also read a block of data from a stream using the ",(0,a.jsx)(t.a,{href:"classInputStream.html#aa5350c414bad6b97ae3b463a3401c0d6",title:"Reads some data from the stream into a memory buffer.",children:"InputStream::read()"})," or ",(0,a.jsx)(t.a,{href:"classInputStream.html#a7708d25af96e8d8b937a4642dcf55a23",title:"Reads from the stream and appends the data to a MemoryBlock.",children:"InputStream::readIntoMemoryBlock()"})," functions."]}),"\n",(0,a.jsxs)(t.p,{children:["These are useful if you need to read existing files in binary format, or if you really need to have your data stored as binary. In most cases, it is probably preferable to use XML (using the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classXmlDocument",title:"Parses a text-based XML document and creates an XmlElement object from it.",children:"XmlDocument"})," and ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classXmlElement",title:"Used to build a tree of elements representing an XML document.",children:"XmlElement"})," classes) or ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classJSON",title:"Contains static methods for converting JSON-formatted text to and from var objects.",children:"JSON"})," (by storing data in var objects) for storing and reading your data."]}),"\n",(0,a.jsx)(t.h1,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"This tutorial has introduced simple file reading technique using JUCE through reading a text file in various ways. In particular you should be able to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponent",title:"Shows a filename as an editable text box, with a 'browse' button and a drop-down list for recently se...",children:"FilenameComponent"})," and the ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classFilenameComponentListener",title:"Listens for events happening to a FilenameComponent.",children:"FilenameComponentListener"})," to store a file path and offer the user a means of choosing a file."]}),"\n",(0,a.jsxs)(t.li,{children:["Read the entire contents of a file into a ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classString",title:"The JUCE String class!",children:"String"})," object."]}),"\n",(0,a.jsxs)(t.li,{children:["Read a file in smaller chunks using the appropriate ",(0,a.jsx)(t.a,{href:"https://docs.juce.com/master/classInputStream",title:"The base class for streams that read data.",children:"InputStream"})," functions."]}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../tutorial_colours/",children:"Tutorial: Colours in JUCE"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../tutorial_label/",children:"Tutorial: The Label class"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../tutorial_playing_sound_files/",children:"Tutorial: Build an audio player"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3449:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(4848);function s(e){let{src:t,caption:n,alt:s,width:i,height:r}=e;return(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:t,alt:s||n,width:i,height:r}),(0,a.jsx)("figcaption",{children:(0,a.jsx)("b",{children:n})})]})}},6378:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(4848);function s(e){let{path:t}=e;return(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://docs.juce.com/master/"+t,children:"\ud83d\udcda Source Page"})})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);