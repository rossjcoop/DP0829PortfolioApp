import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/app.css';

export default class BaseLayout extends Component {
  render(){

    let activeLinkStyle = {
      "color": "#999966",
      "textDecoration": "underline",
    }

    return (
      <div className="compHeader">
      	<div className="navbar">
      		<NavLink to="/" className="logo"></NavLink>
	    	<nav className="mainnav">
        	<NavLink activeStyle={activeLinkStyle} exact to="/" className="link">Home</NavLink>
        	<NavLink activeStyle={activeLinkStyle} to="/About" className="link" className="link">About</NavLink>
        	<NavLink activeStyle={activeLinkStyle} to="/Portfolio" className="link">Portfolio</NavLink>
          <NavLink activeStyle={activeLinkStyle} to="/References" className="link">References</NavLink>
        	<NavLink activeStyle={activeLinkStyle} to="/Contact" className="link">Contact</NavLink>
      	</nav> 
    	</div>

        {this.props.children}

		<footer>
            <div className="mainfooter">
              <div className="copyright">
                <p>©2017, Bent Creek Ceramics</p>
              </div>
              <br />
              <div className="footLinks">
                <a href="http://www.facebook.com"><img src="/images/Facebook-Icon.png" alt="Facebook Icon"/></a>
                <a href="http://www.linkedin.com"><img src="/images/LinkedIn-Icon.png" alt="LinkedIn Icon"/></a>
                <a href="http://www.twitter.com"><img src="/images/Twitter-Icon.png" alt="Twitter Icon"/></a>     
              </div>      	
            </div>
        </footer>
      </div>
    );
  }
}
