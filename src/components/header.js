import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const Header = ({Right, Left}) => {
    return (
        <View style={[styles.container, Right && {justifyContent:'space-between'}]}>
            {Left? <Left /> : null}
            <FastImage 
                source={require('../assets/logo/logo.png')}
                style={styles.logo}
                resizeMode={"contain"}
            />
            {Right? <Right /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
    },
    logo:{
        width:100,
        height:50,
    }
})

export default Header;
