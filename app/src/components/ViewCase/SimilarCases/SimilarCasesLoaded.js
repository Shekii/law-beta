import React, {Component} from 'react';

import SimilarCasesRow from './SimilarCasesRow';

import { Table } from 'react-bootstrap';

import CanvasJSReact from '../../../assets/canvasjs/canvasjs.react';

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
                    number={it.confidence}
                    confidence=
                        {(Math.round(it.confidence *100)).toFixed(2) + "%"}
                />);
            }
        });
        this.setState({ similerCases: tempCollection });
    }

  render() {
        let data = this.state.similerCases;
        const CanvasJS = CanvasJSReact.CanvasJS;
        const CanvasJSChart = CanvasJSReact.CanvasJSChart;

		var dataPoint;
		var total;
		let options = {
			animationEnabled: true,
			title:{
				text: ""
			},
			data: [{
				type: "funnel",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				indexLabelPlacement: "inside",
				indexLabel: "{label}({percentage}%)",
				dataPoints: []
            }]
        }
            
        this.props.similerCases.forEach(function(it, index) {
            options.data[0].dataPoints[index] = {
                y: it.confidence, label: it.caseName
            }
        })

		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(var i = 0; i < dataPoint.length; i++) {
            options.data[0].dataPoints[i].percentage = (Math.round(dataPoint[i].y *100)).toFixed(2);
		}

    return (
        <div>
            <div className="container">

				<CanvasJSChart options = {options}
					 onRef={ref => this.chart = ref}
				/>
                
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
