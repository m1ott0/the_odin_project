// Calculator Buttons and Screen variables
const panel = document.querySelector('.panel')
const record = document.querySelector('.record')
const numbers = document.querySelectorAll('.numbers');
const operator = document.querySelectorAll('.operators');
const ac = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal');
const decimalNumber = document.querySelector('.dot') 
const changeValueButton = document.querySelector('.change')
// buttonSFX
const buttonClick = new Audio('/projects/calculator/sounds/definitive-button-272973.wav')
buttonClick.volume = 0.5
// Operation variables
let firstNumber;
let secondNumber;
let currentOperator;
let result;
let aValue;
let bValue;
// Operation functions
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
// Check result function
function checkResult() {
    if (result.toString().length > 15) {
        clear()
        panel.textContent = 'SYNTAX ERROR'
    } 
}
// Operation result function
function equalOperation() {
    buttonClick.currentTime = 0;
    buttonClick.play()
    if (firstNumber !== undefined && currentOperator !== undefined && secondNumber !== undefined ) {
    aValue = Number(firstNumber)
    bValue = Number(secondNumber)
    result = operate(currentOperator, aValue, bValue)
    record.textContent = firstNumber + currentOperator + secondNumber
    panel.textContent = result
    firstNumber = result
    secondNumber = undefined
    checkResult()
    }
}
// Clear screen function
function clear() {
    buttonClick.currentTime = 0;
    buttonClick.play()
    panel.textContent = ''
    record.textContent = ''
    firstNumber = undefined
    secondNumber = undefined
    currentOperator = undefined
    result = undefined
    aValue = undefined
    bValue = undefined
}
// Delete last character function
function deleteLast() {
    buttonClick.currentTime = 0;
    buttonClick.play()
    if (panel.textContent.length > 12 || panel.textContent === 'SYNTAX ERROR') {
        panel.textContent = ''
        firstNumber = undefined
        secondNumber = undefined
        currentOperator = undefined
        result = undefined
        aValue = undefined
        bValue = undefined
    } else if (panel.textContent === firstNumber.toString()) {
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
// Decimal button function
function decimalValue() {
    buttonClick.currentTime = 0;
    buttonClick.play()
    if (panel.textContent.length > 12 || panel.textContent === 'SYNTAX ERROR') {
        panel.textContent = ''
        firstNumber = undefined
        secondNumber = undefined
        currentOperator = undefined
        result = undefined
        aValue = undefined
        bValue = undefined
    } else if (panel.textContent === secondNumber && secondNumber.includes('.') === false) {
        panel.textContent += '.'
        secondNumber = panel.textContent
    } else if (panel.textContent === firstNumber.toString() && firstNumber.toString().includes('.') === false) {
        panel.textContent += '.'
        firstNumber = panel.textContent
    }
}
// Change signal button function
function changeSignal() {
    buttonClick.currentTime = 0;
    buttonClick.play()
             if (panel.textContent.length > 12 || panel.textContent === 'SYNTAX ERROR') {
            panel.textContent = ''
            firstNumber = undefined
            secondNumber = undefined
            currentOperator = undefined
            result = undefined
            aValue = undefined
            bValue = undefined
        } else if (Number(secondNumber) > 0 && panel.textContent === secondNumber.toString()) {
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
// Numbers button interaction
numbers.forEach(function(number) {
    number.addEventListener('click', function() {
    buttonClick.currentTime = 0;
    buttonClick.play()
        if (panel.textContent.length > 12 || panel.textContent === 'SYNTAX ERROR') {
            panel.textContent = ''
            firstNumber = undefined
            secondNumber = undefined
            currentOperator = undefined
            result = undefined
            aValue = undefined
            bValue = undefined
        } else if (panel.textContent === '+' || panel.textContent === '-' || panel.textContent === 'x' || panel.textContent === '÷') {
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
// Operators button interaction
operator.forEach(function(operator) {
    operator.addEventListener('click', function() {
    buttonClick.currentTime = 0;
    buttonClick.play()
        if (panel.textContent.length > 12 || panel.textContent === 'SYNTAX ERROR') {
            panel.textContent = ''
            firstNumber = undefined
            secondNumber = undefined
            currentOperator = undefined
            result = undefined
            aValue = undefined
            bValue = undefined
        } else if (secondNumber !== undefined){
            equalOperation()
        } else if (firstNumber === undefined) {

        } else {
        panel.textContent = operator.textContent
        currentOperator = operator.textContent
        }
    })
})
// Equal button interaction
equal.addEventListener('click', equalOperation)
// AC button interaction
ac.addEventListener('click', clear)
// DEL button interaction
del.addEventListener('click', deleteLast)
//  Decimal button interaction
decimalNumber.addEventListener('click', decimalValue)
// Change signal button interaction
changeValueButton.addEventListener('click', changeSignal)
