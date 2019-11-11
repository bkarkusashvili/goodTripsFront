import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from './Icon';

export const Stars = (props) => {
  const [stars, setStars] = useState(props.stars);
  const items = [1,2,3,4,5];

  const pressAction = (item) => {
    setStars(item);
    return props.onPress(item);
  };

  return (
    <View style={[styles.starWrap, {...props.style}]}>
        {items.map(item => (
            <Icon
                key={item} 
                icon='' 
                onPress={() => props.onPress ? pressAction(item) : null} 
                style={[styles.star, props.color ? { color: props.color } : null, stars >= item ? styles.starActive : null]}
            />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
    starWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        color: '#E1E7EB',
        marginRight: 4
    },
    starActive: {
        color: '#FF971C'
    }
}); 
