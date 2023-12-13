function isPalindrome(val) {
    const cleanTxt = val.toLowerCase().replace(/[^a-z0-9]/g, "")
    return cleanTxt === cleanTxt.split("").reverse().join("")
}
const tXt1 = 'WoW'
const tXt2 = 'XyZ'
console.log(`${tXt1} is a Palindrome: ${isPalindrome(tXt1)}`)
console.log(`${tXt2} is a Palindrome: ${isPalindrome(tXt2)}`)
