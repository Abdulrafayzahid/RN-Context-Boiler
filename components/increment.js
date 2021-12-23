import React, {useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {appContext} from '../context';
import {
  INCREASE_COMMENT,
  INCREASE_LIKE,
} from '../context/appReducer/appReducerActions';

const Increment = React.memo(() => {
  const {dispatch} = useContext(appContext);
  const likeIncrement = () => {
    dispatch({type: INCREASE_LIKE});
  };
  const commentIncrement = () => {
    dispatch({type: INCREASE_COMMENT});
  };
  return (
    <View>
      <Button title="Like Increment" onPress={likeIncrement} />
      <Separator />
      <Button title="Comment Increment" onPress={commentIncrement} />
    </View>
  );
});

const Separator = () => (
  <View
    style={{
      marginVertical: 8,
      borderBottomColor: '#737373',
    }}
  />
);

export default Increment;
