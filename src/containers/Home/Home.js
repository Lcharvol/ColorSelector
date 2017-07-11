import React, { Component } from 'react';

import './Home.css';

import ColorSelector from '../../components/colorSelector'

class Home extends Component {

  state = {
  };

  render() {

    return (
      <div className="homepage">
        <ColorSelector/>
      </div>
    );
  }
}

export default Home;
