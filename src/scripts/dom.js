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

        });
}

function displayTheNewProject(inputBox,projectButton) {
    const newProjectNameDisplay = document.createElement("div");
    newProjectNameDisplay.classList.add("new-project-name");
    newProjectNameDisplay.textContent = inputBox.value;
    const projectDisplayDiv = document.querySelector(".dashboard");
    projectDisplayDiv.insertBefore(newProjectNameDisplay,projectButton);
}


whenClickTheNewProjectButton();