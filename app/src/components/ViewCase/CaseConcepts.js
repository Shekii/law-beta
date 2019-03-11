import React from 'react';

import { Table } from 'react-bootstrap';

import PieChart from 'react-minimal-pie-chart';

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

        <PieChart
        data={[
            {
            title: 'Tort',
            value: 50,
            color: '#E38627'
            },
            {
            title: 'Two',
            value: 15,
            color: '#C13C37'
            },
            {
            title: 'Three',
            value: 20,
            color: '#6A2135'
            }
        ]}
        label
        labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif'
        }}
        style={{height: '500px'}}
        radius={42}
        labelPosition={112}
        />
        </div>
    </div>
    );
}

export default CasesConcepts

