const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({

    username: {

        type: String,
        unique: true,
        required: true
    },

    password: {

        type: String,
        unique: true
    },

}, { timestamps: true },)

const userModel = mongoose.model("users", userSchema)


module.exports = userModel