export function displayProject (project) {
  console.log(project)
  const content = document.querySelector('#content');

  const projectDiv = document.createElement('div');
  projectDiv.id=`${project.name}`;
  projectDiv.classList.add('project');
  

  const projectName = document.createElement('div');
  let textNode = document.createTextNode(project.name);
  projectName.appendChild(textNode);
  projectName.classList.add('project-name');

  console.log(projectDiv)
  projectDiv.appendChild(projectName);
  content.appendChild(projectDiv);
}