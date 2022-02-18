import React from 'react';
import {View, SafeAreaView, StyleSheet, Linking, TouchableOpacity, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import CText from '../../components/CText';
import Header from '../../components/header';
import GitHubIcon from "./components/GitHubSVG";
import InstagramIcon from "./components/InstagramSVG";
import CButtonClose from "../../components/CButtonClose";
import {useNavigation} from '@react-navigation/native';

export default Index = (props) => {

    const URL_PROFILE_IMAGE = "https://scontent-qro1-2.cdninstagram.com/v/t51.2885-19/238360156_4554365917909545_1996336085138647313_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-qro1-2.cdninstagram.com&_nc_cat=109&_nc_ohc=K1Jt_gwvQ4UAX-Q0wXu&tn=ZvhLKBSdE_hglRJL&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT_d2GjY_r25j1r0RZthwVNup61m7uWu39xl97_NazCTqQ&oe=62154DEC&_nc_sid=9a90d6"
    const URL_INSTAGRAM = "https://www.instagram.com/eriick_chavez/"
    const URL_GITHUB = "https://github.com/EriickChavez"
    const navigation = useNavigation()
    const openInstagram = () => {
        try {
            Linking.openURL(URL_INSTAGRAM)
        } catch (err) {
            console.log(err.message);
        }
    }
    const openGitHub = () => {
        try {
            Linking.openURL(URL_GITHUB)
        } catch (err) {
            console.log(err.message);
        }
    }
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={[styles.flex1, styles.safeArea]}>
            <Header name={"Settings"} Right={() => Platform.OS === "ios" ? null : <View style={styles.buttonClose}>
                <CButtonClose width={30} height={30} stroke={"#F00"} onPress={goBack} />
            </View>} />
            <View style={[styles.flex1, styles.container,]}>
                <View style={styles.containerImage}>
                    <FastImage
                        style={styles.profileImage}
                        source={{
                            uri: URL_PROFILE_IMAGE,
                            priority: FastImage.priority.high
                        }} />
                </View>

                {/* GitHub Button */}
                <TouchableOpacity
                    onPress={openGitHub}
                    style={[styles.containerSocialNetwork, styles.flexRow, styles.alignCenter]}>
                    <View style={styles.mx5}>
                        <GitHubIcon width={40} height={40} stroke={"#ffffff"} />
                    </View>
                    <View style={styles.mx5}>

                        <CText numOfLines={1} style={styles.textSocialNetwork}>Erick Chavez</CText>
                        <CText numOfLines={1} style={styles.textSocialNetwork}>EriickChavez</CText>
                    </View>
                </TouchableOpacity>

                {/* Instagram Button */}
                <TouchableOpacity
                    onPress={openInstagram}
                    style={[styles.containerSocialNetwork, styles.flexRow, styles.alignCenter]}>
                    <View style={styles.mx5}>
                        <InstagramIcon width={40} height={40} stroke={"#ffffff"} />
                    </View>
                    <View style={styles.mx5}>
                        <CText numOfLines={1} style={styles.textSocialNetwork}>Eriick Chávez </CText>
                        <CText numOfLines={1} style={styles.textSocialNetwork}>(eriick_chavez)</CText>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerBottom}>
                    <CText numOfLines={1} style={styles.developerText}>Desarrollado por Erick Chavez</CText>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex1: {flex: 1},
    safeArea: {backgroundColor: "#FF0000"},
    container: {padding: '6%', backgroundColor: '#D8DEE9'},
    containerImage: {alignItems: 'center', paddingVertical: '10%'},
    flexRow: {flexDirection: 'row'},
    justifyCenter: {justifyContent: 'center'},
    alignCenter: {alignItems: 'center'},
    flexWrap: {flexWrap: 'wrap'},
    textSocialNetwork: {fontSize: 21, fontWeight: '600', color: '#E5E9F0'},
    containerSocialNetwork: {backgroundColor: '#ff0000', marginVertical: 5, paddingVertical: '5%', borderRadius: 10, paddingHorizontal: '1%'},
    mx5: {marginRight: 20, marginLeft: 10, },
    containerBottom: {position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center'},
    profileImage: {width: 150, height: 150, borderRadius: 100, borderWidth: 3, borderColor: '#FF0000'},
    developerText: {fontSize: 21, fontWeight: '600', color: '#FE3B1F'},
    buttonClose: {position: 'absolute', top: 0, right: 10},
})