const path = require('path');
const fs = require('fs');

function createNewNote(body, noteArr) {
    const note = body;
    noteArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArr }, null, 2)
    );

    return note;
};

module.exports = createNewNote;