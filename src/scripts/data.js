let journalEntries = []

const getJournalData = () => {
    return fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(entries => journalEntries = entries)
}