import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import CText from '../../../components/CText';

export default GalleryItem = ({item, url, onPress = () => { }}) => {
    
    const handlePress = () => {
        onPress(item.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
            style={styles.card}>
            <FastImage
                source={{uri: url, priority: FastImage.priority.high}}
                style={styles.image}
            >
                <View style={styles.contentText}>
                    <CText numberOfLines={2}>Album {item.title}</CText>
                </View>
            </FastImage>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {width: '100%', height: 370, marginBottom: 30, borderRadius: 20, backgroundColor: '#FFFFFF', },
    image: {borderRadius: 20, flex: 1, flexDirection: 'column-reverse'},
    contentText: {paddingHorizontal: '3%', paddingBottom: '10%', paddingTop: '3%', backgroundColor: 'rgba(255,0,0,0.5)'},
})