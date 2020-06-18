
//gets data


const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json());
    },
    saveEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());
    }                 
}

export default API;