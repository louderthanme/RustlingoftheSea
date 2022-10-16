const mongoose = require('mongoose');
const Author = require('C:/Users/ruben/Documents/Programming/Portafolio/RustlingoftheSea/models/author.js')
const story = require('C:/Users/ruben/Documents/Programming/Portafolio/RustlingoftheSea/seeds/stories.js')




main().catch(err => console.log(`oh no mongo ${err}`));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/authors');
    console.log('database from seeds index connnected');
}


const seedDB = async () => {
    await Author.deleteMany({})
    const author = new Author({
        firstname: 'Ruben',
        lastname: 'Aguirre',
        stories: story[0]
    });
    await author.save();
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log('finished')
})