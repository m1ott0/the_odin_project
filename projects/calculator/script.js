let firstNumber;
let secondNumber;
let currentOperator;
let operators;
let result;
let aValue;
let bValue;
let ans;
const panel = document.querySelector('.panel')
const record = document.querySelector('.record')
const numbers = document.querySelectorAll('.numbers');
const operator = document.querySelectorAll('.operators');
const ac = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal');
const decimalNumber = document.querySelector('.dot') 
const changeValueButton = document.querySelector('.change')
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
    let operationResult;
    if (operator === '+') {
    operationResult = add(n1, n2);
    } else if (operator === '-') {
    operationResult = subtract(n1, n2);
    } else if (operator === 'x') {
    operationResult = multiply(n1, n2);
    } else if (operator === '÷') {
    operationResult = divide(n1, n2);
    };
    return operationResult
};
function equalOperation() {
    if (firstNumber !== undefined && currentOperator !== undefined && secondNumber !== undefined ) {
    aValue = Number(firstNumber)
    bValue = Number(secondNumber)
    result = operate(currentOperator, aValue, bValue)
    panel.textContent = result
    firstNumber = result
    operators = undefined
    secondNumber = undefined
    }
}
function clear() {
    panel.textContent = ''
    firstNumber = undefined
    secondNumber = undefined
    currentOperator = undefined
    operators = undefined
    result = undefined
    aValue = undefined
    bValue = undefined
}
function deleteLast() {
    if (panel.textContent === firstNumber.toString()) {
    let lastChar = panel.textContent.slice(0, -1)
    panel.textContent = lastChar
    result = lastChar
    firstNumber = result
    } else if (panel.textContent === secondNumber) {
    let lastChar = panel.textContent.slice(0, -1)
    panel.textContent = lastChar
    secondNumber = lastChar
    } else if (panel.textContent === currentOperator) {
    let lastChar = panel.textContent.slice(0, -1)
    panel.textContent = lastChar
    currentOperator = lastChar
    }
}
function decimalValue() {
    if (panel.textContent === secondNumber && secondNumber.includes('.') === false) {
        panel.textContent += '.'
        secondNumber = panel.textContent
    } else if (panel.textContent === firstNumber.toString() && firstNumber.toString().includes('.') === false) {
        panel.textContent += '.'
        firstNumber = panel.textContent
    }
}
function changeSignal() {
    if (Number(secondNumber) > 0 && panel.textContent === secondNumber.toString()) {
        panel.textContent = '-' + panel.textContent
        secondNumber = panel.textContent
    } else if (Number(secondNumber) < 0 && panel.textContent === secondNumber.toString()) {
        panel.textContent = panel.textContent.replace('-', '')
        secondNumber = panel.textContent
    } else if (Number(firstNumber) < 0 && panel.textContent === firstNumber.toString()) {
        panel.textContent = panel.textContent.replace('-', '')
        firstNumber = panel.textContent
    } else if (Number(firstNumber) > 0 && panel.textContent === firstNumber.toString()) {
        panel.textContent = '-' + panel.textContent
        firstNumber = panel.textContent
        }
    }

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        if (panel.textContent === '+' || panel.textContent === '-' || panel.textContent === 'x' || panel.textContent === '÷') {
            panel.textContent = ''
            panel.textContent = number.textContent
            secondNumber = panel.textContent
        } else if (panel.textContent === secondNumber) {
            panel.textContent += number.textContent
            secondNumber = panel.textContent
        } else {
        panel.textContent += number.textContent
        firstNumber = panel.textContent
        } 
    });
});
operator.forEach(function(operator) {
    operator.addEventListener('click', function() {
        if (secondNumber !== undefined){
            equalOperation()
        } else if (firstNumber === undefined) {

        } else {
        panel.textContent = operator.textContent
        currentOperator = operator.textContent
        }
    })
})
equal.addEventListener('click', equalOperation)
ac.addEventListener('click', clear)
del.addEventListener('click', deleteLast)
decimalNumber.addEventListener('click', decimalValue)
changeValueButton.addEventListener('click', changeSignal)
