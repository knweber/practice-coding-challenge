// My test db isn't even working, so I need to figure this out

process.env.NODE_ENV = 'test';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var app = require('../app');
var Article = require('../models/article');

var should = chai.should();
chai.use(chaiHttp);

describe('Articles', () => {

  describe('/GET index', () => {
    it('it should return all articles in DB', (done) => {
      chai.request(app)
      .get('/')
      .end((err,res) => {
        res.should.have.header('content-type', 'text/html; charset=utf-8');
        res.should.have.status(200);
        done();
      })
    })
  });
  describe('/GET /:id article', () => {
    it('it should get an article by the given id', (done) => {
      var articleId = '59a9e234f36d28742f3718d9';
        chai.request(app)
        .get('/articles/' + articleId)
        .end((err, res) => {
          res.should.have.header('content-type', 'text/html; charset=utf-8');
          res.should.have.status(200);
          res.text.should.include('cnid-tech-test/1.jpg');
          res.req.path.should.include('59a9e234f36d28742f3718d9');
          done();
        });
      });
    });
  });
