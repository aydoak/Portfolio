import React, { Component } from 'react';

class FindMe extends Component {
  render() {
    return (
      <div className="FindMe">
        <h2>Find Me</h2>
        <a
        className='edit-main-button'
        href='https://www.linkedin.com/in/adam-doak-3a7578106'
        >
          <span id="fademain">LinkedIn</span>
        </a>
        <br />
        <a
        className='edit-main-button'
        href='https://github.com/aydoak'
        >
          <span id="fademain">GitHub</span>
        </a>
      </div>
    );
  }
}

export default FindMe;
