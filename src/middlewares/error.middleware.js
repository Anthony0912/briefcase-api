class GeneralError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

class BadRequest extends GeneralError {
    constructor(message) {
        super(message, 400);
    }
}

class Unauthorized extends GeneralError {
    constructor(message) {
        super(message, 401);
    }
}

class NotFound extends GeneralError {
    constructor(message) {
        super(message, 404);
    }
}

module.exports = {
    GeneralError,
    BadRequest,
    NotFound,
    Unauthorized
};
