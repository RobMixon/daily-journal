const updateFormFields = (entries) => {
    const hiddenID = document.querySelector("#id");
        const entryConceptInput = document.querySelector("#concept")
        const entryDateInput = document.querySelector("#date")
        const entryEntryInput = document.querySelector("#entry")
        const entryMoodInput = document.querySelector("#mood")

        hiddenID.value = entries.id;
        entryConceptInput.value = entries.concept;
        entryDateInput.value = entries.date;
        entryEntryInput.value = entries.entry;
        entryMoodInput.value=entries.mood;
}

export default updateFormFields;