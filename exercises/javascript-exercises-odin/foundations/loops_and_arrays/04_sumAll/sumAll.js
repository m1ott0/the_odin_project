const sumAll = function(firstNumber, lastNumber) {
    let contador = 0
    if (!Number.isInteger(firstNumber)|| !Number.isInteger(lastNumber)) {
        contador = "ERROR"
} else if (firstNumber < 0 || lastNumber < 0) {
        contador = "ERROR"
} else if (firstNumber <= lastNumber) {
    for (let i = firstNumber; i <= lastNumber; i++) {
        contador += i
    }
} else if (firstNumber > lastNumber) {
    for (let o = lastNumber; o <= firstNumber; o++) {
        contador += o
    }
}
return contador
}
// Do not edit below this line
module.exports = sumAll;
