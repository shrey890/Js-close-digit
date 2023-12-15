console.time()
let count
function countVowels(str) {
    str = str.toLowerCase()
    count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }
    return count;
}
// console.log(countVowels('Hello From The Other Side'))
count = countVowels('Hello From The Other Side');
console.log(`Total number of vowels: ${count}`);
console.timeEnd()