function whenClickTheNewProjectButton() {
    const projectButton = document.querySelector(".new-project-button");
    const dialogPopup = document.querySelector("#project-name-dialog")
    projectButton.addEventListener('click',() => {
        dialogPopup.showModal();
    });
    const inputBox = document.querySelector("#user-project-name-input");
    const cancelButton = document.querySelector("#cancel-button");
        cancelButton.addEventListener('click', () => {
            dialogPopup.close();
            inputBox.value = "";

        });

    const submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener('click', () => {
            dialogPopup.close();
            inputBox.value = "";

        });



}


whenClickTheNewProjectButton();