import { displayTodo } from "./create-todo-dom";
import { projectArray } from "../projects/project-array.js";

export function removeToDo(array) {

const removeButtons = document.querySelectorAll('.to-do-remove-button');

removeButtons.forEach((button)=> {
  button.addEventListener('click', ()=> {
    array.forEach((todo) => {
      //array is equal to what we call it in index.js, the todo array

      const attributeTodoTitle = button.closest('.to-do-container').getAttribute('data-title');
      //creates a variable that goes through the button container and the todo container and selected the title attribute

      if (todo.title === attributeTodoTitle) {
      //check if the title of the todo is equal to the data title attribute

        const domContent = document.getElementById(projectArray[0].name);
        domContent.innerHTML = '';
        //deletes the content of the project div we're in (currently hard coded)

        const positionOfToDo = array.indexOf(array.find((todo) => attributeTodoTitle));
        array.splice(positionOfToDo,1);

        displayTodo(array,projectArray[0]);
        removeToDo(array);
      }
    });
  });
});
}