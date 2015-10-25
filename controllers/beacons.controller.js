'use strict';

var db = require('../utils/firebase.js');

exports.parse = parse;

//////////

/**
  * parse - Parses beacon data, when a client finds a beacon
  *
  */

function parse (req, res) {
  var user = req.body.user;
  var beaconData = req.body.beaconData;

  console.log(req.body);

  // Add the user to the customers table in the database
  db.child('customers').push({
    user: user
  });
}
