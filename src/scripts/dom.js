import {toDos,createTheTodoObjectsArray,removeTodo,getProjectObject,removeProject,createProject} from './logic.js';

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
            displayTheNewProject(inputBox.value,projectButton);
            createProject(inputBox.value);
            inputBox.value = "";
            whenClickOnProjects();
        });
}

function displayTheNewProject(projectName,projectButton) {
    const newProjectNameDisplay = document.createElement("div");
    newProjectNameDisplay.classList.add("new-project-name");
    const projectNameInputValue = document.createElement('p');
    projectNameInputValue.classList.add("project-name-para");
    projectNameInputValue.textContent = projectName;
    if(projectName != "My default Project") {
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add("delete-the-project-button");
        deleteProjectButton.textContent = "Delete"
        newProjectNameDisplay.appendChild(projectNameInputValue)
        newProjectNameDisplay.appendChild(deleteProjectButton)
        const projectDisplayDiv = document.querySelector(".dashboard");
        projectDisplayDiv.insertBefore(newProjectNameDisplay,projectButton);
        whenClickingDeleteProjectButton();
    }
    
}

function whenClickOnProjects() {
    const allProjects = document.querySelectorAll(".project-name-para");
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

function displayTasks() {
    const titleInput = document.querySelector("#task-name");
    const descriptionInput = document.querySelector("#description-task");
    const dueDateInput = document.querySelector("#due-date");
    const priorityInput = document.querySelector("#priority-select")
    const notesInput = document.querySelector("#any-notes");

    const newTodo = toDos(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,notesInput.value);
    const taskTitle = document.querySelector(".task-title").textContent;

    let todoObject = createTheTodoObjectsArray(newTodo,taskTitle);


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


function whenClickingDeleteProjectButton() {
    const deleteButtons = document.querySelectorAll(".delete-the-project-button");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
        const container = deleteButton.closest(".new-project-name");
        const nameProject = deleteButton.previousElementSibling;
        container.remove();
        removeProject(nameProject.textContent);
        clearTheTask();
        let projectObj = getProjectObject();
        const divOuter = document.querySelector('.outer-task-display-div');
        document.querySelector(".task-title").textContent = "My default Project";
        renderTasks(projectObj,divOuter,document.querySelector(".task-title").textContent);
        })
    })
}


function loadEverything() {
    const projectButton = document.querySelector(".new-project-button");
    const projectObj = getProjectObject();
    const divOuter = document.querySelector('.outer-task-display-div');
    const projectNames = Object.keys(projectObj);
    const taskTitle = document.querySelector(".task-title").textContent;
    projectNames.forEach((projectName) => {
        displayTheNewProject(projectName, projectButton);
        
    });
    whenClickOnProjects();
    renderTasks(projectObj,divOuter,taskTitle)
}


whenClickTheNewProjectButton();
addNewTasks();
loadEverything();