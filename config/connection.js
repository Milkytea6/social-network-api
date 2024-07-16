const { connect, connection } = require('mongoose');
// Establish connection to mongo db

connect('mongodb://127.0.0.1:27017/userDB');

module.exports = connection;