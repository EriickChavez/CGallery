import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button, ImageBackground, ScrollView, Dimensions, Animated, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import CText from "../../../components/CText";

const Dim = Dimensions.get('window')
import CButtonClose from "../../../components/CButtonClose";
import Header from "../../../components/header";
export default Item = ({item, navigation}) => {
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

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <Pressable style={styles.button} onPress={startAnimation}>

            <ImageBackground
                source={{uri: item.url}}
                style={styles.button}
                blurRadius={10}
            >
                <Animated.View style={[animatedStyles]}>
                    <FastImage source={require('../../../assets/shadows/shadow_bottom.png')}
                        style={styles.contentDescription}>
                        <CText numberOfLines={2} style={styles.textDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi hic incidunt  </CText>
                    </FastImage>
                </Animated.View>
                <FastImage
                    source={{uri: item.url}}
                    resizeMode={"contain"}
                    style={styles.image}
                />

            </ImageBackground>
            <Header Right={() => <View style={styles.buttonClose}>
                <CButtonClose width={30} height={30} stroke={"#000"} onPress={goBack} />
            </View>} />

        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    buttonClose: {
        position: 'absolute',
        top: 0,
        right: 10
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
    image: {
        width: '100%',
        height: '100%'
    }
})
