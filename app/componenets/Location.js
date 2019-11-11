import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { H3, Text, Icon } from '../lib';

export const Location = () => {

    const initMap = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View>
            <H3 style={styles.title}>მდებარეობა</H3>
            <View style={styles.container}>
                <View style={styles.inner}>
                    <Icon icon='' style={styles.icon} />
                    <Text style={styles.address}>თბილისი, ბელიაშვილის 93</Text>
                </View>
                <View style={styles.map}>
                    <MapView style={styles.map} initialRegion={initMap}>
                        <Marker coordinate={initMap} />
                    </MapView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    map: {
        height: 127,
        borderRadius: 8,
        overflow: 'hidden'
    },
    icon: {
        marginRight: 10,
        color: '#A6ABB1'
    },
    address: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#A6ABB1'
    },
    title: {
        marginTop: 25,
    }
});
