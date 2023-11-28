function getMyBronDay() {
    let reality = new Date(year1, month1 -1, dzien1);

    let terazniejszosc = new Intl.DateTimeFormat("en-EN", {weekday:"long"}).format(reality);

    let WeekOfDayz = [
        'Monday',
        'Tusday',
        'Wednesday',
        'Thursday',
        'Friday', 
        'Saturday',
        'Sunday',
    ];

    return terazniejszosc;
}


let dzien1 = 9;
let month1 = 8;
let year1 = 2006;

let relatywnie = getMyBronDay(dzien1, month1, year1); 

console.log(relatywnie);