const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send("it's working")
})
//export router and use middleware in app
module.exports = router;
