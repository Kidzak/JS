"use strict";



function getAverageAge(yzer){
    let wiektotalny = yzer.reduce(function(sum, yzer) {
        return sum + yzer.age;
    }, 0);

    let mediumdone = wiektotalny / yzer.length;

    return mediumdone;
}

let yzer = [
    {name: "Oskar", age: 23},
    {name: "Marian", age: 80},
    {name: "Tomek", age: 3},
    {name: "Gienia", age: 69},
];

let mediumdone = getAverageAge(yzer);

console.log(mediumdone);