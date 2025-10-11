import { displayTodo } from "./create-todo-dom";
import { projects } from "./projects";

export function removeToDo(array) {
const allRemoveButton = document.querySelectorAll('.to-do-remove-button');

allRemoveButton.forEach((button)=> {
  button.addEventListener('click', ()=> {
    array.forEach((todo) => {
      
      //check if the title of the todo is equal to the data title attribute and if it is, get its position in the array and remove it

      if (todo.title === button.parentElement.parentElement.getAttribute('data-title')) {

        const domContent = document.getElementById(projects.name);
        domContent.innerHTML = '';

        //the project div gets emptied so we create a text div again
         const projectName = document.createElement('div');
        let textNode = document.createTextNode(projects.name);
        projectName.appendChild(textNode);
        projectName.classList.add('project-name');
        domContent.appendChild(projectName); 

        const positionOfToDo = array.indexOf(array.find((todo) => todo.title === button.parentElement.parentElement.getAttribute('data-title')));
        array.splice(positionOfToDo,1);

        displayTodo(array,projects);
        removeToDo(array);
      }
    });
  });
});
}