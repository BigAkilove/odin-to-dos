export class Project {
  constructor (name, array) {
    this.name = name,
    this.array = array

    this.pushInArray = () => {
      const project = {
        name : this.name
      }
      array.push(project)
    }
    this.pushInArray();
  }
}

  // The project shows all todos inside of it, in a scrolling horizontal way for now
