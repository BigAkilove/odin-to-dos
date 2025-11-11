import { Todo } from "../todos/to-dos.js";
import { arrayOfTodoArrays } from "../todos/array-of-todos-arrays.js";
import { projectArray } from "../projects/project-array.js";
import { displayTodo } from "../todos/create-todo-dom.js";

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
        array.push(idAndValue);
      }
    } else {

      const idAndValue = {
      id: element.id,
      value : element.value
    }
    array.push(idAndValue);
    
    }
  });
  const newTodo = new Todo (array[0].value, array[1].value, array[2].value, array[3].value, array[4].value, array[5].value, arrayOfTodoArrays[0].array);
  displayTodo(arrayOfTodoArrays[0].array, projectArray[0]);
}