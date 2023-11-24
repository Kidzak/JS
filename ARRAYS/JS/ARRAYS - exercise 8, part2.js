"use strict";

let uzer = [
    {name: "Tomek", age: 13},
    {name: "Bolek", age: 9},
    {name: "Lolek", age: 17},
    {name: "Maryla", age: 2137},
    {name: "Ania", age: 3},
    {name: "Asia", age: 12},
]

function sortByAge(uzer) {
    uzer.sort(function(a,b){
        return a.age - b.age;
    });
};

sortByAge(uzer)

console.log(uzer)