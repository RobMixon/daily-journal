const entryMaker = (date, concept, entry, mood) => {
    const newEntry = {
         date,
         concept,
        entry,
         mood
    }
    return newEntry;
}

export default entryMaker;