import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Text } from '../lib';

export const HeadLine = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.text}>{props.text}</Text>
            <TouchableOpacity>
                <Text style={styles.button}>მეტის ნახვა</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 20
   },
   text: {
       color: '#2B2B2B',
       fontSize: 17,
       fontFamily: 'Arial'
   },
   button: {
       color: '#FF971C',
       fontSize: 16,
       fontFamily: 'Arial'
   },
});
