console.time()
let x
x = Math.max(1, 2, 3, 10.9)
if (isNaN(x)) {
    console.log('Invalid')
} else {

    console.log(x)
}
console.timeEnd()
