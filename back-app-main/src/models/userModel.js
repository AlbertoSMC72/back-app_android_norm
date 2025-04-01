const db = require('../config/db');

class User {
    static async create(username, password) {
        try {
            const [result] = await db.execute(
                'INSERT INTO notas_norm.users (username, password) VALUES (?, ?)',
                [username, password]
            );
            return { message: 'User created successfully', success: true };
        } catch (error) {
            return { message: 'Error creating user', success: false, error: error.message };
        }
    }

    static async login(username, password) {
        const [result] = await db.execute(
            'SELECT * FROM notas_norm.users WHERE username = ? AND password = ?',
            [username, password]
        );
        if (result.length > 0) {
            return { message: 'Logged in successfully', success: true, user_id: result[0].user_id };
        } else {
            return { message: 'Invalid username or password', success: false };
        }
    }

    static async userExists(user_id) {
        const [result] = await db.execute(
            'SELECT user_id FROM notas_norm.users WHERE user_id = ?',
            [user_id]
        );
        return result.length > 0;
    }

}

module.exports = User;