import {Text, View} from 'react-native';
import React from 'react';
import {TCOLORS} from '../../types';
import {withLiteObserverAndTheme} from '../hoc';

const EmptyCart = ({COLORS}: {COLORS: TCOLORS}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          color: COLORS.secondary,
          fontWeight: '600',
        }}>
        Cart is empty
      </Text>
    </View>
  );
};

export default withLiteObserverAndTheme(EmptyCart);
