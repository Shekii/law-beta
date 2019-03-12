import React from 'react';
import {Button } from 'react-bootstrap'


const SimilarCasesRow = (props) => {
    const url = "/case/" + props.id;
    
    return (
        <tr id="caseRow"> 
            <td>
                <div>
                   <a href={url} 
                      target="_blank"
                      rel="noopener noreferrer">
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
						    href={url}
                            target="_blank"
                            rel="noopener noreferrer">
						
						<i className="fa fa-eye"/>
						</Button>
                </div>
            </td>
        </tr>
    );
}

export default SimilarCasesRow
