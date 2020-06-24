import API from "./data.js"
import getData from "./journal.js"
import journalEntryObj from "./entryObj.js"
import clear from "./clear.js"

//Save button function 
const saveButton = () => {
    const saveButtonListener = document.querySelector(".saveButton")
    saveButtonListener.addEventListener("click", event => {  
    
        let entryObj = journalEntryObj()

        console.log(entryObj)
            if (entryObj.date ===""||entryObj.concept===""||
                entryObj.entry===""||entryObj.mood==="") {
            alert("Something is not filled out")
        } else {
            API.saveEntry().then(getData())
            return journalEntryObj;
        }
    })
}

    export default saveButton;