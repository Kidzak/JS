"use strict";

function groupById(arr) {
let wynikowe = arr.reduce(function(imiona, czlek) {
    imiona[czlek.id] = czlek;
    return imiona;
}, {});
  
return wynikowe;
}
  
  let wielcyludzie = [
    {id: 'Jac', name: "Jacky Jan", age: 35},
    {id: 'leg', name: "Legan Hipis", age: 25},
    {id: 'pudzian', name: "Mariusz Pudzianowski", age: 31},
];
  
let usersById = groupById(wielcyludzie);
console.log(usersById);
  