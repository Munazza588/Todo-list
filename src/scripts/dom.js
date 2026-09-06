import {toDos,createTheTodoObjectsArray} from './logic.js';

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

    const submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener('click', () => {
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
        });
    });
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

    const submitButton = document.querySelector("#submit-button-2");
        submitButton.addEventListener('click', () => {
            taskInputDialog.close();
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

function displayTasks() {
    const titleInput = document.querySelector("#task-name");
    const descriptionInput = document.querySelector("#description-task");
    const dueDateInput = document.querySelector("#due-date");
    const priorityInput = document.querySelector("#priority-select")
    const notesInput = document.querySelector("#any-notes");


    const newTodo = toDos(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,notesInput.value);
    const todoArray = createTheTodoObjectsArray(newTodo);


    const divOuter = document.querySelector('.outer-task-display-div');
    const containingAllOfTheseDivs = document.createElement('div');
    containingAllOfTheseDivs.classList.add('all-task-container');

    todoArray.forEach((todo) => {
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

       title.textContent = todo.title;
       description.textContent = todo.description;
       priority.textContent = todo.priority;
       notes.textContent = todo.notes;
       dueDate .textContent= todo.dueDate;

        div.appendChild(title);
        div.append(detailsButton);
        //div.appendChild(description);
        //div.appendChild(priority);
        //div.appendChild(notes);
        //div.appendChild(dueDate);

        containingAllOfTheseDivs.appendChild(div);

    });
    divOuter.appendChild(containingAllOfTheseDivs);


}


whenClickTheNewProjectButton();
addNewTasks();