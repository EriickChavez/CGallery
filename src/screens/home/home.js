import React, {useEffect, useState} from 'react';
import {View, Text, Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import GalleryItem from "./components/galleryItem";
import Header from "../../components/header";
export default HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={[styles.safeArea, styles.flex1]}>
            <View style={[styles.flex1, styles.container]}>

                <Header />
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
    safeArea: {
        backgroundColor: '#FFFFFF'
    },
    container: {backgroundColor: "#D8DEE9"},
    flex1: {
        flex: 1
    },
    padding: {
        paddingHorizontal: '3%'
    }
})