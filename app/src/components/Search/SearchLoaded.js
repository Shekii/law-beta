import React from 'react';

import { Table } from 'react-bootstrap';

//import '../css/main.css';

const SearchLoaded = (props) => {
    console.log(props.results);

    return (
        <div>
        <div className="container-fluid">
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
                     {props.results}
                </tbody>
            </Table>
        </div>
    </div>
    );
}

export default SearchLoaded

