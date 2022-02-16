import React from 'react';
import {Pressable} from 'react-native';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Line} from "react-native-svg";

const Cbuttonclose = (props) => {
    return (
        <Pressable onPress={()=>props.onPress()} style={styles.button}>
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
                className="feather feather-x-circle"
                {...props}
            >
                <Circle cx={12} cy={12} r={10} />
                <Line x1={15} y1={9} x2={9} y2={15} />
                <Line x1={9} y1={9} x2={15} y2={15} />
            </Svg>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Cbuttonclose;




