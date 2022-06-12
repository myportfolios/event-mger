const mongoose = require('mongoose');
const chalk = require('chalk')
const mongodb_url = 'mongosh "mongodb+srv://cluster0.hkteh.mongodb.net/myFirstDatabase" --apiVersion 1 --username admin4EventsMger';

mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((_) => console.log(chalk.green("App connected to database")))
  .catch((e) => console.log(e.message));