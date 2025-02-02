const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    deleteThought, 
    updateThought,
    createReaction, 
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').put(removeReaction);

module.exports = router;
