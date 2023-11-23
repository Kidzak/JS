"use strict";

// EXERCISE 3


let arr = ["a", "b"];
arr.push(function() {
alert( this );
});
arr[2](); // ?

// Nothing happening just showing this element of code: 
// '(function() {
// alert( this );
// });'