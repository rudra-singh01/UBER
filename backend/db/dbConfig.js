const mongoose = require('mongoose');

function DBConection() {
    mongoose.connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
    
}

module.exports = DBConection;