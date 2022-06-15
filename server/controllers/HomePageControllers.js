const { getHashedPassword } = require("../utils/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

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
    //get user from DB with the username from req
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("Uuser not found");

    //if user exist, compare password
    const isValidUser = await bcrypt.compare(password, user?.password);
    //if user is valid, generate token and return user details with token
    //create jwt payload
    const jwtPayload = {
      id: user?._id,
      username: user?.username,
      email: user?.email,
      // exp: Math.floor(Date.now() / 1000) + 60 * 60, // token is valid for an hour
    };
    //create token
    const token =
      isValidUser &&
      jwt.sign(jwtPayload, keys.SECRET, {
        expiresIn: "1h",
        // exp: Math.floor(Date.now() / 1000) + 60 * 60, or
      });
    //send back user object with token
    return res
      .status(200)
      .send({ username: user?.username, token: `Bearer ${token}` });
  } catch {
    res.status(401).send();
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
