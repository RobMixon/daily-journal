const journalConverter = (journalObject) => {

    const journalHTMLRepresentation = `
    <section class= "oldJournalEntry">
        <p class = "date"> ${journalObject.date}</p>
        <p class = "concept"> ${journalObject.concept}</p>
        <p class = "entry"> ${journalObject.entry}</p>
        <p class = "mood"> ${journalObject.mood}</p>
    </section>
    `              
    return journalHTMLRepresentation   
}