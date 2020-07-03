


//renders the data for use

import journalConverter from "./entriesDOM.js"


// renders data and uses convert to put inner HTM

const renderJournalEntries = (entry) => {
            for (const currentJournalObject of entry) {
                const journalHTML = journalConverter(currentJournalObject)
                const journalArticleElement = document.querySelector(".entryLog")
                journalArticleElement.innerHTML += journalHTML
        }
    }
export default renderJournalEntries;

