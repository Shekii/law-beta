import React, { Component } from 'react';
import {  Button, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div>
    
            <Jumbotron>
              <h1>PrecTablish</h1> 
              <p>
                Using IBM Watson's various AI technologies, this prototype web application facilites
                the ability for legal researchers and associate solicitors to upload new legal cases with which 
                similarities found with the newly uploaded case and older cases will be found. Cases with a high
                similarity reading (relevance) may be for user consideration. Therefore, simulating
                the establshment of legal precedent, which reduces the bureaucratic overhead that legal professionals face.
              </p>
              <p>
                <Button bsstyle="primary" href="/manage">Upload New Case</Button>
              </p>
            </Jumbotron>
  
        </div>
    )
  }
}

export default Home;
