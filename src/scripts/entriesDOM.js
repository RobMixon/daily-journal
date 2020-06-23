
//converts the data into HTML

const journalConverter = (entries) => {

    const journalHTMLRepresentation = `
    <div class= "oldJournalEntry">
        <h2 id="title--${entries.id}">${entries.concept}</h2>
            <p class = "date"> ${entries.date}</p>
            <p class = "entry"> ${entries.entry}</p>
            <p class = "mood"> ${entries.mood}</p>
            <button id="editObject--${entries.id}">Edit</button>
            <button id="deleteObject--${entries.id}">Delete</button>
    </div>
    `              
    return journalHTMLRepresentation   
}

export default journalConverter;
