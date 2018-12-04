import React, { Component } from 'react';
import '../CSS/home.css';
import logo from '../pics/adam_logo.png';

class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <img src={logo} alt='logo' className="logo"/>
        <p className='name'>Adam Doak</p>
        <div className='homeline'>
          {this.props.test}
        </div>
      </div>
    );
  }
}

export default Home;
