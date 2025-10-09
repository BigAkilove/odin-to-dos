import "./styles.css";
import { projects } from "./projects.js"
import { displayProject } from "./create-project-dom.js";
import { displayTodo } from "./create-todo-dom.js"
import { todoArray } from "./to-dos.js";
import { removeToDo } from "./remove-to-do.js";

console.log(todoArray);
displayProject(projects);
displayTodo(todoArray,projects);
removeToDo(todoArray);

//the todos are stocked in the todoArray, can create a project class then a js file that import both the project class and the todoArray