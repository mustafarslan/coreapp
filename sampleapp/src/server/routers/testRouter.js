var express = require('express');
var testRouter = express.Router();

var sendError = function(err, res) {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

var response = {
  status : 200,
  data: [],
  message: null
};

testRouter.get('/', function(req, res){
  response.message = {message:"test"};
  res.json(response);
});


module.exports = testRouter;
