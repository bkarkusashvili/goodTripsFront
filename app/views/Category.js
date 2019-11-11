import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { Button, Icon as IconEl } from 'react-native-elements';

import { FontStatus } from '../store';
import { Touchable, Text, Icon } from '../lib';
import { Tabs, HeadLine, Dictionary, Card } from '../componenets';
import { City } from '../modal';

import data from '../../assets/data.json';

const Home = (props) => {
    const [cityModal, setCityModal] = useState(false);
    const fontsLoaded = useContext(FontStatus);
    const mainBG = require('../../assets/images/Tbilisi-Georgia.jpg');

    useEffect(() => {
        StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setTranslucent(false);
      }, []);

    return (
        <>
            <StatusBar />
            <View style={styles.headerContainer}>
                <View style={styles.backIconWrap}>
                    <Touchable onPress={() => close(false)}>
                        <Icon icon='' style={styles.backIcon} />
                    </Touchable>
                </View>
                {fontsLoaded ? (
                <Button iconRight buttonStyle={styles.headerButton} onPress={() => setCityModal(true)}
                    containerStyle={styles.headerContainer} titleStyle={styles.headerText} title="თბილისი"    
                    icon={<IconEl name="chevron-down" size={15} type='font-awesome' color="#020552" />}
                />
                ) : null}
                <Text style={{width: 35}} />
            </View>
            <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    {/* ლექსიკონი */}
                    <HeadLine text={'ლექსიკონი'}  more={false} />
                    <Dictionary text={{geo: 'დღიური ტურები', eng: 'Day Trips'}} />
                    <Dictionary text={{geo: 'საუკეთესო რესტორნები თბილისში', eng: 'Best Restaurants In Tbilisi'}} />
                    {/* ლექსიკონი */}
                    {/* Trending Foods */}
                    <HeadLine text={'Trending Foods'} more={false} />
                    <View style={styles.innerContainer}>
                        <Card type="short" horizontal={false} data={data.trendingFoods} single='trendFood' navigation={props.navigation} />
                    </View>
                    <HeadLine text={'რესტორნები'} more={false} />
                    <View style={styles.innerContainer}>
                        <Card type="large" horizontal={false} data={data.foods} single='food' navigation={props.navigation} />
                    </View>
                    <HeadLine text={'Trending Places'} more={false} />
                    <View style={styles.innerContainer}>
                        <Card type="short" horizontal={false} data={data.trendingFoods} single='trendPlace' navigation={props.navigation} />
                    </View>
                    <HeadLine text={'სასტუმროები'} more={false} />
                    <View style={styles.innerContainer}>
                        <Card type="medium" horizontal={false} data={data.trendingFoods} single='hotel' navigation={props.navigation} />
                    </View>
                    <HeadLine text={'ღირსშესანიშნაობები'} more={false} />
                    <View style={styles.innerContainer}>
                        <Card type="medium" horizontal={false} data={data.trendingFoods} single='event' navigation={props.navigation} />
                    </View>
                    {/* Trending Foods */}
                    <City visible={cityModal} close={setCityModal} />
                </View>
            </ScrollView>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
   headerImage: {
       height: 185,
       alignItems: 'center',
       justifyContent: 'center'
   },
   headerButton: {
       borderRadius: 50,
       backgroundColor: '#FFFFFF',
    },
    headerText: {
       paddingTop: 7,
       borderRadius: 50,
       color: '#020552',
       marginRight: 10,
       fontSize: 18,
       fontFamily: 'Mrgvlovani'
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

   contentContainer: {
        marginTop: -30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FDFDFD'
   },
   innerContainer: {
       flexDirection: 'row',
       flexWrap: 'wrap'
   },
});
