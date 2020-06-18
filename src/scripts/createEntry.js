import API from "./data.js"
import getData from "./journal.js"

//Save button function 
const saveButton = (journalEntryObj) => {
    const saveButtonListener = document.querySelector(".saveButton")
    saveButtonListener.addEventListener("click", event => {  
    
        let journalEntryObj = {};
    
        journalEntryObj.date = document.getElementById("journalDate").value 
        journalEntryObj.concept = document.getElementById("concept").value
        journalEntryObj.entry = document.getElementById("entry").value
        journalEntryObj.mood = document.getElementById("mood").value
    
        console.log(journalEntryObj)
            if (journalEntryObj.date ===""||journalEntryObj.concept===""||
                journalEntryObj.entry===""||journalEntryObj.mood==="") {
            alert("Somethings not filled out")
        } else {
            API.saveEntry(journalEntryObj).then(getData())
            return journalEntryObj;
        }
    })
}

    export default saveButton;