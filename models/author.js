const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    firstname: String,
    lastname: String,
    stories: [{
        title: String,
        paragraphs: [String],
    }]
})

module.exports = mongoose.model('author', AuthorSchema);
