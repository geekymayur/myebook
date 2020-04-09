var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'New application',
      layout: 'layout',
      username: 'mayur sharma',
      email: 'rajmayur219@gmail.com'
    });
});


/* GET home page. */
router.get('/javascript', function (req, res, next) {
  res.render('javascript/introduction',
    {
      title: 'Introduction to Javascripts',
      layout: 'layout',
      username: 'mayur sharma',
      email: 'rajmayur219@gmail.com',
      topicName: 'Introduction to Javascript',
      navItem : 'page1'

    });
});

router.get('/literal-variable-contant', function (req, res, next) {
  res.render('javascript/literal-variable-contant',
    {
      title: 'literal variable contant',
      layout: 'layout',
      username: 'mayur sharma',
      email: 'rajmayur219@gmail.com',
      topicName: 'Literal variables and constant',
      navItem :'page2'
    });
});

// data types of javascript
router.get('/data-types', function (req, res, next) {
  res.render('javascript/data-types',
    {
      title: 'Data Types of Javascript',
      layout: 'layout',
      username: 'mayur sharma',
      email: 'rajmayur219@gmail.com',
      topicName: 'Data Types of Javascript',
      navItem :'page3'
    });
});
module.exports = router;
