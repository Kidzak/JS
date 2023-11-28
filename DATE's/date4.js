function getLastDayOfMonth(roczek, miesiaczek) {

    let pierwszaczek = new Date(roczek, miesiaczek)

    pierwszaczek.setDate(0);

    return pierwszaczek.getDate();
}

let roczek = 2023;
let miesiaczek = 10;
let ostatniDzien1 = getLastDayOfMonth(roczek, miesiaczek);

console.log(ostatniDzien1);

