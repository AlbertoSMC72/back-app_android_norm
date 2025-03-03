const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/notes', noteController.createNote);
router.get('/notes/', noteController.getNotes);
router.delete('/notes/:noteId', noteController.deleteNote);

module.exports = router;