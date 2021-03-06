import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Svg, {Line} from "react-native-svg";

const CButtonSettings = (props) => (
  <Pressable onPress={() => props.onPress()} style={styles.button}>
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
      className="feather feather-sliders"
      {...props}
    >
      <Line x1={4} y1={21} x2={4} y2={14} />
      <Line x1={4} y1={10} x2={4} y2={3} />
      <Line x1={12} y1={21} x2={12} y2={12} />
      <Line x1={12} y1={8} x2={12} y2={3} />
      <Line x1={20} y1={21} x2={20} y2={16} />
      <Line x1={20} y1={12} x2={20} y2={3} />
      <Line x1={1} y1={14} x2={7} y2={14} />
      <Line x1={9} y1={8} x2={15} y2={8} />
      <Line x1={17} y1={16} x2={23} y2={16} />
    </Svg>
  </Pressable>

);

const styles = StyleSheet.create({
  button:{
      height:50,
      justifyContent:'center',
      alignItems:'center',
  }
})

export default CButtonSettings;

