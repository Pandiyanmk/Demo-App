import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen2TextStyling: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left'
    },
    screen2ViewStyling: {
        flexDirection: 'row',
        alignContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    screen2cardStyling: {
        alignContent: 'center',
        margin: 5
    },
    DetailScreencardStyling: {
        alignContent: 'center',
        margin: 20
    },
    viewAlignment: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailPageHeadingColor: {
        color: 'grey',
        fontSize: 22,
        textAlign: 'left',
        paddingLeft: 5
    },
    detailPageSubHeadingColor: {
        fontSize: 22,
        color: 'black',
        textAlign: 'left',
        paddingLeft: 40
    },
    imageAlignment: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2
    },
    loginPageButton: {
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    loginPageButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})
