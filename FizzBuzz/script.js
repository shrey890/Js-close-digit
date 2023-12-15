// if (typeof x !== 'number' || x <= 0) {
//     console.error('Invalid')
// }
console.time()
let x = 100
if (x <= 0) {
    console.log('Invalid')
}
for (let i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.timeEnd()
// !---------------------------
// console.time()
// for (let i = 1; i <= 100; i++) {
//     console.log((i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i));
// }
// console.timeEnd()
// !---------------------
// const fizzMultiples = [...Array(100).keys()].filter(i => i % 3 === 0);
// const buzzMultiples = [...Array(100).keys()].filter(i => i % 5 === 0);

// console.time();
// let x = 100;
// for (let i = 1; i <= x; i++) {
//     if (fizzMultiples.includes(i) && buzzMultiples.includes(i)) {
//         console.log("FizzBuzz");
//     } else if (fizzMultiples.includes(i)) {
//         console.log("Fizz");
//     } else if (buzzMultiples.includes(i)) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
// console.timeEnd();
