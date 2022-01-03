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

