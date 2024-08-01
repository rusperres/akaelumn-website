const fs = require('fs');


exports.getHome = (req, res) => {
    res.render('home/home');
}

exports.getStories = (req, res) => {
    let data = {
        requestType: 'byEra',
        title: 'Guide',
        stories: []
    }
    res.render('story/stories', data);
}

exports.getArt = (req, res) => {
    res.render('about/about');
}

exports.getShop = (req, res) => {
    res.render('about/about');
}

exports.getAbout = (req, res) => {
    res.render('about/about');
}