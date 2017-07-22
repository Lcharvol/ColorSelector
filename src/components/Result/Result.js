import React, { Component, PropTypes } from 'react';

import './Result.css';

class Result extends Component {

  render () {
    const { r, g, b } = this.props;

    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }
    return (
      <div className="resultContainer" style={divStyle}/>
    );
  }
}

export default Result;
