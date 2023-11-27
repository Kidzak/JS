"use strict";

function stworzPana(name, address, bodydimensions) {
    const pan = {
        name,
        address,
        bodydimensions,
    };
}

const user1 = stworzPana("usuario1", "choco street", "height: 183, weight: 77");
const user2 = stworzPana("usuario2", "coconut street", "height: 153, weight: 46");

console.log(user1)
console.log(user2)