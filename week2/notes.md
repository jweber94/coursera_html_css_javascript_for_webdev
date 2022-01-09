# Week 2: Designing Websites
+ Styling of your webpage is more important to make your website successful then just the content! Therefore we have to make websites pretty in order to please the user.

## CSS: Cascading Stype Sheets 
+ You can change the appearance of your website without changing its structure (which is defined by HTML) with CSS
+ Ressource for looking at different CSS designs: http://www.csszengarden.com/

## CSS Rules: 
+ Example: 
    - ```p {
            color: blue;
        }```
    - p: Selector --> What HTML element should be addressed by the CSS rule
    - Inside the curly braces we have the declaration, which contains of key-value pairs. I.e. `porperty: value;` 
        - CSS has a fixed set of properties with associated, valid values for them
    - CSS rules could contain more then one declatation pair
+ Within a CSS style sheet, we have multiple CSS rules
    - A HTML page has commonly one CSS style sheet associated with it. On default, it is an empty style sheet
+ Style sheets can be within the head tag of a HTML page, but in real world website applications it is commonly placed into a dedicated file
+ If you define a CSS rule, it will be used for all tag elements on a common way within your HTML page
+ If you do not hand over CSS rules for your HTML tags within the HTML document, the browser will use its predefined default settings!
    - This is individually related to your browser and browser settings

You can have three types of selectors:
+ ***Element Selectors:***
    - Define CSS styles that should be applyed to HTML tags
+ ***Class Selectors:***
    - You can use a style for every HTML element that is associated with the CSS class element, by specifying the class attribute within the HTML opening tag to the defined class
    - Syntax: 
        - CSS: ```.blueClass {color: blue;}```
        - HTML: ```<p class:"blueClass">This is my paragraph</p>```
        - By defining the class selector, you use a dot as a prefix to the class identifyer. By using the class within the HTML syntax, you do NOT use the dot prefix
+ ***ID Secector:***
    - Apply a style to a specific ID of the HTML attribute ID within you HTML document
    - Syntax: 
        - CSS: ```#idStyle {color: blue;}```
    - Since IDs are unique to a single HTML tag, ID selectors are the least flexible used selectors we have 
    
We can group selectors to one CSS rule by comma separating them. Example: 
+ Rule for the ID testID and all div tags: 
    - ```div, .testID { color: blue; }```

## Combining CSS selectors
We can use combinations of selectors to define generally applicable CSS rules in a factual way. 
+ ***Element with class selector***: 
    - Syntax: `p.writeBig { font-size: 20px; }`
        - Makes every pararaph element (`<p>`-Tag) with the class attribute _writeBig_ to the font size 20 pixel
        - HTML: `<p class="writeBig">My paragraph</p>`
        - Caution: No spaces between the tag element and the dot of the class
+ ***Child Selector***
    - Syntax: `article > p { color: blue; }`
        - Make every p (paragaph HTML tag) that is a *DIRECT* child of an article element into blue color
        - Only if the next higher HTML tag is _article_, a p element is affected. If the p element is part of a div within the article element, it WILL NOT be affected by the CSS Rule
+ ***Descendant Selector***
    - Syntax: `article p { color: blue; }`
        - Every (not only the direct childs, but also the indirect childs) element of the p HTML tag inside an article tag will be of the color blue.
    - Descendant Selectors are not limited to HTML tags but also to classes. 
        - You read the Descendant and Child selectors from right to left ("Every left element that is part of the right element")
        - Another example: `.colored > p { color: blue; }` 
            - Every paragraph element that is inside of another element that has the class="colored" associated with it
        - Another example: `article > .colored { color: blue; }`
            - Every element that has a class="colored" attribute that is a direct child of an article HTML tag element

## Pseudo-Class Selectors
+ Styling should change on user interaction events
    - Pseudo Class names are predefined
+ General Syntax: 
    - `selector:pseudo-class { color: blue; font-size: 20px }`
+ Explicit example: 
    - `a:hover, a:active { background: grey; }`
        - hover and active are pseudo-class elements (going with your mouse over the a tag element (i.e. Hyperlink) will change the style of the link)
        - We apply the background color to the HTML elements if our user does what the pseudo class selectors say
+ Best practice: Do not make the pseudo class selectors too complicated, since it will be very hardly to read within your codebase

--
+ Block Level Elements try to allocate as much horizontal space as it can, until we specify a width within CSS

## Where to place your style sheets?
+ ```<head>
        <style>
            h2 {
                color: maroon;
            }
        </style>
    </head>```
    - You can place it inside the head section of your HTML document
+ You can add style attributes to your HTML tags in the HTML opening tag. If you do so, you do NOT need to specify a selector since it is clearly defined by the opening tag
    - Example: ```<p style="color: blue; font-size: 20px; " id=testID></p>```
        - id attribute would not be necessary
    - This is called "inline styling" and is the least reusable way of styling HTML tags --> Least preferred way to style, only for debugging purposes
+ External Style Sheets: 
    - Specify your styling within a separate file to ensure that every webpage uses the same styling --> Avoid copy past errors that will occure if you copy and past the styling information from the head tag throuout all your web pages 
    - Define a link to the CSS file to let your browser look for the styling. 
        - Syntax example: ```<link rel="stylesheet" href="style.css">```
            - Needs to be within the head tag of your HTML document
    - This is the common way to define your style
    - Explicit style tags within the head tag of a HTML page will override the global styling that is delivered by the external style sheet (if the external style sheet is linked within a line that comes before the style tag)

## Conflict resolution and cascading in CSS
+ There are three basic rules that are define the cascading algotrithm in CSS, which determines which rule will be applied to which HTML tag
    - Origin-Precedence: If we have conflicting CSS rules for a HTML object, ***the last declaration of the styling rule wins!*** Thereby, the browser reads the HTML page from top to bottom, so if you specify a rule within the style.css file and link it within the head tag of the html document BUT after the link to the style.css there is a style-HTML tag which defines some styling that is already defined within the style.css, the declation of the HTML-style tag is used. Also, if you define a HTML tag with a styling attribute, the styling attribute will be choosen, since it is in every case written after the head tag and therefore it comes last to the HTML parser of the browser ==> The lower a style rule is within the HTML document, the higher is its precedence
    - Merge: If you have two sources for the styling of a HTML tag (e.g. within a style.css file and the second is defined as an attribute to the HTML tag itselfe), the styling will merge (the tag will have both attributes), even if there are two sources of the styling configuration. (As long as it is not the same attribute that was defined before. If that would be the case, the Origin-Precedence rule will be applied.)
    - Inheritance: If we define an attribute (does not matter where) for an element in the DOM (Data Object Model - https://de.wikipedia.org/wiki/Document_Object_Model), every child (and grandchild, etc.) HTML-tag will inherit that attibute, as long as it is applicable to it and as long as it does not get overwritten. 
        - Common/Best practice: Define a styling rule for the body HTML tag and then override it occationally if you need another style with an attribute of the HTML tag (e.g. text-align, font-family and color)
    - Specifity: "Most specific selector combination wins" (This confuses the most developers, if you do not work with this every day) ==> In the background, the CSS cascading algorithm calculates a score for a style that should be applied to a HTML tag. There are four parts that define the score: 
        - style-attribute of a HTML tag: If you define a style as an attribute of a HTML tag, this is the most specific style rule you can define. Therefore it is the "most segificant part" of the score which will override all other parts if it is 1 (==true) ~ 1000 is the highest score that we can have for a style attribute 
        - ID: Binary value --> If your CSS rule defines an ID-Attribute, it will be 1 (e.g.: `div #myPrag { color: green; }`)
        - Class or Pseudo-Class: Binary value --> If your CSS rule defines a class attribute, it will be one (e.g. `div.big { color: green; }`)
        - Number of Elements (HTML Tags) that should take this styling rule: `div p { color: green; }` --> Would be a 2 for the "Number of Elements"-Score.  
        ==> We define the value of the score from left to right (i.e. from top to bottom in the upon listing of the score components)
        - You can override the specificity rule with a `!important` after the individual defined attribute within a CSS rule. CAUTION: This is an ANTIPATTERN, since your code will be very bad maintainable 
+ The Cascading Style Algorithm is what makes CSS so powerfull, since it make style definitions reusable over a web page project/a HTML-document.  
+ You can look up from which definition a style of an HTML element on a webpage comes by looking at the browser developer tools and inspect the element
    - "user agent stylesheet" means "browser default" in google chrome
    - You can also see in chrom overwritten styles by the crossed out stylings 

## Styling Text 
+ Common styling attributes for text tags within HTML: 
    - font-family: It is good practice to define more then one font in the font family, since we rely on the installed fonts on the computer where the website is called. 
    - color: Commonly in hexadecimal numbers (RRGGBB) --> Every letter is a hexadecimal and defines the RGB color space with values from 0 to 255 in HEX
    - font-style: Make it italic 
    - font-weight: Make the text bold
    - font-size: How big should be the text view in px
    - text-transform: lowercase, uppercase, capitalize
    - text-align: Where should be the text placed on the available scree width (left, right, center)
+ Relative font sizing: 
    - We can define relative font sizes by percent and by setting a relative size to the letter m 
    - If you choose percent, most browsers resolve the font size by 16 px
        - example: `body { font-size: 120%; }`
    - If you choose the relative to a the letter m definition, the text will be N* the size of the letter m in the current font-style. 
        - You can do this by `div { font-size: 2em}` for making the font size twice as big as the m in the current font style. 
        - You can also shrink the font size by doing `span { font-size: 0.5em }`

# The Box Model
+ In HTML, everything is interpreted as a box. You can set up padding, high, width and color as well as a whole lot of other properties with CSS or HTML-Tag Attributes.
    - You can look at all HTML Box-Elements within the developer tools and where the set up properties come from in the "Elements" section, where you can select an Element within the browser screen and show its properties and where they come from. 
+ The basic attributes for the HTML Boxes for the HTML tags can be set by 
    - `background-color: blue`
    - `padding: 10px, 10px, 10px, 10px;` (left, right, top, bottom)
    - `border: 5px solid black;`
    - `margin: 40 px` 
    - `width: 300px` --> CAUTION: We define the Box of the Content, NOT the width of the complete box. If you want to change it, you use the attribute _box-sizing_, where you can choose between content-box (which is the described logic before) or content-box (which is the default for many HTML frameworks like bootstrap)
+ Commonly you setup some box ID-Selectors or Classes and then hand over the ID-Selectors / Classes to the ID-Tags / Class attributes of the HTML tags that are used within the HTML document. 
    - CAUTION: Box sizing with the box-sizing attribute is one of the few CSS attributes that can NOT be inherited. 
    - You can do this even through, if you define a CSS rule with `* { box-sizing: border-box; }`, which means, that every HTML Tag should be set up to the defined parameters (as long as they did not get overwritten further down the line.)
        - This is called the "Start Selector"
    - `border-box` setting for the `box-sizing` attribute/CSS rule: 
        - Means, that the defined width is equivalent to the combination of margin, padding and border
    - `content-box` setting for `box-sizing` attrubute/CSS rule: 
        - Means, that you define the width of the complete HTML-Tag-Box by the width + padding + 2 * border (left and right border) + margin 
+ If you have multiple HTML Tags with overlapping margins, the margins are collapsing. That means, that the bigger margin wins. 
+ CAUTION with margins or other Tag Box settings:
    - Most browsers has default-values for the most common HTML tags and therefore they get overwritten if you define a margin for the body tag in the head of your HTML document and use a browser predefined tag within the body. Even if the (for example h1) tag inherits the margin, it will be overwritten by the browser settings! You can inspect or ensure that by looking at the developer tools and check if a margin comes from the head of the HTML document or from user agent settings (which is the browser default)
+ If your content is longer then your available space (width and high of the content box is constrained), the content box will be expaned but not envolved with the margin, padding and border in the vertical space. If you place another content HTML tag (and therefore another box) right under the overflowed box, the content will overlapp and therefore unreadable.
    - To avoid this, you can use the overflow-property/attribute. 
        - `overflow: visable` --> like described above 
        - `overflow: auto` --> Put scroll bars where ever their needed
        - `overflow: hidden` --> The content will be cut at the end of the defined content box (CAUTION: Users hate two scroll bars)

## Background Property
+ We can define backgroud properties of CSS rules for HTML tags in two ways: 
    - Dashed version:
        - `background-color: blue;`
        - `background-image: url("/path/to/file.png");` --> The path has to be relativ to the CSS file (e.g. styles.css);` By default, the Image gets repeaded horizontally and vertically 
        - `backgroup-repead: no-repead;` --> No repition of a defined image
        - `background-position: center right` --> Place the image on the right in the vertical center of the box for the HTML tag, If you just define one placement, the other position definition gets defaulted to center
    - List version: 
        - `background: url(/path/to/img.png) no-repead right center blue`
+ Caution: If you overwrite a dashed version by setting the list version further down the line, the dashed version will be overwritten and therefore it will have no affect to the styling

## Positioning Schemes - Floating
+ Floating positioning of elements is an alternativ to the normal HTML document flow
+ Most of the frontend frameworks work by placeing tags as floating positioning
+ Floating means that we can position HTML tags with their boxes next to each other in the same line without overlapping them. Therefore we define the attribute/CSS rule `float: right;` or `float: left;` to elements in the same line
    - If the elements are within another HTML tag box, they are placed within the boundarys of the content of the parent box. 
+ If you want your box in a dedicated line, you need to clear the floating arrangement
    - Therefore you do `clear: left;` or `clear: right;` --> Nothing is allowed to be floaded left or right from the defined element that has this CSS rule aplied
    - Alternativly you can say `clear: both;`
+ Floating elements can be arranged vertically next to each other. Their margins, padding and border will be respected. If there is not enough space vertically, the floating element will went to the next line (e.g. if you squeeze your browser horizontally)
+ Two colomn Layout: 
    - Specify the width of a child-element to a percentage of the available space (e.g. `p { width: 50% }`, whereas p is a child of the body tag of the HTML document.)
+ If a floating element is bigger in the horizontal axis that it can not fit in the same line  with another floating element, it will be moved to the next line (without overlapping or collapsing with the second floating element in that line)
+ If an element is floating, the complete document flow is floating

## Static Positioning
+ Is the default for all HTML tags in the normal HTML document flow except `html`. `html` is a relativ positioned element. 
+ Position offsets of static positioned elements are just ignored.

## Positioning Schemes - Relativ Position
+ Elements that are relativ positioned are placed relativ to their normal position (in case of the normal html document flow)
    - You can say "Please position the div-box element 20 px from top and 10 px from left to the normal position"
    - All other elements behave like they normally would. It is just the appearence, where the relativ positioned element is rendered, not where the backend thinks it is places. 
+ If you set the positioning CSS rule for a HTML tag to relativ, you basically set the anchor to the point where the element would be in the normal html document flow and make the possability available to move it relativ to the anchor during rendering
+ CAUTION: The relativ positoned element is NOT taken out of the normal document flow. All other HTML tag-boxes are placed also relativ to the anchor.  
+ Example: 
    - ```p {position: relativ; 
            top: 50px; 
            left: 50px;
        }```
    - This is a box that is rendered 50 pixels FROM left and 50 pixels FROM the top (you can say "It moved more to the middle of the page.")

## Positioning Schemes - Absolute Position
+ If you do not define a `position: relativ` for a tag and still give relativ positioning for a CSS rule with an positioning rule `position: absolute`, the html tag box will be interpreted as absolut and  placed relativ to the next anchestor tag that is defined as relativ. (If no other elements defined as relativ, the html tag is a relativ tag by default.)
    - CAUTION: An absolut positioned box will ignore all other html tag boxes and will overlay them

# Responsive Design
+ Responsive design is the possability to make your CSS rules dependend on the size of the screen (which might be an indicator of the viewing device)
    - Remember: CSS makes it possable to let your HTML page (= structure + content) look different, depending on your CSS styles.
    - If your CSS styles are dependend on viewing settings (e.g. the number of pixels in the width of the viewing device), you can respond to diffent viewing settings with different styles, which is the basic principle of responsive design

+ Basic syntax: 
    - ```@media (max-width: 767px) { p { color: blue; } }```
        - @media keyword with its features and their settings
            * You can define more then one media feature
            * If all of them resolves to true, the media-query will be applied
        - In the curly brackets you can define the normal CSS rules that should apply for the media query setting 
    - Besides from max or min width of the media query feature, you can define settings for screens or for prints of your HTML page
        - `@media screen {<CSS Rules>}`
        - `@media print {<CSS Rules>}`
    - Combination of media-querys can be done with logical operators   
        - And: `@media (min-width: 768px) and (max-width: 992px) {...}` 
        - Or: `@media (max-width: 768px), (min-width: 992px)`

+ Best practice by working with media querys: 
    - Define a base styling that will be applied if no media query evaluates to true
    - Then define some media querys to adjust the wanted styling on the intented devices
    - By doing this, you will ensure you have a valid design, even if no media query resolves to true

+ CAUTION: If you define more then one media query, ***make sure no media query feature attributes overlapp in their completness so that there is no possability that more then one styling trys to be applied!***

## Definition of responsive web design
"Site designed to adapt its layout to the viewing environment by using fluid proportion-based grids (aka floating elements), flexible images and CSS3 media querys"
+ That means, the layout and rendering website adapts to the size of the device while the content and underlying structure remains the same
    - The content verbosity may change based on the layout. (e.g. phone numbers at desktop versions may appear small while on a mobile device (and therefore with a small width) it is one of the most prominent HTML-tag-boxes on the page to make it directly usable by a mobile device user)

+ Fundamental thinking princable of responsive design: 
    - Start by designing the page for the mobile version, so you define which content is the most relevant for the user and then design it for the desktop version

+ By using media querys, you can deliver just one website with two stylings whereas old implementations principals let the server check if it is a mobile or a desktop device and then deliver a completly separat developed website. This is considered bad practice and has an inherent need for developing two individual web pages (which is unnecessary expensive)

## 12-Column Grid Responsive Layout
+ Default for the most responsive web development frameworks
+ Work with block-level elements (e.g. div) and you can place up to 12 (or 5, 4, 2, 1) boxes in one line. 
    - By using floating div elements!
    - One column is 100%/12 = 8.33% for the width of one grid element
    - Visualization (Ressource: https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/Pfa75/lecture-24-part-1-responsive-design): ![](220108_12_grid_layout.png)

## CAUTION: Mobile devices
+ Mobile devices commonly zoom out a website by 0.x (e.g. IPhone 6 make x0.4 of the used pixels) to fit more content on the mobile device screen
+ You can avoid this by setting the CSS rule
    - `<meta name="viewport" content="width=device-width, initial-scale=1">`
+ This is called "Mobile First" strategy 

# Twitter Bootstrap
+ Bootstrap is the most popular HTML, CSS and JavaScript framework for developing responsive, mobile first project on the web.
+ Boostrap defines a lot of CSS classes
+ In order to use bootstrap, you need to have a certain HTML document structure (mostly some additional div elements) and apply the bootstrap classes to them. 
+ Javascript is based on jQuery
+ Disadvantages: 
    - Too bloated --> But you can use selective download
## Use Bootstrap
+ Download the precompiled version from here: 
    - https://getbootstrap.com/docs/5.1/getting-started/download/
+ Unzip the files and put them into you project folder that you want to serve on your web server
+ Include the `css/bootstrap.min.css` file to your HTML document with
    - `<link rel="stylesheet" href="css/bootstrap.min.css>"` into the head section of your HTML document
+ Since bootstrap depends on jquery, we need to download jquery from here (https://jquery.com/download/ - `jquery-3.6.0.min.js`) and put it into the bootstrap `js` folder in your project 
