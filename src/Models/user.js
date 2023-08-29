const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps : true});

const User = mongoose.model("user", userSchema);

module.exports = User;
