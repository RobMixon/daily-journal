
//converts the data into HTML

const journalConverter = (entries) => {

    const journalHTMLRepresentation = `
    <section class= "oldJournalEntry">
        <p class = "date"> ${entries.date}</p>
        <p class = "concept"> ${entries.concept}</p>
        <p class = "entry"> ${entries.entry}</p>
        <p class = "mood"> ${entries.mood}</p>
    </section>
    `              
    return journalHTMLRepresentation   
}

export default journalConverter;