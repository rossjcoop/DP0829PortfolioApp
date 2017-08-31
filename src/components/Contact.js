import React, { Component } from 'react';
import '../styles/app.css';


class Contact extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      email: "",
      comment: "", 
    };

    this.handleFNameInput = this.handleFNameInput.bind(this)
    this.handleLNameInput = this.handleLNameInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleCommentInput = this.handleCommentInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFNameInput(event){
      this.setState({
      fname: event.target.value
      })
    }

  handleLNameInput(event){
      this.setState({
      lname: event.target.value
      })
    }

  handleEmailInput(event){
      this.setState({
      email: event.target.value
      })
    }

  handleCommentInput(event){
      this.setState({
      comment: event.target.value
      })
    }

  handleFormSubmit(event){
    event.preventDefault()

      let fnameField = this.state.fname
      let lnameField = this.state.lname
      let emailField = this.state.email

    if(fnameField || lnameField || emailField !== undefined){
      alert('Thanks for signing up, ' + this.state.fname + '! Your email, ' + this.state.email + 'has been added and hope to see you soon!');

        this.setState({
          fname: "",
          lname: "",
          email: "",
          comment: "",
        })

    } else {
        alert('We would love for you to sign up, please provide both your full name and email address.');
    }

    this.props.history.push("/")
  }
    

  render() {

    return (
      <div className="compNews"> 
        <div className="main_title">
          <h1>Contact Us!</h1>
        </div>
        <div className="newsContainer">        
          <div className="signupform">
            <div className="socialMedia">
              <a href="http://www.facebook.com"><img src="/images/Facebook-Icon.png" alt="Facebook Icon"/></a>
              <a href="http://www.linkedin.com"><img src="/images/LinkedIn-Icon.png" alt="LinkedIn Icon"/></a>
              <a href="http://www.twitter.com"><img src="/images/Twitter-Icon.png" alt="Twitter Icon"/></a> 
            </div>
            <div className="address">
            <h2>Bent Creek Ceramics
              <br />
                 1054 Buttercave Rd
              <br />   
                 Las Vegas, NV 89105
              <br />
                 (702) 592-0292
              </h2>
              <br />
              </div>
            <form className="newsForm" onSubmit={this.handleFormSubmit}>
              <h2>Email us about upcoming classes and events.</h2>              
              <label for="fname">First Name </label>
              <input type="text" name="fname" id="nameInput" value={this.state.fname} onChange={this.handleFNameInput} />
              <br />
              <br />
              <label for="lname">Last Name </label>
              <input type="text" name="lname" id="nameInput" value={this.state.lname} onChange={this.handleLNameInput} />
              <br />
              <br />
              <label for="email">Email </label>
              <input type="email" name="email" id="emailInput" value={this.state.email} onChange={this.handleEmailInput} />
              <br />
              <br />
              <label for="comments">What are you interested in? (optional)</label>
              <textarea className="comments" name="comments" id="nameInput" value={this.state.comment} onChange={this.handleCommentInput} />
              <br />
              <br />
              <input type="checkbox" name="agree" />
              <label>Click here to receive our weekly newsletter!</label>
              <br />
              <br />
              <button type="submit" id="signupButton">Submit</button>  
            </form>
          </div>    
        </div>
      </div>
    );
  }
}


export default Contact