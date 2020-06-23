import API from "./data";
import renderJournalEntries from "./entryComponent";


const entryContainer = document.querySelector("#entryContainer");

export default {
    registerListeners () {
        entryContainer.addEventListener("click", event => {
            console.log("what is happening", event.target.id);
            if (event.target.id.startsWith("deleteEvent--")) {
                const eventToDelete = event.target.id.split("--")[1];
                console.log(eventToDelete);

                API.deleteObject(eventToDelete)
                .then(renderJournalEntries)
            } else if (event.target.id.startsWith("editEvent--")) {
                const eventToEdit = event.target.id.split("--")[1];
                console.log(eventToEdit);

                API.getSingleObject(eventToEdit)
                .then(newEntryObject => updateFormFields(newEntryObject))
            }
        })
    }
}