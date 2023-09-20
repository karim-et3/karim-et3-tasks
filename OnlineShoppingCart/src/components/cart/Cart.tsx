import {View} from 'react-native';
import React from 'react';
import ListCartItems from './ListCartItems';
import {withLiteObserverAndTheme} from '../hoc';

const Cart = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCartItems />
    </View>
  );
};

export default withLiteObserverAndTheme(Cart);
