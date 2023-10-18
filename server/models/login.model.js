const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: { type: String },
    password: {type: String}
}, { timestamps: true });

module.exports = mongoose.model('Login', LoginSchema);