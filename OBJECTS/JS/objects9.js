"use strict";
    
let owocy = {
    name: "Tomate",
    kg: 6,

    sell: function() {
        console.log(`Selling ${owocy.kg} kg of ${owocy.name}`)
    },

    buy: function() {
        console.log(`Buying ${owocy.kg} kg of ${owocy.name}`)
    },

    outOfStockDate: function() {
        console.log(`A tamote are out of stock and its not avaible!`)
    },

    buyingDate: function() {
        console.log(`A buying date is not avaible`)
    }
};

owocy.name = "Tomate";
owocy.kg = 6;

owocy.sell();  // Selling 2 kg of Apple
owocy.buy();   // Buying 2 kg of Apple
owocy.outOfStockDate();  // Out of stock date not available
owocy.buyingDate();  // Buying date not available




 