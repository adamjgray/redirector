var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.redirect(302, req.params.url);
});
