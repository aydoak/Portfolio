import React, { Component } from 'react';
import Home from './Home'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
          <a href="./Home">Home</a><span> </span>
          <a href="./Bio">Bio</a><span> </span>
          <a href="./Skills">Skills</a><span> </span>
          <a href="./Projects">Projects</a><span> </span>
          <a href="./FindMe">Find Me</a>
      </div>
    );
  }
}

export default NavBar;
