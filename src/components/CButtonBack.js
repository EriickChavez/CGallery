import React from 'react';
import {Pressable} from 'react-native';
import {View, StyleSheet} from 'react-native';
import Svg, {Polyline} from "react-native-svg";

const Cbuttonclose = (props) => {
    return (
        <Pressable onPress={() => props.onPress()}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
                {...props}
            >
                <Polyline points="15 18 9 12 15 6" />
            </Svg>
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default Cbuttonclose;




