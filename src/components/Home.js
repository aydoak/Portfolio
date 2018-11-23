import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <h1>Adam Doak</h1>
        {this.props.test}
      </div>
    );
  }
}

export default Home;
