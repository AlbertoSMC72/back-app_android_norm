const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/notes/:user_id', noteController.createNote); // user_id en params
router.get('/notes/:user_id', noteController.getNotes);    // user_id en params
router.delete('/notes/:noteId/:user_id', noteController.deleteNote); // noteId + user_id

module.exports = router;