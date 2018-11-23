import React, { Component } from 'react';
import '../CSS/bio.css';
import img from '../pics/AdamFace.png';

class Bio extends Component {
  render() {
    return (
      <div id="Bio">
        <h2>Bio</h2>
        <p>"I'm a web developer, originally from Ohio, now living in Miami, FL."</p>
        <img src={img} alt="bio pic" className="bio-pic"/>
      </div>
    );
  }
}

export default Bio;
