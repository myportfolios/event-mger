const bcrypt = require("bcrypt");

exports.getHashedPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
/**
 * getUserAction checks if the request is a login or register.
 * @param {object} req
 * @returns boolean
 */
exports.isRegisterAction = (req) => {
  const isRegister = false;
  const reqBody = req?.body;
  if (Object.keys(reqBody).includes("email")) {
    isRegister = true;
  }
  return isRegister;
};
