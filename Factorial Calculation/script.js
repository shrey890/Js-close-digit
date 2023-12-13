function calcFact(number) {
    if (number < 0) {
        return "Undefined";
    } else if (number === 0 || number === 1) {
        return 1
    } else {
        let fact = 1
        for (let i = 2; i <= number; i++) {
            fact *= i
        }
        return fact
    }
}
let num = 4
let res = calcFact(num)
console.log(`the factorial of ${num} is ${res}`)    
