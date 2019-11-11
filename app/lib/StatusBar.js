import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export const StatusBar = () => {
    return (
        <View>
            <View style={styles.statusBar} />
        </View>
    );
};

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'transparent',
        height: Constants.statusBarHeight,
    }
});
