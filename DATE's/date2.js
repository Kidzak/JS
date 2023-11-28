

function getWeeklyDay() {

    let today = new Date(year, month -1, dzien);

    let tune = new Intl.DateTimeFormat("es-ES",{weekday:"long"}).format(today);

    let DayzOfWeek = [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes', 
        'Sabado',
        'Domingo',
    ];

    return tune;
};


    let year = 2023;
    let month = 11;
    let dzien = 28;
    let finish = getWeeklyDay(year, month, dzien);

console.log(finish);