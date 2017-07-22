import React, { Component } from 'react';

import './Home.css';

import ColorSelector from '../../components/colorSelector';
import Header from '../../components/Header';
import MainColor from '../../components/MainColor';
import Result from '../../components/Result';

class Home extends Component {

  state = {
    r: 243,
    g: 243,
    b: 243,
  };

  upgradeColor = (id, r, g, b) => {
    if (id === 1) {
      this.setState({ r });
    } else if (id === 2) {
      this.setState({ g });
    } else {
      this.setState({ b });
    }
  }

  render() {
    const { r, g, b } = this.state;
    return (
      <div className="homepage">
        <Header
          color={this.state}
        />
        <div className="selectorContainer" >
          <ColorSelector
            upgradeColor={this.upgradeColor}
            id={1}
          />
          <ColorSelector
            upgradeColor={this.upgradeColor}
            id={2}
          />
          <MainColor
            r={r}
            g={g}
            b={b}
          />
          <ColorSelector
            upgradeColor={this.upgradeColor}
            id={3}
          />
        </div>
        <Result />
      </div>
    );
  }
}

export default Home;
