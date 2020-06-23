
//converts the data into HTML

const journalConverter = (entries) => {

    const journalHTMLRepresentation = `
    <div class= "oldJournalEntry">
        <h2 id="title--${entries.id}">${entries.concept}</h2>
            <p id = "date"> ${entries.date}</p>
            <p id = "entry"> ${entries.entry}</p>
            <p id = "mood"> ${entries.mood}</p>
            <button id="editEvent--${entries.id}">Edit</button>
            <button id="deleteEvent--${entries.id}">Delete</button>
    </div>
    `              
    return journalHTMLRepresentation   
}

export default journalConverter;
