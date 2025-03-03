const User = require('../models/userModel');

class UserService {
    static async createUser(username, password) {
        return await User.create(username, password);
    }

    static async login(username, password) {
        return await User.login(username, password);
    }
}

module.exports = UserService;