# Notes for week 3 of the web dev course: Requirements Engineering for web development

## Interaction with the client (Tipps)
+ Most clients have no idea what they want!
    - Your job to find out what he really wants

+ A good idea is to bring website examples of similar buisnessed to have a reference for your client

+ Be careful - most client try to put as much information about their buisness as they could on the page. But this is not useful for a website visitor 
    - ***Less information IS MORE***
    - Encourage the client that too much information might be overwhelming to a site visitor

+ Find a way for the client to INVEST in the project
    - Especially, if the project is done for free
    - The client should have some skin in the game (besides you) as well, to make the project valuable for him as well. If you do not do this, your website project might be just a side project for your client that he is not paying to much attention to!
    - Not much money investment, but at least a little

+ Have one person to make decisions for the project at the client side
    - If more then one decider is there, a lot of time will be there for discussions
    - Only one final decider needs to be there who will commit to decisions

+ Limit the number of revisions UPFRONT
    - To make sure it won't be a never ending project for you
    - Ideally you define a contract before you start
    - If your do a payed project, do not limit the number of revisions, ***BUT*** define the number of free revisions
    - E.g. 3 Time free revisions

+ Involve others if needed
    - Look out for young graphic designers or photographers in your surrounding area that might do the needed jobs for free, as long as they get mentioned in the project (To let them build up their portfolio as well)
    - Let the client do something to get him to have some skin in the game

+ Get an idea of what the client has right now

### Visit the client
+ Ask customers of the client if possible
+ Something to improve for the buisness?
+ Show of examples
    - Ask what is good / bad about the examples
+ Make the additional services (like photographer, graphic designer, ...) part of your service --> You can get payed even more

## Design overview
+ Make some quick markups --> ***DO NOT CODE DIRECTLY***
    - There is some software that lets you do markups and gives you basically HTML structured code back
    - Define a markup for all targeted layouts (i.e. Desktop, Tablet and Mobile)
    - Present the markup the client ***BEFORE*** you start coding the website!
+ Maybe you want to outsource this to a graphic designer!
+ Example Software: Balsamiq Mockups
    - Balsamic is the industry standart (NOT Free)
    - Pencil Evolus is a free tool that is avalable in Ubuntu https://pencil.evolus.vn/
+ Use dummy pictures within the mockup
+ Make mockups for all the pages, not just the landing page!
+ After a first Iteration, you can give the mockups again to the graphics designer and let him do the mockups with images and colors again
    - This is the basic design for starting off coding

# Basic Setup for a new website project
1.: Setting up the background color of the
2.: Choosing a font size for all pages.
    - You can import fonts from google fonts (https://fonts.google.com/)
    - This is just one line in you HTML document header part and one rule for the body in your CSS file. 
        - Go to a font style and click on the example sentence. Then click on the "Select this style" button to get the link and the CSS rule. 

# Using Bootstap
+ Example Implementations are under Components: 
    - https://getbootstrap.com/docs/5.1/components/navbar/

# Central element / Container of the web page
+ ... is called jumbotron in bootstrap
+ Needs a container div element around it
+ If you want a background image that is responsivly stratching, we need to imporz an image into a jumbotron class div element and give it the CSS bootstrap class img-responsive visible-xs 
    - ```
        <div id="main-content" class="container">
            <div class="jumbotron">
                <img src="images/myimg.jpg" alt="My Picture" class="img-responsive visable-xs">
            <\div>
        <\div>    
    ```
This image is loaded always and is only visible for screen sizes that are smaller then the bootstrap xs screen size
+ Because of the container div around the jumbotron div, the edges of the main content of the page is nicely aligned with the navbar

# Embed a map from google maps into your site
+ Google maps has the possability to deliver HTML accessable sctions from map points on google maps
    - To do this, you go to google maps, search for a location and then you can go to settings --> "Karte teilen oder einbetten" --> Karte einbetten an you can copy an iframe HTML tag 
+ To have a link to the google maps site and also have the image on your website, use the following syntax:
```
<div class="col-md-12">
    <a href=www.google.maps.com/path" target="_blank">
        <div id="my_css_class">
            <iframe src="google.maps.com/embedding/link" width="100%" height="250px">
            <span>map</span>
        </div>
    </a>
</div>
```

# Best Practice
+ At the end of all main html tags, like navbar, jumbotron, footer, you should add a comment to tell where which div element ends
+ To make a horizontal ruler line, you need to define a html hr tag 
+ In order to have a consistent view over all pages of your webpage, just copy paste the page and replace the main content container with your new content.
+ opacity is to make a HTML tags background colut transparent 
+ Make `<hr class=col-xs-12>` for separating items on your page if you are in an extra small setting
+ Basically, you define your HTML structure up front and then add bootstrap classen. If your not confident with the result, you can override some classes or add additional classes in your styles css file. 

# Hot to center something that is not centerable by default
+ Set width and hight fixed and set the margin to 0 auto 15px
    - margin top left right down --> 0 top, auto left, auto right and 15 px down
    - Make the `overflow: hidden;` 

# Smaller then xs in bootstrap
+ If something is not nicely designed in the xs-setting in bootstrap, you need to define your own xss definition

# Show currently selected Icon on the page within the Navbar or Footer
+ Use the bootstrap class `class="active"`
    - This makes the associated button look like you hower over the clickable element 
# Testing your Implementation
+ After finishing the basic styling, you should try to provoke some edge cases, like a very long text, heading, ... 
    - Especially if the text is requested from a server (e.g. with javascript)
+ One item is longer then others and the others float to the right or next line = ***Responsive column resets*** in bootstrap.
    - You just need to add an additional div element with the class `<div class="clearfix visible-md-block visible-lg-block"></div>`
        - You want to add this after all _n_ div elements that should not floated automatically 