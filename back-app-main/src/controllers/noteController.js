const NoteService = require('../services/noteService');

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    const { user_id } = req.params; 
    try {
        const note = await NoteService.createNote(title, content, user_id);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
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