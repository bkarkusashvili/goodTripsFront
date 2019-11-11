import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from './Text';

export const H3 = (props) => {
    return (
        <Text {...props} style={[styles.title, props.style]}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Arial',
        color: '#151515',
        fontSize: 18,
        marginBottom: 20
    }
});
