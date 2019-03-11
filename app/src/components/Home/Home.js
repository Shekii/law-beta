import React, { Component } from 'react';
import {  Button, Jumbotron } from 'react-bootstrap';

import '../../css/main.css';

class Home extends Component {
  render() {
    return (
        <div>
    
            <Jumbotron className="pageBodyHome">
              <h1 className="display-3">PrecTablisher</h1> 
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
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <h2>Manage Cases</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                  <p><a className="btn btn-secondary" href="/manage" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                  <h2>Upload New Case</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a className="btn btn-secondary" href="/upload" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                  <h2>Search</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p><a className="btn btn-secondary" href="/search" role="button">View details &raquo;</a></p>
                </div>
              </div>
            </div>
  
        </div>
    )
  }
}

export default Home;
