const router = require('express').Router();
const { notes } = require('../../db/db.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on what next index of the array will be
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;