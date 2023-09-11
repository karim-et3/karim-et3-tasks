import {View} from 'react-native';
import React from 'react';
import ListProducts from './ListProducts';

const Home = () => {
  return (
    <View
      style={{
        display: 'flex',
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

export default Home;
