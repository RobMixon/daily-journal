/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

//applies the rendered data

import API from "./data.js"
import renderJournalEntries from "./entryComponent.js"

API.getJournalEntries().then(renderJournalEntries)