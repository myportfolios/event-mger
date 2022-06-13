const bcrypt = require("bcrypt");

exports.getHashedPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword;
};
