import React, {Component} from 'react';

import * as constants from '../../../static/constants.js';

import SimilarCasesLoaded from './SimilarCasesLoaded';
import PropaLoader from '../../Propa_Loader';

class SimilarCases extends Component {

    //SimilarCases

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
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

                console.log(item);

                 item.data.forEach(function (it, index) {
                     if (index > 0 && it.result_metadata.score > 0) {
                         //if not most relevant, i.e itself
                        let elem = {
                            id: it.id,
                            caseName: it.caseName,
                            confidence: it.result_metadata.confidence,
                            score: it.result_metadata.score
                        }
                        tempCollection.push(elem);
                     }
                 });
                    
                this.setState({ similerCases: tempCollection });

            })
            .catch((error) => {
                console.error(error);
            });

            if (this.state.similerCases != null){
                this.setState({isLoaded: true});
            }
    }

  render() {
        const isLoaded = this.state.isLoaded;
        let viewCases = <PropaLoader loading={true}/>

        if (isLoaded === true) {
           viewCases = <SimilarCasesLoaded 
                similerCases={this.state.similerCases} />
        }
    return (
        <div>
            <div className="container-fluid">
                {viewCases}
            </div>
    </div>
    );
  }

}

export default SimilarCases;
