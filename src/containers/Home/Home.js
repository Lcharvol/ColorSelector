import React, { Component } from 'react';

import './Home.css';

import ColorSelector from '../../components/colorSelector';
import Background from '../../components/Background';
import Header from '../../components/Header';

class Home extends Component {

  state = {
    r: 243,
    g: 243,
    b: 243,
  };

  upgradeColor = (color, value) => {

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
          />
          <ColorSelector
            upgradeColor={this.upgradeColor}
          />
          <ColorSelector
            upgradeColor={this.upgradeColor}
          />
        </div>
      </div>
    );
  }
}

export default Home;
