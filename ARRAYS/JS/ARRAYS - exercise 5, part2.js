"use strict";

function copySorted(arr) {
    let SortowaneButle = arr.slice();

    SortowaneButle.sort();
    
    return SortowaneButle;
}
let Butla = ["Wino", "Bimber", "Whisky", "Piwo", "Vodka"];
let Sortowane = copySorted(Butla);

console.log(Butla);
console.log(Sortowane);

