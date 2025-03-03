const NoteService = require('../services/noteService');

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await NoteService.createNote( title, content);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNotes= async (req, res) => {
    const { userId } = req.params;
    try {
        const notes = await NoteService.getNotes(userId);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteNote = async (req, res) => {
    const { noteId } = req.params;
    try {
        await NoteService.deleteNote(noteId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};