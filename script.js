//Create global variables for DOM manipulation

const main_container = document.querySelector('#main_container');
const grid = document.querySelector('#the_grid')

const createGrid16x16 = () => {
  for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    divs.className = "squares";
    divs.style.cssText =
      " width: 40px; height:40px; border: 1px solid black; margin: 0; padding:0; flex: auto;";
    grid.appendChild(divs);
  }
}
createGrid16x16();
