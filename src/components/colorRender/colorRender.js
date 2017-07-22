import React, { Component } from 'react';

import './colorRender.css';

class ColorRender extends Component {

  render() {
    const { red, green, blue} = this.props.color;

    let divStyle = {
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }

    return (
      <div className="colorRender" style={divStyle}>
        <div className="rotateButton">
          <i className="fa fa-repeat" aria-hidden="true"></i>
        </div>
        <div className="sphereEffect" />
      </div>
    );
  };
}

export default ColorRender;
