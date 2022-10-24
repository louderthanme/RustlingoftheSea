const express = require('express')
const path = require('path') // this is built into express, i am using it to be able to run the file from any folder
const app = express();
const mongoose = require('mongoose')

const Author = require('./models/author')
const catchAsync = require('./utils/catchAsync')

main().catch(err => console.log(`oh no mongo ${err}`));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/authors');
    console.log('database "authors" from main folder connnected');
}


app.set('view engine', 'ejs'); // telling express to use this extension by default
app.set('views', path.join(__dirname, '/views'))  //  __dirname is where the index.js file is

app.use(express.static('public')) // i am telling express that I want to serve static files from this folder

app.get('/', catchAsync(async (req, res) => {
    const id = '63570095c1ef780ceff6e72f'
    const author = await Author.findById(id)
    const text = author.stories[0].paragraphs
    const paragraphs = text.split(/0/);

    res.render('./home.ejs', { author, paragraphs })
}
))

app.listen(3000, () => {
    console.log('listening on port 3000')
})