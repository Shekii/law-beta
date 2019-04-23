import React from 'react';
import {Form, Col, Row, Card} from 'react-bootstrap'


const HelpInfo = (props) => {

    return (
        <div>

            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Helpful Information</Card.Title>
                    <Card.Text>
                                Using IBM Watson's Discovery service, concepts, categories, emotions and various other attributes are found.
                               Each of these attributes are followed by a confidence score, which indicates how relevant an attribute is to a legal case.
                    </Card.Text>
                    <Card.Title>Similar Cases</Card.Title>
                    <Card.Text>
                            The graph below illustrates all of the similar cases to "<strong>{props.case.caseName}</strong>".
                            On the Y axis, the relevance score is displayed. This ranges from <strong>0</strong> to <strong>1</strong>. 0 implies that
                            a case is entirely irrelevant and 1 implies that a case is extremely relevant and may worth consideration.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HelpInfo
