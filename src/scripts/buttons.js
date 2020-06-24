import API from "./data.js";
import render from "./entryComponent.js";
import updateFormFields from "./updateFormFields.js";
import entryMaker from "./entryMaker.js"



const entryContainer = document.querySelector(".entryLog");

export default {
    registerListener () {
        entryContainer.addEventListener("click", event => {
            console.log("what is happening", event.target.id);
            if (event.target.id.startsWith("deleteEvent--")) {
                const eventToDelete = event.target.id.split("--")[1];
                console.log(eventToDelete);

                API.deleteObject(eventToDelete)
                .then(API.getJournalEntries())
                .then(render.renderJournalEntries(API.journalEntries))
            } else if (event.target.id.startsWith("editEvent--")) {
                const eventToEdit = event.target.id.split("--")[1];
                console.log(eventToEdit);

                updateFormFields(eventToEdit)
            }
        })
    },
    clearInputFields() {
        document.querySelector("#journalDate").value = "";
        document.querySelector("#concept").value="";
        document.querySelector("#entry").value="";
        document.querySelector("#mood").value="";
    },
    saveButtonFunction () {
        const saveEditButton = document.querySelector(".saveButton")
        saveEditButton.addEventListener("click", event => {
            const hiddenEntryId = document.querySelector("#journalId")
        if(hiddenEntryId.value !== "") {
            const newDateInput = document.querySelector("#date").value;
            const newConceptInput = document.querySelector("#concept").value;
            const newEntryInput = document.querySelector("#entry").value;
            const newMoodInput=document.querySelector("#mood").value;

            API.updateObject(hiddenId.value, entryMaker(newDateInput, newConceptInput, newEntryInput, newMoodInput))
            .then(() => {
                this.clearInputFields();
                render.renderJournalEntries()
            })
            } else {
                alert ("To save, you must fill out all fields first")
            }
        })
    }
}

