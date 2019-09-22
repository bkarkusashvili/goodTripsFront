import React, { useEffect } from 'react';
import * as Font from 'expo-font';

import fontState, { FontStatus } from './app/store';

import Home from './app/views/Home';
import { FooterTabs } from './app/componenets';

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
      <Home />
      <FooterTabs />
    </FontStatus.Provider>
  );
}

export default App; 
