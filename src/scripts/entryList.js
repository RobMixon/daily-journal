

import journalEntry from "./entryComponent.js";

const renderJournalEntry = (entries) => {
    for(const entry of entries) {
        document.querySelector(".entryLog").innerHTML += journalEntry(entry)
    }
}



export default renderJournalEntry;