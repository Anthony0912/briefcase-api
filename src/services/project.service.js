const repository = require("../repositories/project.repository");

exports.getAllProjects = async () => {
  const response = await repository.getAllProjects();
  return response;
};
