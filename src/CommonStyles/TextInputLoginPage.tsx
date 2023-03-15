import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import LoginItem from './LoginPageItem';


const TextInputLoginPage = ({
    label,
    error,
    password,
    imageName,
    placeHolderLabel,
    maxLengths,
    onFocus = () => { },
    ...props
}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
    return (
        <View style={{ marginBottom: 20, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <LoginItem iconName={imageName} label={label} />
            <View style={[style.inputContainer, { borderColor: error ? 'red' : isFocused ? 'black' : 'light' }]}>
                <TextInput
                    maxLength={maxLengths}
                    placeholder={placeHolderLabel}
                    secureTextEntry={hidePassword}
                    autoCorrect={true}
                    onFocus={() => {
                        onFocus()
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    style={{ color: 'black', flex: 1, fontSize: 20 }}
                    {...props}>
                </TextInput>
                {password && (<Text onPress={() => setHidePassword(!hidePassword)}
                    style={{
                        color: 'red',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>{hidePassword ? "SHOW" : "HIDE"}</Text>)}
            </View>
            {error && (
                <Text style={style.errorStyling}>{error}</Text>
            )}

        </View>
    )
}

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 25,
        color: 'black'
    },
    inputContainer: {
        height: 60,
        width: '90%',
        backgroundColor: 'light',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 1,
        alignItems: 'center'
    },
    errorStyling: {
        color: 'red',
        paddingLeft: 20,
        width: '100%',
        textAlign: 'left',
        fontSize: 15,
        marginTop: 10
    }
})

export default TextInputLoginPage;