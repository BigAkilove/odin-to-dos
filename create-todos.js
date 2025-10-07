/* title, description, dueDate and priority. You might also want to include notes or even a checklist. 
Create the todo with a factory function or class*/
export const TodoArray = [];

class Todo {
  constructor (title, description, dueDate, priority, notes, checklist){
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.priority = priority,
    this.notes = notes,
    this.checklist = checklist
  }

  pushToArray () {
    //TodoArray.push({this.title,description,dueDate,priority,notes,checkList})
    console.log(this.title)
  }
}

const finishCV = new Todo('Finish CV', 'I have to do a dedicated CV for web dev', '06 october 2025', 'high', 'I only have JavaScript to do to that for now', false)
finishCV.pushToArray();

//can import several arrays, each of them being a project, and choose which to import where