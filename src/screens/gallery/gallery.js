import React, {useEffect, useMemo, useState} from 'react';
import {View, Image, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import filteredItems from "./data";
import FastImage from 'react-native-fast-image';
import Card from "./components/Card";

export default Index = ({navigation}) => {
    const onPress = (id) => {
        navigation.navigate('Preview', {data: filteredItems, id})
    }

    return (
        <SafeAreaView style={{flex: 1}}>
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
        </SafeAreaView>
    );
}

