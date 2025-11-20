import { arrayOfTodoArrays } from "../todos/array-of-todos-arrays";
import { ToDoArray } from "../todos/to-do-array";

export function displayProject (project) {
  const content = document.querySelector('#content');

  const projectDiv = document.createElement('div');
  projectDiv.id=`${project.name}`;
  projectDiv.classList.add('project');
  //create a div and give it and id equal to the name of the project and a class
  
  const projectName = document.createElement('div');
  let textNode = document.createTextNode(project.name);
  projectName.appendChild(textNode);
  projectName.classList.add('project-name');

  projectDiv.appendChild(projectName);
  content.appendChild(projectDiv);

  const array = new ToDoArray(project.name, arrayOfTodoArrays)
  console.log(arrayOfTodoArrays)
}

/* This looks like this
<div id="project.name" class="project">
  <div class="project-name">project.name</div>  
</div>
*/