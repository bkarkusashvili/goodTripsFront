import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import { Text } from '../lib';

export const Dictionary = ({text}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Image style={styles.image} source={require('../../assets/images/geo.png')} />
                <Text style={styles.text}>{text.geo}</Text>
            </View>
            <Divider style={{ backgroundColor: '#F7F7F7' }} />
            <View style={styles.wrap}>
                <Image style={styles.image} source={require('../../assets/images/eng.png')} />
                <Text style={styles.text}>{text.eng}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 15
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    image: {
        width: 18,
        height: 12,
        marginRight: 10
    },
    text: {
        fontSize: 13,
        color: '#373565',
        fontFamily: 'Arial'
    }
});
