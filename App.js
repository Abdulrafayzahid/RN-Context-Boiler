/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ShowCount from './components/showCount';
import {FONTS} from './constants';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const likeIncrement = React.useCallback(() => {
    setLikeCount(prev => prev + 1);
  }, [setLikeCount]);


  const commentIncrement = React.useCallback(() => {
    setCommentCount(prev => prev + 1);
  }, [setCommentCount]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.sectionTitle}>commentCount {commentCount}</Text>
        <ShowCount
          likeCount={likeCount}
          likeIncrement={likeIncrement}
          commentIncrement={commentIncrement}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    ...FONTS.h1,
    textAlign: 'center',
  },
});

export default App;
