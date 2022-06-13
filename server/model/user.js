
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId, //use mongodb default id
      },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})
const User = mongoose.model('User', UserSchema)

module.exports = User;