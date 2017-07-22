import React, { Component } from 'react';

import './Home.css';

import ColorSelector from '../../components/colorSelector';
import Background from '../../components/Background';
import Header from '../../components/Header';
import MainColor from '../../components/MainColor';

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

    return (
      <div className="homepage">
        <Header
          color={this.state}
        />
        <Background />
        <div className="selectorContainer" >
          <ColorSelector
            upgradeColor={this.upgradeColor}
            id={1}
          />
          <MainColor />
          <ColorSelector
            upgradeColor={this.upgradeColor}
            id={2}
          />
          <ColorSelector
            upgradeColor={this.upgradeColor}
            id={3}
          />
        </div>
      </div>
    );
  }
}

export default Home;
