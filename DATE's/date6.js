function getSecondsToNewYear () {
        let timeTravel = new Date ();

    let paczek = timeTravel.getFullYear();

        let NextYear = paczek +1;

    let endOfTheYear = new Date(NextYear, 0, 1);

        let secondsToNewYear = ((endOfTheYear - timeTravel)/1000)   ;

    return secondsToNewYear;
}

let DaneWynikajaceZeSkryptu = getSecondsToNewYear();

console.log(DaneWynikajaceZeSkryptu);


