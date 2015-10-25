'use strict';

/*
 * Module Dependencies
 */
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');

// Initialize the Express Application
var app = express();
var server = http.createServer(app);

// Parse the body data
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

require('./routes/routes.js')(app);

// Start the Server
server.listen(1212, function (err) {
  if(err) {
    console.error(err);
  } else {
    console.log('Party is hoping on port 1212');
  }
});
