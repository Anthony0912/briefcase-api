const service = require("../services/send-email.service");

exports.sendEmail = async (req, res, next) => {
    try {
        const response = await service.sendEmail(req.body);
        res.status(200).send(response);
    } catch (error) {
        next(error);
    }
};
