import React, { Component } from 'react';

import './colorDivider.css';

class ColorDivider extends Component {

  state = {
    red: -1,
    green: -1,
    blue: -1,
    pressed: false,
    startPressX: 0,
    startPressY: 0,
  }

  handleChangeStyle = (position) => {
    const { handleChangeColor } = this.props;

    if (position === "top")
      this.setState({red: this.state.red + 10})
    if (position === "right")
      this.setState({blue: this.state.blue + 10})
    if (position === "left")
      this.setState({green: this.state.green + 10})
    handleChangeColor(this.state.red, this.state.green, this.state.blue);
  }

  drag = (e) => {
    const { position } = this.props;
    const { startPressX } = this.state;

    if (this.state.pressed === true) {
      if (position === "top")
        this.setState({ red: (e.screenX - startPressX)})
      if (position === "right")
        this.setState({ blue: (e.screenX - startPressX )})
      if (position === "left")
        this.setState({ green: (e.screenX  - startPressX)})
      this.handleChangeStyle(position);
    }
  }

  componentWillMount = () => {
    const { red, green, blue} = this.props.color;
    const { position } = this.props;

    if (position === "top")
      this.setState({red: red});
    if (position === "right")
      this.setState({blue: blue});
    if (position === "left")
      this.setState({green: green});
    window.addEventListener("mouseup", () => {this.setState({ pressed: false})});
    window.addEventListener("mousemove", (e) => this.drag(e));
  }

  handleChangePress = (e) => {
    this.setState({ pressed: true, startPressY: e.clientY, startPressX: e.clientX});
  }

  render () {
    const { position} = this.props;
    const { red, green, blue} = this.props.color;
    const { pressed } = this.state;

    let divStyle = {
      positon: "relative",
      width: "50px",
      height: "50px",
      borderRadius: "200px",
      cursor: "pointer",
    }
    if (position === "top") {
      divStyle = {
        margin: "auto",
        marginTop: "-35px",
        backgroundColor: `rgb(${red}, 0, 0)`,
        ...divStyle,

      }
    }

    if (position === "left") {
      divStyle = {
        backgroundColor: `rgb(0, ${green}, 0)`,
        ...divStyle,
      }
    }

    if (position === "right") {
      divStyle = {
        right: 0,
        backgroundColor: `rgb(0, 0, ${blue})`,
        ...divStyle,
        position: "absolute",
      }
    }
    return (
      <div
        className="colorDivider"
        style={divStyle}
        onMouseDown={(e) => this.handleChangePress(e)}
      >
      </div>
    );
  };
}

export default ColorDivider;
