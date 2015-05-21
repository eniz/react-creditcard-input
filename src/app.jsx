'use strict';

import React, { Component } from 'react';

import App from './components/App';
import ForkMeOnGithub from './components/ForkMeOnGitHub/ForkMeOnGitHub';


class Example extends Component {
  render() {
    return (
      <div>
        <h1>React Credit Card Input Demo</h1>
        <ForkMeOnGithub user="eniz" repo="react-creditcard-input" />
        <App />
      </div>
    );
  }
}

if (typeof document !== 'undefined') {
  React.render(<Example />,document.getElementById('app'));
}
