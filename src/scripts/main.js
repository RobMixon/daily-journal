/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js";
import renderJournalEntry from "./entryList.js";
import createEntryObj from "./createEntry.js";
import updateFormFields from "./updateField.js";

//renders to DOM
const showEntries = () => {
    document.querySelector(".entryLog").innerHTML=""
    API.getJournalEntries()
        .then(renderJournalEntry)
}

//save button
document.querySelector(".saveButton").addEventListener("click", event => {
    const id =document.querySelector("#journalId").value
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#concept").value
    const mood = document.querySelector("#mood").value
    const entry = document.querySelector("#entry").value
    const newEntryObj = createEntryObj(date, concept, entry, mood)

    if (date===""||concept===""||mood===""||entry==="") {
        alert("Please fill all fields out before submitting entry")
    } else if (id !=="") {
        API.editJournalEntry(id, newEntryObj)
        .then(showEntries)
    } else {
        API.saveJournalEntry(newEntryObj)
        .then(showEntries)
    }
})

//edit and delete button 
document.querySelector(".entryLog").addEventListener("click", event => {
    if(event.target.id.startsWith("deleteJournalEntry__")) {
        const entryToDelete = event.target.id.split("__")[1]
        API.deleteJournalEntry(entryToDelete)
        .then(showEntries)
    } else if(event.target.id.startsWith("editJournalEntry__")){
        const entryToEdit = event.target.id.split("__")[1]
        API.getSingleEntry(entryToEdit)
        .then(entryToEdit => updateFormFields(entryToEdit))
    }
})

// function Calls
showEntries();




