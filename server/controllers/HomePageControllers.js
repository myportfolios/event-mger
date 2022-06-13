const {getHashedPassword} = require('../utils/index');


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
    const login = new Login({ username, password });
    //save to db
    login.save();
    //sned status for success
    res.status(201).send("Login successful");
    return;
  } catch {
    res.status(400).send();
  }
};
exports.registerController = async ( req, res) => {
    try {
      const {username, password, email} = req?.body;
      //hash password
      const hashedPassword = await getHashedPassword(password)
      const user = new User({username,email, password:hashedPassword});
      // //save to db
      await user.save();
      // //send status and msg
      res.status(201).send("User created successfully")
    } catch {
      res.status(500).send("Registration failed!")
    }
  };
