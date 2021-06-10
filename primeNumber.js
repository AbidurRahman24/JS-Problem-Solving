const primeNumber = (n) =>{
    for(let i = 2; i < n; i++){
        if (n % i === 0) {
            return 'prime'
        }
        else{ 
            return 'Not prime'
        }
    }
    
}
const result = primeNumber(20);
console.log(result);