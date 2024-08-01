const express = require('express');
const storiesController = require('./../Controllers/storiesController')




const router = express.Router();



router.route('/stories-by-era/:era')
    .get(storiesController.getStoryByEra)

router.route('/')
    .get(storiesController.getAllStories)
    .post(storiesController.createNewStory)

router.route('/:id')
    .get(storiesController.getStory)
    .patch(storiesController.updateStory)
    .delete(storiesController.deleteStory)




module.exports = router;