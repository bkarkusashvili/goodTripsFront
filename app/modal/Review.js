import React, { useContext, useState } from 'react';
import { Modal, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Touchable, Icon, Text, Stars, DatePicker } from '../lib';
import { FontStatus } from '../store';

export const Review = (props) => {
    const fontsLoaded = useContext(FontStatus);
    const [show, setShow] = useState(true);
    const [date, setDate] = useState('აირჩიე დრო');
    const { visible, close, title, stars, setStars } = props;

    const updateDate = (event, eventDate) => {
        eventDate = eventDate || date;
        setShow(Platform.OS === 'ios' ? true : false);
        setDate(eventDate);
        console.log(eventDate);
    };

    return (
        <Modal visible={visible} animationType="slide" hardwareAccelerated={true}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.backIconWrap}>
                        <Touchable onPress={() => close(false)}>
                            <Icon icon='' style={styles.backIcon} />
                        </Touchable>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={{width: 35}} />
                </View>
                <View style={styles.innerContainer}>
                    <View style={[styles.box, styles.boxReview]}>
                        <Text style={styles.boxReviwText}>ძალიან კარგი</Text>
                        <Stars stars={stars} onPress={(i) => setStars(i)} />
                    </View>
                    <View style={[styles.box, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <Text style={styles.boxText}>ვიზიტის დრო</Text>
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <Text style={styles.boxDate}>{date}</Text>
                            {/* <Text style={styles.boxDate}>date</Text> */}
                        </TouchableOpacity>
                    </View>
                    {fontsLoaded ? 
                        <View style={styles.inputWrap}>
                            <TextInput 
                                style={styles.input} 
                                placeholder='სახელი და გვარი' 
                                placeholderTextColor='#A6AAAD'
                            />
                        </View>
                    : null}
                </View>
            </View>
            <DatePicker show={show} setShow={setShow} onSelect={(date => setDate(date))} />
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    backIconWrap: {
        borderRadius: 30,
        overflow: 'hidden'
    },
    backIcon: {
       padding: 10,
       fontSize: 16,
       color: '#020552'
    },
    headerContainer: {
        marginBottom: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 5,
        fontFamily: 'Mrgvlovani',
        fontSize: 18,
        color: '#020552',
    },

    innerContainer: {
        flex: 1,
        padding: 30,
        backgroundColor: '#FDFDFD',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    box: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,

        shadowColor: "#1B2B41",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    boxReview: {
        alignItems: 'center'
    },
    boxReviwText: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#A6ABB1',
        marginBottom: 8
    },
    boxText: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#4E4E4E'
    },
    boxDate: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#FF971C'
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
