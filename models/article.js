var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: Schema.Types.Mixed,
  },
  cover: {
    type: String
  },
  url: {
    type: String
  }
});

var Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
