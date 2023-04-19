class NoToken extends Error {
    constructor() {
        super('No token');
        this.name = 'NoToken';
        this.status = 401;
    }
}
class InvalidRefreshToken extends Error {
    constructor() {
        super('Invalid refresh token');
        this.name = 'InvalidRefreshToken';
        this.status = 403;
    }
}
class MissingParameters extends Error { 
    constructor(msg) {
        super('missing: ' + msg);
        this.name = 'MissingParameters';
        this.status = 401;
    }
}
class UserNotFound extends Error {
    constructor() {
        super('User not found');
        this.name = 'UserNotFound';
        this.status = 404;
    }
}
module.exports = {
    NoToken,
    InvalidRefreshToken,
    MissingParameters,
    UserNotFound,
}