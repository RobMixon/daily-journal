import API from "./data.js";

const updateFormFields = (journalId) => {

    const hiddenID = document.querySelector("#journalId")
        const entryConceptInput = document.querySelector("#concept")
        const entryDateInput = document.querySelector("#journalDate")
        const entryEntryInput = document.querySelector("#entry")
        const entryMoodInput = document.querySelector("#mood")

        fetch(`http://localhost:3000/entries/${journalId}`)
        .then(response => response.json())
        .then(entryToEdit => {

        hiddenID.value = entryToEdit.id
        entryConceptInput.value = entryToEdit.concept
        entryDateInput.value = entryToEdit.date
        entryEntryInput.value = entryToEdit.entry
        entryMoodInput.value=entryToEdit.mood
        console.log("is it working yet?")
    })
}

export default updateFormFields;