import React, { Component, PropTypes } from 'react';
import cards from './CardTypes';


class CreditCard extends Component {
  constructor(props, context) {
    super(props, context);

    const state = {
      cardNumber: '',
      cardType: ''
    };

    this.state = state;
  }

  cardFromNumber(num) {
    num = (num + "").replace(/D/g, "");
    for (let i = 0; i < cards.length; i++) {
      var n = cards[i];
      if (n.pattern.test(num)) return n;
    }
  }

  setCardNumber(event) {
    var targetVal = event.target.value;
    this.setState({cardNumber: targetVal});
  }

  handleCCNumberInput(event) {
    var target = event.currentTarget,
      targetVal = target.value,
      charCode = String.fromCharCode(event.which),
      charCodeLen = (targetVal.replace(/\D/g, "") + charCode).length,
      card = this.cardFromNumber(targetVal + charCode),
      maxLength = 16;

      if (this.state.cardNumber.length >= 2)
        this.setState({cardType: card.type});

      if (card && (maxLength = card.length), !/^\d+$/.test(charCode) || charCodeLen > maxLength) {
        return void event.preventDefault();
      }

      var cardTest = card && "amex" === card.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/;

      return cardTest.test(targetVal) && target.selectionStart === targetVal.length ?
        (event.preventDefault(), void(target.value = targetVal + " " + charCode)) : void 0;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          autoComplete="off"
          onChange={(e)=> this.setCardNumber(e)}
          onKeyPress={(e)=> this.handleCCNumberInput(e)}
          placeholder="• • • •   • • • •   • • • •   • • • •" />

        {this.state.cardNumber &&
          <p>{this.state.cardType}</p>
        }
      </div>
    );
  }
}

export default CreditCard;