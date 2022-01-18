// Object Document Model (ODM)
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const QuestionSchema = Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    repo: {
        type: String,
    },
    live: {
        type: String
    },
    answered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

// Instance of a question model using the provided schema
// Test
module.exports = Question = mongoose.model('Question', QuestionSchema)