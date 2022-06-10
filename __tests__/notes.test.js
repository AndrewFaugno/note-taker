const fs = require('fs');
const createNewNote = require('../lib/notes');
const { notes } = require('../db/db.json');
jest.mock('fs');

test('creates new note object', () => {
    const newNote = createNewNote(
        { title: 'testTitle', text: 'testText'},
        notes
        );

    expect(newNote.title).toBe('testTitle');
    expect(newNote.text).toBe('testText');
});