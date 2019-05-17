const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    qa: [{
        gameTitle: String,
        userQuestion: String,
        userAnswer: String
    }]
});

module.exports = mongoose.model('User', userSchema);
