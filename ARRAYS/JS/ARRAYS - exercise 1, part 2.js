"use strict";


function camelize(str) {
    let slowka = str.split ("-");
    
    for (let i = 1; i < slowka.length; i++) {
        slowka[i] = slowka[i].charAt(0).toUpperCase() + slowka[i].slice(1);
    }

    return slowka.join("")
}

let wynik = camelize("maly-fiut-wielkie-serce");
    alert(wynik)
