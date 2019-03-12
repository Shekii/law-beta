import React, { Component } from 'react';
import { 
     Button, 
     Form } from 'react-bootstrap';


class NewCaseForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = props.hs;
        this.handleInputChange = props.hic;

        this.state = { 
            validated: false
        };
    }

    render() {
        const { validated } = this.state;

        return (
                <Form
                    noValidate
                    validated={validated}>

                    <Form.Group controlId="formHorizontalCaseName">
                        <Form.Label>Case Name</Form.Label>
                        <Form.Control 
                                    type="text"
                                    required
                                    name="caseName"
                                    onChange={this.handleInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please enter a name.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Looks good.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formHorizontalCaseDate">
                        <Form.Label>Date of Case</Form.Label>
                        <Form.Control type="date"
                                      required
                                      name="caseDate"
                                      onChange={this.handleInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please select a date.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Looks good.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formHorizontalCaseText">
                        <Form.Label>Case Text</Form.Label>
                        <Form.Control as="textarea"
                                      rows="3"
                                      required
                                      name="text"
                                      onChange={this.handleInputChange} />
                        <Form.Control.Feedback type="invalid">
                            Please enter some case text.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Looks good.
                        </Form.Control.Feedback>
                    </Form.Group>
                
                    <Button 
                        type="submit" 
                        //onClick={this.handleSubmitNewAnimal}
                        onClick={e => this.handleSubmit(e)}
                        variant="success"
                        size="lg"
                        block>
                        Add Case</Button>
                </Form>
        );
    }

}

export default NewCaseForm