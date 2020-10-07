
const express = require("express");
const app = express();
// const store = require('../db/store');
const notes = require('../db/store');
// get Route
module.exports = function(app) {
app.get("/api/notes", function(req, res) {
    res.json(notes);
});
// post route 
// app.post("/api/notes", function(req, res) {
//     notes.push(req.body);
//     res.send('')
// });
};
// delete