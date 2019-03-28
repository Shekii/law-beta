import React, { Component } from 'react';
import {  Button, Jumbotron , Form} from 'react-bootstrap';
import * as constants from '../../static/constants.js'; 
import queryString from 'query-string';

import DotLoader from '../Dot_Loader';
import ClipLoader from '../Clip_Loader';

import SearchLoaded from './SearchLoaded';
import SearchLoadedRow from './SearchLoadedRow';

import '../../css/main.css';

class Search extends Component {

    constructor(props) {
        super(props);

         this.state = { 
             validated: false,
             loading: false,
             text: '',
             errorMessage: '',
             results: []
         };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount() {
        // if (queryString.parse(this.props.location.search) !== undefined) {
        //     let params = queryString.parse(this.props.location.search);

        //     if (params.text !== undefined) {
        //         this.setState({text: params.text});
        //     }
        // }
    }

    async handleSearch() {
        if (this.state.validated === true && this.state.text.trim() !== '') {
            const tempCollection = [];

            this.setState ({loading : true});

            let fetchURL = '/cases_discovery/search/text/' + this.state.text;
            await fetch(constants.API + fetchURL)
                .then(res => res.json())
                .then(item => {
                    if (item.success === true) {
                        if (item.results.results.length > 0) {
                            item.results.results.forEach(it => {
                                if (it.result_metadata.confidence > 0) {
                                    tempCollection.push(<SearchLoadedRow
                                        caseName = {it.caseName}
                                        key = {it.id}
                                        id = {it.id}
                                        confidence = {Math.round(it.result_metadata.confidence*100)}
                                    />);
                                }
                            });

                            this.setState({results: tempCollection});
                        } else {
                            this.setState({errorMessage: "Nothing found."});
                        }
                    }
                    else {
                        this.setState({errorMessage: "Error searching term."});
                    }
                    //console.log(item);
                })
                .catch((error) => {
                    console.error(error);
                });

                this.setState({loading: false});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        this.setState({ validated: true });

        this.handleSearch();
    }

  async handleInputChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({ [name]: target.value });
  }

    render() {

        let isLoading = this.state.loading;

        let viewResults;

        if (isLoading === false) {
            viewResults = 
                <SearchLoaded results = {this.state.results}/>
        }

        const { validated } = this.state;
        return (
            <div>
                <Jumbotron className="pageBodyHome">
                <h1 className="display-3">Search</h1> 
                <p>Search for Cases using Natural Language.</p>

                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group controlId="formHorizontalCaseName">
                            <Form.Control 
                                        type="text"
                                        required
                                        //onKeyUp={this.handleSearch}
                                        name="text"
                                        onChange={this.handleInputChange} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a search term.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Looks Good, click Search!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button 
                            type="submit" 
                            onClick={this.handleSubmit}
                            variant="success"
                            size="lg">
                            Search <i className="fa fa-search"/>
                            </Button>
                    </Form>

                    <ClipLoader loading={this.state.loading}/>

                </Jumbotron>

                <div className="container-fluid results">
                    {viewResults}
                </div>


            </div>
        )
    }
}

export default Search;
