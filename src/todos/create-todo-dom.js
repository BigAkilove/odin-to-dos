import { createSingleTodo } from "./create-single-todo-dom";

export function displayTodo (array, projectDom) {
  //Select the project we want to fill with todos, empty it, create its name, then run todos
  
  const domContent = document.getElementById(projectDom.name);

  while (domContent.childNodes.length > 1) {
    domContent.removeChild(domContent.lastChild)
  }
  //We remove the todos children until the project name is left

  array.forEach(todo => {
    createSingleTodo(todo, projectDom);
  });
}