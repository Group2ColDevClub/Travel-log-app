const UsersModel = require("../models/UsersModel");
const bcrypt = require('bcrypt')

const getUser = async (username, password) => {
    try {
        const user = await UsersModel.findOne({ username: username });
        console.log(user, user.password);
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Errors.InvalidPassword();
        return {
            id: user._id,
            username: user.username
        };
    } catch (err) {
        console.log(err.message);
    }
    return null;
}

module.exports = {
    getUser,
}