// ! Reduce
// console.time()
// let myArr = [1, 2, 3, 4]
// const sum = myArr.reduce((a, b) => a + b, 0)
// const average = (sum / myArr.length) || 0
// console.log(`The sum is: ${sum} , The Average is: ${average}`)
// console.log(` average = ${average}`)
// console.timeEnd()
// ! ForEach
// console.time()
// const array = [1, 2, 3, 4, 5]
// let sum = 0
// array.forEach((num) => { sum += num })
// average = sum / array.length
// console.log(`average = ${average} | sum =  ${sum}`)
// console.timeEnd()
// !-------------------------------
console.time()
let sum, numbers, average
function findAverage(data) {
    if (data.length === 0) {
        return 0
    }
    sum = 0
    for (const item of data) {
        sum += item
    }
    return sum / data.length
}
numbers = [5, 10, 15, 20]
if (numbers.length === 0) {
    console.log("The array is empty. Cannot calculate average.");
} else {
    average = findAverage(numbers);
    console.log(`average = ${average}`);
}
average = findAverage(numbers)
console.timeEnd()