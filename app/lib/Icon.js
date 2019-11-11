import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from './Text';

export const Icon = (props) => {
  return <Text {...props} style={[styles.icon, props.style, props.size ? {fontSize: props.size} : null]}>{props.icon}</Text>
}

const styles = StyleSheet.create({
    icon: {
        fontFamily: 'Icons',
    }
}); 
