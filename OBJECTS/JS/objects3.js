"use strict";

let kwadrat = {
    width: 20,
    height: 70,
    title: "My square"
  };
  
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(kwadrat);
  
 console.log(kwadrat.width , kwadrat.height )
