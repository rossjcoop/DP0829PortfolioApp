import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.css';




export default class About extends Component {
  
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div className="compBody">
        <div className="main_title">
          <h1>Bent Creek Ceramics</h1>
          <h2>Where Art Meets Nature.</h2>
        </div>
        <div className="container">
        	<div className="mainWelcome">
        		<h1>Welcome!</h1>
            <div className="spanTint">
            <span>We are a pottery studio in the heart of the Downtown Las Vegas Arts District providing a space to grow your passion of pottery.</span>
            </div>
            <br />
            <Link to="/About"><button id="signupButton">Learn more!</button></Link>
        	</div>
        </div>       
      </div>
    );
  }
}
