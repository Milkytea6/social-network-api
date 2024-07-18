const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');
// Imports models 

// Function to get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};
// function to get user by id
const getSingleUser = async (req, res) => {
    try {
        console.log(req.params.userId)
        const user = await User.findOne({ _id: req.params.userId })

        if (!user) {
            return res.stauts(404).json({ message: "Could not find user with that ID" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
// Function to create a user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
// Function to delete a user
const deleteUser = async (req, res) => {
    console.log('deleteUser');
    console.log(req.params.userId);
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: 'No user found by that id' });
        }
        res.json({ message: 'User successfully deleted' })
    } catch (err) {
        console.log('deleteUser catch err');
        res.status(500).json(err)
    }
}
const updateEmail = async (req, res) => {
    console.log('updateEmail');
    try {
        console.log(req.params.userId);
        console.log(req.body.email);
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: { email: req.body.email } },
            { runValidators: true, new: true }
        )
        res.json(user);
        } catch (err) {
        res.status(500).json(err);
    }
}
// Function to add a friend
const addFriend = async (req, res) => {
    console.log('addFriend')
    try {
        console.log(req.params);
        console.log(req.params.userId);
        console.log(req.params.friendsId);
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            // $addToSet will add an element to the friends array and not add duplicates
            { $addToSet: { friends: req.params.friendsId } },
            { runValidators: true, new: true }
    )
    res.json(user);
    } catch (err) {
        console.log('addFriend catch err');
        res.status(500).json(err);
    }
}
// Function to delete a friend
const removeFriend = async (req, res) => {
    console.log('deleteFriend');
    try {
        console.log(req.params.userId);
        console.log(req.params.friendsId);
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends:  req.params.friendsId  } },
            { runValidators: true, new: true }
        )
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
// Exports all functions for routes to use
module.exports = { 
    getUsers, 
    getSingleUser, 
    createUser, 
    deleteUser, 
    updateEmail, 
    addFriend, 
    removeFriend } 