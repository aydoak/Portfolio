import React, { Component } from 'react';

class Projects extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <a href='https://syndeseed.herokuapp.com/'>SyndeSeed</a>
        <br />
        <a href='https://dirty-beaches.herokuapp.com/'>Dirty Beaches</a>
      </div>
    );
  }
}

export default Projects;
