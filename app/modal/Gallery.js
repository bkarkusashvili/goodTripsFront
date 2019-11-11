import React from 'react';
import { Modal, View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon as IconElement } from 'react-native-elements'

import { Touchable, Icon, Text } from '../lib';

const imageWidth = Math.round(Dimensions.get('window').width - 30);
const activeImage = 1;

export const Gallery = ({visible, close, title, images}) => {

    let smallScroll;
    
    console.log(smallScroll);

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
            </View>
            <View style={styles.galleryConatainer}>
                <ScrollView style={[styles.itemContainer, styles.bigConatainer]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {images.map((image, key) => (
                        <Image source={image} key={key} style={[styles.image, styles.bigImage]} />
                    ))}
                </ScrollView>
                <ScrollView ref={ref => smallScroll = ref} style={styles.itemContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {images.map((image, key) => (
                        <View key={key} style={styles.smallContainer}>
                            {activeImage === key && (
                                <IconElement name='sort-up' type='font-awesome' color='#FF971C' containerStyle={styles.imageIcon} />
                            )}
                            <TouchableOpacity onPress={() => scrollTo(2)} style={[styles.imageBorder, activeImage === key ? styles.imageBorderActive:null]}>
                                <Image source={image} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginBottom: 20
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

    galleryConatainer: {
        overflow: 'hidden',
        marginHorizontal: 15,
    },

    bigConatainer: {
        marginBottom: 15,
    },

    bigImage: {
        width: imageWidth,
        height: 400,
        marginHorizontal: 7.5,
        borderRadius: 20
    },

    itemContainer: {
        marginHorizontal: -7.5,
    },
    image: {
        width: 100,
        borderRadius: 8,
        height: 105,
    },
    imageBorder: {
        marginHorizontal: 7.5,
        width: 115,
        height: 120,
        justifyContent: 'center',
        marginTop: 8 ,
        alignItems: 'center',
    },
    imageBorderActive: {
        marginTop: 0,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#FF971C',
        borderStyle: 'solid'
    },

    imageIcon: {
        marginBottom: -16,
    }

});
