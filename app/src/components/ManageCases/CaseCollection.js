import React from 'react';
import {Button } from 'react-bootstrap'


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
	
	let viewURL = "/case/" + ac.id;

    return (
        <tr id="caseRow"> 
            <td>
                <div id="caseNameCell">{props.caseName}</div>
            </td>
            <td>
                <div id="caseDateCell">{props.caseDate}</div>
            </td>
            <td id="caseEditCell"> 
                <div>
						<Button id="controlButton" 
						bsStyle="info" 
						bsSize="small"
						onClick={boundEditCase}
						>
							{/*<Glyphicon glyph="pencil" />*/}
						</Button>
                </div>
            </td>
            <td id="caseDeleteCell">
                <div>
						<Button 
						bsStyle="danger" 
						bsSize="small"
						onClick={boundRemoveCase}
						>
							{/*<Glyphicon glyph="remove" />*/}
						</Button>
                </div>
            </td>
            <td>
                <div id="caseViewCell">
						<Button 
						bsStyle="warning" 
						bsSize="small"
						
						href={viewURL}
						>
							{/*<Glyphicon glyph="zoom-in" />*/}
						</Button>
                </div>
            </td>
        </tr>
    );
}

export default CaseCollection
