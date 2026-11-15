function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
function operate(operator, n1, n2) {
    if (operator === '+') {
        add(n1, n2);
    } else if (operator === '-') {
        subtract(n1, n2);
    } else if (operator === 'x') {
        multiply(n1, n2);
    } else if (operator === '÷') {
        divide(n1, n2);
    };
};

let firstNumber;
let secondNumber;
let operator;
let result;
const panel = document.querySelector('#panel')
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('operators');
const clear = document.querySelectorAll('clear');
const del = document.querySelectorAll('delete');
const equal = document.querySelectorAll('equals');
numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        panel.textContent = 'test'
    })
})