const User = require('../models/userModel');

class UserService {
    static async createUser(username, password) {
        return await User.create(username, password);
    }

    static async login(username, password) {
        return await User.login(username, password);
    }

    static async userExists(user_id) {
        return await User.userExists(user_id);
    }
}

module.exports = UserService;