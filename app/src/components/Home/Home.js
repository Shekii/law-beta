import React, { Component } from 'react';
import {  Button, Jumbotron } from 'react-bootstrap';

import '../../css/main.css';

class Home extends Component {
  render() {
    return (
        <div>

          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                  {/* <img src="/logo.svg" height="150px"/> */}
                  <h1 className="font-weight-light display-1"><strong>PrecTablisher</strong></h1>
                  <p className="lead">The Digital Legal Aid</p>
                  <Button bsstyle="primary" href="/manage">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <section className="py-5">
            <div className="container">
              <h2 className="font-weight-dark"><strong>About</strong></h2>
              <p>                Using IBM Watson's various AI technologies, this prototype web application facilites
                the ability for legal researchers and associate solicitors to upload new legal cases with which 
                similarities found with the newly uploaded case and older cases will be found. Cases with a high
                similarity reading (relevance) may be for user consideration. Therefore, simulating
                the establshment of legal precedent, which reduces the bureaucratic overhead that legal professionals face.</p>
            </div>
          </section>
        </div>
    )
  }
}

export default Home;
