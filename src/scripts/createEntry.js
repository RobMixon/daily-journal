import API from "./data.js"
import getData from "./journal.js"
import journalEntryObj from "./entryObj.js"
import clear from "./clear.js"

//Save button function 
const saveButton = (journalEntryObj) => {
    const saveButtonListener = document.querySelector(".saveButton")
    saveButtonListener.addEventListener("click", event => {  
    
        let entryObj = journalEntryObj()

        console.log(journalEntryObj)
            if (journalEntryObj.date ===""||journalEntryObj.concept===""||
                journalEntryObj.entry===""||journalEntryObj.mood==="") {
            alert("Something is not filled out")
        } else {
            API.saveEntry(journalEntryObj).then(getData())
            return journalEntryObj;
        }
    })
}

    export default saveButton;