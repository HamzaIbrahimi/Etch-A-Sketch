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
console.log(gridWidth);
console.log(gridHeight);


function randomColor () { //function the returns a random hex color
  let colors = '0123456789ABCDEF';
  let hex = '#';
  for(let i=0; i<6; i++) {
   hex += colors[Math.floor(Math.random()*colors.length)];
  }
  return hex;
 }


 
function createGrid(size) { //Function to create a grid 
  //Instead of creating all 256 divs in one for loop create a nested for loop
  for(let i = 0; i<size; i++ ) {//columns
      let div_column = document.createElement('div');
      grid.appendChild(div_column);
      cellsArray.push(div_column);
      div_column.style.width = (gridWidth/size) + 'px';

        for(let j = 0; j<size; j++) {//rows
          let div_row = document.createElement('div');
          grid.appendChild(div_row);
          div_row.style.width = (gridWidth/size) + 'px';
          cellsArray.push(div_row);
        }
  }

  

 
}

function mainGrid() {//main 16x16 default display 
  createGrid(defaultGrid);
}
mainGrid();


function changeGridSize() { //Function & EventListener to change grid size
  do {
    size = Math.floor( parseInt(prompt("Choose Grid Size: Whole Number between 16 & 40")));
  } while (!Number.isInteger(size));
  grid.textContent = "";
  createGrid(size);
}

changeGrid.addEventListener("click", changeGridSize);


//clearing the sketch area testing event delegation
clear.addEventListener('click', () => {
  cellsArray.forEach((cell) => {
    cell.style.background = '';
  })
});



//old code 
// if (size >= 16 && size <= 40) {
//   for (let i = 0; i < size * size; i++) {
//     const gridCells = document.createElement("div");
//     gridCells.className = "cells";
//     let cellWidth = grid.clientWidth / size + "px";
//     let cellHeight = grid.clientHeight / size + "px";
//     gridCells.style.cssText = `border: 1px solid black;
//       width: ${cellWidth}; height: ${cellHeight};`;
//     grid.appendChild(gridCells);
//     cellsArray.push(gridCells);
//         //event listener to draw black
//         gridCells.addEventListener('mouseover', () => {
//           gridCells.style.background = 'black'
//         })
//     //event listener to erase 
//         erase.addEventListener('click', () => {
//           gridCells.addEventListener('mouseover', () => {
//             gridCells.style.background ='';
//           })
//         })
//         //event listener to toggle back to black 
//         black.addEventListener('click', () => {
//           gridCells.addEventListener('mouseover', () => {
//             gridCells.style.background ='black';
//           })
//         })

//         //event listener for colorful mode
//         rainbow.addEventListener('click', () => {
//           gridCells.addEventListener('mouseover', () => {
//             gridCells.style.background = randomColor();
//           })
//         })
       
//   }

// } else {
//   alert('You did not pick a number between 16 & 40--Grid Now Default');
//   mainGrid();
  
// }