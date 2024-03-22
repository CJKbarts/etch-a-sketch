const gridContainer = document.querySelector(".gridContainer");
let numOfBoxesValue = 16;

const createNewGridBtn = document.querySelector(".createNewGridBtn");
createNewGridBtn.addEventListener("click", ()=> {
    numOfBoxesValue = prompt("Enter the number of boxes wanted (Max:100)");
    resetGrid(numOfBoxesValue);
})

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", ()=> resetGrid());

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
    e.target.classList.add("colored");
}

createGrid(numOfBoxesValue);