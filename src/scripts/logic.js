const todosArray = [];
export function toDos(title,description,dueDate,notes,priority) {
    const id = crypto.randomUUID();
    return{
        id,title,description,dueDate,priority,notes,priority
    }
}

// so for all the objects we are thinking of having an array

const projectObj = {};

export function createTheTodoObjectsArray(newTodo, projectName) {
    if (projectName in projectObj) {
        projectObj[projectName].push(newTodo);
    } else {
        projectObj[projectName] = [];
        projectObj[projectName].push(newTodo);
    }
    return projectObj;
}


export function removeTodo(idToDelete, projectName) {
    const todosInProject = projectObj[projectName];
    const index = todosInProject.findIndex((todo) => todo.id === idToDelete);
    todosInProject.splice(index, 1);
}

export function getProjectObject() {
    return projectObj;
}


export function removeProject(projectName) {
    delete projectObj[projectName];
}