function regex(word){
    const finalWord = word.replace(/[^a-z0-9]/gi, '')
    return finalWord
}
const palindromes = function (pal) {
    let finalResult;
    const reverse = pal.split('').reverse().join('')
    const nonReverse = pal.split('').join('')
    const nonReverseStringResult = nonReverse.toString()
    const reverseStringResult = reverse.toString()
    const nonReverseRegex = regex(nonReverseStringResult)
    const reverseRegex = regex(reverseStringResult)
    const FinasResult1 = reverseRegex.toLowerCase()
    const FinasResult2 = nonReverseRegex.toLowerCase()
    if (FinasResult1 === FinasResult2) {
        finalResult = true
    } else {
        finalResult = false
    }
    return finalResult
};

// Do not edit below this line
module.exports = palindromes;
