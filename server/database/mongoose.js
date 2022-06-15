const mongoose = require("mongoose");
const keys = require("../config/keys");
const mongodb_url = keys.MONGO_DB_URL;

mongoose
  .connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((_) => console.log("App connected to database"))
  .catch((e) => console.log(e.message));
