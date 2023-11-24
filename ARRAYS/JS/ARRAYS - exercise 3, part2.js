"use strict";

function filterRangeInPlace(arr,a,b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let RodzynkoweWino = [2,4,6,8,10,12,14,16,18];
filterRangeInPlace(RodzynkoweWino,6,14);

alert(RodzynkoweWino);