/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react');


function cardFromNumber(num) {
  num = (num + "").replace(/D/g, "");
  for (var i = 0; i < cards.length; i++) {
    var n = cards[i];
    if (n.pattern.test(num))
      return n;
  }
}

var defaultFormat = /(\d{1,4})/g;

var cards = [{
                type: "visa",
                pattern: /^4/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: "mastercard",
                pattern: /^5[0-5]/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: "amex",
                pattern: /^3[47]/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                length: [15],
                cvcLength: [4],
                luhn: true
            }, {
                type: "dinersclub",
                pattern: /^3[0689]/,
                format: defaultFormat,
                length: [14],
                cvcLength: [3],
                luhn: true
            }, {
                type: "discover",
                pattern: /^6([045]|22)/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }, {
                type: "jcb",
                pattern: /^35/,
                format: defaultFormat,
                length: [16],
                cvcLength: [3],
                luhn: true
            }];


var ReactCreditCardInput = React.createClass({
  handleCCNumberInput: function(e) {
    var target = e.currentTarget,
        targetVal = target.value,
        i = String.fromCharCode(e.which),
        targetLen = (targetVal.replace(/\D/g, "") + i).length,
        a = cardFromNumber(targetVal + i),
        maxLength = 16;

    if (a && (maxLength = a.length), !/^\d+$/.test(i) || targetLen > maxLength)
      return void e.preventDefault();

    var l = a && "amex" === a.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/;

    return l.test(targetVal) && target.selectionStart === targetVal.length ? (e.preventDefault(), void(target.value = targetVal + " " + i)) : void 0;
  },

  render: function() {
    return (
      <div className="react-credit-card-input">
        <input
          type="text"
          autoComplete="off"
          onKeyPress={this.handleCCNumberInput}
          placeholder="• • • •   • • • •   • • • •   • • • •" />
      </div>
    );
  }
});

module.exports = ReactCreditCardInput;