import {Text, View} from 'react-native';
import React from 'react';
import {withLiteObserverAndTheme} from '../hoc';

const HomeHeaderTitle = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          color: 'white',
          fontWeight: 'bold',
          position: 'absolute',
          left: '33%',
        }}>
        Home
      </Text>
    </View>
  );
};

export default withLiteObserverAndTheme(HomeHeaderTitle);
