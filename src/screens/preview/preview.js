import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button, ImageBackground, ScrollView, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Item from "./item";
const Dim = Dimensions.get('window')

export default Index = ({navigation, route}) => {
    const {data, id} = route.params;
    const [index, setIndex] = useState(data.findIndex(e => e.id == id));
    const [ref, setRef] = useState(null)

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.safeArea}>
                <Carousel
                    layout='default'
                    firstItem={index}
                    zoomScale={0.4}
                    maximumZoomScale={3}
                    minimumZoomScale={4}
                    sliderWidth={Dim.width}
                    itemWidth={Dim.width}
                    data={data}
                    bouncesZoom={true}
                    renderItem={({item}) => <Item item={item} />}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    }
})
