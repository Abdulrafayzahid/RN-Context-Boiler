import React, { useRef } from 'react';
import {Button, Text, View} from 'react-native';

const Increment = React.memo(({likeIncrement,commentIncrement}) => {
  const render = useRef(0);

  return (
    <View>
      <Text>render {render.current++}</Text>
      <Button title="likeIncrement" onPress={likeIncrement} />
      <Button title="commentIncrement" onPress={commentIncrement} />
    </View>
  );
})

export default Increment;
