import React, { Component } from 'react';
import {  Button, Jumbotron } from 'react-bootstrap';

import '../../css/main.css';

class Statistics extends Component {
  render() {
    return (
        <div>
            <div className="container pageBody" id="statistics">
                <div className="row mb-2">
                    <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Featured post</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Post title</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Featured post</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Post title</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


    </div>
    )
  }
}

export default Statistics;
