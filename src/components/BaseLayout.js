import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/app.css';

export default class BaseLayout extends Component {
  render(){

  	let linkStyling = {
      "padding": "10px",
      "textTransform": "Uppercase",
      "textDecoration": "none",
      "textAlign": "center",
    }

    return (
      <div className="compHeader">
      	<div className="navbar">
      		<Link to="/Home" className="logo"></Link>
	    	<nav className="mainnav">
        		<Link to="/" className="link" style={linkStyling}>Home</Link>
        		<Link to="/About" className="link" style={linkStyling}>About</Link>
        		<Link to="/Portfolio" className="link" style={linkStyling}>Portfolio</Link>
        		<Link to="/Newsletter" className="link" style={linkStyling}>Newsletter</Link>
      		</nav> 
    	</div>

        {this.props.children}

		<footer>
            <div className="mainfooter">
            	<p>Copyright 2017, Bent Creek Ceramics</p>
            </div>
        </footer>
      </div>
    );
  }
}
