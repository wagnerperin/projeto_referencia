module.exports = app => {
    const mongoose = require('mongoose');

    const schema = mongoose.Schema({
        name: {
            type: String
        },
        email: {
            type: String
        }
    });

    mongoose.model('User', schema);
}