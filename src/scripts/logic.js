const todosArray = [];
export function toDos(title,description,dueDate,notes,priority) {
    const id = crypto.randomUUID();
    return{
        id,title,description,dueDate,priority,notes,priority
    }
}


export function createTheTodoObjectsArray(newTodo) {
    todosArray.push(newTodo);
    return todosArray;
}


export function removeTodo(idToDelete) {
    const index = todosArray.findIndex((todo) => todo.id === idToDelete);
    todosArray.splice(index, 1);
}