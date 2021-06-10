const cost = 25;
let rent = 0;
if (rent <= 10 ) {
    rent = cost * 100;
}
else if(rent <= 20){
    var firstTenDays = 10 * 100;
    var remaining = cost  - 10;
    var secondTenDays = remaining * 80;
    rent = firstTenDays + secondTenDays;
}
else{
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remaining = cost - 20;
    var thTenDays = remaining * 50;
    rent = firstTenDays + secondTenDays + thTenDays;
}
console.log(rent);