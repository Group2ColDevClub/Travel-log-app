const login = require('./Login');
const authentication = require('./Authenticate');
const TripsRouter = require('./TripsRoute')
const logout = require('./Logout')

module.exports = {
    login,
    logout,
    authentication,
    TripsRouter
};
