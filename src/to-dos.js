export const todoArray = [];

class Todo {
  constructor (title, description, dueDate, priority, notes, checklist) {
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
        checklist: this.checklist 
      };
      todoArray.push(todoObject)
    }
    this.pushInArray(); 
  }
}

const finishCV = new Todo('Finish CV', 'I have to do a dedicated CV for web dev', '06 october 2025', 'high', 'I only have JavaScript to do to that for now', false);
const completeThisExercise = new Todo('Complete this exercise', 'Create a project logic then add DOM stuff to it', '10 october 2025', 'high', 'I know how to do it', false);

//can import several arrays, each of them being a project, and choose which to import where