import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CText = ({children, numOfLines=2}) => <Text numberOfLines={numOfLines} style={styles.textDescription}>{children}</Text>

const styles = StyleSheet.create({textDescription:{color:'white'}})
export default CText;
