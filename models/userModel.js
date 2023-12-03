const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    email: String,
    username: String, 
    password: String,
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;