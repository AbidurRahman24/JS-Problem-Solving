// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// const result = reverseString('hello');
// console.log(result);




// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// const result = reverseString("hello");
// console.log(result);

// for loop revers
function reverseString(str) {
    let revers = ''
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        revers = element + revers
    }
    return revers
}
const text = 'Hello World';
const newStr = reverseString(text)
console.log(newStr);
