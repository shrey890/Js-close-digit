function reverseString(inputString) {
    let reverseString = ''
    for (let i = inputString.length - 1; i >= 0; i--) {
        reverseString += inputString[i]
    }
    return reverseString
}
let originalString = 'Hello From The Other Side'
let result = reverseString(originalString)
console.log(result)
// function revStr(str) {
//     return (str === '') ? '' : revStr(str.substr(1)) + str.charAt(0)
// }
// revStr('xyz')