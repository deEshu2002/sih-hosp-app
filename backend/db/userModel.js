const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String, 
        required: [true, "Please provide the Email"],
        unique: [true, "Email Exist"],
    },
    password:{
        type: String, 
        required: [true, "Please provide the Password"],
        unique: false,
    },
})

module.exports = mongoose.model.Users || mongoose.model('Users', userSchema);