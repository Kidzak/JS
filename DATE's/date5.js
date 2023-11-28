function getSecondsFromNewYear () {
    
    let rlyStone = new Date();
        let raczek = rlyStone.getFullYear();
    let startOfTheYear = new Date(raczek, 0, 1);
        let secondsFromNewYear = (rlyStone - startOfTheYear) / 1000;

        return secondsFromNewYear;
}

let DaneWynikowe = getSecondsFromNewYear(   ); 

console.log(DaneWynikowe);







