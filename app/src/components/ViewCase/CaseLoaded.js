import React from 'react';

import CaseConcepts from './CaseConcepts';

import CaseCategories from './CaseCategories';

import CaseEmotions from './CaseEmotions';

import CaseInfo from './CaseInfo';

import HelpInfo from './HelpInfo'; 

import SimilarCases from './SimilarCases/SimilarCases';

import {  
    Form, Col, Row, Tabs, Tab, Nav, Badge, Button } from 'react-bootstrap';

import '../../css/main.css'; 

const CaseLoaded = (props) => {
    let conceptsSize =  props.concepts.length;
    let categoriesSize = props.categories.length;
    return (
        <div>

            <h4 className="display-4">
                Case Analysis Report<br></br>
            </h4>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Case Details <span className="fa fa-info-circle"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                Concepts  <span></span>
                                <Badge pill variant="warning">
                                    {conceptsSize > 0 &&
                                        conceptsSize
                                    }
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                    <Nav.Item>
                            <Nav.Link eventKey="third">
                                Categories <span></span>
                                <Badge pill variant="warning">
                                    {categoriesSize > 0 &&
                                        categoriesSize
                                    }
                                </Badge>
                            </Nav.Link> 
                        </Nav.Item>
                    <Nav.Item>
                            <Nav.Link eventKey="fourth">Emotions <span className="fa fa-smile-o"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Help <span className="fa fa-question-circle"/></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <CaseInfo case={props.case}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <CaseConcepts concepts={props.concepts}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <CaseCategories categories={props.categories}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <CaseEmotions emotions={props.emotions}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <HelpInfo case={props.case}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

            <div className="container">
                <SimilarCases case={props.case}/>
            </div>
    </div>

    );
}

export default CaseLoaded;
