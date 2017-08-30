import React, { Component } from 'react';
import '../styles/app.css';


export default class Portfolio extends Component {
  render() {
   

    return (
      <div className="compBody">
        <div className="main_title">
          <h1>Our Portfolio</h1>
          <h2>Bent Creek Ceramics</h2>
        </div>  
        <section>
          <div className="container">
            <div className="mainpic1">
            <h2 className="mainpic1cap">Endless Possibilities</h2>
            </div>
            <div className="mainpic2">
            <h2 className="mainpic2cap">Sets</h2>
            </div>
            <div className="mainpic3">
            <h2 className="mainpic3cap">Textures</h2>
            </div>
            <div className="mainpic4">
            <h2 className="mainpic4cap">Tea Time</h2>
            </div>
            <div className="mainpic5">
            <h2 className="mainpic5cap">Jars and Containers</h2>
            </div>
            <div className="mainpic6">
            <h2 className="mainpic6cap">Wasabi and Saki</h2>
            </div>
            <div className="mainpic7">
            <h2 className="mainpic7cap">Sippin' on Sunshine</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
