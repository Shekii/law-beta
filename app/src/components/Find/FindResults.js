import React from 'react';

import { Table } from 'react-bootstrap';

import '../../css/main.css';

const FindResults = (props) => {

    return (
        <div>
        <div className="container">

            <h2>Cases referencing {props.type} <small>"{props.text}"</small></h2>
                    <Table 
                        responsive
                        className="table=responsive"
                        striped bordered hover>
                        <thead className="thead-light">
                        <tr>
                            <th id="Concept">Case Name</th>
                            <th id="Relevance">Relevance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cases}
                    </tbody>
                </Table>

            <p>{props.cases.length} cases reference the {props.type} <small>"{props.text}".</small></p>
        </div>
    </div>
    );
}

export default FindResults

