import React, {Component} from 'react';

import * as constants from '../../static/constants.js';

import CasesLoaded from './ManageCasesLoaded';

import DotLoader from '../Dot_Loader';

class ManageCases extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            dataCollection:[],
            isLoaded: false,
        };
    }
    async componentDidMount() {
        //WatsonDiscovery
        const tempCollection = [];

        //Watson Discovery
        await fetch(constants.API + '/cases_discovery')
            .then(res => res.json())
            .then(item => {
                 item.data.forEach(it => {
                    tempCollection.push(it);
                })
                this.setState({ dataCollection: tempCollection });
            })
            .catch((error) => {
                console.error(error);
            });

            if (this.state.dataCollection != null) {
                this.setState({isLoaded: true});
            }
    }

  render() {
      const isLoaded = this.state.isLoaded;
      let viewCases = <DotLoader loading={true}/>

      if (isLoaded === true) {
        viewCases = 
            <CasesLoaded dataCollection={this.state.dataCollection}/>
      }
    return (
        <div>
            <div className="container pageBody">
                
                {viewCases}

            </div>
        </div>
    )
  }
}

export default ManageCases;
