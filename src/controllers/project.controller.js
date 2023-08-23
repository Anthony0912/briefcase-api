const service = require("../services/project.service");

exports.getAllProjects = async (req, res, next) => {
    try {
        const response = await service.getAllProjects();
        res.status(200).send(response);
    } catch (error) {
        next(error);
    }
};

exports.getAllProjectsExperience = async (req, res, next) => {
    try {
        const response = await service.getAllProjectsExperience();
        res.status(200).send(response);
    } catch (error) {
        next(error);
    }
};
