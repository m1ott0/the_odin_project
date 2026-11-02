function gridQuestion() {
    gridAnswer = prompt('Choose a grid view:(max. 100)')
    const finalAnswer = Number(gridAnswer)
    if (finalAnswer > 0 && finalAnswer <= 100 && Number.isInteger(finalAnswer)) {
        let o = finalAnswer * finalAnswer
        let start = 0
        while (start < finalAnswer) {
            
        }
    } else {
        alert('Invalid Answer, Try again')
    }
}
const gridButton = document.querySelector('#gridButton')
gridButton.addEventListener('click', gridQuestion) 
const container = document.querySelector('#container')
for (let i = 0;i < 256;i++) {
    let newDivs = document.createElement('div')
    newDivs.classList.add('square')
    container.appendChild(newDivs)
}
let permanentDivs;
const newDivs = document.querySelectorAll('.square')
newDivs.forEach(function(div){
    div.addEventListener('mouseenter', function(event) {
    event.target.classList.replace('square', 'permanentSquare')
    permanentDivs = document.querySelectorAll('.permanentSquare')
    })
})
const resetButton = document.querySelector('#resetButton')
resetButton.addEventListener('click', function() {
    permanentDivs.forEach(function(div) {
        div.classList.replace('permanentSquare', 'square')
    })
    })