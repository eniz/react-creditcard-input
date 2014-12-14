"use strict";

var React = require('react');
var ReactCreditCardInput = require('../index.js');


module.exports = {
  init: function() {
    React.render(React.createElement(ReactCreditCardInput), document.getElementById('react'));
  }
}



