
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    isActive: Boolean
})

mongoose.model('users',UserSchema);

module.exports = mongoose.model('users');