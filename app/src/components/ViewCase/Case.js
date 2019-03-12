import React, {Component} from 'react';

// import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import * as constants from '../../static/constants.js'; 

import CaseConceptsRow from './CaseConceptsRow';

import CaseCategoryRow from './CaseCategoryRow';

import CaseEmotionsRow from './CaseEmotionsRow';


import CaseLoaded from './CaseLoaded';
import ErrorMessage from '../ErrorMessage';

import DotLoader from '../Dot_Loader';

import '../../css/main.css';

class Case extends Component {

    constructor(props) {
        super(props);

        this.state = {
             dataCollection:[],
             isLoaded: false,
             errorMessage: '',
             concepts:[],
             categories:[],
             emotions:[]
        }
    }
    async componentDidMount() {
        //WatsonDiscovery
        const tempCollection = [];

        let fetchURL = '/cases_discovery/case/' + this.props.match.params.id;
        await fetch(constants.API + fetchURL)
            .then(res => res.json())
            .then(item => {
                console.log(item);
                if (item.error) {
                    this.setState ({ errorMessage: item.error});
                } else {
                    tempCollection.push(item);
                    this.setState({ 
                        dataCollection: tempCollection[0].data[0]
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
            
            if (this.state.errorMessage === '') {
                
                this.setState({isLoaded: true});

                let data = this.state.dataCollection;

                if (data.length !== 0) {
                    
                    let caseConcepts = [];

                    if (typeof (data.enriched_text.concepts) !== undefined) {
                        data.enriched_text.concepts.forEach(it => {
                            caseConcepts.push(<CaseConceptsRow
                                key={Math.random()}
                                title={it.text}
                                relevance={Math.round(it.relevance * 100)} 

                            />);
                        });
                    }
                    
                    let caseCategories = [];

                    if (typeof (data.enriched_text.categories) !== undefined) {
                        data.enriched_text.categories.forEach(it => {
                            caseCategories.push(<CaseCategoryRow
                                key={Math.random()}
                                label={it.label}
                                score={Math.round(it.score * 100)}

                            />);
                        });
                    }

                    let caseEmotions = [];

                    if (typeof (data.enriched_text.emotions) !== undefined) {
                        caseEmotions.push(<CaseEmotionsRow
                                key={Math.random()}
                                disgust={Math.round(data.enriched_text.emotion.document.emotion.disgust*100)}
                                joy={Math.round(data.enriched_text.emotion.document.emotion.joy*100)}
                                anger={Math.round(data.enriched_text.emotion.document.emotion.anger*100)}
                                fear={Math.round(data.enriched_text.emotion.document.emotion.fear*100)}
                                sadness={Math.round(data.enriched_text.emotion.document.emotion.sadness*100)}

                        />);
                    }

                    this.setState ({emotions: caseEmotions});
                    this.setState ( {categories: caseCategories});
                    this.setState ({concepts: caseConcepts});
                }
            }
    }

  render() {
      
    const isLoaded = this.state.isLoaded;
    let viewCase = <DotLoader loading={true}/>

    if (isLoaded === true) {
        viewCase = 
            <CaseLoaded case={this.state.dataCollection}
                    concepts={this.state.concepts}
                    categories={this.state.categories}
                    emotions={this.state.emotions} />
    }

    return (
        <div>
            <div className="container pageBody">
                
                {/* <BreadcrumbsItem to='#'>Case Analysis</BreadcrumbsItem> */}
                
                {this.state.errorMessage.length > 0 &&
                <ErrorMessage 
                    error={this.state.errorMessage}/>
                }

                {viewCase}

            </div>
    </div>
    );
  }

}

export default Case;
