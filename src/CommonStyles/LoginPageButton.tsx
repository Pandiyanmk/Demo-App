import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import CommonStyleSheet from './CommonStyleSheet';

const LoginPageButton = ({ title, disabledButton, onPress = () => { } }) => {
    console.log(disabledButton)
    return (
        <TouchableOpacity onPress={onPress} disabled={disabledButton} style={[CommonStyleSheet.loginPageButton, { backgroundColor: disabledButton ? 'grey' : 'red' }]}>
            <Text style={CommonStyleSheet.loginPageButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default LoginPageButton