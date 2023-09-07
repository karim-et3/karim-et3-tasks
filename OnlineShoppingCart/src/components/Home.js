import {StyleSheet, Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import product from '../../mobx/products';
import Product from './Product';
import Feather from 'react-native-vector-icons/Feather';

const Home = ({navigation}) => {
  return (
    <>
      {/* <View
        style={{
          height: 50,
          marginBottom: 10,
          backgroundColor: '#0ea5e9',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <Pressable>
          <Feather name="shopping-bag" style={{color: 'white', fontSize: 28}} />
        </Pressable>
      </View> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginVertical: 10,
        }}>
        {product.products.map(prod => (
          <Product product={prod} key={prod.id} />
        ))}
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
