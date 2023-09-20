import {View} from 'react-native';
import React from 'react';
import ListProducts from './ListProducts';
import {withLiteObserverAndTheme} from '../hoc';

const Home = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginVertical: 10,
      }}>
      <ListProducts />
    </View>
  );
};

export default withLiteObserverAndTheme(Home);
