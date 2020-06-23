
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
    getSingleObject: (id) => {
        return fetch(`${url}entries/${id}`)
        .then(response => response.json());
        },
        updateObject: (id, updatedEntryObject) => {
            return fetch(`${url}entries/${id}`, {
                    method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedEntryObject)
            })
        },
        deleteObject: (id) => {
            return fetch(`${url}entries/${id}`, {
                    method: "DELETE"
            }).then(response => response.json())
        },
        getByMood: () => {
            return fetch(`${url}mood`)
            .then(response => response.json())
        }
}

export default API;