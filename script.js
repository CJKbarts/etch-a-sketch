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
    console.log(rainbowColor);
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
    if(e.target.classList.contains(".colored")) return;
    let color = "black";
    if (rainbowColor) color = getRandomColor();
    
    e.target.style.backgroundColor = color;
    e.target.classList.add(".colored");
}

function getRandomColor(){
    return "#".concat(Math.floor(Math.random()*16777215).toString(16));
}
createGrid(numOfBoxesValue);