/**
 * Created by tangjiacheng on 2017/7/26.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/jia', function(req, res, next) {
  res.send('welcome to tang');
});

router.post('/jia', function(req, res, next) {
  res.send('welcome to tang');
});

module.exports = router;
