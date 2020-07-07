

const url = "http://localhost:3000/entries"

const API = {
    getJournalEntries: () => {
        return fetch(`${url}`)
        .then(response => response.json())
    },
    saveJournalEntry: (newEntryObj) => {
        return fetch (`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObj)
        })
    },
    deleteJournalEntry: (id) => {
        return fetch(`${url}/${id}`, {
           method: "DELETE"
        })
    },
    getSingleEntry: (id) => {
        return fetch (`${url}/${id}`)
        .then(response => response.json())
    },
    editJournalEntry: (id, editEntryObj) => {
        return fetch (`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editEntryObj)
        })
    }
}

export default API;