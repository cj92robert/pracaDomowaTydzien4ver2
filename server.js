var express = require("express");
var bodyParser = require("body-parser");





var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname ;
app.use(express.static(distDir));
 //
