const mongoose = require('mongoose');
const Card = require('./card');



mongoose.connect('mongodb://localhost/flashCardsDb', { useNewUrlParser: true });

const db = mongoose.connection;

async function run() {

        let card1 = new Card({
            title: "History",
            poll: [{
                oneQuestion: "Who killed Pushkin ?",
                correctAnswer: "Dantes"},
                {oneQuestion: "The great war with Napoleon.Which year?",
                correctAnswer: "1812"}]
    
        })
        // await card1.save()
db.close();
}

run();
