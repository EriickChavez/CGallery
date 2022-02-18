import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, Animated, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import CText from "../../../components/CText";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import CButtonClose from "../../../components/CButtonClose";
import Header from "../../../components/header";

const Item = ({item, goBack = () => { }}) => {
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

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (

        <GestureRecognizer
            onSwipeUp={(state) => goBack()}
            onSwipeDown={(state) => goBack()}
            config={config}
            style={styles.flex1}
        >
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
                        source={{uri: item.url, priority: FastImage.priority.high}}
                        resizeMode={"contain"}
                        style={styles.image}
                    />

                </ImageBackground>
                <Header
                    name={"Preview"}
                    Right={() => <View style={styles.buttonClose}>
                        <CButtonClose width={30} height={30} stroke={"#F00"} onPress={goBack} />
                    </View>}
                />
            </Pressable>
        </GestureRecognizer>
    )
}


const styles = StyleSheet.create({
    flex1: {flex: 1},
    button: {flex: 1, flexDirection: 'column-reverse', },
    buttonClose: {position: 'absolute', top: 0, right: 10},
    contentDescription: {paddingBottom: 8, paddingHorizontal: 8, flexDirection: 'column-reverse', height: 100},
    textDescription: {marginTop: 8, color: 'white'},
    image: {width: '100%', height: '100%'}
})




export default Item;