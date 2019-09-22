import React, { useContext } from 'react';
import { Modal, View, StyleSheet, TextInput } from 'react-native';

import { Touchable, Icon } from '../lib';
import { FontStatus } from '../store';
import { CityList } from '../componenets/CityList';

export const City = ({visible, close}) => {
    const fontsLoaded = useContext(FontStatus);    
    return (
        <Modal visible={visible} animationType="slide" hardwareAccelerated={true}>
            <View style={styles.container}>
                <Touchable style={styles.close} ripple={true} onPress={() => close(false)}>
                    <Icon icon='' />
                </Touchable>
                {fontsLoaded ? 
                    <View style={styles.inputWrap}>
                        <Icon icon='' style={styles.inputIcon} />
                        <TextInput 
                            style={styles.input} 
                            placeholder='ქალაქის არჩევა' 
                            placeholderTextColor='#A6AAAD' 
                            returnKeyType='search'
                        />
                    </View>
                : null}
                <CityList />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 48,
        marginBottom: 70
    },
    close: {
        alignSelf: 'flex-end',
        marginRight: 5,
        marginBottom: 25,
        overflow: 'hidden',
        padding: 10,
        color: '#050854',
        fontSize: 16,
    },
    inputWrap: {
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputIcon: {
        marginLeft: 18,
        marginRight: 8,
        color: '#A6AAAD',
    },
    input: {
        flex: 1,
        paddingRight: 18,
        paddingVertical: 12,
        fontSize: 15,
        color: '#A6AAAD',
        fontFamily: 'Arial',
    }
});
