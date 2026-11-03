// game variables
let filteredAnswer;
const gridButton = document.querySelector('#gridButton');
let permanentDivs;
let totalAnswer;
const container = document.querySelector('#container');
let squareDivs;
let color;
const sound = new Audio('Sounds/odin-audio1.wav');
const error = new Audio('Sounds/572936__bloodpixelhero__error.wav');
const sucess = new Audio('Sounds/sucessful1.wav');
// rainbow colors
const red = document.querySelectorAll('.red');
let permanentRedDivs;
const orange = document.querySelectorAll('.orange');
let permanentOrangeDivs;
const yellow = document.querySelectorAll('.yellow');
let permanentYellowDivs;
const green = document.querySelectorAll('.green');
let permanentGreenDivs;
const blue = document.querySelectorAll('.blue');
let permanentBlueDivs;
const indigo = document.querySelectorAll('.indigo');
let permanentIndigoDivs;
const violet = document.querySelectorAll('.violet');
let permanentVioletDivs;
const rainbowColors = [red, orange, yellow, green, blue, indigo, violet];
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
};
};
// rainbow mode function
rainbowModeButton.addEventListener('click', function() {
    squareDivs = document.querySelectorAll('.square');
    squareDivs.forEach(function(div) {
        div.addEventListener('mouseenter' , function(event) {
            color = rainbowSelection()
        if (color === red) {
            event.target.classList.replace('square', 'red')
            permanentRedDivs = document.querySelectorAll('red')
        } else if (color === orange) {
            event.target.classList.replace('square', 'orange')
            permanentOrangeDivs = document.querySelectorAll('.orange')
        } else if (color === yellow) {
            event.target.classList.replace('square', 'yellow')
            permanentYellowDivs = document.querySelectorAll('.yellow')
        } else if (color === green) {
            event.target.classList.replace('square', 'green')
            permanentGreenDivs = document.querySelectorAll('.green')
        } else if (color === blue) {
            event.target.classList.replace('square', 'blue')
            permanentBlueDivs = document.querySelectorAll('blue')
        } else if (color === indigo) {
            event.target.classList.replace('square', 'indigo')
            permanentIndigoDivs = document.querySelectorAll('.indigo')
        } else if(color === violet) {
            event.target.classList.replace('square', 'violet')
            permanentVioletDivs = document.querySelectorAll('.violet')
        }
        })
    })

})
// permanent painting function
function squarePainting() {
squareDivs = document.querySelectorAll('.square');
    squareDivs.forEach(function(div){
        div.addEventListener('mouseenter', function(event) {
        event.target.classList.replace('square', 'permanentSquare');
        permanentRedDivs = document.querySelectorAll('.permanentSquare');
    });
});
};
// reset grid function
function excludeGrid() {
    container.replaceChildren();
};
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
normalModeButton.addEventListener('click', squarePainting)
// reset button
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    sound.play();
permanentDivs.forEach(function(div) {
    div.classList.replace('permanentSquare', 'square')
})
permanentRedDivs.forEach(function(div) {
    div.classList.replace('red', 'square');
});
permanentOrangeDivs.forEach(function(div) {
    div.classList.replace('orange', 'square');
});
permanentYellowDivs.forEach(function(div) {
    div.classList.replace('yellow', 'square');
});
permanentGreenDivs.forEach(function(div) {
    div.classList.replace('green', 'square');
});
permanentBlueDivs.forEach(function(div) {
    div.classList.replace('blue', 'square');
});
permanentIndigoDivs.forEach(function(div) {
    div.classList.replace('indigo', 'square');
});
permanentVioletDivs.forEach(function(div) {
    div.classList.replace('violet', 'square');
});
});