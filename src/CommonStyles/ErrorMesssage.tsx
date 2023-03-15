import React from 'react';
import { Text } from 'react-native';
import CommonStyleSheet from './CommonStyleSheet';

const ErrorMessage = ({ message }) => {
    return (<Text style={CommonStyleSheet.screen2TextStyling}>{message}</Text>)
}

export default ErrorMessage;