// 0,1,2,3,5,8,13,21,34,
// Fn = (fn-1) + (fn -2)

// f2 = f(2-1) + f(2-2) = 1+0 = 1
// f3 = f(3-1) + f(3-2) = 2+1 = 3
// f[4] = f(4-1) + f(4-2) //3+2 = 5
// f[5] = f(5-1) + f(5-2) = 4+3 = 7

// const fibonacci = (n) =>{
//     let fibo = [0,1]
//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2]
//     }
//     return fibo;
// }
// const result = fibonacci(15);
// console.log(result);


// loop 
const fibonacci = n =>{
    const fibo = [0,1]
    for (let i = 2; i <=n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
        
    }
    return fibo
}
const result = fibonacci(10)
console.log(result);