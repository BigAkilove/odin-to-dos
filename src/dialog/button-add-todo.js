import { getDataFromForm } from "./formdata-add-todo";
import { arrayOfTodoArrays } from "../todos/array-of-todos-arrays.js";
import { removeToDo } from "../todos/remove-to-do";

export function openModal () {
  const button = document.querySelector('#add-todo-button');
  const dialog = document.querySelector('#todo-dialog');

  button.addEventListener('click', () => {
    dialog.showModal();
  });
}

export function closeModal () {
  const button = document.querySelector('#dialog-close-button');
  const dialog = document.querySelector('#todo-dialog');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
  });
}

export function submitForm () {
  const button = document.querySelector('#dialog-submit-button');
  const dialog = document.querySelector('#todo-dialog');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    getDataFromForm();
    removeToDo(arrayOfTodoArrays[0].array);
    //add a function to make a todo from the form
    dialog.close();
  });
}

export function todoDialog () {
  openModal();
  closeModal();
  submitForm();
}