const fuctorial = (n) =>{
    const fact = 1
    for (let i = 0; i < n; i++) {
        const fact = fact * i;
        
    }
    return fact
}
const result = fuctorial(10)
console.log(result);