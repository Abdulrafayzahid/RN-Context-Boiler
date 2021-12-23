/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, useColorScheme
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import ShowCount from './components/showCount';
import { AppProvider } from './context';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <ShowCount />
        </ScrollView>
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
