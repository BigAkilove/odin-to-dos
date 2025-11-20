import { Project } from "./projects";
import { ToDoArray } from "../todos/to-do-array";
import { Todo } from "../todos/to-dos";
import { arrayOfTodoArrays } from "../todos/array-of-todos-arrays";

export const projectArray = [];

const projects = new Project('My Project', projectArray);


const todoArray = new ToDoArray('todoArray', arrayOfTodoArrays);

const finishCV = new Todo('Finish CV', 'I have to do a dedicated CV for web dev', '06 october 2025', 'high', 'I only have JavaScript to do to that for now', false, arrayOfTodoArrays[0].array);
const completeThisExercise = new Todo('Complete this exercise', 'Create a project logic then add DOM stuff to it', '10 october 2025', 'high', 'I know how to do it', false, arrayOfTodoArrays[0].array);