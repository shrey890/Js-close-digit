console.time('Time')
const x = new Array(1, 2, 3, -1)
let sum = x.reduce((a, c) => {
    return a + c
}, 0)
// console.log(typeof x)
console.log(`sum of x is ${sum}`)
console.timeEnd('Time')