"use strict";

let spare_parts = {
    tires: 120, 
    rearLights: 48,
    clutchKit: 97,
    engine: 30,
};

function dodajCzesci(liczba, czesci) {
    for (let czesc in czesci) {
        czesci[czesc] += liczba;
    }
}

    console.log("Before buying spare parts:");
    console.log(spare_parts);

        dodajCzesci(5, spare_parts);

    console.log("After buying spare parts");
    console.log(spare_parts)


