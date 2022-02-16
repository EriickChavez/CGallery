import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button, ImageBackground, ScrollView, Dimensions, Animated, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
const Dim = Dimensions.get('window')


export default Item = ({item}) => {
    const [animation, setAnimation] = useState(new Animated.Value(1));
    const [typeAnimation, setTypeAnimation] = useState(true);

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: typeAnimation ? 0 : 1,
            duration: 500,
            useNativeDriver: false
        }).start(() => {
            setTypeAnimation(!typeAnimation)
        });
    }


    const animatedStyles = {
        opacity: animation
    }


    return (
        <Pressable style={styles.button} onPress={startAnimation}>
            <ImageBackground
                source={{uri: item.url}}
                style={styles.button}
                blurRadius={10}
            >
                <Animated.View style={[animatedStyles]}>
                    <FastImage source={require('../../assets/shadows/shadow_bottom.png')}
                        style={styles.contentDescription}>
                        <Text numberOfLines={2} style={styles.textDescription}>{item.title}</Text>
                    </FastImage>
                </Animated.View>
                <FastImage
                    source={{uri: item.url}}
                    resizeMode={"contain"}
                    style={styles.image}
                />
            </ImageBackground>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    contentDescription: {
        paddingBottom: 8,
        paddingHorizontal: 8,
        flexDirection: 'column-reverse',
        height: 100
    },
    textDescription: {
        marginTop: 8,
         color: 'white'
    },
    image:{
        width: '100%', 
        height: '100%'
    }
})
