import React, {Component} from 'react';

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import * as constants from '../static/constants.js';

import CaseConcepts from './CaseConcepts';
import CaseConceptsRow from './CaseConceptsRow';

import CaseCategories from './CaseCategories';
import CaseCategoryRow from './CaseCategoryRow';

import CaseEmotions from './CaseEmotions';
import CaseEmotionsRow from './CaseEmotionsRow';

import SimilarCases from './SimilarCases/SimilarCasesTable';

import ErrorMessage from '../ErrorMessage';

import { 
     Button, 
     FormGroup, Form, Col, ControlLabel, FormControl, Tabs, Tab } from 'react-bootstrap';

import '../../css/main.css'; 

const CaseLoaded = (props) => {
    return (
        <div>
            <BreadcrumbsItem to='/manage'>{props.case.caseName}</BreadcrumbsItem>
            <h4>Case Name: <small>{props.case.caseName}</small></h4>
            <h4>Case Date: <small>{props.case.caseDate}</small></h4>
            <div className="caseTextView">
                <p><small>{props.case.text}</small> </p>
            </div>

            {/*<div className="formViewCase">
                <Form 
                    horizontal
                    noValidate>
                    <FormGroup 
                        noValidate controlId="">
                        <Col sm={10}>
                            <FormControl 
                                required type="text" 
                                readOnly 
                                defaultValue={props.case.caseName}/>
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        noValidate controlId="">
                        <Col sm={10}>
                            <FormControl 
                                readOnly 
                                required type="text" 
                                defaultValue={props.case.caseDate}/>
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        noValidate controlId="">
                        <textarea 
                            readOnly 
                            className="form-control"
                            required type="text" 
                            defaultValue={props.case.text}
                            as="textarea" 
                            row="10"/>
                    </FormGroup>
                </Form>
            </div>*/}


            <div className="container">
                <h2>Case analysis</h2>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Concepts">
                        <CaseConcepts concepts={props.concepts}/>
                    </Tab>
                    <Tab eventKey="profile" title="Categories">
                        <CaseCategories categories={props.categories}/>
                    </Tab>
                    <Tab eventKey="contact" title="Emotions">
                        <CaseEmotions emotions={props.emotions}/> 
                    </Tab>
                </Tabs>

                <h2>Similar Cases</h2>
                <SimilarCases
                        concepts={props.concepts}
                        case={props.case}/>
            </div>
            </div>

    );
}

export default CaseLoaded;
