import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Font from 'expo-font';

import fontState, { FontStatus } from './app/store';

import Home from './app/views/Home';
import Single from './app/views/Single';
import Profile from './app/views/Profile';
import Category from './app/views/Category';
import { FooterTabs } from './app/componenets';

const AppNavigator = createBottomTabNavigator({ 
  Home: { screen: Home },
  Single: { screen: Single },
  Profile: { screen: Profile },
  Category: { screen: Category }
},{
  initialRouteName: 'Single',
  defaultNavigationOptions: { header: null },
  tabBarComponent: FooterTabs
});
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const [fontsLoaded, setFontStatus] = fontState(false);
  useEffect(() => {
    (async() => {
      await Font.loadAsync({
        'Arial': require('./assets/fonts/BPG_Arial_0.ttf'),
        'Mrgvlovani': require('./assets/fonts/bpg_mrgvlovani_caps.ttf'),
        'Icons': require('./assets/fonts/good-trips.ttf'),
      });
      setFontStatus(true);
    })();
  }, []);

  return (
    <FontStatus.Provider value={fontsLoaded}>
      <AppContainer />
    </FontStatus.Provider>
  );
}

export default App; 
