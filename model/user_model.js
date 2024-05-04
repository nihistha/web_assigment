const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required : true
    },
});


const User = mongoose.model("user",user_schema);
module.exports = User;