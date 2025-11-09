import { createSingleTodo } from "./create-single-todo";
export {displayTodo}
function displayTodo (TodoArray, projectDom) {
  //Select the project we want to fill with todos, empty it, create its name, then run todos
  const domContent = document.getElementById(projectDom.name);
  domContent.innerHTML = '';

  const projectName = document.createElement('div');
  let textNode = document.createTextNode(projectDom.name);
  projectName.appendChild(textNode);
  projectName.classList.add('project-name');

  TodoArray.forEach(todo => {
    createSingleTodo(todo, projectDom);
  });
}