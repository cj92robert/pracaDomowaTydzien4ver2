var express = require('express');
var path = require('path');

var app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/pracaDomowaTydzien4'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/pracaDomowaTydzien4/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
