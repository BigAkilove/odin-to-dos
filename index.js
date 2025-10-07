import './styles.css'
import { displayProjects } from './dom-display.js';
import { timeLeft } from './time-left.js';

function createToDo (title,description,dueDate,priority,notes,checklist) {
    // //high,average,low with dom element for priority

    let checklistEmote;
    if (checklist) {
        checklistEmote = 'Done: ✅'
    } else 
        checklistEmote = 'Done: ❌'

    return {title,description,dueDate,timeLeft,priority,notes,checklistEmote}
}

const gettingAJob = createToDo('Getting a job', 'I want to get a job so I have enough money to go to Japan', new Date (2025, 2, 9), 'high','worth trying to search programming jobs',false);

const projectsIds = [];
function Project (id,todo = undefined) {
    projectsIds.push(id);
    const projectName = []
    if (!todo) {
    } else {
        projectName.push(todo)
    }
    return {projectName}
}

const defaultProject = Project('001',gettingAJob);

displayProjects(defaultProject) //from dom-display

















/*
npm init -y
npm install --save-dev webpack webpack-cli
npx webpack
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server
*/