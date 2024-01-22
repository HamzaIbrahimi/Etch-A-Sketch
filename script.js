//Create global variables for DOM manipulation

const main_container = document.querySelector('#main_container');
const grid = document.querySelector('#the_grid')


for(let i=0; i<= 800; i++) {
    const divs = document.createElement('div');
    divs.className = 'squares';
    divs.style.cssText = 'width: 30px; height: 30px; border: 1px solid black; margin: 0; padding:0; flex: auto;';
    grid.appendChild(divs);
}