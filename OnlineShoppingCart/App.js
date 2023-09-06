import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import product from './mobx/products';
import Product from './src/components/Product';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 3,
        backgroundColor: '#f9fafb',
        marginVertical: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {product.products.map(prod => (
          <Product product={prod} key={prod.id} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
