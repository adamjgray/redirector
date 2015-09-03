var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.redirect(302, req.query.url);
});

var server = app.listen(app.get('port'), function() {
  console.log('Node is running on port', app.get('port'))
});
