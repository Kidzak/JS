"use strict";

let looser = [
    {name: "Grzegorz", surname: "Brzęczyszczykiewicz", id: 0},
    {name: "Gertruda", surname: "Walifiutta", id: 1},
    {name: "Leonidas", surname: "Mickiewicz", id: 2},
    //{name: "Maryla", surname: "Rodowicz", id: 3},
    //{name: "Christopher", surname: "Culombus", id: 4},
]

let PelneImionaLooserow = looser.map(function(looser) {

    return{
        id: looser.id,
        fullname: looser.name + " " + looser.surname
    };
});

console.log(PelneImionaLooserow);