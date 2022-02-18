import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button, ImageBackground, ScrollView, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Item from "./components/item";
const Dim = Dimensions.get('window')
import Header from "../../components/header";
import {useNavigation, useRoute} from '@react-navigation/native';
import Cbuttonclose from '../../components/CButtonClose';
export default Index = (props) => {
    const navigation = useNavigation()
    const route = useRoute()

    const {data, id} = route.params;
    const [index, setIndex] = useState(data.findIndex(e => e.id == id));

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={[styles.safeArea, styles.flex1]}>
            <View style={styles.flex1}>
                <Header
                    name={"Preview"}
                    Right={() => <View style={styles.buttonClose}>
                        <Cbuttonclose width={30} height={30} stroke={"#F00"} onPress={goBack} />
                    </View>}
                />
                <Carousel
                    layout='default'
                    firstItem={index}
                    zoomScale={0.4}
                    maximumZoomScale={3}
                    minimumZoomScale={4}
                    style={[styles.container]}
                    contentContainerStyle={[styles.container, styles.flex1]}
                    contentContainerCustomStyle={[styles.container,styles.flex1]}
                    sliderWidth={Dim.width}
                    itemWidth={Dim.width}
                    data={data}
                    bouncesZoom={true}
                    renderItem={({item}) =>  <Item item={item} goBack={goBack} /> }
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {backgroundColor: '#FFFFFF', },
    flex1: {flex: 1, },
    container: {backgroundColor: "#D8DEE9"}
})
