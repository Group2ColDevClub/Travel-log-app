const login = require('./Login');
const authentication = require('./Authenticate');
const TripsRouter = require('./tripsRoute')
const logout = require('./Logout')

module.exports = {
    login,
    logout,
    authentication,
    TripsRouter
};
