import API from "./data.js";
import journalEntryObj from "./entryObj.js";

const updateFormFields = journalId => {

    const hiddenID = document.querySelector("#journalId")
        const entryConceptInput = document.querySelector("#concept")
        const entryDateInput = document.querySelector("#journalDate")
        const entryEntryInput = document.querySelector("#entry")
        const entryMoodInput = document.querySelector("#mood")

        API.getSingleObject(journalId)
        .then(entryToEdit => {

        hiddenID.value = entryToEdit.id
        entryConceptInput.value = entryToEdit.concept
        entryDateInput.value = entryToEdit.date
        entryEntryInput.value = entryToEdit.entry
        entryMoodInput.value=entryToEdit.mood
    })
}

export default updateFormFields;