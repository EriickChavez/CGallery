import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, Animated, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import CText from "../../../components/CText";


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

    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                break;
            case SWIPE_DOWN:
                goBack()
                break;
            default: break;
        }
    }


    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (
        <GestureRecognizer
            // onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeUp={(state) => goBack()}
            onSwipeDown={(state) => goBack()}
            config={config}
            style={{
                flex: 1,
            }}
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
                        source={{uri: item.url}}
                        resizeMode={"contain"}
                        style={styles.image}
                    />

                </ImageBackground>
                <Header Right={() => <View style={styles.buttonClose}>
                    <CButtonClose width={30} height={30} stroke={"#000"} onPress={goBack} />
                </View>} />
            </Pressable>
        </GestureRecognizer>
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



import {Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class SomeComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: '#fff'
        };
    }

    onSwipeUp(gestureState) {
        this.setState({myText: 'You swiped up!'});
    }

    onSwipeDown(gestureState) {
        this.setState({myText: 'You swiped down!'});
    }

    onSwipeLeft(gestureState) {
        this.setState({myText: 'You swiped left!'});
    }

    onSwipeRight(gestureState) {
        this.setState({myText: 'You swiped right!'});
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: 'yellow'});
                break;
        }
    }

    render() {

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                    flex: 1,
                    backgroundColor: this.state.backgroundColor
                }}
            >
                <Text>{this.state.myText}</Text>
                <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
            </GestureRecognizer>
        );
    }
}

export default Item;