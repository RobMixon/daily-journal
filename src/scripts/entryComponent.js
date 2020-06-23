


//renders the data for use



import journalConverter from "./entriesDOM.js"
import entryMaker from "./entryMaker.js"
import API from "./data.js"
import buttons from "./createEntry.js"

// renders data and uses convert to put inner HTM


const renderJournalEntries = (journalEntries) => {

    for (const currentJournalObject of journalEntries) {
        const journalHTML = journalConverter(currentJournalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}

export default renderJournalEntries;

// const entryContainer = document.querySelector("#entryContainer")

// const renderJournalEntries = () => {
//     entryContainer.innerHTML = "";
//     API.getJournalEntries()
//     .then((entryArray) => {
        
//     }
// }