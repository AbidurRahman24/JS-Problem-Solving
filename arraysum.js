var array = [1, 2, 3, 4, 5];
    
// // Getting sum of numbers
// var sum = array.reduce(function(a, b){
//     return a + b;
// }, 0);

// console.log(sum); 

var sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
     sum = sum + element;
}
console.log('total:', sum);