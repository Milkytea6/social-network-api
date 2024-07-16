const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const User = require('./User');

//  Initializes the Thought model
const thoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        
       },
       createdAt: {
        type: Date,
        default: Date.now,
// Use a getter method to format the timestamp on query
       },
       username: [User],
       reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

// Creates a model from schema
const Thought = model('thought', thoughtSchema);

module.exports = Thought;