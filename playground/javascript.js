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
let answer = parseInt(prompt("Insira um numero:"))
for (let i = 0; i <= answer; i++) {
    if (i === 15) {
        console.log("Minha idade!")
    } else if (i === 43) {
        console.log("Idade do meu Pai!")
    } else {
        console.log(i)
    }
 
}
