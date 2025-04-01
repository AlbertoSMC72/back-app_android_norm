const NoteService = require('../services/noteService');

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    const { user_id } = req.params;
    
    try {
        // Validación básica del user_id
        if (isNaN(user_id)){
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const numericUserId = parseInt(user_id);
        if (numericUserId <= 0) {
            return res.status(400).json({ error: 'User ID must be positive' });
        }

        const note = await NoteService.createNote(title, content, numericUserId);
        res.status(201).json(note);
    } catch (error) {
        if (error.message === 'User does not exist') {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

exports.getNotes = async (req, res) => {
    const { user_id } = req.params; 
    try {
        const notes = await NoteService.getNotes(user_id);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNote = async (req, res) => {
    const { noteId, user_id } = req.params;
    try {
        await NoteService.deleteNote(noteId, user_id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};