import React, { Component, PropTypes} from 'react';

import './MainColor.css';

class MainColor extends Component {

  render () {
    const { r, g, b } = this.props;

    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
      <div className="mainColor" style={divStyle}>
        <div className="sphereEffect2"/>
      </div>
    );
  };
}

export default MainColor;
