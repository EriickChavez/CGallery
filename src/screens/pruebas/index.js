import React, {useEffect, useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

import Container from './container';


const fetchOptions = {method: "GET", headers: {'Content-Type': 'application/json'}}
const url = "https://jsonplaceholder.typicode.com/albums"




export default Index = (props) => {
    const [list, setList] = useState([]);

    const _fetch = async () => {
        const response = await fetch(url, fetchOptions);
        const res = await response.json()
        setList(res)
    }


    return (
        <SafeAreaView style={{alignItems: 'center', flex: 1}}>
            <Button title={"fetch"} onPress={_fetch} />
            <Button title={"getStorage"} onPress={() => { }} />
            <Button title={"setStorage"} onPress={() => { }} />
            <Container />
            <ScrollView>
                {list.map((e, i) => <Item key={i} item={e} />)}
            </ScrollView>
        </SafeAreaView>
    );
}


const Item = ({item}) => {
    return (
        <View style={{backgroundColor: '#ccc', borderRadius: 10, marginVertical: 10, marginHorizontal: 10, padding: 10}}>
            <Text>albumId: {item.albumId}</Text>
            <Text>id: {item.id}</Text>
            <Text>title: {item.title}</Text>
            <Text>url: {item.url}</Text>
            <Text>thumbnailUrl: {item.thumbnailUrl}</Text>
        </View>
    )
}

