import React, {useEffect, useMemo, useState} from 'react';
import {View, Image, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import Card from "./components/Card";
import Header from '../../components/header';
import CButtonBack from "../../components/CButtonBack";
import {useNavigation, useRoute} from '@react-navigation/native';

export default Index = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    const {id, data} = route.params;
    const [list, setList] = useState(data ?? []);

    const onPress = (id) => {
        navigation.navigate('Preview', {data, id})
    }

    const Back = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={[styles.safeArea, styles.flex1]}>
            <Header Left={() => <CButtonBack onPress={Back} stroke={"#FF0000"} width={30} height={30} />} />
            <View style={[styles.flex1, styles.container]}>
                <MasonryList
                    data={data}
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
    container: {backgroundColor: "#D8DEE9"}
})