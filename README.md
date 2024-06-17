# Etch-A-Sketch

Taking on a new project to continue practicing DOM manipulation. Start 22/01/2024
Flexbox!
Dom manipulation!
## The Return!
Came back to this project on the 17/06 and refined the code. Firstly instead of creating all the divs inside one for-loop, I used nested for-loops to dynamically create rows and columns which is far more efficient and has a significantly higher load time. My previous method would lag the browser and I could only create a max grid of 40 x 40 which also took several seconds to load. 

I managed to take event listeners outside of the for-loop and create separate functions to utilize for my buttons. This was done by pushing the created divs into an array. I ensured to reduce the array length on each new creation of a grid.

Instead of prompting the user for a number to change the grid size, I used the HTML element input with the type of range and successfully adapted the grid size according to the range of the input.

See it live here --> https://hamzaibrahimi.github.io/Etch-A-Sketch/