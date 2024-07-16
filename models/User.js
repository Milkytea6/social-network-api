// Sets up Schema from mongoose
const { Schema, model } = require('mongoose');
// imports the Thought model
const Thought = require('./Thought');

// Initializes the User model
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        thought: [Thought],
        
        friends: [User]
        
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

// Exports the User model
module.exports = User;