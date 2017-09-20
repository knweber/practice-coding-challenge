var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article');


// Retrieve a specific article
router.get('/articles/:id', function(req, res, next) {
  Article.findOne({_id: req.params.id}).then(function(article){
    res.render('show', { article: article });
  })
});

module.exports = router;
