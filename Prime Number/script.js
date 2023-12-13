function isPrime(num) {
    if (num <= 1) {
        return false
    }
    if (num % 2 === 0) {
        return false
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
const testNumber = 11
if (isPrime(testNumber)) {
    console.log(`${testNumber} is a prime number`)
} else {
    console.log(`${testNumber} is not a prime number`)
}