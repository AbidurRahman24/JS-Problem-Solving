// 10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 1*2*3*4*5*6
// 6! = (6-1)!*6
// 7! = (7-1)!*7
// 8! = (8-1)!*8
// n! = (n-1)!*n
// n! = n*(n-1)!

const fuctorialRecursive = (n) =>{
    if (n == 0) {
        return 1
    }
    else{
        return n* fuctorialRecursive(n-1)
    }
}
const result = fuctorialRecursive(8);
console.log(result);