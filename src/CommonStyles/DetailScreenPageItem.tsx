import React from 'react';
import { View, Image, Text } from 'react-native';
import CommonStyleSheet from './CommonStyleSheet';

const DetailScreenItem = ({ iconName, label, labelValue }) => {
    return (<View>
        <View style={{ height: 10 }}></View>
        <View style={{ flexDirection: 'row' }}>
            <Image source={iconName} />
            <Text style={CommonStyleSheet.detailPageHeadingColor}>{label}</Text>
        </View>
        <Text style={CommonStyleSheet.detailPageSubHeadingColor}>{labelValue}</Text>
    </View>
    )
};

export default DetailScreenItem;