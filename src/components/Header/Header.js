import React, { Component, PropTypes } from 'react';

import './Header.css';

class Header extends Component {

  state = {
  }

  render () {
    const { color } = this.props;

    const textStyle = {
      color: `rgb(${color.r},${color.g},${color.b})`,
    }

    const divStyle = {
      backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
    }

    return (
      <div className="header" style={textStyle}>
        <div className="barre" style={divStyle} />
        <h1>ColorSelector</h1>
        <div className="barre" style={divStyle} />
      </div>
    );
  }
}

export default Header;
