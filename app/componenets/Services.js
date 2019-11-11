import React from 'react';
import { View, StyleSheet } from 'react-native';
import { H3, Text, Icon } from '../lib';

import { services } from '../../assets/services.json';

export const Services = () => {
    return (
        <View>
            <H3 style={styles.title}>რესტორნის სერვისები</H3>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    {services.map((item, key) => (
                        <View style={styles.itemWrap} key={key}>
                            <View style={styles.iconWrap}>
                                <Icon icon={item.icon} style={styles.icon} />
                            </View>
                            {item.title.split(' ').map((item, key) => (
                                <Text key={key} style={styles.itemText}>{item}</Text>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: -15
    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    itemWrap: {
        marginHorizontal: 3,
        alignItems: 'center',
        marginBottom: 20,
        width: 90
    },
    iconWrap: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEFEFE',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#FDFDFD',
        borderStyle: 'solid',
        marginBottom: 10,

        shadowColor: "#1B2B41",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    icon: {
        fontSize: 23,
        color: '#007AFF'
    },
    itemText: {
        fontFamily: 'Arial',
        fontSize: 12,
        justifyContent: 'center',
        color: '#A6ABB1',
    },
    title: {
        marginTop: 25,
    }
});
