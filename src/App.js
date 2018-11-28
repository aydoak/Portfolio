import React, { Component } from 'react';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Bio from './components/Bio.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import FindMe from './components/FindMe.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects:[
        {
          title: "Battleship",
          URL: ""
        },
        {
          title: "Dirty Beaches",
          URL: "dirty-beaches.herokuapp.com"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {/*<NavBar />*/}
        <Home test="________"/>
        <Bio />
        <Skills />
        <Projects projects = {this.state.projects}/>
        <FindMe />
      </div>
    );
  }
}

export default App;
