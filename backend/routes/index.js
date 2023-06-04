

const PostsRouter = require("./PostsRoute");
const login = require('./Login');
const authentication = require('./Authenticate');
const TripsRouter = require('./tripsRoute')
const logout = require('./Logout')
const signup = require('./SignUp')
module.exports = {
    login,
    logout,
    authentication,
    TripsRouter,
    PostsRouter,
    signup
};

