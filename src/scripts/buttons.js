import API from "./data.js";
import renderJournalEntries from "./entryComponent.js";
import updateFormFields from "./updateFormFields.js";
import getData from "./journal.js ";


const entryContainer = document.querySelector(".entryLog");

export default {
    registerListeners () {
        entryContainer.addEventListener("click", event => {
            console.log("what is happening", event.target.id);
            if (event.target.id.startsWith("deleteEvent--")) {
                const eventToDelete = event.target.id.split("--")[1];
                console.log(eventToDelete);

                API.deleteObject(eventToDelete)
                .then(getData())
            } else if (event.target.id.startsWith("editEvent--")) {
                const eventToEdit = event.target.id.split("--")[1];
                console.log(eventToEdit);

                API.getSingleObject(eventToEdit)
                .then(entries => updateFormFields(entries))
            }
        })
    },
    clearInputFields() {
        document.querySelector("#date").value="";
        document.querySelector("#concept").value="";
        document.querySelector("#entry").value="";
        document.querySelector("#mood").value="";
    }
}