const galaxy = ["sol", "lua", "planeta", "estrela"]
function filterLongWords(array, num) {
    let filterArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= num) {
            filterArray.push(array[i])
        }
    }
    return filterArray
}
console.log(filterLongWords(galaxy, 5))
