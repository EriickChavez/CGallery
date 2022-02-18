import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Button, FlatList} from 'react-native';
import HomeItem from "./components/homeItem2";
import Header from "../../components/header";
import {connect} from 'react-redux';
import {homeItemStyles, homeScreenStyles} from "./styles/styles";
import {bindActionCreators} from 'redux';
import {setAlbum, setPhoto} from "../../redux/actions";
import {ALBUMS_URL, PHOTOS_URL} from '../../constants/urls';
import {useNavigation} from '@react-navigation/native';
import {backgroundColor} from '../../helpers/helper';


const HomeScreen = (props) => {
    const fetchOptions = {method: "GET", headers: {'Content-Type': 'application/json'}}
    const [albumList, setAlbumList] = useState([]);
    const [photosList, setPhotosList] = useState([]);
    const [cover, setCover] = useState([]);
    const navigation = useNavigation()

    useEffect(() => {
        const filterCover = (array) => {
            let contador = 1;

            const aux = array.filter(e => {
                if (e.albumId === contador) {
                    contador++;
                    return e;
                }
            })
            return aux
        }

        const fetchPhotos = async () => {
            try {
                const response = await fetch(PHOTOS_URL, fetchOptions);
                const res = await response.json()

                props.setPhoto(res)
                setPhotosList(res)

                setCover(filterCover(res));
            } catch (err) {
                console.log(err.message)
            }
        }

        const _fetch = async () => {
            const response = await fetch(ALBUMS_URL, fetchOptions);
            const res = await response.json()

            setAlbumList(res)
            props.setAlbum(res)
        }

        if (props.albums.length == 0) {
            _fetch()
            fetchPhotos()
        } else {
            setAlbumList(props.albums)
            setPhotosList(props.photos)
            setCover(filterCover(props.photos));
        }

    }, [])

    const navigateToGallery = (id) => {
        const data = photosList.filter(e => e.albumId == id)
        navigation.navigate('Gallery', {id, data})
    }

    return (
        <SafeAreaView style={[homeScreenStyles.safeArea, homeScreenStyles.flex1]}>
            <View style={[homeScreenStyles.flex1, homeScreenStyles.container]}>
                <Header />
                <ScrollView
                    style={{padding: '5%'}}
                    contentContainerStyle={{justifyContent: 'space-between'}}
                >
                    {albumList.map((e, i) => <HomeItem key={i} item={e} onPress={navigateToGallery} url={cover[e?.id]?.url ?? ""} />)}
                </ScrollView>
            </View>
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
        setPhoto
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)