import {Image, Text, View} from 'react-native';
import React from 'react';
import cartStore from '../../mobx/Cart';
import {TProduct} from '../../types';
import {Shadow} from 'react-native-shadow-2';
import AddProductToCart from './AddProductToCart';
import {COLORS} from '../../constants';
import {withLiteObserverAndTheme} from '../hoc';

const Product = ({product}: {product: TProduct}) => {
  const addToCart = (addProd: TProduct) => {
    cartStore.addProductToCart(addProd);
  };

  return (
    <Shadow distance={3} paintInside={false}>
      <View
        style={{
          borderWidth: 0.5,
          borderRadius: 6,
          width: 110,
          height: 195,
          // paddingVertical: 3,
        }}>
        <Image
          source={product.image}
          style={{
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
            width: '100%',
            height: 95,
            resizeMode: 'cover',
            backgroundColor: COLORS.white,
          }}
        />
        <AddProductToCart addToCart={() => addToCart(product)} />
        <View style={{paddingHorizontal: 3}}>
          <Text style={{fontSize: 18, color: '#18181b', fontWeight: 'bold'}}>
            {product.price} $
          </Text>
          <Text
            numberOfLines={2}
            style={{color: COLORS.secondary, fontWeight: '500'}}>
            {product.title}
          </Text>
        </View>
      </View>
    </Shadow>
  );
};

export default withLiteObserverAndTheme(Product);
