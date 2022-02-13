# Lessons Learned by doing the homework

+ Download bootstrap from (https://getbootstrap.com/docs/3.3/getting-started/) and unpack it. Then you can add the css folder to your webpage top-level folder and reference it in your HTML files that you create on your own
	- Bootstrap delivers two folders by default: `css` and `js`. In order to make it work properly, you need to download a Version of jquery. 
	- You can download jquery here: https://code.jquery.com/jquery-3.6.0.min.js --> Copy the content and place the file, named `jquery-3.6.0.min.js` into the js folder that comes with unpacking the bootstrap archive. 

+ HTML meta tag viewport: 
	- Is used to tell the browser how to render the webpage. E.g. on mobile devices, the default behaviour is to zoom out the webpage a little. If you do 
		```<meta name="viewport" content="device-width, initial-scale=1">```
	  , the webpage will be displayed on the normal scale on a mobile device. It overwrites the default behaviour of the web browser where the webpage is stored. (https://paulund.co.uk/understanding-the-viewport-meta-tag) 

+ What is jquery?
	- A javascript library for manipulating front ends
	
+ Since CSS lets you overwrite styling rules if they are declared further down the line, we need to include (aka ```<link rel="stylesheet" href="css/my_styles.css">```) ***AFTER*** we added the link to bootstrap.
	- The `rel`-Tag tells the relationship between the href and the HTML document where it is located.

+ At the ***END*** of our body-tag, we need to include the javascript files into our web page, that are used within our webpage!

+ All bootstrap files that you do not use in your final web page should be deleted in order to have as less web traffic to load your site as possible. 

+ Update webpage whenever you safe an update to a file: 
	- Install nodejs and browsersync
	- browser-sync start --server --directory --files "**/*"
		- ```**/*``` means that we want to look for changes in the current folder as well as for files in all subfolders of the current folder.
		
+ Adding a special font for your web page / Add a font for your webpage that is rendered on every client device in the same way: Use google fonts
	- Go to https://fonts.google.com/
	- Choose a font that you like for your webpage and click on it
	- Choose the exact size, etc. 
	- Add the `<link href="path/to/font">` to the head section ***AFTER*** the CSS stylesheet definitions
	- Add the font-family CSS rule to the elements that the font should be applied to in your `style.css` File of your website project. 
	
+ Insert the navbar to the `<header>...Header content...</header> ` tag of your HTML document, which is placed within the body tag. 
	- The header tag contains introductory content and / or the navbar element for your page. 
	- Within the header tag, you can add a `<nav>` tag that is used in HTML5 to deliver navigation links to other sites of your webpage project. (Examples: Table of contents, Navbars, menus, ...)
		- Bootstrap has some classes for your nav element to add a nicely looking navbar to it: https://getbootstrap.com/docs/3.3/components/#navbar
		
+ Common practice is to use ID-selectors to do your own styling and use classes from bootstrap
	- If a bootstrap class is not appropriate for your purpose, you can override some elements of the used classes from bootstrap in your `styles.css` file of your website project. 

## Collapsable Navs
+ Are default of bootstrap. You can address the elements that are hidden behind the collapsable nav by using the attribute `data-target=#your_target_id` to let the bootstrap-javascript plugin know, which elements should be placed into the expandable nav bar. 
	- The `data-target=` part of bootstrap is part of the selector API (collapse.js --> From bootstrap js folder)

+ The class for the unordered list `<ul class=navbar-right>` is the equivalent to the float right for navbar elements. 

+ By using the bootstrap class `hidden-lg`, `hidden-md` or `hidden-sm` we can hide some html tags with their content in a responsive way
	- Alternativly you can hide elements that should only be visible in a specific browser width with the class `visible-xs`, `visible-md` or `visible-lg`
