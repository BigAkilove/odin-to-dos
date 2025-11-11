import { Todo } from "./to-dos.js";
import { arrayOfTodoArrays } from "./array-of-todos-arrays.js";

export class ToDoArray {
  constructor(name) {
    this.name = name,
    this.array = [],

    this.pushInArray = () => {
      const array = {
        name : this.name,
        array : this.array 
      }
      console.log(array)
      arrayOfTodoArrays.push(array);
    }
    this.pushInArray();
  }
}

const todoArray = new ToDoArray('todoArray');

const finishCV = new Todo('Finish CV', 'I have to do a dedicated CV for web dev', '06 october 2025', 'high', 'I only have JavaScript to do to that for now', false, arrayOfTodoArrays[0].array);
const completeThisExercise = new Todo('Complete this exercise', 'Create a project logic then add DOM stuff to it', '10 october 2025', 'high', 'I know how to do it', false, arrayOfTodoArrays[0].array);