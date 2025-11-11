import "./styles.css";
import { projectArray } from "./projects/project-array.js";
import { displayProject } from "./projects/create-project-dom.js";
import { displayTodo } from "./todos/create-todo-dom.js"
import { removeToDo } from "./todos/remove-to-do.js";
import { todoDialog } from "./dialog/button-add-todo.js";
import { projectDialog } from "./dialog/button-add-project.js";
import { ToDoArray } from "./todos/to-do-array.js";
import { arrayOfTodoArrays } from "./todos/array-of-todos-arrays.js";

console.log(arrayOfTodoArrays);

displayProject(projectArray[0]);
//create the project from the first one in the array 
displayTodo(arrayOfTodoArrays[0].array,projectArray[0]);
//run singletodo for each todo in the previous array
removeToDo(arrayOfTodoArrays[0].array);
//add event listeners on the X buttons to be able to remove a single todo and then run display todo again
todoDialog();
//Calls event listeners for the create a todo button linked to the form
projectDialog();

//the todos are stocked in the todoArray, can create a project class then a js file that import both the project class and the todoArray