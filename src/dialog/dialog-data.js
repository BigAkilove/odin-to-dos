import { Todo } from "../todos/to-dos";
import { todoArray } from "../todos/to-do-array";
import { projectArray } from "../projects/project-array.js";
import { displayTodo } from "../todos/create-todo-dom";

export function getDataFromForm () {
  const data = document.querySelectorAll('#todo-dialog form input');
  const array = [];

  data.forEach((element) => {
    if (element.value === 'high' || element.value === 'medium' ||element.value === 'low') {
      if (element.checked === true) {
        const idAndValue = {
          id: 'importance',
          value : element.value
        }
        array.push(idAndValue)
      }
    } else {

      const idAndValue = {
      id: element.id,
      value : element.value
    }
    array.push(idAndValue)
    
    }
  });
  const newTodo = new Todo (array[0].value, array[1].value, array[2].value, array[3].value, array[4].value, array[5].value, todoArray)
  displayTodo(todoArray, projectArray[0]);
}