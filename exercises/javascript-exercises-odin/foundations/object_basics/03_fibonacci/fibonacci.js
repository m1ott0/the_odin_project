const fibonacci = function(number) {
 let finalValue;
 let A = 0
 let B = 1
 let soma;
 if (number > 0) {
    for (let i = 1;i < number;i++) {
        soma = B + A
        A = B
        B = soma
    }
    finalValue = soma

 } else {
    finalValue = 'OOPS'
 }
 return finalValue
};

// Do not edit below this line
module.exports = fibonacci;
