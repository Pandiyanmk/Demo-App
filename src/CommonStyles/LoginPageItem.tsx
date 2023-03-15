import React from 'react';
import { View, Image, Text } from 'react-native';
import CommonStyleSheet from './CommonStyleSheet';

const LoginPageItem = ({ iconName, label }) => {
    return (<View style={{ width: '100%', padding: 20, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <View style={{ height: 10 }}></View>
        <View style={{ flexDirection: 'row' }}>
            <Image source={iconName} />
            <Text style={CommonStyleSheet.detailPageHeadingColor}>{label}</Text>
        </View>
        <View style={{ height: 10 }}></View>
    </View>
    )
};

export default LoginPageItem;