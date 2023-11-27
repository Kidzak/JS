"use strict";
  
  let wyplata = {
    Marek: 220,
    Piotr: 50,
    Franek: 140,
  };

  let sum = 0;
    for (let key in wyplata) {
      sum += wyplata[key];
    }

    console.log(sum)