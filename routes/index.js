var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article');

// Retrieve all articles
router.get('/', function(req, res) {
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    } else {
      res.render('index', { title: 'Articles',
        articles: articles
      });
    }
  });
});

module.exports = router;
