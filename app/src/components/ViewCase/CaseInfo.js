import React from 'react';
import {Form, Col, Row, Card} from 'react-bootstrap'


const CaseInfo = (props) => {

    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{props.case.caseName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.case.caseDate}</Card.Subtitle>
                    <Card.Text>
                        <Form.Control as="textarea"
                                        rows="8"
                                        readOnly
                                        defaultValue={props.case.text}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CaseInfo
