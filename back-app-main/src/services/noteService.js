const NoteModel = require('../models/noteModel');

class NoteService {
    static async createNote(title, content, user_id) {
        return await NoteModel.create(title, content, user_id);
    }

    static async getNotes(user_id) {
        return await NoteModel.getAll(user_id);
    }

    static async deleteNote(note_id, user_id) {
        await NoteModel.delete(note_id, user_id);
    }
}

module.exports = NoteService;