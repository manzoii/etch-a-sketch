const container = document.querySelector('#container');
const slider = document.getElementById('myRange');
const output = document.getElementById('output');

output.innerHTML = slider.value;
slider.addEventListener('input', function() {
    output.innerHTML = slider.value;
    createContainer(slider.value);
});

function createContainer(boxes){
    container.innerHTML = '';

    let x = boxes;
    let containerSize = 560;
    let boxsize = (containerSize/boxes);

    for (let i = 0; i< x**2 ; i++){
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

    blackMode.style.backgroundColor = 'blanchedalmond';
    blackMode.style.color = 'rgb(81, 59, 43)';
    rainbowMode.style.backgroundColor = 'blanchedalmond';
    rainbowMode.style.color = 'rgb(81, 59, 43)';
    clearMode.style.backgroundColor = 'blanchedalmond';
    clearMode.style.color = 'rgb(81, 59, 43)';
    eraserMode.style.backgroundColor = 'blanchedalmond';
    eraserMode.style.color = 'rgb(81, 59, 43)';

    blackMode.onclick = function(){
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

    rainbowMode.onclick = function(){
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

    eraserMode.onclick = function(){
        eraserMode.style.backgroundColor = 'rgb(81, 59, 43)';
        eraserMode.style.color = 'white';
        rainbowMode.style.backgroundColor = 'blanchedalmond';
        rainbowMode.style.color = 'rgb(81, 59, 43)';
        blackMode.style.backgroundColor = 'blanchedalmond';
        blackMode.style.color = 'rgb(81, 59, 43)';
        clearMode.style.backgroundColor = 'blanchedalmond';
        clearMode.style.color = 'rgb(81, 59, 43)';
        all_boxes.forEach(box => {
            box.addEventListener("mouseover", eraser);
        });
        
        function eraser(){
            this.style.backgroundColor = 'white';      
        }
    }

    clearMode.onclick = function(){
        eraserMode.style.backgroundColor = 'blanchedalmond';
        eraserMode.style.color = 'rgb(81, 59, 43)';
        all_boxes.forEach(div => {
            div.style.backgroundColor = 'white';
        });
    }
}
createContainer(slider.value);

