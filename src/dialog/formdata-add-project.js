import { Project } from "../projects/projects";
import { projectArray } from "../projects/project-array";
import { displayProject } from "../projects/create-project-dom";

export function getFormProjectData() {
  const data = document.querySelectorAll('#project-dialog form');
  data.forEach((element) => {
    const projectName = element.children[1].value;
    //Get the name of the project written in the form

    const project = new Project(projectName, projectArray);
    const index = projectArray.length -1
    //get the position of the new project in the project array
    displayProject(projectArray[index]);
  })
}

