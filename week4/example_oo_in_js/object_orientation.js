#!/usr/bin/node

// MyCircle class
function MyCircle (radius, color_obj) {
    this.radius = radius;
    this.color = color_obj; // by Reference

    // methods
    this.getColor = function(){
        return this.color.color;
    };

    this.calc_area = function() {
        return Math.PI * Math.pow(this.radius, 2); 
    };
}



global_circal_color = {color: "blue"};
global_cirle_radius = {radius: 10};
circle_instance = new MyCircle(global_cirle_radius.radius, global_circal_color);
    // global_cirle_radius.radius is like a dereference operator in C++

// print out to terminal or website
console.log("The color of the circle is: " + circle_instance.getColor());
console.log("The area of the circle is: " + circle_instance.calc_area());