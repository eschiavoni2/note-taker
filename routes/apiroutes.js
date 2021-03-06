const path = require("path");
const { v4: uuidv4 } = require('uuid');
// const express = require("express");
// const app = express();
const store = require('../db/store');
// get Route
module.exports = function (app) {
    // read the db.json file and return saved notes as json
    app.get("/api/notes", function (req, res) {
        store.read()
            .then(data => JSON.parse(data))
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err))
    });
    // receiving a new note to save on the request body to db.json file and then return new note to client
    app.post("/api/notes", function (req, res) {
        req.body.id = uuidv4();
        // passed the data from the request to the class method
        store.addNote(req.body)
            .then(note => res.json({
                ok: true
            }))
            .catch(err => res.status(500).json(err));
    });
    // receivng a query parameter containing the id of a note to delete
    app.delete("/api/notes/:id", function (req, res) {
        store.delete(req.params.id)
            .then(() => res.json({
                ok: true
            }))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            });
    });
}
