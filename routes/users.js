var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NovasSchema = new Schema({
  id: Number,
  author: String,
  text: String,
  bigText: String
});
/*
{"id" : "0" , "author":"author" ,"text":"texttexttext", "bigText":"bigTextbigTextbigText"}
*/
var Nova = mongoose.model('Nova', NovasSchema);
router
  .route('/items')
  .get( function(req, res, next) {
    Nova.find({}, function(err,docs){
      if (err)return
      res.json(docs);
console.log('get req    ');
  });   
})
  .post( function(req,res) {
    var newNova = new Nova(req.body);
    newNova.save(function(err,data) {
      if(err) return
      console.log('item created!');
      res.status(201).json(data);
    });
  })
  





/* GET users listing. */



/*
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  // And insert something like this instead:
  res.json([
    {
      "id": 1,
      "author": "Саша Печкин",
      "text": "В четверг, четвертого числа...",
      "bigText":
        "в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
    },
    {
      "id": 2,
      "author": "Просто Вася",
      "text": "Считаю, что $ должен стоить 35 рублей!",
      "bigText": "А евро 42!"
    },
    {
      "id": 3,
      "author": "Max Frontend",
      "text": "Прошло 2 года с прошлых учебников, а $ так и не стоит 35",
      "bigText": "А евро опять выше 70."
    },
    {
      "id": 4,
      "author": "Гость",
      "text": "Бесплатно. Без смс, про реакт, заходи - https: //maxpfrontend.ru",
      "bigText":
        "Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!"
    }
  ]
  )});
  */
module.exports = router;
