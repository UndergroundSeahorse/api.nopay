'use strict';

var Firebase = require('firebase');

var db = new Firebase('https://nopay.firebaseio.com/');

module.exports = db;
