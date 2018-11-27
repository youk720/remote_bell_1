var express = require('express');
var router = express.Router();

let sw = '';

router.post('/', function(req, res){
  // console.log(req.body);
  // console.log(req.body.sw);
  sw = req.body.sw;
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'nyan',
    // swの値をgetへ送る
    sw: sw
  });
});
router.get('/sw', function(req, res, next){
  res.json({
    // swの値を /localhost:3000/sw へだす
    sw: sw
  });
});

module.exports = router;
