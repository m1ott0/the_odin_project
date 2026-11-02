// game variables
let filteredAnswer;
const gridButton = document.querySelector('#gridButton');
let permanentDivs;
let totalAnswer;
const container = document.querySelector('#container');
let squareDivs;
const sound = new Audio('Sounds/odin-audio1.wav');
const error = new Audio('Sounds/572936__bloodpixelhero__error.wav');
const sucess = new Audio('Sounds/sucessful1.wav');
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
// permanent painting function
function squarePainting() {
squareDivs = document.querySelectorAll('.square');
    squareDivs.forEach(function(div){
        div.addEventListener('mouseenter', function(event) {
        event.target.classList.replace('square', 'permanentSquare');
        permanentDivs = document.querySelectorAll('.permanentSquare');
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
        squarePainting();
        sucess.play();
    } else {
        error.play();
        alert('Invalid Answer, Try again');
    };
});
// reset button
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function() {
    sound.play(sound);
    permanentDivs.forEach(function(div) {
    div.classList.replace('permanentSquare', 'square');
    });
    });