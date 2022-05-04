const { ValidationError } = require("express-validation");
const { GeneralError } = require("./error.middleware");


const errorHandler = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    } else if (error instanceof GeneralError) {
        return res.status(error.statusCode).json({
            status: "error",
            details: error.message,
        });
    } else {
        return res.status(500).json({
            status: "error",
            details: "Internal server error",
        });
    }
};

module.exports = errorHandler;
