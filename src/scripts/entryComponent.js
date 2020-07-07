

const journalEntry = (entry) => {
    const string =
    `<div class="journal__container" id="journal__container">
        <h2 class="concept">${entry.concept}</h2>
            <p class="date">${entry.date}</p>
            <p class="entry">${entry.entry}</p>
            <p class="mood">${entry.mood}</p>
        <div class="button__container" id="button__container">
            <button class="edit__button" id="editJournalEntry__${entry.id}" type="button">Edit</button>
            <button class="delete__button" id="deleteJournalEntry__${entry.id}" type="button">Delete</button>
        </div>
    </div>
        `
    return string
}

export default journalEntry;