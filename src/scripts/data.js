
//gets data


const url ="http://localhost:3000/";

const API = {
    journalEntries : [],
    getJournalEntries () {
        return fetch(`${url}entries`)
            .then(response => {return response.json()})
            .then(journalArray => this.journalEntries = journalArray)
    },
    saveEntry: (entryObj) => {
        return fetch(`${url}entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObj)
        }).then(response => response.json());
    },
    deleteObject: (journalId) => {
        return fetch(`${url}entries/${journalId}`, {
                method: "DELETE"
        })
        .then(response => response.json())
    },
    updateObject: (journalId, entryObj) => {
        return fetch(`${url}entries/${journalId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObj)
        })
    }
}

export default API;