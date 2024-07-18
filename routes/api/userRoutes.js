const router = require('express').Router();
const {
    getUsers, 
    getSingleUser,
    createUser,
    deleteUser,
    updateEmail,
    addFriend, 
    removeFriend
    
} 
= require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateEmail).delete(deleteUser);

// /api/users/:userId/friends/
router.route('/:userId/friends/:friendsId').post(addFriend).put(removeFriend);

module.exports = router;
