'use strict';

import React, { Component, PropTypes } from 'react';

const style{
  position: 'absolute',
  top: 0,
  left: 0,
  border: 0
};

export default class ForkMeOnGithub extends Component {
  static PropTypes = {
    user: PropTypes.string.IsRequired,
    repo: PropTypes.string.IsRequired
  }

  render() {
    return (
      <a href={'//github.com/' + this.props.user + '/' + this.props.repo} target="_blank">
        <img style={style} src="https://camo.githubusercontent.com/121cd7cbdc3e4855075ea8b558508b91ac463ac2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" /> 
      </a>
    )
  }
}
