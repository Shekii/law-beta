import React from 'react';
//import {Button, Glyphicon } from 'react-bootstrap'


const CaseConceptsRow = (props) => {
    let concept = {
        title:props.title,
        relevance:props.relevance,
    }

    const conceptURL = "/find/concept/" + concept.title;

    return (
        <tr id="caseRow"> 
            <td>
                <div>
                   <a href={conceptURL} className="link">
                        {concept.title}
                    </a>
                </div>
            </td>
            <td>
                <div>{concept.relevance}%</div>
            </td>
        </tr>
    );
}

export default CaseConceptsRow
