import React, {Component} from 'react';

import * as constants from '../../static/constants.js';

import SimilarCasesRow from './SimilarCasesRow';

import { Table } from 'react-bootstrap';

class SimilarCasesTable extends Component {

    //SimilarCases

    constructor(props) {
        super(props);

        this.state = {
            similerCases: []
        }
    }
    async componentDidMount() {
        //WatsonDiscovery
        const tempCollection = [];

        let fetchURL = '/cases_discovery/similarCases/' + this.props.case.id;
        await fetch(constants.API + fetchURL)
            .then(res => res.json())
            .then(item => {
                console.log(item.data);
                
                 item.data.forEach(function (it, index) {
                     if (index > 0) {
                         //if not most relevant, i.e itself
                        tempCollection.push(<SimilarCasesRow
                            key={it.id}
                            id={it.id}
                            caseName={it.caseName}
                            score={Math.round(it.result_metadata.score*100).toFixed(1)+"%"}
                            confidence={Math.round(it.result_metadata.confidence*100).toFixed(1)+"%"}
                        />);
                     }
                 });
                    
                this.setState({ similerCases: tempCollection });

            })
            .catch((error) => {
                console.error(error);
            });

            let data = this.state.similerCases;
    }

  render() {
        let data = this.state.similerCases;
    return (
        <div>
            <div className="container">
                <div className="table-responsive">
                    <Table 
                    className="table=responsive"
                    striped bordered hover>
                    <thead className="thead-light">
                        <tr>
                            <th id="CaseName">Case Name</th>
                            <th id="Similarity">Relevance Score</th>
                            <th id="caseView"></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {data}
                    </tbody>
                </Table>
                </div>
            </div>
    </div>
    );
  }

}

export default SimilarCasesTable;
