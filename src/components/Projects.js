import React, { Component } from 'react';

class Projects extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <a
          className='edit-main-button'
          href='https://syndeseed.herokuapp.com/'
        >
          <span id="fademain">SyndeSeed</span>
        </a>
        <br />
        <a
          className='edit-main-button'
          href='https://dirty-beaches.herokuapp.com/'
        >
          <span id="fademain">Dirty Beaches</span>
        </a>
        <br />
        <a
          className='edit-main-button'
          href='https://github.com/aydoak/Battleship.git'
        >
          <span id="fademain">Battleship</span>
        </a>
        <p>________</p>
      </div>
    );
  }
}

export default Projects;
