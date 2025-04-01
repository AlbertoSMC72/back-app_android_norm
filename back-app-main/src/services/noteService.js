const NoteModel = require('../models/noteModel');
const UserService = require('./userService');

class NoteService {

    static async createNote(title, content, user_id) {
        // Verificar si el usuario existe
        const exists = await UserService.userExists(user_id);
        if (!exists) {
            throw new Error('User does not exist');
        }
        
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