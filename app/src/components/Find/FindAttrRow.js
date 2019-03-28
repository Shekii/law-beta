import React from 'react';
//import {Button, Glyphicon } from 'react-bootstrap'

import '../../css/main.css';

const FindAttrRow = (props) => {

    const URL = "/case/" + props.id;
    return (
        <tr id="caseRow"> 
            <td>
                <div>
                   <a href={URL} className="link">
                     {props.caseName} 
                     <span></span>
                     <span className="fa fa-external-link fa-fw"/>
                    </a>
                </div>
            </td>
            <td>
                <div>{props.confidence}%</div>
            </td>
        </tr>
    );
}

export default FindAttrRow
