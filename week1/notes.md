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

## Semantic Elements
+ Semantic = Names of tags have defined meaning to the content
    - semantic elements tells the programmer/computer what the meaning of some content is
    - Semantic tags makes more clear what content relates to what meaning  
+ Search Engines may relie on semantic HTML tags
+ <h1> element is the most important heading within the content. 
    - This might affect the search engine to find your page --> You should always have an h1 heading
    - This should be the most expressive summary of the Page
    - Every div tag could look like an h1 heading with CSS, but then it has no semantic meaning to the page and therefore for the search engine
### HTML5 semantic elements
All of the upcoming tags are block-level elements --> They all start a new line when they occure

With the tags, your HTML document has inheritly some structural meaning. Therefore you should use them, even if you can make your page look cool without semantic elements. 
+ header: 
    - Defines some header information
+ section: 
    - could contain aricles 
+ article 
    - could contain sections
+ aside: 
    - Here you can place something that is related to the page but NOT the main content
+ footer: 
    - foot notes

## HTML Lists
+ <ul> = unordered list
    - Every part of a unordered list needs to be a list element <li>
    - If you nest two unordered lists inside each other, it will be shown as a tabed sub-list
    - Only list elements can be within a unordered list. Free text is not valid in HTML
+ <ol> = ordered list 
    - Gets shown as a enumerated list

## Entity References
Commonly used in order to avoid rendering issues 
+ Special characters that are keywords or parts of keywords (like < > for tags) have their own calling procedure within HTML
    - e.g. & == &amp; or < == &lt; and > == &gt;
+ Copyright: &copy 
+ Do not line break between words: Instead of the space, you can use &nbsp
+ &quot; --> " (not necessary in utf8 but in more restricted character systems)

## Links
### Internal Links
+ <a href="relative_or_absolute_url" title="title link the is shown if you go over the link">Content to click</a>
    - If you use relative URLs, your linked file needs to be in the same folder as the top level doctype html
    - A hyper reference is an inline element in HTML
+ In HTML5 you can use a div tag inside an a tag
    - This is mainly used if you want to click on a company logo or something like this that should bring you to the landing page of the website
+ href = Hypertext Reference
    - Could be an absolute or relative URL
    - On a webserver, you need to specify absolute links
+ title attribute: If you go over the link with your mouse, it will show that text
+ An a tag (link) can be an inline or a block level element. You can place a block level element within the area between the opening a tag and the closing a tag in order to achive clickable regions, like logos or something to click on 
+ target attribute: 
    - target="_blank" --> Open the hyper reference in another tab within the browser
        - This is usually a good idea, because people have a short attention span, so if you redirecting them to another web page which is not yours, chances are high that they never come back to your webpage!
+ You can also reference a part of your web page by using the id tag and creating a href to the id of your element
    - Syntax example: ```<a href="#id_name" title="Go to the named ID">Go to the referenced part of my web page</a>```
        - We have a section within our html document that has an attibute ```id="id_name"```
    - This ```#<id_name>``` is called a "fragment identifyer link". You can get the corresponding URL from your web browser (usually this is the link to your webpage with a postfix of `#<id_name>`)
    - This is important for "single page applications" 

## Comments in HTML
+ Syntax: ```<!-- This is a Comment -->```

## Images within HTML pages
+ Images are inline level elements in HTML
+ Use the img tag for inserting images
    - You should always specify the width and high attributes in the opening tag! If you do not do this, the browser will *not* reserve the specifyed space for your image and therefore, if the image has a bigger latency for transfering it to your client (i.e. browser), the page will be reorganized if the image was completly transferred. ==> ***Best Practice: Always specify width and hight!*** To reserve the space even if the image is not there from the beginning
    - As long as the URL to your image is valid, the space will be reserved. If the URL is broken or your internet connection does not allow to download the image, the web page layout will be correct. 
+ Syntax example: 
    - ```<img src="/path/to/image.jpeg" heigh="300" width="400" alt="">```