import React from 'react';
import {Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'


const CaseCollection = (props) => {
    let ac = {
        key:props.id,
        id:props.id,
        caseName:props.caseName,
        caseDate:props.caseDate,
        text:props.text,
    }
    let editCase = props.ec;
    let boundEditCase = editCase.bind(this, ac);

    let removeCase = props.dc;
	let boundRemoveCase = removeCase.bind(this, ac);
	
    const viewURL = "/case/" + ac.id;
    const conceptURL = "/find/concept/" + props.concept;

    return (
        <tr id="caseRow"> 
            <td>
                <div id="caseNameCell">
                    <a
                        href={viewURL} 
                        className="link">
                        {props.caseName}
                    </a>
                    <a href={conceptURL} style={{marginLeft:'10px'}}>
                        <Badge pill variant="success">
                            {props.concept}
                        </Badge>
                    </a>
                </div>
            </td>
            <td>
                <div id="caseDateCell">{props.caseDate}</div>
            </td>
            <td id="caseEditCell"> 
                <div>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-1`}>
                            <strong>Edit Case</strong>
                            </Tooltip>
                        }
                        >
                        <Button id="controlButton" 
                            onClick={boundEditCase}
                            variant="outline-primary"
                        >
                        <i className="fa fa-edit"/>
                        </Button>
                    </OverlayTrigger>
                </div>
            </td>
            <td id="caseDeleteCell">
                <div>
                        <OverlayTrigger
                            overlay={
                                <Tooltip id={`tooltip-2`}>
                                <strong>Delete Case</strong>
                                </Tooltip>
                            }
                            >
                            <Button 
                            variant="outline-danger"
                            onClick={boundRemoveCase}
                            >
                            <i className="fa fa-trash"/>
                            </Button>
                        </OverlayTrigger>
                </div>
            </td>
            <td>
                <div id="caseViewCell">
                        <OverlayTrigger
                            overlay={
                                <Tooltip id={`tooltip-3`}>
                                <strong>Case Analysis Report</strong>
                                </Tooltip>
                            }
                            >
                            <Button 
                                variant="outline-info"
                                href={viewURL}
                            >
                            <i className="fa fa-eye"/>
                            </Button>
                        </OverlayTrigger>
                </div>
            </td>
        </tr>
    );
}

export default CaseCollection
