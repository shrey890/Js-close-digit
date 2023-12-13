const arr = ['apple', 'orange', 'orange', 'mango']
function remove(items) {
    return items.filter((item, index) => items.indexOf(item) !== index)
}
console.log(remove(arr))