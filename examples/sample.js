"use strict";

var React = require('react');
var ReactCreditCardInput = require('./../src/ReactCreditCardInput');


module.exports = {
  init: function() {
    React.render(React.createElement(ReactCreditCardInput), document.getElementById('react'));
  }
}



