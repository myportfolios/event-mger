const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

//import login middleware
const ValidationMiddleware = require("../middlewares/ValidationMiddleware");

const {
  loginController,
  registerController,
} = require("../controllers/HomePageControllers");
router.get("/", (req, res, next) => {
  return res.send("it's working");
});

router.post(
  "/register",
  body("email").isEmail(),
  body("username").isAlphanumeric(),
  body("password").isLength({ min: 5 }).isAscii(),
  ValidationMiddleware,
  registerController
);
router.post("/login", ValidationMiddleware, loginController);
//export router and use middleware in app
module.exports = router;
