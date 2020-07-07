

const updateFormFields = (entry) => {
    const hiddenEntryID = document.querySelector("#journalId");
    const journalDateInput = document.querySelector("#journalDate");
    const journalConceptsInput = document.querySelector("#concept");
    const journalMoodInput = document.querySelector("#mood");
    const journalEntryInput = document.querySelector("#entry");

    hiddenEntryID.value = entry.id;
    journalDateInput.value = entry.date
    journalConceptsInput.value = entry.concept;
    journalMoodInput.value = entry.mood;
    journalEntryInput.value = entry.entry;
}

export default updateFormFields;