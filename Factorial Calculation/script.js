// console.time('Time - ')
// function calcFact(number) {
//     if (number < 0) {
//         return "Undefined";
//     } else if (number === 0 || number === 1) {
//         return 1
//     } else {
//         let fact = 1
//         for (let i = 2; i <= number; i++) {
//             fact *= i
//         }
//         return fact
//     }
// }
// let num = 4
// let res = calcFact(num)
// console.log(`the factorial of ${num} is ${res}`)
// console.time('factorial')
// console.timeEnd('Time - ')
// !----------------------------
console.time()
let x, fact
function factorial(num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        console.log('Please Provide a non-negative integer')
    }
    if (num === 0) return 1;
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
// factorial(6)
fact = 5
x = factorial(fact)
if (x !== undefined) {
    console.log(x)
}
console.timeEnd()