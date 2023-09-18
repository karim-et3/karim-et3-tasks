import {View, Text, Pressable} from 'react-native';
import React from 'react';
import cartStore from '../../mobx/Cart';
import {TProductDelete} from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {withLiteObserver, withLiteObserverAndTheme} from '../hoc';

const ProductDelete = ({product, COLORS}: TProductDelete) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text
        style={{
          color: 'black',
          padding: 8,
          fontWeight: '500',
          borderRadius: 4,
          backgroundColor: COLORS.white,
        }}>
        {product.quantity}
      </Text>
      <Pressable onPress={() => cartStore.deleteProduct(product)}>
        <FontAwesomeIcon icon="circle-minus" size={26} color={COLORS.error} />
      </Pressable>
    </View>
  );
};

export default withLiteObserverAndTheme(ProductDelete);
