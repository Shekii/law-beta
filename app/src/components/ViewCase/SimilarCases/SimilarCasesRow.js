import React from 'react';
import {Button, Glyphicon } from 'react-bootstrap'


const SimilarCasesRow = (props) => {
    const url = "/case/" + props.id;
    return (
        <tr id="caseRow"> 
            <td>
                <div>
                   <a href={url}  target="_blank">
                     {props.caseName}
                    </a>
                </div>
            </td>
            <td>
                <div>{props.confidence}</div>
            </td>
            <td>
                <div id="caseViewCell">
						<Button 
						bsStyle="warning" 
						bsSize="small"
						
						href={url}
						>
							<Glyphicon glyph="zoom-in" />
						</Button>
                </div>
            </td>
        </tr>
    );
}

export default SimilarCasesRow
