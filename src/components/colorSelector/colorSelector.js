import React, { Component } from 'react';

import './colorSelector.css';

import ColorRender from '../colorRender/colorRender';
import ColorDivider from '../colorDivider/colorDivider';

class ColorSelector extends Component {

  state = {
    color: {
      red: 25,
      green: 25,
      blue: 25,
    },
  }

  handleChangeColor = (red, green, blue) => {
    if (red >= 0) {this.setState({color:{red: red, green: this.state.color.green, blue: this.state.color.blue}})};
    if (green >= 0) {this.setState({color:{red: this.state.color.red, green: green, blue: this.state.color.blue}})};
    if (blue >= 0) {this.setState({color:{red: this.state.color.red, green: this.state.color.green, blue: blue}})};
  }

  handleSendColor = () => {
    const { red, green, blue} = this.state.color;
    const { upgradeColor, id } = this.props;
    upgradeColor(id, red, green, blue)
  }

  render () {
    const { red, green, blue} = this.state.color;
    const { upgradeColor, id} = this.props;

    window.addEventListener("mousemove", this.handleSendColor);
    window.addEventListener("load", this.handleSendColor);
    return (
      <div className="colorSelector">
        <ColorDivider
          position="top"
          handleChangeColor = {this.handleChangeColor}
          color={this.state.color}
        />
        <ColorRender
          color={this.state.color}
        />
        <ColorDivider
          position="right"
          handleChangeColor = {this.handleChangeColor}
          color={this.state.color}
        />
        <ColorDivider
          position="left"
          handleChangeColor = {this.handleChangeColor}
          color={this.state.color}
        />
      </div>
    );
  };
}

export default ColorSelector;
