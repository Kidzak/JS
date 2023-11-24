"use strict";

let psiukta = [2,1,3,7];
function shuffle(psiukta) {
    for (let i = psiukta.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [psiukta[i], psiukta[randomIndex]] = [psiukta[randomIndex], psiukta[i]];
    }
}

shuffle(psiukta);

console.log(psiukta);

document.getElementById("pole2").innerHTML = psiukta;