import React from 'react';

import { Table } from 'react-bootstrap';

//import '../css/main.css';

const CasesConcepts = (props) => {
    let data = props.concepts;

    return (
        <div>
        <div className="container">
                    <Table 
                    responsive
                    className="table=responsive"
                    striped bordered hover>
                    <thead className="thead-light">
                    <tr>
                        <th id="Concept">Concept Found</th>
                        <th id="Relevance">Relevance</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </Table>
        </div>
    </div>
    );
}

export default CasesConcepts

