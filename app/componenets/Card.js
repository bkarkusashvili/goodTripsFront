import React from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

import { Text, Icon } from '../lib';

export const Card = ({data: items, type}) => {
    return (
        <>
        {items.map((item, index) => (
            <View style={[styles.container, styles[type], index === items.length - 1 ? styles.last : null]} key={item.id}>
                {type === 'short' ? 
                    <Image style={styles.imageSmall} source={{uri: item.image}} /> :
                type === 'medium' || type === 'large' ?
                    <ImageBackground style={styles.imageBig} source={{uri: item.image}}>
                        <Icon icon='' style={[styles.heart, styles.heartTop, item.favorite ? styles.heartActive : null ]} />
                    </ImageBackground> : null
                }
                <View style={styles.content}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{item.title}</Text>
                        {item.address ? <Text style={styles.subTitle}>{item.address}</Text> : null}
                        {item.price ? <Text style={styles.price}>₾{item.price}</Text> : null}
                    </View>
                    <View style={styles.cardFooter}>
                        <View style={styles.starWrap}>
                            <Icon icon='' style={[styles.star, item.stars >= 1 ? styles.starActive : null]} />
                            <Icon icon='' style={[styles.star, item.stars >= 2 ? styles.starActive : null]} />
                            <Icon icon='' style={[styles.star, item.stars >= 3 ? styles.starActive : null]} />
                            <Icon icon='' style={[styles.star, item.stars >= 4 ? styles.starActive : null]} />
                            <Icon icon='' style={[styles.star, item.stars >= 5 ? styles.starActive : null]} />
                            <Text style={[styles.reviews]}>({item.starsCount})</Text>
                        </View>
                        {/* <Icon icon='' style={[styles.heart]} /> */}
                    </View>
                </View>
            </View>
        ))}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingBottom: 10,
        marginRight: 15,
        overflow: 'hidden'
    },
    short: {
        width: 158,
        borderRadius: 15,
    },
    medium: {
        width: 150,
    },
    large: {
        width: 220,
    },
    last: {
        marginRight: 0
    },
    imageBig: {
        width: '100%',
        height: 140,
        marginBottom: 10,
        alignItems: 'flex-end'
    },
    imageSmall: {
        height: 90,
        margin: 11,
        borderRadius: 15,
        marginBottom: 15,
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },

    cardHeader: {
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 12,
        fontFamily: 'Arial',
        marginBottom: 3,
        color: '#0E1B41',
    },
    subTitle: {
        fontSize: 12,
        fontFamily: 'Arial',
        marginBottom: 3,
        color: '#B4B9BF',
    },
    price: {
        fontSize: 13,
        color: '#FF646A',
        marginBottom: 3,
        fontFamily: 'Arial'
    },

    cardFooter: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    starWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        fontFamily: 'Icons',
        color: '#E1E7EB',
        marginRight: 4
    },
    reviews: {
        fontSize: 11,
        color: '#99A1B3',
    },
    starActive: {
        color: '#FF971C'
    },
    heart: {
        fontFamily: 'Icons',
        color: '#E8EAEB',
    },
    heartActive: {
        color: '#FF646A',
    },
    heartTop: {
        marginTop: 10,
        marginRight: 10,
    }
});