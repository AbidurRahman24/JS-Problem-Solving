const budgetCalculator = (wac, mob, lab) =>{
    var watch = wac * 50;
    var mobile = mob * 100;
    var labtop = lab * 500;
    return watch + mobile + labtop;

}
const buy = budgetCalculator(2,5,2)
console.log(buy);