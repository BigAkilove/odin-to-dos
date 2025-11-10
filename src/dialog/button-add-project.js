import { getFormProjectData } from "./formdata-add-project";

export function openModal () {
  const button = document.querySelector('#add-project');
  const dialog = document.querySelector('#project-dialog');

  button.addEventListener('click', () => {
    dialog.showModal();
  });
}

export function closeModal () {
  const button = document.querySelector('#project-dialog-close-button');
  const dialog = document.querySelector('#project-dialog');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
  });
}

export function submitForm () {
  const button = document.querySelector('#project-dialog-submit-button');
  const dialog = document.querySelector('#project-dialog');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    getFormProjectData();
    
    //add a function to make a todo from the form
    dialog.close();
  });
}

export function projectDialog () {
  openModal();
  closeModal();
  submitForm();
}