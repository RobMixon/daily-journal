/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

//applies the rendered data

import API from "./data.js"
import render from "./entryComponent.js"
import entryMaker from "./entryMaker.js"
import registerListeners from "./buttons.js"


//fetch call to get data then renders taht data
API.getJournalEntries().then(() => render.renderJournalEntries(API.journalEntries))

const saveButton = document.querySelector(".saveButton");

saveButton.addEventListener("click", event => {
    const dateInput = document.querySelector("#date").value;
    const conceptInput = document.querySelector("#concept").value;
    const entryInput = document.querySelector("#entry").value;
    const moodInput = document.querySelector("#mood").value;

    if (dateInput===""||conceptInput===""||entryInput===""||moodInput==="") {
        alert("All fields must be filled in before clicking 'Record Entry'")
    } else {
        const generateEntry = entryMaker (dateInput, conceptInput, entryInput, moodInput)
        API.saveEntry(generateEntry)
        .then(
            () => {
                return API.getJournalEntries()
            })
            .then(() => {
                render.renderJournalEntries(API.journalEntries)
            })
    }
})




