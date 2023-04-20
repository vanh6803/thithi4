const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/flowers')
   .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log('connection error'))

module.exports = {
    mongoose
};
