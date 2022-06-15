const { body, validationResult } = require("express-validator");

/**
 * This middleware validates the input from client
 * @param {request from client} req
 * @param {response from server} res
 * @param {fn to move  to the next middleware} next
 */
const ValidationMiddleware = async (req, res, next) => {
  //find validation errors
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    // console.log('errors', res.status(400).json({ errors: errors.array() }))
    //return error
    return res.status(400).json({ errors: errors.array() });
  }
  //call the next middleware if error doesn't exist
  next();
};
module.exports = ValidationMiddleware;
