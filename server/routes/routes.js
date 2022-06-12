const express = require('express');
const router = express.Router();

const {loginController} = require('../controllers/HomePageControllers')
router.get('/', (req, res, next) => {
    return res.send("it's working")
})
router.post('/login', loginController)
//export router and use middleware in app
module.exports = router;
