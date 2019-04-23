import React from 'react';
//import {Button, Glyphicon } from 'react-bootstrap'


const CaseCatergoryRow = (props) => {
    let data = {
        label:props.label,
        score:props.score
    }

    const categoryURL = "/find/category" + data.label;

    return (
        <tr id="caseRow"> 
            <td>
                <div>
                   <a href={categoryURL} className="link">
                     {data.label}
                    </a>
                </div>
            </td>
            <td>
                <div>{data.score}%</div>
            </td>
        </tr>
    );
}

export default CaseCatergoryRow
