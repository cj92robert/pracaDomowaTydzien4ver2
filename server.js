var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(__dirname + '/dist/pracaDomowaTydzien4>'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/pracaDomowaTydzien4/index.html'));
});

app.listen(process.env.PORT || 4000, function () {
  console.log('Node app is working!');
});
