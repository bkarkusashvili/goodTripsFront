import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Touchable, Icon } from '../lib';

export const FooterTabs = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Touchable style={styles.button} ripple={true} onPress={() => navigation.navigate('Home')}>
                <Icon icon='' style={[styles.icon, navigation.isFocused('Home') ? styles.iconActive : null]} />
            </Touchable>
            <Touchable style={styles.button} ripple={true} onPress={() => navigation.navigate('Category')}>
                <Icon icon='' style={[styles.icon, navigation.isFocused('Category') ? styles.iconActive : null]} />
            </Touchable>
            {/* <Touchable style={styles.button} ripple={true} onPress={() => navigation.navigate('Favorite')}>
                <Icon icon='' style={[styles.icon, navigation.isFocused('Favorite') ? styles.iconActive : null]} />
            </Touchable> */}
            <Touchable style={styles.button} ripple={true} onPress={() => navigation.navigate('Profile')}>
                {/* <Icon icon='' style={[styles.icon, navigation.isFocused('Profile') ? styles.iconActive : null]} /> */}
                <Icon icon='' style={[styles.icon, navigation.isFocused('Profile') ? styles.iconActive : null]} />
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
