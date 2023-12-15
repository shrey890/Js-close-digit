console.time()
function isPrime(num) {
    if (typeof num !== 'number' || num <= 0) {
        throw new Error('Prime number must be a number')
    }
    if (num <= 1) return false;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true
}
const testNumber = 11
if (isPrime(testNumber)) {
    console.log(`${testNumber} is a prime number`)
} else {
    console.log(`${testNumber} is not a prime number`)
}
console.timeEnd()
