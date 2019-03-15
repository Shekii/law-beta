import React, {Component} from 'react';

import SimilarCasesRow from './SimilarCasesRow';

import { Table } from 'react-bootstrap';

import CanvasJSReact from '../../../assets/canvasjs/canvasjs.react';

import BarChart from 'react-bar-chart';

class SimilarCasesLoaded extends Component {

    //SimilarCases

    constructor(props) {
        super(props);

        this.state = {
            similerCases: []
        }

        this.onClick = this.onClick.bind(this);
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

    onClick(e){ 
            window.open(e.dataPoint.link,'_blank');  
    };

  render() {
        let data = this.state.similerCases;

        const CanvasJS = CanvasJSReact.CanvasJS;
        const CanvasJSChart = CanvasJSReact.CanvasJSChart;

		var dataPoint;
		var total;
            
		const options = {
			title: {
            },
            dataPointWidth: 20,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                cursor:"pointer",
                click: this.onClick,     
				dataPoints: [

				]
			}
			]
        }
        
        this.props.similerCases.forEach(function(it, index) {
            let url = it.id;
            options.data[0].dataPoints[index] = {
                y: it.confidence, label: it.caseName, link: url
            }
        })

    return (
        <div>
            <div className="container-fluid" style={{ marginTop: '25px' }}>
 
                <h4>Similar Cases</h4>
				<CanvasJSChart options = {options}
					 onRef={ref => this.chart = ref}
				/>  

            </div>
    </div>
    );
  }

}

export default SimilarCasesLoaded;
