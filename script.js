const gridContainer = document.querySelector(".gridContainer");
let numOfBoxesValue = 16;

const createNewGridBtn = document.querySelector(".createNewGridBtn");
createNewGridBtn.addEventListener("click", ()=> {
    numOfBoxesValue = prompt("Enter the number of boxes wanted (Max:100)");
    resetGrid(numOfBoxesValue);
})

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", ()=> resetGrid());

let rainbowColor = false;
const rainbowBtn = document.querySelector(".rainbowBtn");
rainbowBtn.addEventListener("click", ()=> {
    rainbowColor = !rainbowColor;
})

let eraseColor = false;
const eraserBtn = document.querySelector(".eraserBtn");
eraserBtn.addEventListener("click", ()=> {
    eraseColor = !eraseColor;
})

function resetGrid(numOfBoxes = numOfBoxesValue){
    deleteGrid();
    createGrid(numOfBoxes);
}

function createGrid(numOfBoxes){
    for(let i = 0; i < numOfBoxes; i++){
        gridContainer.appendChild(createRow(numOfBoxes));
    }
}

function createRow(numOfBoxes){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let i = 0; i < numOfBoxes; i++){
        row.appendChild(createBox());
    }
    return row;
}

function createBox(){
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", colorBox);    
    return box;    
}

function deleteGrid(){
    gridContainer.innerHTML = "";
}

function colorBox(e){
    let box = e.target;

    if (eraseColor){
        if (box.classList.contains("colored")) box.classList.remove("colored");
        box.style.backgroundColor = "white";
        return;
    }

    if(box.classList.contains("colored")) {
        return;
    }; 

    let color;
    if (rainbowColor) color = getRandomColor();
    else color = "black";
    
    box.style.backgroundColor = color;
    box.classList.add("colored");
}

function getRandomColor(){
    return "#".concat(Math.floor(Math.random()*16777215).toString(16));
}


createGrid(numOfBoxesValue);