//mongodb connection
//mongosh "mongodb+srv://cluster0.hkteh.mongodb.net/myFirstDatabase" --apiVersion 1 --username admin4EventsMger
//import express
const express = require("express");

//import router
const router = require("../server/routes/routes");
//create instance
const app = express();

//import body-parser
const bodyParser = require("body-parser");

//create jsonParser for json request
const jsonParser = bodyParser.json();

//create urlencoder parser for urlencoder request from forms such as login/register
const urlencoderParser = bodyParser.urlencoded({ extended: true });

//connect the app to database when the app  starts
require("./database/mongoose");

app.use("/login", urlencoderParser);
app.use("/register", urlencoderParser);
app.use(jsonParser);

//use router
app.use(router);

//start server
const PORT = 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server started at port ${PORT}`);
});
