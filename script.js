//Create global variables for DOM manipulation

const grid = document.querySelector('#grid');
const changeGrid = document.querySelector('#change_grid');
const black = document.querySelector('#draw_black');
const erase = document.querySelector('#erase');
const clear = document.querySelector('#clear');
const rainbow = document.querySelector('#rainbow');
let defaultGrid = 16;



function createGrid (size) {
  for(let i = 0; i<size*size; i++) {
    const gridCells = document.createElement('div');
    gridCells.className = 'cells';
    let cellWidth = grid.clientWidth/size + 'px';
    let cellHeight = grid.clientHeight/size + 'px';
    gridCells.style.width = `${cellWidth}`;
    gridCells.style.height = `${cellHeight}`;
    gridCells.style.border = '1px solid black'
    grid.appendChild(gridCells);
    gridCells.addEventListener('mouseover', () => {
      gridCells.style.background = 'black';
    })
    
  }
}

createGrid(16);

