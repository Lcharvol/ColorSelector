import React, { Component } from 'react';

import './Home.css';

import ColorSelector from '../../components/colorSelector';
import Background from '../../components/Background';

class Home extends Component {

  state = {
  };

  render() {

    return (
      <div className="homepage">
        <Background />
        <div className="selectorContainer" >
          <ColorSelector/>
          <ColorSelector/>
          <ColorSelector/>
        </div>
      </div>
    );
  }
}

export default Home;
