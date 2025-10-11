export {displayTodo}

function displayTodo (TodoArray, projectDom) {
  console.projectDom
  const domContent = document.getElementById(projectDom.name);
  domContent.innerHTML = ''

  TodoArray.forEach(todo => {
    const container = document.createElement('div');
    container.dataset.title = `${todo.title}`
    container.classList.add('to-do-container');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('to-do-button-container');

    const button = document.createElement('button')
    button.classList.add('to-do-remove-button');
    let textNode = document.createTextNode('X');
    button.appendChild(textNode);
    buttonContainer.appendChild(button);
    container.appendChild(buttonContainer);

    const restOfToDo = document.createElement('div');
    restOfToDo.classList.add('rest-of-to-do')

    const title = document.createElement('div');
    title.classList.add('to-do-title');
    textNode = document.createTextNode(todo.title);
    title.appendChild(textNode);
    restOfToDo.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('to-do-description');
    textNode = document.createTextNode(`Objective: ${todo.description}`);
    description.appendChild(textNode);
    restOfToDo.appendChild(description);

    const dueDate = document.createElement('div');
    dueDate.classList.add('to-do-due-date');
    textNode = document.createTextNode(`Due for: ${todo.dueDate}`);
    dueDate.appendChild(textNode);
    restOfToDo.appendChild(dueDate);

    const priority = document.createElement('div');
    priority.classList.add('to-do-priority');
    textNode = document.createTextNode(`Importance: ${todo.priority}`);
    priority.appendChild(textNode);
    restOfToDo.appendChild(priority);

    const notes = document.createElement('div');
    notes.classList.add('to-do-notes');
    textNode = document.createTextNode(`Notes: ${todo.notes}`);
    notes.appendChild(textNode);
    restOfToDo.appendChild(notes);

    const checklist = document.createElement('div');
    checklist.classList.add('to-do-checklist');
    textNode = document.createTextNode(todo.checklist);
    checklist.appendChild(textNode);
    restOfToDo.appendChild(checklist);

    container.appendChild(restOfToDo);
    domContent.appendChild(container);
  });  
}