"use strict";

function filterRange(arr, a, b) {
    let wynik = arr.filter(function(VODKA){
        return VODKA >= a && VODKA <= b;
    });

    return wynik
}

let bimberARRAY = [1,3,5,7,9,11,13];
let filterBimberARRAY = filterRange(bimberARRAY,5,13);

document.getElementById("pole").innerHTML = bimberARRAY;
document.getElementById("pole").innerHTML = filterBimberARRAY;