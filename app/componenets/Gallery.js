import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { H3 } from '../lib';

import { Gallery as GalleryModal } from '../modal';

export const Gallery = ({title}) => {
    const [galleryModal, setGalleryModal] = useState(true);

    const mainBG = require('../../assets/images/Tbilisi-Georgia.jpg');
    const images = [mainBG, mainBG, mainBG, mainBG, mainBG, mainBG, mainBG];

    return (
        <View>
            <H3 style={styles.title}>სურათები</H3>
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                {images.map((image, key) => (
                    <TouchableOpacity key={key} onPress={() => setGalleryModal(true)}>
                        <Image source={image} style={styles.image} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <GalleryModal images={images} title={title} visible={galleryModal} close={setGalleryModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -7.5,
    },
    title: {
        marginTop: 25,
    },
    image: {
        width: 100,
        marginHorizontal: 7.5,
        borderRadius: 8,
        height: 105
    }
});
