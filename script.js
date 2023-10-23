const slider = document.getElementById('myRange');
const output = document.getElementById('output');
const response = document.getElementById('response');
output.innerHTML = slider.value;

slider.addEventListener('input', function() {
    output.innerHTML = slider.value;
    updateResponse(slider.value);
});
function updateResponse(sliderValue) {
    response.innerHTML = 'Response: ' + sliderValue;
}

let boxes = slider.value;
let containerSize = 560;
let boxsize = (containerSize/boxes);

const container = document.querySelector('#container');

for (let i = 0; i< boxes**2 ; i++){
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    container.appendChild(box);
    box.style.height = boxsize + 'px';
    box.style.width = boxsize + 'px';
}


const all_boxes = document.querySelectorAll('.box');

const blackMode = document.querySelector('#Black-mode')
const rainbowMode = document.querySelector('#Rainbow-mode')
const eraserMode = document.querySelector('#Eraser')
const clearMode = document.querySelector('#Clear')


document.getElementById("Black-mode").addEventListener("click",blackChange);

function blackChange(){
    blackMode.style.backgroundColor = 'rgb(81, 59, 43)';
    blackMode.style.color = 'white';
    rainbowMode.style.backgroundColor = 'blanchedalmond';
    rainbowMode.style.color = 'rgb(81, 59, 43)';
    clearMode.style.backgroundColor = 'blanchedalmond';
    clearMode.style.color = 'rgb(81, 59, 43)';
    eraserMode.style.backgroundColor = 'blanchedalmond';
    eraserMode.style.color = 'rgb(81, 59, 43)';
    all_boxes.forEach(box => {
        box.addEventListener("mouseover", blackColor);
    });
    
    function blackColor(){
        this.style.backgroundColor = 'black';       
    }
}

document.getElementById("Rainbow-mode").addEventListener("click",rainbowChange);

function rainbowChange(){
    rainbowMode.style.backgroundColor = 'rgb(81, 59, 43)';
    rainbowMode.style.color = 'white';
    blackMode.style.backgroundColor = 'blanchedalmond';
    blackMode.style.color = 'rgb(81, 59, 43)';
    clearMode.style.backgroundColor = 'blanchedalmond';
    clearMode.style.color = 'rgb(81, 59, 43)';
    eraserMode.style.backgroundColor = 'blanchedalmond';
    eraserMode.style.color = 'rgb(81, 59, 43)';
    all_boxes.forEach(box => {
        box.addEventListener("mouseover", rainbowColor);
    });
    
    function rainbowColor(){
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);      
    }
}

document.getElementById("Eraser").addEventListener("click",eraserChange);

function eraserChange(){
    eraserMode.style.backgroundColor = 'rgb(81, 59, 43)';
    eraserMode.style.color = 'white';
    rainbowMode.style.backgroundColor = 'blanchedalmond';
    rainbowMode.style.color = 'rgb(81, 59, 43)';
    blackMode.style.backgroundColor = 'blanchedalmond';
    blackMode.style.color = 'rgb(81, 59, 43)';
    clearMode.style.backgroundColor = 'blanchedalmond';
    clearMode.style.color = 'rgb(81, 59, 43)';
    all_boxes.forEach(box => {
        box.addEventListener("mouseover", eraserColor);
    });
    
    function eraserColor(){
        this.style.backgroundColor = 'white';      
    }
}

document.getElementById("Clear").addEventListener("click",clearChange);

function clearChange(){
    clearMode.style.backgroundColor = 'rgb(81, 59, 43)';
    clearMode.style.color = 'white';
    rainbowMode.style.backgroundColor = 'blanchedalmond';
    rainbowMode.style.color = 'rgb(81, 59, 43)';
    blackMode.style.backgroundColor = 'blanchedalmond';
    blackMode.style.color = 'rgb(81, 59, 43)';
    eraserMode.style.backgroundColor = 'blanchedalmond';
    eraserMode.style.color = 'rgb(81, 59, 43)';
    all_boxes.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}