import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { H3, Text, Stars } from '../lib';
import { Review } from '../modal';

export const AddReview = (props) => {
    const [stars, setStars] = useState(0);
    const [modal, setModal] = useState(true);

    const pressAction = (i) => {
        setStars(i);
        setModal(true);
    };

    return (
        <View>
            <H3>შეფასების დამატება</H3>
            <View style={styles.container}>
                <Text style={styles.text}>დააჭირეთ შესაფასებლად</Text>
                <Stars stars={0} onPress={(i) => pressAction(i)} />
            </View>
            <Review 
                title={props.title}
                visible={modal}
                close={setModal} 
                stars={stars} 
                setStars={pressAction} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: '#969EAD',
        marginRight: 10
    },
});
