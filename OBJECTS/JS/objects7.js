"use strict";

let owocki = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };


function getTotalKgPerFruit(owocki) {
    let totalneOwocki = {};
  
    for (let fruit in owocki) {
      let fruitName = fruit.split(" ")[0];
  
        if (totalneOwocki[fruitName]) {
        totalneOwocki[fruitName] += owocki[fruit];
        } else {
        totalneOwocki[fruitName] = owocki[fruit];
        }
}
  
    return totalneOwocki;
}
  
  
  const totalneKG = getTotalKgPerFruit(owocki);
  console.log("Sum of KG per fruit:", totalneKG);