
//gets data


const url ="http://localhost:3000/";

const API = {
    getJournalEntries () {
        return fetch(`${url}entries`)
            .then(response => response.json());
    },
    saveEntry: (newEntryObject) => {
        return fetch(`${url}entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());
    },
    getSingleObject: (journalId) => {
        return fetch(`${url}entries/${journalId}`)
        .then(response => response.json());
    },
    updateObject: (journalId, updatedEntryObject) => {
        return fetch(`${url}entries/${journalId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntryObject)
        })
        .then(response => response.json())
    },
    deleteObject: (journalId) => {
        return fetch(`${url}entries/${journalId}`, {
                method: "DELETE"
        })
        .then(response => response.json())
    },
    getByMood: () => {
        return fetch(`${url}mood`)
        .then(response => response.json())
    }
}

export default API;