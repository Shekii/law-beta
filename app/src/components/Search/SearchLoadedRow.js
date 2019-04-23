import React from 'react';
import {Button } from 'react-bootstrap'


const SearchLoadedRow = (props) => {

    const URL = "/case/" + props.id;
    return (
        <tr id="caseRow"> 
            <td>
                <div>
                   <a href={URL}>
                     {props.caseName} 
                    </a>
                </div>
            </td>
            <td>
                <div>{props.confidence}%</div>
            </td>
        </tr>
    );
}

export default SearchLoadedRow
