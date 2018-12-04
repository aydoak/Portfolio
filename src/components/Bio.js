import React, { Component } from 'react';
import '../CSS/bio.css';
import img from '../pics/AdamFace.png';


class Bio extends Component {
  render() {
    return (
      <div id="Bio">

        {/*<h2>Bio</h2>*/}
        <img src={img} alt="bio pic" className="bio-pic"/>
        <p>"I'm a web developer, entrepreneur, diver, and musician. Originally from Ohio, I am now loving  life in Miami, FL."</p>
        <p>________</p>
      </div>
    );
  }
}

export default Bio;
