


//renders the data for use

import journalConverter from "./entriesDOM.js"


// renders data and uses convert to put inner HTM
const render = {
     renderJournalEntries (entryArray) {
            for (const currentJournalObject of entryArray) {
                const journalHTML = journalConverter.journalEntry(currentJournalObject)
                const journalArticleElement = document.querySelector(".entryLog")
                journalArticleElement.innerHTML += journalHTML
        }
    }
}
export default render;
