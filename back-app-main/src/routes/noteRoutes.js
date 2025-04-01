const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/notes/:user_id', noteController.createNote); 
router.get('/notes/:user_id', noteController.getNotes);  
router.delete('/notes/:noteId/:user_id', noteController.deleteNote);

module.exports = router;