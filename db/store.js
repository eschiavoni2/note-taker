const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const { stringify } = require("querystring");
// class for notes
class Store {

    // defined functions that read, write, and delete
    // read from db.json and return readfile + data
    read() {
        return readFileAsync("db/db.json", "utf8");
    };
    // stringify note and send to db.json file
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    };
    // take in note, read notes in array, add single note, the write them
    addNote(note) {
        return this.read()
        .then(data=>JSON.parse(data))
        .then(notes => 
            [...notes, note]
        ).then(newnotes => 
            this.write(newnotes) 
        );
    }
    // delete file, get note and use filter
    delete(id) {
        return this.getNotes().then(notes => {
            notes.filter(note => {
                note.id !== id;
            }).then(filteredNotes => {
                this.write(filteredNotes);
            });
        });
    };
}
module.exports = new Store();
