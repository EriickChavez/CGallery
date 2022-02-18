import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Button, FlatList} from 'react-native';
import HomeItem from "./components/homeItem";
import Header from "../../components/header";
import {connect} from 'react-redux';
import {homeItemStyles, homeScreenStyles} from "./styles/styles";
import {bindActionCreators} from 'redux';
import {setAlbum, setPhoto} from "../../redux/actions";
import {ALBUMS_URL, PHOTOS_URL} from '../../constants/urls';
import {useNavigation} from '@react-navigation/native';
import {backgroundColor} from '../../helpers/helper';
import CButtonSettings from '../../components/CButtonSettings';


const HomeScreen = (props) => {
    const fetchOptions = {method: "GET", headers: {'Content-Type': 'application/json'}}
    const [albumList, setAlbumList] = useState([]);
    const [photosList, setPhotosList] = useState([]);
    const [cover, setCover] = useState([]);
    const navigation = useNavigation()

    useEffect(() => {
        // Filtrar las portadas
        const filterCover = (array) => {
            let c = 1;
            const aux = array.filter(e => {
                if (e.albumId === c) {
                    c++;
                    return e;
                }
            })
            return aux
        }

        // Consulta las photos
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

        // Consulta los albums
        const _fetch = async () => {
            const response = await fetch(ALBUMS_URL, fetchOptions);
            const res = await response.json()

            setAlbumList(res)
            props.setAlbum(res)
        }

        // Verifica que tenga albums/photos, en caso de no tener, los consulta
        if (props.albums.length == 0) {
            _fetch()
            fetchPhotos()
        } else {
            setAlbumList(props.albums)
            setPhotosList(props.photos)
            setCover(filterCover(props.photos));
        }

    }, [])
    
    // manda al album seleccionado
    const navigateToGallery = (id) => {
        const data = photosList.filter(e => e.albumId == id)
        navigation.navigate('Gallery', {id, data})
    }
    
    // Manda a la pantalla de settings
    const goSettings = () => {
        navigation.navigate('Settings')
    }

    return (
        <SafeAreaView style={[homeScreenStyles.safeArea, homeScreenStyles.flex1]}>
            <View style={[homeScreenStyles.flex1, homeScreenStyles.container]}>
                <Header Right={() => <CButtonSettings onPress={goSettings} stroke={"#FF0000"} width={30} height={30} />} />
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
// Get State
const mapStateToProps = (state) => {
    const {albums, photos} = state.photosReducer;
    return {albums, photos}
};
// Set State
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setAlbum,
        setPhoto
    }, dispatch)
);
// Conexion de componente con Redux
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)