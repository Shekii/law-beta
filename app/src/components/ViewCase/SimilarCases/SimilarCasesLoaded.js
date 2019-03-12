import React, {Component} from 'react';

import * as constants from '../../../static/constants.js';

import SimilarCasesRow from './SimilarCasesRow';

import { Table } from 'react-bootstrap';

class SimilarCasesLoaded extends Component {

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

        this.props.similerCases.forEach(function (it) {
            if (it.score > 0) {
                //if not most relevant, i.e itself
                tempCollection.push(<SimilarCasesRow
                    key={it.id}
                    id={it.id}
                    caseName={it.caseName}
                    score={it.score}
                    confidence=
                        {(Math.round(it.confidence *100)).toFixed(2) + "%"}
                />);
            }
        });
        this.setState({ similerCases: tempCollection });

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
                            <th id="Similarity">Relevance</th>
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

export default SimilarCasesLoaded;
