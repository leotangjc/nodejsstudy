//引用express和路由组件
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express',
      appName : '用户管理系统'

  });
});

module.exports = router;
