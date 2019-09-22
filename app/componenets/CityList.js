import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { Icon, Text } from '../lib';

import { cities as items } from '../../assets/data.json';

export const CityList = () => {
    
    const icons = {
        city: '',
        hotel: '',
        location: '',
    };
    return (
        <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
            {items.map((item, key) => (
                <View style={styles.container} key={item.id}>
                    <Icon icon={icons[item.type] || icons.city} style={styles.icon} />
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.address}>{item.address}</Text>
                        {key < items.length - 1 && <Divider style={styles.line} />}
                    </View>
                </View>
            ))}
            <Text style={styles.lastSeen}>ბოლოს ნანახი</Text>
            {items.map((item, key) => (
                <View style={styles.container} key={item.id}>
                    <Icon icon={icons[item.type] || icons.city} style={styles.icon} />
                    <View style={{width: '100%'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.address}>{item.address}</Text>
                        {key < items.length - 1 && <Divider style={styles.line} />}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    line: {
        backgroundColor: '#F8F9FA',
        marginVertical: 15,
    },
    wrap: {
        marginVertical: 25,
    },
    icon: {
        marginTop: 10,
        marginRight: 20,
        fontSize: 16,
        color: '#FF971C'
    },
    title: {
        fontSize: 14,
        fontFamily: 'Arial',
        marginBottom: 3,
        color: '#0E1B41',
    },
    address: {
        fontSize: 12,
        fontFamily: 'Arial',
        marginBottom: 3,
        color: '#B4B9BF',
    },
    lastSeen: {
        fontSize: 15,
        color: '#9E9EA3',
        fontFamily: 'Arial',
        marginVertical: 25
    }
});
