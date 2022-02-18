import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CText = ({children, numOfLines=2, style={}}) => <Text numberOfLines={numOfLines} style={[styles.textDescription, style]}>{children}</Text>

const styles = StyleSheet.create({textDescription:{color:'white'}})
export default CText;
