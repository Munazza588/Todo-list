const todosArray = [];
export function toDos(title,description,dueDate,notes,priority) {
    const id = crypto.randomUUID();
    return{
        id,title,description,dueDate,priority,notes,priority
    }
}

// so for all the objects we are thinking of having an array

const projectObj = JSON.parse(localStorage.getItem("projects")) || {};

export function createTheTodoObjectsArray(newTodo, projectName) {
    if (projectName in projectObj) {
        projectObj[projectName].push(newTodo);
    } else {
        projectObj[projectName] = [];
        projectObj[projectName].push(newTodo);
    }
    saveProjects();
    return projectObj;
}


export function removeTodo(idToDelete, projectName) {
    const todosInProject = projectObj[projectName];
    const index = todosInProject.findIndex((todo) => todo.id === idToDelete);
    todosInProject.splice(index, 1);
    saveProjects();
}

export function getProjectObject() {
    return projectObj;
}


export function removeProject(projectName) {
    delete projectObj[projectName];
    saveProjects();
}

export function createProject(projectName) {
    if (!(projectName in projectObj)) {
        projectObj[projectName] = [];
        saveProjects();
    }
}

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projectObj));
}


