class Project {
  constructor (name, array) {
    this.name = name,
    this.array = array
  }
}

export const projects = new Project('My Project', []);
console.log(projects)
  // The project shows all todos inside of it, in a scrolling horizontal way for now
