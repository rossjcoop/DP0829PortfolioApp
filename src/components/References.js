import React, { Component } from 'react';
import '../styles/app.css';


class References extends Component {

  constructor(props) {
    super(props);

    this.state = {
    	fname: "",
    	lname: "",
        comment: "",
        comments: [{comment: "This place is awesome. Brought my kids and we made our own plates! Definitely fun for the whole family!", author: "Janice Dean"}, {comment: "The staff is very helpful and more importantly, PATIENT!. I lost control on the spinning wheel and it went all over the place! But in the end, I was able to make something cool and learn something new!", author: "Bill Lumburg"}, {comment: "My wife and I attended the Saturday morning Intro to Pottery class and had a lot of fun. Granted, our cups didn't turn out too well, but we will back and with practice, we'll make some neat stuff!", author: "Jim Shaddock"}],
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }



    ///////////better way! only one for whole form!!!
  handleChange(event){
  	this.setState({
  		[event.target.name]: event.target.value
  	})
  }

  handleFormSubmit(event){
   event.preventDefault()
    const newComment = {
      comment: this.state.comment,
      author: this.state.fname + " " + this.state.lname
    }
    console.log("NewComment", newComment)
    const comments = this.state.comments;
    comments.push(newComment)
    
    this.setState({
      comments: comments,
      comment: "",
      fname: "",
      lname: "",
    })
    console.log("Comments", comments)
  }

  componentWillMount() {
  	window.scrollTo(0, 0)
  }


  render() {

    return (
      <div className="compNews">
      	<div className="main_title">
          <h1>Bent Creek's Admirers</h1>
        </div> 
        <div className="newsContainer">
          <div className="commentSection">
          		<div className="commentCard">
          		{this.state.comments.reverse().map( (comment) => {
                	return <div className="aComment">
		                	<p>{comment.author} wrote:</p>
		                    <p>{comment.comment}</p>
		                </div>
                })}
                </div>
          </div>         
          <div className="signupform">
	          <form className="newsForm" onSubmit={this.handleFormSubmit}>
	            <h1>Leave a Reference! Tell your Friends!</h1>
	            <br />
	            <label htmlFor="fname">First Name</label>
	            <input type="text" name="fname" id="nameInput" value={this.state.fname} onChange={this.handleChange} />
	            <br />
	            <br />
	            <label htmlFor="lname">Last Name</label>
	            <input type="text" name="lname" id="nameInput" value={this.state.lname} onChange={this.handleChange} />
	            <br />
	            <br />
	            <label htmlFor="comments">Comments</label>
	            <textarea name="comment" id="nameInput" value={this.state.comment} onChange={this.handleChange} />
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


export default References