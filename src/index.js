import "./styles.css";
import { projectArray } from "./projects/project-array.js";
import { displayProject } from "./projects/create-project-dom.js";
import { displayTodo } from "./todos/create-todo-dom.js"
import { todoArray } from "./todos/to-do-array.js"
import { removeToDo } from "./todos/remove-to-do.js";
import { callAddToDoDialog } from "./dialog/dialog-button.js";

displayProject(projectArray[0]);
//create the project from the first one in the array 
displayTodo(todoArray,projectArray[0]);
//run singletodo for each todo in the previous array
removeToDo(todoArray);
//add event listeners on the X buttons to be able to remove a single todo and then run display todo again
callAddToDoDialog();
//Calls event listeners for the create a todo button linked to the form

//the todos are stocked in the todoArray, can create a project class then a js file that import both the project class and the todoArray