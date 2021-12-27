# Coursera HTML, CSS, and Javascript for Web Developers Week 1

## Setting up your environment
+ nodejs is a javascript runtime environment (for backend developers: you can look at it like an interpreter like the python interpreter)
+ npm is a package manager for nodejs
    - You can install additional packages/libraries with it in order to make your development more efficient and you do not need to implement everything from scratch
+ browser-sync is a package that could be installed by npm which is able to run a folder as an http web server (you can look at it as a development server which is replaced by nginx or apache websever in production)
    - If you save a watched file, browser-sync will automatically trigger your browser to reload the edited webpage
    - Activate the browser-sync development server
        - ```browser-sync start --server --directory --files "*"```
            - ```start```: Start the the browser-sync program
            - ```--server```: Use the development http server
            - ```--directory```: use the given directory to watch for files of the webpage 
            - ```--files "*"```: files to observe for changes in order to reload in case of saving changes to the file

## Github Pages
+ Here you can upload your webpage for free, you just need to do some settings within your github repository and a new branch "gh_pages" will appear in your repo. 
    - The domain is visable within the repository settings. 
    - If you have bought a domain, you can hand it over to you github pages branch
+ By default, github pages will use your ```index.html``` as the starting point for your website 

## Ressources and asking your Help
+ jsfiddle.net  
    - html, css or javascript code with its output and you can share the code with a link that is provided by the website
+ codepen.io
    - Example code for greate website designs --> You can lookup the implementation for some great designs
    - You can develop your own examples

# Web Technologies
+ HTML: Structure
+ CSS: Style, Color, ...
+ Javascript: Behaviour, Functionalities
+ All three technologies are created to work with each other

# HTML
+ = HyperText Markup Language
    - Hypertext: Text that references another text
    - Markup: HTML marks up the content in tags 
    - Language: HTML has a defined syntax
+ HTML is very good human readable/interpretable
+ Two HTML definition organizations
    - WHATWG: Define Browser technologies --> They support HTML as an evolving language
    - W3C (World Wide Web Consortium): Official distributor of the current HTML standart, Cherrypick the HTML implementations of WHATWG; Deliver the current HTML-Standart document where you can lookup the definitions how you can do things with HTML
+ Evergreen Browsers: 
    - Browsers that are silently update the interpretation paradigms to interpret HTML in the backgroud
    - All commonly used browsers
    - As a programmer, you need to be up to date with the latest HTML definition in order to deliver a valid and good looking website to your clients
## Ressources to make shure you use valid HTML
+ caniuse.com
    - you can lookup functions, tags, ... and see which browser supports the search element of the html, css or javascript standart
+ validator.w3.org
    - Deliver the URL of your website and lookup, if it is complient with the current HTML standart by W3C
+ w3schools.com
    - Lookup what browsers are the most used 

## HTML Tags
+ Anatomy
    - <p>content</p>
        - Opening and closing tag --> The closing tag is defined by the /
        - After the bracket, the name of the tag is defined
    - Attributes of a tag are defined by a *name-value* pair after the _opening_ tag
        - <p id="myID">My IDed paragraph</p>
    - Tag definitions are very strickly interpreted. If you implement a space to much or miss a space, tags or attributes can be just ignored by the browser
    - The Value of an attribute do not need to be in quotes, but it is best practice to do so. ("" or '' are interpreted the same way in HTML5)
+ Some HTML Tags do not have a closing tag, e.g.:
    - <br> : Line Break
    - <hr> : Horizontal Rule
+ Quotes are used like {} in C++ --> You have to close an opened quote
+ Self-Closing Tags
    - XHTML
    - Commonly used for placeholders where you want to dynamically insert something to the website
    - Not possable in HTML5!
    - You need to <p></p>
+ Tags are typically nested within each other 
    - You can not close the parent/superordinate tag without closing a child/subordinate tag

## HTML Document Structure
+ The first line of a HTML file must have a document type declaration
    - Like the shebang within the python domain
    - Tells the Browser how to interpret the HTML code
    - Historically, you can tell the browser to use the common HTML standart OR to render the page in a "Corks" Mode that might or might not be rendered properly
+ <html> </html> Tags
    - The code and content between this tag and closing tag are interpreted as HTML
+ <head> </head>
    - Describe the main content of the web page
        - Name of the Pagetitle 
        - Character Encoding 
        - Meta-Data of the content
            - <meta key="value">, e.g. <meta charset="utf8">
                - This is a non-closing tag
+ Body tag
    - Here is the content of the page that is exposed to the user
    - <body> </body>
+ Browsers render the HTML document from top to bottom --> You need to forward-declare your definitions 

## Content Models
+ Block-Level Elements
    - Rendering the beginning of a new line
    - Whatever was before, the content after a Block-Level tag begins in a new line! (like ``\n``` in C)
    - Can contain another Block-Level Element or Inline-Level Element, since the line break in the case of an exceeded line in the browser comes anyway
    - HTML5: _Flow Content_ is the equivalent to block-level elements
    - Most generic block-level element: <div></div> (division)
        - div tags create a new line before and after its content
+ Inline Elements
    - Renders the content on the same line
    - Can only contain other *inline* elements
    - HTML5: _Phrasing Content_ is the equivalent to inline elements
    - Most generic inline element: <span></span>
        - A span can have content before and after its appearance

+ Inline and Block Elements are not used in HTML5 but you CAN use them with current CSS implementations