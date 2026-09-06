export function toDos(title,description,dueDate,notes,priority) {
    return{
        title,description,dueDate,priority,notes,priority
    }
}


export function createTheTodoObjectsArray(newTodo) {
    const todosArray = [];
    todosArray.push(newTodo);
    return todosArray;
}

