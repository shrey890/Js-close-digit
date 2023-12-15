// console.time()

// function isPalindrome(val) {
//     const txt = val.toLowerCase().replace(/[^a-z0-9]/g, "")
//     return txt === txt.split("").reverse().join("")
// }
// const tXt1 = 'WoW'
// const tXt2 = 'XyZ'
// console.log(`${tXt1} is a Palindrome: ${isPalindrome(tXt1)}`)
// console.log(`${tXt2} is a Palindrome: ${isPalindrome(tXt2)}`)
// console.timeEnd()
// !------------------------
console.time()
function isPalindrome(str) {
    const length = str.length;
    if (length === 1) return true;
    if (length <= 0) return false;
    return (
        str[0] === str[length - 1] && isPalindrome(str.substr(1, str.length - 2))
    );
}
console.log(isPalindrome('101'));
console.timeEnd()
