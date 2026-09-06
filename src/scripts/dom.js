import {toDos,createTheTodoObjectsArray,removeTodo,getProjectObject} from './logic.js';

function whenClickTheNewProjectButton() {
    const projectButton = document.querySelector(".new-project-button");
    const dialogPopup = document.querySelector("#project-name-dialog")
    const inputBox = document.querySelector("#user-project-name-input");
    projectButton.addEventListener('click',() => {
        dialogPopup.showModal();
    });

    const cancelButton = document.querySelector("#cancel-button");
        cancelButton.addEventListener('click', () => {
            dialogPopup.close();
            inputBox.value = "";

        });

    const dialogPopup2 = document.querySelector('#project-name-dialog');
    const taskForm = dialogPopup.querySelector('form');
        taskForm.addEventListener('submit', () => {
            dialogPopup.close();
            displayTheNewProject(inputBox,projectButton);
            inputBox.value = "";
            whenClickOnProjects();
        });
}

function displayTheNewProject(inputBox,projectButton) {
    const newProjectNameDisplay = document.createElement("div");
    newProjectNameDisplay.classList.add("new-project-name");
    newProjectNameDisplay.textContent = inputBox.value;
    const projectDisplayDiv = document.querySelector(".dashboard");
    projectDisplayDiv.insertBefore(newProjectNameDisplay,projectButton);
}

function whenClickOnProjects() {
    const allProjects = document.querySelectorAll(".new-project-name");
    const taskTitle = document.querySelector(".task-title");
    allProjects.forEach((project) => {
        project.addEventListener('click', () => {
            taskTitle.textContent = project.textContent;
            const divOuter = document.querySelector('.outer-task-display-div');
            let projectObj = getProjectObject()
            clearTheTask();
            renderTasks(projectObj,divOuter,taskTitle.textContent);
            
        });
    });
}

function clearTheTask() {
    const containingAllOfTheseDivs = document.querySelector('.all-task-container');
    if (containingAllOfTheseDivs) {
        containingAllOfTheseDivs.innerHTML = "";
    }
}


function addNewTasks() {
    const taskInputDialog = document.querySelector('#task-display-dialog')
    const newTaskButton = document.querySelector('.add-a-task');

    newTaskButton.addEventListener('click', () => {
        taskInputDialog.showModal();
    })

    const cancelButton = document.querySelector("#cancel-button-2");
        cancelButton.addEventListener('click', () => {
            taskInputDialog.close();
            emptyAllInputBoxValues();


        });

    const taskForm = taskInputDialog.querySelector('form');
        taskForm.addEventListener('submit', () => {
        clearTheTask();
        displayTasks();
        emptyAllInputBoxValues();
        });
        }

function emptyAllInputBoxValues() {
     const allInputBoxes = document.querySelectorAll(".dialog-2-input");
            allInputBoxes.forEach((box) => {
                box.value = "";
            });
                
}

const containingAllOfTheseDivs = document.createElement('div');
containingAllOfTheseDivs.classList.add('all-task-container');
// so this basically contains all the divs inside the task section

function displayTasks() {
    const titleInput = document.querySelector("#task-name");
    const descriptionInput = document.querySelector("#description-task");
    const dueDateInput = document.querySelector("#due-date");
    const priorityInput = document.querySelector("#priority-select")
    const notesInput = document.querySelector("#any-notes");



    // this creates the object for that one todo
    const newTodo = toDos(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,notesInput.value);

    // this appends the todo into that one array that we have
    // now we want it to append the object to the array to the project that it belongs to
    // now he wants us to get the project in which we would push it 

    // but the question is where do i get the project from 
    // where does the project come in this 

    // based on which they clicked we can actualy like
    // use the project title thing and use that they for it 
    // so it uses the key and stuff 



    ///RIGHT NOW WHEN I CLICK SUBMIT ITS showing all the task in that project not from the start

    const taskTitle = document.querySelector(".task-title").textContent;

    let todoObject = createTheTodoObjectsArray(newTodo,taskTitle);
    console.log(todoObject);


    const divOuter = document.querySelector('.outer-task-display-div');
    renderTasks(todoObject,divOuter,taskTitle);
    


}

function renderTasks(todoObject,divOuter,taskTitle) {
    if (!todoObject[taskTitle]) {
        return; // or handle "no tasks yet" case, e.g. clear the container and stop
    }
    todoObject[taskTitle].forEach((todo) => {
        const div = document.createElement('div');

        div.classList.add("task-info-block")
        const title = document.createElement('p');
        const description = document.createElement('p');
        const priority = document.createElement('p');
        const notes = document.createElement('p');
        const dueDate = document.createElement('p');

        const detailsButton = document.createElement('button');
        detailsButton.textContent = "Details";
        detailsButton.classList.add('detailsButton');
        showDetails(detailsButton, description, priority, notes, dueDate);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-task-button');
        deleteTheTask(deleteButton, todo.id, taskTitle);

        const taskButtonsDiv = document.createElement('div');
        taskButtonsDiv.classList.add("div-task-buttons")
        taskButtonsDiv.appendChild(deleteButton);
        taskButtonsDiv.appendChild(detailsButton);

       title.textContent = todo.title;
       description.textContent = todo.description;
       priority.textContent = todo.priority;
       notes.textContent = todo.notes;
       dueDate .textContent= todo.dueDate;

        div.appendChild(title);
        div.appendChild(taskButtonsDiv);

        containingAllOfTheseDivs.appendChild(div);

    });
    divOuter.appendChild(containingAllOfTheseDivs);
}

function deleteTheTask(deleteButton, idToDelete, projectName) {
    deleteButton.addEventListener('click', () => {
        removeTodo(idToDelete, projectName);
        deleteButton.closest('.task-info-block').remove();
    });
}



function showDetails(detailsButton,description,priority,notes,dueDate) {
    const dialog = document.querySelector('#details-dialog');
    dialog.innerHTML = "";
    dialog.appendChild(description);
    dialog.appendChild(priority);
    dialog.appendChild(dueDate);
    dialog.appendChild(notes);
    const buttonClose = document.createElement("button");
    buttonClose.classList.add("closing-button-details-dialog")
    buttonClose.textContent = "close";

    dialog.appendChild(buttonClose);
    detailsButton.addEventListener('click', () => {
        dialog.showModal();
    });

    buttonClose.addEventListener('click', () => {
        dialog.close();
    })
}


whenClickTheNewProjectButton();
addNewTasks();