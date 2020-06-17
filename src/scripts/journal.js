/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

//applies the rendered data

import API from "./data.js"
import renderJournalEntries from "./entryComponent.js"

//fetch call to get data then renders taht data
API.getJournalEntries().then(renderJournalEntries)
//save button event listener and obj creation to API
const saveButton = document.querySelector(".saveButton")
saveButton.addEventListener("click", event => {  

    let journalEntryObj = {};

    journalEntryObj.date = document.getElementById("journalDate").value 
    journalEntryObj.concept = document.getElementById("concept").value
    journalEntryObj.entry = document.getElementById("entry").value
    journalEntryObj.mood = document.getElementById("mood").value

    console.log(journalEntryObj)
    
    API.saveEntry(journalEntryObj)
})