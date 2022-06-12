const mongoose = require('mongoose');
// const chalk = require('chalk')
const mongodb_url = "mongodb+srv://admin4EventsMger:BBSW5as1bcbOuc08@cluster0.hkteh.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((_) => console.log("App connected to database"))
  .catch((e) => console.log(e.message));