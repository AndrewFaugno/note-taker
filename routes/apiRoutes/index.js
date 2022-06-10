const router = require('express').Router();
const { notes } = require('../../db/db.json');
const {createNewNote, deleteNoteData} = require('../../lib/notes');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on what next index of the array will be
    req.body.id = uniqid();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const updatedNotes = deleteNoteData(id, notes);

    res.send('DELETE note request recieved');
});

module.exports = router;