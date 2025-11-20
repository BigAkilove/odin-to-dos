export function createSingleTodo (todo, domElement) {
  const domContent = document.getElementById(domElement.name);

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
}

/* The above give a structure looking like this
  <div data-title="Finish CV" class="to-do-container">
    <div class="to-do-button-container">
      <button class="to-do-remove-button">X</button>
    </div>
    <div class="rest-of-to-do">
      <div class="to-do-title">Finish CV</div>
      <div class="to-do-description">Objective: I have to do a dedicated CV for web dev</div>
      <div class="to-do-due-date">Due for: 06 october 2025</div>
      <div class="to-do-priority">Importance: high</div>
      <div class="to-do-notes">Notes: I only have JavaScript to do to that for now</div>
      <div class="to-do-checklist">false</div>
    </div> 
  </div>*/
    

    