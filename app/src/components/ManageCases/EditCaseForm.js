import React, { Component } from 'react';
import { 
     Button, 
     Form } from 'react-bootstrap';


class EditCaseForm extends Component { 
    constructor(props) {
        super(props);
        this.handleSubmitUpdate = props.hs;
        this.handleSubmitDelete = props.hs;
        this.handleInputChange = props.hic;
    }

    render() {
        
        return (
            <div>
                <Form>
                <input 
                    type="hidden"
                    name="id"
                    id="id"
                    value={this.props.cte.id}/>
                    <Form.Group controlId="formHorizontalCaseName">
                        <Form.Label>Case Name</Form.Label>
                        <Form.Control type="text"
                                      name="caseName"
                                      value={this.props.cte.caseName} 
                                      onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formHorizontalCaseDate">
                        <Form.Label>Date of Case</Form.Label>
                        <Form.Control type="date"
                                      name="caseDate"
                                      value={this.props.cte.caseDate} 
                                      onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formHorizontalCaseText">
                        <Form.Label>Case Text</Form.Label>
                        <Form.Control as="textarea"
                                      rows="3"
                                      value={this.props.cte.text}
                                      name="text"
                                      onChange={this.handleInputChange} />
                    </Form.Group>
                
                    <Button 
                        type="submit" 
                        onClick={this.handleSubmitUpdate}
                        variant="success"
                        size="lg"
                        block>
                        Save Case
                    </Button>
                </Form>
            </div>
        );
    }

}

export default EditCaseForm