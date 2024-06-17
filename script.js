//Create global variables for DOM manipulation

const grid = document.querySelector("#grid");
const changeGrid = document.querySelector("#change_grid");
const black = document.querySelector("#draw_black");
const erase = document.querySelector("#erase");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
let defaultGrid = 16;
let cellsArray = []; //Used to manipulate dom through pushing grid cells to it
let gridWidth = grid.clientWidth;
let gridHeight = grid.clientHeight;

function randomColor() {
  //function the returns a random hex color
  let colors = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[Math.floor(Math.random() * colors.length)];
  }
  return hex;
}

function createGrid(size) {
  //Function to create a grid
  //Instead of creating all 256 divs in one for loop create a nested for loop
  for (let i = 0; i < size; i++) {
    //columns
    let div_column = document.createElement("div");
    grid.appendChild(div_column);
    cellsArray.push(div_column);
    div_column.style.width = gridWidth / size + "px";

    for (let j = 0; j < size; j++) {
      //rows
      let div_row = document.createElement("div");
      grid.appendChild(div_row);
      div_row.style.width = gridWidth / size + "px";
      cellsArray.push(div_row);
    }
  }
}

function mainGrid() {
  //main 16x16 default display
  createGrid(defaultGrid);
}
mainGrid();

function changeGridSize() {
  //Function & EventListener to change grid size
  do {
    size = Math.floor(
      parseInt(prompt("Choose Grid Size: Whole Number between 16 & 100"))
    );
  } while (!Number.isInteger(size));
  grid.textContent = "";
  createGrid(size);
}

changeGrid.addEventListener("click", changeGridSize);

//Function to change background color of each cell on mouse over
function changeBackgroundToBlack() {
  for (const cell of cellsArray) {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  }
}

window.addEventListener('DOMContentLoaded', changeBackgroundToBlack)

//function to reverse background color changes to none (acting as an erase)
function eraseGrid() {
  cellsArray.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.background = "";
    });
  });
}

//function to change background color to random color
function rainbowStyle() {
  for (const cell of cellsArray) {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = randomColor();
    });
  }
}

//Event listeners on the buttons
black.addEventListener("click", changeBackgroundToBlack);
erase.addEventListener("click", eraseGrid);
rainbow.addEventListener("click", rainbowStyle);
clear.addEventListener("click", () => {
  cellsArray.forEach((cell) => {
    cell.style.background = "";
  });
});

