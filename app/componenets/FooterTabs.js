import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Touchable, Icon } from '../lib';

export const FooterTabs = () => {
    return (
        <View style={styles.container}>
            <Touchable style={styles.button} ripple={true}>
                <Icon icon='' style={[styles.icon, styles.iconActive]} />
            </Touchable>
            <Touchable style={styles.button} ripple={true}>
                <Icon icon='' style={styles.icon} />
            </Touchable>
            <Touchable style={styles.button} ripple={true}>
                <Icon icon='' style={styles.icon} />
            </Touchable>
            <Touchable style={styles.button} ripple={true}>
                <Icon icon='' style={styles.icon} />
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF'
    },
    button: {
        padding: 20,
        borderRadius: 50,
        overflow: 'hidden'
    },
    icon: {
        fontSize: 16,
        color: '#C4C4C4',
    },
    iconActive: {
        color: '#077CFD',
    }
});
