const repository = require("../repositories/send-email.repository");

exports.sendEmail = async (email) => {
  const response = await repository.sendEmail(email);
  return response;
};
