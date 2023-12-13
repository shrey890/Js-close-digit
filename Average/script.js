let myArr = [1, 2, 3, 4]
const sum = myArr.reduce((a, b) => a + b, 0)
const average = (sum / myArr.length) || 0
console.log(`The sum is: ${sum} , The Average is: ${average}`)