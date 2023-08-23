const repository = require("../repositories/project.repository");

exports.getAllProjects = async () => {
  const response = await repository.getAllProjects();
  return response;
};

exports.getAllProjectsExperience = async () => {
  const response = await repository.getAllProjectsExperience();
  return response;
};
