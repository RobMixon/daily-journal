//array that is getting the entry pushed to it
/*
let journalEntries =[
    {
    date: "05/29/2020",
    concept: "css",
    entry: "learned CSS",
    mood: "happy",
},
{
    date: "05/30/2020",
    concept: "html",
    entry: "learned html",
    mood: "happy",
},
{
    date: "05/31/2020",
    concept: "Javascript",
    entry: "learned javascript",
    mood: "happy",
}
]
*/
/*
const getJournalData = () => {
    entryArray.push(journalEntry)
}
*/

let journalEntries = []

const getJournalData = () => {
    return fetch("http://localhost:8088/journalEntries").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfJournal) => {
            journalEntries = arrayOfJournal
        }
    )
}