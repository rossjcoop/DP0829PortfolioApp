import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.css';




export default class About extends Component {
  render() {

  	let picSizing = {
      "height": "700px",
      "width": "1000px"
    }


    return (
      <div className="compBody">
        <div className="main_title">
          <h1>Bent Creek Ceramics</h1>
          <h2>Where Art Meets Nature.</h2>
        </div>
        <div className="container">
        	<div className="homeImg">
        		<img src ="/images/product-1.jpg" style={picSizing}/>
        	</div>
        	<div className="mainWelcome">
        		<h1>Welcome!</h1>
        		<h3>View Our Portfolio</h3>
        		<Link to="/Portfolio"><button id="signupButton">Go!</button></Link>
        	</div>
        </div>       
      </div>
    );
  }
}
