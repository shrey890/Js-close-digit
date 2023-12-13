const x = [1, 2, 3, -1]
let sum = x.reduce((a, c) => {
    return a + c
}, 0)
console.log(`sum of x is ${sum}`)