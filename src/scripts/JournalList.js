const journalList = (journalEntries) => {

    for (const currentJournalObject of journalEntries) {
        const journalHTML = journalConverter(currentJournalObject)
        const journalArticleElement = document.querySelector(".old__entries")
        journalArticleElement.innerHTML += journalHTML
    }
}