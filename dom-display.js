import { finishCV } from "./create-todos.js"

export {displayTodo, domContent}

const domContent = document.getElementById('content')
function displayTodo (Todo) {

}

/* class Todo {
  constructor (title, description, dueDate, priority, notes, checklist){
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    this.notes = notes,
    this.checklist = checklist
  }
} */

/* 
function displayProjects (project) {
    console.log(project)
    const todos = project.projectName
    for (let i =0; i<todos.length; i++) {
        let todo = todos[i];

    const container = document.createElement('div')
    container.classList.add('to-do')
    domContent.appendChild(container)

    const title = document.createElement('div')
    title.classList.add('todo-title')
    let textNode = document.createTextNode(todo.title)
    title.appendChild(textNode)
    container.appendChild(title)

    const description = document.createElement('div')
    description.classList.add('description')
    textNode = document.createTextNode(`Objective: ${todo.description}`)
    description.appendChild(textNode)
    container.appendChild(description)

    const timeLeft = document.createElement('div')
    timeLeft.classList.add('time-left')
    textNode = document.createTextNode(`Time left: ${todo.timeLeft(todo.dueDate)}`)
    timeLeft.appendChild(textNode)
    container.appendChild(timeLeft)


    const priority = document.createElement('div')
    priority.classList.add('priority')
    textNode = document.createTextNode(`Importance: ${todo.priority}`)
    priority.appendChild(textNode)
    container.appendChild(priority)


    const notes = document.createElement('div')
    notes.classList.add('notes')
    textNode = document.createTextNode(`Notes: ${todo.notes}`)
    notes.appendChild(textNode)
    container.appendChild(notes)

    const checklist = document.createElement('div')
    checklist.classList.add('checklist')
    textNode = document.createTextNode(todo.checklistEmote)
    checklist.appendChild(textNode)
    container.appendChild(checklist)
    }
} */