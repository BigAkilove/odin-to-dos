import { displayTodo } from "./create-todo-dom";
import { projectArray } from "../projects/project-array.js";

export function removeToDo(array) {
const allRemoveButton = document.querySelectorAll('.to-do-remove-button');
console.log(array)

allRemoveButton.forEach((button)=> {
  button.addEventListener('click', ()=> {
    array.forEach((todo) => {
      
      //check if the title of the todo is equal to the data title attribute and if it is, get its position in the array and remove it

      if (todo.title === button.parentElement.parentElement.getAttribute('data-title')) {

        const domContent = document.getElementById(projectArray[0].name);
        domContent.innerHTML = '';

        const positionOfToDo = array.indexOf(array.find((todo) => todo.title === button.parentElement.parentElement.getAttribute('data-title')));
        array.splice(positionOfToDo,1);

        displayTodo(array,projectArray[0].name);
        removeToDo(array);

        //the project div gets emptied so we create a text div again
        //WE ALREADY DO THIS IN DISPLAY TO DO
        /*  const projectName = document.createElement('div');
        let textNode = document.createTextNode(projectArray[0].name);
        projectName.appendChild(textNode);
        projectName.classList.add('project-name');
        domContent.appendChild(projectName);  */

        
      }
    });
  });
});
}