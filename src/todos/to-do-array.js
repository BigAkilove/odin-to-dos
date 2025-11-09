import { Todo } from "./to-dos.js";

export const todoArray = [];

const finishCV = new Todo('Finish CV', 'I have to do a dedicated CV for web dev', '06 october 2025', 'high', 'I only have JavaScript to do to that for now', false, todoArray);
const completeThisExercise = new Todo('Complete this exercise', 'Create a project logic then add DOM stuff to it', '10 october 2025', 'high', 'I know how to do it', false, todoArray);