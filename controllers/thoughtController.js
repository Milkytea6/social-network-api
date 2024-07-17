const { User, Thought } = require('../models');
// Imports models 

// Function to get all thoughts
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        return res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};
// function to get thought by id
const getSingleThought = async (req, res) => {
    try {
        console.log(req.params.thoughtId)
        const thought = await Thought.findOne({ _id: req.params.thoughtId })

        if (!thought) {
            return res.stauts(404).json({ message: "Could not find thought with that ID" });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}
// Function to create a thought
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}
// Function to delete a thought
const deleteThought = async (req, res) => {
    console.log('deletethought');
    console.log(req.params.thoughtId);
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            return res.status(404).json({ message: 'No thought found by that id' });
        }
        res.json({ message: 'thought successfully deleted' })
    } catch (err) {
        console.log('deletethought catch err');
        res.status(500).json(err)
    }
}
const updateThought = async (req, res) => {
    console.log('updateThought');
    try {
        console.log(req.params.thoughtId);
        console.log(req.body.thoughtText);
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: { thoughtText: req.body.thoughtText } },
            { runValidators: true, new: true }
        )
        res.json(thought);
        } catch (err) {
        res.status(500).json(err);
    }
}
// Function to add a reaction
const createReaction = async (req, res) => {
    console.log('addreaction')
    try {
        console.log(req.params.thoughtId)
        console.log(req.body)
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // $addToSet will add an element to the reactions array and not add duplicates
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
    )
    res.json(thought);
    } catch (err) {
        console.log('addreaction catch err');
        res.status(500).json(err)
    }
}
// Function to delete a reaction
const removeReaction = async (req, res) => {
    console.log('deletereaction');
    try {
        console.log(req.params.thoughtId);
        console.log(req.params.reactionsId);
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { thoughtId: req.params.reactionsId } } },
            { runValidators: true, new: true }
        )
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}
// Exports all functions for routes to use
module.exports = { getThoughts, getSingleThought, createThought, deleteThought, updateThought, createReaction, removeReaction } 