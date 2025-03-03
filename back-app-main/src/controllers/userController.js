const UserService = require('../services/userService');

class UserController {
    static async createUser(req, res) {
        const { username, password } = req.body;
        try {
            const user_id = await UserService.createUser(username, password);
            res.status(201).json({ user_id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await UserService.login(username, password);
            res.status(200).json( user );
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;