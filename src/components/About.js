import React, { Component } from 'react';
import '../styles/app.css';

    let picSizing = {
      "height": "150px",
      "width": "175px"
    }




export default class About extends Component {
  componentWillMount() {
  	window.scrollTo(0, 0)
  }
  render() {

    return (
      <div className="compBody">
        <div className="main_title">
          <h1>A Community of Artists</h1>
        </div>
		  <section>
		    <div className="intro">
		      <img className="thumbnail1" src="/images/birdhouse.jpg" alt="birdhouse" style={picSizing}/>
		      <p>Our studio, established in 1989, has been providing local artists with a <a className="ded" href="#jump">dedicated environment</a> for creativity for 20+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		      <br />
		      <br />
		      <div className="intro_aside">
		      <p>"Our mission is to provide people with beautiful, functional items which enhance lives."<br /> -Jenn Wilson (Founder)</p>
		      </div> 
		    </div>
		  </section>
		  <section> 	
		    <div className="history">
		      <h2>History</h2>
		      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
		    </div>
		    <div className="centerbar">
		    <a id="jump"></a>
		    <h2><span>Room to Grow</span></h2>
		    </div>
		  </section>
		  <section>
		    <div className="facilities">
		        <div className="sidebar">
		          <img className="sidebarpic" src="/images/background-1.jpg" alt="Pottery" style={picSizing}/><p>Every member has access to shelf space and all of the studio's shared equipment.</p>
		        </div>
		      <h2>Facilities</h2>
		      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>   
		    </div>
		  </section>
		  <section>
		    <div className="monthly_plans">
		      <h2>Monthly Plans</h2>
		      <table>
		      	<tbody>
			      	<tr>
			      		<th>Plan</th>
			      		<th>Price</th>
			      		<th>Access</th>
			      	</tr>
			      	<tr>
			      		<td>Desk Only</td>
			      		<td>$50/mo.</td>
			      		<td>Business Hours + Weekly Kiln Access</td>
			      	</tr>
			      	<tr>
			      		<td>Desk + Storage</td>
			      		<td>$100/mo.</td>
			      		<td>Business Hours + Weekly Kiln Access</td>
			      	</tr>
			      	<tr>
			      		<td>Unlimited</td>
			      		<td>$150/mo.</td>
			      		<td>Unlimited Access</td>
			      	</tr>
			    </tbody>
		      </table>
		    </div>
		    </section>
      </div>
    );
  }
}
