import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import CText from "../../../components/CText";

const GalleryItem = ({item, url, onPress}) => {

    const handlePress = () => {
        onPress(item.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
            style={styles.container}>
            <FastImage
                source={{uri: url}}
                style={styles.image}
            >
                <View style={styles.contentText}>
                    <CText numberOfLines={2}>{item.title}</CText>
                </View>
            </FastImage>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        height: 180,
        width: '100%',
        marginVertical: '3%',
        backgroundColor: 'red',
    },
    image: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        flexDirection: 'column-reverse'
    },
    contentText: {
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
})

export default GalleryItem;

