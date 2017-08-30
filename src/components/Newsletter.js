import React, { Component } from 'react';
import '../styles/app.css';


class Newsletter extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      email: "", 
    };

    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleNameInput(event){
      this.setState({
      name: event.target.value
      })
    }

  handleEmailInput(event){
      this.setState({
      email: event.target.value
      })
    }

  handleFormSubmit(event){
    event.preventDefault()

      let nameField = this.state.name
      let emailField = this.state.email

    if(nameField && emailField !== undefined){
      alert('Thanks for signing up, ' + this.state.name + '. Newsletters will be sent to ' + this.state.email);

        this.setState({
          name: "",
          email: ""
        })
    } else {
        alert('We would love for you to sign up, please provide both your name and email address.');
    }
  }
    

  render() {

    return (
      <div className="compNews"> 
        <section>
        <div className="newsContainer">        
          <div className="signupform">
          <form className="newsForm" onSubmit={this.handleFormSubmit}>
            <h1>Sign Up for Our Weekly Newsletter!</h1>
            <h2>Stay up to date with events, activities, news and specials.</h2>
            <br />
            <label for="name">Name</label>
            <input type="text" name="name" id="nameInput" value={this.state.name} onChange={this.handleNameInput} />
            <br />
            <br />
            <label for="email">Email</label>
            <input type="email" name="email" id="emailInput" value={this.state.email} onChange={this.handleEmailInput} />
            <br />
            <br />
            <button type="submit" id="signupButton">Submit</button>  
          </form>
          </div>    
        </div>
        </section>
      </div>
    );
  }
}


export default Newsletter
