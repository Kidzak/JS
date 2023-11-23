"use strict";

// EXERCISE 1

let fruits = ["Apples", "Pear", "Orange"];
// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");
// what's in fruits?
alert( fruits.length ); // ?

// this code will show number 4.



// EXERCISE 2


// a)
    let styles =["Jazz","Blues"]
    alert(styles)
// b)   
    styles.push("Rock'N'Roll")
    alert(styles)
// c)
    styles.splice(1,1, "Classical")
    alert(styles)

// d)

    styles.shift(0)
    alert(styles)

// e)

    styles.push("Rap","Reggae")
    alert(styles)




// EXERCISE 3


let arr = ["a", "b"];
arr.push(function() {
alert( this );
});
arr[2](); // ?

// Nothing happening just showing this element: 
// '(function() {
// alert( this );
// });'

// EXERCISE 4

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );



  // EXERCISE 5


  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) partialSum = 0;
    }
  
    return maxSum;
  }


  alert( getMaxSubSum([-1, 2, 3, -9]) ); 
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
  alert( getMaxSubSum([-2, -1, 1, 2]) ); 
  alert( getMaxSubSum([100, -9, 2, -3, 5]) );
  alert( getMaxSubSum([1, 2, 3]) ); 
  alert( getMaxSubSum([-1, -2, -3]) ); 
