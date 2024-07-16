// Sets up Schema from mongoose
const { Schema, model } = require('mongoose');

// Initializes the User model
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
        
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