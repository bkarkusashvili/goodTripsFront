import React from 'react';
import { View, StyleSheet } from 'react-native';
import { H3, Icon, Text } from '../lib';

export const ContactInfo = () => {
    const info = [
        {
            icon: '',
            label: 'ავტორი',
            value: 'ლევანი ქოთოლაშვილი'
        },
        {
            icon: '',
            label: 'მობილური',
            value: '(+995) 555 555 555'
        },
        {
            icon: '',
            label: 'ელ-ფოსტა',
            value: 'levani.qotolashvili@gmail.com'
        },
        {
            icon: '',
            label: 'ვებსაიტი',
            value: 'https://levanisart.com'
        },
    ];

    return (
        <View style={styles.container}>
            <H3 style={styles.title}>საკონტაქტო ინფორმაცია</H3>
            {info.map((item, key) => (
                <View key={key} style={styles.itemCont}>
                    <View style={styles.labelWrap}>
                        <Icon icon={item.icon} style={styles.icon} />
                        <Text style={styles.label}>{item.label}</Text>
                    </View>
                    <Text style={styles.value}>{item.value}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    itemCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    labelWrap: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        color: '#FF971C',
        fontSize: 14,
        marginRight: 10
    },
    label: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: '#FF971C'
    },
    value: {
        color: '#99A1B3',
        fontSize: 14,
        fontFamily: 'Arial'
    }
});
