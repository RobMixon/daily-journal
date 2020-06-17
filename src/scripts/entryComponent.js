


//renders the data for use

const saveButton = document.querySelector(".saveButton")


import journalConverter from "./entriesDOM.js"

const renderJournalEntries = (journalEntries) => {

    for (const currentJournalObject of journalEntries) {
        const journalHTML = journalConverter(currentJournalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}

export default renderJournalEntries;