var express = require('express');
var ect     = require('ect');
var ectRenderer = ect({ watch: true, root: __dirname + '/views', ext: '.ect'});

var app = express();

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.get('/', function (req, res) {
  res.render('index', {title: "test"});
});

app.listen(3000);
console.log('Listening on port 3000');
