


//renders the data for use



import journalConverter from "./entriesDOM.js"
// renders data and uses convert to put inner HTML
const renderJournalEntries = (journalEntries) => {

    for (const currentJournalObject of journalEntries) {
        const journalHTML = journalConverter(currentJournalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}

export default renderJournalEntries;