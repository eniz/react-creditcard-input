"use strict";

import React from 'react';

var cardFromNumber = function(num) {
  num = (num + "").replace(/D/g, "");
  for (var i = 0; i < cards.length; i++) {
    var n = cards[i];
    if (n.pattern.test(num)) return n;
  }
}

var defaultFormat = /(\d{1,4})/g;

var cards = [
  {
    type: 'maestro',
    pattern: /^(5018|5020|5038|6304|6759|676[1-3]|6768|5612|5893|6304|6759|0604|6390)/,
    format: defaultFormat,
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    cvcLength: [3],
    luhn: true
  },
  {
    type: 'diners_club',
    pattern: /^(36|38|30[0-5])/,
    format: defaultFormat,
    length: [14],
    cvcLength: [3],
    luhn: true
  },
  {
    type: 'laser',
    pattern: /^(6706|6771|6709)/,
    format: defaultFormat,
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: true
  },
  {
    type: 'jcb',
    pattern: /^35/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  },
  {
    type: 'china_union',
    pattern: /^62/,
    format: defaultFormat,
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: false
  },
  {
    type: 'discover',
    pattern: /^(6011|65|64[4-9]|622)/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  },
  {
    type: 'mastercard',
    pattern: /^5[1-5]/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  },
  {
    type: 'amex',
    pattern: /^3[47]/,
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    length: [15],
    cvcLength: [3, 4],
    luhn: true
  },
  {
    type: 'visa',
    pattern: /^4/,
    format: defaultFormat,
    length: [13, 14, 15, 16],
    cvcLength: [3],
    luhn: true
  }
];


export default class ReactCreditCardInput extends React.Component{
  render() {
    <div className="credit-card">
      <input 
        type="text"
	autoComplete="off"
	autoFocus="true"
        onKeyPress={(e)=> this.handleCCNumberInput(e)}
        placeholder="• • • •   • • • •   • • • •   • • • •" />
    </div>
  }

  handleCCNumberInput(e) {
    var target = e.currentTarget,
      targetVal = target.value,
      charCode = String.fromCharCode(e.which),
      charCodeLen = (targetVal.replace(/\D/g, "") + charCode).length,
      card = cardFromNumber(targetVal + charCode),
      maxLength = 16;

      if (card && (maxLength = card.length), !/^\d+$/.test(charCode) || charCodeLen > maxLength) {
        return void e.preventDefault();
      }
      var cardTest = card && "amex" === card.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/;
      return cardTest.test(targetVal) && target.selectionStart === targetVal.length ? (e.preventDefault(), void(target.value = targetVal + " " + charCode)) : void 0;
  }

}
