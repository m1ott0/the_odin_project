const parentDiv = document.querySelector('#container')
for (let i = 0;i < 256;i++) {
    const newDivs = document.createElement('div')
    newDivs.classList.add('square')
    parentDiv.appendChild(newDivs)
}

