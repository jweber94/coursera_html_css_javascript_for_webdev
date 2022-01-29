# Important remarks that come up while doing the homework
+ If you use a framework like bootstrap or program your own CSS framework, the div elements are just frames to place your acutal HTML tags for your content. ***You should NOT place your content directly to the framework div element!***
    - Use globally `box-sizing: border-box;` in order to let the margin define the maximum size of your elements
    - If you set a margin to the boxes of your framework und use 100% of the width of the framework generated grid, the last box will end up in a new row.
    - While using border-box, you can setup margins of the elements that are contained within a grid div-element without screwing the grid layout up.
        - Place a section or paragraph HTML tag within the grid div-element in order to setup margins etc. 
+ Margin is the outmost "border" of a HTML object -> Space between the border of a content box and the net content box. The margins of two neightboring HTML boxes are added together visually. (and acutally)
+ Padding is the space between the border of your box and the content 
+ The border separates the padding and the margin