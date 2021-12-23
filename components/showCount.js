import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, SIZES} from '../constants';
import {withAppContext} from '../context';
import Increment from './increment';

const ShowCount = React.memo(props => {
  const {
    store: {likeCount, commentCount},
  } = props;
  return (
    <View>
      <Text style={styles.sectionTitle}>Comment Count {commentCount}</Text>
      <Text style={styles.sectionTitle}>Like Count {likeCount} </Text>
      <Increment />
    </View>
  );
});

const styles = StyleSheet.create({
  sectionTitle: {
    ...FONTS.h1,
    textAlign: 'center',
    marginVertical: SIZES.padding
  },
});

export default withAppContext(ShowCount);
