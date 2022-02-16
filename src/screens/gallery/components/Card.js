import React, {useEffect, useMemo, useState} from 'react';
import {View, Image, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import FastImage from 'react-native-fast-image';
import CText from '../../../components/CText';


export default Card = ({item, i, navigation, onPress = () => { }}) => {
    const randomBool = useMemo(() => i % 3 == 0, []);
    const handlePress = () => {
        onPress(item.id)
    }
    return (
        <View style={styles.padding10}>
            <TouchableOpacity
                onPress={handlePress}
                key={item.id}
                style={styles.button}>
                <FastImage
                    source={{uri: item.url, priority: FastImage.priority.high}}
                    style={[{height: randomBool ? 150 : 280}, styles.imageBackground]}
                    resizeMode="cover"
                >
                    <FastImage source={require('../../../assets/shadows/shadow_bottom.png')}
                        style={styles.image}>
                        <CText numberOfLines={2} style={styles.textDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi hic incidunt</CText>
                    </FastImage>
                </FastImage>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    padding10: {
        padding: 10
    },
    button: {
        flex: 1,
        marginTop: 12,
        borderRadius: 20,
    },
    imageBackground: {
        flexDirection: 'column-reverse',
        borderRadius: 20
    },
    image: {
        paddingBottom: 10,
        paddingHorizontal: 9,
        flexDirection: 'column-reverse',
        height: 100
    },
    textDescription: {
        color: 'white'
    }

})