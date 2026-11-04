// game variables
let filteredAnswer;
const gridButton = document.querySelector('#gridButton');
let permanentDivs;
let totalAnswer;
const container = document.querySelector('#container');
let squareDivs;
let color;
let children;
let currentMode;
const sound = new Audio('Sounds/odin-audio1.wav');
const error = new Audio('Sounds/572936__bloodpixelhero__error.wav');
const sucess = new Audio('Sounds/sucessful1.wav');
// rainbow colors
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const normalModeButton = document.querySelector('#normalMode')
const rainbowModeButton = document.querySelector('#rainbowMode')
function rainbowSelection() {
    const randomNumber = Math.floor(Math.random() * 7)
    let rainbowSorted = rainbowColors[randomNumber]
    return rainbowSorted
}
// grade cration function
function createGrade() {
for (let i = 0;i < totalAnswer; i++) {
    let newDivs = document.createElement('div');
    let squareDimension = 600 / filteredAnswer
    newDivs.classList.add('square');
    container.appendChild(newDivs);
    newDivs.style.height = squareDimension + 'px';
    newDivs.style.width = squareDimension + 'px';
}
    children = container.querySelectorAll('div')
    children.forEach(function(div) {
    div.addEventListener('mouseenter', function(event) {
        if (currentMode === 'normal') {
    event.target.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',)
    event.target.classList.add('square')
    event.target.classList.replace('square', 'permanentSquare')
} else if (currentMode === 'rainbow') {
    event.target.classList.remove('permanentSquare','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')
    event.target.classList.add('square')
            color = rainbowSelection()
        if (color === 'red') {
            event.target.classList.replace('square', 'red')
        } else if (color === 'orange') {
            event.target.classList.replace('square', 'orange')
        } else if (color === 'yellow') {
            event.target.classList.replace('square', 'yellow')
        } else if (color === 'green') {
            event.target.classList.replace('square', 'green')
        } else if (color === 'blue') {
            event.target.classList.replace('square', 'blue')
        } else if (color === 'indigo') {
            event.target.classList.replace('square', 'indigo')
        } else if(color === 'violet') {
            event.target.classList.replace('square', 'violet')
        }
}
})
})
};
;
// rainbow mode function
rainbowModeButton.addEventListener('click', function() {
    currentMode = 'rainbow'
})
// permanent painting function

// reset grid function
function excludeGrid() {
    container.replaceChildren();
}
// grid button functions
gridButton.addEventListener('click', function() {
    sound.play(sound);
    const gridAnswer = prompt('Choose a grid view:(max. 100)');
    const finalAnswer = Number(gridAnswer);
    if (finalAnswer > 0 && finalAnswer <= 100 && Number.isInteger(finalAnswer)) {
        filteredAnswer = finalAnswer ;
        totalAnswer = finalAnswer ** 2;
        excludeGrid();
        createGrade();
        sucess.play();
    } else {
        error.play();
        alert('Invalid Answer, Try again');
    };
});
// normal mode button
normalModeButton.addEventListener('click', function() {
    currentMode = 'normal'
})
// reset button
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    sound.play();
children.forEach(function(div) { 
div.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'permanentSquare')
div.classList.add('square')
})   
})