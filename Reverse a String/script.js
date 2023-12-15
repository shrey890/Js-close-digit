// console.time()
// function reverseString(inputString) {
//     let reverseString = ''
//     for (let i = inputString.length - 1; i >= 0; i--) {
//         reverseString += inputString[i]
//     }
//     return reverseString
// }
// let originalString = 'Hello From The Other Side'
// let result = reverseString(originalString)
// console.log(result)
// console.timeEnd()
// !--------------------------
console.time()
function revStr(str) {
    return (str === '') ? '' : revStr(str.substring(1)) + str.charAt(0)
}
console.log(revStr('XyZ'))
console.timeEnd()