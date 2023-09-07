import {StyleSheet, View} from 'react-native';
import React from 'react';
import product from '../../mobx/products';
import Product from './Product';

const Home = () => {
  return (
    <View style={styles.container}>
      {product.products.map(prod => (
        <Product product={prod} key={prod.id} />
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
});
