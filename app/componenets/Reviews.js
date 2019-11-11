import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { H3, Text, Stars } from '../lib';
import { TextContent } from './TextContent';
import { AddReview } from './AddReview';

export const Reviews = (props) => {

    const text = `გავრცელებული მოსაზრებით, ლორემ იპსუმი 
    შემთხვევითი ტექსტი სულაც არაა. მისი 
    ფესვები ლათინური ლიტერატურიდან მოდის.`.replace(/[\t\n ]+/gm, ' ');

    const reviews = [1,2,3,4,5];    
    
    return (
        <View>
            <View style={styles.topLine}>
                <H3>შეფასებები</H3>
                <TouchableOpacity>
                    <Text style={styles.button}>ყველას ნახვა</Text>
                </TouchableOpacity>
            </View>
            {reviews.map((item, key) => (
                <View key={key} style={styles.itemWrap}>
                    <View style={styles.itemHeader}>
                        <Text style={styles.itemHeaderText}>სახელი და გვარი</Text>
                        <Text style={styles.itemHeaderDate}>27 აგვისტო</Text>
                    </View>
                    <Stars stars={item} style={styles.stars} />
                    <TextContent text={text} style={styles.itemText} lines={0} />
                </View>
            ))}
            <AddReview title={props.title} />
        </View>
    );
};

const styles = StyleSheet.create({
    topLine: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-between'
    },
    button: {
        color: '#FF971C',
        fontSize: 16,
        fontFamily: 'Arial'
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemHeaderText: {
        fontFamily: 'Arial',
        color: '#657385',
        fontSize: 16
    },
    itemHeaderDate: {
        fontFamily: 'Arial',
        color: '#969EAD',
        fontSize: 14
    },
    stars: {
        marginBottom: 12
    },
    itemWrap: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,

        shadowColor: "#1B2B41",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    itemText: {
        fontSize: 14,
        lineHeight: 20,
        justifyContent: 'center',
        color: '#99A1B3',
    },
});
