import React, {useEffect, useState} from 'react';
import {View, Text, Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import GalleryItem from "./components/galleryItem";

export default HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.flex1}>
            <View style={styles.flex1}>
                <ScrollView>
                    <View style={styles.padding}>
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex1:{
        flex:1
    },
    padding:{
        paddingHorizontal: '3%'
    }
})