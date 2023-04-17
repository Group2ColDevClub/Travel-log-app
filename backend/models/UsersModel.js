const mongoose = require('mongoose');
const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        min: 2,
        lowercase: true,
        require: true,
        validtor: function (value) { return value > 2 },
        message: 'invalid username'
    },
    password: {
        type: String,
        min: 8,
        require: true
    },
    email: {
        type: String,
        minLength: 2,
        require: true,
        validator: function(value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    // creditCard: {
    //     cardNumber: {
    //         type: Number
    //     },
    //     expire: { 
    //         type: Date
    //     },
    //     // validate: () => true
    // },
    postsLiked: {
        type: Number,
        min: 0,
    },
    tripSearches: [{
        locationID: Number,
        searchesCount: Number,
    }],
    packageSearches: [{
        count: Number,
        packageID: Number,
        searchedAt: Date
    }],
    packagePurchased: [{
        count: Number,
        packageID: Number,
        createdAt: Date
    }],
});

module.exports = mongoose.model('Users', UsersSchema);
