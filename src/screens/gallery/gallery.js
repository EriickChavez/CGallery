import React, {useEffect, useMemo, useState} from 'react';
import {View, Image, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import filteredItems from "./data";
import FastImage from 'react-native-fast-image';
import Card from "./components/Card";
import Header from '../../components/header';
import CButtonBack from "../../components/CButtonBack";

export default Index = ({navigation}) => {
    const onPress = (id) => {
        navigation.navigate('Preview', {data: filteredItems, id})
    }

    const Back = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={[styles.safeArea, styles.flex1]}>
            <Header Left={() => <CButtonBack onPress={Back} stroke={"#FF0000"} width={30} height={30} />} />
            <View style={[styles.flex1, styles.container]}>
                <MasonryList
                    data={filteredItems}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    bouncesZoom={true}
                    renderItem={({item, i}) => {
                        return <Card key={item.id} item={item} i={i} navigation={navigation} onPress={onPress} />
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {backgroundColor: '#FFFFFF'},
    flex1: {flex: 1},
    container:{backgroundColor:"#D8DEE9"}
})