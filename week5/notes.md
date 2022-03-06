# Week 5: Javascript Web Applications

## DOM Manipulation
+ DOM = Document Object Module
    - "How can we manipulate the HTML pages content with javascript?"
+ There are multiple possibilities to manipulate your html page with javascript. Remark: Only the HTML page. The CSS styling is done separatly even if you can manipulate IDs or class names within your HTML document.  
+ The default javascript window-object contains a special sub property element called "document", from which we can get information about the HTML document.
    - We can look at its properties by typing `window.document` to the javascript console (e.g. within your browser)
    - We can access html tags from the document property of the window object by using its associated methods. 
        - e.g.: `window.document.getElementByID("<YourHTMLIDHere>");` (Caution: Without the # sign at front)
            * You will get the html portion from the opening until the closing tag by doing this. 
            * In case we are programming within the global scope, we do not need to specify the `window.` object in order to access the `document` property of it, since the global scope equals the window object
+ Be careful with javascript and add the script within the head tag of your HTML document: HTML is interpreted / rendered sequentially. If we try to access a tag before it is intereted (e.g. an ID-Tag called "name" within the body of the html file and the javascript script is executed within the head tag of the file, the `name` ID is not present at the document property of the window object during the execution of the javascript code.)
    - One way to fix this problem is to invoke the javascript code at the end of the `body` or directly before the `<\html>` closing tag with a script tag. Example: 
    ```
            <script src="js/script.js"></script>
        </body>
    </html>
    ```
+ The basic Keyword to lookup to interact with the webpage is "Event handling javascript"

## Special methods for interacting with the html document within javascript:
+ We can check if a property is part of another object (e.g. part of the document property of the window object) by using the `instanceof` keyword: 
    - `console.log(document instanceof HTMLDocument);`
    - HTMLDocument is another special property (aka sub object) of the `window` object (https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument)
    - ***HTMLDocument is the most important subobject of the window object from which we can get parts of the rendered HTML code to manipulate it!!!***

## Using the HTMLDocument object to manipulate the Webpage _after_ it is rendered
+ One way to do event handling within the html document is to use tag-attributes like `<button onclick="sayHello()">`, where the function `sayHello()` is defined within a javascript document that is included within the head tag of the document and is directly exposed to the window object.

***Example:***
+ HTML: 
```
<body>
    <p>
        Say hello to 
        <input id="name" type="text"> <!-- No closing tags for the html input tag -->
        <button onclick="sayHello();"> Say it! </button>
    </p>
    <div id="content"></div>
    <script src="js/script.js"></script>
</body>

```


+ Javascript: 
```
function sayHello() {
    // receive name and build up the message from the web page
    var received_name = document.getElementById("name").value; // without the .value we would get the complete html code from the opening to the closing tag (and including them) if we only use the .value attribute of the received attribute, we only get the content behind the opening and closing tag that we accessed by its ID. ~ CAUTION: If there are sub html tags between the opening and closing tag, you will get them as part of the called value

    var message = "<h2>Hello " + received_name + "!</h2>"; 

    // insert the message into the webpage (WITHOUT reloading)
    //document.getElementById().textContent = message;
    document.getElementById().innerHTML = message; // insert the content within the message variable and interpret it as html (instead of plain text like it would if we insert it to the .textContent attribute)
}
```
    - In the example above, we see that we can access (if we do it on the rhs of the assignment operator) or rewrite (if we do it on the lhs of the assignment operator) parts of the HTMLDocument object within the window object that the browser has rendered before.
    - Besides from "onclick" there are a lot of other event handler (e.g. onblur: if an element that is associated with a tag loses focus, like clicking to an empty space on the page; onpageloaded: if the complete html page is rendered)
    - Reminder: 
    ```
    if (name === "student") {
        message = "No valid name!";
    }
    ```
        * Triple equals is like "explicit" Keyword in C++ - The javascript interpreter is not allowed to reinterpret the given object. In the example, `name` can only be interpreted as a string (and not as an object)
## Alternative to `.getElementById()`:
+ We can select html elements by using the CSS selectors (e.g. self-defined or library defined IDs, class labels or even tag names)
    - In order to do this, we can do the following: 
    ```
    document.querySelector("#title").textContent; 
    // OR
    document.querySelector("h1").textContent;
    ```
        * CAUTION: The querySelector used the FIRST occurance of the selected query element within the html page, if there is more then one present. If you want all occuences, you need to use the `.queryAllSelector("h1")` method and you will receive an array back from it.
## Handling Events
+ If you add event functions to the html tags like the "onclick" example before, you will dirty up your HTML document, which should only be used to define the structure of your content and not how the functional dependencies are associated. In order to avoid this, we can do ***"Unobstrusive event binding"***
    - By using unobstrusive event binding, there will be no event tags within the HTML document.
 + We can use the query selector and then use the `.addEventListener("<eventType>", functionPtr);` or we use an event function directly as the method of the resulting object that is returned by the querySelector 
 + Example: 
 ```
document.querySelector("button").addEventListener("click", sayHello);
 ```
    - ***CAUTION: The sayHello function pointer object is used as a callback with the `this` argument (and therefore the window object)***
+ A very important event to use is the "DOMContentLoaded": The HTML page is loaded to memory but images, ... is not loaded. At this point of loading the page, all HTML tags will be present. 
    - This enables us to place everything that we want to execute in the head tag without executing it right away and therefore we do not need to place the javascript code at the end of the html document. 
    - Example: 
    ```
    <!-- index.html -->
    <head>
        <script src="js/script.js"></script>
    </head>
    ```
    and 
    ```
    // src/script.js
    document.addEventListener("DOMContentLoaded", function(event) {
        function sayHello(event) {
            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";
            document.getElementById("content").innerHTML = message;
        }
    }); 
    ```
## The `event` argument
+ Defines the event properties, like "Where is the mouse is placed", "What keys are pressed", ... during the event invocation
    - https://developer.mozilla.org/de/docs/Web/API/Event
- Example: Logging the mouse movement: 
```
document.querySelector("body").addEventListener("mousemove", function(event) {
    console.log("[x, y]" + event.clientX + ", " + event.clientY); // relative to the browser window
});
```
## Basics to the Event Listener
+ The event listener is a subprocess that runs within the browser which is primed by the javascript interpreter and is executed asynchronly 

# Ajax
## HTTP Basics
+ HTTP = Hyper Text Transfer Protocol
    - Stateless Request-Response protocol --> The servers answer does not know (on protocol level) if a client already sent a request or not. Therefore, no state is preserved during the server-client interaction. 
+ URN = Uniform Ressource Name
    - Identifies a name or ressource 
    - Does NOT tell us, how to get the corresponding ressource
    - Commonly used to define a business wide identifier for a ressource within the server
+ URI = Uniform Ressource Identifier
    - Uniformly identifies ressource or location of a ressource
    - Does not tell us how to get the ressource
    - But tells us how to search for the ressource on the host system (e.g. by a folder structure)
        - Basically it is what stands after the protocol and domain part of a URL
+ URL = Uniform Ressource Locator
    - Is basically a Web address
    - Is a subset of URI since we get a domain to the folder structure, so we know where to search for a ressource. 
+ Basic HTTP Requests:
    - HTTP is only a communication protocol and not a method how to connect a client with a server. The server connection needs to be managed separatly
    - GET request: 
        * Basic Website request from the server
    [](/images/http_get.png)
    - POST request:
        * Sends data to be processed
        * Data is send within the payload (aka body) of the request 
        * NO query string
    [](/images/http_post.png)
+ Typical HTTP response: 
[](/images/http_response.png)

## Ajax basics
+ Ajax = Asynchronous Javascript and XML
    - XML is today outdated - today we use json 
+ Idea: 
    - Instead of requesting new web pages by the server whenever the user clicks on something and therefore needing a huge bandwidth over time, we just request parts of the html page that are generated by the server on the (HTTP) request and then insert it to the webpage when the server has answered the client. ==> Way faster and nicer user experience
+ Asynchronous execution: 
    - The execution of the (java-)script is ***NOT*** blocked while the request is done. 
    - After the response from the asynchronous request is received, the callback that was associated with the asynchronous request, is executed
+ Asynchronous execution with javascript: 
    - Basically javascript is not able to execute something concurrently or asychronously, but the browser can. 
    - Basic browser internals: 
    [](images/browser_interals.png)
    - When a request is done by the javascript code, it is handed over (with a javascript function handler - aka address where the callback function is defined -) and the javascript code is further executed. The response of the http requestor is not waited for. 
    - After the http requestor received its response from the server, the callback function is invoced and send to the javascript engine (as an interrupt or at the end of the regular javascript script).
## Using the HTTP Requestor from the browser
+ In order to interact with the http requestor of the browser, we need to do the following: 
```
function getRequestObject() {
    if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
    } 
    else if (window.ActiveXObject) {
        return (new ActiveXObject("Microsoft.XMLHTTP")); // for old Internet Explorer browsers
    }
    else {
        global.alert("Ajax is not supported");
        return (null);
    }
}
```
    - Here we can see, that the requestor object is part of the window object (aka an abstraction to the browser functionallities)
+ The request object (that we receive from the `getRequestObject` or directly from the `window` object), we need to assign a callback to its `.onreadystatechange` attribute (aka subobject). 
    - After we did this, we can define the request and send it to the server: 
```
var request = getRequestObject(); 
request.onreadstatechange = callback_fcn; // callback_fnc needs to be define at a different place and is handed over by reference (and is not invoked, since we did not hand over parameters or braces that would call the function)
request.open("GET", requestURL, true); // Defines the request and makes it possible to adjust it by the methods that the request object delivers
request.send(null); // sends the created request to the server 
```
+ `null` in the send request is only done by http requests ***WITHOUT*** a payload!!! If we want to send a payload (e.g. for a POST request), we would hand over the payload in the `.send(payload_var);` method!
+ The request object holds the request as well as the answer (including http header information)
+ See Lesson 57 for more details how to use the request object properly!
    - The callback needs to have the structure `callback_fnc(requestObj)` but best practice (since javascript is not able to execute concurrently with mutexes), we need to use a handleResponse function that takes the callback as well as the request object. See the lecture for more details!

## JSON
+ JSON = Javascript Object Notation
    - Light weight data-interchange format
+ Idependend of programming languages
+ State of the art for data exchange!
+ Key formal definition: 
    - Property Names (aka keys) need to be in doublequotes!!!
    - String values need to be in doublequotes!
+ JSON is just a string! ***NOT*** a valid javascript object
    - We have converter functions to convert a JSON string to a javascript object 
`var obj = JSON.parse(jsonstr);`
`var str = JSON.strinify(obj);`
+ If you want to use javascript strings and process strings, you need to use single quotes for the string processing and the double quotes for the json-strings components! 