const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = mongoose.Schema({
    userName: {
        type: String,
        min: 2,
        lowercase: true,
        require: true,
        validtor: function (value) { return value > 2 },
        message: 'invalid userName'
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
        validator: function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
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
    trips: [{
        location: String,
        date: Date,
        img: String,
    }]
});

UsersSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Users', UsersSchema);
