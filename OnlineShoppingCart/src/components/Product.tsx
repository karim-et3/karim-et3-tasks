import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react';
import cart from '../mobx/Cart';
import {TProduct, TaddProd} from '../types';
import {Shadow} from 'react-native-shadow-2';

const Product = ({product}: TProduct) => {
  const addToCart = (addProd: TaddProd) => {
    cart.addProductToCart(addProd);
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
        <Pressable
          style={{
            marginTop: 5,
            shadowColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            paddingVertical: 3,
            backgroundColor: 'white',
            marginHorizontal: 2,
          }}
          onPress={() => addToCart(product)}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: 'bold',
              letterSpacing: 0.25,
              color: '#0ea5e9',
            }}>
            Add
          </Text>
        </Pressable>
        <View
          style={{
            // display: 'flex',
            // flexDirection: 'column',
            // // gap: -3,
            paddingHorizontal: 3,
          }}>
          <Text style={{fontSize: 18, color: '#18181b', fontWeight: 'bold'}}>
            {product.price} $
          </Text>
          <Text numberOfLines={2}>{product.title}</Text>
        </View>
      </View>
    </Shadow>
  );
};

export default observer(Product);
