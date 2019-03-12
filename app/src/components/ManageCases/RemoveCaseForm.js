import React, { Component } from 'react';
import { 
     Button, 
     Form } from 'react-bootstrap';


class RemoveCaseForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = props.hs; 
    }

    render() {
        const { formIsValid } = true;

        return (
            <Form 
                noValidate
                className={ formIsValid ? '' : 'formHasErrors' }>
                
                <p> Are you sure that you want to delete "<strong>{this.props.ctd.caseName}</strong>"? </p>

                <Button 
                    type="submit" 
                    onClick={this.handleSubmit}
                    variant="danger"
                    size="lg"
                    block>
                    Delete Case?
                </Button>

            </Form>
        );
    }

}

export default RemoveCaseForm