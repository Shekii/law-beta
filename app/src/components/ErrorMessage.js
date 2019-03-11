import React from 'react';
import {Button, Alert } from 'react-bootstrap'


const ErrorMessage = (props) => {
    return (
        <div>
            <Alert dismissible variant="info">
                <Alert.Heading>{props.error} </Alert.Heading>
            </Alert>

        </div>
    );
}

export default ErrorMessage
