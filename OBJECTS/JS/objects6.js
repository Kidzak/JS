"use strict";

let frutas={
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
    }


let suma = 0;
    for (let key in frutas) {
        suma += frutas[key]
    };

    console.log("Sum of kg of all fruits:" + suma);