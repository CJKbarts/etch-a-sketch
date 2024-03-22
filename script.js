const gridContainer = document.querySelector(".gridContainer");
let numOfBoxes = 16;

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

function colorBox(e){
    e.target.classList.add("colored");
}

createGrid(numOfBoxes);