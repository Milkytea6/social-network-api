const { User, Thought } = require('../models');
const connection = require('../config/connection');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected'); 
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    users = [];
    thoughts = [];
    await User.insertMany(users);
    await Thought.insertMany(thoughts);
    console.log(users);
    console.log(thoughts);
    process.exit(0);

})