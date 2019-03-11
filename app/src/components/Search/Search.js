import React, { Component } from 'react';
import {  Button, Jumbotron , Form} from 'react-bootstrap';

import '../../css/main.css';

class Search extends Component {

    constructor(props) {
        super(props);

         this.state = { 
             validated: false
         };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        this.setState({ validated: true });
    }

    render() {
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
                                        name="searchTerm"
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
                            //onClick={this.handleSubmitNewAnimal}
                            onClick={this.handleSubmit}
                            variant="success"
                            size="lg">
                            Search <i className="fa fa-search"/>
                            </Button>
                    </Form>
                </Jumbotron>
    
            </div>
        )
    }
}

export default Search;
