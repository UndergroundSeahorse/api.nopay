'use strict';

var braintree = require('braintree');
var config = require('../config.js');

exports.clientToken = clientToken;

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: config.merchantId,
  publicKey: config.publicKey,
  privateKey: config.privateKey
});

//////////

function clientToken (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
}
