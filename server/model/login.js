//import mongoose
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        required
    },
    password:{
        type:String,
        required
    }
})
const Login = mongoose.model("Login", loginSchema);
module.exports = Login;