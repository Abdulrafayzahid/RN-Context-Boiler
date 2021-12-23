import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {FONTS} from '../constants';
import Increment from './increment';

const ShowCount = React.memo(({
  likeCount,
  likeIncrement,
  commentIncrement,
}) => {
  const render = useRef(0);
  return (
    <View>
      <Text style={{...FONTS.h3}}> {likeCount} </Text>
      <Text style={{...FONTS.h3}}> Render {render.current++} </Text>
      <Increment likeIncrement={likeIncrement} commentIncrement={commentIncrement} />
    </View>
  );
})

export default ShowCount;
