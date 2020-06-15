const renderJournalEntries = (journalEntries) => {

    for (const currentJournalObject of journalEntries) {
        const journalHTML = journalConverter(currentJournalObject)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}