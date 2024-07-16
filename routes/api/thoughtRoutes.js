const router = require('express').Router();
const {
    
} = require('../../controllers/thoughtController');

// /api/thoughts
// router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// router.route('/:thoughtId').get(getSingleThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;
