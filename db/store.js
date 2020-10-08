const fs = require("fs");
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
    // delete file, get note and use filter
    del() {
        return this.getnotes().then(notes => {
            notes.filter(note => {
                note.id !== id;
            }).then(filteredNotes => {
                this.write(filteredNotes);
            });
        });
    };
}
module.exports = new Store();
