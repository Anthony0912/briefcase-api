const controller = require("../controllers/send-email.controller");

module.exports = function (app) {
    app.post("/api/send-email", controller.sendEmail);
}