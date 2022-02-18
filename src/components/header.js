import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const Header = ({Right, Left, name}) => {
    return (
        <View style={[styles.container, Right && {justifyContent: 'space-between'}]}>
            {Left ? <Left /> : null}
            <View style={styles.containerLogoName}>
                <FastImage
                    source={require('../assets/logo/logo.png')}
                    style={styles.logo}
                    resizeMode={"contain"}
                />
                <Text style={styles.text}>{name}</Text>
            </View>
            {Right ? <Right /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerLogoName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 50,
        marginRight: 25
    },
    text: {
        fontSize: 21,
        color: '#FF0000',
        fontStyle:'italic'
    }
})

export default Header;
