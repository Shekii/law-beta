import React from 'react';
import { Alert } from 'react-bootstrap'


const SuccessMessage = (props) => {
    return (
        <div>
            <Alert dismissible variant="success">
                <Alert.Heading>{props.message} </Alert.Heading>
            </Alert>

        </div>
    );
}

export default SuccessMessage
