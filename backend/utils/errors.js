class NoToken extends Error {
    constructor() {
        super('No token');
        this.name = 'NoToken';
        this.status = 401;
    }
}
class NoRefreshToken extends Error {
    constructor() {
        super('No Refresh token');
        this.name = 'NoRefreshToken';
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
class InvalidToken extends Error {
    constructor() {
        super('Invalid token');
        this.name = 'InvalidToken';
        this.status = 403;
    }
}
class MissingParameters extends Error {
    constructor(msg) {
        super('missing: ' + msg);
        this.name = 'MissingParameters';
        this.status = 400;
    }
}
class UserNotFound extends Error {
    constructor() {
        super('User not found');
        this.name = 'UserNotFound';
        this.status = 404;
    }
}

class InvalidPassword extends Error {
    constructor() {
        super('Invalid Password');
        this.name = 'InvalidPassword';
        this.status = 404;
    }
}

class JWTExpired extends Error {
    constructor() {
        super('jwt expired');
        this.name = 'JWTExpired';
        this.status = 403;
    }
}

class FailedToCreateADocument extends Error {
    constructor() {
        super('Failed to create a document');
        this.name = 'FailedToCreateADocument';
        this.status = 403;
    }
}

module.exports = {
    NoToken,
    NoRefreshToken,
    InvalidRefreshToken,
    InvalidToken,
    MissingParameters,
    UserNotFound,
    InvalidPassword, 
    JWTExpired,
    FailedToCreateADocument
}