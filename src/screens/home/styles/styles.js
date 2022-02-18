import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
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

export const homeItemStyles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingVertical:15,
        marginVertical:10
    }
})