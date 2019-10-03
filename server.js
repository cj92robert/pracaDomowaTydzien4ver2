var express = require("express");
var bodyParser = require("body-parser");





var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname +'/dist/pracaDomowaTydzien4ver2';
app.use(express.static(distDir));
 //
