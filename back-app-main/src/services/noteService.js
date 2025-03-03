const NoteModel = require('../models/noteModel');

class NoteService {
    static async createNote(title, content) {
        return await NoteModel.create( title, content);
    }

    static async getNotes(user_id) {
        return await NoteModel.getAll(user_id);
    }

    static async deleteNote(note_id) {
        await NoteModel.delete(note_id);
    }
}

module.exports = NoteService;