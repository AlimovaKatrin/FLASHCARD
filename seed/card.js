const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
   title: String,
   poll: {
       oneQuestion: String,
       correctAnswer: String
   }
});

cardSchema.statics.showQuestion =  async function(putTitle) {
   let all =  (await this.find({title:putTitle})).map(item=>item.poll);
   return all[0].oneQuestion;
 }
 
 cardSchema.statics.getTitle =  async function(putTitle) {
 let all =  (await this.find({title:putTitle})).map(item=>item.title);
    console.log(all)
    return all;
  }

  cardSchema.statics.getTitle =  async function(putTitle) {
   let all =  (await this.find({title:putTitle})).map(item=>item.title);
      console.log(all)
      return all;
    }

 module.exports = mongoose.model('Card', cardSchema);
 
 