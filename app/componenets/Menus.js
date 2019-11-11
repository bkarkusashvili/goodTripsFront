import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { H3, Text, Icon, Touchable } from '../lib';

export const Menus = () => {

    const mainBG = require('../../assets/images/Tbilisi-Georgia.jpg');

    return (
        <View>
            <H3 style={styles.title}>მენიუ</H3>
            <View style={styles.container}>

                <View style={styles.outerContainer}>
                    <Touchable style={styles.wrap}>
                        <Text style={styles.text}>ცხელი კერძები</Text>
                        <Icon icon='' style={[styles.icon, styles.active]} />
                    </Touchable>
                    <View style={styles.innerContainer}>
                        <View style={styles.innerWrap}>
                            <Image source={mainBG} style={styles.image} />
                            <View style={{flex: 1}}>
                                <View style={styles.itemHead}>
                                    <Text style={styles.itemName}>წიწილა ტაბაკა</Text>
                                    <Text style={styles.price}>₾15.00</Text>
                                </View>
                                <Text style={styles.itemCount}>3 პორცია</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        color: '#FF971C'
    },
    active: {
        transform: [{ rotate: '-90deg' }] 
    },
    text: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#FF971C'
    },
    title: {
        marginTop: 25,
    },
    outerContainer: {
        marginBottom: 15,
    },
    innerContainer: {
        backgroundColor: '#FFFFFF',
    },
    innerWrap: {
        padding: 15,
        borderTopColor: '#FAFAFA',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        marginRight: 15,
        height: 60,
        width: 55,
        borderRadius: 15
    },
    itemName: {
        color: '#636363',
        fontSize: 15,
        fontFamily: 'Arial'
    },
    itemCount: {
        color: '#A0A0A0',
        fontSize: 14,
        fontFamily: 'Arial'
    },
    price: {
        fontFamily: 'Arial',
        color: '#FF646A',
        fontSize: 15
    },
    itemHead: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
