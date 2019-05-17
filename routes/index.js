const express = require('express');
const router = express.Router();
const Card = require('../seed/card.js');


/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('home');
});

router.get('/logIn', async function (req, res, next) {
  let name=req.body.userName
  res.render('index',{name});
});


router.get('/chooseGame', async function (req, res, next) {
  let cards = await Card.find()
  res.render('index', { cards });
});

router.get('/game/:id', async function (req, res, next) {
  const putTitle = req.params.id;
  let question = await Card.showQuestion(putTitle);
  
  res.render('game', { question });
});
/////////
// router.post('/form2', async function(req, res, next) {
//   let quest1=req.body.questName;
//   let answ1=req.body.inputAnswer;
//   const putTitle = req.params.id;
//   let question = await Card.showQuestion(putTitle);
//   const newUser = new User ({
//     name: req.body.inputUserName,
//     qa: [{
//         gameTitle: req.params.id,
//         userQuestion: quest1,
//         userAnswer: answ1
//     }]
//   })
//   await  newUser.save();
//   res.json(question);
 
//   });


module.exports = router;
