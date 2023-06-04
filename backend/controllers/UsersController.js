const UsersModel = require("../models/UsersModel");

const getUser = async (username, password) => {
    try {
        const user = await UsersModel.findOne({ username: username });
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