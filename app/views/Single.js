import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { Icon, Touchable, Text, Stars } from '../lib'

import { TextContent, Gallery, ContactInfo, Location, Services, Menus } from '../componenets';

const Single = (props) => {

    const text = `ქობულეთის სასტუმრო 'Excess/ ექსესი' 
    გთავაზობთ ფასდაკლებას ნომრებზე ზღვის 
    ხედებით! შეიძინეთ ვაუჩერი ჩამოსაშლელი 
    სიიდან და მიიღეთ 38%-იანი დანაზოგი
    ქობულეთის სასტუმრო 'Excess/ ექსესი' 
    გთავაზობთ ფასდაკლებას ნომრებზე ზღვის 
    ხედებით! შეიძინეთ ვაუჩერი ჩამოსაშლელი 
    სიიდან და მიიღეთ 38%-იანი დანაზოგი
    ქობულეთის სასტუმრო 'Excess/ ექსესი' 
    გთავაზობთ ფასდაკლებას ნომრებზე ზღვის 
    ხედებით! შეიძინეთ ვაუჩერი ჩამოსაშლელი 
    სიიდან და მიიღეთ 38%-იანი დანაზოგი`.replace(/[\t\n ]+/gm, ' ');
    const item = { stars: 4 };
    const title = 'სასტუმრო ექსესი';

    const mainBG = require('../../assets/images/Tbilisi-Georgia.jpg');
    return (
        <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={styles.headerImage} source={mainBG}>
                <View style={styles.backIconWrap}>
                    <Touchable onPress={() => props.navigation.goBack() || props.navigation.navigate('Home')}>
                        <Icon icon='' style={styles.backIcon} />
                    </Touchable>
                </View>
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.starWrap}>
                    <Text style={styles.score}>4.9</Text>
                    <Text style={[styles.score, styles.scoreSmall]}>/5</Text>
                    <Stars stars={item.stars} color='#FFEBD2' />
                </View>
                <TextContent text={text} />
                <Gallery title={title} />
                <ContactInfo />
                <Location />
                <Services />
                <Menus />
            </View>
        </ScrollView>
    );
}

export default Single;

const styles = StyleSheet.create({
   headerImage: {
       paddingTop: 40,
       paddingLeft: 20,
       height: 400,
       alignItems: 'flex-start',
       justifyContent: 'flex-start'
   },
   backIconWrap: {
        borderRadius: 30,
        overflow: 'hidden'
   },
   backIcon: {
       padding: 10,
       fontSize: 16,
       color: '#FFFFFF'
   },
   contentContainer: {
        marginTop: -30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FDFDFD'
   },

   title: {
       fontSize: 21,
       color: '#020552',
       fontFamily: 'Mrgvlovani',
       marginBottom: 7,
   },

   score: {
       marginTop: -5,
       fontFamily: 'Arial',
       fontSize: 26,
       color: '#007AFF',
   },
   scoreSmall: {
       marginTop: 0,
       fontSize: 18,
       marginRight: 10,
   },
   starWrap: {
       flexDirection: 'row',
       alignItems: 'center'
   }
});
