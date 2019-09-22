import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Touchable, Icon } from '../lib'; 

export const Tabs = () => {
    return (
        <View style={styles.container}>
            <Touchable style={[styles.button, styles.buttonActive]}>
                <Icon icon='' style={[styles.icon, styles.iconActive]} />
                <Text style={[styles.text, styles.textActive]}>სასტუმროები</Text>
            </Touchable>
            <Touchable style={styles.button}>
                <Icon icon='' style={[styles.icon]} />
                <Text style={styles.text}>გასაკეთებელი</Text>
            </Touchable>
            <Touchable style={styles.button}>
                <Icon icon='' style={[styles.icon]} />
                <Text style={styles.text}>რესტორნები</Text>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        marginHorizontal: -5
    },
    button: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        overflow: 'hidden',
        marginHorizontal: 5
    },
    buttonActive: {
        backgroundColor: '#FF971C',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Arial',
        color: '#A6ABB1'
    },
    textActive: {
        color: '#FFFFFF'
    },
    icon: {
        fontFamily: 'Icons',
        color: '#FF971C',
        fontSize: 26,
        marginBottom: 10
    },
    iconActive: {
        color: '#FFFFFF'
    }
});
