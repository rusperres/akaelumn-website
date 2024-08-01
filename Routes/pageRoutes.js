const express = require('express');
const pageController = require('../Controllers/pageController');

const router = express.Router();

router.route('/')
    .get(pageController.getHome)

router.route('/stories')
    .get(pageController.getStories)

router.route('/art')
    .get(pageController.getArt)

router.route('/shop')
    .get(pageController.getShop)

router.route('/about')
    .get(pageController.getAbout)

module.exports = router;