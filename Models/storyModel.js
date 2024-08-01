const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'era is required'],
        unique: true,
        trim: true
    },
    era: {
        type: String,
        required: [true, 'era is required'],
        trim: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String,
    }
})

const Story = mongoose.model('Story', storySchema)


module.exports = Story;