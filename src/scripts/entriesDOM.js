
//converts the data into HTML
const journalConverter = {
     journalEntry (journalObject) {

            const journalHTMLRepresentation = `
            <hr>
                <div class= "oldJournalEntry">
                    <h2 id="concept">${journalObject.concept}</h2>
                        <p id = "date"> ${journalObject.date}</p>
                        <p id = "entry"> ${journalObject.entry}</p>
                        <p id = "mood"> ${journalObject.mood}</p>
                        <button id="editEvent--${journalObject.id}">Edit</button>
                        <button id="deleteEvent--${journalObject.id}">Delete</button>
                </div>
            <hr>
            `              
            return journalHTMLRepresentation   
        }
}

export default journalConverter;
