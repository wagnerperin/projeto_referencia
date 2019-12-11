module.exports = uri => {
    const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://' + uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Connection closed from application close.');
            process.exit(0);
        });
    });
}