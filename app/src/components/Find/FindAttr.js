import React, { Component } from 'react';
//import {  Button, Jumbotron , Form} from 'react-bootstrap';
import * as constants from '../../static/constants.js'; 

import FindResults from './FindResults';
import FindAttrRow from './FindAttrRow';

import '../../css/main.css';

class FindAttr extends Component {

    constructor(props) {
        super(props);

         this.state = { 
            cases: [],
            loading: false,
            type: '',
            text: '',
            errorMessage: ''
         };
    }

    async componentDidMount() {

        this.setState({type: this.props.type});
        this.setState({text: this.props.match.params.text});

        let fetchURL = 
             constants.API +
            '/cases_discovery/search/' +
             this.props.type + "/" +
             this.props.match.params.text;

        const tempCollection = [];

        await fetch(fetchURL)
            .then(res => res.json())
            .then(item => {
                if (item.success === true) {

                    if (item.results.results.length > 0) {
                        item.results.results.forEach(it => {
                            if (it.result_metadata.confidence > 0) {
                                tempCollection.push(<FindAttrRow
                                    caseName = {it.caseName}
                                    key = {it.id}
                                    id = {it.id}
                                    confidence = {Math.round(it.result_metadata.confidence*100)}
                                />);
                            }
                        });

                        this.setState({cases: tempCollection});

                        console.log(tempCollection);

                    } else {
                        this.setState({errorMessage: "Nothing found."});
                    }
                }
                else {
                    this.setState({errorMessage: "Error searching item."});
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        let isLoading = this.state.loading;

        let viewResults;

        if (isLoading === false) {
            viewResults = 
                <FindResults 
                        type={this.state.type} 
                        cases = {this.state.cases}/>
        }

        return (
            <div>

                <div className="container pageBody">
                <FindResults 
                        type={this.state.type} 
                        text={this.state.text}
                        cases = {this.state.cases}/>
                </div>

            </div>
        )
    }
}

export default FindAttr;
