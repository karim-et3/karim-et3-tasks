import {Image, Text, View} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react';
import cartStore from '../mobx/Cart';
import {TProduct, TaddProd} from '../types';
import {Shadow} from 'react-native-shadow-2';
import AddProductToCart from './AddProductToCart';
import {colors} from '../styles';

const Product = ({product}: TProduct) => {
  const addToCart = (addProd: TaddProd) => {
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
            backgroundColor: 'white',
          }}
        />
        <AddProductToCart addToCart={() => addToCart(product)} />
        <View style={{paddingHorizontal: 3}}>
          <Text style={{fontSize: 18, color: '#18181b', fontWeight: 'bold'}}>
            {product.price} $
          </Text>
          <Text
            numberOfLines={2}
            style={{color: colors.secondary, fontWeight: '500'}}>
            {product.title}
          </Text>
        </View>
      </View>
    </Shadow>
  );
};

export default observer(Product);
