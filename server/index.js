//import express
const express = require('express');
//import router
const router = require('../server/routes/routes');
//create instance
const app = express();

//use router
app.use(router);

//start server
const PORT = 8000
app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`)
})