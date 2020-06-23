/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

//applies the rendered data

import API from "./data.js"
import renderJournalEntries from "./entryComponent.js"
import saveButton from "./createEntry.js"

//fetch call to get data then renders taht data
const getData = () => {
API.getJournalEntries()
.then(renderJournalEntries)}

getData()
saveButton()

const clearEntries = () => {
    document.querySelector("form").value="";
}


export default getData;