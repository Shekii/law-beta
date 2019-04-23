import React, { Component } from 'react';
import {  Button, Jumbotron } from 'react-bootstrap';

import '../../css/main.css';

class Help extends Component {
  render() {
    return (
        <div>
          <div className="container pageBody">
              <section className="py-5">
                <div className="container">
                  <h2 className="font-weight-dark"><strong>Help</strong></h2>
                  <p>Using IBM Watson's various AI technologies, this prototype web application facilites
                    the ability for legal researchers and associate solicitors to upload new legal cases with which 
                    similarities found with the newly uploaded case and older cases will be found. Cases with a high
                    similarity reading (relevance) may be for user consideration. Therefore, simulating
                    the establshment of legal precedent, which reduces the bureaucratic overhead that legal professionals face.</p>
                </div>
              </section>

          </div>
        </div>
    )
  }
}

export default Help;
