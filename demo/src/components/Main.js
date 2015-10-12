import React, { Component } from 'react';
import { CreditCard } from 'react-creditcard-input';

import styles from 'styles/demo';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>React Credit Card Input Demo</h1>

        <CreditCard />
      </div>
    );
  }
}
