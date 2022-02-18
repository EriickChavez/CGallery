import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAlbum, addAlbum} from "../../redux/actions";

const Index = (props) => {

    return (
        <SafeAreaView>
            <Button title='Add' onPress={() => props.addAlbum("perros")} />
            <Button title='SET' onPress={() => props.setAlbum(["Albumino"])} />
            <Button title='GET' onPress={() => console.info("\n", props)} />
        </SafeAreaView>
    );
}


const mapStateToProps = (state) => {
    const {albums, photos} = state.photosReducer;
    return {albums, photos}
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setAlbum,
        addAlbum,
    }, dispatch)
);
const styles = StyleSheet.create({})

export default connect(mapStateToProps, mapDispatchToProps)(Index);