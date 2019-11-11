import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '../lib'

export const TextContent = (props) => {
    const inputLines = (props.lines || props.lines === 0) ? props.lines : 4;

    const [lines, setLines] = useState(inputLines);
    const [shadow, setShadow] = useState(inputLines !== 0);

    const totalLine = (e) => {
        // const fontSize = (props.style && props.style.lineHeight) || styles.text.lineHeight;
        // const height = e.nativeEvent.layout.height;
        // console.log(e.nativeEvent);
        
        // if (height < fontSize * inputLines) {
        //     setLines(0);
        //     setShadow(false);
        // }
    };

    return (
        <View>
            <Text 
                numberOfLines={lines} 
                style={[styles.text, {...props.style}]} 
                onPress={() => shadow ? setLines(lines ? 0 : inputLines) : null}
                onLayout={(e) => totalLine(e)}
            >{props.text || ''}
            </Text>
            {shadow && (
                <LinearGradient 
                    colors={['rgba(253,253,253,0.6)', 'rgba(253,253,253,1)']} 
                    style={[styles.textShadow, { display: lines ? 'flex':'none' }]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#99A1B3',
        fontSize: 16,
        fontFamily: 'Arial',
        lineHeight: 24
    },
    textShadow: {
        marginTop: -25,
        height: 25
    }
});