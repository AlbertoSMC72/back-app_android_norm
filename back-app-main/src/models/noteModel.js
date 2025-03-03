const db = require('../config/db');

class Note {
    static async create(title, content) {
        const [result] = await db.execute(
            'INSERT INTO notas_norm.notes (title, content) VALUES (?, ?)',
            [title, content]
        );
        if (result.affectedRows > 0) {
            return { success: true, message: 'Note created successfully' };
        } else {
            return { success: false, message: 'Failed to create note' };
        }
    }

    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM notas_norm.notes');
        return rows;
    }

    static async delete(note_id) {
        const [result] = await db.execute('DELETE FROM notas_norm.notes WHERE note_id = ?', [note_id]);
        if (result.affectedRows > 0) {
            return { success: true, message: 'Note deleted successfully' };
        } else {
            return { success: false, message: 'Failed to delete note' };
        }
    }
}

module.exports = Note;