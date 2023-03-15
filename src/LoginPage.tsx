import { Keyboard, SafeAreaView, View } from 'react-native';
import React, { useEffect } from 'react';
import TextInputLoginPage from './CommonStyles/TextInputLoginPage';
import LoginPageButton from './CommonStyles/LoginPageButton';
import { NAME, PASSWORD } from './image/imageFile'

type Props = {}

const LoginPage = (props: Props) => {

    const [isVisibleButton, setIsVisibleButton] = React.useState(false)
    const [inputs, setInputs] = React.useState({
        name: '',
        password: ''
    })
    const [errors, setErrors] = React.useState({})

    const validate = () => {
        let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/;
        let checkUsername = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/;
        let checkSpecialCharacter = /(?=.*[!@#$%^&*()_=+\-=\[\]{};':"\\|,.<>\/?])/;
        let valid = true;
        if (!inputs.name) {
            handleError("Please Enter UserName", 'name')
            valid = false;
        } else if (inputs.name.length < 10) {
            handleError("UserName Length Minimum 10 Character Maximum 15", 'name')
            valid = false;
        } else if (!inputs.name.match(checkUsername)) {
            handleError("UserName should have atleast 1 UpperCase , LowerCase, Number", 'name')
            valid = false;
        } else if (inputs.name.match(checkSpecialCharacter)) {
            handleError("UserName Should Not Have Special Characters", 'name')
            valid = false;
        } else {
            handleError("", 'name')
        }

        if (!inputs.password) {
            handleError("Please Enter Password", 'password')
            valid = false;
        } else if (inputs.password.length < 8) {
            handleError("Password Length Minimum 8 Character Maximum 16", 'password')
            valid = false;
        } else if (!inputs.password.match(check)) {
            handleError("Password should have atleast 1 UpperCase, LowerCase & Special Character Allowed(!@#$*)", 'password')
            valid = false;
        } else {
            handleError("", 'password')
        }
        if (valid) {
            setIsVisibleButton(true)
        } else {
            setIsVisibleButton(false)
        }
    }


    const moveToUserList = () => {
        Keyboard.dismiss;
        setErrors('');
        props.navigation.navigate('UserList Screen')
    }

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }
    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }))
    }

    useEffect(() => {
        console.log(inputs, '- Has changed')
        validate();
    }, [inputs]) // <-- here put the parameter to listen

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInputLoginPage
                    placeHolderLabel="Enter Your UserName"
                    maxLengths={15}
                    label="UserName"
                    error={errors.name}
                    imageName={NAME}
                    onFocus={() => {
                        handleError(null, 'name')
                    }}
                    onChangeText={(text) => {
                        handleOnChange(text, 'name')

                    }}
                >
                </TextInputLoginPage>
                <TextInputLoginPage
                    placeHolderLabel="Enter Your Password"
                    maxLengths={16}
                    label="Password"
                    password
                    imageName={PASSWORD}
                    error={errors.password}
                    onFocus={() => {
                        handleError(null, 'password')
                    }}
                    onChangeText={(text) => {
                        handleOnChange(text, 'password')
                    }}
                />
                <LoginPageButton title="LOGIN" onPress={moveToUserList} disabledButton={!isVisibleButton} />
            </View>
        </SafeAreaView>
    )
}
export default LoginPage