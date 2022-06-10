const fs = require('fs');
const { createNewNote, deleteNoteData } = require('../lib/notes');
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

test('deletes a note object', () => {
    const noteArr = [
        {
            title: 'name',
            text: 'text',
            id: '1'
        },
        {
            title: 'name',
            text: 'text',
            id: '2'
        },
        {
            title: 'name',
            text: 'text',
            id: '3'
        }
    ];
    const updatedArr = deleteNoteData(2, noteArr);

    expect(updatedArr.length).toEqual(2)
})