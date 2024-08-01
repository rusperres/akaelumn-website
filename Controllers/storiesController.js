const fs = require('fs');
const Story = require('./../Models/storyModel');
const { type } = require('os');
const { render } = require('ejs');



exports.getAllStories = async (req, res) => {
    try {
        const stories = await Story.find(req.query);


        res.status(200).json({
            status: 'Success',
            length: stories.length,
            data: {
                stories
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.getStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);

        console.log(story.name)

        let storyInfo = {
            requestType: 'byId',
            title: story.name,
            content: story.content
        };



        res.render('story/stories', storyInfo);



        // res.status(200).json({
        //     status: 'Success',
        //     data: {
        //         story
        //     }
        // })
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.getStoryByEra = async (req, res) => {
    try {
        era = req.params.era;
        console.log(era);

        const stories = await Story.find({ era: era });

        let storiesList = {
            requestType: 'byEra',
            title: era,
            stories: []
        };
        stories.forEach(element => {
            storiesList.stories.push(element);

        });



        res.render('story/stories', storiesList);
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.createNewStory = async (req, res) => {
    try {
        const story = await Story.create(req.body);

        res.status(201).json({
            status: 'Success',
            data: {
                story
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err.message
        })
    }
}

exports.updateStory = async (req, res) => {
    try {
        updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(201).json({
            status: 'Success',
            data: {
                story: updatedStory
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    }
}
exports.deleteStory = async (req, res) => {
    try {
        deletedStory = await Story.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'Success',
            data: null
        })
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err.message
        }
        )
    }
}

