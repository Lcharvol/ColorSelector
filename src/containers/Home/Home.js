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
        <ColorSelector/>
        <ColorSelector/>
        <ColorSelector/>
      </div>
    );
  }
}

export default Home;
