import React from 'react';

import { Table } from 'react-bootstrap';

import '../../css/main.css';

const CasesTable = (props) => {
    let dataCollection = props.dataCollection;
    return (
        <div>
        <div className="container-fluid">

                <Table  
                    responsive
                    striped bordered hover
                    id="manageTable">
                        <thead className="thead-light">
                            <tr>
                                <th id="caseName">Name</th>
                                <th id="caseDate">Date</th>
                                <th id="caseEdit"></th>
                                <th id="caseDelete"></th>
                                <th id="caseView"></th>
                            </tr>
                        </thead>
                <tbody>
                    {dataCollection}
                </tbody>
            </Table>
        </div>
    </div>
    );
}

export default CasesTable

