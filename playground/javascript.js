function add7(x) {
    return x + 7
}
function multiply(x, y) {
    return x * y
}
function capitalize(str) {
    let text = str
    let letter = text[0]
    let uppertxt = letter.toUpperCase()
    let nupper = text.slice(1)
    let text1 = nupper.toLowerCase()
    let finaltxt = uppertxt + text1
    return finaltxt
}
function lastLetter(str) {
    let text = str
    let last = text.length -1
    let char = str.charAt(last)
    return char
}
console.log(capitalize(""))

