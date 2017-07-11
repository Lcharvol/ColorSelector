import React, { Component } from 'react';

import './colorDivider.css';

class ColorDivider extends Component {

  state = {
    red: -1,
    green: -1,
    blue: -1,
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

  componentWillMount = () => {
    const { red, green, blue} = this.props.color;
    const { position } = this.props;

    if (position === "top")
      this.setState({red: red});
    if (position === "right")
      this.setState({blue: blue});
    if (position === "left")
      this.setState({green: green});
  }

  render () {
    const { position } = this.props;
    const { red, green, blue} = this.props.color;

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
        marginTop: "-25px",
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
        onClick={() => this.handleChangeStyle(position)}
      >
      </div>
    );
  };
}

export default ColorDivider;
