
const express = require("express");
const app = express();
// const store = require('../db/store');
const store = require('../db/store');
// get Route
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        store.read().then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
    });
    // post route 
    app.post("/api/notes", function(req, res) {
        // passed the data from the request to the class method
        store.write(req.body).then(note => res.json(note))
        .catch(err => res.status(500).json(err))
    });
    // delete route
    app.delete("/api/notes/:id", function(req, res) {
        store.delete(req.params.id).then(() => res.json())
        .catch(err => res.status(500).json(err))
    })
};

