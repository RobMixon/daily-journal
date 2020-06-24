

const journalEntryObj = () => {
    
    const entryObj={}

        entryObj.date = document.getElementById("journalDate").value 
        entryObj.concept = document.getElementById("concept").value
        entryObj.entry = document.getElementById("entry").value
        entryObj.mood = document.getElementById("mood").value

    return entryObj
}

export default journalEntryObj;