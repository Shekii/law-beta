import React, {Component} from 'react';

// import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import * as constants from '../../static/constants.js';

import CaseConcepts from './CaseConcepts';
import CaseConceptsRow from './CaseConceptsRow';

import CaseCategories from './CaseCategories';
import CaseCategoryRow from './CaseCategoryRow';

import CaseEmotions from './CaseEmotions';
import CaseEmotionsRow from './CaseEmotionsRow';

import SimilarCases from './SimilarCases/SimilarCases';

import ErrorMessage from '../ErrorMessage';

import { 
     Button, 
     FormGroup, Form, Col, ControlLabel, Row, FormControl, Tabs, Tab } from 'react-bootstrap';

import '../../css/main.css'; 

const CaseLoaded = (props) => {
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formHorizontalCaseName">
                            <Form.Label><strong>Case Name</strong></Form.Label>
                            <Form.Control type="text"
                                        readOnly
                                        defaultValue={props.case.caseName}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formHorizontalCaseDate">
                            <Form.Label><strong>Case Date</strong></Form.Label>
                            <Form.Control type="text"
                                          readOnly
                                          defaultValue={props.case.caseDate}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formHorizontalCaseText">
                    <Form.Control as="textarea"
                                    rows="3"
                                    readOnly
                                    defaultValue={props.case.text}/>
                </Form.Group>
            </Form>

            <div className="container">
                <h2>Case analysis</h2>
                <Tabs defaultActiveKey="profile" id="caseTabs">
                    <Tab eventKey="home" title="Concepts" className="caseTab">
                        <CaseConcepts concepts={props.concepts}/>
                    </Tab>
                    <Tab eventKey="profile" title="Categories" className="caseTab">
                        <CaseCategories categories={props.categories}/>
                    </Tab>
                    <Tab eventKey="contact" title="Emotions" className="caseTab">
                        <CaseEmotions emotions={props.emotions}/> 
                    </Tab>
                </Tabs>

                <h4>Similar Cases</h4>
                <SimilarCases case={props.case}/>

            </div>
            </div>

    );
}

export default CaseLoaded;
