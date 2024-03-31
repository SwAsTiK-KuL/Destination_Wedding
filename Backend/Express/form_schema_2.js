const { type } = require("jquery");
const mongoose = require("mongoose");

const userSchema1 = new mongoose.Schema({
    firstname: {
        type: String
    },
    email: {
        type: String
    },
    lastname: {
        type: String
    },
    textarea:{
        type:String
    },
    phone:{
        type:Number
    },
});

const User1 = mongoose.model("User1", userSchema1); // Use mongoose.model to create a model

module.exports = User1; 