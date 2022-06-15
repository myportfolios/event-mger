const { getHashedPassword } = require("../utils/index");
const bcrypt = require("bcrypt");

//import DB model
const Login = require("../model/login");
const User = require("../model/user");
/**
 * get user from db
 */
exports.loginController = async (req, res) => {
  try {
    //destructure username & password from req body
    const { username, password } = req?.body;
    //hash password
    const hashedPassword = bcrypt;
    //get user from DB with the username from req
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("Uuser not found");

    //if user exist, compare password
    const isValidUser = await bcrypt.compare(password, user?.password);
    console.log("isValidUser", isValidUser);
    //if user is valid, generate token and return user details with token

    return;
  } catch {
    res.status(400).send();
  }
};
exports.registerController = async (req, res) => {
  try {
    const { username, password, email } = req?.body;
    //hash password
    const hashedPassword = await getHashedPassword(password);
    //check if username has already been taken
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(409).send("Username is already taken");
    }
    //proceed with user creation if username hasn't been taken
    const user = new User({ username, email, password: hashedPassword });
    // //save to db
    await user.save();
    // //send status and msg
    res.status(201).send("User created successfully");
  } catch {
    res.status(500).send("Registration failed!");
  }
};
