# Week 4: Introduction to Javascript

## Basic Javascript Setup
+ After every statement, you need to use a semicolon to tell the interpreter that a statement is ended.
    - ***This is recommened but NOT neccessary!*** If you do not place a semicolon at the end of a line in javascript, the interpreter will do this for you! ==> No runtime error, but maybe undefined behaviour! (see "Best Practice with curly braces")
+ Function scopes are defined by curly braces. 
+ Place the javascript code within the HTML tag `<script></script>` 
    - CAUTION: You NEED an opening AND closing script tag. It can not stand alone
    - Between the tags, you can write your js-code directly or you include a path to the code that should be executed
        - Example: `<script src=/rel/path/to/script.js></script>`
        - You can define additional code that is executed AFTER the source code file between the script HTML-Tags!
+ Javascript is an interpreted library that is executed sequentially!
    - Therefore, everything that is written within the script-opening and -closing tag is executed AFTER the src file. 
+ Printing to terminal in javascript: 
    - `console.log(variable_to_print)`

+ You can write and show the javascript output within the developer tools in chrome (or firefox)

### Functions, Scopes and Variables
+ Variables: 
    - `var message = "hi;"`
    - Variables are dynamically typed (like Python --> The type is deduced by the interpreter)

+ Functions
    - Function definition: 
        ```
        function name (param_a, param_b) {#function body}
        ```
    - Function-Pointer definition:
        ```
        var name = function(param_a, param_b) {#function body}
        ```
    - Invoke / execute a function: 
        ```
        name(test_input_1, test_input_2); 
        ```
    - Returning values or end function:
        ```
        function compare (x, y)
        {
            return x > y;
        }
        ```
        * You DO NOT DEFINE a return type for the function. It is deduced by the javascript interpreter
        * If you write a `return` statement without a value behind it, the javascript interpreter ends the function without a return value. (I.e. void as compared to C++)
    - Even if a function has input parameters defined, you ***CAN*** invoke the function without parameters, since they are interpreted as `NULL`

+ Scopes:
    - Global scope: 
        * Variables and functions that are defined within the global scope are available everywhere in the js project / website / script
    - Lexical scope:
        * Function scope. Variables defined in this scope are only visable within the scope where they defined. 
        * NO block-scopes in javascript
        * You ***CAN*** define functions within other functions. 
            - These functions CAN access the variables and functions of their parents scope/function body. 
    - ***Scope Chain***:
        - Everything in javascript is executed within a context
        - Every function invocation creates a new execution context 
        - Each execution context has: 
            * Its own variable environment where the variables are stored that the function creates
            * `this` object of the execution-context
            * Reference to the outer environment (only the one to the next higher level of the execution context)
        - The global scope does not have a valid reference to the next higher scope since it is the highest scope that is defined for a project
        - How does the scope chain works?
        _Referenced (not defined) variable will be searched for in its current scope first. If not found, the outer reference will be searched. If not found, the out reference's outer reference will be search, etc. This will keep going until the global scope. If not found in global scope, the variable will be interpreted as `undefined`_
        - ***This means that the access of a variable does not depend on the execution context where a function is invoked from BUT from the physical definition of the program.***
            - Example: [function_scopes](/images/function_scopes_javascript.png)

## Types in javascript
+ Type = a particular datastructure
    - Build in (the language) types can be used to construct user defined datastructures
+ Javascript has 7 build in types
    - ***Object Type***: An object is a collection of name-value pairs. I.e. hash-Tables
    - ***Primitive Type***: Single, immutable values; NOT an object. Once the value is set, the value of the primitive type becomes immutable (i.e. you only have read only access to it.) ==> If you want to create a new variable/primitiv type, based on another, already defined primitive type, you need to store the result of the operation from which it is created in a new primitiv type variable. (That means, a new part of memory NEEDS TO BE ALLOCATED to store the new variable) 

+ Primitive Types in JS: 
    - `Boolean`
    - `undefined`: No value has ever been set to a variable. If a variable is declared but never assigned a value to it. You can but SHOULD NEVER assign undefined to a value by hand. This is very bad practice and in contrast to its intented meaning. `undefined` _signifies the lack of definition for a variable._ 
    - `Null`: Signifies the lag of value for a variable.
    - `Number`: Is the only numeric type in javascript. Under the hood it is a float 64. Javascript does NOT have an integer type - they are just a subset to floating points.
    - `String`: Strings can be defined with double as well as single quotes. 
    - `Symbol`: ES6 Type - it is currently not used that much. 

## Common Language Constructs
+ String concatination: 
    ```
    var my_str = "Hello "; 
    my_str += "World"; 
    console.log(my_str); 
    ```
+ Math operators for Number datatypes can be used based on the rules of math (i.e. braces first, ...)
    - If you divide throu zero or you calculate something with that has the undefined type associated with it, you will receive a `NaN` value as result. 

+ Logical operators: 
    - `if (x == 5) { console.log("x equals 5") }`
    - ***Type coercion***: (dt.: Type Nötigung) If the js interpreter sees that you want to compare two different (primitive) types, it will try to reinterpret the type and does the comparison afterwards.
        - If you want to prevent type coercion, you need to implement _strict equallity_
            - `if (x === y)`
            - The interpreter checks, if the compared variables has the same type and if not, the comparison returns `false`.
            - Return value is `NOT`
    - OR: `||`
    - AND: `&&`

+ Boolean expressions: 
    - False is: 
        * `false`
        * `null`
        * `undefined`
        * `""`
        * `NaN`
        * `0`
        * Checking booleans: In the js console: ```Boolean(<test_expression>)```
    - True is: 
        * `true`
        * `1 `
        * `-1`
        * `"false"` (i.e. all not empty strings)

## Best Practice with curly braces
+ ***Always*** put the curly brace INTO the line of a return keyword, if you want to define the return statement in more then one line!
    - Example: 
        ```
        function a()
        {
            return 
            {
                name: "Jens"
            };
        }
        ```
        If you do this, the interpreter will add a semicolon after the return keyword and the created object will never get created! How to do this properly: 
        ```
        function a()
        {
            return {
                name: "Jens"
            };
        }
        ```
    - Basically you ***should*** place opening curly braces ***into the same (!) line as the last statement!***. From now on, all our examples will follow that best practice! (See them for examples) 

+ for loop: 
    ```
    var sum = 0; 
    for (var i = 0; i < 10; i++) {
        sum += i;
    }
    console.log(sum)
    ```
+ Handling default and empty values: 
    - Example: 
    ```
    function orderChickenWith(sideDish) {
        sideDish = sideDish || "whatever!"; 
        console.log("Chicken with " + sideDish);   
    }
    ```
    is the same as 
    ```
    function orderChickenWith(sideDish) {
        if (sideDish === undefined) {
            sideDish = "whatever!"; 
        }
        console.log("Chicken with " + sideDish); 
    }
    ```
    - `sideDish = sideDish || "whatever!";` 
        - sideDish gets cocoised into a boolean, since the OR-operator requires this. 
        - The direct assignment tells the interpreter that it should return (on the RHS of the expression) the value that is written into the compared variables
            - I.e.: if logical statement evaluates to true, it will take the value on the left of the logical operator (here this is the OR operator) and if it evaluates to false, it will return the right side of the logical statement to the assignment operator.   
            - In case of the logical OR operator, it will return whatever evaluates to true first! (If both are true, it will the left side of the OR-statement.) 
        - This OR-Statement is commonly used in a wide variaty of javascript libraries. 
 
 ## Objects in Javascript
 + Remember: Objects are just key-value pairs in javascript
 + To create an object in javascript, you need to define a new statement: 
    - `var my_obj = new Object();`
+ You can create a key for an object simply by defining it with the dot operator: 
    - `my_obj.attr1 = 5;`
    - `my_obj.attr2 = "Hello World";`
    - You do not have to specify the type of the value behind the key that you are creating right away with the dot operator. 
+ What you can NOT do is to assign a nested object with the dot operator. If you want to create a nested object within another object, you need to create the nested object first, before you define its keys (and their associated values). 
    - Example: 
    ```
    var my_nested_obj = new Object(); 
    my_nested_obj.nested = new Object(); 
    my_nested_obj.nested.test_attr1 = 5; 
    my_nested_obj.test_attr2 = 6; 
    ```
    - Counter example: (NOT working)
    ```
    var my_nested_obj = new Object(); 
    my_nested_obj.nested.test_attr1 = 5;
    ```
    - In the last example, there is no object that can contain a key with the name `test_attr1` and therefore it is not working. 
+ To access or create new keys for an object, there are two valid kinds how you can do this: 
    - Access by the dot operator after the key was already created: 
        - `console.log(my_nested_obj.test_attr2); // prints 6 to the console`
    - Access the key by its name as a string with the braced operator:
        - `console.log(my_nested_obj["test_attr_2"]);` 
        - This method could also be used in order to create new keys for an existing object:
            - `my_nested_obj["test_attr_3"] = "new test entry"`
            - With it, it is also possible to create keys for an object that would otherwise not be valid as a javascript object identifier. (e.g. a key with empty spaces, like: `my_nested_obj["spacy key"] = 42;`)