export class Todo {
  constructor (title, description, dueDate, priority, notes, checklist, array) {
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    this.notes = notes,
    this.checklist = checklist

    this.pushInArray = () => {
      const todoObject = {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
        notes: this.notes,
        checklist: this.checklist,
        project: ''
      };
      array.push(todoObject)
    }
    this.pushInArray(); 
  }
}