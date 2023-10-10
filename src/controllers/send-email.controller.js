const service = require("../services/send-email.service");

exports.sendEmail = async (req, res, next) => {
    try {
        const response = await service.sendEmail(req.body);
        if (response.hasOwnProperty('statusCode')) {
            return res.status(response.statusCode).json({ statusCode: response.statusCode, response });
        }
        res.status(200).json({ statusCode: 200, response });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
