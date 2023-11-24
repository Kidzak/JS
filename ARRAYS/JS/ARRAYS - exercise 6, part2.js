"use strict";

let user = [
    {name: "Karol", age: 2137},
    {name: "Wojtaszko", age: 64},
    {name: "Piotrulo", age: 42}
]

let PrzybycieUsera = user.map(function(user) {
    return user.name;
});
console.log(PrzybycieUsera)