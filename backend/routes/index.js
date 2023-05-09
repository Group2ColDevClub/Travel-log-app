

const PostsRouter = require("./PostsRoute");

module.exports = {
  TripsRouter,
  PostsRouter,
};

const login = require('./Login');
const authentication = require('./Authenticate');
const TripsRouter = require('./TripsRoute');
const logout = require('./Logout');
const signup = require('./SignUp');

module.exports = {
    login,
    logout,
    authentication,
    TripsRouter,
    signup
};

