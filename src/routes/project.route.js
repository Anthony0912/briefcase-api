const controller = require("../controllers/project.controller");

module.exports = function (app) {
    app.get("/api/projects", controller.getAllProjects);
    app.get("/api/projects-experience", controller.getAllProjectsExperience);
}