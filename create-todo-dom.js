export {displayTodo, domContent}

const domContent = document.getElementById('content');

function displayTodo (TodoArray) {
  for (todo of TodoArray) {
    const container = document.createElement('div');
    container.classList.add('to-do-container');

    const title = document.createElement('div');
    title.classList.add('to-do-title');
    let textNode = document.createTextNode(todo.title);
    title.appendChild(textNode);
    container.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('to-do-description');
    textNode = document.createTextNode(`Objective: ${todo.description}`);
    description.appendChild(textNode);
    container.appendChild(description);

    const dueDate = document.createElement('div');
    dueDate.classList.add('to-do-due-date');
    textNode = document.createTextNode(`Due for: ${todo.dueDate}`);
    dueDate.appendChild(textNode);
    container.appendChild(dueDate);

    const priority = document.createElement('div');
    priority.classList.add('to-do-priority');
    textNode = document.createTextNode(`Importance: ${todo.priority}`);
    priority.appendChild(textNode);
    container.appendChild(priority);

    const notes = document.createElement('div');
    notes.classList.add('to-do-notes');
    textNode = document.createTextNode(`Notes: ${todo.notes}`);
    notes.appendChild(textNode);
    container.appendChild(notes);

    const checklist = document.createElement('div');
    checklist.classList.add('to-do-checklist');
    textNode = document.createTextNode(todo.checklist);
    checklist.appendChild(textNode);
    container.appendChild(checklist);

    domContent.appendChild(container);
  }
}