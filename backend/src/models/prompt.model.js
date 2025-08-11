const mongoose = require('mongoose')



const promptSchema = new mongoose.Schema({


    title: String,
    promptText: String,
    tags: [String], // initially empty, will be AI generated later
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    isPublic: { type: Boolean, default: false },
}, {
    timestamps: true
})


const promptModel = mongoose.model('Prompt', promptSchema)

module.exports = promptModel