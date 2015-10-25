'use strict';

var braintree = require('../controllers/braintree.controller.js');
var beacons = require('../controllers/beacons.controller.js');

module.exports = routes;

//////////

function routes (app) {

  // Basic test
  app.route('')
    .get(function (req, res) {
      res.send('The party is on!');
    });

  // Payments
  app.route('/client_token')
    .get(braintree.clientToken);

  // Beacons
  app.route('/parseBeaconData')
    .post(beacons.parse);
}
