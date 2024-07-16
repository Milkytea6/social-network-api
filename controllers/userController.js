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
// Exports all functions for routes to use
module.exports = { getUsers, getSingleUser } 